import type { Question } from './questions';

// ============================================================================
// FEMALE GENITAL SYSTEM QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Ovarul (ovaryQuestions)
// 2. Trompa uterina (uterineTubeQuestions)
// 3. Uterul – raporturi și mijloace de susținere (uterusQuestions)
// 4. Ligamentele largi (broadLigamentsQuestions)
// 5. Vaginul (vaginaQuestions)
// 6. Vulva (vulvaQuestions)
// 7. Glandele bulbo-vaginale și bulbo-uretrale (bulboVaginalUrethralGlandsQuestions)
// ============================================================================

// 1. Ovary - Placeholder for future questions
export const ovaryQuestions: Question[] = [];

// 2. Uterine Tube (Fallopian Tube) - Placeholder for future questions
export const uterineTubeQuestions: Question[] = [];

// 3. Uterus: Relations and Support Mechanisms - Placeholder for future questions
export const uterusQuestions: Question[] = [];

// 4. Broad Ligaments - Placeholder for future questions
export const broadLigamentsQuestions: Question[] = [];

// 5. Vagina - Placeholder for future questions
export const vaginaQuestions: Question[] = [];

// 6. Vulva - Placeholder for future questions
export const vulvaQuestions: Question[] = [];

// 7. Bulbo-vaginal and Bulbo-urethral Glands - Placeholder for future questions
export const bulboVaginalUrethralGlandsQuestions: Question[] = [];

// Combine all female genital questions for easy import
export const femaleGenitalQuestions: Question[] = [
  ...ovaryQuestions,
  ...uterineTubeQuestions,
  ...uterusQuestions,
  ...broadLigamentsQuestions,
  ...vaginaQuestions,
  ...vulvaQuestions,
  ...bulboVaginalUrethralGlandsQuestions
];
