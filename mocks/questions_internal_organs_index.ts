import type { Question } from './questions';

// ============================================================================
// INTERNAL ORGANS QUESTIONS - MASTER INDEX
// ============================================================================
// This file consolidates all Internal Organs question sets from modular files.
// Each system has its own dedicated file with topic-specific exports.
// ============================================================================

// Import combined arrays from system-specific files
import { respiratoryQuestions } from './questions_respiratory';
import { cardiovascularQuestions } from './questions_cardiovascular';
import { thoracicNervesQuestions } from './questions_thoracic_nerves';
import { mediastinumQuestions } from './questions_mediastinum';
import { thoracicVesselsQuestions } from './questions_thoracic_vessels';
import { upperDigestiveQuestions } from './questions_digestive_upper';
import { liverBiliaryQuestions } from './questions_liver_biliary';
import { peritoneumQuestions } from './questions_peritoneum';
import { abdominalVesselsQuestions } from './questions_abdominal_vessels';
import { intestinesQuestions } from './questions_intestines';
import { urinaryQuestions } from './questions_urinary';
import { maleGenitalQuestions } from './questions_male_genital';
import { femaleGenitalQuestions } from './questions_female_genital';
import { pelvicVesselsQuestions } from './questions_pelvic_vessels';

// ============================================================================
// COMBINED INTERNAL ORGANS QUESTIONS
// ============================================================================
// All questions with category: 'internal-organs' combined into one array
// ============================================================================

export const allInternalOrgansQuestions: Question[] = [
  // Thoracic Region
  ...respiratoryQuestions,
  ...cardiovascularQuestions,
  ...thoracicNervesQuestions,
  ...mediastinumQuestions,
  ...thoracicVesselsQuestions,
  
  // Abdominal Region
  ...upperDigestiveQuestions,
  ...liverBiliaryQuestions,
  ...peritoneumQuestions,
  ...abdominalVesselsQuestions,
  ...intestinesQuestions,
  
  // Urogenital Region
  ...urinaryQuestions,
  ...maleGenitalQuestions,
  ...femaleGenitalQuestions,
  ...pelvicVesselsQuestions
];

// ============================================================================
// TOPIC MAPPING FOR INTERNAL ORGANS
// ============================================================================
// Use this mapping to understand the file structure and available topics
// ============================================================================

export const internalOrgansTopicMap = {
  // THORACIC REGION
  respiratory: {
    file: 'questions_respiratory.ts',
    topics: [
      'thoracicTracheaBronchiQuestions - Trachea toracică și bronhiile extrapulmonare',
      'mainBronchiQuestions - Bronhiile principale',
      'lungApexRelationsQuestions - Plămânii: raporturile vârfului',
      'lungLateralSurfaceQuestions - Plămânii: raporturile feței externe',
      'rightLungMediastinalQuestions - Plămânul drept: raporturile feței mediastinale',
      'leftLungMediastinalQuestions - Plămânul stâng: raporturile feței mediastinale',
      'pleuraGeneralSinusesQuestions - Pleura: generalități și sinusurile pleurale',
      'pulmonaryPediclesQuestions - Pediculii pulmonari'
    ]
  },
  cardiovascular: {
    file: 'questions_cardiovascular.ts',
    topics: [
      'heartExternalAnatomyQuestions - Cordul: configurație externă și raporturi',
      'heartVascularizationQuestions - Cordul: vascularizație',
      'rightAtriumQuestions - Cordul: atriul drept',
      'leftAtriumQuestions - Cordul: atriul stâng',
      'rightVentricleQuestions - Cordul: ventriculul drept',
      'leftVentricleQuestions - Cordul: ventriculul stâng',
      'cardiacPlexusesQuestions - Cordul: plexurile cardiace',
      'fibrousPericardiumQuestions - Pericardul fibros: mijloace de fixare',
      'pericardialSinusesQuestions - Sinusurile pericardice'
    ]
  },
  thoracicNerves: {
    file: 'questions_thoracic_nerves.ts',
    topics: [
      'phrenicNervesQuestions - Nervii frenici',
      'vagusNervesThoraxQuestions - Nervii vagi în torace',
      'thoracicSympatheticChainQuestions - Lanțul simpatic toracic, nervii splanchnici',
      'celiacPlexusQuestions - Plexul celiac'
    ]
  },
  mediastinum: {
    file: 'questions_mediastinum.ts',
    topics: [
      'thoracicCavityCompartmentsQuestions - Compartimentarea cavității toracice',
      'mediastinumCompartmentsQuestions - Compartimentarea mediastinului',
      'anteriorMediastinumQuestions - Mediastinul anterior',
      'posteriorMediastinumQuestions - Mediastinul posterior',
      'thoracicEsophagusQuestions - Esofagul toracic'
    ]
  },
  thoracicVessels: {
    file: 'questions_thoracic_vessels.ts',
    topics: [
      'ascendingAortaQuestions - Aorta ascendentă',
      'aorticArchQuestions - Arcul aortic',
      'descendingThoracicAortaQuestions - Aorta descendentă toracică',
      'internalThoracicVesselsQuestions - Vasele toracice interne',
      'brachiocephalicVeinsSVCQuestions - Trunchiurile venoase brahiocefalice și vena cavă superioară',
      'inferiorVenaCavaQuestions - Vena cavă inferioară',
      'azygosVeinsQuestions - Venele azigos',
      'thoracicDuctQuestions - Ductul toracic'
    ]
  },

  // ABDOMINAL REGION
  upperDigestive: {
    file: 'questions_digestive_upper.ts',
    topics: [
      'stomachFixationRelationsQuestions - Stomacul: mijloace de fixare si raporturi',
      'stomachExternalConfigQuestions - Stomacul: proiecție, configurație externă, raporturi',
      'stomachVasculonervousPediclesQuestions - Stomacul: pediculii vasculonervoși',
      'duodenumQuestions - Duodenul',
      'pancreasQuestions - Pancreasul'
    ]
  },
  liverBiliary: {
    file: 'questions_liver_biliary.ts',
    topics: [
      'liverExternalConfigQuestions - Ficat – conformație externă și raporturi',
      'hepaticPedicleQuestions - Ficat – pediculul hepatic',
      'liverSegmentationQuestions - Ficat – segmentație',
      'gallbladderQuestions - Vezicula biliară',
      'extrahepaticBiliaryTractQuestions - Căile biliare extrahepatice',
      'spleenQuestions - Splina'
    ]
  },
  peritoneum: {
    file: 'questions_peritoneum.ts',
    topics: [
      'peritonealCavityCompartmentsQuestions - Cavitatea peritoneală: compartimentare',
      'greaterLesserOmentumQuestions - Epiplonul mare și mic',
      'gastricLodgeQuestions - Loja gastrică: delimitare',
      'hepaticLodgeQuestions - Loja hepatică: delimitare',
      'splenicLodgeQuestions - Loja splenică: delimitare și comportarea peritoneului'
    ]
  },
  abdominalVessels: {
    file: 'questions_abdominal_vessels.ts',
    topics: [
      'abdominalAortaQuestions - Aorta abdominală',
      'celiacTrunkQuestions - Trunchiul celiac',
      'hepaticArteryQuestions - Artera hepatică',
      'portalVeinQuestions - Vena portă',
      'splenicVesselsQuestions - Vasele splenice',
      'superiorMesentericVesselsQuestions - Vasele mezenterice superioare',
      'inferiorMesentericVesselsQuestions - Vasele mezenterice inferioare',
      'rectalArteriesQuestions - Arterele rectale'
    ]
  },
  intestines: {
    file: 'questions_intestines.ts',
    topics: [
      'jejunoIleumQuestions - Jejuno-ileonul',
      'mesenteryQuestions - Mezenterul',
      'cecumAppendixQuestions - Cecul și apendicele vermiform',
      'ascendingColonQuestions - Colonul ascendent',
      'transverseColonMesocolonQuestions - Colonul și mezocolonul transvers',
      'descendingColonQuestions - Colonul descendent',
      'sigmoidColonQuestions - Colonul sigmoid',
      'sigmoidMesoFossaQuestions - Mezoul sigmoid și foseta intersigmoidiană',
      'pelvicRectumQuestions - Rectul pelvin: configurație interioară, vascularizație și inervație',
      'rectalLodgeFemaleQuestions - Loja rectală și raporturile la femeie',
      'rectalLodgeMaleQuestions - Loja rectală și raporturile la bărbat'
    ]
  },

  // UROGENITAL REGION
  urinary: {
    file: 'questions_urinary.ts',
    topics: [
      'renalLodgeFasciaQuestions - Loja renală și fascia fibroasă renală',
      'rightKidneyQuestions - Rinichiul drept – configurație externă și raporturi',
      'leftKidneyQuestions - Rinichiul stâng – configurație externă și raporturi',
      'rightRenalPedicleQuestions - Pediculul renal drept',
      'leftRenalPedicleQuestions - Pediculul renal stâng',
      'urinaryExcretoryPathwaysQuestions - Căile urinare excretorii: calice, bazinet, ureter lombo-iliac',
      'ureterQuestions - Ureterul',
      'adrenalGlandsQuestions - Glandele suprarenale',
      'urinaryBladderQuestions - Vezica urinară',
      'bladderLodgeQuestions - Loja vezicală',
      'maleUrethraQuestions - Uretra masculină',
      'femaleUrethraQuestions - Uretra feminină'
    ]
  },
  maleGenital: {
    file: 'questions_male_genital.ts',
    topics: [
      'testicleQuestions - Testiculul',
      'scrotalSacQuestions - Bursele testiculare',
      'epididymoTesticularComplexQuestions - Complex epididimo-testicular',
      'vasDeferensEjaculatoryDuctQuestions - Ductul deferent și ejaculator',
      'prostateSeminalVesiclesQuestions - Prostata si glandele seminale',
      'penisQuestions - Penisul'
    ]
  },
  femaleGenital: {
    file: 'questions_female_genital.ts',
    topics: [
      'ovaryQuestions - Ovarul',
      'uterineTubeQuestions - Trompa uterina',
      'uterusQuestions - Uterul – raporturi și mijloace de susținere',
      'broadLigamentsQuestions - Ligamentele largi',
      'vaginaQuestions - Vaginul',
      'vulvaQuestions - Vulva',
      'bulboVaginalUrethralGlandsQuestions - Glandele bulbo-vaginale și bulbo-uretrale'
    ]
  },
  pelvicVessels: {
    file: 'questions_pelvic_vessels.ts',
    topics: [
      'genitalVesselsQuestions - Vasele genitale',
      'internalIliacVesselsQuestions - Vasele iliace interne'
    ]
  }
};
