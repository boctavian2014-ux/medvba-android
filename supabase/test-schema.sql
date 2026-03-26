-- Check what's happening with profiles table

-- 1. Check if table exists and its structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'profiles' AND table_schema = 'public';

-- 2. Check existing RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'profiles';

-- 3. Check table owner
SELECT tableowner FROM pg_tables WHERE tablename = 'profiles';

-- 4. Try disabling RLS temporarily
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;
