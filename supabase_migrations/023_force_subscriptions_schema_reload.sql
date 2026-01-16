-- Ensure subscriptions table exists and is visible to PostgREST
-- This fixes PGRST205: "Could not find the table 'public.subscriptions' in the schema cache"

-- Verify table exists in public schema
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'subscriptions') THEN
        RAISE EXCEPTION 'subscriptions table does not exist in public schema';
    END IF;
END $$;

-- Ensure proper permissions for PostgREST
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON subscriptions TO anon, authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Refresh all grants
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO anon, authenticated;

-- Force PostgREST schema cache reload using multiple methods
SELECT pg_notify('pgrst', 'reload schema');
SELECT pg_notify('pgrst', 'reload config');

-- Add a comment to force schema change detection
COMMENT ON TABLE subscriptions IS 'User subscription information - updated at ' || NOW()::TEXT;

-- Verify RLS is enabled
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Ensure all policies exist
DO $$
BEGIN
    -- View policy
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'subscriptions' 
        AND policyname = 'Users can view their own subscription'
    ) THEN
        CREATE POLICY "Users can view their own subscription"
            ON subscriptions FOR SELECT
            USING (auth.uid() = user_id);
    END IF;

    -- Insert policy
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'subscriptions' 
        AND policyname = 'Users can insert their own subscription'
    ) THEN
        CREATE POLICY "Users can insert their own subscription"
            ON subscriptions FOR INSERT
            WITH CHECK (auth.uid() = user_id);
    END IF;

    -- Update policy
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'subscriptions' 
        AND policyname = 'Users can update their own subscription'
    ) THEN
        CREATE POLICY "Users can update their own subscription"
            ON subscriptions FOR UPDATE
            USING (auth.uid() = user_id);
    END IF;
END $$;
