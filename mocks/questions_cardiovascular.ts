import type { Question } from './questions';

// ============================================================================
// CARDIOVASCULAR SYSTEM QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Cordul: configurație externă și raporturi (heartExternalAnatomyQuestions)
// 2. Cordul: vascularizație (heartVascularizationQuestions)
// 3. Cordul: atriul drept (rightAtriumQuestions)
// 4. Cordul: atriul stâng (leftAtriumQuestions)
// 5. Cordul: ventriculul drept (rightVentricleQuestions)
// 6. Cordul: ventriculul stâng (leftVentricleQuestions)
// 7. Cordul: plexurile cardiace (cardiacPlexusesQuestions)
// 8. Pericardul fibros: mijloace de fixare (fibrousPericardiumQuestions)
// 9. Sinusurile pericardice (pericardialSinusesQuestions)
// ============================================================================

// 1. Heart External Anatomy and Relations
export const heartExternalAnatomyQuestions: Question[] = [
  {
    id: 'her1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'In which mediastinal compartment is the heart primarily located?',
    options: [
      'Superior mediastinum',
      'Anterior mediastinum',
      'Middle mediastinum within the pericardial sac',
      'Posterior mediastinum',
      'Entirely outside the mediastinum'
    ],
    correctAnswer: 2,
    explanation:
      'The heart lies within the fibrous pericardium in the middle mediastinum, between the lungs and above the diaphragm.[web:2][web:3]'
  },
  {
    id: 'her2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which chamber forms the anatomical apex of the heart?',
    options: [
      'Right atrium',
      'Right ventricle',
      'Left atrium',
      'Left ventricle',
      'Coronary sinus'
    ],
    correctAnswer: 3,
    explanation:
      'The apex of the heart is formed by the inferolateral part of the left ventricle and is directed forward, downward and to the left.[web:72][web:75]'
  },
  {
    id: 'her3',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'At which surface landmark is the apex beat of the heart usually palpable in the adult?',
    options: [
      'Right second intercostal space at the sternal border',
      'Left second intercostal space at the sternal border',
      'Left third intercostal space in the midclavicular line',
      'Left fifth intercostal space, slightly medial to the midclavicular line',
      'In the epigastrium at the costal margin'
    ],
    correctAnswer: 3,
    explanation:
      'The cardiac apex is typically found deep to the left fifth intercostal space, just medial to the midclavicular line, corresponding to the site of the apical impulse.[web:12][web:72]'
  },
  {
    id: 'her4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which description BEST characterizes the sternocostal (anterior) surface of the heart?',
    options: [
      'Formed mainly by the left ventricle resting on the diaphragm',
      'Formed mainly by the right atrium and left atrium',
      'Formed mainly by the right ventricle, with contributions from the right atrium and left ventricle',
      'Formed only by the pulmonary trunk and ascending aorta',
      'Formed exclusively by the left ventricle and left atrium'
    ],
    correctAnswer: 2,
    explanation:
      'The sternocostal surface faces anteriorly toward the sternum and ribs and is formed predominantly by the right ventricle, with smaller contributions from the right atrium and left ventricle.[web:2][web:5]'
  },
  {
    id: 'her5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which surface of the heart rests on the central tendon of the diaphragm?',
    options: [
      'Sternocostal (anterior) surface',
      'Base (posterior) surface',
      'Diaphragmatic (inferior) surface',
      'Right pulmonary surface',
      'Left pulmonary surface'
    ],
    correctAnswer: 2,
    explanation:
      'The diaphragmatic surface is formed mainly by the left ventricle and partly by the right ventricle and rests upon the central tendon of the diaphragm.[web:5][web:6]'
  },
  {
    id: 'her6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which chamber forms the base (posterior surface) of the heart and is closely related to the esophagus?',
    options: [
      'Right atrium',
      'Right ventricle',
      'Left ventricle',
      'Left atrium',
      'Coronary sinus alone'
    ],
    correctAnswer: 3,
    explanation:
      'The base of the heart is formed chiefly by the left atrium, which lies posteriorly and is related directly to the esophagus across a thin pericardial layer.[web:2][web:73]'
  },
  {
    id: 'her7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structures lie immediately anterior to the sternocostal surface of the heart?',
    options: [
      'Trachea and esophagus',
      'Thoracic vertebrae and azygos vein',
      'Sternum, costal cartilages and anterior mediastinal pleura',
      'Diaphragm and liver',
      'Descending thoracic aorta and thoracic duct'
    ],
    correctAnswer: 2,
    explanation:
      'Anteriorly the heart is separated from the thoracic wall by the sternum, adjacent costal cartilages and a layer of anterior mediastinal tissue and pleura.[web:5][web:71]'
  },
  {
    id: 'her8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which pulmonary surfaces are formed by the lateral aspects of the heart and what structures do they face?',
    options: [
      'Right and left pulmonary surfaces, both facing the vertebral column',
      'Right pulmonary surface facing the right lung, left pulmonary surface facing the left lung',
      'Right pulmonary surface facing the diaphragm, left pulmonary surface facing the sternum',
      'Only a left pulmonary surface facing the left lung',
      'Only a right pulmonary surface facing the mediastinum'
    ],
    correctAnswer: 1,
    explanation:
      'The right and left pulmonary surfaces of the heart are formed where it contacts the mediastinal surfaces of the lungs, particularly prominent on the left where the cardiac impression is deep.[web:4][web:75]'
  },
  {
    id: 'her9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which border of the heart is formed mainly by the right ventricle and separates the sternocostal and diaphragmatic surfaces?',
    options: [
      'Superior border',
      'Right border',
      'Inferior (acute) border',
      'Left (obtuse) border',
      'Posterior border'
    ],
    correctAnswer: 2,
    explanation:
      'The inferior border is sharp and is formed chiefly by the right ventricle, with a small contribution from the left ventricle; it separates the sternocostal from the diaphragmatic surface.[web:2][web:6]'
  },
  {
    id: 'her10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'On a standard PA chest radiograph, which chambers principally form the right and left cardiac borders, respectively?',
    options: [
      'Right border: right ventricle; left border: left atrium',
      'Right border: right atrium; left border: left ventricle',
      'Right border: superior vena cava; left border: pulmonary trunk',
      'Right border: left atrium; left border: right ventricle',
      'Right and left borders are both formed by the left ventricle'
    ],
    correctAnswer: 1,
    explanation:
      'Radiographically, the right border of the cardiac silhouette is formed mainly by the right atrium, whereas the left border is formed largely by the left ventricle with a small contribution from the left atrial appendage and main pulmonary artery.[web:12][web:76]'
  }
];

// 2. Heart Vascularization (Coronary Circulation)
export const heartVascularizationQuestions: Question[] = [
  {
    id: 'hv1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'From which part of the aorta do the right and left coronary arteries arise?',
    options: [
      'From the aortic arch distal to the brachiocephalic trunk',
      'From the descending thoracic aorta',
      'From the ascending aorta just above the aortic valve',
      'From the pulmonary trunk',
      'From the brachiocephalic artery'
    ],
    correctAnswer: 2,
    explanation:
      'The right and left coronary arteries originate from the ascending aorta immediately above the aortic valve, within the right and left aortic sinuses.'
  },
  {
    id: 'hv2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which coronary artery typically runs in the anterior interventricular groove toward the apex of the heart?',
    options: [
      'Right coronary artery',
      'Left circumflex artery',
      'Anterior interventricular (left anterior descending) artery',
      'Posterior interventricular artery',
      'Right marginal artery'
    ],
    correctAnswer: 2,
    explanation:
      'The anterior interventricular, or left anterior descending (LAD) artery, descends in the anterior interventricular groove toward the apex, supplying the anterior septum and adjacent ventricular walls.'
  },
  {
    id: 'hv3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which areas of the heart are MOST commonly supplied by the right coronary artery in a right‑dominant circulation?',
    options: [
      'Most of the left ventricle and anterior septum',
      'Right atrium, most of right ventricle, part of left ventricle and the posterior third of the interventricular septum',
      'Only the right atrium',
      'Only the conduction system without myocardial branches',
      'Exclusively the left atrium and left ventricle'
    ],
    correctAnswer: 1,
    explanation:
      'In right‑dominant hearts the right coronary artery supplies the right atrium, most of the right ventricle, part of the diaphragmatic left ventricle and the posterior third of the interventricular septum via the posterior interventricular branch.'
  },
  {
    id: 'hv4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which coronary artery most often gives rise to the posterior interventricular (posterior descending) artery in the adult?',
    options: [
      'Left anterior descending artery',
      'Left circumflex artery',
      'Right coronary artery',
      'Conus branch',
      'Acute marginal branch'
    ],
    correctAnswer: 2,
    explanation:
      'In approximately 80–85% of individuals the posterior interventricular artery arises from the right coronary artery, a pattern termed right coronary dominance.'
  },
  {
    id: 'hv5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which coronary vessels are primarily responsible for draining most of the deoxygenated blood from the myocardium into the right atrium?',
    options: [
      'Anterior cardiac veins only',
      'Great, middle and small cardiac veins via the coronary sinus',
      'Thebesian (smallest cardiac) veins only',
      'Pulmonary veins',
      'Superior and inferior venae cavae'
    ],
    correctAnswer: 1,
    explanation:
      'Most venous blood from the myocardium is collected by the great, middle and small cardiac veins, which converge into the coronary sinus before draining into the right atrium.'
  },
  {
    id: 'hv6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where is the coronary sinus located and where does it open into the heart?',
    options: [
      'In the anterior interventricular groove; opening into the left atrium',
      'In the posterior interventricular groove; opening into the right ventricle',
      'In the left atrioventricular groove on the diaphragmatic surface; opening into the right atrium',
      'In the right atrioventricular groove; opening into the left atrium',
      'Within the interatrial septum; opening into both atria'
    ],
    correctAnswer: 2,
    explanation:
      'The coronary sinus lies in the posterior part of the left atrioventricular groove on the diaphragmatic surface of the heart and opens into the right atrium between the inferior vena cava and the tricuspid orifice.'
  },
  {
    id: 'hv7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which coronary branches most commonly supply the sinoatrial (SA) and atrioventricular (AV) nodes?',
    options: [
      'Branches of the left circumflex artery in all individuals',
      'Branches of the left anterior descending artery in all individuals',
      'Branches of the right coronary artery in the majority of individuals',
      'Branches of the pulmonary trunk',
      'Branches of the anterior cardiac veins'
    ],
    correctAnswer: 2,
    explanation:
      'In most hearts the SA nodal branch and the AV nodal branch arise from the right coronary artery, providing the principal arterial supply to the cardiac conduction nodes.'
  },
  {
    id: 'hv8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which description BEST defines coronary artery dominance?',
    options: [
      'The artery that supplies the SA node',
      'The artery with the largest lumen diameter',
      'The artery that gives rise to the posterior interventricular artery',
      'The artery most commonly affected by atherosclerosis',
      'The artery that supplies the entire left ventricle'
    ],
    correctAnswer: 2,
    explanation:
      'Coronary dominance is defined by which coronary artery gives origin to the posterior interventricular (posterior descending) artery—right coronary in right‑dominant, circumflex in left‑dominant hearts.'
  },
  {
    id: 'hv9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which venous pathways drain deoxygenated blood directly into the right atrium, bypassing the coronary sinus?',
    options: [
      'Only the great cardiac vein',
      'Only the middle cardiac vein',
      'Anterior cardiac veins and Thebesian (smallest cardiac) veins',
      'Pulmonary veins',
      'Only the small cardiac vein'
    ],
    correctAnswer: 2,
    explanation:
      'The anterior cardiac veins empty directly into the right atrium, and the smallest cardiac (Thebesian) veins open into all four chambers, with a significant fraction draining directly into the right atrium.'
  },
  {
    id: 'hv10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'During which phase of the cardiac cycle does coronary blood flow in the left coronary artery reach its maximum, and why?',
    options: [
      'During ventricular systole, because myocardial contraction pumps blood through the coronaries',
      'During ventricular diastole, because myocardial relaxation relieves compression of the intramural vessels',
      'During atrial systole, because atrial contraction opens the coronary ostia',
      'Throughout the cycle with no significant variation',
      'Only during isovolumetric contraction'
    ],
    correctAnswer: 1,
    explanation:
      'Flow in the left coronary artery is greatest during ventricular diastole, when relaxation of the ventricular myocardium reduces compression of the intramural branches and allows better perfusion.'
  }
];

// 3. Right Atrium - Placeholder for future questions
export const rightAtriumQuestions: Question[] = [];

// 4. Left Atrium - Placeholder for future questions
export const leftAtriumQuestions: Question[] = [];

// 5. Right Ventricle - Placeholder for future questions
export const rightVentricleQuestions: Question[] = [];

// 6. Left Ventricle - Placeholder for future questions
export const leftVentricleQuestions: Question[] = [];

// 7. Cardiac Plexuses - Placeholder for future questions
export const cardiacPlexusesQuestions: Question[] = [];

// 8. Fibrous Pericardium: Fixation - Placeholder for future questions
export const fibrousPericardiumQuestions: Question[] = [];

// 9. Pericardial Sinuses - Placeholder for future questions
export const pericardialSinusesQuestions: Question[] = [];

// Combine all cardiovascular questions for easy import
export const cardiovascularQuestions: Question[] = [
  ...heartExternalAnatomyQuestions,
  ...heartVascularizationQuestions,
  ...rightAtriumQuestions,
  ...leftAtriumQuestions,
  ...rightVentricleQuestions,
  ...leftVentricleQuestions,
  ...cardiacPlexusesQuestions,
  ...fibrousPericardiumQuestions,
  ...pericardialSinusesQuestions
];
