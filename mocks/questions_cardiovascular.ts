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
    question_ro: 'În ce compartiment mediastinal este localizată în principal inima?',
    options: [
      'Superior mediastinum',
      'Anterior mediastinum',
      'Middle mediastinum within the pericardial sac',
      'Posterior mediastinum',
      'Entirely outside the mediastinum'
    ],
    options_ro: [
      'Mediastinul superior',
      'Mediastinul anterior',
      'Mediastinul mijlociu în sacul pericardic',
      'Mediastinul posterior',
      'Complet în afara mediastinului'
    ],
    correctAnswer: 2,
    explanation:
      'The heart lies within the fibrous pericardium in the middle mediastinum, between the lungs and above the diaphragm.[web:2][web:3]',
    explanation_ro:
      'Inima se află în interiorul pericardului fibros în mediastinul mijlociu, între plămâni și deasupra diafragmului.'
  },
  {
    id: 'her2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which chamber forms the anatomical apex of the heart?',
    question_ro: 'Ce cameră formează vârful anatomic al inimii?',
    options: [
      'Right atrium',
      'Right ventricle',
      'Left atrium',
      'Left ventricle',
      'Coronary sinus'
    ],
    options_ro: [
      'Atriul drept',
      'Ventriculul drept',
      'Atriul stâng',
      'Ventriculul stâng',
      'Sinusul coronarian'
    ],
    correctAnswer: 3,
    explanation:
      'The apex of the heart is formed by the inferolateral part of the left ventricle and is directed forward, downward and to the left.[web:72][web:75]',
    explanation_ro:
      'Vârful inimii este format de partea inferolaterală a ventriculului stâng și este orientat anterior, inferior și spre stânga.'
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

// 3. Right Atrium
export const rightAtriumQuestions: Question[] = [
  {
    id: 'ra1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which large veins open directly into the right atrium?',
    options: [
      'Pulmonary veins',
      'Superior and inferior venae cavae',
      'Hepatic veins only',
      'Azygos vein only',
      'Brachiocephalic veins'
    ],
    correctAnswer: 1,
    explanation: 'The superior vena cava (draining the upper body) and inferior vena cava (draining the lower body) open directly into the right atrium.'
  },
  {
    id: 'ra2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'What is the smooth-walled posterior part of the right atrium called?',
    options: [
      'Pectinate muscles',
      'Sinus venarum',
      'Crista terminalis',
      'Fossa ovalis',
      'Auricle'
    ],
    correctAnswer: 1,
    explanation: 'The sinus venarum is the smooth-walled posterior portion of the right atrium derived from the embryonic sinus venosus, where the venae cavae enter.'
  },
  {
    id: 'ra3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What structure marks the internal boundary between the smooth sinus venarum and the rough muscular wall?',
    options: [
      'Fossa ovalis',
      'Crista terminalis',
      'Eustachian valve',
      'Thebesian valve',
      'Limbus fossa ovalis'
    ],
    correctAnswer: 1,
    explanation: 'The crista terminalis is a vertical muscular ridge on the internal surface of the right atrium that separates the smooth sinus venarum posteriorly from the rough pectinate muscles anteriorly.'
  },
  {
    id: 'ra4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the fossa ovalis and what is its embryological origin?',
    options: [
      'Opening for the coronary sinus',
      'Depression in the interatrial septum; remnant of the foramen ovale',
      'Site of the SA node',
      'Opening of the inferior vena cava',
      'Attachment of the tricuspid valve'
    ],
    correctAnswer: 1,
    explanation: 'The fossa ovalis is an oval depression in the interatrial septum representing the closed foramen ovale, which allowed blood to bypass the lungs in fetal circulation.'
  },
  {
    id: 'ra5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the sinoatrial (SA) node located?',
    options: [
      'In the interatrial septum',
      'At the junction of the SVC and right atrium near the crista terminalis',
      'In the atrioventricular septum',
      'At the apex of the heart',
      'In the coronary sinus'
    ],
    correctAnswer: 1,
    explanation: 'The SA node is located in the wall of the right atrium at the junction with the superior vena cava, near the superior end of the crista terminalis.'
  },
  {
    id: 'ra6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the valve of the inferior vena cava (Eustachian valve) and its embryological significance?',
    options: [
      'Prevents blood from entering the coronary sinus',
      'Remnant of valve that directed IVC blood toward foramen ovale in fetal life',
      'Guards the tricuspid orifice',
      'Prevents reflux into the SVC',
      'Part of the pulmonary valve'
    ],
    correctAnswer: 1,
    explanation: 'The Eustachian valve is a rudimentary valve at the IVC opening; in the fetus it directed oxygenated blood from the IVC toward the foramen ovale to enter the left atrium.'
  },
  {
    id: 'ra7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What structure guards the opening of the coronary sinus into the right atrium?',
    options: [
      'Eustachian valve',
      'Thebesian valve',
      'Tricuspid valve',
      'Fossa ovalis',
      'Crista terminalis'
    ],
    correctAnswer: 1,
    explanation: 'The Thebesian valve is a small semicircular fold that partially covers the opening of the coronary sinus into the right atrium.'
  },
  {
    id: 'ra8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the pectinate muscles and where are they located?',
    options: [
      'Papillary muscles in the right ventricle',
      'Parallel muscular ridges in the right atrial wall and auricle',
      'Muscles of the interventricular septum',
      'External muscles covering the heart',
      'Smooth muscles in the sinus venarum'
    ],
    correctAnswer: 1,
    explanation: 'Pectinate muscles are parallel muscular ridges on the anterior wall of the right atrium and in the right auricle, derived from the primitive atrium.'
  },
  {
    id: 'ra9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of the limbus fossa ovalis?',
    options: [
      'It is the site of the AV node',
      'It is the prominent superior margin of the fossa ovalis; probe-patent foramen ovale may exist here',
      'It marks the tricuspid annulus',
      'It is where the coronary sinus opens',
      'It contains the bundle of His'
    ],
    correctAnswer: 1,
    explanation: 'The limbus fossa ovalis is the raised margin surrounding the fossa ovalis. A probe-patent (unsealed) foramen ovale at its superior aspect occurs in ~25% of adults and may allow paradoxical embolism.'
  },
  {
    id: 'ra10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'The right auricle (atrial appendage) projects from which part of the right atrium?',
    options: [
      'Posterior wall near the IVC',
      'Anterosuperior aspect, overlapping the ascending aorta',
      'Inferior wall near the tricuspid valve',
      'Interatrial septum',
      'Coronary sulcus posteriorly'
    ],
    correctAnswer: 1,
    explanation: 'The right auricle is a conical muscular pouch projecting from the anterosuperior part of the right atrium, overlapping the root of the ascending aorta.'
  }
];

// 4. Left Atrium
export const leftAtriumQuestions: Question[] = [
  {
    id: 'la1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'How many pulmonary veins typically drain into the left atrium?',
    options: [
      'Two',
      'Three',
      'Four',
      'Five',
      'Six'
    ],
    correctAnswer: 2,
    explanation: 'Four pulmonary veins (two from each lung) typically drain oxygenated blood into the left atrium through its posterior wall.'
  },
  {
    id: 'la2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which structure lies immediately posterior to the left atrium?',
    options: [
      'Trachea',
      'Esophagus',
      'Descending aorta',
      'Right ventricle',
      'Sternum'
    ],
    correctAnswer: 1,
    explanation: 'The esophagus lies immediately posterior to the left atrium, separated only by the pericardium. This relationship is utilized in transesophageal echocardiography.'
  },
  {
    id: 'la3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the internal surface of most of the left atrium like?',
    options: [
      'Covered with pectinate muscles throughout',
      'Smooth-walled, derived from absorbed pulmonary vein tissue',
      'Has a prominent crista terminalis',
      'Contains the fossa ovalis',
      'Has trabeculae carneae'
    ],
    correctAnswer: 1,
    explanation: 'Most of the left atrium has smooth walls because it is derived from the absorbed proximal portions of the pulmonary veins during development.'
  },
  {
    id: 'la4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where are pectinate muscles found in the left atrium?',
    options: [
      'Throughout the entire chamber',
      'Only in the left auricle (atrial appendage)',
      'On the posterior wall',
      'Around the pulmonary vein ostia',
      'In the interatrial septum'
    ],
    correctAnswer: 1,
    explanation: 'In the left atrium, pectinate muscles are confined to the left auricle (atrial appendage), which represents the original embryonic left atrium.'
  },
  {
    id: 'la5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the clinical significance of the left atrial appendage?',
    options: [
      'It is the site of the SA node',
      'Common site for thrombus formation in atrial fibrillation',
      'It contains the AV node',
      'It receives the coronary sinus',
      'It guards the mitral valve'
    ],
    correctAnswer: 1,
    explanation: 'The left atrial appendage is a common site for thrombus formation in patients with atrial fibrillation due to blood stasis, increasing stroke risk.'
  },
  {
    id: 'la6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What structure separates the left atrium from the right atrium?',
    options: [
      'Interventricular septum',
      'Interatrial septum containing the valve of the foramen ovale',
      'Crista terminalis',
      'Coronary sulcus',
      'Atrioventricular septum'
    ],
    correctAnswer: 1,
    explanation: 'The interatrial septum separates the two atria. On the left side, the valve of the foramen ovale (a flap of tissue) covers the fossa ovalis.'
  },
  {
    id: 'la7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which valve is located between the left atrium and left ventricle?',
    options: [
      'Tricuspid valve',
      'Mitral (bicuspid) valve',
      'Aortic valve',
      'Pulmonary valve',
      'Eustachian valve'
    ],
    correctAnswer: 1,
    explanation: 'The mitral valve (bicuspid valve) guards the left atrioventricular orifice between the left atrium and left ventricle. It has two cusps: anterior and posterior.'
  },
  {
    id: 'la8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Enlargement of the left atrium can compress which structure, causing dysphagia?',
    options: [
      'Trachea',
      'Esophagus',
      'Right main bronchus',
      'Thoracic duct',
      'Phrenic nerve'
    ],
    correctAnswer: 1,
    explanation: 'Due to its posterior position, an enlarged left atrium can compress the esophagus, causing dysphagia (difficulty swallowing), especially with mitral valve disease.'
  },
  {
    id: 'la9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What embryological structure contributes to the smooth wall of the adult left atrium?',
    options: [
      'Sinus venosus',
      'Absorbed pulmonary vein tissue',
      'Primitive ventricle',
      'Bulbus cordis',
      'Truncus arteriosus'
    ],
    correctAnswer: 1,
    explanation: 'The smooth posterior wall of the left atrium develops from incorporation of the proximal portions of the pulmonary veins into the atrial wall during development.'
  },
  {
    id: 'la10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'On a chest X-ray, what finding suggests left atrial enlargement?',
    options: [
      'Boot-shaped heart',
      'Straightening of the left heart border and double density at the right heart border',
      'Widened superior mediastinum',
      'Elevated left hemidiaphragm',
      'Increased cardiothoracic ratio only'
    ],
    correctAnswer: 1,
    explanation: 'Left atrial enlargement causes straightening of the left heart border (due to enlarged appendage) and a "double density" shadow at the right heart border (enlarged atrium seen through the heart).'
  }
];

// 5. Right Ventricle
export const rightVentricleQuestions: Question[] = [
  {
    id: 'rv1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which valve guards the inlet of the right ventricle?',
    options: [
      'Mitral valve',
      'Tricuspid valve',
      'Pulmonary valve',
      'Aortic valve',
      'Thebesian valve'
    ],
    correctAnswer: 1,
    explanation: 'The tricuspid valve (right atrioventricular valve) guards the inlet of the right ventricle. It has three cusps: anterior, posterior, and septal.'
  },
  {
    id: 'rv2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which valve is located at the outlet of the right ventricle?',
    options: [
      'Tricuspid valve',
      'Pulmonary valve',
      'Aortic valve',
      'Mitral valve',
      'Eustachian valve'
    ],
    correctAnswer: 1,
    explanation: 'The pulmonary valve (pulmonary semilunar valve) guards the outlet of the right ventricle into the pulmonary trunk.'
  },
  {
    id: 'rv3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are trabeculae carneae?',
    options: [
      'Smooth muscle in the atria',
      'Irregular muscular ridges on the inner ventricular walls',
      'Tendons connecting valves to the wall',
      'Parts of the conduction system',
      'External features of the heart'
    ],
    correctAnswer: 1,
    explanation: 'Trabeculae carneae are irregular muscular elevations and ridges on the inner surface of the ventricular walls that help prevent suction and aid in blood flow.'
  },
  {
    id: 'rv4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the moderator band (septomarginal trabecula)?',
    options: [
      'A papillary muscle',
      'Muscular band crossing from septum to anterior wall carrying right bundle branch',
      'Part of the tricuspid valve',
      'The crista supraventricularis',
      'A chorda tendinea'
    ],
    correctAnswer: 1,
    explanation: 'The moderator band is a muscular ridge crossing from the interventricular septum to the base of the anterior papillary muscle, carrying part of the right bundle branch of the conduction system.'
  },
  {
    id: 'rv5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How many papillary muscles are typically present in the right ventricle?',
    options: [
      'One',
      'Two',
      'Three (anterior, posterior, septal)',
      'Four',
      'Five'
    ],
    correctAnswer: 2,
    explanation: 'The right ventricle typically has three papillary muscles: anterior (largest), posterior, and septal, which attach to the tricuspid valve cusps via chordae tendineae.'
  },
  {
    id: 'rv6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the conus arteriosus (infundibulum) of the right ventricle?',
    options: [
      'The inlet portion with trabeculae',
      'Smooth-walled outflow tract leading to the pulmonary valve',
      'The septal wall',
      'Area containing papillary muscles',
      'The moderator band'
    ],
    correctAnswer: 1,
    explanation: 'The conus arteriosus (infundibulum) is the smooth-walled, cone-shaped outflow portion of the right ventricle leading to the pulmonary trunk, separated from the inlet by the crista supraventricularis.'
  },
  {
    id: 'rv7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the crista supraventricularis?',
    options: [
      'A papillary muscle',
      'Muscular ridge separating the inflow (trabeculated) and outflow (smooth) portions',
      'Part of the interatrial septum',
      'The tricuspid annulus',
      'External groove on the heart'
    ],
    correctAnswer: 1,
    explanation: 'The crista supraventricularis (supraventricular crest) is a muscular ridge that separates the trabeculated inflow portion of the right ventricle from the smooth outflow tract (conus arteriosus).'
  },
  {
    id: 'rv8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why is the right ventricular wall thinner than the left?',
    options: [
      'It receives less blood',
      'It pumps against lower pulmonary vascular resistance',
      'It has fewer papillary muscles',
      'It has no trabeculae carneae',
      'It develops from a different embryonic structure'
    ],
    correctAnswer: 1,
    explanation: 'The right ventricle pumps blood into the low-pressure pulmonary circulation (normal ~25/10 mmHg), requiring less muscular force than the left ventricle pumping into the high-pressure systemic circulation.'
  },
  {
    id: 'rv9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the function of the chordae tendineae?',
    options: [
      'To conduct electrical impulses',
      'To prevent valve cusps from everting into the atrium during systole',
      'To separate the chambers',
      'To produce heart sounds',
      'To anchor the heart to the pericardium'
    ],
    correctAnswer: 1,
    explanation: 'Chordae tendineae are fibrous cords connecting papillary muscles to the free edges of valve cusps, preventing the cusps from being pushed back (prolapsing) into the atrium during ventricular contraction.'
  },
  {
    id: 'rv10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which surface of the heart is primarily formed by the right ventricle?',
    options: [
      'Base (posterior surface)',
      'Sternocostal (anterior) surface',
      'Diaphragmatic surface',
      'Left pulmonary surface',
      'Apex'
    ],
    correctAnswer: 1,
    explanation: 'The sternocostal (anterior) surface of the heart is formed predominantly by the right ventricle, which lies directly behind the sternum.'
  }
];

// 6. Left Ventricle
export const leftVentricleQuestions: Question[] = [
  {
    id: 'lv1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which valve guards the inlet of the left ventricle?',
    options: [
      'Tricuspid valve',
      'Mitral (bicuspid) valve',
      'Aortic valve',
      'Pulmonary valve',
      'Thebesian valve'
    ],
    correctAnswer: 1,
    explanation: 'The mitral valve (bicuspid valve) guards the left atrioventricular orifice. It has two cusps: a larger anterior (aortic) cusp and a smaller posterior cusp.'
  },
  {
    id: 'lv2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which valve is located at the outlet of the left ventricle?',
    options: [
      'Mitral valve',
      'Aortic valve',
      'Pulmonary valve',
      'Tricuspid valve',
      'Coronary valve'
    ],
    correctAnswer: 1,
    explanation: 'The aortic valve (aortic semilunar valve) guards the outlet of the left ventricle into the ascending aorta, with three semilunar cusps.'
  },
  {
    id: 'lv3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How many papillary muscles are in the left ventricle and what are they called?',
    options: [
      'One large muscle',
      'Two: anterior and posterior papillary muscles',
      'Three: anterior, posterior, and septal',
      'Four papillary muscles',
      'No papillary muscles'
    ],
    correctAnswer: 1,
    explanation: 'The left ventricle has two large papillary muscles: the anterolateral and posteromedial papillary muscles, which attach to both mitral valve cusps via chordae tendineae.'
  },
  {
    id: 'lv4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the aortic vestibule of the left ventricle?',
    options: [
      'The trabeculated inlet portion',
      'Smooth-walled outflow tract below the aortic valve',
      'The area between papillary muscles',
      'The apex region',
      'The interventricular septum'
    ],
    correctAnswer: 1,
    explanation: 'The aortic vestibule is the smooth-walled outflow portion of the left ventricle leading to the aortic valve, located between the anterior mitral cusp and the interventricular septum.'
  },
  {
    id: 'lv5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Why is the left ventricular wall approximately 3 times thicker than the right?',
    options: [
      'It receives more blood',
      'It must generate higher pressures to pump blood through systemic circulation',
      'It has more papillary muscles',
      'It develops earlier embryologically',
      'It has denser trabeculae carneae'
    ],
    correctAnswer: 1,
    explanation: 'The left ventricle pumps blood into the high-pressure systemic circulation (~120/80 mmHg), requiring substantially more muscular force than the right ventricle pumping into the pulmonary circulation.'
  },
  {
    id: 'lv6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What forms the apex of the heart?',
    options: [
      'Right ventricle',
      'Inferolateral part of the left ventricle',
      'Left atrium',
      'Interventricular septum',
      'Right atrium'
    ],
    correctAnswer: 1,
    explanation: 'The apex of the heart is formed by the inferolateral portion of the left ventricle and points anteriorly, inferiorly, and to the left.'
  },
  {
    id: 'lv7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship between the anterior cusp of the mitral valve and the aortic valve?',
    options: [
      'They are completely separate',
      'They share fibrous continuity (aortic-mitral curtain)',
      'They are part of the same structure',
      'The aortic valve is posterior to the mitral valve',
      'They are connected by chordae tendineae'
    ],
    correctAnswer: 1,
    explanation: 'The anterior (aortic) cusp of the mitral valve has fibrous continuity with the aortic valve through the aortic-mitral curtain, an important surgical landmark.'
  },
  {
    id: 'lv8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which part of the interventricular septum is membranous?',
    options: [
      'The entire septum',
      'The small superior portion near the atrioventricular valves',
      'The inferior portion near the apex',
      'Only the right side',
      'The posterior portion'
    ],
    correctAnswer: 1,
    explanation: 'The membranous part of the interventricular septum is a small, thin area in the superior part of the septum, close to the atrioventricular valves, and is a common site for ventricular septal defects.'
  },
  {
    id: 'lv9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What happens if a papillary muscle ruptures (e.g., after myocardial infarction)?',
    options: [
      'No clinical effect',
      'Acute severe mitral regurgitation',
      'Aortic stenosis',
      'Tricuspid stenosis',
      'Pulmonary hypertension only'
    ],
    correctAnswer: 1,
    explanation: 'Papillary muscle rupture, often due to myocardial infarction, causes acute severe mitral regurgitation as the valve cusp is no longer tethered and prolapses into the left atrium during systole.'
  },
  {
    id: 'lv10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'The trabeculae carneae in the left ventricle are:',
    options: [
      'Absent',
      'Finer and more numerous than in the right ventricle',
      'Identical to the right ventricle',
      'Only present at the apex',
      'Replaced by smooth muscle'
    ],
    correctAnswer: 1,
    explanation: 'Trabeculae carneae in the left ventricle are finer and more numerous compared to the coarser trabeculae in the right ventricle.'
  }
];

// 7. Cardiac Plexuses
export const cardiacPlexusesQuestions: Question[] = [
  {
    id: 'cp1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'The cardiac plexus receives contributions from which two divisions of the autonomic nervous system?',
    options: [
      'Somatic motor and sensory',
      'Sympathetic and parasympathetic',
      'Only sympathetic',
      'Only parasympathetic',
      'Enteric and sympathetic'
    ],
    correctAnswer: 1,
    explanation: 'The cardiac plexus receives both sympathetic fibers (from cervical and upper thoracic sympathetic ganglia) and parasympathetic fibers (from the vagus nerve).'
  },
  {
    id: 'cp2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which cranial nerve provides parasympathetic innervation to the heart?',
    options: [
      'Glossopharyngeal nerve (CN IX)',
      'Vagus nerve (CN X)',
      'Accessory nerve (CN XI)',
      'Hypoglossal nerve (CN XII)',
      'Facial nerve (CN VII)'
    ],
    correctAnswer: 1,
    explanation: 'The vagus nerve (CN X) provides parasympathetic innervation to the heart, slowing heart rate and reducing contractility.'
  },
  {
    id: 'cp3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the superficial cardiac plexus located?',
    options: [
      'Behind the sternum',
      'Below the aortic arch, anterior to the right pulmonary artery',
      'In the coronary sulcus',
      'Within the myocardium',
      'In the pericardial cavity'
    ],
    correctAnswer: 1,
    explanation: 'The superficial cardiac plexus lies below the aortic arch, anterior to the right pulmonary artery, and is smaller than the deep cardiac plexus.'
  },
  {
    id: 'cp4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the deep cardiac plexus located?',
    options: [
      'Anterior to the heart',
      'Between the aortic arch and the tracheal bifurcation',
      'In the right atrium',
      'Within the interventricular septum',
      'Behind the sternum'
    ],
    correctAnswer: 1,
    explanation: 'The deep cardiac plexus is located between the aortic arch and the tracheal bifurcation (carina), posterior to the aortic arch.'
  },
  {
    id: 'cp5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the effect of sympathetic stimulation on the heart?',
    options: [
      'Decreased heart rate and contractility',
      'Increased heart rate, contractility, and conduction velocity',
      'No effect on heart function',
      'Only affects coronary blood flow',
      'Causes cardiac arrest'
    ],
    correctAnswer: 1,
    explanation: 'Sympathetic stimulation increases heart rate (positive chronotropy), contractility (positive inotropy), and conduction velocity (positive dromotropy).'
  },
  {
    id: 'cp6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'From which sympathetic ganglia do the cardiac sympathetic nerves primarily originate?',
    options: [
      'Lumbar sympathetic ganglia only',
      'Cervical (superior, middle, inferior/stellate) and upper thoracic ganglia',
      'Sacral sympathetic ganglia',
      'Celiac ganglion',
      'Ciliary ganglion'
    ],
    correctAnswer: 1,
    explanation: 'Cardiac sympathetic nerves arise from the superior, middle, and inferior (stellate) cervical ganglia and the upper thoracic (T1-T4) sympathetic ganglia.'
  },
  {
    id: 'cp7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the effect of parasympathetic (vagal) stimulation on the heart?',
    options: [
      'Increased heart rate and contractility',
      'Decreased heart rate and slowed AV conduction',
      'Coronary vasoconstriction only',
      'Increased ventricular contractility',
      'No measurable effect'
    ],
    correctAnswer: 1,
    explanation: 'Parasympathetic stimulation via the vagus nerve decreases heart rate (negative chronotropy) and slows conduction through the AV node, with minimal direct effect on ventricular contractility.'
  },
  {
    id: 'cp8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which neurotransmitter is released by postganglionic parasympathetic neurons at the heart?',
    options: [
      'Norepinephrine',
      'Acetylcholine',
      'Epinephrine',
      'Dopamine',
      'Serotonin'
    ],
    correctAnswer: 1,
    explanation: 'Postganglionic parasympathetic neurons release acetylcholine, which acts on muscarinic receptors (mainly M2) in the heart to slow heart rate.'
  },
  {
    id: 'cp9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Cardiac pain afferents travel primarily with which nerve fibers?',
    options: [
      'Parasympathetic fibers in the vagus nerve only',
      'Sympathetic afferents to T1-T4 spinal segments',
      'Somatic sensory fibers',
      'Phrenic nerve afferents',
      'Glossopharyngeal nerve afferents'
    ],
    correctAnswer: 1,
    explanation: 'Cardiac pain (visceral afferent) fibers travel with sympathetic nerves to the T1-T4 (or T1-T5) spinal cord segments, explaining referred pain to the chest, arm, and jaw in angina.'
  },
  {
    id: 'cp10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'The coronary arteries receive autonomic innervation that causes:',
    options: [
      'Only vasoconstriction via parasympathetic fibers',
      'Vasodilation (parasympathetic) and vasoconstriction (sympathetic alpha) but metabolic factors dominate',
      'No autonomic regulation of coronary tone',
      'Only sympathetic vasodilation',
      'Parasympathetic vasoconstriction only'
    ],
    correctAnswer: 1,
    explanation: 'While coronary arteries receive autonomic innervation, coronary blood flow is primarily regulated by local metabolic factors (adenosine, oxygen demand) rather than neural control.'
  }
];

// 8. Fibrous Pericardium: Fixation
export const fibrousPericardiumQuestions: Question[] = [
  {
    id: 'fp1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'What are the two layers of the pericardium?',
    options: [
      'Endocardium and myocardium',
      'Fibrous pericardium and serous pericardium',
      'Visceral and epicardial layers only',
      'Adventitia and media',
      'Inner and outer myocardium'
    ],
    correctAnswer: 1,
    explanation: 'The pericardium consists of an outer fibrous pericardium (tough connective tissue) and an inner serous pericardium (with parietal and visceral layers).'
  },
  {
    id: 'fp2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'What structure does the fibrous pericardium attach to inferiorly?',
    options: [
      'Sternum',
      'Central tendon of the diaphragm',
      'Vertebral column',
      'Ribs',
      'Liver'
    ],
    correctAnswer: 1,
    explanation: 'The fibrous pericardium is firmly attached to the central tendon of the diaphragm, anchoring the heart inferiorly.'
  },
  {
    id: 'fp3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'The fibrous pericardium blends with the adventitia of which great vessels?',
    options: [
      'Pulmonary veins only',
      'Aorta, pulmonary trunk, SVC, IVC, and pulmonary veins',
      'Coronary arteries only',
      'Brachiocephalic veins only',
      'Azygos vein only'
    ],
    correctAnswer: 1,
    explanation: 'The fibrous pericardium blends with and is continuous with the adventitia of the great vessels (aorta, pulmonary trunk, venae cavae, and pulmonary veins) as they enter or leave the heart.'
  },
  {
    id: 'fp4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the sternopericardial ligaments?',
    options: [
      'Connections between pericardium and vertebrae',
      'Fibrous bands attaching the pericardium to the posterior sternum',
      'Ligaments within the heart',
      'Attachments to the diaphragm',
      'Connections to the ribs'
    ],
    correctAnswer: 1,
    explanation: 'The sternopericardial ligaments (superior and inferior) are fibrous bands that attach the fibrous pericardium to the posterior surface of the sternum, helping anchor the heart.'
  },
  {
    id: 'fp5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which nerve passes between the fibrous pericardium and mediastinal pleura?',
    options: [
      'Vagus nerve',
      'Phrenic nerve',
      'Recurrent laryngeal nerve',
      'Sympathetic trunk',
      'Intercostal nerves'
    ],
    correctAnswer: 1,
    explanation: 'The phrenic nerve descends between the fibrous pericardium and the mediastinal pleura on each side, making it vulnerable during cardiac surgery.'
  },
  {
    id: 'fp6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical consequence of a non-distensible fibrous pericardium in cardiac tamponade?',
    options: [
      'The heart can expand freely',
      'Fluid accumulation rapidly compresses the heart, impairing filling',
      'Blood pressure increases',
      'Heart rate decreases',
      'No hemodynamic effect'
    ],
    correctAnswer: 1,
    explanation: 'Because the fibrous pericardium cannot stretch acutely, rapid fluid accumulation (blood, effusion) compresses the heart chambers, preventing adequate filling and causing cardiac tamponade.'
  },
  {
    id: 'fp7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The pericardiophrenic vessels accompany which structure along the pericardium?',
    options: [
      'Vagus nerve',
      'Phrenic nerve',
      'Sympathetic trunk',
      'Thoracic duct',
      'Azygos vein'
    ],
    correctAnswer: 1,
    explanation: 'The pericardiophrenic artery and vein accompany the phrenic nerve along the lateral surface of the fibrous pericardium, supplying the pericardium and diaphragm.'
  },
  {
    id: 'fp8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the arterial blood supply to the fibrous pericardium?',
    options: [
      'Coronary arteries only',
      'Pericardiophrenic, musculophrenic, and bronchial arteries',
      'Pulmonary arteries',
      'Aortic vasa vasorum only',
      'Internal thoracic artery only'
    ],
    correctAnswer: 1,
    explanation: 'The fibrous pericardium receives blood from the pericardiophrenic arteries (from internal thoracic), musculophrenic arteries, and small branches from the bronchial and esophageal arteries.'
  },
  {
    id: 'fp9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Congenital absence of the pericardium most commonly affects which portion?',
    options: [
      'Inferior (diaphragmatic) portion',
      'Left side, sometimes allowing cardiac herniation',
      'Right side only',
      'Posterior portion only',
      'The entire pericardium is always absent'
    ],
    correctAnswer: 1,
    explanation: 'Congenital pericardial defects most commonly involve the left side and may allow herniation of the left atrial appendage or left ventricle, potentially causing strangulation.'
  },
  {
    id: 'fp10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'In pericardiocentesis, the needle is typically inserted at which location?',
    options: [
      'Right 5th intercostal space',
      'Left xiphocostal angle (subxiphoid approach)',
      'Suprasternal notch',
      'Right parasternal 2nd intercostal space',
      'Left midaxillary line'
    ],
    correctAnswer: 1,
    explanation: 'The subxiphoid (left xiphocostal angle) approach is commonly used for pericardiocentesis, directing the needle toward the left shoulder to drain pericardial fluid.'
  }
];

// 9. Pericardial Sinuses
export const pericardialSinusesQuestions: Question[] = [
  {
    id: 'ps1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'What is the pericardial cavity?',
    options: [
      'Space within the heart chambers',
      'Potential space between parietal and visceral serous pericardium',
      'Space between fibrous pericardium and chest wall',
      'Space within the myocardium',
      'The coronary sinus lumen'
    ],
    correctAnswer: 1,
    explanation: 'The pericardial cavity is the potential space between the parietal layer (lining the fibrous pericardium) and visceral layer (epicardium) of the serous pericardium, containing a small amount of lubricating fluid.'
  },
  {
    id: 'ps2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Approximately how much pericardial fluid is normally present?',
    options: [
      '100-200 mL',
      '15-50 mL',
      '500 mL',
      'No fluid is normally present',
      '1 liter'
    ],
    correctAnswer: 1,
    explanation: 'Normally, about 15-50 mL of serous pericardial fluid is present in the pericardial cavity, reducing friction during cardiac contractions.'
  },
  {
    id: 'ps3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the transverse pericardial sinus located?',
    options: [
      'Behind the pulmonary veins',
      'Behind the aorta and pulmonary trunk, anterior to the SVC and pulmonary veins',
      'Between the ventricles',
      'Above the diaphragm',
      'Anterior to the sternum'
    ],
    correctAnswer: 1,
    explanation: 'The transverse pericardial sinus is a passage behind the ascending aorta and pulmonary trunk and anterior to the SVC and pulmonary veins, formed by the reflection of serous pericardium.'
  },
  {
    id: 'ps4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the clinical importance of the transverse pericardial sinus?',
    options: [
      'It contains the coronary arteries',
      'A finger or clamp can be passed behind the great arteries to control them during surgery',
      'It is the site of pericardiocentesis',
      'It contains the cardiac plexus',
      'It drains pericardial fluid'
    ],
    correctAnswer: 1,
    explanation: 'During cardiac surgery, the surgeon can pass a finger or ligature through the transverse sinus behind the aorta and pulmonary trunk to clamp or control these vessels.'
  },
  {
    id: 'ps5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the oblique pericardial sinus located?',
    options: [
      'Anterior to the heart',
      'Behind the left atrium, bounded by reflections around the pulmonary veins and IVC',
      'Between the ventricles',
      'Superior to the aortic arch',
      'Anterior to the pulmonary trunk'
    ],
    correctAnswer: 1,
    explanation: 'The oblique pericardial sinus is a blind-ending cul-de-sac behind the left atrium, bounded by the pericardial reflections around the pulmonary veins and inferior vena cava.'
  },
  {
    id: 'ps6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The oblique pericardial sinus is a remnant of which embryological structure?',
    options: [
      'Sinus venosus',
      'Dorsal mesocardium',
      'Truncus arteriosus',
      'Bulbus cordis',
      'Primitive ventricle'
    ],
    correctAnswer: 1,
    explanation: 'The oblique sinus represents the site of the degenerated dorsal mesocardium, which initially connected the heart tube to the posterior body wall.'
  },
  {
    id: 'ps7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What forms the anterior boundary of the oblique pericardial sinus?',
    options: [
      'Ascending aorta',
      'Posterior wall of the left atrium',
      'Right ventricle',
      'Pulmonary trunk',
      'Superior vena cava'
    ],
    correctAnswer: 1,
    explanation: 'The anterior boundary of the oblique pericardial sinus is formed by the posterior wall of the left atrium (visceral pericardium/epicardium covering it).'
  },
  {
    id: 'ps8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'In pericardial effusion, fluid typically accumulates first in which location?',
    options: [
      'Transverse sinus only',
      'Dependent areas including the oblique sinus and inferior pericardial recess',
      'Anterior to the right ventricle only',
      'Around the great vessels only',
      'Within the myocardium'
    ],
    correctAnswer: 1,
    explanation: 'Pericardial fluid accumulates in dependent portions of the pericardial cavity, including the oblique sinus posteriorly and inferiorly, which can be detected on imaging.'
  },
  {
    id: 'ps9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What vessels form the boundaries of the transverse pericardial sinus?',
    options: [
      'Coronary arteries',
      'Arterial vessels (aorta, pulmonary trunk) anteriorly; venous vessels (SVC, pulmonary veins) posteriorly',
      'Only the pulmonary veins',
      'Brachiocephalic veins',
      'Internal thoracic vessels'
    ],
    correctAnswer: 1,
    explanation: 'The transverse sinus is bounded anteriorly by the ascending aorta and pulmonary trunk (arterial pole) and posteriorly by the SVC and pulmonary veins (venous pole).'
  },
  {
    id: 'ps10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'The visceral layer of serous pericardium is also known as:',
    options: [
      'Endocardium',
      'Epicardium',
      'Myocardium',
      'Fibrous pericardium',
      'Parietal pericardium'
    ],
    correctAnswer: 1,
    explanation: 'The visceral layer of the serous pericardium is called the epicardium. It directly covers the heart surface and contains the coronary vessels and fat.'
  }
];

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
