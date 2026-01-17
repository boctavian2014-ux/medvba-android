-- Force schema reload for direct_chat_participants table
-- This ensures PostgREST recognizes the table

-- Drop and recreate the table to force schema refresh
DROP TABLE IF EXISTS public.direct_chat_participants CASCADE;

CREATE TABLE public.direct_chat_participants (
  chat_id UUID REFERENCES public.direct_chats(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT CHECK (role IN ('owner', 'member')) DEFAULT 'member',
  joined_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (chat_id, user_id)
);

-- Enable RLS
ALTER TABLE public.direct_chat_participants ENABLE ROW LEVEL SECURITY;

-- Recreate policies
DROP POLICY IF EXISTS "Users can view chat participants" ON public.direct_chat_participants;
CREATE POLICY "Users can view chat participants"
  ON public.direct_chat_participants FOR SELECT
  USING (
    auth.uid() IN (
      SELECT user_id FROM public.direct_chat_participants WHERE chat_id = direct_chat_participants.chat_id
    )
  );

DROP POLICY IF EXISTS "Chat creators can add participants" ON public.direct_chat_participants;
CREATE POLICY "Chat creators can add participants"
  ON public.direct_chat_participants FOR INSERT
  WITH CHECK (
    auth.uid() IN (
      SELECT created_by FROM public.direct_chats WHERE id = chat_id
    )
  );

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_direct_chat_participants_user_id ON public.direct_chat_participants(user_id);
CREATE INDEX IF NOT EXISTS idx_direct_chat_participants_chat_id ON public.direct_chat_participants(chat_id);

-- Add comment to force schema cache refresh
COMMENT ON TABLE public.direct_chat_participants IS 'Tracks which users are in which chats - schema reloaded';

-- Force PostgREST schema cache reload
NOTIFY pgrst, 'reload schema';

-- Grant permissions
GRANT SELECT, INSERT ON public.direct_chat_participants TO authenticated;
GRANT SELECT, INSERT ON public.direct_chat_participants TO anon;
