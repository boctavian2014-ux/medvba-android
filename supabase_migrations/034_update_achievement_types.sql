-- Update achievement type constraint to include new canonical ids
ALTER TABLE public.user_achievements
  DROP CONSTRAINT IF EXISTS user_achievements_achievement_type_check;

ALTER TABLE public.user_achievements
  ADD CONSTRAINT user_achievements_achievement_type_check
  CHECK (achievement_type IN (
    'first_quiz', 'quiz_master', 'perfect_score',
    'streak_7', 'streak_30', 'streak_100',
    'questions_100', 'questions_500', 'questions_1000',
    'social_butterfly', 'helpful_tutor', 'room_creator',
    'early_bird', 'night_owl', 'weekend_warrior',
    'quiz_completed_10',
    'week_streak', 'month_streak', 'grand_master',
    'hundred_questions', 'five_hundred_questions', 'thousand_questions',
    'anatomy_master', 'speed_demon', 'top_ten', 'champion'
  ));
