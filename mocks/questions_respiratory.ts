import type { Question } from './questions';

// ============================================================================
// RESPIRATORY SYSTEM QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Trachea toracică și bronhiile extrapulmonare (thoracicTracheaBronchiQuestions)
// 2. Bronhiile principale (mainBronchiQuestions)
// 3. Plămânii: raporturile vârfului (lungApexRelationsQuestions)
// 4. Plămânii: raporturile feței externe (lungCostalSurfaceQuestions)
// 5. Plămânul drept: raporturile feței mediastinale (rightLungMediastinalQuestions)
// 6. Plămânul stâng: raporturile feței mediastinale (leftLungMediastinalQuestions)
// 7. Pleura: generalități și sinusurile pleurale (pleuraGeneralSinusesQuestions)
// 8. Pediculii pulmonari (pulmonaryPediclesQuestions)
// ============================================================================

// 1. Thoracic Trachea and Extrapulmonary Bronchi
export const thoracicTracheaBronchiQuestions: Question[] = [
  {
    id: 'ttb1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'At which vertebral level does the trachea typically bifurcate into the main bronchi in the thorax?',
    options: [
      'At the level of T1 vertebra',
      'At the level of T4–T5 (sternal angle)',
      'At the level of T7 vertebra',
      'At the level of C7 vertebra',
      'At the level of T9–T10 vertebrae'
    ],
    correctAnswer: 1,
    explanation:
      'Within the thorax the trachea descends in the superior mediastinum and usually bifurcates at the level of the sternal angle, corresponding to the T4–T5 intervertebral disc.'
  },
  {
    id: 'ttb2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which statement BEST describes the position of the thoracic trachea in relation to the esophagus?',
    options: [
      'The trachea lies posterior to the esophagus throughout its course',
      'The trachea lies anterior to the esophagus throughout its course',
      'The trachea lies lateral to the esophagus on the left side only',
      'The trachea lies lateral to the esophagus on the right side only',
      'The trachea and esophagus do not have a close anatomical relationship'
    ],
    correctAnswer: 1,
    explanation:
      'In the superior mediastinum the thoracic trachea lies anterior to the esophagus, with its membranous posterior wall directly related to the esophageal tube.'
  },
  {
    id: 'ttb3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which main bronchus is more vertical, wider and shorter, and therefore more prone to receive aspirated foreign bodies?',
    options: [
      'Left main bronchus',
      'Right main bronchus',
      'They are identical in caliber and direction',
      'Both main bronchi are horizontal',
      'Neither bronchus receives aspirated material preferentially'
    ],
    correctAnswer: 1,
    explanation:
      'The right main bronchus is classically described as wider, shorter and more vertical than the left, so inhaled foreign bodies tend to enter the right bronchial tree more frequently.'
  },
  {
    id: 'ttb4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure arches over the left main bronchus as it enters the root of the lung?',
    options: [
      'Azygos vein',
      'Arch of the aorta',
      'Superior vena cava',
      'Inferior vena cava',
      'Internal thoracic artery'
    ],
    correctAnswer: 1,
    explanation:
      'The arch of the aorta passes over the left main bronchus as it curves posteriorly and to the left, forming a characteristic relation at the root of the left lung.'
  },
  {
    id: 'ttb5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which vessel arches over the right main bronchus at the hilum of the right lung?',
    options: [
      'Arch of the aorta',
      'Left brachiocephalic vein',
      'Azygos vein',
      'Pulmonary trunk',
      'Descending thoracic aorta'
    ],
    correctAnswer: 2,
    explanation:
      'The azygos vein forms a characteristic arch over the root of the right lung, passing superior to the right main bronchus before draining into the superior vena cava.'
  },
  {
    id: 'ttb6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which of the following statements about the carina is MOST accurate?',
    options: [
      'It is a muscular ridge on the anterior tracheal wall',
      'It is a cartilaginous ridge at the bifurcation projecting into the origin of the main bronchi',
      'It is a fibrous band joining the main bronchi posteriorly',
      'It is a groove between the pulmonary veins',
      'It is only visible externally on the lung surface'
    ],
    correctAnswer: 1,
    explanation:
      'The carina is a keel-shaped cartilaginous ridge at the inferior end of the trachea, projecting between the origins of the two main bronchi and serving as an important bronchoscopic landmark.'
  },
  {
    id: 'ttb7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure lies directly posterior to the bifurcation of the trachea in the thorax?',
    options: [
      'Ascending aorta',
      'Pulmonary trunk',
      'Esophagus',
      'Superior vena cava',
      'Left pulmonary artery'
    ],
    correctAnswer: 2,
    explanation:
      'At the level of the carina the esophagus lies immediately posterior, so that pathological enlargement of subcarinal nodes or distortion of the carina can narrow or displace the esophageal lumen.'
  },
  {
    id: 'ttb8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'How does the left main bronchus differ from the right in its course through the mediastinum?',
    options: [
      'It passes more vertically and reaches the lung in a shorter distance',
      'It passes inferior to the pulmonary trunk and superior vena cava',
      'It passes inferolaterally, anterior to the esophagus and thoracic aorta',
      'It passes inferolaterally, inferior to the arch of the aorta and anterior to the esophagus and descending aorta',
      'It runs entirely within the anterior mediastinum'
    ],
    correctAnswer: 3,
    explanation:
      'The left main bronchus takes a longer, more oblique course, passing inferior to the arch of the aorta and anterior to both the esophagus and descending thoracic aorta before entering the left lung hilum.'
  },
  {
    id: 'ttb9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which of the following BEST describes the relations of the thoracic trachea in the superior mediastinum?',
    options: [
      'Anterior to the thymus and posterior to the superior vena cava',
      'Posterior to the esophagus and anterior to the vertebral column',
      'Anterior to the esophagus and posterior to the arch of the aorta and brachiocephalic trunk',
      'Anterior to the esophagus and posterior to the sternum, thymus and great veins',
      'Lateral to both esophagus and great vessels without anterior relations'
    ],
    correctAnswer: 3,
    explanation:
      'In the superior mediastinum the trachea lies anterior to the esophagus and posterior to anterior mediastinal structures, including the sternum, thymus and large veins such as the brachiocephalic veins and superior vena cava.'
  },
  {
    id: 'ttb10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which statement BEST explains the clinical significance of the right upper lobe (eparterial) bronchus in relation to the right pulmonary artery?',
    options: [
      'It lies inferior to the right pulmonary artery, similar to all other lobar bronchi',
      'It crosses anterior to both the pulmonary artery and veins',
      'It arises above the level of the right pulmonary artery within the hilum',
      'It is the only bronchus that does not accompany a branch of the pulmonary artery',
      'It is located entirely outside the lung root'
    ],
    correctAnswer: 2,
    explanation:
      'The right upper lobe bronchus is termed eparterial because it arises above the right pulmonary artery within the lung root, a distinctive arrangement compared with the remaining hyparterial bronchi.'
  }
];

// 2. Main Bronchi (Bronhiile principale)
export const mainBronchiQuestions: Question[] = [
  {
    id: 'mb1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which statement BEST compares the right and left main bronchi?',
    options: [
      'The right main bronchus is longer and narrower than the left',
      'The right main bronchus is shorter, wider and more vertical than the left',
      'The left main bronchus is shorter and more vertical than the right',
      'Both main bronchi have identical length, calibre and direction',
      'The left main bronchus is wider and more vertical than the right'
    ],
    correctAnswer: 1,
    explanation:
      'The right main bronchus is characteristically shorter, wider and more vertical than the left, a configuration that favours the entry of aspirated material into the right bronchial tree.'
  },
  {
    id: 'mb2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which lobe of the lung is supplied by an "eparterial" lobar bronchus?',
    options: [
      'Right middle lobe',
      'Right lower lobe',
      'Right upper lobe',
      'Left upper lobe',
      'Left lower lobe'
    ],
    correctAnswer: 2,
    explanation:
      'The right upper lobe bronchus arises above the right pulmonary artery and is therefore termed eparterial, whereas the remaining lobar bronchi are hyparterial.'
  },
  {
    id: 'mb3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the typical length of the left main bronchus compared with the right?',
    options: [
      'The left main bronchus is shorter than the right (about 1 cm)',
      'The left main bronchus is of identical length to the right (about 2 cm)',
      'The left main bronchus is longer, commonly about 5 cm in length',
      'The left main bronchus is absent; the trachea divides directly into lobar bronchi',
      'The left main bronchus extends only within the lung substance'
    ],
    correctAnswer: 2,
    explanation:
      'The left main bronchus has a longer intrathoracic course, commonly measuring around 5 cm, as it passes obliquely beneath the arch of the aorta to reach the left lung root, whereas the right is typically shorter.'
  },
  {
    id: 'mb4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which major structures are closely related to the left main bronchus along its course?',
    options: [
      'Superior vena cava anteriorly and azygos vein posteriorly',
      'Ascending aorta anteriorly and inferior vena cava posteriorly',
      'Arch of the aorta superiorly and the esophagus and descending thoracic aorta posteriorly',
      'Pulmonary trunk superiorly and right atrium posteriorly',
      'Internal thoracic vessels anteriorly and vertebral column posteriorly'
    ],
    correctAnswer: 2,
    explanation:
      'The left main bronchus passes inferior to the arch of the aorta and anterior to the esophagus and descending thoracic aorta, relations of importance in mediastinal pathology and imaging.'
  },
  {
    id: 'mb5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Into how many lobar (secondary) bronchi does the right main bronchus typically divide?',
    options: [
      'Two lobar bronchi',
      'Three lobar bronchi',
      'Four lobar bronchi',
      'Five lobar bronchi',
      'Six lobar bronchi'
    ],
    correctAnswer: 1,
    explanation:
      'The right main bronchus divides into three lobar bronchi supplying the upper, middle and lower lobes of the right lung, whereas the left main bronchus divides into two lobar bronchi.'
  },
  {
    id: 'mb6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which clinical feature MOST directly reflects the more vertical orientation of the right main bronchus?',
    options: [
      'Greater incidence of left-sided pneumonia',
      'Frequent compression of the right main bronchus by the arch of the aorta',
      'Higher likelihood of foreign body aspiration into the right lower lobe bronchus',
      'Complete protection of the right lung from aspirated material',
      'Absence of segmental bronchi on the right side'
    ],
    correctAnswer: 2,
    explanation:
      'Because the right main bronchus is more vertical and in direct line with the trachea, aspirated foreign bodies tend to pass into it and often lodge in the right lower lobe bronchus.'
  },
  {
    id: 'mb7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure arches over the right main bronchus at the hilum, forming a characteristic impression on imaging and lung casts?',
    options: [
      'Arch of the aorta',
      'Left brachiocephalic vein',
      'Azygos vein',
      'Thoracic duct',
      'Internal thoracic vein'
    ],
    correctAnswer: 2,
    explanation:
      'The azygos vein forms a distinct arch over the right main bronchus at the root of the lung before draining into the superior vena cava, a relation often recognised radiologically.'
  },
  {
    id: 'mb8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which statement BEST describes the intrapulmonary continuation of the main bronchi?',
    options: [
      'Each main bronchus divides only into two segmental bronchi',
      'Lobar bronchi give rise to segmental (tertiary) bronchi that supply individual bronchopulmonary segments',
      'Segmental bronchi arise directly from the trachea',
      'There are no anatomical segments distal to the lobar bronchi',
      'The pattern of branching is identical but without segmental independence'
    ],
    correctAnswer: 1,
    explanation:
      'Within the lungs each main bronchus divides into lobar bronchi, which further give rise to segmental bronchi that supply anatomically and functionally discrete bronchopulmonary segments.'
  },
  {
    id: 'mb9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which vascular structures are classically described as crossing anterior to the right and left main bronchi respectively?',
    options: [
      'Azygos vein anterior to the right, arch of the aorta anterior to the left',
      'Pulmonary veins anterior to both main bronchi',
      'Superior vena cava anterior to the left only',
      'Internal thoracic arteries anterior to both main bronchi',
      'Descending aorta anterior to the right, azygos vein anterior to the left'
    ],
    correctAnswer: 0,
    explanation:
      'At the lung roots the azygos vein arches over the right main bronchus, whereas the arch of the aorta passes over the left main bronchus, creating characteristic anterior vascular relations.'
  },
  {
    id: 'mb10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why is distortion or widening of the carinal angle on imaging clinically significant in relation to the main bronchi?',
    options: [
      'It indicates congenital absence of one main bronchus',
      'It is a normal variant of no clinical importance',
      'It may reflect subcarinal lymph node enlargement or mass lesion impinging on the main bronchi',
      'It suggests acute pulmonary embolism in the segmental arteries',
      'It is specific for chronic obstructive pulmonary disease'
    ],
    correctAnswer: 2,
    explanation:
      'The carinal angle between the origins of the main bronchi is normally sharp; widening or distortion may indicate enlargement of subcarinal lymph nodes or other masses compressing the bronchi.'
  }
];

// 3. Lung Apex Relations (Plămânii: raporturile vârfului)
export const lungApexRelationsQuestions: Question[] = [
  {
    id: 'lar1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Where does the apex of each lung project in relation to the thoracic inlet?',
    options: [
      'It lies entirely below the level of the first rib',
      'It projects into the root of the neck above the first rib',
      'It reaches the level of the mandible',
      'It extends into the posterior mediastinum',
      'It is confined to the costophrenic recess'
    ],
    correctAnswer: 1,
    explanation:
      'The lung apex projects superiorly into the root of the neck, rising above the level of the first rib and its costal cartilage at the thoracic inlet.'
  },
  {
    id: 'lar2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which pleural part directly invests the apex of the lung as it enters the root of the neck?',
    options: [
      'Costal pleura',
      'Mediastinal pleura',
      'Cervical (cupular) pleura',
      'Diaphragmatic pleura',
      'Pericardial pleura'
    ],
    correctAnswer: 2,
    explanation:
      'The apex is covered by the cervical pleura, also called the pleural cupula, which forms the dome of pleura extending into the root of the neck over the lung apex.'
  },
  {
    id: 'lar3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which fascial specialization strengthens the cervical pleura over the lung apex?',
    options: [
      'Endothoracic fascia',
      'Prevertebral fascia',
      'Suprapleural (Sibson) fascia',
      'Transversalis fascia',
      'Pharyngobasilar fascia'
    ],
    correctAnswer: 2,
    explanation:
      'The suprapleural (Sibson) fascia is a thickened extension of the endothoracic fascia that reinforces the cervical pleura as it spans from the transverse process of C7 to the first rib over the lung apex.'
  },
  {
    id: 'lar4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which major artery lies in close relation anterior and medial to the apex of the right lung?',
    options: [
      'Internal thoracic artery',
      'Subclavian artery',
      'Common carotid artery',
      'Axillary artery',
      'Descending thoracic aorta'
    ],
    correctAnswer: 1,
    explanation:
      'The subclavian artery arches laterally over the dome of the pleura and the apex of the lung as it passes from the root of the neck toward the axilla, forming an important anterior–superior relation.'
  },
  {
    id: 'lar5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which venous structure commonly lies anterior and slightly inferior to the apex of the right lung?',
    options: [
      'Azygos vein',
      'Superior vena cava',
      'Right brachiocephalic vein',
      'Internal jugular vein',
      'Hemiazigos vein'
    ],
    correctAnswer: 2,
    explanation:
      'The right brachiocephalic vein descends obliquely behind the manubrium and lies anterior to the right lung apex and its cervical pleura as it joins the left brachiocephalic vein to form the superior vena cava.'
  },
  {
    id: 'lar6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which nerve crosses the lung apex and cervical pleura as it descends into the thorax?',
    options: [
      'Vagus nerve',
      'Phrenic nerve',
      'Recurrent laryngeal nerve',
      'Sympathetic trunk',
      'Greater splanchnic nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The phrenic nerve descends on the anterior surface of the scalenus anterior muscle and then passes medial to the lung apex and cervical pleura as it enters the superior mediastinum.'
  },
  {
    id: 'lar7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure lies posterior to the apex of the lung at the level of the thoracic inlet?',
    options: [
      'Trachea',
      'Esophagus',
      'First thoracic sympathetic ganglion',
      'Thyroid isthmus',
      'Pulmonary trunk'
    ],
    correctAnswer: 2,
    explanation:
      'Posterior to the lung apex at the thoracic inlet lie the neck of the first rib and the sympathetic chain, including the first thoracic ganglion, related to the costovertebral region.'
  },
  {
    id: 'lar8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why is a penetrating wound above the medial third of the clavicle clinically important with regard to the lung apex?',
    options: [
      'It cannot reach the pleural cavity at that level',
      'It may injure the lung apex and cervical pleura because they extend superior to the clavicle',
      'It affects only the sternoclavicular joint',
      'It is limited to damage of the brachial plexus',
      'It involves only subcutaneous tissues and is usually trivial'
    ],
    correctAnswer: 1,
    explanation:
      'The lung apex and cervical pleura project above the medial part of the clavicle, so penetrating injuries in this region may open the pleural cavity and injure the lung despite being apparently supraclavicular.'
  },
  {
    id: 'lar9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which major neurovascular bundle passes laterally to the lung apex as it enters the upper limb?',
    options: [
      'Femoral vessels and femoral nerve',
      'External iliac vessels and lumbar plexus',
      'Subclavian vessels and trunks of the brachial plexus',
      'Common carotid artery and vagus nerve',
      'Internal thoracic vessels and phrenic nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The subclavian artery and vein together with the trunks of the brachial plexus pass lateral to the lung apex and cervical pleura as they travel from the root of the neck into the axilla.'
  },
  {
    id: 'lar10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which pathological process at the lung apex is classically associated with compression of the lower trunk of the brachial plexus and sympathetic chain?',
    options: [
      'Lobar pneumonia of the upper lobe',
      'Pulmonary embolism in the apical segment artery',
      'Pancoast (superior sulcus) tumor',
      'Pleural effusion in the costodiaphragmatic recess',
      'Simple bronchial asthma'
    ],
    correctAnswer: 2,
    explanation:
      'A Pancoast (superior sulcus) tumor at the lung apex may invade the cervical pleura and adjacent structures, compressing the lower trunk of the brachial plexus and the sympathetic chain, producing characteristic neurologic and autonomic signs.'
  }
];

// 4. Lung Costal (Lateral) Surface Relations (Plămânii: raporturile feței externe)
export const lungCostalSurfaceQuestions: Question[] = [
  {
    id: 'lcs1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which term BEST describes the general shape and orientation of the costal (lateral) surface of each lung?',
    options: [
      'Flat and vertical',
      'Smooth, curved and convex, facing the thoracic wall',
      'Irregular and deeply concave, facing the mediastinum',
      'Horizontal and resting on the diaphragm',
      'Narrow and sharply ridged along the vertebral column'
    ],
    correctAnswer: 1,
    explanation:
      'The costal surface of each lung is smooth, curved and convex, moulded to the inner aspect of the thoracic cage and facing the ribs and intercostal spaces.'
  },
  {
    id: 'lcs2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which pleural subdivision directly covers the costal surface of the lungs?',
    options: [
      'Visceral pleura only',
      'Cervical pleura',
      'Costal part of the parietal pleura',
      'Mediastinal part of the parietal pleura',
      'Diaphragmatic part of the parietal pleura'
    ],
    correctAnswer: 2,
    explanation:
      'The costal surface is invested by visceral pleura and is related externally to the costal part of the parietal pleura lining the inner surface of the ribs and intercostal spaces.'
  },
  {
    id: 'lcs3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structures lie immediately external to the costal pleura overlying the costal surface of the lungs?',
    options: [
      'Pericardium and heart',
      'Ribs, costal cartilages and intercostal muscles',
      'Thoracic vertebral bodies and sympathetic trunks',
      'Diaphragm and liver',
      'Thyroid gland and trachea'
    ],
    correctAnswer: 1,
    explanation:
      'Beyond the costal pleura the costal surface is related to the thoracic cage, consisting chiefly of ribs, costal cartilages and the interposed intercostal muscles.'
  },
  {
    id: 'lcs4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which lung border separates the costal surface from the diaphragmatic (basal) surface?',
    options: [
      'Anterior border',
      'Posterior border',
      'Inferior border',
      'Superior border',
      'Interlobar border'
    ],
    correctAnswer: 2,
    explanation:
      'The inferior border is a thin, sharp margin that separates the convex costal surface from the concave diaphragmatic surface and projects into the costodiaphragmatic recess during quiet respiration.'
  },
  {
    id: 'lcs5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Anteriorly, the costal surface of the lung meets the mediastinal surface along which border?',
    options: [
      'Posterior border',
      'Inferior border',
      'Cardiac border',
      'Anterior border',
      'Apical border'
    ],
    correctAnswer: 3,
    explanation:
      'The anterior border is formed where the costal surface passes into the mediastinal surface; on the left side it is indented by the cardiac notch, reflecting the underlying heart.'
  },
  {
    id: 'lcs6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which description BEST characterizes the posterior relation of the costal surface of the lungs?',
    options: [
      'It is separated from the vertebral column by the pericardial sac',
      'It fits into the deep paravertebral gutter alongside the heads of the ribs',
      'It lies directly against the sternum without pleural interposition',
      'It is in contact with the liver on the right and stomach on the left',
      'It abuts the trachea and great vessels throughout its extent'
    ],
    correctAnswer: 1,
    explanation:
      'Posteriorly the costal surface curves into the paravertebral gutter, where it is related to the heads and necks of the ribs and the bodies of the thoracic vertebrae through the intervening pleura and endothoracic fascia.'
  },
  {
    id: 'lcs7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which intercostal spaces are most commonly used for auscultation of breath sounds over the costal surface of the lower lobes?',
    options: [
      'First and second intercostal spaces anteriorly',
      'Third and fourth intercostal spaces along the midclavicular line',
      'Fifth and sixth intercostal spaces in the midaxillary line',
      'Ninth and tenth intercostal spaces posterior to the scapula',
      'Eleventh intercostal space near the costal margin'
    ],
    correctAnswer: 2,
    explanation:
      'Breath sounds from the lower lobes are best heard over the lateral costal surface in the fifth and sixth intercostal spaces along the midaxillary line, where the lower lobe parenchyma comes closest to the chest wall.'
  },
  {
    id: 'lcs8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'How does deep inspiration change the inferior extent of the costal surface relative to the thoracic wall in the midaxillary line?',
    options: [
      'It remains fixed at the level of the fourth rib',
      'It descends to approximately the sixth rib in the midaxillary line',
      'It descends to approximately the eighth rib in the midaxillary line',
      'It ascends to the second rib due to diaphragmatic relaxation',
      'It reaches the level of the twelfth rib'
    ],
    correctAnswer: 2,
    explanation:
      'During deep inspiration the inferior border of the lung in the midaxillary line descends to about the level of the eighth rib, so the costal surface extends further caudally over the thoracic wall.'
  },
  {
    id: 'lcs9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which statement BEST explains why pleuritic pain from the costal pleura is often well localized to the thoracic wall?',
    options: [
      'The visceral pleura has dense somatic innervation',
      'The costal pleura is supplied by intercostal nerves that also innervate the overlying skin and muscles',
      'The costal pleura is innervated exclusively by the phrenic nerve',
      'The costal pleura has no sensory innervation',
      'Pain is referred only to the abdomen via lower thoracic nerves'
    ],
    correctAnswer: 1,
    explanation:
      'The costal pleura receives somatic sensory fibers from intercostal nerves, which also supply the corresponding dermatomes and intercostal muscles, so inflammation of this pleura produces sharp, well-localized chest wall pain.'
  },
  {
    id: 'lcs10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which imaging feature on a lateral chest radiograph reflects the convexity of the costal surface of the lung against the thoracic wall?',
    options: [
      'A straight vertical lung outline from apex to base',
      'A concave indentation throughout the rib cage',
      'A smooth, gently convex contour following the inner aspect of the ribs',
      'A series of angular projections corresponding to each rib',
      'A sharp angle at the level of the hilum only'
    ],
    correctAnswer: 2,
    explanation:
      'On lateral radiographs the lung field presents a smooth, gently convex outline that mirrors the curvature of the ribs and costal cartilages, representing the costal surface pressed against the thoracic cage.'
  }
];

// 5. Right Lung Mediastinal Surface Relations (Plămânul drept: raporturile feței mediastinale)
export const rightLungMediastinalQuestions: Question[] = [
  {
    id: 'rlms1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which general feature BEST characterizes the mediastinal surface of the right lung?',
    options: [
      'It is convex and moulded to the thoracic wall',
      'It is concave and moulded to the pericardium and mediastinal structures',
      'It is flat and featureless',
      'It is horizontal and rests entirely on the diaphragm',
      'It consists only of fissures between the lobes'
    ],
    correctAnswer: 1,
    explanation:
      'The mediastinal surface of each lung is concave and moulded to the lateral aspect of the mediastinum, particularly the pericardium and adjacent great vessels and airways.'
  },
  {
    id: 'rlms2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which cardiac chamber lies in closest relation to the cardiac impression on the mediastinal surface of the right lung?',
    options: [
      'Left ventricle',
      'Left atrium',
      'Right atrium',
      'Right ventricle',
      'Left ventricular apex'
    ],
    correctAnswer: 2,
    explanation:
      'On the right lung the cardiac impression is shallower than on the left and is related chiefly to the right atrium, which forms much of the right cardiac border.'
  },
  {
    id: 'rlms3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which venous structure descends anterior to the mediastinal surface of the right lung and forms a vertical groove above the hilum?',
    options: [
      'Azygos vein',
      'Superior vena cava',
      'Inferior vena cava',
      'Left brachiocephalic vein',
      'Internal thoracic vein'
    ],
    correctAnswer: 1,
    explanation:
      'The superior vena cava descends along the right side of the superior mediastinum and produces a vertical groove on the mediastinal surface of the right lung anterior to the hilum.'
  },
  {
    id: 'rlms4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure forms an arch above the root of the right lung and leaves a characteristic groove on its mediastinal surface?',
    options: [
      'Arch of the aorta',
      'Right brachiocephalic vein',
      'Azygos vein',
      'Thoracic duct',
      'Pulmonary trunk'
    ],
    correctAnswer: 2,
    explanation:
      'The azygos vein arches over the root of the right lung before draining into the superior vena cava, creating a distinct curved groove superior to the hilum.'
  },
  {
    id: 'rlms5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure is MOST closely related to the posterior part of the mediastinal surface of the right lung?',
    options: [
      'Ascending aorta',
      'Esophagus',
      'Inferior vena cava',
      'Right coronary artery',
      'Thoracic duct'
    ],
    correctAnswer: 1,
    explanation:
      'Immediately posterior to the right lung root and mediastinal surface lies the esophagus, which may leave a shallow vertical impression on the lung in anatomical specimens.'
  },
  {
    id: 'rlms6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structures lie anterior to the root of the right lung on the mediastinal surface?',
    options: [
      'Vagus nerve and posterior pulmonary plexus',
      'Esophagus and thoracic duct',
      'Phrenic nerve and pericardiacophrenic vessels',
      'Arch of the aorta and left recurrent laryngeal nerve',
      'Descending thoracic aorta and hemiazygos vein'
    ],
    correctAnswer: 2,
    explanation:
      'The phrenic nerve and accompanying pericardiacophrenic vessels descend anterior to each lung root between mediastinal pleura and pericardium, forming a key anterior relation.'
  },
  {
    id: 'rlms7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which vessel produces an inferior vertical groove on the mediastinal surface of the right lung, extending from the hilum toward the diaphragm?',
    options: [
      'Inferior vena cava',
      'Superior vena cava',
      'Right pulmonary artery',
      'Right inferior pulmonary vein',
      'Internal thoracic artery'
    ],
    correctAnswer: 0,
    explanation:
      'A groove for the inferior vena cava may be seen running inferiorly from the region of the right lung root toward the diaphragm, reflecting its course to the right atrium.'
  },
  {
    id: 'rlms8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which arrangement of hilar structures is MOST typical on the mediastinal surface of the right lung (from superior to inferior)?',
    options: [
      'Pulmonary artery, main bronchus, pulmonary veins',
      'Main bronchus, pulmonary artery, pulmonary veins',
      'Pulmonary veins, pulmonary artery, main bronchus',
      'Pulmonary artery, pulmonary veins, main bronchus',
      'Main bronchus, pulmonary veins, pulmonary artery'
    ],
    correctAnswer: 0,
    explanation:
      'At the right lung hilum the pulmonary artery usually lies superior, the main bronchus posteroinferior, and the superior and inferior pulmonary veins situated anteriorly and inferiorly.'
  },
  {
    id: 'rlms9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which major arterial structure may leave a shallow groove on the upper part of the mediastinal surface of the right lung, near the apex?',
    options: [
      'Ascending aorta',
      'Right subclavian artery',
      'Pulmonary trunk',
      'Left common carotid artery',
      'Abdominal aorta'
    ],
    correctAnswer: 1,
    explanation:
      'The right subclavian artery curves laterally from the brachiocephalic trunk and may produce a faint groove near the lung apex on the upper mediastinal surface.'
  },
  {
    id: 'rlms10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which statement BEST summarizes the cardiac impression on the mediastinal surface of the right lung compared with that on the left lung?',
    options: [
      'It is absent on the right lung',
      'It is present but shallower and less extensive on the right lung',
      'It is deeper on the right lung because of the right ventricle',
      'It is identical in depth and extent on both lungs',
      'It is confined to the lower lobe on the right lung'
    ],
    correctAnswer: 1,
    explanation:
      'Both lungs display a cardiac impression, but on the right lung it is shallower and less extensive than on the left, where the left ventricle produces a prominent impression and cardiac notch.'
  }
];

// 6. Left Lung Mediastinal Surface Relations (Plămânul stâng: raporturile feței mediastinale)
export const leftLungMediastinalQuestions: Question[] = [
  {
    id: 'llms1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which feature is characteristic of the anterior border and mediastinal surface of the left lung?',
    options: [
      'A broad, smooth anterior border without notches',
      'A deep cardiac notch with a lingular projection inferior to it',
      'Two horizontal fissures forming three anterior lobes',
      'An impression exclusively for the right atrium',
      'A prominent groove for the superior vena cava anteriorly'
    ],
    correctAnswer: 1,
    explanation:
      'The mediastinal surface and anterior border of the left lung show a deep cardiac notch and a tongue‑like lingula, reflecting the close relation to the left ventricle and the displacement of lung tissue.'
  },
  {
    id: 'llms2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which cardiac chamber forms the deepest cardiac impression on the mediastinal surface of the left lung?',
    options: [
      'Right atrium',
      'Right ventricle',
      'Left atrium',
      'Left ventricle',
      'Right atrial appendage'
    ],
    correctAnswer: 3,
    explanation:
      'On the left lung the large cardiac impression is produced chiefly by the left ventricle, which forms the prominent left border of the heart and encroaches upon the mediastinal surface.'
  },
  {
    id: 'llms3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which major arterial structures leave characteristic grooves on the upper mediastinal surface of the left lung?',
    options: [
      'Pulmonary trunk and right coronary artery',
      'Arch of the aorta and descending thoracic aorta',
      'Superior vena cava and azygos vein',
      'Internal thoracic and pericardiacophrenic arteries',
      'Abdominal aorta and celiac trunk'
    ],
    correctAnswer: 1,
    explanation:
      'The arch of the aorta curves over the root of the left lung and the descending thoracic aorta descends posterior to it, both leaving recognizable impressions on the upper mediastinal surface.'
  },
  {
    id: 'llms4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which vessel often produces a groove superior and posterior to the hilum of the left lung?',
    options: [
      'Left subclavian artery',
      'Superior vena cava',
      'Inferior vena cava',
      'Pulmonary trunk',
      'Internal jugular vein'
    ],
    correctAnswer: 0,
    explanation:
      'The left subclavian artery arches laterally from the aortic arch and may leave a shallow groove on the superior part of the mediastinal surface of the left lung near the apex and hilum.'
  },
  {
    id: 'llms5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure lies posterior to the root and mediastinal surface of the left lung and may leave a vertical impression inferiorly?',
    options: [
      'Trachea',
      'Esophagus',
      'Superior vena cava',
      'Inferior vena cava',
      'Thoracic inlet'
    ],
    correctAnswer: 1,
    explanation:
      'Inferior to the left main bronchus the esophagus descends posterior to the left lung root and may produce a faint longitudinal impression on the lower mediastinal surface.'
  },
  {
    id: 'llms6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which arrangement of hilar structures is MOST typical on the mediastinal surface of the left lung (from superior to inferior)?',
    options: [
      'Pulmonary artery, main bronchus, pulmonary veins',
      'Main bronchus, pulmonary artery, pulmonary veins',
      'Pulmonary veins, pulmonary artery, main bronchus',
      'Pulmonary artery, pulmonary veins, main bronchus',
      'Main bronchus, pulmonary veins, pulmonary artery'
    ],
    correctAnswer: 0,
    explanation:
      'At the left lung hilum the pulmonary artery usually lies superior, the main bronchus posteroinferior and the pulmonary veins in the most anterior and inferior positions.'
  },
  {
    id: 'llms7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structures are related anterior to the root of the left lung on its mediastinal surface?',
    options: [
      'Vagus nerve and posterior pulmonary plexus',
      'Esophagus and thoracic duct',
      'Phrenic nerve and pericardiacophrenic vessels',
      'Sympathetic trunk and splanchnic nerves',
      'Hemiazygos vein and descending aorta'
    ],
    correctAnswer: 2,
    explanation:
      'As on the right side, the phrenic nerve with the pericardiacophrenic artery and vein descends anterior to the left lung root between mediastinal pleura and fibrous pericardium.'
  },
  {
    id: 'llms8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which nerve passes posterior to the root of the left lung, contributing to the posterior pulmonary plexus?',
    options: [
      'Left phrenic nerve',
      'Left vagus nerve',
      'Left recurrent laryngeal nerve',
      'Greater splanchnic nerve',
      'Intercostobrachial nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The left vagus nerve courses posterior to the root of the left lung and gives branches to the posterior pulmonary plexus before continuing toward the esophageal plexus.'
  },
  {
    id: 'llms9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which description BEST characterizes the lingula of the left lung in relation to the mediastinal surface?',
    options: [
      'A projection from the inferior lobe that covers the diaphragm',
      'A tongue‑like projection of the superior lobe that overlaps the heart and enters the costomediastinal recess',
      'A ridge along the posterior border related to the vertebral column',
      'A fissure separating the cardiac impression from the hilum',
      'A segment of the lower lobe supplied by a separate main bronchus'
    ],
    correctAnswer: 1,
    explanation:
      'The lingula is a tongue‑shaped projection of the superior lobe that extends anteroinferiorly in front of the heart into the costomediastinal recess, functionally analogous to the right middle lobe.'
  },
  {
    id: 'llms10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which statement BEST summarizes the difference between right and left mediastinal lung surfaces regarding vascular impressions?',
    options: [
      'Only the right lung shows vascular impressions',
      'The left lung shows prominent impressions for the aortic arch and descending aorta, whereas the right lung shows grooves for the superior vena cava and azygos vein',
      'Both lungs have identical vascular impressions',
      'The right lung has larger impressions for the aorta than the left',
      'The left lung shows only venous but no arterial impressions'
    ],
    correctAnswer: 1,
    explanation:
      'The left mediastinal surface bears conspicuous impressions for the aortic arch and descending aorta, while the right surface is moulded chiefly by the superior vena cava and the arch of the azygos vein.'
  }
];

// 7. Pleura: General and Pleural Sinuses (Pleura: generalități și sinusurile pleurale)
export const pleuraGeneralSinusesQuestions: Question[] = [
  {
    id: 'pl1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which statement BEST describes the two layers of the pleura?',
    options: [
      'Both layers line only the thoracic wall',
      'The visceral pleura covers the lungs; the parietal pleura lines the thoracic cavity',
      'The parietal pleura covers the lungs; the visceral pleura lines the ribs',
      'Each lung has a single undivided pleural layer',
      'The pleurae are confined to the mediastinum only'
    ],
    correctAnswer: 1,
    explanation:
      'The pleura is a double‑layered serous membrane; the visceral pleura invests the lungs, while the parietal pleura lines the thoracic wall, mediastinum and diaphragm, forming a closed pleural sac on each side.'
  },
  {
    id: 'pl2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which are the main named parts of the parietal pleura?',
    options: [
      'Apical, basal and intermediate pleura',
      'Costal, diaphragmatic, mediastinal and cervical pleura',
      'Anterior, posterior and lateral pleura',
      'Superior, middle and inferior pleura',
      'Cardiac and non‑cardiac pleura'
    ],
    correctAnswer: 1,
    explanation:
      'The parietal pleura is subdivided according to the structures it lines into costal, diaphragmatic, mediastinal and cervical pleura, each forming part of the continuous pleural sac.'
  },
  {
    id: 'pl3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which term describes the line where costal pleura becomes diaphragmatic pleura, forming the inferior pleural reflection?',
    options: [
      'Sternal line of pleural reflection',
      'Costal line of pleural reflection',
      'Vertebral line of pleural reflection',
      'Apical line of pleural reflection',
      'Cardiac line of pleural reflection'
    ],
    correctAnswer: 1,
    explanation:
      'Inferiorly, the costal pleura reflects onto the diaphragm along the costal line of pleural reflection, marking the junction of costal and diaphragmatic pleura and bounding the costodiaphragmatic recess.'
  },
  {
    id: 'pl4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is a pleural recess?',
    options: [
      'A permanent gap between visceral and parietal pleura filled with fat',
      'A potential space where parietal pleura reflects and the lung does not fully occupy the pleural cavity',
      'An opening between the right and left pleural sacs',
      'A fissure separating lobes of the lung',
      'A defect in the pleura created by disease'
    ],
    correctAnswer: 1,
    explanation:
      'Pleural recesses are potential spaces formed where the parietal pleura reflects and the lung does not fill the pleural cavity; they allow lung expansion during deep inspiration and can collect fluid.'
  },
  {
    id: 'pl5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which pleural recess is the largest and most clinically important?',
    options: [
      'Right costomediastinal recess',
      'Left costomediastinal recess',
      'Right retroesophageal recess',
      'Costodiaphragmatic recess on each side',
      'Infracardiac recess only'
    ],
    correctAnswer: 3,
    explanation:
      'The costodiaphragmatic recesses, between costal and diaphragmatic pleura, are the largest and most clinically important recesses, forming the most dependent parts of the pleural cavities where fluid tends to accumulate.'
  },
  {
    id: 'pl6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where is the costodiaphragmatic recess located in relation to the lung and thoracic wall?',
    options: [
      'Between visceral and parietal pleura at the lung apex',
      'Between mediastinal pleura and pericardium anteriorly',
      'Between costal and diaphragmatic parietal pleura around the dome of the diaphragm',
      'Between the two layers of the pulmonary ligament',
      'Between pericardium and diaphragm beneath the heart'
    ],
    correctAnswer: 2,
    explanation:
      'The costodiaphragmatic recess is a gutter‑like space encircling the dome of the diaphragm, where costal pleura reflects onto diaphragmatic pleura and the lung edge does not reach the full extent of the pleural cavity.'
  },
  {
    id: 'pl7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which recess lies anteriorly where costal pleura comes into contact with mediastinal pleura, and is especially deep on the left side?',
    options: [
      'Right costodiaphragmatic recess',
      'Left costodiaphragmatic recess',
      'Right costomediastinal recess',
      'Left costomediastinal recess',
      'Retroesophageal recess'
    ],
    correctAnswer: 3,
    explanation:
      'The costomediastinal recesses are anterior spaces between costal and mediastinal pleura; the left one is larger because the cardiac notch removes lung tissue, allowing the lingula to expand into this recess during inspiration.'
  },
  {
    id: 'pl8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why do pleural effusions commonly first accumulate in the costodiaphragmatic recess in the upright patient?',
    options: [
      'It is the least dependent part of the pleural cavity',
      'It communicates freely with the peritoneal cavity',
      'It is the most dependent region of the pleural cavity, situated inferiorly along the diaphragm',
      'It lacks pleural fluid and thus attracts fluid by capillarity',
      'It is directly continuous with the pericardial cavity'
    ],
    correctAnswer: 2,
    explanation:
      'Because the costodiaphragmatic recess forms the lowest part of the pleural cavity in the upright position, gravity causes pleural fluid to pool there, making it a key site for detecting and draining effusions.'
  },
  {
    id: 'pl9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which lines of pleural reflection help define the anterior and posterior limits of the pleural cavities?',
    options: [
      'Only the costal line of reflection',
      'Sternal, costal and vertebral lines of pleural reflection',
      'Only the vertebral line of reflection',
      'Only the apical line of reflection',
      'Cardiac and pulmonary lines of reflection'
    ],
    correctAnswer: 1,
    explanation:
      'The sternal (anterior), costal (inferior) and vertebral (posterior) lines of pleural reflection trace where the parietal pleura changes direction, marking the boundaries of the pleural cavities on the thoracic wall.'
  },
  {
    id: 'pl10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which statement BEST describes the relationship between lung margins and pleural reflections in the midaxillary line during quiet respiration?',
    options: [
      'The lung margin and pleural reflection coincide at the same rib level',
      'The pleural reflection lies two to three ribs inferior to the lung margin',
      'The lung margin lies two ribs inferior to the pleural reflection',
      'There is no consistent relationship between them',
      'The lung margin does not reach the midaxillary line'
    ],
    correctAnswer: 1,
    explanation:
      'In the midaxillary line the lung usually ends around the level of the 8th rib during quiet breathing, whereas the pleural reflection descends to about the 10th rib, leaving a 2‑rib‑height costodiaphragmatic recess.'
  }
];

// 8. Pulmonary Pedicles (Pediculii pulmonari)
export const pulmonaryPediclesQuestions: Question[] = [
  {
    id: 'pp1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which term is commonly used to describe the collection of structures entering and leaving the lung at the hilum?',
    options: [
      'Bronchial plexus',
      'Pulmonary pedicle or root of the lung',
      'Costomediastinal bundle',
      'Pleural ligament',
      'Thoracic inlet complex'
    ],
    correctAnswer: 1,
    explanation:
      'The root of each lung, often referred to in clinical language as the pulmonary pedicle, is the bundle of structures entering and leaving the lung at the hilum, enclosed by a reflection of pleura.'
  },
  {
    id: 'pp2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which of the following is NOT a principal component of the pulmonary pedicle?',
    options: [
      'Main bronchus and lobar bronchi',
      'Pulmonary artery',
      'Superior and inferior pulmonary veins',
      'Bronchial arteries and veins',
      'Superior vena cava'
    ],
    correctAnswer: 4,
    explanation:
      'Each pulmonary pedicle contains a bronchus, one pulmonary artery, two pulmonary veins, bronchial vessels, lymphatics, lymph nodes and autonomic nerve plexuses, but not the superior vena cava itself.'
  },
  {
    id: 'pp3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At which vertebral levels do the roots of the lungs typically lie?',
    options: [
      'Opposite C7–T1 vertebrae',
      'Opposite T2–T3 vertebrae',
      'Opposite T5–T7 vertebrae',
      'Opposite T9–T10 vertebrae',
      'Opposite L1–L2 vertebrae'
    ],
    correctAnswer: 2,
    explanation:
      'The roots of the lungs lie opposite the bodies of approximately T5 to T7 vertebrae, where the bronchi, vessels and nerves enter and leave the lungs through the hila.'
  },
  {
    id: 'pp4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which statement BEST describes the arrangement of pulmonary veins within the lung root?',
    options: [
      'They lie superior to all other structures',
      'They lie posterior to the main bronchus',
      'They are situated most anteriorly and inferiorly in the hilum',
      'They lie between the bronchus and pulmonary artery',
      'They pass outside the pleural reflection'
    ],
    correctAnswer: 2,
    explanation:
      'At each hilum the superior and inferior pulmonary veins occupy the most anterior and inferior positions, draining oxygenated blood from the lung to the left atrium.'
  },
  {
    id: 'pp5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure suspends the lower part of the pulmonary pedicle from the mediastinum?',
    options: [
      'Pulmonary ligament',
      'Costodiaphragmatic ligament',
      'Transverse thoracic muscle',
      'Pericardiacophrenic ligament',
      'Bronchial mesentery'
    ],
    correctAnswer: 0,
    explanation:
      'The pulmonary ligament is a double fold of mediastinal pleura extending inferiorly from the lung root, helping to stabilize the pedicle while allowing movement during respiration.'
  },
  {
    id: 'pp6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'From anterior to posterior, which sequence correctly describes the main components of the lung root on either side?',
    options: [
      'Pulmonary artery, pulmonary vein, bronchus',
      'Bronchus, pulmonary vein, pulmonary artery',
      'Pulmonary vein, pulmonary artery, bronchus',
      'Pulmonary vein, bronchus, pulmonary artery',
      'Pulmonary artery, bronchus, pulmonary vein'
    ],
    correctAnswer: 2,
    explanation:
      'From anterior to posterior the root components are arranged as a superior pulmonary vein, pulmonary artery and bronchus (with bronchial vessels and lymph nodes), a pattern that is broadly similar on both sides.'
  },
  {
    id: 'pp7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which statement BEST distinguishes the vertical arrangement of principal structures in the right lung root from that in the left?',
    options: [
      'Right: pulmonary artery highest; Left: eparterial bronchus highest',
      'Right: inferior pulmonary vein highest; Left: bronchus highest',
      'Right: eparterial bronchus highest, then pulmonary artery, then hyparterial bronchus and inferior pulmonary vein; Left: pulmonary artery highest, then bronchus, then inferior pulmonary vein',
      'Right and left roots are vertically identical',
      'Right: pulmonary veins highest; Left: pulmonary artery lowest'
    ],
    correctAnswer: 2,
    explanation:
      'Vertically, the right root shows the eparterial bronchus above the pulmonary artery, with the hyparterial bronchus and inferior pulmonary vein below, whereas on the left the pulmonary artery is highest, followed by bronchus and inferior pulmonary vein.'
  },
  {
    id: 'pp8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which nerves pass anterior and posterior to the pulmonary pedicle, respectively, in the mediastinum?',
    options: [
      'Vagus nerve anterior, phrenic nerve posterior',
      'Phrenic nerve anterior, vagus nerve posterior',
      'Intercostal nerves anterior, sympathetic trunks posterior',
      'Only the vagus nerve passes around the pedicle',
      'Only the phrenic nerve passes around the pedicle'
    ],
    correctAnswer: 1,
    explanation:
      'On each side the phrenic nerve and pericardiacophrenic vessels pass anterior to the lung root, while the vagus nerve descends posterior to it, contributing to pulmonary and esophageal plexuses.'
  },
  {
    id: 'pp9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structures accompany the bronchi and pulmonary vessels within the pulmonary pedicle as bronchovascular bundles in the lung?',
    options: [
      'Only lymphatics',
      'Only autonomic nerves',
      'Bronchial arteries, veins, lymphatics and autonomic nerve plexuses',
      'Intercostal arteries and veins',
      'Phrenic nerve and pericardiacophrenic vessels'
    ],
    correctAnswer: 2,
    explanation:
      'Within the lung the bronchi and pulmonary vessels are accompanied by bronchial arteries and veins, lymphatics and autonomic nerves in bronchovascular bundles derived from the root structures.'
  },
  {
    id: 'pp10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which clinical imaging finding corresponds to the pulmonary pedicle on a standard PA chest radiograph?',
    options: [
      'Sharp linear translucencies at the lung apices',
      'Homogeneous opacity at the costophrenic angles',
      'Prominent bilateral hila representing the pulmonary vascular pedicles',
      'Radiolucent bands along the cardiac borders',
      'Complete absence of any hilar shadows'
    ],
    correctAnswer: 2,
    explanation:
      'On PA radiographs the hila correspond chiefly to the pulmonary vascular pedicles, formed by the branching pulmonary arteries and veins at the lung roots, whose enlargement or distortion suggests pathology.'
  }
];

// Combine all respiratory questions for easy import
export const respiratoryQuestions: Question[] = [
  ...thoracicTracheaBronchiQuestions,
  ...mainBronchiQuestions,
  ...lungApexRelationsQuestions,
  ...lungCostalSurfaceQuestions,
  ...rightLungMediastinalQuestions,
  ...leftLungMediastinalQuestions,
  ...pleuraGeneralSinusesQuestions,
  ...pulmonaryPediclesQuestions
];
