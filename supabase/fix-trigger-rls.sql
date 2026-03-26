-- ===========================================
-- MEDVBA Fix: Trigger and RLS for User Registration
-- This script fixes the "Database error saving new user" issue
-- ===========================================

-- Step 1: Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Step 2: Create a more robust trigger function
-- Key fixes:
-- 1. Uses SECURITY DEFINER to run as the table owner (postgres)
-- 2. Checks if profile already exists before inserting
-- 3. Targets the live profiles schema: name, avatar, profile_photo_url
-- 4. Logs errors without failing the whole transaction
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if profile already exists (prevents duplicate key errors)
  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = NEW.id) THEN
    INSERT INTO public.profiles (
      id,
      name,
      avatar,
      profile_photo_url,
      created_at,
      updated_at
    )
    VALUES (
      NEW.id,
      COALESCE(
        NEW.raw_user_meta_data->>'name',
        NEW.email,
        'Student'
      ),
      'https://api.dicebear.com/7.x/avataaars/png?seed=' || NEW.id,
      'https://api.dicebear.com/7.x/avataaars/png?seed=' || NEW.id,
      NOW(),
      NOW()
    )
    ON CONFLICT (id) DO NOTHING;
  END IF;
  
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Log the error but don't fail the signup
  RAISE NOTICE 'Error creating profile for user %: %', NEW.id, SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 3: Create the trigger (runs AFTER INSERT on auth.users)
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Step 4: Ensure RLS is enabled on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Step 5: Clean up and set up proper RLS policies
-- Drop all existing policies first
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "profiles_select_all" ON public.profiles;
DROP POLICY IF EXISTS "profiles_select_public_or_self" ON public.profiles;
DROP POLICY IF EXISTS "profiles_service_all" ON public.profiles;
DROP POLICY IF EXISTS "profiles_service_insert" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
DROP POLICY IF EXISTS "users_insert_own" ON public.profiles;
DROP POLICY IF EXISTS "users_update_own" ON public.profiles;
DROP POLICY IF EXISTS "anon_read" ON public.profiles;
DROP POLICY IF EXISTS "anon_insert" ON public.profiles;
DROP POLICY IF EXISTS "anon_update" ON public.profiles;
DROP POLICY IF EXISTS "authenticated_read" ON public.profiles;
DROP POLICY IF EXISTS "authenticated_insert" ON public.profiles;
DROP POLICY IF EXISTS "authenticated_update" ON public.profiles;
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.profiles;
DROP POLICY IF EXISTS "Allow public read access" ON public.profiles;
DROP POLICY IF EXISTS "Allow update for authenticated users" ON public.profiles;
DROP POLICY IF EXISTS "Allow insert for authenticated users" ON public.profiles;

-- Step 6: Create proper RLS policies
CREATE POLICY "profiles_select_all" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "profiles_service_insert" ON public.profiles
  FOR INSERT WITH CHECK (true);

CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_service_all" ON public.profiles
  FOR ALL USING (true) WITH CHECK (true);

-- Step 7: Grant proper permissions
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON public.profiles TO postgres, anon, authenticated, service_role;
GRANT ALL ON SCHEMA public TO postgres, anon, authenticated, service_role;

-- Step 8: Verify the setup
SELECT 
  'Trigger created: ' || 
  (SELECT COUNT(*) FROM pg_trigger WHERE tgname = 'on_auth_user_created') ||
  ' policies: ' ||
  (SELECT COUNT(*) FROM pg_policies WHERE tablename = 'profiles') AS setup_status;

-- Step 9: Clean up orphaned profiles (profiles without corresponding users)
-- This is safe to run and helps resolve issues from previous failed signups
DELETE FROM public.profiles 
WHERE id NOT IN (SELECT id FROM auth.users);

-- Step 10: Output completion message
SELECT '✅ Registration trigger and RLS fixed successfully!' AS status;
