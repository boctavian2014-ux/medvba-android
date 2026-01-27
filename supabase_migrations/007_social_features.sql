-- Migration: Social Features (Blocked Users, Reports, Achievements)
-- Created: 2026-01-15

-- ============================================
-- 1. BLOCKED USERS TABLE
-- ============================================

CREATE TABLE blocked_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  blocked_user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  
  -- Ensure user can't block the same person twice
  CONSTRAINT unique_block UNIQUE (user_id, blocked_user_id),
  -- Prevent self-blocking
  CONSTRAINT no_self_block CHECK (user_id != blocked_user_id)
);

-- Indexes for blocked_users
CREATE INDEX idx_blocked_users_user_id ON blocked_users(user_id);
CREATE INDEX idx_blocked_users_blocked_user_id ON blocked_users(blocked_user_id);

-- Comments
COMMENT ON TABLE blocked_users IS 'Tracks which users have blocked each other';
COMMENT ON COLUMN blocked_users.user_id IS 'The user who initiated the block';
COMMENT ON COLUMN blocked_users.blocked_user_id IS 'The user who was blocked';


-- ============================================
-- 2. USER REPORTS TABLE
-- ============================================

CREATE TABLE user_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  reported_user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  reason TEXT NOT NULL CHECK (reason IN ('spam', 'harassment', 'inappropriate_content', 'fake_profile', 'other')),
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'resolved', 'dismissed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  
  -- Prevent self-reporting
  CONSTRAINT no_self_report CHECK (reporter_id != reported_user_id)
);

-- Indexes for user_reports
CREATE INDEX idx_user_reports_reporter_id ON user_reports(reporter_id);
CREATE INDEX idx_user_reports_reported_user_id ON user_reports(reported_user_id);
CREATE INDEX idx_user_reports_status ON user_reports(status);
CREATE INDEX idx_user_reports_created_at ON user_reports(created_at DESC);

-- Comments
COMMENT ON TABLE user_reports IS 'User reports for inappropriate behavior';
COMMENT ON COLUMN user_reports.reporter_id IS 'User who submitted the report';
COMMENT ON COLUMN user_reports.reported_user_id IS 'User being reported';
COMMENT ON COLUMN user_reports.reason IS 'Category of the report';
COMMENT ON COLUMN user_reports.status IS 'Current status of the report';


-- ============================================
-- 3. USER ACHIEVEMENTS TABLE
-- ============================================

CREATE TABLE user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  achievement_type TEXT NOT NULL CHECK (achievement_type IN (
    'first_quiz', 'quiz_master', 'perfect_score',
    'streak_7', 'streak_30', 'streak_100',
    'questions_100', 'questions_500', 'questions_1000',
    'social_butterfly', 'helpful_tutor', 'room_creator',
    'early_bird', 'night_owl', 'weekend_warrior', 'quiz_completed_10'
  )),
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  
  -- User can only earn each achievement once
  CONSTRAINT unique_achievement UNIQUE (user_id, achievement_type)
);

-- Indexes for user_achievements
CREATE INDEX idx_user_achievements_user_id ON user_achievements(user_id);
CREATE INDEX idx_user_achievements_type ON user_achievements(achievement_type);
CREATE INDEX idx_user_achievements_earned_at ON user_achievements(earned_at DESC);
CREATE INDEX idx_user_achievements_metadata ON user_achievements USING gin(metadata);

-- Comments
COMMENT ON TABLE user_achievements IS 'User achievements and badges';
COMMENT ON COLUMN user_achievements.achievement_type IS 'Type of achievement earned';
COMMENT ON COLUMN user_achievements.metadata IS 'Additional data like score, streak count, etc.';


-- ============================================
-- 4. TRIGGERS FOR UPDATED_AT
-- ============================================

-- Trigger function (create if doesn't exist)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to user_reports
CREATE TRIGGER update_user_reports_updated_at
  BEFORE UPDATE ON user_reports
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();


-- ============================================
-- 5. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS
ALTER TABLE blocked_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;


-- BLOCKED USERS POLICIES
-- Users can see blocks they created
CREATE POLICY "Users can view their own blocks"
  ON blocked_users FOR SELECT
  USING (auth.uid() = user_id);

-- Users can create blocks
CREATE POLICY "Users can create blocks"
  ON blocked_users FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can delete their own blocks (unblock)
CREATE POLICY "Users can delete their own blocks"
  ON blocked_users FOR DELETE
  USING (auth.uid() = user_id);


-- USER REPORTS POLICIES
-- Users can see reports they submitted
CREATE POLICY "Users can view their submitted reports"
  ON user_reports FOR SELECT
  USING (auth.uid() = reporter_id);

-- Users can create reports
CREATE POLICY "Users can create reports"
  ON user_reports FOR INSERT
  WITH CHECK (auth.uid() = reporter_id);

-- Note: Only admins should update/delete reports (implement admin role separately)


-- USER ACHIEVEMENTS POLICIES
-- Users can see their own achievements
CREATE POLICY "Users can view their own achievements"
  ON user_achievements FOR SELECT
  USING (auth.uid() = user_id);

-- Users can see other users' achievements (for profile viewing)
CREATE POLICY "Users can view others achievements"
  ON user_achievements FOR SELECT
  USING (true);

-- Only system/backend can insert achievements
CREATE POLICY "System can insert achievements"
  ON user_achievements FOR INSERT
  WITH CHECK (true);

-- Prevent manual updates/deletes (achievements are permanent)
-- No UPDATE or DELETE policies = users can't modify achievements


-- ============================================
-- 6. HELPER FUNCTIONS
-- ============================================

-- Function to check if user A has blocked user B
CREATE OR REPLACE FUNCTION is_user_blocked(user_a UUID, user_b UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM blocked_users
    WHERE (user_id = user_a AND blocked_user_id = user_b)
       OR (user_id = user_b AND blocked_user_id = user_a)
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get achievement count for a user
CREATE OR REPLACE FUNCTION get_achievement_count(target_user_id UUID)
RETURNS INTEGER AS $$
BEGIN
  RETURN (
    SELECT COUNT(*) FROM user_achievements
    WHERE user_id = target_user_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to grant achievement (idempotent)
CREATE OR REPLACE FUNCTION grant_achievement(
  target_user_id UUID,
  achievement_name TEXT,
  achievement_metadata JSONB DEFAULT '{}'::jsonb
)
RETURNS UUID AS $$
DECLARE
  achievement_id UUID;
BEGIN
  INSERT INTO user_achievements (user_id, achievement_type, metadata)
  VALUES (target_user_id, achievement_name, achievement_metadata)
  ON CONFLICT (user_id, achievement_type) DO NOTHING
  RETURNING id INTO achievement_id;
  
  RETURN achievement_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant achievement for the current authenticated user
CREATE OR REPLACE FUNCTION public.grant_my_achievement(p_achievement text)
RETURNS public.user_achievements
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid := (SELECT auth.uid());
  v_row public.user_achievements;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  INSERT INTO public.user_achievements (user_id, achievement_type)
  VALUES (v_uid, p_achievement)
  ON CONFLICT (user_id, achievement_type)
  DO UPDATE SET earned_at = public.user_achievements.earned_at
  RETURNING * INTO v_row;

  RETURN v_row;
END;
$$;

REVOKE ALL ON FUNCTION public.grant_my_achievement(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.grant_my_achievement(text) TO authenticated;


-- ============================================
-- 7. SAMPLE DATA (for testing - remove in production)
-- ============================================

-- Uncomment to insert sample achievements types documentation
/*
INSERT INTO user_achievements (user_id, achievement_type, metadata)
VALUES
  ('00000000-0000-0000-0000-000000000000', 'first_quiz', '{"quiz_id": "bones_axial", "score": 80}'::jsonb),
  ('00000000-0000-0000-0000-000000000000', 'streak_7', '{"streak_count": 7}'::jsonb),
  ('00000000-0000-0000-0000-000000000000', 'questions_100', '{"total_questions": 125}'::jsonb)
ON CONFLICT DO NOTHING;
*/