/**
 * Script de Migrare Întrebări în Supabase
 * 
 * Acest script citește întrebările din fișierele TypeScript locale
 * și le inserează în baza de date Supabase.
 * 
 * Rulare: npx ts-node scripts/migrate-questions-to-supabase.ts
 * sau: bun run scripts/migrate-questions-to-supabase.ts
 */

import { createClient } from '@supabase/supabase-js';

// Configurație Supabase - înlocuiește cu valorile tale
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || 'YOUR_SERVICE_ROLE_KEY';

// Creează clientul Supabase cu service role key pentru bypass RLS
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Importă toate seturile de întrebări
import {
  // Cardiovascular
  cardioAdmissionSet1,
  cardioAdmissionSet2,
  cardioAdmissionSet3,
  cardioAdmissionSet4,
  cardioAdmissionSet5,
  cardioAdmissionSet6,
  cardioAdmissionSet7,
  cardioAdmissionSet8,
  cardioAdmissionSet9,
  cardioAdmissionSet10,
  // Respiratory
  respiratoryAdmissionSet1,
  respiratoryAdmissionSet2,
  respiratoryAdmissionSet3,
  respiratoryAdmissionSet4,
  respiratoryAdmissionSet5,
  respiratoryAdmissionSet6,
  respiratoryAdmissionSet7,
  respiratoryAdmissionSet8,
  respiratoryAdmissionSet9,
  respiratoryAdmissionSet10,
  // Digestive
  digestiveAdmissionSet1,
  digestiveAdmissionSet2,
  digestiveAdmissionSet3,
  digestiveAdmissionSet4,
  digestiveAdmissionSet5,
  digestiveAdmissionSet6,
  digestiveAdmissionSet7,
  digestiveAdmissionSet8,
  digestiveAdmissionSet9,
  digestiveAdmissionSet10,
  // Lymphatic
  lymphaticAdmissionSet1,
  lymphaticAdmissionSet2,
  lymphaticAdmissionSet3,
  lymphaticAdmissionSet4,
  lymphaticAdmissionSet5,
  lymphaticAdmissionSet6,
  lymphaticAdmissionSet7,
  lymphaticAdmissionSet8,
  lymphaticAdmissionSet9,
  lymphaticAdmissionSet10,
  // Intro Anatomy
  introAnatPhysAdmissionSet1,
  introAnatPhysAdmissionSet2,
  introAnatPhysAdmissionSet3,
  introAnatPhysAdmissionSet4,
  introAnatPhysAdmissionSet5,
  introAnatPhysAdmissionSet6,
  introAnatPhysAdmissionSet7,
  introAnatPhysAdmissionSet8,
  introAnatPhysAdmissionSet9,
  introAnatPhysAdmissionSet10,
  // Chemistry
  chemBasicsAdmissionSet1,
  chemBasicsAdmissionSet2,
  chemBasicsAdmissionSet3,
  chemBasicsAdmissionSet4,
  chemBasicsAdmissionSet5,
  chemBasicsAdmissionSet6,
  chemBasicsAdmissionSet7,
  chemBasicsAdmissionSet8,
  chemBasicsAdmissionSet9,
  chemBasicsAdmissionSet10,
  // Cell Biology
  cellBiologyAdmissionSet1,
  cellBiologyAdmissionSet2,
  cellBiologyAdmissionSet3,
  cellBiologyAdmissionSet4,
  cellBiologyAdmissionSet5,
  cellBiologyAdmissionSet6,
  cellBiologyAdmissionSet7,
  cellBiologyAdmissionSet8,
  cellBiologyAdmissionSet9,
  cellBiologyAdmissionSet10,
  // Tissues
  tissuesAdmissionSet1,
  tissuesAdmissionSet2,
  tissuesAdmissionSet3,
  tissuesAdmissionSet4,
  tissuesAdmissionSet5,
  tissuesAdmissionSet6,
  tissuesAdmissionSet7,
  tissuesAdmissionSet8,
  tissuesAdmissionSet9,
  tissuesAdmissionSet10,
  // Integumentary
  integumentaryAdmissionSet1,
  integumentaryAdmissionSet2,
  integumentaryAdmissionSet3,
  integumentaryAdmissionSet4,
  integumentaryAdmissionSet5,
  integumentaryAdmissionSet6,
  integumentaryAdmissionSet7,
  integumentaryAdmissionSet8,
  integumentaryAdmissionSet9,
  integumentaryAdmissionSet10,
  // Skeletal
  skeletalAdmissionSet1,
  skeletalAdmissionSet2,
  skeletalAdmissionSet3,
  skeletalAdmissionSet4,
  skeletalAdmissionSet5,
  skeletalAdmissionSet6,
  skeletalAdmissionSet7,
  skeletalAdmissionSet8,
  skeletalAdmissionSet9,
  skeletalAdmissionSet10,
  // Muscular
  muscularAdmissionSet1,
  muscularAdmissionSet2,
  muscularAdmissionSet3,
  muscularAdmissionSet4,
  muscularAdmissionSet5,
  muscularAdmissionSet6,
  muscularAdmissionSet7,
  muscularAdmissionSet8,
  muscularAdmissionSet9,
  muscularAdmissionSet10,
  // Nervous
  nervousAdmissionSet1,
  nervousAdmissionSet2,
  nervousAdmissionSet3,
  nervousAdmissionSet4,
  nervousAdmissionSet5,
  nervousAdmissionSet6,
  nervousAdmissionSet7,
  nervousAdmissionSet8,
  nervousAdmissionSet9,
  nervousAdmissionSet10,
  // Senses
  sensesAdmissionSet1,
  sensesAdmissionSet2,
  sensesAdmissionSet3,
  sensesAdmissionSet4,
  sensesAdmissionSet5,
  sensesAdmissionSet6,
  sensesAdmissionSet7,
  sensesAdmissionSet8,
  sensesAdmissionSet9,
  sensesAdmissionSet10,
  // Endocrine
  endocrineAdmissionSet1,
  endocrineAdmissionSet2,
  endocrineAdmissionSet3,
  endocrineAdmissionSet4,
  endocrineAdmissionSet5,
  endocrineAdmissionSet6,
  endocrineAdmissionSet7,
  endocrineAdmissionSet8,
  endocrineAdmissionSet9,
  endocrineAdmissionSet10,
  // Blood
  bloodAdmissionSet1,
  bloodAdmissionSet2,
  bloodAdmissionSet3,
  bloodAdmissionSet4,
  bloodAdmissionSet5,
  bloodAdmissionSet6,
  bloodAdmissionSet7,
  bloodAdmissionSet8,
  bloodAdmissionSet9,
  bloodAdmissionSet10,
  // Metabolism
  metabolismNutritionAdmissionSet1,
  metabolismNutritionAdmissionSet2,
  metabolismNutritionAdmissionSet3,
  metabolismNutritionAdmissionSet4,
  metabolismNutritionAdmissionSet5,
  metabolismNutritionAdmissionSet6,
  metabolismNutritionAdmissionSet7,
  metabolismNutritionAdmissionSet8,
  metabolismNutritionAdmissionSet9,
  metabolismNutritionAdmissionSet10,
  // Urinary
  urinaryAdmissionSet1,
  urinaryAdmissionSet2,
  urinaryAdmissionSet3,
  urinaryAdmissionSet4,
  urinaryAdmissionSet5,
  urinaryAdmissionSet6,
  urinaryAdmissionSet7,
  urinaryAdmissionSet8,
  urinaryAdmissionSet9,
  urinaryAdmissionSet10,
  // Male Reproductive
  reproMaleAdmissionSet1,
  reproMaleAdmissionSet2,
  reproMaleAdmissionSet3,
  reproMaleAdmissionSet4,
  reproMaleAdmissionSet5,
  reproMaleAdmissionSet6,
  reproMaleAdmissionSet7,
  reproMaleAdmissionSet8,
  reproMaleAdmissionSet9,
  reproMaleAdmissionSet10,
  // Female Reproductive
  reproFemaleAdmissionSet1,
  reproFemaleAdmissionSet2,
  reproFemaleAdmissionSet3,
  reproFemaleAdmissionSet4,
  reproFemaleAdmissionSet5,
  reproFemaleAdmissionSet6,
  reproFemaleAdmissionSet7,
  reproFemaleAdmissionSet8,
  reproFemaleAdmissionSet9,
  reproFemaleAdmissionSet10,
  // Embryology
  embryologyAdmissionSet1,
  embryologyAdmissionSet2,
  embryologyAdmissionSet3,
  embryologyAdmissionSet4,
  embryologyAdmissionSet5,
  embryologyAdmissionSet6,
  embryologyAdmissionSet7,
  embryologyAdmissionSet8,
  embryologyAdmissionSet9,
  embryologyAdmissionSet10,
} from '../mocks/questions_med_admission';

// Mapare seturi la capitole
interface ChapterConfig {
  chapterId: string;
  sets: any[][];
}

const chapterConfigs: ChapterConfig[] = [
  {
    chapterId: 'intro-anatomy',
    sets: [
      introAnatPhysAdmissionSet1, introAnatPhysAdmissionSet2, introAnatPhysAdmissionSet3,
      introAnatPhysAdmissionSet4, introAnatPhysAdmissionSet5, introAnatPhysAdmissionSet6,
      introAnatPhysAdmissionSet7, introAnatPhysAdmissionSet8, introAnatPhysAdmissionSet9,
      introAnatPhysAdmissionSet10
    ]
  },
  {
    chapterId: 'chemistry',
    sets: [
      chemBasicsAdmissionSet1, chemBasicsAdmissionSet2, chemBasicsAdmissionSet3,
      chemBasicsAdmissionSet4, chemBasicsAdmissionSet5, chemBasicsAdmissionSet6,
      chemBasicsAdmissionSet7, chemBasicsAdmissionSet8, chemBasicsAdmissionSet9,
      chemBasicsAdmissionSet10
    ]
  },
  {
    chapterId: 'cell-biology',
    sets: [
      cellBiologyAdmissionSet1, cellBiologyAdmissionSet2, cellBiologyAdmissionSet3,
      cellBiologyAdmissionSet4, cellBiologyAdmissionSet5, cellBiologyAdmissionSet6,
      cellBiologyAdmissionSet7, cellBiologyAdmissionSet8, cellBiologyAdmissionSet9,
      cellBiologyAdmissionSet10
    ]
  },
  {
    chapterId: 'tissues',
    sets: [
      tissuesAdmissionSet1, tissuesAdmissionSet2, tissuesAdmissionSet3,
      tissuesAdmissionSet4, tissuesAdmissionSet5, tissuesAdmissionSet6,
      tissuesAdmissionSet7, tissuesAdmissionSet8, tissuesAdmissionSet9,
      tissuesAdmissionSet10
    ]
  },
  {
    chapterId: 'integumentary',
    sets: [
      integumentaryAdmissionSet1, integumentaryAdmissionSet2, integumentaryAdmissionSet3,
      integumentaryAdmissionSet4, integumentaryAdmissionSet5, integumentaryAdmissionSet6,
      integumentaryAdmissionSet7, integumentaryAdmissionSet8, integumentaryAdmissionSet9,
      integumentaryAdmissionSet10
    ]
  },
  {
    chapterId: 'skeletal',
    sets: [
      skeletalAdmissionSet1, skeletalAdmissionSet2, skeletalAdmissionSet3,
      skeletalAdmissionSet4, skeletalAdmissionSet5, skeletalAdmissionSet6,
      skeletalAdmissionSet7, skeletalAdmissionSet8, skeletalAdmissionSet9,
      skeletalAdmissionSet10
    ]
  },
  {
    chapterId: 'muscular',
    sets: [
      muscularAdmissionSet1, muscularAdmissionSet2, muscularAdmissionSet3,
      muscularAdmissionSet4, muscularAdmissionSet5, muscularAdmissionSet6,
      muscularAdmissionSet7, muscularAdmissionSet8, muscularAdmissionSet9,
      muscularAdmissionSet10
    ]
  },
  {
    chapterId: 'nervous',
    sets: [
      nervousAdmissionSet1, nervousAdmissionSet2, nervousAdmissionSet3,
      nervousAdmissionSet4, nervousAdmissionSet5, nervousAdmissionSet6,
      nervousAdmissionSet7, nervousAdmissionSet8, nervousAdmissionSet9,
      nervousAdmissionSet10
    ]
  },
  {
    chapterId: 'senses',
    sets: [
      sensesAdmissionSet1, sensesAdmissionSet2, sensesAdmissionSet3,
      sensesAdmissionSet4, sensesAdmissionSet5, sensesAdmissionSet6,
      sensesAdmissionSet7, sensesAdmissionSet8, sensesAdmissionSet9,
      sensesAdmissionSet10
    ]
  },
  {
    chapterId: 'endocrine',
    sets: [
      endocrineAdmissionSet1, endocrineAdmissionSet2, endocrineAdmissionSet3,
      endocrineAdmissionSet4, endocrineAdmissionSet5, endocrineAdmissionSet6,
      endocrineAdmissionSet7, endocrineAdmissionSet8, endocrineAdmissionSet9,
      endocrineAdmissionSet10
    ]
  },
  {
    chapterId: 'blood',
    sets: [
      bloodAdmissionSet1, bloodAdmissionSet2, bloodAdmissionSet3,
      bloodAdmissionSet4, bloodAdmissionSet5, bloodAdmissionSet6,
      bloodAdmissionSet7, bloodAdmissionSet8, bloodAdmissionSet9,
      bloodAdmissionSet10
    ]
  },
  {
    chapterId: 'cardiovascular',
    sets: [
      cardioAdmissionSet1, cardioAdmissionSet2, cardioAdmissionSet3,
      cardioAdmissionSet4, cardioAdmissionSet5, cardioAdmissionSet6,
      cardioAdmissionSet7, cardioAdmissionSet8, cardioAdmissionSet9,
      cardioAdmissionSet10
    ]
  },
  {
    chapterId: 'lymphatic',
    sets: [
      lymphaticAdmissionSet1, lymphaticAdmissionSet2, lymphaticAdmissionSet3,
      lymphaticAdmissionSet4, lymphaticAdmissionSet5, lymphaticAdmissionSet6,
      lymphaticAdmissionSet7, lymphaticAdmissionSet8, lymphaticAdmissionSet9,
      lymphaticAdmissionSet10
    ]
  },
  {
    chapterId: 'respiratory',
    sets: [
      respiratoryAdmissionSet1, respiratoryAdmissionSet2, respiratoryAdmissionSet3,
      respiratoryAdmissionSet4, respiratoryAdmissionSet5, respiratoryAdmissionSet6,
      respiratoryAdmissionSet7, respiratoryAdmissionSet8, respiratoryAdmissionSet9,
      respiratoryAdmissionSet10
    ]
  },
  {
    chapterId: 'digestive',
    sets: [
      digestiveAdmissionSet1, digestiveAdmissionSet2, digestiveAdmissionSet3,
      digestiveAdmissionSet4, digestiveAdmissionSet5, digestiveAdmissionSet6,
      digestiveAdmissionSet7, digestiveAdmissionSet8, digestiveAdmissionSet9,
      digestiveAdmissionSet10
    ]
  },
  {
    chapterId: 'metabolism',
    sets: [
      metabolismNutritionAdmissionSet1, metabolismNutritionAdmissionSet2, metabolismNutritionAdmissionSet3,
      metabolismNutritionAdmissionSet4, metabolismNutritionAdmissionSet5, metabolismNutritionAdmissionSet6,
      metabolismNutritionAdmissionSet7, metabolismNutritionAdmissionSet8, metabolismNutritionAdmissionSet9,
      metabolismNutritionAdmissionSet10
    ]
  },
  {
    chapterId: 'urinary',
    sets: [
      urinaryAdmissionSet1, urinaryAdmissionSet2, urinaryAdmissionSet3,
      urinaryAdmissionSet4, urinaryAdmissionSet5, urinaryAdmissionSet6,
      urinaryAdmissionSet7, urinaryAdmissionSet8, urinaryAdmissionSet9,
      urinaryAdmissionSet10
    ]
  },
  {
    chapterId: 'repro-male',
    sets: [
      reproMaleAdmissionSet1, reproMaleAdmissionSet2, reproMaleAdmissionSet3,
      reproMaleAdmissionSet4, reproMaleAdmissionSet5, reproMaleAdmissionSet6,
      reproMaleAdmissionSet7, reproMaleAdmissionSet8, reproMaleAdmissionSet9,
      reproMaleAdmissionSet10
    ]
  },
  {
    chapterId: 'repro-female',
    sets: [
      reproFemaleAdmissionSet1, reproFemaleAdmissionSet2, reproFemaleAdmissionSet3,
      reproFemaleAdmissionSet4, reproFemaleAdmissionSet5, reproFemaleAdmissionSet6,
      reproFemaleAdmissionSet7, reproFemaleAdmissionSet8, reproFemaleAdmissionSet9,
      reproFemaleAdmissionSet10
    ]
  },
  {
    chapterId: 'embryology',
    sets: [
      embryologyAdmissionSet1, embryologyAdmissionSet2, embryologyAdmissionSet3,
      embryologyAdmissionSet4, embryologyAdmissionSet5, embryologyAdmissionSet6,
      embryologyAdmissionSet7, embryologyAdmissionSet8, embryologyAdmissionSet9,
      embryologyAdmissionSet10
    ]
  },
];

interface Question {
  id: string;
  category: string;
  difficulty: string;
  question: string;
  question_ro: string;
  options: string[];
  options_ro: string[];
  correctAnswer: number;
  explanation: string;
  explanation_ro: string;
}

interface SupabaseQuestion {
  id: string;
  category: string;
  difficulty: string;
  question: string;
  question_ro: string;
  options: string[];
  options_ro: string[];
  correct_answer: number;
  explanation: string;
  explanation_ro: string;
  chapter_id: string;
  set_number: number;
}

async function migrateQuestions() {
  console.log('🚀 Începe migrarea întrebărilor în Supabase...\n');

  let totalInserted = 0;
  let totalErrors = 0;

  for (const config of chapterConfigs) {
    console.log(`\n📚 Procesez capitolul: ${config.chapterId}`);
    
    for (let setIndex = 0; setIndex < config.sets.length; setIndex++) {
      const setNumber = setIndex + 1;
      const questions = config.sets[setIndex];
      
      if (!questions || questions.length === 0) {
        console.log(`  ⚠️ Set ${setNumber} este gol, sar peste...`);
        continue;
      }

      // Transformă întrebările pentru Supabase
      const supabaseQuestions: SupabaseQuestion[] = questions.map((q: Question) => ({
        id: q.id,
        category: q.category,
        difficulty: q.difficulty,
        question: q.question,
        question_ro: q.question_ro,
        options: q.options,
        options_ro: q.options_ro,
        correct_answer: q.correctAnswer,
        explanation: q.explanation,
        explanation_ro: q.explanation_ro,
        chapter_id: config.chapterId,
        set_number: setNumber,
      }));

      // Inserează în batch
      const { data, error } = await supabase
        .from('questions')
        .upsert(supabaseQuestions, { 
          onConflict: 'id',
          ignoreDuplicates: false 
        });

      if (error) {
        console.error(`  ❌ Eroare la Set ${setNumber}:`, error.message);
        totalErrors += questions.length;
      } else {
        console.log(`  ✅ Set ${setNumber}: ${questions.length} întrebări inserare`);
        totalInserted += questions.length;
      }
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Migrare completă!`);
  console.log(`   Total inserate: ${totalInserted}`);
  console.log(`   Total erori: ${totalErrors}`);
  console.log('='.repeat(50));
}

// Funcție pentru a verifica conexiunea
async function checkConnection() {
  console.log('🔍 Verificare conexiune Supabase...');
  
  const { data, error } = await supabase
    .from('chapters')
    .select('count')
    .limit(1);
  
  if (error) {
    console.error('❌ Eroare conexiune:', error.message);
    console.log('\n📝 Asigură-te că:');
    console.log('   1. SUPABASE_URL și SUPABASE_SERVICE_KEY sunt setate corect');
    console.log('   2. Tabela "chapters" există (rulează schema.sql mai întâi)');
    console.log('   3. Service role key are permisiuni de scriere');
    return false;
  }
  
  console.log('✅ Conexiune reușită!\n');
  return true;
}

// Funcție pentru a șterge toate întrebările existente
async function clearExistingQuestions() {
  console.log('🗑️ Șterg întrebările existente...');
  
  const { error } = await supabase
    .from('questions')
    .delete()
    .neq('id', 'placeholder'); // Șterge toate
  
  if (error) {
    console.error('❌ Eroare la ștergere:', error.message);
    return false;
  }
  
  console.log('✅ Întrebări șterse!\n');
  return true;
}

// Main
async function main() {
  const args = process.argv.slice(2);
  const shouldClear = args.includes('--clear');
  
  console.log('╔════════════════════════════════════════════════╗');
  console.log('║   MEDVBA - Migrare Întrebări în Supabase       ║');
  console.log('╚════════════════════════════════════════════════╝\n');
  
  const connected = await checkConnection();
  if (!connected) {
    process.exit(1);
  }
  
  if (shouldClear) {
    const cleared = await clearExistingQuestions();
    if (!cleared) {
      process.exit(1);
    }
  }
  
  await migrateQuestions();
}

main().catch(console.error);
