import type { Question } from './questions';

// ============================================================================
// PELVIC VESSELS QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Vasele genitale (genitalVesselsQuestions)
// 2. Vasele iliace interne (internalIliacVesselsQuestions)
// ============================================================================

// 1. Genital Vessels - Placeholder for future questions
export const genitalVesselsQuestions: Question[] = [];

// 2. Internal Iliac Vessels - Placeholder for future questions
export const internalIliacVesselsQuestions: Question[] = [];

// Combine all pelvic vessels questions for easy import
export const pelvicVesselsQuestions: Question[] = [
  ...genitalVesselsQuestions,
  ...internalIliacVesselsQuestions
];
