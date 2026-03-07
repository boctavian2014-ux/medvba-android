/**
 * Script pentru generarea fișierului SQL cu toate întrebările
 * 
 * Rulare: npx ts-node scripts/generate-questions-sql.ts
 * sau: bun run scripts/generate-questions-sql.ts
 * 
 * Output: supabase/questions-data.sql
 */

import * as fs from 'fs';
import * as path from 'path';

// Importă toate seturile de întrebări
import {
  // Cardiovascular
  cardioAdmissionSet1, cardioAdmissionSet2, cardioAdmissionSet3,
  cardioAdmissionSet4, cardioAdmissionSet5, cardioAdmissionSet6,
  cardioAdmissionSet7, cardioAdmissionSet8, cardioAdmissionSet9,
  cardioAdmissionSet10,
  // Respiratory
  respiratoryAdmissionSet1, respiratoryAdmissionSet2, respiratoryAdmissionSet3,
  respiratoryAdmissionSet4, respiratoryAdmissionSet5, respiratoryAdmissionSet6,
  respiratoryAdmissionSet7, respiratoryAdmissionSet8, respiratoryAdmissionSet9,
  respiratoryAdmissionSet10,
  // Digestive
  digestiveAdmissionSet1, digestiveAdmissionSet2, digestiveAdmissionSet3,
  digestiveAdmissionSet4, digestiveAdmissionSet5, digestiveAdmissionSet6,
  digestiveAdmissionSet7, digestiveAdmissionSet8, digestiveAdmissionSet9,
  digestiveAdmissionSet10,
  // Lymphatic
  lymphaticAdmissionSet1, lymphaticAdmissionSet2, lymphaticAdmissionSet3,
  lymphaticAdmissionSet4, lymphaticAdmissionSet5, lymphaticAdmissionSet6,
  lymphaticAdmissionSet7, lymphaticAdmissionSet8, lymphaticAdmissionSet9,
  lymphaticAdmissionSet10,
  // Intro Anatomy
  introAnatPhysAdmissionSet1, introAnatPhysAdmissionSet2, introAnatPhysAdmissionSet3,
  introAnatPhysAdmissionSet4, introAnatPhysAdmissionSet5, introAnatPhysAdmissionSet6,
  introAnatPhysAdmissionSet7, introAnatPhysAdmissionSet8, introAnatPhysAdmissionSet9,
  introAnatPhysAdmissionSet10,
  // Chemistry
  chemBasicsAdmissionSet1, chemBasicsAdmissionSet2, chemBasicsAdmissionSet3,
  chemBasicsAdmissionSet4, chemBasicsAdmissionSet5, chemBasicsAdmissionSet6,
  chemBasicsAdmissionSet7, chemBasicsAdmissionSet8, chemBasicsAdmissionSet9,
  chemBasicsAdmissionSet10,
  // Cell Biology
  cellBiologyAdmissionSet1, cellBiologyAdmissionSet2, cellBiologyAdmissionSet3,
  cellBiologyAdmissionSet4, cellBiologyAdmissionSet5, cellBiologyAdmissionSet6,
  cellBiologyAdmissionSet7, cellBiologyAdmissionSet8, cellBiologyAdmissionSet9,
  cellBiologyAdmissionSet10,
  // Tissues
  tissuesAdmissionSet1, tissuesAdmissionSet2, tissuesAdmissionSet3,
  tissuesAdmissionSet4, tissuesAdmissionSet5, tissuesAdmissionSet6,
  tissuesAdmissionSet7, tissuesAdmissionSet8, tissuesAdmissionSet9,
  tissuesAdmissionSet10,
  // Integumentary
  integumentaryAdmissionSet1, integumentaryAdmissionSet2, integumentaryAdmissionSet3,
  integumentaryAdmissionSet4, integumentaryAdmissionSet5, integumentaryAdmissionSet6,
  integumentaryAdmissionSet7, integumentaryAdmissionSet8, integumentaryAdmissionSet9,
  integumentaryAdmissionSet10,
  // Skeletal
  skeletalAdmissionSet1, skeletalAdmissionSet2, skeletalAdmissionSet3,
  skeletalAdmissionSet4, skeletalAdmissionSet5, skeletalAdmissionSet6,
  skeletalAdmissionSet7, skeletalAdmissionSet8, skeletalAdmissionSet9,
  skeletalAdmissionSet10,
  // Muscular
  muscularAdmissionSet1, muscularAdmissionSet2, muscularAdmissionSet3,
  muscularAdmissionSet4, muscularAdmissionSet5, muscularAdmissionSet6,
  muscularAdmissionSet7, muscularAdmissionSet8, muscularAdmissionSet9,
  muscularAdmissionSet10,
  // Nervous
  nervousAdmissionSet1, nervousAdmissionSet2, nervousAdmissionSet3,
  nervousAdmissionSet4, nervousAdmissionSet5, nervousAdmissionSet6,
  nervousAdmissionSet7, nervousAdmissionSet8, nervousAdmissionSet9,
  nervousAdmissionSet10,
  // Senses
  sensesAdmissionSet1, sensesAdmissionSet2, sensesAdmissionSet3,
  sensesAdmissionSet4, sensesAdmissionSet5, sensesAdmissionSet6,
  sensesAdmissionSet7, sensesAdmissionSet8, sensesAdmissionSet9,
  sensesAdmissionSet10,
  // Endocrine
  endocrineAdmissionSet1, endocrineAdmissionSet2, endocrineAdmissionSet3,
  endocrineAdmissionSet4, endocrineAdmissionSet5, endocrineAdmissionSet6,
  endocrineAdmissionSet7, endocrineAdmissionSet8, endocrineAdmissionSet9,
  endocrineAdmissionSet10,
  // Blood
  bloodAdmissionSet1, bloodAdmissionSet2, bloodAdmissionSet3,
  bloodAdmissionSet4, bloodAdmissionSet5, bloodAdmissionSet6,
  bloodAdmissionSet7, bloodAdmissionSet8, bloodAdmissionSet9,
  bloodAdmissionSet10,
  // Metabolism
  metabolismNutritionAdmissionSet1, metabolismNutritionAdmissionSet2, metabolismNutritionAdmissionSet3,
  metabolismNutritionAdmissionSet4, metabolismNutritionAdmissionSet5, metabolismNutritionAdmissionSet6,
  metabolismNutritionAdmissionSet7, metabolismNutritionAdmissionSet8, metabolismNutritionAdmissionSet9,
  metabolismNutritionAdmissionSet10,
  // Urinary
  urinaryAdmissionSet1, urinaryAdmissionSet2, urinaryAdmissionSet3,
  urinaryAdmissionSet4, urinaryAdmissionSet5, urinaryAdmissionSet6,
  urinaryAdmissionSet7, urinaryAdmissionSet8, urinaryAdmissionSet9,
  urinaryAdmissionSet10,
  // Male Reproductive
  reproMaleAdmissionSet1, reproMaleAdmissionSet2, reproMaleAdmissionSet3,
  reproMaleAdmissionSet4, reproMaleAdmissionSet5, reproMaleAdmissionSet6,
  reproMaleAdmissionSet7, reproMaleAdmissionSet8, reproMaleAdmissionSet9,
  reproMaleAdmissionSet10,
  // Female Reproductive
  reproFemaleAdmissionSet1, reproFemaleAdmissionSet2, reproFemaleAdmissionSet3,
  reproFemaleAdmissionSet4, reproFemaleAdmissionSet5, reproFemaleAdmissionSet6,
  reproFemaleAdmissionSet7, reproFemaleAdmissionSet8, reproFemaleAdmissionSet9,
  reproFemaleAdmissionSet10,
  // Embryology
  embryologyAdmissionSet1, embryologyAdmissionSet2, embryologyAdmissionSet3,
  embryologyAdmissionSet4, embryologyAdmissionSet5, embryologyAdmissionSet6,
  embryologyAdmissionSet7, embryologyAdmissionSet8, embryologyAdmissionSet9,
  embryologyAdmissionSet10,
} from '../mocks/questions_med_admission';

interface ChapterConfig {
  chapterId: string;
  chapterName: string;
  sets: any[][];
}

const chapterConfigs: ChapterConfig[] = [
  {
    chapterId: 'intro-anatomy',
    chapterName: 'Introducere în anatomie și fiziologie',
    sets: [
      introAnatPhysAdmissionSet1, introAnatPhysAdmissionSet2, introAnatPhysAdmissionSet3,
      introAnatPhysAdmissionSet4, introAnatPhysAdmissionSet5, introAnatPhysAdmissionSet6,
      introAnatPhysAdmissionSet7, introAnatPhysAdmissionSet8, introAnatPhysAdmissionSet9,
      introAnatPhysAdmissionSet10
    ]
  },
  {
    chapterId: 'chemistry',
    chapterName: 'Bazele chimice ale corpului uman',
    sets: [
      chemBasicsAdmissionSet1, chemBasicsAdmissionSet2, chemBasicsAdmissionSet3,
      chemBasicsAdmissionSet4, chemBasicsAdmissionSet5, chemBasicsAdmissionSet6,
      chemBasicsAdmissionSet7, chemBasicsAdmissionSet8, chemBasicsAdmissionSet9,
      chemBasicsAdmissionSet10
    ]
  },
  {
    chapterId: 'cell-biology',
    chapterName: 'Celula și fiziologia celulară',
    sets: [
      cellBiologyAdmissionSet1, cellBiologyAdmissionSet2, cellBiologyAdmissionSet3,
      cellBiologyAdmissionSet4, cellBiologyAdmissionSet5, cellBiologyAdmissionSet6,
      cellBiologyAdmissionSet7, cellBiologyAdmissionSet8, cellBiologyAdmissionSet9,
      cellBiologyAdmissionSet10
    ]
  },
  {
    chapterId: 'tissues',
    chapterName: 'Țesuturile',
    sets: [
      tissuesAdmissionSet1, tissuesAdmissionSet2, tissuesAdmissionSet3,
      tissuesAdmissionSet4, tissuesAdmissionSet5, tissuesAdmissionSet6,
      tissuesAdmissionSet7, tissuesAdmissionSet8, tissuesAdmissionSet9,
      tissuesAdmissionSet10
    ]
  },
  {
    chapterId: 'integumentary',
    chapterName: 'Sistemul tegumentar',
    sets: [
      integumentaryAdmissionSet1, integumentaryAdmissionSet2, integumentaryAdmissionSet3,
      integumentaryAdmissionSet4, integumentaryAdmissionSet5, integumentaryAdmissionSet6,
      integumentaryAdmissionSet7, integumentaryAdmissionSet8, integumentaryAdmissionSet9,
      integumentaryAdmissionSet10
    ]
  },
  {
    chapterId: 'skeletal',
    chapterName: 'Oasele și articulațiile',
    sets: [
      skeletalAdmissionSet1, skeletalAdmissionSet2, skeletalAdmissionSet3,
      skeletalAdmissionSet4, skeletalAdmissionSet5, skeletalAdmissionSet6,
      skeletalAdmissionSet7, skeletalAdmissionSet8, skeletalAdmissionSet9,
      skeletalAdmissionSet10
    ]
  },
  {
    chapterId: 'muscular',
    chapterName: 'Sistemul muscular',
    sets: [
      muscularAdmissionSet1, muscularAdmissionSet2, muscularAdmissionSet3,
      muscularAdmissionSet4, muscularAdmissionSet5, muscularAdmissionSet6,
      muscularAdmissionSet7, muscularAdmissionSet8, muscularAdmissionSet9,
      muscularAdmissionSet10
    ]
  },
  {
    chapterId: 'nervous',
    chapterName: 'Sistemul nervos',
    sets: [
      nervousAdmissionSet1, nervousAdmissionSet2, nervousAdmissionSet3,
      nervousAdmissionSet4, nervousAdmissionSet5, nervousAdmissionSet6,
      nervousAdmissionSet7, nervousAdmissionSet8, nervousAdmissionSet9,
      nervousAdmissionSet10
    ]
  },
  {
    chapterId: 'senses',
    chapterName: 'Organele de simț',
    sets: [
      sensesAdmissionSet1, sensesAdmissionSet2, sensesAdmissionSet3,
      sensesAdmissionSet4, sensesAdmissionSet5, sensesAdmissionSet6,
      sensesAdmissionSet7, sensesAdmissionSet8, sensesAdmissionSet9,
      sensesAdmissionSet10
    ]
  },
  {
    chapterId: 'endocrine',
    chapterName: 'Sistemul endocrin',
    sets: [
      endocrineAdmissionSet1, endocrineAdmissionSet2, endocrineAdmissionSet3,
      endocrineAdmissionSet4, endocrineAdmissionSet5, endocrineAdmissionSet6,
      endocrineAdmissionSet7, endocrineAdmissionSet8, endocrineAdmissionSet9,
      endocrineAdmissionSet10
    ]
  },
  {
    chapterId: 'blood',
    chapterName: 'Sângele',
    sets: [
      bloodAdmissionSet1, bloodAdmissionSet2, bloodAdmissionSet3,
      bloodAdmissionSet4, bloodAdmissionSet5, bloodAdmissionSet6,
      bloodAdmissionSet7, bloodAdmissionSet8, bloodAdmissionSet9,
      bloodAdmissionSet10
    ]
  },
  {
    chapterId: 'cardiovascular',
    chapterName: 'Sistemul cardiovascular',
    sets: [
      cardioAdmissionSet1, cardioAdmissionSet2, cardioAdmissionSet3,
      cardioAdmissionSet4, cardioAdmissionSet5, cardioAdmissionSet6,
      cardioAdmissionSet7, cardioAdmissionSet8, cardioAdmissionSet9,
      cardioAdmissionSet10
    ]
  },
  {
    chapterId: 'lymphatic',
    chapterName: 'Sistemul limfatic și imunitatea',
    sets: [
      lymphaticAdmissionSet1, lymphaticAdmissionSet2, lymphaticAdmissionSet3,
      lymphaticAdmissionSet4, lymphaticAdmissionSet5, lymphaticAdmissionSet6,
      lymphaticAdmissionSet7, lymphaticAdmissionSet8, lymphaticAdmissionSet9,
      lymphaticAdmissionSet10
    ]
  },
  {
    chapterId: 'respiratory',
    chapterName: 'Sistemul respirator',
    sets: [
      respiratoryAdmissionSet1, respiratoryAdmissionSet2, respiratoryAdmissionSet3,
      respiratoryAdmissionSet4, respiratoryAdmissionSet5, respiratoryAdmissionSet6,
      respiratoryAdmissionSet7, respiratoryAdmissionSet8, respiratoryAdmissionSet9,
      respiratoryAdmissionSet10
    ]
  },
  {
    chapterId: 'digestive',
    chapterName: 'Sistemul digestiv',
    sets: [
      digestiveAdmissionSet1, digestiveAdmissionSet2, digestiveAdmissionSet3,
      digestiveAdmissionSet4, digestiveAdmissionSet5, digestiveAdmissionSet6,
      digestiveAdmissionSet7, digestiveAdmissionSet8, digestiveAdmissionSet9,
      digestiveAdmissionSet10
    ]
  },
  {
    chapterId: 'metabolism',
    chapterName: 'Metabolism și nutriție',
    sets: [
      metabolismNutritionAdmissionSet1, metabolismNutritionAdmissionSet2, metabolismNutritionAdmissionSet3,
      metabolismNutritionAdmissionSet4, metabolismNutritionAdmissionSet5, metabolismNutritionAdmissionSet6,
      metabolismNutritionAdmissionSet7, metabolismNutritionAdmissionSet8, metabolismNutritionAdmissionSet9,
      metabolismNutritionAdmissionSet10
    ]
  },
  {
    chapterId: 'urinary',
    chapterName: 'Sistemul urinar',
    sets: [
      urinaryAdmissionSet1, urinaryAdmissionSet2, urinaryAdmissionSet3,
      urinaryAdmissionSet4, urinaryAdmissionSet5, urinaryAdmissionSet6,
      urinaryAdmissionSet7, urinaryAdmissionSet8, urinaryAdmissionSet9,
      urinaryAdmissionSet10
    ]
  },
  {
    chapterId: 'repro-male',
    chapterName: 'Sistemul reproducător masculin',
    sets: [
      reproMaleAdmissionSet1, reproMaleAdmissionSet2, reproMaleAdmissionSet3,
      reproMaleAdmissionSet4, reproMaleAdmissionSet5, reproMaleAdmissionSet6,
      reproMaleAdmissionSet7, reproMaleAdmissionSet8, reproMaleAdmissionSet9,
      reproMaleAdmissionSet10
    ]
  },
  {
    chapterId: 'repro-female',
    chapterName: 'Sistemul reproducător feminin',
    sets: [
      reproFemaleAdmissionSet1, reproFemaleAdmissionSet2, reproFemaleAdmissionSet3,
      reproFemaleAdmissionSet4, reproFemaleAdmissionSet5, reproFemaleAdmissionSet6,
      reproFemaleAdmissionSet7, reproFemaleAdmissionSet8, reproFemaleAdmissionSet9,
      reproFemaleAdmissionSet10
    ]
  },
  {
    chapterId: 'embryology',
    chapterName: 'Sarcina și dezvoltarea timpurie',
    sets: [
      embryologyAdmissionSet1, embryologyAdmissionSet2, embryologyAdmissionSet3,
      embryologyAdmissionSet4, embryologyAdmissionSet5, embryologyAdmissionSet6,
      embryologyAdmissionSet7, embryologyAdmissionSet8, embryologyAdmissionSet9,
      embryologyAdmissionSet10
    ]
  },
];

function escapeSQL(str: string): string {
  if (!str) return '';
  return str.replace(/'/g, "''");
}

function generateSQL(): string {
  let sql = `-- ============================================
-- MEDVBA - Date Întrebări Quiz
-- Generat automat din TypeScript
-- Total: 2000 întrebări (100 per capitol x 20 capitole)
-- ============================================

-- ATENȚIE: Rulați mai întâi schema.sql pentru a crea tabelele!

BEGIN;

`;

  let totalQuestions = 0;

  for (const config of chapterConfigs) {
    sql += `\n-- ============================================\n`;
    sql += `-- CAPITOL: ${config.chapterName}\n`;
    sql += `-- ID: ${config.chapterId}\n`;
    sql += `-- ============================================\n\n`;

    for (let setIndex = 0; setIndex < config.sets.length; setIndex++) {
      const setNumber = setIndex + 1;
      const questions = config.sets[setIndex];

      if (!questions || questions.length === 0) {
        continue;
      }

      sql += `-- Set ${setNumber} (${setNumber <= 3 ? 'Easy' : setNumber <= 6 ? 'Medium' : 'Hard'})\n`;

      for (const q of questions) {
        const options = JSON.stringify(q.options).replace(/'/g, "''");
        const optionsRo = JSON.stringify(q.options_ro).replace(/'/g, "''");

        sql += `INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  '${escapeSQL(q.id)}',
  '${escapeSQL(q.category)}',
  '${escapeSQL(q.difficulty)}',
  '${escapeSQL(q.question)}',
  '${escapeSQL(q.question_ro)}',
  '${options}'::jsonb,
  '${optionsRo}'::jsonb,
  ${q.correctAnswer},
  '${escapeSQL(q.explanation)}',
  '${escapeSQL(q.explanation_ro)}',
  '${config.chapterId}',
  ${setNumber}
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;\n\n`;

        totalQuestions++;
      }
    }
  }

  sql += `\nCOMMIT;\n\n`;
  sql += `-- ============================================\n`;
  sql += `-- SUMAR: ${totalQuestions} întrebări inserate\n`;
  sql += `-- ============================================\n`;

  return sql;
}

function main() {
  console.log('╔════════════════════════════════════════════════╗');
  console.log('║   MEDVBA - Generator SQL Întrebări             ║');
  console.log('╚════════════════════════════════════════════════╝\n');

  console.log('🔄 Generez fișierul SQL...');

  const sql = generateSQL();
  
  const outputPath = path.join(__dirname, '..', 'supabase', 'questions-data.sql');
  
  fs.writeFileSync(outputPath, sql, 'utf8');

  console.log(`✅ Fișier generat: ${outputPath}`);
  console.log(`📊 Total întrebări: 2000`);
  console.log(`📚 Total capitole: 20`);
  console.log(`\n💡 Pentru a importa în Supabase:`);
  console.log(`   1. Deschide Supabase Dashboard > SQL Editor`);
  console.log(`   2. Rulează mai întâi: schema.sql`);
  console.log(`   3. Apoi rulează: questions-data.sql`);
}

main();
