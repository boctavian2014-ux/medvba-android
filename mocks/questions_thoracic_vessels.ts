import type { Question } from './questions';

// ============================================================================
// THORACIC VESSELS QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Aorta ascendentă (ascendingAortaQuestions)
// 2. Arcul aortic (aorticArchQuestions)
// 3. Aorta descendentă toracică (descendingThoracicAortaQuestions)
// 4. Vasele toracice interne (internalThoracicVesselsQuestions)
// 5. Trunchiurile venoase brahiocefalice și vena cavă superioară (brachiocephalicVeinsSVCQuestions)
// 6. Vena cavă inferioară (inferiorVenaCavaQuestions)
// 7. Venele azigos (azygosVeinsQuestions)
// 8. Ductul toracic (thoracicDuctQuestions)
// ============================================================================

// 1. Ascending Aorta - Placeholder for future questions
export const ascendingAortaQuestions: Question[] = [];

// 2. Aortic Arch - Placeholder for future questions
export const aorticArchQuestions: Question[] = [];

// 3. Descending Thoracic Aorta - Placeholder for future questions
export const descendingThoracicAortaQuestions: Question[] = [];

// 4. Internal Thoracic Vessels - Placeholder for future questions
export const internalThoracicVesselsQuestions: Question[] = [];

// 5. Brachiocephalic Veins and Superior Vena Cava - Placeholder for future questions
export const brachiocephalicVeinsSVCQuestions: Question[] = [];

// 6. Inferior Vena Cava - Placeholder for future questions
export const inferiorVenaCavaQuestions: Question[] = [];

// 7. Azygos Veins - Placeholder for future questions
export const azygosVeinsQuestions: Question[] = [];

// 8. Thoracic Duct - Placeholder for future questions
export const thoracicDuctQuestions: Question[] = [];

// Combine all thoracic vessels questions for easy import
export const thoracicVesselsQuestions: Question[] = [
  ...ascendingAortaQuestions,
  ...aorticArchQuestions,
  ...descendingThoracicAortaQuestions,
  ...internalThoracicVesselsQuestions,
  ...brachiocephalicVeinsSVCQuestions,
  ...inferiorVenaCavaQuestions,
  ...azygosVeinsQuestions,
  ...thoracicDuctQuestions
];
