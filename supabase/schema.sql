-- ============================================
-- MEDVBA - Schema Supabase pentru Întrebări Quiz
-- ============================================

-- Activează extensia UUID dacă nu există
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- Tabela CHAPTERS (Capitole)
-- ============================================
CREATE TABLE IF NOT EXISTS chapters (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  name_en TEXT,
  module_id TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  icon TEXT,
  description TEXT,
  description_en TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- Tabela QUESTIONS (Întrebări)
-- ============================================
CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  question TEXT NOT NULL,
  question_ro TEXT NOT NULL,
  options JSONB NOT NULL,
  options_ro JSONB NOT NULL,
  correct_answer INTEGER NOT NULL CHECK (correct_answer >= 0 AND correct_answer <= 4),
  explanation TEXT NOT NULL,
  explanation_ro TEXT NOT NULL,
  chapter_id TEXT NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  set_number INTEGER DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  times_answered INTEGER DEFAULT 0,
  times_correct INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- Tabela USER_PROGRESS (Progres utilizator)
-- ============================================
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  answered_correctly BOOLEAN NOT NULL,
  time_spent_seconds INTEGER,
  answered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, question_id, answered_at)
);

-- ============================================
-- Tabela QUIZ_SESSIONS (Sesiuni quiz)
-- ============================================
CREATE TABLE IF NOT EXISTS quiz_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  chapter_id TEXT REFERENCES chapters(id) ON DELETE SET NULL,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  time_spent_seconds INTEGER,
  completed BOOLEAN DEFAULT false,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE
);

-- ============================================
-- INDEXURI pentru performanță
-- ============================================
CREATE INDEX IF NOT EXISTS idx_questions_chapter ON questions(chapter_id);
CREATE INDEX IF NOT EXISTS idx_questions_difficulty ON questions(difficulty);
CREATE INDEX IF NOT EXISTS idx_questions_category ON questions(category);
CREATE INDEX IF NOT EXISTS idx_questions_set ON questions(set_number);
CREATE INDEX IF NOT EXISTS idx_user_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_question ON user_progress(question_id);
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_user ON quiz_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_chapters_module ON chapters(module_id);

-- ============================================
-- FUNCȚII și TRIGGERS
-- ============================================

-- Funcție pentru actualizare timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pentru questions
DROP TRIGGER IF EXISTS update_questions_updated_at ON questions;
CREATE TRIGGER update_questions_updated_at
  BEFORE UPDATE ON questions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Trigger pentru chapters
DROP TRIGGER IF EXISTS update_chapters_updated_at ON chapters;
CREATE TRIGGER update_chapters_updated_at
  BEFORE UPDATE ON chapters
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Funcție pentru actualizare statistici întrebare
CREATE OR REPLACE FUNCTION update_question_stats()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE questions
  SET 
    times_answered = times_answered + 1,
    times_correct = times_correct + CASE WHEN NEW.answered_correctly THEN 1 ELSE 0 END
  WHERE id = NEW.question_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pentru actualizare statistici
DROP TRIGGER IF EXISTS update_question_stats_trigger ON user_progress;
CREATE TRIGGER update_question_stats_trigger
  AFTER INSERT ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_question_stats();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Activează RLS
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_sessions ENABLE ROW LEVEL SECURITY;

-- Politici pentru questions (public read)
CREATE POLICY "Questions are viewable by everyone" ON questions
  FOR SELECT USING (is_active = true);

-- Politici pentru chapters (public read)
CREATE POLICY "Chapters are viewable by everyone" ON chapters
  FOR SELECT USING (is_active = true);

-- Politici pentru user_progress (doar propriul progres)
CREATE POLICY "Users can view own progress" ON user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Politici pentru quiz_sessions (doar propriile sesiuni)
CREATE POLICY "Users can view own sessions" ON quiz_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions" ON quiz_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions" ON quiz_sessions
  FOR UPDATE USING (auth.uid() = user_id);

-- ============================================
-- VIEWS pentru statistici
-- ============================================

-- View pentru statistici per capitol
CREATE OR REPLACE VIEW chapter_stats AS
SELECT 
  c.id,
  c.name,
  c.name_en,
  COUNT(q.id) as total_questions,
  COUNT(CASE WHEN q.difficulty = 'easy' THEN 1 END) as easy_count,
  COUNT(CASE WHEN q.difficulty = 'medium' THEN 1 END) as medium_count,
  COUNT(CASE WHEN q.difficulty = 'hard' THEN 1 END) as hard_count
FROM chapters c
LEFT JOIN questions q ON q.chapter_id = c.id AND q.is_active = true
WHERE c.is_active = true
GROUP BY c.id, c.name, c.name_en;

-- View pentru statistici utilizator per capitol
CREATE OR REPLACE VIEW user_chapter_stats AS
SELECT 
  up.user_id,
  q.chapter_id,
  COUNT(DISTINCT up.question_id) as questions_attempted,
  COUNT(CASE WHEN up.answered_correctly THEN 1 END) as correct_answers,
  ROUND(AVG(CASE WHEN up.answered_correctly THEN 100.0 ELSE 0 END), 2) as accuracy_percentage
FROM user_progress up
JOIN questions q ON q.id = up.question_id
GROUP BY up.user_id, q.chapter_id;

-- ============================================
-- INSERT CAPITOLE
-- ============================================
INSERT INTO chapters (id, name, name_en, module_id, order_index) VALUES
('intro-anatomy', 'Introducere în anatomie și fiziologie', 'Introduction to Anatomy and Physiology', 'med-admission', 1),
('chemistry', 'Bazele chimice ale corpului uman', 'Chemical Basis of the Human Body', 'med-admission', 2),
('cell-biology', 'Celula și fiziologia celulară', 'Cell and Cellular Physiology', 'med-admission', 3),
('tissues', 'Țesuturile', 'Tissues', 'med-admission', 4),
('integumentary', 'Sistemul tegumentar', 'Integumentary System', 'med-admission', 5),
('skeletal', 'Oasele și articulațiile', 'Bones and Joints', 'med-admission', 6),
('muscular', 'Sistemul muscular', 'Muscular System', 'med-admission', 7),
('nervous', 'Sistemul nervos', 'Nervous System', 'med-admission', 8),
('senses', 'Organele de simț', 'Sense Organs', 'med-admission', 9),
('endocrine', 'Sistemul endocrin', 'Endocrine System', 'med-admission', 10),
('blood', 'Sângele', 'Blood', 'med-admission', 11),
('cardiovascular', 'Sistemul cardiovascular', 'Cardiovascular System', 'med-admission', 12),
('lymphatic', 'Sistemul limfatic și imunitatea', 'Lymphatic System and Immunity', 'med-admission', 13),
('respiratory', 'Sistemul respirator', 'Respiratory System', 'med-admission', 14),
('digestive', 'Sistemul digestiv', 'Digestive System', 'med-admission', 15),
('metabolism', 'Metabolism și nutriție', 'Metabolism and Nutrition', 'med-admission', 16),
('urinary', 'Sistemul urinar', 'Urinary System', 'med-admission', 17),
('repro-male', 'Sistemul reproducător masculin', 'Male Reproductive System', 'med-admission', 18),
('repro-female', 'Sistemul reproducător feminin', 'Female Reproductive System', 'med-admission', 19),
('embryology', 'Sarcina și dezvoltarea timpurie', 'Pregnancy and Early Development', 'med-admission', 20)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_en = EXCLUDED.name_en,
  module_id = EXCLUDED.module_id,
  order_index = EXCLUDED.order_index;
