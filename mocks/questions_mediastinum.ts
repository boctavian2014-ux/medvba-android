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

// 1. Thoracic Cavity Compartments
export const thoracicCavityCompartmentsQuestions: Question[] = [
  {
    id: 'thoracic-comp-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the main compartments of the thoracic cavity?',
    options: ['Right and left pleural cavities only', 'Mediastinum only', 'Right pleural cavity, left pleural cavity, and mediastinum', 'Superior and inferior compartments'],
    correctAnswer: 2,
    explanation: 'The thoracic cavity contains three main compartments: the right pleural cavity, left pleural cavity, and the mediastinum (the central compartment between the lungs).'
  },
  {
    id: 'thoracic-comp-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What structure forms the roof of the thoracic cavity?',
    options: ['Manubrium', 'Suprapleural membrane (Sibson fascia)', 'First rib', 'Clavicle'],
    correctAnswer: 1,
    explanation: 'The suprapleural membrane (Sibson fascia) covers the apex of the lung and forms the roof of the thoracic cavity, attaching to the inner border of the first rib and transverse process of C7.'
  },
  {
    id: 'thoracic-comp-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the thoracic inlet (superior thoracic aperture) bounded by?',
    options: ['T1 vertebra, first ribs, and manubrium', 'T12 vertebra, 12th ribs, and xiphoid', 'Clavicles and sternum', 'Scapulae and spine'],
    correctAnswer: 0,
    explanation: 'The thoracic inlet is bounded posteriorly by T1 vertebra, laterally by the first ribs and their costal cartilages, and anteriorly by the superior border of the manubrium.'
  },
  {
    id: 'thoracic-comp-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What structures pass through the thoracic inlet?',
    options: ['Only the trachea', 'Trachea, esophagus, great vessels, nerves, and thoracic duct', 'Only blood vessels', 'Only the esophagus'],
    correctAnswer: 1,
    explanation: 'The thoracic inlet transmits the trachea, esophagus, great vessels (subclavian, brachiocephalic, common carotid), vagus and phrenic nerves, sympathetic trunks, and thoracic duct.'
  },
  {
    id: 'thoracic-comp-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of the thoracic inlet?',
    options: ['No clinical significance', 'Site of thoracic outlet syndrome and Pancoast tumor invasion', 'Only relevant for cardiac surgery', 'Important only in neonates'],
    correctAnswer: 1,
    explanation: 'The thoracic inlet is clinically significant as the site of thoracic outlet syndrome (compression of neurovascular structures) and Pancoast tumor invasion from lung apex tumors.'
  },
  {
    id: 'thoracic-comp-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What separates the thoracic cavity from the abdominal cavity?',
    options: ['Peritoneum', 'Diaphragm', 'Transversalis fascia', 'Endothoracic fascia'],
    correctAnswer: 1,
    explanation: 'The diaphragm is the musculotendinous partition separating the thoracic cavity from the abdominal cavity. It is the primary muscle of respiration.'
  },
  {
    id: 'thoracic-comp-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the endothoracic fascia?',
    options: ['Lining of the heart', 'Thin fascial layer between parietal pleura and thoracic wall', 'Covering of the lungs', 'Part of the diaphragm'],
    correctAnswer: 1,
    explanation: 'The endothoracic fascia is a thin layer of loose connective tissue between the parietal pleura and the thoracic wall. It allows surgical separation of the pleura from the chest wall.'
  },
  {
    id: 'thoracic-comp-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the function of the pleural cavities?',
    options: ['Store air for respiration', 'Contain potential space with serous fluid for lung movement', 'Produce blood cells', 'Digest food'],
    correctAnswer: 1,
    explanation: 'The pleural cavities are potential spaces between visceral and parietal pleura containing a thin layer of serous fluid that lubricates and allows smooth lung movement during breathing.'
  }
];

// 2. Mediastinum Compartments
export const mediastinumCompartmentsQuestions: Question[] = [
  {
    id: 'mediastinum-comp-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What structure divides the mediastinum into superior and inferior parts?',
    options: ['Tracheal bifurcation', 'Transverse thoracic plane (sternal angle to T4/T5)', 'Diaphragm', 'Aortic arch'],
    correctAnswer: 1,
    explanation: 'The transverse thoracic plane, passing through the sternal angle (of Louis) anteriorly and the T4/T5 intervertebral disc posteriorly, divides the mediastinum into superior and inferior parts.'
  },
  {
    id: 'mediastinum-comp-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the subdivisions of the inferior mediastinum?',
    options: ['Left and right', 'Upper and lower', 'Anterior, middle, and posterior', 'Superficial and deep'],
    correctAnswer: 2,
    explanation: 'The inferior mediastinum is divided into anterior (between sternum and pericardium), middle (containing heart and pericardium), and posterior (between pericardium and vertebrae).'
  },
  {
    id: 'mediastinum-comp-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What structure defines the boundary between middle and posterior mediastinum?',
    options: ['Sternum', 'Anterior surface of pericardium', 'Posterior surface of pericardium', 'Vertebral bodies'],
    correctAnswer: 2,
    explanation: 'The posterior surface of the pericardium (fibrous pericardium) forms the boundary between the middle mediastinum (containing heart) and posterior mediastinum.'
  },
  {
    id: 'mediastinum-comp-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What major structures are found in the superior mediastinum?',
    options: ['Heart only', 'Aortic arch, SVC, trachea, esophagus, thymus, thoracic duct', 'Lungs', 'Diaphragm'],
    correctAnswer: 1,
    explanation: 'The superior mediastinum contains the aortic arch and great vessels, SVC, trachea, esophagus, thoracic duct, vagus and phrenic nerves, and thymus remnants.'
  },
  {
    id: 'mediastinum-comp-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of the sternal angle?',
    options: ['No clinical significance', 'Landmark for mediastinal division, T4/T5 level, aortic arch, tracheal bifurcation', 'Only important for CPR', 'Marks the apex of the heart'],
    correctAnswer: 1,
    explanation: 'The sternal angle is a crucial landmark: level of T4/T5, aortic arch beginning/end, tracheal bifurcation, azygos vein arch, superior limit of pericardium, and second costal cartilage attachment.'
  },
  {
    id: 'mediastinum-comp-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the lateral boundary of the mediastinum?',
    options: ['Ribs', 'Mediastinal (parietal) pleura', 'Lungs', 'Diaphragm'],
    correctAnswer: 1,
    explanation: 'The mediastinum is bounded laterally by the mediastinal parietal pleura on each side, which separates it from the pleural cavities containing the lungs.'
  },
  {
    id: 'mediastinum-comp-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What type of tumors commonly occur in the anterior mediastinum?',
    options: ['Neurogenic tumors', 'Thymoma, teratoma, thyroid masses, lymphoma (4 Ts)', 'Bronchogenic cysts', 'Esophageal tumors'],
    correctAnswer: 1,
    explanation: 'The anterior mediastinum is the site of the "4 Ts": Thymoma, Teratoma (germ cell tumors), Thyroid masses (retrosternal goiter), and terrible lymphoma (Hodgkin/non-Hodgkin).'
  },
  {
    id: 'mediastinum-comp-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What type of tumors are most common in the posterior mediastinum?',
    options: ['Thymic tumors', 'Cardiac tumors', 'Neurogenic tumors (schwannoma, neurofibroma)', 'Lymphomas'],
    correctAnswer: 2,
    explanation: 'Neurogenic tumors (schwannomas, neurofibromas, neuroblastomas) are most common in the posterior mediastinum because of the sympathetic chain and intercostal nerves located there.'
  }
];

// 3. Anterior Mediastinum
export const anteriorMediastinumQuestions: Question[] = [
  {
    id: 'ant-mediastinum-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the boundaries of the anterior mediastinum?',
    options: ['Between sternum and trachea', 'Between sternum/costal cartilages and pericardium', 'Between pericardium and vertebrae', 'Between diaphragm and thoracic inlet'],
    correctAnswer: 1,
    explanation: 'The anterior mediastinum lies between the posterior surface of the sternum and costal cartilages anteriorly and the anterior surface of the pericardium posteriorly.'
  },
  {
    id: 'ant-mediastinum-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the main content of the anterior mediastinum in adults?',
    options: ['Heart', 'Thymus remnants, fat, lymph nodes, and internal thoracic vessels', 'Esophagus', 'Aorta'],
    correctAnswer: 1,
    explanation: 'In adults, the anterior mediastinum contains thymus remnants (fatty tissue), fat, lymph nodes, sternopericardial ligaments, and branches of internal thoracic vessels.'
  },
  {
    id: 'ant-mediastinum-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the thymus and its significance in the anterior mediastinum?',
    options: ['A permanent gland active throughout life', 'A lymphoid organ most active in childhood, involutes in adults', 'Part of the thyroid gland', 'A cardiac structure'],
    correctAnswer: 1,
    explanation: 'The thymus is a primary lymphoid organ essential for T-cell maturation. It is most prominent in childhood and undergoes fatty involution after puberty, leaving remnants in the anterior mediastinum.'
  },
  {
    id: 'ant-mediastinum-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What vessels pass through the anterior mediastinum?',
    options: ['Aorta and pulmonary trunk', 'Branches of internal thoracic vessels', 'Azygos vein', 'Superior vena cava'],
    correctAnswer: 1,
    explanation: 'Branches of the internal thoracic (internal mammary) vessels, including perforating branches and anterior intercostal arteries, pass through the anterior mediastinum.'
  },
  {
    id: 'ant-mediastinum-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is a thymoma and its clinical significance?',
    options: ['Always benign thyroid tumor', 'Tumor of thymic epithelium, associated with myasthenia gravis', 'Cardiac tumor', 'Lymph node metastasis'],
    correctAnswer: 1,
    explanation: 'Thymoma is a tumor of thymic epithelial cells. About 30-50% of patients with thymoma develop myasthenia gravis, and 10-15% of myasthenia gravis patients have thymoma.'
  },
  {
    id: 'ant-mediastinum-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What lymph nodes are found in the anterior mediastinum?',
    options: ['Tracheobronchial nodes', 'Parasternal (internal thoracic) lymph nodes', 'Posterior mediastinal nodes', 'Hilar nodes'],
    correctAnswer: 1,
    explanation: 'The anterior mediastinum contains parasternal (internal thoracic) lymph nodes along the internal thoracic vessels. These drain the anterior thoracic wall and medial breast.'
  },
  {
    id: 'ant-mediastinum-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical approach for anterior mediastinal masses?',
    options: ['Always observation', 'CT-guided biopsy or mediastinoscopy, surgical resection if indicated', 'Immediate radiation', 'Antibiotics only'],
    correctAnswer: 1,
    explanation: 'Anterior mediastinal masses require CT imaging for characterization, often CT-guided biopsy or anterior mediastinotomy (Chamberlain procedure) for diagnosis, and surgical resection for thymomas and teratomas.'
  },
  {
    id: 'ant-mediastinum-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What attaches the pericardium to the sternum?',
    options: ['Endothoracic fascia', 'Sternopericardial ligaments', 'Pleura', 'Diaphragm'],
    correctAnswer: 1,
    explanation: 'The sternopericardial ligaments are fibrous bands that attach the fibrous pericardium to the posterior surface of the sternum, helping to anchor the heart in the mediastinum.'
  }
];

// 4. Posterior Mediastinum
export const posteriorMediastinumQuestions: Question[] = [
  {
    id: 'post-mediastinum-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the boundaries of the posterior mediastinum?',
    options: ['Between sternum and pericardium', 'Between pericardium posteriorly and vertebral column/posterior chest wall', 'Between lungs', 'Above the sternal angle only'],
    correctAnswer: 1,
    explanation: 'The posterior mediastinum lies between the posterior surface of the pericardium anteriorly and the vertebral column/posterior thoracic wall posteriorly, from T4/T5 to the diaphragm.'
  },
  {
    id: 'post-mediastinum-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the main contents of the posterior mediastinum?',
    options: ['Heart and great vessels', 'Esophagus, descending aorta, azygos veins, thoracic duct, sympathetic trunks', 'Thymus', 'Trachea only'],
    correctAnswer: 1,
    explanation: 'The posterior mediastinum contains the esophagus, descending thoracic aorta, azygos and hemiazygos veins, thoracic duct, sympathetic trunks, splanchnic nerves, and vagus nerves.'
  },
  {
    id: 'post-mediastinum-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the esophagus to the descending aorta in the posterior mediastinum?',
    options: ['Esophagus is always anterior to aorta', 'Esophagus is lateral to aorta superiorly, anterior to aorta inferiorly', 'Esophagus is always posterior to aorta', 'No relationship'],
    correctAnswer: 1,
    explanation: 'The esophagus lies to the right of and anterior to the descending aorta superiorly, but spirals to lie anterior to the aorta inferiorly as both structures approach the diaphragm.'
  },
  {
    id: 'post-mediastinum-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the thoracic duct lie in the posterior mediastinum?',
    options: ['Anterior to esophagus', 'Between esophagus and azygos vein/aorta', 'Lateral to lungs', 'Within the pericardium'],
    correctAnswer: 1,
    explanation: 'The thoracic duct ascends in the posterior mediastinum between the esophagus anteriorly and the azygos vein and aorta posteriorly, eventually crossing to the left at T4-T6.'
  },
  {
    id: 'post-mediastinum-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What nerves are found along the vertebral column in the posterior mediastinum?',
    options: ['Phrenic nerves', 'Vagus nerves only', 'Sympathetic trunks and splanchnic nerves', 'Recurrent laryngeal nerves'],
    correctAnswer: 2,
    explanation: 'The sympathetic trunks run along the heads of the ribs in the posterior mediastinum, giving rise to the greater, lesser, and least splanchnic nerves that pass through the crura to the abdomen.'
  },
  {
    id: 'post-mediastinum-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the azygos venous system?',
    options: ['Arterial system', 'Venous drainage of posterior thoracic wall connecting IVC and SVC', 'Lymphatic system', 'Part of pulmonary circulation'],
    correctAnswer: 1,
    explanation: 'The azygos venous system (azygos, hemiazygos, accessory hemiazygos veins) drains the posterior thoracic wall and provides an important anastomosis between the SVC and IVC systems.'
  },
  {
    id: 'post-mediastinum-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'At what vertebral level does the azygos vein arch over the right main bronchus to join the SVC?',
    options: ['T2', 'T4', 'T6', 'T8'],
    correctAnswer: 1,
    explanation: 'The azygos vein arches over the root of the right lung at the T4 level (at the sternal angle) to drain into the posterior aspect of the superior vena cava.'
  },
  {
    id: 'post-mediastinum-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What type of tumors arise from the sympathetic chain in the posterior mediastinum?',
    options: ['Thymomas', 'Neurogenic tumors (schwannoma, ganglioneuroma, neuroblastoma)', 'Lymphomas', 'Teratomas'],
    correctAnswer: 1,
    explanation: 'Neurogenic tumors are the most common posterior mediastinal masses. They arise from sympathetic ganglia (ganglioneuroma, neuroblastoma) or nerve sheaths (schwannoma, neurofibroma).'
  }
];

// 5. Thoracic Esophagus
export const thoracicEsophagusQuestions: Question[] = [
  {
    id: 'thoracic-esoph-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At what vertebral level does the esophagus begin?',
    options: ['C4', 'C6', 'T1', 'T4'],
    correctAnswer: 1,
    explanation: 'The esophagus begins at the level of the cricoid cartilage, corresponding to the C6 vertebral level, as a continuation of the pharynx.'
  },
  {
    id: 'thoracic-esoph-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the three anatomical constrictions of the esophagus?',
    options: ['Pharyngeal, bronchial, cardiac', 'Cricoid (C6), aortic/bronchial (T4), diaphragmatic (T10)', 'Superior, middle, inferior thirds', 'Cervical, thoracic, abdominal'],
    correctAnswer: 1,
    explanation: 'The esophagus has three constrictions: at the cricoid cartilage (C6, 15cm from incisors), where crossed by aortic arch/left bronchus (T4, 25cm), and at the diaphragm (T10, 40cm).'
  },
  {
    id: 'thoracic-esoph-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the thoracic esophagus to the left atrium?',
    options: ['No relationship', 'Esophagus lies posterior to left atrium', 'Esophagus lies anterior to left atrium', 'Esophagus is lateral to left atrium'],
    correctAnswer: 1,
    explanation: 'The esophagus lies immediately posterior to the left atrium. This relationship allows transesophageal echocardiography and explains dysphagia in severe left atrial enlargement.'
  },
  {
    id: 'thoracic-esoph-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Through which diaphragmatic opening does the esophagus pass?',
    options: ['Aortic hiatus at T12', 'Caval opening at T8', 'Esophageal hiatus at T10', 'Sternocostal triangle'],
    correctAnswer: 2,
    explanation: 'The esophagus passes through the esophageal hiatus in the muscular part of the right crus of the diaphragm at the T10 vertebral level.'
  },
  {
    id: 'thoracic-esoph-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What structures accompany the esophagus through the esophageal hiatus?',
    options: ['Aorta and thoracic duct', 'Anterior and posterior vagal trunks and esophageal branches of left gastric vessels', 'Phrenic nerves', 'Azygos vein'],
    correctAnswer: 1,
    explanation: 'The esophagus is accompanied through the esophageal hiatus by the anterior and posterior vagal trunks and esophageal branches of the left gastric artery and vein.'
  },
  {
    id: 'thoracic-esoph-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the arterial blood supply of the thoracic esophagus?',
    options: ['Coronary arteries', 'Esophageal branches from aorta, bronchial arteries, inferior thyroid artery', 'Internal thoracic artery only', 'Celiac trunk only'],
    correctAnswer: 1,
    explanation: 'The thoracic esophagus receives blood from esophageal branches of the thoracic aorta, bronchial arteries, and contributions from the inferior thyroid artery superiorly and left gastric artery inferiorly.'
  },
  {
    id: 'thoracic-esoph-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of the esophageal venous plexus?',
    options: ['No clinical significance', 'Site of porto-systemic anastomosis; varices in portal hypertension', 'Drains directly to heart', 'Part of pulmonary circulation'],
    correctAnswer: 1,
    explanation: 'The esophageal venous plexus connects the portal venous system (left gastric vein) with the systemic system (azygos veins). In portal hypertension, this causes esophageal varices that may hemorrhage.'
  },
  {
    id: 'thoracic-esoph-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the innervation of the thoracic esophagus?',
    options: ['Phrenic nerves only', 'Esophageal plexus from vagus nerves and sympathetic trunks', 'Intercostal nerves', 'Splanchnic nerves only'],
    correctAnswer: 1,
    explanation: 'The thoracic esophagus is innervated by the esophageal plexus, formed by vagal branches (parasympathetic for motility and secretion) and sympathetic fibers (vasomotor and sensory).'
  },
  {
    id: 'thoracic-esoph-9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What type of muscle is found in different parts of the esophagus?',
    options: ['All smooth muscle', 'All skeletal muscle', 'Upper third skeletal, middle mixed, lower third smooth', 'Cardiac muscle'],
    correctAnswer: 2,
    explanation: 'The esophageal musculature transitions from skeletal muscle in the upper third, to mixed skeletal and smooth muscle in the middle third, to predominantly smooth muscle in the lower third.'
  },
  {
    id: 'thoracic-esoph-10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the clinical significance of the cricopharyngeal constriction?',
    options: ['No significance', 'Narrowest point; common site of foreign body impaction and perforation during instrumentation', 'Site of lower esophageal sphincter', 'Location of varices'],
    correctAnswer: 1,
    explanation: 'The cricopharyngeal constriction (upper esophageal sphincter at C6) is the narrowest point of the esophagus and the most common site of foreign body impaction and iatrogenic perforation during endoscopy.'
  }
];

// Combine all mediastinum questions for easy import
export const mediastinumQuestions: Question[] = [
  ...thoracicCavityCompartmentsQuestions,
  ...mediastinumCompartmentsQuestions,
  ...anteriorMediastinumQuestions,
  ...posteriorMediastinumQuestions,
  ...thoracicEsophagusQuestions
];
