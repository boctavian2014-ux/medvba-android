-- User Achievements Table
CREATE TABLE IF NOT EXISTS user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  achievement_type TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, achievement_type)
);

CREATE INDEX IF NOT EXISTS idx_user_achievements_user_id ON user_achievements(user_id);
CREATE INDEX IF NOT EXISTS idx_user_achievements_earned_at ON user_achievements(earned_at DESC);

-- RLS Policies for user_achievements
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own achievements" ON user_achievements;
CREATE POLICY "Users can view their own achievements"
  ON user_achievements FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view all achievements for leaderboard" ON user_achievements;
CREATE POLICY "Users can view all achievements for leaderboard"
  ON user_achievements FOR SELECT
  USING (true);

-- Grant Achievement Function
CREATE OR REPLACE FUNCTION grant_achievement(
  target_user_id UUID,
  achievement_name TEXT,
  achievement_metadata JSONB DEFAULT '{}'::jsonb
) RETURNS JSONB AS $$
DECLARE
  result JSONB;
  existing_achievement UUID;
BEGIN
  -- Check if achievement already exists
  SELECT id INTO existing_achievement
  FROM user_achievements
  WHERE user_id = target_user_id
    AND achievement_type = achievement_name;

  -- If already exists, return existing
  IF existing_achievement IS NOT NULL THEN
    RETURN jsonb_build_object(
      'success', true,
      'already_earned', true,
      'achievement_id', existing_achievement
    );
  END IF;

  -- Insert new achievement
  INSERT INTO user_achievements (user_id, achievement_type, metadata)
  VALUES (target_user_id, achievement_name, achievement_metadata)
  RETURNING jsonb_build_object(
    'success', true,
    'already_earned', false,
    'achievement_id', id
  ) INTO result;

  RETURN result;
EXCEPTION WHEN OTHERS THEN
  RETURN jsonb_build_object(
    'success', false,
    'error', SQLERRM
  );
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
