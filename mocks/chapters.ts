import type { Question } from './questions';

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
  spinalCordExternalQuestions,
  brainstemExternalQuestions,
  cerebellumExternalQuestions,
  cerebellumLobulationQuestions
} from './questions_neuro_spinal_brainstem';

import {
  thalamusExternalQuestions,
  thalamusNucleiQuestions,
  hypothalamusQuestions,
  epithalamMetathalamQuestions,
  pinealGlandQuestions,
  pituitaryGlandQuestions,
  perforatedSpacesQuestions
} from './questions_neuro_diencephalon';

import {
  cerebralHemisphereSulciGyriQuestions,
  inferiorSurfaceQuestions,
  lateralSurfaceQuestions,
  medialSurfaceQuestions,
  occipitalLobeQuestions,
  frontalLobeQuestions,
  parietalLobeQuestions,
  temporalLobeQuestions,
  orbitalLobeQuestions,
  temporoOccipitalLobeQuestions
} from './questions_neuro_cerebral_hemispheres';

import {
  sensoryCorticalAreasQuestions,
  motorCorticalAreasQuestions,
  somestheticAreasQuestions,
  basalNucleiQuestions,
  internalCapsuleQuestions,
  externalExtremeCapsuleQuestions,
  corpusCallosumQuestions,
  fornixQuestions,
  anteriorPosteriorCommissuresQuestions,
  hippocampalFormationQuestions
} from './questions_neuro_cortical_basal';

import {
  internalCarotidIntracranialQuestions,
  internalCarotidBranchesQuestions,
  vertebrobasilarTrunkQuestions,
  spinalCordVascularizationQuestions,
  cerebellumBrainstemVascularizationQuestions,
  diencephalonVascularizationQuestions,
  circleOfWillisQuestions,
  anteriorCerebralArteryQuestions,
  middleCerebralArteryQuestions,
  posteriorCerebralArteryQuestions
} from './questions_neuro_vascular';

import {
  duralVenousSinusesQuestions,
  greatCerebralVeinQuestions,
  spinalMeningesQuestions,
  sagittalDuralReflectionsQuestions,
  horizontalDuralReflectionsQuestions,
  arachnoidPiaMaterQuestions,
  csfCirculationQuestions,
  choroidPlexusQuestions
} from './questions_neuro_meninges_venous';

import {
  fourthVentricleRoofQuestions,
  fourthVentricleFloorQuestions,
  thirdVentricleRoofQuestions,
  thirdVentricleFloorQuestions,
  anteriorHornLateralVentricleQuestions,
  inferiorHornLateralVentricleQuestions,
  posteriorHornLateralVentricleQuestions
} from './questions_neuro_ventricular';

import {
  orbitWallsQuestions,
  eyelidsConjunctivaQuestions,
  lacrimalApparatusQuestions,
  extraocularMusclesQuestions,
  eyeAnatomyQuestions
} from './questions_neuro_eye_orbit';

import {
  externalEarQuestions,
  middleEarContentsQuestions,
  middleEarWallsQuestions,
  auditorTubeQuestions,
  innerEarQuestions,
  tasteReceptorsQuestions
} from './questions_neuro_ear';

import {
  thoracicTracheaBronchiQuestions,
  mainBronchiQuestions,
  lungApexRelationsQuestions,
  lungCostalSurfaceQuestions,
  rightLungMediastinalQuestions,
  leftLungMediastinalQuestions,
  pleuraGeneralSinusesQuestions,
  pulmonaryPediclesQuestions
} from './questions_respiratory';

import {
  heartExternalAnatomyQuestions,
  heartVascularizationQuestions,
  rightAtriumQuestions,
  leftAtriumQuestions,
  rightVentricleQuestions,
  leftVentricleQuestions,
  cardiacPlexusesQuestions,
  fibrousPericardiumQuestions,
  pericardialSinusesQuestions
} from './questions_cardiovascular';

import {
  phrenicNervesQuestions,
  vagusNervesThoraxQuestions,
  thoracicSympatheticChainQuestions,
  celiacPlexusQuestions
} from './questions_thoracic_nerves';

import {
  thoracicCavityCompartmentsQuestions,
  mediastinumCompartmentsQuestions,
  anteriorMediastinumQuestions,
  posteriorMediastinumQuestions,
  thoracicEsophagusQuestions
} from './questions_mediastinum';

import {
  ascendingAortaQuestions,
  aorticArchQuestions,
  descendingThoracicAortaQuestions,
  internalThoracicVesselsQuestions,
  brachiocephalicVeinsSVCQuestions,
  inferiorVenaCavaQuestions,
  azygosVeinsQuestions,
  thoracicDuctQuestions
} from './questions_thoracic_vessels';

import {
  stomachFixationRelationsQuestions,
  stomachExternalConfigQuestions,
  stomachVasculonervousPediclesQuestions,
  duodenumQuestions,
  pancreasQuestions
} from './questions_digestive_upper';

import {
  liverExternalConfigQuestions,
  hepaticPedicleQuestions,
  liverSegmentationQuestions,
  gallbladderQuestions,
  extrahepaticBiliaryTractQuestions,
  spleenQuestions
} from './questions_liver_biliary';

import {
  peritonealCavityCompartmentsQuestions,
  greaterLesserOmentumQuestions,
  gastricLodgeQuestions,
  hepaticLodgeQuestions,
  splenicLodgeQuestions
} from './questions_peritoneum';

import {
  abdominalAortaQuestions,
  celiacTrunkQuestions,
  hepaticArteryQuestions,
  portalVeinQuestions,
  splenicVesselsQuestions,
  superiorMesentericVesselsQuestions,
  inferiorMesentericVesselsQuestions,
  rectalArteriesQuestions
} from './questions_abdominal_vessels';

import {
  jejunoIleumQuestions,
  mesenteryQuestions,
  cecumAppendixQuestions,
  ascendingColonQuestions,
  transverseColonMesocolonQuestions,
  descendingColonQuestions,
  sigmoidColonQuestions,
  sigmoidMesoFossaQuestions,
  pelvicRectumQuestions,
  rectalLodgeFemaleQuestions,
  rectalLodgeMaleQuestions
} from './questions_intestines';

import {
  renalLodgeFasciaQuestions,
  rightKidneyQuestions,
  leftKidneyQuestions,
  rightRenalPedicleQuestions,
  leftRenalPedicleQuestions,
  urinaryExcretoryPathwaysQuestions,
  ureterQuestions,
  adrenalGlandsQuestions,
  urinaryBladderQuestions,
  bladderLodgeQuestions,
  maleUrethraQuestions,
  femaleUrethraQuestions
} from './questions_urinary';

import {
  testicleQuestions,
  scrotalSacQuestions,
  epididymoTesticularComplexQuestions,
  vasDeferensEjaculatoryDuctQuestions,
  prostateSeminalVesiclesQuestions,
  penisQuestions
} from './questions_male_genital';

import {
  ovaryQuestions,
  uterineTubeQuestions,
  uterusQuestions,
  broadLigamentsQuestions,
  vaginaQuestions,
  vulvaQuestions,
  bulboVaginalUrethralGlandsQuestions
} from './questions_female_genital';

import {
  genitalVesselsQuestions,
  internalIliacVesselsQuestions
} from './questions_pelvic_vessels';

import {
  frontalBoneQuestions,
  parietalBoneQuestions,
  temporalBoneQuestions,
  occipitalBoneQuestions,
  sphenoidBoneQuestions,
  ethmoidBoneQuestions,
  maxillaQuestions,
  mandibulaQuestions,
  zigomaticBoneQuestions,
  palatineBoneQuestions,
  lacrimalBoneQuestions,
  vomerQuestions,
  inferiorNasalConchaQuestions
} from './questions_head_neck';

import {
  nasalBoneQuestions,
  subclavianArteryQuestions,
  nasalCavityQuestions,
  orbitQuestions,
  infratemporalFossaQuestions,
  pterygopalatineFossaQuestions,
  externalCarotidArteryQuestions,
  facialMusclesQuestions,
  masticatoryMusclesQuestions
} from './questions_head_neck_continued';

export interface Chapter {
  id: string;
  name: string;
  questions: Question[];
}

export interface ModuleChapters {
  moduleId: string;
  moduleName: string;
  chapters: Chapter[];
}

export const upperLowerLimbsChapters: ModuleChapters = {
  moduleId: 'upper-lower-limbs',
  moduleName: 'Upper/Lower Limbs',
  chapters: [
    { id: 'general-vertebrae', name: 'Vertebre Generale', questions: generalVertebraeQuestions },
    { id: 'regional-vertebrae', name: 'Vertebre Regionale', questions: regionalVertebraeQuestions },
    { id: 'thoracic-vertebrae', name: 'Vertebre Toracice', questions: thoracicVertebraeQuestions },
    { id: 'lumbar-vertebrae', name: 'Vertebre Lombare', questions: lumbarVertebraeQuestions },
    { id: 'sacrum', name: 'Sacrum', questions: sacrumQuestions },
    { id: 'atlas-axis', name: 'Atlas și Axis', questions: atlasAxisVertebraeQuestions },
    { id: 'ribs', name: 'Coaste', questions: ribsGeneralQuestions },
    { id: 'sternum', name: 'Stern', questions: sternumQuestions },
    { id: 'clavicle', name: 'Clavicula', questions: clavicleQuestions },
    { id: 'humerus', name: 'Humerus', questions: humerusQuestions },
    { id: 'radius-ulna', name: 'Radius și Ulna', questions: radiusAndUlnaQuestions },
    { id: 'carpal-bones', name: 'Oase Carpiene', questions: carpalBonesQuestions },
    { id: 'hip-bone', name: 'Osul Coxal', questions: hipBoneQuestions },
    { id: 'femur', name: 'Femur', questions: femurQuestions },
    { id: 'patella', name: 'Patela', questions: patellaQuestions },
    { id: 'tibia', name: 'Tibia', questions: tibiaQuestions },
    { id: 'fibula', name: 'Fibula', questions: fibulaQuestions },
    { id: 'tibia-fibula', name: 'Tibia și Fibula', questions: tibiaFibulaQuestions },
    { id: 'talus', name: 'Talus', questions: talusQuestions },
    { id: 'calcaneus', name: 'Calcaneu', questions: calcaneusQuestions },
    { id: 'tarsal-bones', name: 'Oase Tarsiene', questions: tarsalBonesQuestions },
    { id: 'upper-limb-bones', name: 'Oase Membru Superior', questions: upperLimbBonesQuestions },
    { id: 'shoulder-muscles', name: 'Mușchi Umăr', questions: shoulderMusclesQuestions },
    { id: 'arm-muscles', name: 'Mușchi Braț', questions: armMusclesQuestions },
    { id: 'forearm-muscles', name: 'Mușchi Antebraț', questions: forearmMusclesQuestions },
    { id: 'anterior-thigh', name: 'Mușchi Coapsă Anterioară', questions: anteriorThighMusclesQuestions },
    { id: 'hamstrings', name: 'Mușchi Ischiogambieri', questions: hamstringMusclesQuestions },
    { id: 'medial-thigh', name: 'Mușchi Coapsă Medială', questions: medialThighMusclesQuestions },
    { id: 'leg-muscles', name: 'Mușchi Gambă', questions: legMusclesQuestions },
    { id: 'hallux-muscles', name: 'Mușchi Halux', questions: halluxMusclesQuestions },
    { id: 'midplantar-muscles', name: 'Mușchi Medioplantar', questions: midplantarMusclesQuestions },
    { id: 'brachial-artery', name: 'Artera Brahială', questions: brachialArteryQuestions },
    { id: 'median-nerve', name: 'Nervul Median', questions: medianNerveQuestions },
    { id: 'musculocutaneous-nerve', name: 'Nervul Musculocutanat', questions: musculocutaneousNerveQuestions },
    { id: 'radial-nerve', name: 'Nervul Radial', questions: radialNerveQuestions },
    { id: 'brachial-plexus', name: 'Plexul Brahial', questions: brachialPlexusQuestions },
    { id: 'lumbar-plexus', name: 'Plexul Lombar', questions: lumbarPlexusQuestions },
    { id: 'sacral-plexus', name: 'Plexul Sacral', questions: sacralPlexusQuestions },
    { id: 'sensory-innervation', name: 'Inervație Senzitivă', questions: sensoryInnervationQuestions },
    { id: 'shoulder-joint', name: 'Articulația Umărului', questions: shoulderJointQuestions },
    { id: 'elbow-joint', name: 'Articulația Cotului', questions: elbowJointQuestions },
    { id: 'wrist-joint', name: 'Articulația Pumnului', questions: wristJointQuestions },
    { id: 'hip-joint', name: 'Articulația Șoldului', questions: hipJointQuestions },
    { id: 'knee-joint', name: 'Articulația Genunchiului', questions: kneeJointQuestions },
    { id: 'ankle-joint', name: 'Articulația Gleznei', questions: ankleJointQuestions },
  ]
};

export const internalOrgansChapters: ModuleChapters = {
  moduleId: 'internal-organs',
  moduleName: 'Internal Organs',
  chapters: [
    { id: 'internal-organs-intro', name: 'Organe Interne - Introducere', questions: internalOrgansQuestions },
    { id: 'pulmonary-circulation', name: 'Circulația Pulmonară', questions: pulmonaryAndBronchialCirculationQuestions },
    { id: 'systemic-portal', name: 'Circulația Sistemică și Portală', questions: systemicAndPortalCirculationQuestions },
    { id: 'fetal-circulation', name: 'Circulația Fetală', questions: fetalCirculationQuestions },
    { id: 'microcirculation', name: 'Microcirculație', questions: microcirculationAndCapillaryExchangeQuestions },
    { id: 'hemodynamics', name: 'Hemodinamică', questions: hemodynamicsAndFlowQuestions },
    { id: 'baroreflex', name: 'Baroreflexe și Chemoreflexe', questions: baroreflexChemoreflexAutoregulationQuestions },
    { id: 'coronary-circulation', name: 'Circulația Coronariană', questions: coronaryCirculationQuestions },
    { id: 'cerebral-autoregulation', name: 'Autoreglare Cerebrală', questions: cerebralAutoregulationAndBBBQuestions },
    { id: 'lymphatic-system', name: 'Sistemul Limfatic', questions: lymphaticSystemOverviewQuestions },
    { id: 'thoracic-trachea-bronchi', name: 'Trahee și Bronhii Toracice', questions: thoracicTracheaBronchiQuestions },
    { id: 'main-bronchi', name: 'Bronhii Principale', questions: mainBronchiQuestions },
    { id: 'lung-apex', name: 'Raporturile Vârfului Pulmonar', questions: lungApexRelationsQuestions },
    { id: 'lung-costal-surface', name: 'Fața Costală Pulmonară', questions: lungCostalSurfaceQuestions },
    { id: 'right-lung-mediastinal', name: 'Plămân Drept - Mediastinal', questions: rightLungMediastinalQuestions },
    { id: 'left-lung-mediastinal', name: 'Plămân Stâng - Mediastinal', questions: leftLungMediastinalQuestions },
    { id: 'pleura-sinuses', name: 'Pleura și Sinusuri', questions: pleuraGeneralSinusesQuestions },
    { id: 'pulmonary-pedicles', name: 'Pediculii Pulmonari', questions: pulmonaryPediclesQuestions },
    { id: 'heart-external', name: 'Inima - Anatomie Externă', questions: heartExternalAnatomyQuestions },
    { id: 'heart-vascularization', name: 'Vascularizația Cordului', questions: heartVascularizationQuestions },
    { id: 'right-atrium', name: 'Atriul Drept', questions: rightAtriumQuestions },
    { id: 'left-atrium', name: 'Atriul Stâng', questions: leftAtriumQuestions },
    { id: 'right-ventricle', name: 'Ventriculul Drept', questions: rightVentricleQuestions },
    { id: 'left-ventricle', name: 'Ventriculul Stâng', questions: leftVentricleQuestions },
    { id: 'cardiac-plexuses', name: 'Plexuri Cardiace', questions: cardiacPlexusesQuestions },
    { id: 'fibrous-pericardium', name: 'Pericardul Fibros', questions: fibrousPericardiumQuestions },
    { id: 'pericardial-sinuses', name: 'Sinusuri Pericardice', questions: pericardialSinusesQuestions },
    { id: 'phrenic-nerves', name: 'Nervii Frenici', questions: phrenicNervesQuestions },
    { id: 'vagus-nerves-thorax', name: 'Nervii Vagi în Torace', questions: vagusNervesThoraxQuestions },
    { id: 'thoracic-sympathetic', name: 'Lanțul Simpatic Toracic', questions: thoracicSympatheticChainQuestions },
    { id: 'celiac-plexus', name: 'Plexul Celiac', questions: celiacPlexusQuestions },
    { id: 'thoracic-cavity', name: 'Cavitatea Toracică', questions: thoracicCavityCompartmentsQuestions },
    { id: 'mediastinum-compartments', name: 'Compartimente Mediastin', questions: mediastinumCompartmentsQuestions },
    { id: 'anterior-mediastinum', name: 'Mediastin Anterior', questions: anteriorMediastinumQuestions },
    { id: 'posterior-mediastinum', name: 'Mediastin Posterior', questions: posteriorMediastinumQuestions },
    { id: 'thoracic-esophagus', name: 'Esofagul Toracic', questions: thoracicEsophagusQuestions },
    { id: 'ascending-aorta', name: 'Aorta Ascendentă', questions: ascendingAortaQuestions },
    { id: 'aortic-arch', name: 'Arcul Aortic', questions: aorticArchQuestions },
    { id: 'descending-thoracic-aorta', name: 'Aorta Descendentă Toracică', questions: descendingThoracicAortaQuestions },
    { id: 'internal-thoracic-vessels', name: 'Vase Toracice Interne', questions: internalThoracicVesselsQuestions },
    { id: 'brachiocephalic-veins-svc', name: 'Vene Brahiocefalice și VCS', questions: brachiocephalicVeinsSVCQuestions },
    { id: 'inferior-vena-cava', name: 'Vena Cavă Inferioară', questions: inferiorVenaCavaQuestions },
    { id: 'azygos-veins', name: 'Venele Azygos', questions: azygosVeinsQuestions },
    { id: 'thoracic-duct', name: 'Ductul Toracic', questions: thoracicDuctQuestions },
    { id: 'stomach-fixation', name: 'Stomac - Fixare și Raporturi', questions: stomachFixationRelationsQuestions },
    { id: 'stomach-external', name: 'Stomac - Config. Externă', questions: stomachExternalConfigQuestions },
    { id: 'stomach-pedicles', name: 'Stomac - Pediculi', questions: stomachVasculonervousPediclesQuestions },
    { id: 'duodenum', name: 'Duodenul', questions: duodenumQuestions },
    { id: 'pancreas', name: 'Pancreasul', questions: pancreasQuestions },
    { id: 'liver-external', name: 'Ficatul - Config. Externă', questions: liverExternalConfigQuestions },
    { id: 'hepatic-pedicle', name: 'Pediculul Hepatic', questions: hepaticPedicleQuestions },
    { id: 'liver-segmentation', name: 'Segmentare Hepatică', questions: liverSegmentationQuestions },
    { id: 'gallbladder', name: 'Vezica Biliară', questions: gallbladderQuestions },
    { id: 'extrahepatic-biliary', name: 'Căi Biliare Extrahepatice', questions: extrahepaticBiliaryTractQuestions },
    { id: 'spleen', name: 'Splina', questions: spleenQuestions },
    { id: 'peritoneal-compartments', name: 'Compartimente Peritoneale', questions: peritonealCavityCompartmentsQuestions },
    { id: 'greater-lesser-omentum', name: 'Epiploanele', questions: greaterLesserOmentumQuestions },
    { id: 'gastric-lodge', name: 'Loja Gastrică', questions: gastricLodgeQuestions },
    { id: 'hepatic-lodge', name: 'Loja Hepatică', questions: hepaticLodgeQuestions },
    { id: 'splenic-lodge', name: 'Loja Splenică', questions: splenicLodgeQuestions },
    { id: 'abdominal-aorta', name: 'Aorta Abdominală', questions: abdominalAortaQuestions },
    { id: 'celiac-trunk', name: 'Trunchiul Celiac', questions: celiacTrunkQuestions },
    { id: 'hepatic-artery', name: 'Artera Hepatică', questions: hepaticArteryQuestions },
    { id: 'portal-vein', name: 'Vena Portă', questions: portalVeinQuestions },
    { id: 'splenic-vessels', name: 'Vase Splenice', questions: splenicVesselsQuestions },
    { id: 'superior-mesenteric-vessels', name: 'Vase Mezenterice Sup.', questions: superiorMesentericVesselsQuestions },
    { id: 'inferior-mesenteric-vessels', name: 'Vase Mezenterice Inf.', questions: inferiorMesentericVesselsQuestions },
    { id: 'rectal-arteries', name: 'Artere Rectale', questions: rectalArteriesQuestions },
    { id: 'jejuno-ileum', name: 'Jejun și Ileon', questions: jejunoIleumQuestions },
    { id: 'mesentery', name: 'Mezenterul', questions: mesenteryQuestions },
    { id: 'cecum-appendix', name: 'Cec și Apendice', questions: cecumAppendixQuestions },
    { id: 'ascending-colon', name: 'Colonul Ascendent', questions: ascendingColonQuestions },
    { id: 'transverse-colon', name: 'Colonul Transvers', questions: transverseColonMesocolonQuestions },
    { id: 'descending-colon', name: 'Colonul Descendent', questions: descendingColonQuestions },
    { id: 'sigmoid-colon', name: 'Colonul Sigmoid', questions: sigmoidColonQuestions },
    { id: 'sigmoid-meso-fossa', name: 'Mezosigmoid și Fose', questions: sigmoidMesoFossaQuestions },
    { id: 'pelvic-rectum', name: 'Rectul Pelvin', questions: pelvicRectumQuestions },
    { id: 'rectal-lodge-female', name: 'Loja Rectală Feminin', questions: rectalLodgeFemaleQuestions },
    { id: 'rectal-lodge-male', name: 'Loja Rectală Masculin', questions: rectalLodgeMaleQuestions },
    { id: 'renal-lodge-fascia', name: 'Loja și Fascia Renală', questions: renalLodgeFasciaQuestions },
    { id: 'right-kidney', name: 'Rinichiul Drept', questions: rightKidneyQuestions },
    { id: 'left-kidney', name: 'Rinichiul Stâng', questions: leftKidneyQuestions },
    { id: 'right-renal-pedicle', name: 'Pediculul Renal Drept', questions: rightRenalPedicleQuestions },
    { id: 'left-renal-pedicle', name: 'Pediculul Renal Stâng', questions: leftRenalPedicleQuestions },
    { id: 'urinary-excretory', name: 'Căi Urinare Excretorii', questions: urinaryExcretoryPathwaysQuestions },
    { id: 'ureter', name: 'Ureterul', questions: ureterQuestions },
    { id: 'adrenal-glands', name: 'Glandele Suprarenale', questions: adrenalGlandsQuestions },
    { id: 'urinary-bladder', name: 'Vezica Urinară', questions: urinaryBladderQuestions },
    { id: 'bladder-lodge', name: 'Loja Vezicală', questions: bladderLodgeQuestions },
    { id: 'male-urethra', name: 'Uretra Masculină', questions: maleUrethraQuestions },
    { id: 'female-urethra', name: 'Uretra Feminină', questions: femaleUrethraQuestions },
    { id: 'testicle', name: 'Testiculul', questions: testicleQuestions },
    { id: 'scrotal-sac', name: 'Sacul Scrotal', questions: scrotalSacQuestions },
    { id: 'epididymo-testicular', name: 'Complex Epididimo-Testicular', questions: epididymoTesticularComplexQuestions },
    { id: 'vas-deferens', name: 'Duct Deferent și Ejaculator', questions: vasDeferensEjaculatoryDuctQuestions },
    { id: 'prostate-seminal', name: 'Prostată și Vezicule Seminale', questions: prostateSeminalVesiclesQuestions },
    { id: 'penis', name: 'Penisul', questions: penisQuestions },
    { id: 'ovary', name: 'Ovarul', questions: ovaryQuestions },
    { id: 'uterine-tube', name: 'Trompa Uterină', questions: uterineTubeQuestions },
    { id: 'uterus', name: 'Uterul', questions: uterusQuestions },
    { id: 'broad-ligaments', name: 'Ligamentele Largi', questions: broadLigamentsQuestions },
    { id: 'vagina', name: 'Vaginul', questions: vaginaQuestions },
    { id: 'vulva', name: 'Vulva', questions: vulvaQuestions },
    { id: 'bulbo-vaginal-glands', name: 'Glande Bulbo-Vaginale', questions: bulboVaginalUrethralGlandsQuestions },
    { id: 'genital-vessels', name: 'Vase Genitale', questions: genitalVesselsQuestions },
    { id: 'internal-iliac-vessels', name: 'Vase Iliace Interne', questions: internalIliacVesselsQuestions },
  ]
};

export const headNeckChapters: ModuleChapters = {
  moduleId: 'head-neck',
  moduleName: 'Head and Neck',
  chapters: [
    { id: 'head-neck-intro', name: 'Cap și Gât - Introducere', questions: headNeckQuestions },
    { id: 'frontal-bone', name: 'Osul Frontal', questions: frontalBoneQuestions },
    { id: 'parietal-bone', name: 'Osul Parietal', questions: parietalBoneQuestions },
    { id: 'temporal-bone', name: 'Osul Temporal', questions: temporalBoneQuestions },
    { id: 'occipital-bone', name: 'Osul Occipital', questions: occipitalBoneQuestions },
    { id: 'sphenoid-bone', name: 'Osul Sfenoid', questions: sphenoidBoneQuestions },
    { id: 'ethmoid-bone', name: 'Osul Etmoid', questions: ethmoidBoneQuestions },
    { id: 'maxilla', name: 'Maxila', questions: maxillaQuestions },
    { id: 'mandibula', name: 'Mandibula', questions: mandibulaQuestions },
    { id: 'nasal-bone', name: 'Osul Nazal', questions: nasalBoneQuestions },
    { id: 'zigomatic-bone', name: 'Osul Zigomatic', questions: zigomaticBoneQuestions },
    { id: 'palatine-bone', name: 'Osul Palatin', questions: palatineBoneQuestions },
    { id: 'lacrimal-bone', name: 'Osul Lacrimal', questions: lacrimalBoneQuestions },
    { id: 'vomer', name: 'Vomerul', questions: vomerQuestions },
    { id: 'inferior-nasal-concha', name: 'Cornete Nazale Inferioare', questions: inferiorNasalConchaQuestions },
    { id: 'subclavian-artery', name: 'Artera Subclavie', questions: subclavianArteryQuestions },
    { id: 'nasal-cavity', name: 'Cavitatea Nazală', questions: nasalCavityQuestions },
    { id: 'orbit', name: 'Orbita', questions: orbitQuestions },
    { id: 'infratemporal-fossa', name: 'Fosa Infratemporală', questions: infratemporalFossaQuestions },
    { id: 'pterygopalatine-fossa', name: 'Fosa Pterigopalatină', questions: pterygopalatineFossaQuestions },
    { id: 'external-carotid-artery', name: 'Artera Carotidă Externă', questions: externalCarotidArteryQuestions },
    { id: 'facial-muscles', name: 'Mușchi Faciali', questions: facialMusclesQuestions },
    { id: 'masticatory-muscles', name: 'Mușchi Masticatori', questions: masticatoryMusclesQuestions },
  ]
};

export const neuroanatomyChapters: ModuleChapters = {
  moduleId: 'neuroanatomy',
  moduleName: 'Neuroanatomy',
  chapters: [
    { id: 'neuro-intro', name: 'Neuroanatomie - Introducere', questions: neuroanatomyQuestions },
    { id: 'perforating-watershed', name: 'Artere Perforante', questions: perforatingAndWatershedQuestions },
    { id: 'spinal-cord-external', name: 'Măduva Spinării - Extern', questions: spinalCordExternalQuestions },
    { id: 'brainstem-external', name: 'Trunchiul Cerebral - Extern', questions: brainstemExternalQuestions },
    { id: 'cerebellum-external', name: 'Cerebelul - Extern', questions: cerebellumExternalQuestions },
    { id: 'cerebellum-lobulation', name: 'Lobulația Cerebelului', questions: cerebellumLobulationQuestions },
    { id: 'thalamus-external', name: 'Talamusul - Extern', questions: thalamusExternalQuestions },
    { id: 'thalamus-nuclei', name: 'Nucleii Talamici', questions: thalamusNucleiQuestions },
    { id: 'hypothalamus', name: 'Hipotalamusul', questions: hypothalamusQuestions },
    { id: 'epithalamus-metathalamus', name: 'Epitalamus și Metatalamus', questions: epithalamMetathalamQuestions },
    { id: 'pineal-gland', name: 'Glanda Pineală', questions: pinealGlandQuestions },
    { id: 'pituitary-gland', name: 'Hipofiza', questions: pituitaryGlandQuestions },
    { id: 'perforated-spaces', name: 'Spații Perforate', questions: perforatedSpacesQuestions },
    { id: 'cerebral-sulci-gyri', name: 'Sulcusuri și Giruri', questions: cerebralHemisphereSulciGyriQuestions },
    { id: 'inferior-surface', name: 'Suprafața Inferioară', questions: inferiorSurfaceQuestions },
    { id: 'lateral-surface', name: 'Suprafața Laterală', questions: lateralSurfaceQuestions },
    { id: 'medial-surface', name: 'Suprafața Medială', questions: medialSurfaceQuestions },
    { id: 'occipital-lobe', name: 'Lobul Occipital', questions: occipitalLobeQuestions },
    { id: 'frontal-lobe', name: 'Lobul Frontal', questions: frontalLobeQuestions },
    { id: 'parietal-lobe', name: 'Lobul Parietal', questions: parietalLobeQuestions },
    { id: 'temporal-lobe', name: 'Lobul Temporal', questions: temporalLobeQuestions },
    { id: 'orbital-lobe', name: 'Lobul Orbital', questions: orbitalLobeQuestions },
    { id: 'temporo-occipital', name: 'Temporo-Occipital', questions: temporoOccipitalLobeQuestions },
    { id: 'sensory-cortical', name: 'Arii Corticale Senzoriale', questions: sensoryCorticalAreasQuestions },
    { id: 'motor-cortical', name: 'Arii Corticale Motorii', questions: motorCorticalAreasQuestions },
    { id: 'somesthetic-areas', name: 'Arii Somestezice', questions: somestheticAreasQuestions },
    { id: 'basal-nuclei', name: 'Nucleii Bazali', questions: basalNucleiQuestions },
    { id: 'internal-capsule', name: 'Capsula Internă', questions: internalCapsuleQuestions },
    { id: 'external-extreme-capsule', name: 'Capsule Externă și Extremă', questions: externalExtremeCapsuleQuestions },
    { id: 'corpus-callosum', name: 'Corpul Calos', questions: corpusCallosumQuestions },
    { id: 'fornix', name: 'Fornixul', questions: fornixQuestions },
    { id: 'anterior-posterior-commissures', name: 'Comisuri Anterioare și Posterioare', questions: anteriorPosteriorCommissuresQuestions },
    { id: 'hippocampal-formation', name: 'Formațiunea Hipocampică', questions: hippocampalFormationQuestions },
    { id: 'internal-carotid-intracranial', name: 'Carotida Internă Intracraniană', questions: internalCarotidIntracranialQuestions },
    { id: 'internal-carotid-branches', name: 'Ramuri Carotidă Internă', questions: internalCarotidBranchesQuestions },
    { id: 'vertebrobasilar', name: 'Trunchiul Vertebro-Bazilar', questions: vertebrobasilarTrunkQuestions },
    { id: 'spinal-cord-vascular', name: 'Vascularizație Medulară', questions: spinalCordVascularizationQuestions },
    { id: 'cerebellum-brainstem-vascular', name: 'Vasc. Cerebel și Trunchi', questions: cerebellumBrainstemVascularizationQuestions },
    { id: 'diencephalon-vascular', name: 'Vasc. Diencefal', questions: diencephalonVascularizationQuestions },
    { id: 'circle-of-willis', name: 'Poligonul lui Willis', questions: circleOfWillisQuestions },
    { id: 'anterior-cerebral-artery', name: 'Artera Cerebrală Anterioară', questions: anteriorCerebralArteryQuestions },
    { id: 'middle-cerebral-artery', name: 'Artera Cerebrală Medie', questions: middleCerebralArteryQuestions },
    { id: 'posterior-cerebral-artery', name: 'Artera Cerebrală Posterioară', questions: posteriorCerebralArteryQuestions },
    { id: 'dural-venous-sinuses', name: 'Sinusuri Venoase Durale', questions: duralVenousSinusesQuestions },
    { id: 'great-cerebral-vein', name: 'Vena Cerebrală Mare', questions: greatCerebralVeinQuestions },
    { id: 'spinal-meninges', name: 'Meningele Spinale', questions: spinalMeningesQuestions },
    { id: 'sagittal-dural', name: 'Reflexii Durale Sagitale', questions: sagittalDuralReflectionsQuestions },
    { id: 'horizontal-dural', name: 'Reflexii Durale Orizontale', questions: horizontalDuralReflectionsQuestions },
    { id: 'arachnoid-pia', name: 'Arahnoidă și Pia Mater', questions: arachnoidPiaMaterQuestions },
    { id: 'csf-circulation', name: 'Circulația LCR', questions: csfCirculationQuestions },
    { id: 'choroid-plexus', name: 'Plexurile Coroide', questions: choroidPlexusQuestions },
    { id: 'fourth-ventricle-roof', name: 'Ventriculul IV - Acoperiș', questions: fourthVentricleRoofQuestions },
    { id: 'fourth-ventricle-floor', name: 'Ventriculul IV - Podea', questions: fourthVentricleFloorQuestions },
    { id: 'third-ventricle-roof', name: 'Ventriculul III - Acoperiș', questions: thirdVentricleRoofQuestions },
    { id: 'third-ventricle-floor', name: 'Ventriculul III - Podea', questions: thirdVentricleFloorQuestions },
    { id: 'anterior-horn-lateral', name: 'Cornul Anterior V. Lateral', questions: anteriorHornLateralVentricleQuestions },
    { id: 'inferior-horn-lateral', name: 'Cornul Inferior V. Lateral', questions: inferiorHornLateralVentricleQuestions },
    { id: 'posterior-horn-lateral', name: 'Cornul Posterior V. Lateral', questions: posteriorHornLateralVentricleQuestions },
    { id: 'orbit-walls', name: 'Pereții Orbitei', questions: orbitWallsQuestions },
    { id: 'eyelids-conjunctiva', name: 'Pleoape și Conjunctivă', questions: eyelidsConjunctivaQuestions },
    { id: 'lacrimal-apparatus', name: 'Aparatul Lacrimal', questions: lacrimalApparatusQuestions },
    { id: 'extraocular-muscles', name: 'Mușchi Extraoculari', questions: extraocularMusclesQuestions },
    { id: 'eye-anatomy', name: 'Anatomia Ochiului', questions: eyeAnatomyQuestions },
    { id: 'external-ear', name: 'Urechea Externă', questions: externalEarQuestions },
    { id: 'middle-ear-contents', name: 'Urechea Medie - Conținut', questions: middleEarContentsQuestions },
    { id: 'middle-ear-walls', name: 'Urechea Medie - Pereți', questions: middleEarWallsQuestions },
    { id: 'auditory-tube', name: 'Tuba Auditivă', questions: auditorTubeQuestions },
    { id: 'inner-ear', name: 'Urechea Internă', questions: innerEarQuestions },
    { id: 'taste-receptors', name: 'Receptori Gustativi', questions: tasteReceptorsQuestions },
  ]
};

export const moduleChaptersMap: Record<string, ModuleChapters> = {
  'upper-lower-limbs': upperLowerLimbsChapters,
  'internal-organs': internalOrgansChapters,
  'head-neck': headNeckChapters,
  'neuroanatomy': neuroanatomyChapters,
};

export function getChaptersForModule(moduleId: string): Chapter[] {
  const moduleChapters = moduleChaptersMap[moduleId];
  return moduleChapters ? moduleChapters.chapters : [];
}

export function getAllQuestionsWithChapters(moduleId: string): { question: Question; chapterName: string }[] {
  const chapters = getChaptersForModule(moduleId);
  const result: { question: Question; chapterName: string }[] = [];
  
  for (const chapter of chapters) {
    for (const question of chapter.questions) {
      result.push({ question, chapterName: chapter.name });
    }
  }
  
  return result;
}
