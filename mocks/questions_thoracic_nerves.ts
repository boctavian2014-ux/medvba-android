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

// 1. Phrenic Nerves
export const phrenicNervesQuestions: Question[] = [
  {
    id: 'phrenic-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the spinal nerve roots that form the phrenic nerve?',
    options: ['C2, C3, C4', 'C3, C4, C5', 'C4, C5, C6', 'C5, C6, C7'],
    correctAnswer: 1,
    explanation: 'The phrenic nerve is formed by contributions from C3, C4, and C5 spinal nerve roots, with C4 being the primary contributor. The classic mnemonic is "C3, 4, 5 keeps the diaphragm alive."'
  },
  {
    id: 'phrenic-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'On which muscle does the phrenic nerve descend in the neck?',
    options: ['Sternocleidomastoid', 'Anterior scalene', 'Middle scalene', 'Posterior scalene'],
    correctAnswer: 1,
    explanation: 'The phrenic nerve descends on the anterior surface of the anterior scalene muscle, deep to the prevertebral fascia, before entering the thorax.'
  },
  {
    id: 'phrenic-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What structure does the right phrenic nerve pass anterior to at the root of the lung?',
    options: ['Pulmonary artery', 'Pulmonary vein', 'Main bronchus', 'Azygos vein arch'],
    correctAnswer: 0,
    explanation: 'The right phrenic nerve passes anterior to the root of the right lung, specifically anterior to the pulmonary artery and pulmonary veins, running lateral to the pericardium.'
  },
  {
    id: 'phrenic-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Through which opening does the phrenic nerve accompany the inferior vena cava?',
    options: ['Aortic hiatus', 'Esophageal hiatus', 'Caval opening', 'Sternocostal triangle'],
    correctAnswer: 2,
    explanation: 'The right phrenic nerve passes through or near the caval opening (at T8 level) along with the inferior vena cava. The left phrenic nerve pierces the diaphragm separately.'
  },
  {
    id: 'phrenic-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the sensory distribution of the phrenic nerve besides the diaphragm?',
    options: ['Pleura only', 'Pericardium only', 'Peritoneum only', 'Pericardium, mediastinal pleura, and peritoneum'],
    correctAnswer: 3,
    explanation: 'The phrenic nerve provides sensory innervation to the pericardium, mediastinal pleura, and the peritoneum covering the central part of the diaphragm (both surfaces).'
  },
  {
    id: 'phrenic-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does referred pain from diaphragmatic irritation typically manifest?',
    options: ['Lower back', 'Shoulder tip (C3-C5 dermatomes)', 'Chest wall', 'Epigastrium'],
    correctAnswer: 1,
    explanation: 'Diaphragmatic irritation causes referred pain to the shoulder tip because the phrenic nerve (C3-C5) shares spinal cord segments with the supraclavicular nerves that supply the shoulder region.'
  },
  {
    id: 'phrenic-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the left phrenic nerve to the heart?',
    options: ['Passes posterior to heart', 'Crosses anterior to aortic arch', 'Passes lateral to left ventricle over pericardium', 'Travels within pericardial cavity'],
    correctAnswer: 2,
    explanation: 'The left phrenic nerve descends over the pericardium covering the left ventricle, passing between the pericardium and mediastinal pleura. It crosses superficial to the aortic arch.'
  },
  {
    id: 'phrenic-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What artery accompanies the phrenic nerve in the thorax?',
    options: ['Superior phrenic artery', 'Pericardiacophrenic artery', 'Musculophrenic artery', 'Inferior phrenic artery'],
    correctAnswer: 1,
    explanation: 'The pericardiacophrenic artery (branch of internal thoracic artery) accompanies the phrenic nerve between the pericardium and pleura throughout its thoracic course.'
  },
  {
    id: 'phrenic-9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which accessory phrenic nerve variant is most common?',
    options: ['From C6 via subclavian nerve', 'From C5 via nerve to subclavius', 'From C3 via ansa cervicalis', 'From C4 via brachial plexus'],
    correctAnswer: 1,
    explanation: 'The most common accessory phrenic nerve arises from C5 and travels via the nerve to subclavius before joining the main phrenic nerve. It is present in about 30% of individuals.'
  },
  {
    id: 'phrenic-10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What happens to ventilation with unilateral phrenic nerve paralysis?',
    options: ['Complete respiratory failure', 'Paradoxical movement of affected hemidiaphragm', 'No clinical effect', 'Hyperventilation'],
    correctAnswer: 1,
    explanation: 'Unilateral phrenic nerve paralysis causes paradoxical movement of the affected hemidiaphragm (moves up during inspiration). Patients compensate with accessory muscles and intercostals.'
  }
];

// 2. Vagus Nerves in Thorax
export const vagusNervesThoraxQuestions: Question[] = [
  {
    id: 'vagus-thorax-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the right vagus nerve give off the right recurrent laryngeal nerve?',
    options: ['At the jugular foramen', 'Around the subclavian artery', 'At the aortic arch', 'At the pulmonary hilum'],
    correctAnswer: 1,
    explanation: 'The right recurrent laryngeal nerve branches from the right vagus as it crosses anterior to the subclavian artery, then loops around the artery to ascend in the tracheoesophageal groove.'
  },
  {
    id: 'vagus-thorax-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the left recurrent laryngeal nerve originate?',
    options: ['Around the subclavian artery', 'Around the aortic arch', 'At the pulmonary hilum', 'At the tracheal bifurcation'],
    correctAnswer: 1,
    explanation: 'The left recurrent laryngeal nerve loops around the aortic arch (specifically the ligamentum arteriosum) before ascending in the tracheoesophageal groove to the larynx.'
  },
  {
    id: 'vagus-thorax-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the position of the right vagus nerve relative to the trachea in the superior mediastinum?',
    options: ['Anterior to trachea', 'Posterior and lateral to trachea', 'Within tracheal wall', 'Medial to trachea'],
    correctAnswer: 1,
    explanation: 'The right vagus nerve descends posterior and lateral to the trachea, between the trachea and the brachiocephalic artery, then passes posterior to the right main bronchus.'
  },
  {
    id: 'vagus-thorax-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What structure does the left vagus nerve cross anterior to in the thorax?',
    options: ['Superior vena cava', 'Aortic arch', 'Pulmonary trunk', 'Left atrium'],
    correctAnswer: 1,
    explanation: 'The left vagus nerve crosses the aortic arch anteriorly (between the left common carotid and subclavian arteries) before descending posterior to the left main bronchus.'
  },
  {
    id: 'vagus-thorax-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What forms the esophageal plexus?',
    options: ['Phrenic nerves', 'Sympathetic trunks only', 'Vagus nerves (anterior and posterior trunks)', 'Splanchnic nerves'],
    correctAnswer: 2,
    explanation: 'The esophageal plexus is formed by branches from both vagus nerves that intermingle around the esophagus. Below the plexus, they reconstitute as anterior and posterior vagal trunks.'
  },
  {
    id: 'vagus-thorax-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which vagus nerve primarily forms the anterior vagal trunk?',
    options: ['Right vagus', 'Left vagus', 'Equal contribution', 'Neither - it is from splanchnic nerves'],
    correctAnswer: 1,
    explanation: 'The anterior vagal trunk is derived primarily from the left vagus nerve due to the rotation of the gut during development, which brings the left vagus anteriorly.'
  },
  {
    id: 'vagus-thorax-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What cardiac branches does the vagus nerve give off in the thorax?',
    options: ['Only superior cardiac branches', 'Only inferior cardiac branches', 'Both superior and inferior cardiac branches', 'No cardiac branches in thorax'],
    correctAnswer: 2,
    explanation: 'The thoracic vagus gives off inferior (thoracic) cardiac branches that join the cardiac plexus. Superior cardiac branches arise in the neck.'
  },
  {
    id: 'vagus-thorax-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What pulmonary branches does the vagus provide?',
    options: ['None - lungs are purely sympathetic', 'Anterior pulmonary plexus only', 'Posterior pulmonary plexus only', 'Both anterior and posterior pulmonary plexuses'],
    correctAnswer: 3,
    explanation: 'The vagus contributes to both anterior and posterior pulmonary plexuses at the lung roots, providing parasympathetic innervation for bronchoconstriction and increased secretion.'
  },
  {
    id: 'vagus-thorax-9',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Through which diaphragmatic opening do the vagal trunks pass?',
    options: ['Caval opening', 'Aortic hiatus', 'Esophageal hiatus', 'Sternocostal triangle'],
    correctAnswer: 2,
    explanation: 'The anterior and posterior vagal trunks pass through the esophageal hiatus (at T10 level) along with the esophagus and esophageal branches of the left gastric vessels.'
  },
  {
    id: 'vagus-thorax-10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why is the left recurrent laryngeal nerve more vulnerable during thoracic surgery?',
    options: ['It is smaller', 'It has a longer intrathoracic course around the aortic arch', 'It is more superficial', 'It has no protective fascia'],
    correctAnswer: 1,
    explanation: 'The left recurrent laryngeal nerve has a longer intrathoracic course, looping around the aortic arch and ascending in the aortopulmonary window, making it vulnerable during aortic, cardiac, and thoracic surgeries.'
  }
];

// 3. Thoracic Sympathetic Chain and Splanchnic Nerves
export const thoracicSympatheticChainQuestions: Question[] = [
  {
    id: 'symp-chain-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the thoracic sympathetic trunk located?',
    options: ['Anterior to vertebral bodies', 'Over the heads of the ribs', 'Within the spinal canal', 'In the posterior mediastinum lateral to esophagus'],
    correctAnswer: 1,
    explanation: 'The thoracic sympathetic trunk lies over the heads of the ribs (costovertebral joints), covered by parietal pleura. It descends through the posterior mediastinum.'
  },
  {
    id: 'symp-chain-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How many ganglia are typically in the thoracic sympathetic chain?',
    options: ['8-10', '10-12', '11-12', '12-14'],
    correctAnswer: 2,
    explanation: 'There are typically 11-12 thoracic sympathetic ganglia, though the first thoracic ganglion often fuses with the inferior cervical ganglion to form the stellate (cervicothoracic) ganglion.'
  },
  {
    id: 'symp-chain-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'From which thoracic ganglia does the greater splanchnic nerve arise?',
    options: ['T1-T4', 'T5-T9 (or T10)', 'T10-T11', 'T11-T12'],
    correctAnswer: 1,
    explanation: 'The greater splanchnic nerve arises from the T5-T9 (sometimes T10) sympathetic ganglia. It carries preganglionic sympathetic fibers to the celiac ganglion.'
  },
  {
    id: 'symp-chain-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'From which ganglia does the lesser splanchnic nerve originate?',
    options: ['T5-T9', 'T10-T11', 'T12 only', 'L1-L2'],
    correctAnswer: 1,
    explanation: 'The lesser splanchnic nerve arises from the T10-T11 sympathetic ganglia and typically ends in the aorticorenal ganglion.'
  },
  {
    id: 'symp-chain-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the origin of the least splanchnic nerve?',
    options: ['T10', 'T11', 'T12', 'L1'],
    correctAnswer: 2,
    explanation: 'The least (lowest) splanchnic nerve arises from the T12 ganglion and ends in the renal plexus. It may be absent in some individuals.'
  },
  {
    id: 'symp-chain-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What type of fibers are carried in the splanchnic nerves?',
    options: ['Postganglionic sympathetic only', 'Preganglionic sympathetic (primarily)', 'Parasympathetic only', 'Somatic motor'],
    correctAnswer: 1,
    explanation: 'The splanchnic nerves carry primarily preganglionic sympathetic fibers that synapse in the prevertebral ganglia (celiac, aorticorenal, superior/inferior mesenteric).'
  },
  {
    id: 'symp-chain-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Through which diaphragmatic structure do the splanchnic nerves pass?',
    options: ['Aortic hiatus', 'Esophageal hiatus', 'Crura of diaphragm', 'Caval opening'],
    correctAnswer: 2,
    explanation: 'The splanchnic nerves pierce the crura of the diaphragm to enter the abdomen. The greater splanchnic typically pierces the crus at T10-T11 level.'
  },
  {
    id: 'symp-chain-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What connects the sympathetic trunk ganglia to the spinal nerves?',
    options: ['Gray rami only', 'White rami only', 'Both white and gray rami communicantes', 'Splanchnic nerves'],
    correctAnswer: 2,
    explanation: 'White rami (preganglionic, myelinated) connect spinal nerves T1-L2 to the sympathetic trunk. Gray rami (postganglionic, unmyelinated) return to all spinal nerves for distribution.'
  },
  {
    id: 'symp-chain-9',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the stellate ganglion?',
    options: ['First thoracic ganglion alone', 'Fusion of inferior cervical and first thoracic ganglia', 'Last thoracic ganglion', 'Celiac ganglion'],
    correctAnswer: 1,
    explanation: 'The stellate (cervicothoracic) ganglion is formed by fusion of the inferior cervical ganglion with the first thoracic ganglion. It lies anterior to the neck of the first rib.'
  },
  {
    id: 'symp-chain-10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What clinical effect occurs with stellate ganglion damage?',
    options: ['Bradycardia', 'Horner syndrome', 'Respiratory failure', 'Dysphagia'],
    correctAnswer: 1,
    explanation: 'Stellate ganglion damage causes Horner syndrome: miosis (pupil constriction), ptosis (eyelid drooping), anhidrosis (absent sweating) on the ipsilateral face, and apparent enophthalmos.'
  },
  {
    id: 'symp-chain-11',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which thoracic ganglia contribute to the cardiac plexus?',
    options: ['T1-T4 (T5)', 'T5-T9', 'T10-T12', 'All thoracic ganglia'],
    correctAnswer: 0,
    explanation: 'The upper thoracic ganglia (T1-T4 or T5) send cardiac accelerator fibers to the cardiac plexus for sympathetic innervation of the heart.'
  },
  {
    id: 'symp-chain-12',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What visceral afferent fibers travel with the sympathetic nerves?',
    options: ['Touch and proprioception', 'Pain and reflex afferents from thoracic and abdominal viscera', 'Temperature only', 'No afferents travel with sympathetics'],
    correctAnswer: 1,
    explanation: 'Visceral afferent fibers (primarily pain) from thoracic and abdominal organs travel with sympathetic nerves. This explains referred pain patterns in visceral disease.'
  }
];

// 4. Celiac Plexus
export const celiacPlexusQuestions: Question[] = [
  {
    id: 'celiac-plexus-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the celiac plexus located?',
    options: ['Around the inferior mesenteric artery', 'Around the celiac trunk at T12-L1', 'In the pelvis', 'Around the renal arteries'],
    correctAnswer: 1,
    explanation: 'The celiac plexus surrounds the celiac trunk and its origin from the aorta at the T12-L1 vertebral level, just below the aortic hiatus of the diaphragm.'
  },
  {
    id: 'celiac-plexus-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the main components of the celiac plexus?',
    options: ['Vagus nerves only', 'Sympathetic nerves only', 'Celiac ganglia, sympathetic and parasympathetic fibers', 'Phrenic nerves'],
    correctAnswer: 2,
    explanation: 'The celiac plexus consists of the paired celiac ganglia (largest prevertebral ganglia), sympathetic fibers from greater splanchnic nerves, and parasympathetic fibers from the posterior vagal trunk.'
  },
  {
    id: 'celiac-plexus-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What organs receive innervation from the celiac plexus?',
    options: ['Heart and lungs', 'Liver, stomach, spleen, pancreas, kidneys, suprarenal glands, small intestine', 'Sigmoid colon and rectum only', 'Bladder and reproductive organs'],
    correctAnswer: 1,
    explanation: 'The celiac plexus innervates foregut and midgut derivatives: liver, gallbladder, stomach, spleen, pancreas, duodenum, kidneys, suprarenal glands, and small intestine.'
  },
  {
    id: 'celiac-plexus-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which nerve is the main source of preganglionic sympathetic fibers to the celiac ganglia?',
    options: ['Lesser splanchnic', 'Least splanchnic', 'Greater splanchnic', 'Lumbar splanchnic'],
    correctAnswer: 2,
    explanation: 'The greater splanchnic nerve (T5-T9) is the main source of preganglionic sympathetic fibers to the celiac ganglia, where they synapse before distributing to target organs.'
  },
  {
    id: 'celiac-plexus-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical indication for celiac plexus block?',
    options: ['Cardiac pain', 'Intractable upper abdominal/pancreatic cancer pain', 'Lower limb ischemia', 'Headache'],
    correctAnswer: 1,
    explanation: 'Celiac plexus block is performed to relieve intractable pain from upper abdominal malignancies, especially pancreatic cancer, by interrupting visceral afferent pain pathways.'
  },
  {
    id: 'celiac-plexus-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What plexuses extend from the celiac plexus?',
    options: ['Cardiac plexus only', 'Hepatic, splenic, gastric, renal, and suprarenal plexuses', 'Hypogastric plexus only', 'Pulmonary plexuses'],
    correctAnswer: 1,
    explanation: 'Secondary plexuses extending from the celiac plexus include hepatic, splenic, left gastric, phrenic, suprarenal, renal, testicular/ovarian, and superior mesenteric plexuses.'
  },
  {
    id: 'celiac-plexus-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the celiac ganglia to the suprarenal glands?',
    options: ['No relationship', 'Celiac ganglia lie superior to suprarenal glands', 'Celiac ganglia lie at the level of suprarenal glands, anterolateral to aorta', 'Celiac ganglia are within suprarenal glands'],
    correctAnswer: 2,
    explanation: 'The celiac ganglia lie at approximately the same level as the suprarenal glands (T12-L1), anterolateral to the aorta, connected by the suprarenal plexus.'
  },
  {
    id: 'celiac-plexus-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the aorticorenal ganglion?',
    options: ['Part of lumbar sympathetic chain', 'A ganglion receiving lesser splanchnic nerve, near renal artery origin', 'A ganglion in the pelvis', 'A parasympathetic ganglion'],
    correctAnswer: 1,
    explanation: 'The aorticorenal ganglion is located near the origin of the renal artery and receives fibers from the lesser splanchnic nerve. It contributes to the renal and suprarenal plexuses.'
  },
  {
    id: 'celiac-plexus-9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'How do parasympathetic fibers reach the celiac plexus?',
    options: ['Via pelvic splanchnic nerves', 'Via the posterior vagal trunk (right vagus primarily)', 'Via the phrenic nerves', 'Parasympathetic fibers do not reach celiac plexus'],
    correctAnswer: 1,
    explanation: 'Parasympathetic fibers reach the celiac plexus via the posterior vagal trunk (primarily from right vagus). These fibers pass through the ganglia without synapsing to reach target organs.'
  },
  {
    id: 'celiac-plexus-10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What effect does sympathetic stimulation via the celiac plexus have on the GI tract?',
    options: ['Increases motility and secretion', 'Decreases motility and secretion, vasoconstriction', 'No effect on GI tract', 'Causes diarrhea'],
    correctAnswer: 1,
    explanation: 'Sympathetic stimulation via the celiac plexus decreases GI motility and secretion, causes vasoconstriction of splanchnic vessels, and inhibits peristalsis ("fight or flight" response).'
  }
];

// Combine all thoracic nerves questions for easy import
export const thoracicNervesQuestions: Question[] = [
  ...phrenicNervesQuestions,
  ...vagusNervesThoraxQuestions,
  ...thoracicSympatheticChainQuestions,
  ...celiacPlexusQuestions
];
