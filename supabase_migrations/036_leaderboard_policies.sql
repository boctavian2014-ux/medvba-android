-- Allow authenticated users to read user_progress for leaderboard display
DROP POLICY IF EXISTS "Authenticated users can read all progress for leaderboard" ON user_progress;
CREATE POLICY "Authenticated users can read all progress for leaderboard"
  ON user_progress FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Allow authenticated users to read daily_progress for weekly/monthly leaderboards
DROP POLICY IF EXISTS "Authenticated users can read all daily progress for leaderboard" ON daily_progress;
CREATE POLICY "Authenticated users can read all daily progress for leaderboard"
  ON daily_progress FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

COMMENT ON POLICY "Authenticated users can read all progress for leaderboard" ON user_progress IS 'Enables leaderboard to show top users by questions answered';
COMMENT ON POLICY "Authenticated users can read all daily progress for leaderboard" ON daily_progress IS 'Enables weekly/monthly leaderboard aggregation';

-- RPC function for leaderboard (avoids complex client-side joins)
CREATE OR REPLACE FUNCTION get_leaderboard(
  p_period TEXT DEFAULT 'allTime',
  p_limit INTEGER DEFAULT 20
)
RETURNS TABLE (
  id UUID,
  name TEXT,
  avatar TEXT,
  points BIGINT,
  streak INTEGER,
  rank BIGINT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF p_period = 'allTime' THEN
    RETURN QUERY
    SELECT 
      p.id,
      p.name,
      COALESCE(p.profile_photo_url, p.avatar, 'https://api.dicebear.com/7.x/avataaars/png?seed=' || p.id) as avatar,
      up.total_questions_answered::BIGINT as points,
      up.current_streak::INTEGER as streak,
      ROW_NUMBER() OVER (ORDER BY up.total_questions_answered DESC)::BIGINT as rank
    FROM profiles p
    INNER JOIN user_progress up ON up.user_id = p.id
    WHERE up.total_questions_answered > 0
    ORDER BY up.total_questions_answered DESC
    LIMIT p_limit;
  ELSIF p_period = 'weekly' THEN
    RETURN QUERY
    SELECT 
      p.id,
      p.name,
      COALESCE(p.profile_photo_url, p.avatar, 'https://api.dicebear.com/7.x/avataaars/png?seed=' || p.id) as avatar,
      COALESCE(SUM(d.questions_answered), 0)::BIGINT as points,
      up.current_streak::INTEGER as streak,
      ROW_NUMBER() OVER (ORDER BY COALESCE(SUM(d.questions_answered), 0) DESC)::BIGINT as rank
    FROM profiles p
    INNER JOIN user_progress up ON up.user_id = p.id
    LEFT JOIN daily_progress d ON d.user_id = p.id AND d.date >= (CURRENT_DATE - INTERVAL '7 days')
    GROUP BY p.id, p.name, p.profile_photo_url, p.avatar, up.current_streak
    HAVING COALESCE(SUM(d.questions_answered), 0) > 0
    ORDER BY points DESC
    LIMIT p_limit;
  ELSIF p_period = 'monthly' THEN
    RETURN QUERY
    SELECT 
      p.id,
      p.name,
      COALESCE(p.profile_photo_url, p.avatar, 'https://api.dicebear.com/7.x/avataaars/png?seed=' || p.id) as avatar,
      COALESCE(SUM(d.questions_answered), 0)::BIGINT as points,
      up.current_streak::INTEGER as streak,
      ROW_NUMBER() OVER (ORDER BY COALESCE(SUM(d.questions_answered), 0) DESC)::BIGINT as rank
    FROM profiles p
    INNER JOIN user_progress up ON up.user_id = p.id
    LEFT JOIN daily_progress d ON d.user_id = p.id AND d.date >= (CURRENT_DATE - INTERVAL '30 days')
    GROUP BY p.id, p.name, p.profile_photo_url, p.avatar, up.current_streak
    HAVING COALESCE(SUM(d.questions_answered), 0) > 0
    ORDER BY points DESC
    LIMIT p_limit;
  ELSE
    -- daily: today only
    RETURN QUERY
    SELECT 
      p.id,
      p.name,
      COALESCE(p.profile_photo_url, p.avatar, 'https://api.dicebear.com/7.x/avataaars/png?seed=' || p.id) as avatar,
      COALESCE(d.questions_answered, 0)::BIGINT as points,
      up.current_streak::INTEGER as streak,
      ROW_NUMBER() OVER (ORDER BY COALESCE(d.questions_answered, 0) DESC)::BIGINT as rank
    FROM profiles p
    INNER JOIN user_progress up ON up.user_id = p.id
    LEFT JOIN daily_progress d ON d.user_id = p.id AND d.date = CURRENT_DATE
    WHERE COALESCE(d.questions_answered, 0) > 0
    ORDER BY points DESC
    LIMIT p_limit;
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION get_leaderboard(TEXT, INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION get_leaderboard(TEXT, INTEGER) TO authenticated;
