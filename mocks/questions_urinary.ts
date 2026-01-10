import type { Question } from './questions';

// ============================================================================
// URINARY SYSTEM QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Loja renală și fascia fibroasă renală (renalLodgeFasciaQuestions)
// 2. Rinichiul drept – configurație externă și raporturi (rightKidneyQuestions)
// 3. Rinichiul stâng – configurație externă și raporturi (leftKidneyQuestions)
// 4. Pediculul renal drept (rightRenalPedicleQuestions)
// 5. Pediculul renal stâng (leftRenalPedicleQuestions)
// 6. Căile urinare excretorii: calice, bazinet, ureter lombo-iliac (urinaryExcretoryPathwaysQuestions)
// 7. Ureterul (ureterQuestions)
// 8. Glandele suprarenale (adrenalGlandsQuestions)
// 9. Vezica urinară (urinaryBladderQuestions)
// 10. Loja vezicală (bladderLodgeQuestions)
// 11. Uretra masculină (maleUrethraQuestions)
// 12. Uretra feminină (femaleUrethraQuestions)
// ============================================================================

// 1. Renal Lodge and Renal Fascia - Placeholder for future questions
export const renalLodgeFasciaQuestions: Question[] = [];

// 2. Right Kidney: External Configuration and Relations - Placeholder for future questions
export const rightKidneyQuestions: Question[] = [];

// 3. Left Kidney: External Configuration and Relations - Placeholder for future questions
export const leftKidneyQuestions: Question[] = [];

// 4. Right Renal Pedicle - Placeholder for future questions
export const rightRenalPedicleQuestions: Question[] = [];

// 5. Left Renal Pedicle - Placeholder for future questions
export const leftRenalPedicleQuestions: Question[] = [];

// 6. Urinary Excretory Pathways: Calyces, Pelvis, Lumbo-iliac Ureter - Placeholder for future questions
export const urinaryExcretoryPathwaysQuestions: Question[] = [];

// 7. Ureter - Placeholder for future questions
export const ureterQuestions: Question[] = [];

// 8. Adrenal (Suprarenal) Glands - Placeholder for future questions
export const adrenalGlandsQuestions: Question[] = [];

// 9. Urinary Bladder - Placeholder for future questions
export const urinaryBladderQuestions: Question[] = [];

// 10. Bladder Lodge - Placeholder for future questions
export const bladderLodgeQuestions: Question[] = [];

// 11. Male Urethra - Placeholder for future questions
export const maleUrethraQuestions: Question[] = [];

// 12. Female Urethra - Placeholder for future questions
export const femaleUrethraQuestions: Question[] = [];

// Combine all urinary questions for easy import
export const urinaryQuestions: Question[] = [
  ...renalLodgeFasciaQuestions,
  ...rightKidneyQuestions,
  ...leftKidneyQuestions,
  ...rightRenalPedicleQuestions,
  ...leftRenalPedicleQuestions,
  ...urinaryExcretoryPathwaysQuestions,
  ...ureterQuestions,
  ...adrenalGlandsQuestions,
  ...urinaryBladderQuestions,
  ...bladderLodgeQuestions,
  ...maleUrethraQuestions,
  ...femaleUrethraQuestions
];
