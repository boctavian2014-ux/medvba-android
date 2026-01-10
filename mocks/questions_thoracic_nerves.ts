import type { Question } from './questions';

// ============================================================================
// THORACIC NERVES & AUTONOMIC QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Nervii frenici (phrenicNervesQuestions)
// 2. Nervii vagi în torace (vagusNervesThoraxQuestions)
// 3. Lanțul simpatic toracic, nervii splanchnici (thoracicSympatheticChainQuestions)
// 4. Plexul celiac (celiacPlexusQuestions)
// ============================================================================

// 1. Phrenic Nerves - Placeholder for future questions
export const phrenicNervesQuestions: Question[] = [];

// 2. Vagus Nerves in Thorax - Placeholder for future questions
export const vagusNervesThoraxQuestions: Question[] = [];

// 3. Thoracic Sympathetic Chain and Splanchnic Nerves - Placeholder for future questions
export const thoracicSympatheticChainQuestions: Question[] = [];

// 4. Celiac Plexus - Placeholder for future questions
export const celiacPlexusQuestions: Question[] = [];

// Combine all thoracic nerves questions for easy import
export const thoracicNervesQuestions: Question[] = [
  ...phrenicNervesQuestions,
  ...vagusNervesThoraxQuestions,
  ...thoracicSympatheticChainQuestions,
  ...celiacPlexusQuestions
];
