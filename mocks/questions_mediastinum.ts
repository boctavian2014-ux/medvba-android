import type { Question } from './questions';

// ============================================================================
// MEDIASTINUM & THORACIC CAVITY QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Compartimentarea cavității toracice (thoracicCavityCompartmentsQuestions)
// 2. Compartimentarea mediastinului (mediastinumCompartmentsQuestions)
// 3. Mediastinul anterior (anteriorMediastinumQuestions)
// 4. Mediastinul posterior (posteriorMediastinumQuestions)
// 5. Esofagul toracic (thoracicEsophagusQuestions)
// ============================================================================

// 1. Thoracic Cavity Compartments - Placeholder for future questions
export const thoracicCavityCompartmentsQuestions: Question[] = [];

// 2. Mediastinum Compartments - Placeholder for future questions
export const mediastinumCompartmentsQuestions: Question[] = [];

// 3. Anterior Mediastinum - Placeholder for future questions
export const anteriorMediastinumQuestions: Question[] = [];

// 4. Posterior Mediastinum - Placeholder for future questions
export const posteriorMediastinumQuestions: Question[] = [];

// 5. Thoracic Esophagus - Placeholder for future questions
export const thoracicEsophagusQuestions: Question[] = [];

// Combine all mediastinum questions for easy import
export const mediastinumQuestions: Question[] = [
  ...thoracicCavityCompartmentsQuestions,
  ...mediastinumCompartmentsQuestions,
  ...anteriorMediastinumQuestions,
  ...posteriorMediastinumQuestions,
  ...thoracicEsophagusQuestions
];
