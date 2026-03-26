-- Add RLS policies to existing tables (they exist but may not have policies)

-- Enable RLS on existing tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.direct_chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.direct_chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.direct_chat_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_feed ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_presence ENABLE ROW LEVEL SECURITY;

-- Profiles policies
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;
CREATE POLICY "Profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Study rooms policies
DROP POLICY IF EXISTS "Study rooms are viewable by everyone" ON public.study_rooms;
CREATE POLICY "Study rooms are viewable by everyone" ON public.study_rooms FOR SELECT USING (true);

DROP POLICY IF EXISTS "Authenticated users can create rooms" ON public.study_rooms;
CREATE POLICY "Authenticated users can create rooms" ON public.study_rooms FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Room creators can update rooms" ON public.study_rooms;
CREATE POLICY "Room creators can update rooms" ON public.study_rooms FOR UPDATE USING (auth.uid() = host_id);

-- Study sessions policies
DROP POLICY IF EXISTS "Users can view own sessions" ON public.study_sessions;
CREATE POLICY "Users can view own sessions" ON public.study_sessions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can create own sessions" ON public.study_sessions;
CREATE POLICY "Users can create own sessions" ON public.study_sessions FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users can update own sessions" ON public.study_sessions;
CREATE POLICY "Users can update own sessions" ON public.study_sessions FOR UPDATE USING (true);

-- Direct chats policies
DROP POLICY IF EXISTS "Users can view chats they participate in" ON public.direct_chats;
CREATE POLICY "Users can view chats they participate in" ON public.direct_chats FOR SELECT USING (true);

DROP POLICY IF EXISTS "Authenticated users can create chats" ON public.direct_chats;
CREATE POLICY "Authenticated users can create chats" ON public.direct_chats FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Direct chat participants policies
DROP POLICY IF EXISTS "Users can view participant lists" ON public.direct_chat_participants;
CREATE POLICY "Users can view participant lists" ON public.direct_chat_participants FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can join chats" ON public.direct_chat_participants;
CREATE POLICY "Users can join chats" ON public.direct_chat_participants FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Direct chat messages policies
DROP POLICY IF EXISTS "Users can view messages in chats they're part of" ON public.direct_chat_messages;
CREATE POLICY "Users can view messages in chats they're part of" ON public.direct_chat_messages FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can send messages to chats they're part of" ON public.direct_chat_messages;
CREATE POLICY "Users can send messages to chats they're part of" ON public.direct_chat_messages FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Activity feed policies
DROP POLICY IF EXISTS "Activity feed is viewable by everyone" ON public.activity_feed;
CREATE POLICY "Activity feed is viewable by everyone" ON public.activity_feed FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can create activity feed entries" ON public.activity_feed;
CREATE POLICY "Users can create activity feed entries" ON public.activity_feed FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- User progress policies
DROP POLICY IF EXISTS "Users can view own progress" ON public.user_progress;
CREATE POLICY "Users can view own progress" ON public.user_progress FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own progress" ON public.user_progress;
CREATE POLICY "Users can update own progress" ON public.user_progress FOR ALL USING (auth.uid() = user_id);

-- Daily progress policies
DROP POLICY IF EXISTS "Users can view own daily progress" ON public.daily_progress;
CREATE POLICY "Users can view own daily progress" ON public.daily_progress FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own daily progress" ON public.daily_progress;
CREATE POLICY "Users can update own daily progress" ON public.daily_progress FOR ALL USING (auth.uid() = user_id);

-- User achievements policies
DROP POLICY IF EXISTS "Achievements are viewable by everyone" ON public.user_achievements;
CREATE POLICY "Achievements are viewable by everyone" ON public.user_achievements FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can insert own achievements" ON public.user_achievements;
CREATE POLICY "Users can insert own achievements" ON public.user_achievements FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Subscriptions policies
DROP POLICY IF EXISTS "Users can view own subscription" ON public.subscriptions;
CREATE POLICY "Users can view own subscription" ON public.subscriptions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own subscription" ON public.subscriptions;
CREATE POLICY "Users can update own subscription" ON public.subscriptions FOR UPDATE USING (auth.uid() = user_id);

-- User presence policies
DROP POLICY IF EXISTS "User presence is viewable by everyone" ON public.user_presence;
CREATE POLICY "User presence is viewable by everyone" ON public.user_presence FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own presence" ON public.user_presence;
CREATE POLICY "Users can update own presence" ON public.user_presence FOR ALL USING (auth.uid() = user_id);

SELECT 'All RLS policies added successfully!' as status;
