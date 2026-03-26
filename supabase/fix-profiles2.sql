-- SIMPLE FIX for profiles - make it fully public for testing

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Delete ALL existing policies
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.profiles;
DROP POLICY IF EXISTS "Allow public read access" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Allow update for authenticated users" ON public.profiles;
DROP POLICY IF EXISTS "Allow insert for authenticated users" ON public.profiles;
DROP POLICY IF EXISTS "anon_select" ON public.profiles;
DROP POLICY IF EXISTS "anon_insert" ON public.profiles;
DROP POLICY IF EXISTS "anon_update" ON public.profiles;

-- Create simple permissive policies
CREATE POLICY "anon_read" ON public.profiles FOR SELECT TO anon USING (true);
CREATE POLICY "anon_insert" ON public.profiles FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_update" ON public.profiles FOR UPDATE TO anon USING (true);

CREATE POLICY "authenticated_read" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated_insert" ON public.profiles FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "authenticated_update" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id);

SELECT 'Profiles fixed with simple policies' as status;
