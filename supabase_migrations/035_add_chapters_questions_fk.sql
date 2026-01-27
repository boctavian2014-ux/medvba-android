-- Ensure PostgREST relationship between chapters and questions
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'questions'
      AND column_name = 'chapter_id'
  ) AND EXISTS (
    SELECT 1
    FROM information_schema.tables
    WHERE table_schema = 'public'
      AND table_name = 'chapters'
  ) AND NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'questions_chapter_id_fkey'
      AND conrelid = 'public.questions'::regclass
  ) THEN
    EXECUTE $sql$
      ALTER TABLE public.questions
      ADD CONSTRAINT questions_chapter_id_fkey
      FOREIGN KEY (chapter_id)
      REFERENCES public.chapters(id)
      ON DELETE SET NULL
    $sql$;
  END IF;
END;
$$;
