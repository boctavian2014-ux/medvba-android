-- ===========================================
-- MEDVBA RLS Security Hardening
-- Created: 2026-04-02
-- Purpose: Fix overly permissive RLS policies
-- ===========================================

-- Study sessions: Users should only see their OWN sessions
DROP POLICY IF EXISTS "Users can view own sessions" ON public.study_sessions;
CREATE POLICY "Users can view own sessions" 
    ON public.study_sessions 
    FOR SELECT 
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create own sessions" ON public.study_sessions;
CREATE POLICY "Users can create own sessions" 
    ON public.study_sessions 
    FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own sessions" ON public.study_sessions;
CREATE POLICY "Users can update own sessions" 
    ON public.study_sessions 
    FOR UPDATE 
    USING (auth.uid() = user_id);

-- Direct chats: Users should only see chats they participate in
DROP POLICY IF EXISTS "Users can view chats they participate in" ON public.direct_chats;
CREATE POLICY "Users can view chats they participate in" 
    ON public.direct_chats 
    FOR SELECT 
    USING (
        auth.uid() IN (
            SELECT user_id FROM public.direct_chat_participants 
            WHERE direct_chat_id = public.direct_chats.id
        )
    );

DROP POLICY IF EXISTS "Users can create chats" ON public.direct_chats;
CREATE POLICY "Users can create chats" 
    ON public.direct_chats 
    FOR INSERT 
    WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Users can update chats they own" ON public.direct_chats;
CREATE POLICY "Users can update chats they own" 
    ON public.direct_chats 
    FOR UPDATE 
    USING (auth.uid() = created_by);

-- Direct chat messages: Users should only see messages in chats they participate in
DROP POLICY IF EXISTS "Users can view messages in chats they're part of" ON public.direct_chat_messages;
CREATE POLICY "Users can view messages in chats they're part of" 
    ON public.direct_chat_messages 
    FOR SELECT 
    USING (
        EXISTS (
            SELECT 1 FROM public.direct_chat_participants dcp
            JOIN public.direct_chats dc ON dcp.direct_chat_id = dc.id
            WHERE dc.id = direct_chat_messages.direct_chat_id
            AND dcp.user_id = auth.uid()
        )
    );

DROP POLICY IF EXISTS "Users can send messages to chats they're part of" ON public.direct_chat_messages;
CREATE POLICY "Users can send messages to chats they're part of" 
    ON public.direct_chat_messages 
    FOR INSERT 
    WITH CHECK (
        auth.uid() IN (
            SELECT user_id FROM public.direct_chat_participants 
            WHERE direct_chat_id = direct_chat_messages.direct_chat_id
        )
    );

-- Direct chat participants: Only show participants in chats user is part of
DROP POLICY IF EXISTS "Users can view participant lists" ON public.direct_chat_participants;
CREATE POLICY "Users can view participant lists" 
    ON public.direct_chat_participants 
    FOR SELECT 
    USING (
        EXISTS (
            SELECT 1 FROM public.direct_chats dc
            WHERE dc.id = direct_chat_participants.direct_chat_id
            AND (
                dc.created_by = auth.uid()
                OR EXISTS (
                    SELECT 1 FROM public.direct_chat_participants dcp2
                    WHERE dcp2.direct_chat_id = dc.id
                    AND dcp2.user_id = auth.uid()
                )
            )
        )
    );

-- Activity feed: Users should only see activity from people they interact with
-- Or make it public but limited (optional depending on app design)
DROP POLICY IF EXISTS "Activity feed is viewable by everyone" ON public.activity_feed;
DROP POLICY IF EXISTS "Users can view activity feed" ON public.activity_feed;
CREATE POLICY "Users can view activity feed" 
    ON public.activity_feed 
    FOR SELECT 
    USING (true); -- Keep public for social features, adjust if needed

DROP POLICY IF EXISTS "Users can create activity feed entries" ON public.activity_feed;
CREATE POLICY "Users can create activity feed entries" 
    ON public.activity_feed 
    FOR INSERT 
    WITH CHECK (auth.uid() IS NOT NULL);

-- Study rooms: Users should only see rooms they can access
DROP POLICY IF EXISTS "Study rooms are viewable by everyone" ON public.study_rooms;
DROP POLICY IF EXISTS "Users can view accessible study rooms" ON public.study_rooms;
CREATE POLICY "Users can view accessible study rooms" 
    ON public.study_rooms 
    FOR SELECT 
    USING (
        is_public = true 
        OR auth.uid() = host_id
        OR EXISTS (
            SELECT 1 FROM public.study_room_participants 
            WHERE room_id = public.study_rooms.id 
            AND user_id = auth.uid()
        )
    );

DROP POLICY IF EXISTS "Authenticated users can create rooms" ON public.study_rooms;
CREATE POLICY "Authenticated users can create rooms" 
    ON public.study_rooms 
    FOR INSERT 
    WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Room creators can update rooms" ON public.study_rooms;
CREATE POLICY "Room creators can update rooms" 
    ON public.study_rooms 
    FOR UPDATE 
    USING (auth.uid() = host_id);

-- User progress: Only show user's own progress
DROP POLICY IF EXISTS "Users can view own progress" ON public.user_progress;
CREATE POLICY "Users can view own progress" 
    ON public.user_progress 
    FOR SELECT 
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own progress" ON public.user_progress;
CREATE POLICY "Users can update own progress" 
    ON public.user_progress 
    FOR ALL 
    USING (auth.uid() = user_id);

-- Daily progress: Only show user's own daily progress
DROP POLICY IF EXISTS "Users can view own daily progress" ON public.daily_progress;
CREATE POLICY "Users can view own daily progress" 
    ON public.daily_progress 
    FOR SELECT 
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own daily progress" ON public.daily_progress;
CREATE POLICY "Users can update own daily progress" 
    ON public.daily_progress 
    FOR ALL 
    USING (auth.uid() = user_id);

-- Profiles: Keep public read but secure writes
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;
CREATE POLICY "Profiles are viewable by everyone" 
    ON public.profiles 
    FOR SELECT 
    USING (true);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" 
    ON public.profiles 
    FOR UPDATE 
    USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" 
    ON public.profiles 
    FOR INSERT 
    WITH CHECK (auth.uid() = id);

-- Subscriptions: Only show user's own subscription
DROP POLICY IF EXISTS "Users can view own subscription" ON public.subscriptions;
CREATE POLICY "Users can view own subscription" 
    ON public.subscriptions 
    FOR SELECT 
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own subscription" ON public.subscriptions;
CREATE POLICY "Users can update own subscription" 
    ON public.subscriptions 
    FOR UPDATE 
    USING (auth.uid() = user_id);

-- User presence: Users can see who's online (optional - could be restricted)
DROP POLICY IF EXISTS "User presence is viewable by everyone" ON public.user_presence;
CREATE POLICY "User presence is viewable by everyone" 
    ON public.user_presence 
    FOR SELECT 
    USING (true);

DROP POLICY IF EXISTS "Users can update own presence" ON public.user_presence;
CREATE POLICY "Users can update own presence" 
    ON public.user_presence 
    FOR ALL 
    USING (auth.uid() = user_id);

-- AI question usage: Only show user's own usage
DROP POLICY IF EXISTS "Users can view own AI usage" ON public.ai_question_usage;
CREATE POLICY "Users can view own AI usage" 
    ON public.ai_question_usage 
    FOR SELECT 
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own AI usage" ON public.ai_question_usage;
CREATE POLICY "Users can update own AI usage" 
    ON public.ai_question_usage 
    FOR UPDATE 
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own AI usage" ON public.ai_question_usage;
CREATE POLICY "Users can insert own AI usage" 
    ON public.ai_question_usage 
    FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

-- User achievements: Users can see their own achievements
DROP POLICY IF EXISTS "Achievements are viewable by everyone" ON public.user_achievements;
CREATE POLICY "Achievements are viewable by everyone" 
    ON public.user_achievements 
    FOR SELECT 
    USING (true); -- Keep public for leaderboard/social features

DROP POLICY IF EXISTS "Users can insert own achievements" ON public.user_achievements;
CREATE POLICY "Users can insert own achievements" 
    ON public.user_achievements 
    FOR INSERT 
    WITH CHECK (auth.uid() IS NOT NULL);

SELECT 'RLS policies hardened successfully!' as status;
