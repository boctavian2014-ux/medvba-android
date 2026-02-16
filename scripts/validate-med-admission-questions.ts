/**
 * Validates all med-admission-barrons questions: structure, correctAnswer, no duplicate IDs.
 * Run: npx tsx scripts/validate-med-admission-questions.ts
 */
import {
  cardioAdmissionSet1,
  bloodAdmissionSet1,
  respiratoryAdmissionSet1,
  metabolismNutritionAdmissionSet1,
  digestiveAdmissionSet1,
  nervousAdmissionSet1,
  introAnatPhysAdmissionSet1,
  chemBasicsAdmissionSet1,
  cellBiologyAdmissionSet1,
  tissuesAdmissionSet1,
  integumentaryAdmissionSet1,
  skeletalAdmissionSet1,
  muscularAdmissionSet1,
  sensesAdmissionSet1,
  endocrineAdmissionSet1,
  lymphaticAdmissionSet1,
  urinaryAdmissionSet1,
  reproMaleAdmissionSet1,
  reproFemaleAdmissionSet1,
  embryologyAdmissionSet1,
} from '../mocks/questions_med_admission';

const allSets = [
  cardioAdmissionSet1,
  bloodAdmissionSet1,
  respiratoryAdmissionSet1,
  metabolismNutritionAdmissionSet1,
  digestiveAdmissionSet1,
  nervousAdmissionSet1,
  introAnatPhysAdmissionSet1,
  chemBasicsAdmissionSet1,
  cellBiologyAdmissionSet1,
  tissuesAdmissionSet1,
  integumentaryAdmissionSet1,
  skeletalAdmissionSet1,
  muscularAdmissionSet1,
  sensesAdmissionSet1,
  endocrineAdmissionSet1,
  lymphaticAdmissionSet1,
  urinaryAdmissionSet1,
  reproMaleAdmissionSet1,
  reproFemaleAdmissionSet1,
  embryologyAdmissionSet1,
];

const allQuestions = allSets.flat();

const ids = new Set<string>();
const errors: string[] = [];

for (const q of allQuestions) {
  if (ids.has(q.id)) {
    errors.push(`Duplicate ID: ${q.id}`);
  }
  ids.add(q.id);

  const optLen = q.options?.length ?? 0;
  if (optLen !== 5) {
    errors.push(`${q.id}: options.length = ${optLen} (expected 5)`);
  }

  const roLen = q.options_ro?.length ?? 0;
  if (roLen !== 5) {
    errors.push(`${q.id}: options_ro.length = ${roLen} (expected 5)`);
  }

  if (q.correctAnswer < 0 || q.correctAnswer > 4) {
    errors.push(`${q.id}: correctAnswer = ${q.correctAnswer} (expected 0-4)`);
  }

  if (!q.question_ro?.trim()) {
    errors.push(`${q.id}: missing or empty question_ro`);
  }
  if (!q.explanation_ro?.trim()) {
    errors.push(`${q.id}: missing or empty explanation_ro`);
  }
}

console.log('Total questions:', allQuestions.length);
console.log('Unique IDs:', ids.size);
if (errors.length > 0) {
  console.error('Validation errors:', errors.length);
  errors.forEach((e) => console.error('  -', e));
  process.exit(1);
}
console.log('All validations passed.');
