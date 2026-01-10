import type { Question } from './questions';

// ============================================================================
// MALE GENITAL SYSTEM QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Testiculul (testicleQuestions)
// 2. Bursele testiculare (scrotalSacQuestions)
// 3. Complex epididimo-testicular (epididymoTesticularComplexQuestions)
// 4. Ductul deferent și ejaculator (vasDeferensEjaculatoryDuctQuestions)
// 5. Prostata si glandele seminale (prostateSeminalVesiclesQuestions)
// 6. Penisul (penisQuestions)
// ============================================================================

// 1. Testicle - Placeholder for future questions
export const testicleQuestions: Question[] = [];

// 2. Scrotal Sac (Bursae) - Placeholder for future questions
export const scrotalSacQuestions: Question[] = [];

// 3. Epididymo-Testicular Complex - Placeholder for future questions
export const epididymoTesticularComplexQuestions: Question[] = [];

// 4. Vas Deferens and Ejaculatory Duct - Placeholder for future questions
export const vasDeferensEjaculatoryDuctQuestions: Question[] = [];

// 5. Prostate and Seminal Vesicles - Placeholder for future questions
export const prostateSeminalVesiclesQuestions: Question[] = [];

// 6. Penis - Placeholder for future questions
export const penisQuestions: Question[] = [];

// Combine all male genital questions for easy import
export const maleGenitalQuestions: Question[] = [
  ...testicleQuestions,
  ...scrotalSacQuestions,
  ...epididymoTesticularComplexQuestions,
  ...vasDeferensEjaculatoryDuctQuestions,
  ...prostateSeminalVesiclesQuestions,
  ...penisQuestions
];
