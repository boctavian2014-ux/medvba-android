-- Remove denormalized columns from room_messages and use profiles table instead
-- This fixes PostgREST schema cache issues

-- Drop the problematic columns
ALTER TABLE room_messages DROP COLUMN IF EXISTS user_name;
ALTER TABLE room_messages DROP COLUMN IF EXISTS user_avatar;

-- Ensure the table structure is correct
COMMENT ON TABLE room_messages IS 'Room messages - normalized with profiles join';

-- Force schema cache reload
NOTIFY pgrst, 'reload schema';
