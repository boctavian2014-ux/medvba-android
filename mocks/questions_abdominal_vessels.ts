import type { Question } from './questions';

// ============================================================================
// ABDOMINAL VESSELS QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Aorta abdominală (abdominalAortaQuestions)
// 2. Trunchiul celiac (celiacTrunkQuestions)
// 3. Artera hepatică (hepaticArteryQuestions)
// 4. Vena portă (portalVeinQuestions)
// 5. Vasele splenice (splenicVesselsQuestions)
// 6. Vasele mezenterice superioare (superiorMesentericVesselsQuestions)
// 7. Vasele mezenterice inferioare (inferiorMesentericVesselsQuestions)
// 8. Arterele rectale (rectalArteriesQuestions)
// ============================================================================

// 1. Abdominal Aorta - Placeholder for future questions
export const abdominalAortaQuestions: Question[] = [];

// 2. Celiac Trunk - Placeholder for future questions
export const celiacTrunkQuestions: Question[] = [];

// 3. Hepatic Artery - Placeholder for future questions
export const hepaticArteryQuestions: Question[] = [];

// 4. Portal Vein - Placeholder for future questions
export const portalVeinQuestions: Question[] = [];

// 5. Splenic Vessels - Placeholder for future questions
export const splenicVesselsQuestions: Question[] = [];

// 6. Superior Mesenteric Vessels - Placeholder for future questions
export const superiorMesentericVesselsQuestions: Question[] = [];

// 7. Inferior Mesenteric Vessels - Placeholder for future questions
export const inferiorMesentericVesselsQuestions: Question[] = [];

// 8. Rectal Arteries - Placeholder for future questions
export const rectalArteriesQuestions: Question[] = [];

// Combine all abdominal vessels questions for easy import
export const abdominalVesselsQuestions: Question[] = [
  ...abdominalAortaQuestions,
  ...celiacTrunkQuestions,
  ...hepaticArteryQuestions,
  ...portalVeinQuestions,
  ...splenicVesselsQuestions,
  ...superiorMesentericVesselsQuestions,
  ...inferiorMesentericVesselsQuestions,
  ...rectalArteriesQuestions
];
