import { 
  internalOrgansQuestions, 
  headNeckQuestions, 
  neuroanatomyQuestions,
  pulmonaryAndBronchialCirculationQuestions,
  systemicAndPortalCirculationQuestions,
  fetalCirculationQuestions,
  microcirculationAndCapillaryExchangeQuestions,
  hemodynamicsAndFlowQuestions,
  baroreflexChemoreflexAutoregulationQuestions,
  coronaryCirculationQuestions,
  cerebralAutoregulationAndBBBQuestions,
  lymphaticSystemOverviewQuestions
} from './questions_internal_organs';

import {
  perforatingAndWatershedQuestions
} from './questions_neuro';

import {
  generalVertebraeQuestions,
  regionalVertebraeQuestions,
  thoracicVertebraeQuestions,
  lumbarVertebraeQuestions,
  sacrumQuestions,
  atlasAxisVertebraeQuestions,
  ribsGeneralQuestions,
  sternumQuestions
} from './questions_bones_axial';

import {
  clavicleQuestions,
  humerusQuestions,
  radiusAndUlnaQuestions,
  carpalBonesQuestions,
  hipBoneQuestions,
  femurQuestions,
  patellaQuestions,
  tibiaQuestions,
  fibulaQuestions,
  tibiaFibulaQuestions,
  talusQuestions,
  calcaneusQuestions,
  tarsalBonesQuestions,
  upperLimbBonesQuestions
} from './questions_bones_appendicular';

import {
  shoulderMusclesQuestions,
  armMusclesQuestions,
  forearmMusclesQuestions,
  anteriorThighMusclesQuestions,
  hamstringMusclesQuestions,
  medialThighMusclesQuestions,
  legMusclesQuestions,
  halluxMusclesQuestions,
  midplantarMusclesQuestions
} from './questions_muscles';

import {
  brachialArteryQuestions
} from './questions_vessels';

import {
  medianNerveQuestions,
  musculocutaneousNerveQuestions,
  radialNerveQuestions
} from './questions_nerves';

import {
  brachialPlexusQuestions,
  lumbarPlexusQuestions,
  sacralPlexusQuestions,
  sensoryInnervationQuestions
} from './questions_plexuses';

import {
  shoulderJointQuestions,
  elbowJointQuestions,
  wristJointQuestions,
  hipJointQuestions,
  kneeJointQuestions,
  ankleJointQuestions
} from './questions_joints';

export interface Question {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  questionCount: number;
  completedCount: number;
}

export const categories: Category[] = [
  { id: 'upper-lower-limbs', name: 'Upper/Lower Limbs', icon: 'bone', color: '#FF6B6B', questionCount: 8200, completedCount: 1240 },
  { id: 'internal-organs', name: 'Internal Organs', icon: 'heart', color: '#4ECDC4', questionCount: 7500, completedCount: 980 },
  { id: 'head-neck', name: 'Head and Neck', icon: 'user', color: '#45B7D1', questionCount: 6800, completedCount: 720 },
  { id: 'neuroanatomy', name: 'Neuroanatomy', icon: 'brain', color: '#DDA0DD', questionCount: 5555, completedCount: 450 },
];

export * from './questions_bones_axial';
export * from './questions_bones_appendicular';
export * from './questions_muscles';
export * from './questions_vessels';
export * from './questions_nerves';
export * from './questions_plexuses';
export * from './questions_joints';
export * from './questions_internal_organs';
export * from './questions_neuro';

export const sampleQuestions: Question[] = [
  // Axial skeleton
  ...generalVertebraeQuestions,
  ...regionalVertebraeQuestions,
  ...thoracicVertebraeQuestions,
  ...lumbarVertebraeQuestions,
  ...sacrumQuestions,
  ...atlasAxisVertebraeQuestions,
  ...ribsGeneralQuestions,
  ...sternumQuestions,
  // Appendicular skeleton
  ...clavicleQuestions,
  ...humerusQuestions,
  ...radiusAndUlnaQuestions,
  ...carpalBonesQuestions,
  ...hipBoneQuestions,
  ...femurQuestions,
  ...patellaQuestions,
  ...tibiaQuestions,
  ...fibulaQuestions,
  ...tibiaFibulaQuestions,
  ...talusQuestions,
  ...calcaneusQuestions,
  ...tarsalBonesQuestions,
  ...upperLimbBonesQuestions,
  // Muscles
  ...shoulderMusclesQuestions,
  ...armMusclesQuestions,
  ...forearmMusclesQuestions,
  ...anteriorThighMusclesQuestions,
  ...hamstringMusclesQuestions,
  ...medialThighMusclesQuestions,
  ...legMusclesQuestions,
  ...halluxMusclesQuestions,
  ...midplantarMusclesQuestions,
  // Vessels
  ...brachialArteryQuestions,
  // Nerves
  ...medianNerveQuestions,
  ...musculocutaneousNerveQuestions,
  ...radialNerveQuestions,
  // Plexuses (placeholders)
  ...brachialPlexusQuestions,
  ...lumbarPlexusQuestions,
  ...sacralPlexusQuestions,
  ...sensoryInnervationQuestions,
  // Joints (placeholders)
  ...shoulderJointQuestions,
  ...elbowJointQuestions,
  ...wristJointQuestions,
  ...hipJointQuestions,
  ...kneeJointQuestions,
  ...ankleJointQuestions,
  // Internal organs
  ...internalOrgansQuestions,
  ...headNeckQuestions,
  ...neuroanatomyQuestions,
  ...pulmonaryAndBronchialCirculationQuestions,
  ...systemicAndPortalCirculationQuestions,
  ...fetalCirculationQuestions,
  ...microcirculationAndCapillaryExchangeQuestions,
  ...hemodynamicsAndFlowQuestions,
  ...baroreflexChemoreflexAutoregulationQuestions,
  ...coronaryCirculationQuestions,
  ...cerebralAutoregulationAndBBBQuestions,
  ...lymphaticSystemOverviewQuestions,
  // Neuro-vasculature
  ...perforatingAndWatershedQuestions,
];
