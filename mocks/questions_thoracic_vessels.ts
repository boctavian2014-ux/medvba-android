import type { Question } from './questions';

// ============================================================================
// THORACIC VESSELS QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Aorta ascendentă (ascendingAortaQuestions)
// 2. Arcul aortic (aorticArchQuestions)
// 3. Aorta descendentă toracică (descendingThoracicAortaQuestions)
// 4. Vasele toracice interne (internalThoracicVesselsQuestions)
// 5. Trunchiurile venoase brahiocefalice și vena cavă superioară (brachiocephalicVeinsSVCQuestions)
// 6. Vena cavă inferioară (inferiorVenaCavaQuestions)
// 7. Venele azigos (azygosVeinsQuestions)
// 8. Ductul toracic (thoracicDuctQuestions)
// ============================================================================

// 1. Ascending Aorta
export const ascendingAortaQuestions: Question[] = [
  {
    id: 'asc-aorta-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the ascending aorta originate?',
    options: ['Left ventricle at the aortic valve', 'Right ventricle', 'Left atrium', 'Aortic arch'],
    correctAnswer: 0,
    explanation: 'The ascending aorta originates from the left ventricle at the aortic valve (aortic orifice), beginning at the aortic root which includes the aortic sinuses.'
  },
  {
    id: 'asc-aorta-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the only branches of the ascending aorta?',
    options: ['Brachiocephalic trunk', 'Common carotid arteries', 'Right and left coronary arteries', 'Subclavian arteries'],
    correctAnswer: 2,
    explanation: 'The only branches of the ascending aorta are the right and left coronary arteries, which arise from the aortic sinuses (of Valsalva) just above the aortic valve.'
  },
  {
    id: 'asc-aorta-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the aortic root and what does it contain?',
    options: ['The aortic arch', 'The aortic sinuses, aortic valve, and coronary ostia', 'The descending aorta origin', 'The pulmonary trunk connection'],
    correctAnswer: 1,
    explanation: 'The aortic root includes the aortic valve annulus, the three aortic sinuses (of Valsalva), the coronary artery ostia, and the sinotubular junction where the ascending aorta begins.'
  },
  {
    id: 'asc-aorta-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What structure lies anterior to the ascending aorta?',
    options: ['Esophagus', 'Pulmonary trunk and right auricle', 'Left atrium', 'Trachea'],
    correctAnswer: 1,
    explanation: 'The pulmonary trunk lies anterior and to the left of the ascending aorta. The right auricle (atrial appendage) lies anterior to the ascending aorta.'
  },
  {
    id: 'asc-aorta-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'At what vertebral level does the ascending aorta transition to the aortic arch?',
    options: ['T2', 'At the level of the sternal angle (T4)', 'T6', 'T8'],
    correctAnswer: 1,
    explanation: 'The ascending aorta becomes the aortic arch at approximately the level of the sternal angle, corresponding to the T4 vertebral level.'
  },
  {
    id: 'asc-aorta-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the length of the ascending aorta?',
    options: ['2-3 cm', 'About 5 cm', 'About 10 cm', '15 cm'],
    correctAnswer: 1,
    explanation: 'The ascending aorta is approximately 5 cm in length, extending from the aortic valve to the origin of the brachiocephalic trunk where the arch begins.'
  },
  {
    id: 'asc-aorta-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of aortic root dilation?',
    options: ['No clinical significance', 'Risk of aortic dissection and aortic regurgitation', 'Causes pulmonary hypertension', 'Leads to mitral stenosis'],
    correctAnswer: 1,
    explanation: 'Aortic root dilation (>4 cm) increases risk of aortic dissection and can cause aortic regurgitation by preventing valve coaptation. Common in Marfan syndrome and bicuspid aortic valve.'
  },
  {
    id: 'asc-aorta-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What encloses the ascending aorta and pulmonary trunk together?',
    options: ['Pleura', 'Serous pericardium (visceral layer)', 'Fibrous pericardium only', 'Endothoracic fascia'],
    correctAnswer: 1,
    explanation: 'The ascending aorta and pulmonary trunk are enclosed together within a common sheath of serous pericardium (visceral layer), making them intrapericardial vessels.'
  }
];

// 2. Aortic Arch
export const aorticArchQuestions: Question[] = [
  {
    id: 'aortic-arch-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the three branches of the aortic arch (from right to left)?',
    options: ['Right and left common carotid, right subclavian', 'Brachiocephalic trunk, left common carotid, left subclavian', 'Both subclavians, both common carotids', 'Coronary arteries and brachiocephalic'],
    correctAnswer: 1,
    explanation: 'The three branches of the aortic arch from right to left are: brachiocephalic trunk (innominate artery), left common carotid artery, and left subclavian artery.'
  },
  {
    id: 'aortic-arch-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What structure loops around the aortic arch?',
    options: ['Right recurrent laryngeal nerve', 'Left recurrent laryngeal nerve', 'Phrenic nerve', 'Thoracic duct'],
    correctAnswer: 1,
    explanation: 'The left recurrent laryngeal nerve loops around the aortic arch (specifically the ligamentum arteriosum) before ascending to the larynx in the tracheoesophageal groove.'
  },
  {
    id: 'aortic-arch-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the ligamentum arteriosum?',
    options: ['A branch of the aorta', 'Remnant of the ductus arteriosus connecting arch to left pulmonary artery', 'Part of the pericardium', 'A cardiac ligament'],
    correctAnswer: 1,
    explanation: 'The ligamentum arteriosum is the fibrous remnant of the fetal ductus arteriosus, connecting the inferior surface of the aortic arch to the left pulmonary artery.'
  },
  {
    id: 'aortic-arch-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What lies inferior to the aortic arch?',
    options: ['Superior vena cava', 'Right pulmonary artery, left main bronchus, ligamentum arteriosum', 'Esophagus only', 'Thymus'],
    correctAnswer: 1,
    explanation: 'Inferior to the aortic arch lie the right pulmonary artery, bifurcation of the pulmonary trunk, left main bronchus, and the ligamentum arteriosum connecting to the left pulmonary artery.'
  },
  {
    id: 'aortic-arch-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At what vertebral levels does the aortic arch extend?',
    options: ['T1-T2', 'T4-T5 (from sternal angle)', 'T6-T8', 'T10-T12'],
    correctAnswer: 1,
    explanation: 'The aortic arch extends from T4 to T4/T5 level, beginning and ending at approximately the level of the sternal angle. It arches posteriorly and to the left.'
  },
  {
    id: 'aortic-arch-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is a bovine arch variant?',
    options: ['Absence of aortic arch', 'Common origin of brachiocephalic trunk and left common carotid artery', 'Double aortic arch', 'Right-sided aortic arch'],
    correctAnswer: 1,
    explanation: 'A bovine arch is a common variant where the left common carotid artery arises from the brachiocephalic trunk instead of directly from the aortic arch, present in about 15% of people.'
  },
  {
    id: 'aortic-arch-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What nerve crosses the aortic arch superficially (anteriorly)?',
    options: ['Vagus nerve', 'Left phrenic nerve', 'Right phrenic nerve', 'Sympathetic trunk'],
    correctAnswer: 1,
    explanation: 'The left phrenic nerve crosses the aortic arch superficially (anteriorly) as it descends toward the pericardium and diaphragm, lateral to the left vagus nerve.'
  },
  {
    id: 'aortic-arch-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is coarctation of the aorta?',
    options: ['Dilation of the aorta', 'Congenital narrowing of aorta, usually near ligamentum arteriosum', 'Aortic dissection', 'Aortic aneurysm'],
    correctAnswer: 1,
    explanation: 'Coarctation of the aorta is a congenital narrowing typically located just distal to the left subclavian artery at the ligamentum arteriosum. It causes upper extremity hypertension and weak femoral pulses.'
  }
];

// 3. Descending Thoracic Aorta
export const descendingThoracicAortaQuestions: Question[] = [
  {
    id: 'desc-aorta-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the descending thoracic aorta begin and end?',
    options: ['T1 to T10', 'T4 to T12 (aortic hiatus)', 'T6 to L2', 'T2 to T8'],
    correctAnswer: 1,
    explanation: 'The descending thoracic aorta begins at T4 (distal to the aortic arch) and ends at T12 where it passes through the aortic hiatus of the diaphragm to become the abdominal aorta.'
  },
  {
    id: 'desc-aorta-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the visceral branches of the descending thoracic aorta?',
    options: ['Coronary arteries', 'Bronchial, esophageal, pericardial, and mediastinal arteries', 'Intercostal arteries only', 'Renal arteries'],
    correctAnswer: 1,
    explanation: 'Visceral branches include bronchial arteries (to lungs), esophageal arteries (to esophagus), pericardial branches, and mediastinal branches to posterior mediastinal structures.'
  },
  {
    id: 'desc-aorta-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'How many pairs of posterior intercostal arteries arise from the descending thoracic aorta?',
    options: ['6 pairs', '9 pairs (3rd-11th)', '11 pairs', '12 pairs'],
    correctAnswer: 1,
    explanation: 'Nine pairs of posterior intercostal arteries (3rd-11th) arise from the descending thoracic aorta. The 1st and 2nd intercostals come from the supreme intercostal artery (costocervical trunk).'
  },
  {
    id: 'desc-aorta-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the relationship of the descending aorta to the esophagus?',
    options: ['Always anterior to esophagus', 'Left of esophagus superiorly, posterior to esophagus inferiorly', 'Always right of esophagus', 'No relationship'],
    correctAnswer: 1,
    explanation: 'The descending aorta lies to the left and posterior to the esophagus superiorly, then gradually moves posterior to the esophagus as it approaches the diaphragm.'
  },
  {
    id: 'desc-aorta-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What passes through the aortic hiatus with the descending aorta?',
    options: ['Vagus nerves', 'Thoracic duct and sometimes azygos vein', 'Esophagus', 'Inferior vena cava'],
    correctAnswer: 1,
    explanation: 'The aortic hiatus (at T12) transmits the aorta, thoracic duct, and sometimes the azygos vein. It is an opening in the posterior median arcuate ligament between the crura.'
  },
  {
    id: 'desc-aorta-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What subcostal arteries arise from the descending thoracic aorta?',
    options: ['Superior intercostal arteries', 'Last pair of thoracic segmental arteries below 12th rib', 'Bronchial arteries', 'Lumbar arteries'],
    correctAnswer: 1,
    explanation: 'The subcostal arteries are the last pair of segmental arteries from the descending thoracic aorta, running below the 12th rib and above the first lumbar transverse process.'
  },
  {
    id: 'desc-aorta-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of the artery of Adamkiewicz?',
    options: ['Coronary artery variant', 'Major blood supply to lower spinal cord, vulnerable during aortic surgery', 'Branch to liver', 'Esophageal artery'],
    correctAnswer: 1,
    explanation: 'The artery of Adamkiewicz (arteria radicularis magna) is the largest anterior segmental medullary artery, usually arising from a lower intercostal artery (T9-T12). Damage during aortic surgery can cause paraplegia.'
  },
  {
    id: 'desc-aorta-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What type of aneurysm commonly affects the descending thoracic aorta?',
    options: ['Saccular only', 'Fusiform aneurysms, often due to atherosclerosis', 'Berry aneurysms', 'Mycotic only'],
    correctAnswer: 1,
    explanation: 'Fusiform (spindle-shaped) aneurysms commonly affect the descending thoracic aorta, often due to atherosclerosis, hypertension, or connective tissue disorders.'
  }
];

// 4. Internal Thoracic Vessels
export const internalThoracicVesselsQuestions: Question[] = [
  {
    id: 'int-thoracic-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'From what artery does the internal thoracic artery arise?',
    options: ['Aortic arch', 'Subclavian artery', 'Brachiocephalic trunk', 'Axillary artery'],
    correctAnswer: 1,
    explanation: 'The internal thoracic (internal mammary) artery arises from the inferior surface of the first part of the subclavian artery, opposite the thyrocervical trunk.'
  },
  {
    id: 'int-thoracic-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the internal thoracic artery descend?',
    options: ['Lateral to the sternum', 'About 1 cm lateral to sternum, posterior to costal cartilages', 'In the posterior mediastinum', 'Along the vertebral column'],
    correctAnswer: 1,
    explanation: 'The internal thoracic artery descends about 1 cm lateral to the sternal border, posterior to the upper six costal cartilages and the internal intercostal muscles.'
  },
  {
    id: 'int-thoracic-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the terminal branches of the internal thoracic artery?',
    options: ['Anterior intercostals only', 'Musculophrenic and superior epigastric arteries', 'Pericardiacophrenic only', 'Lateral thoracic arteries'],
    correctAnswer: 1,
    explanation: 'At the 6th intercostal space, the internal thoracic artery divides into its terminal branches: the musculophrenic artery (follows the costal margin) and superior epigastric artery (enters rectus sheath).'
  },
  {
    id: 'int-thoracic-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What important branch accompanies the phrenic nerve?',
    options: ['Superior epigastric', 'Pericardiacophrenic artery', 'Musculophrenic', 'Anterior intercostal'],
    correctAnswer: 1,
    explanation: 'The pericardiacophrenic artery, a branch of the internal thoracic artery, accompanies the phrenic nerve between the pericardium and pleura to supply the pericardium and diaphragm.'
  },
  {
    id: 'int-thoracic-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why is the internal thoracic artery used for coronary artery bypass grafting (CABG)?',
    options: ['It is expendable', 'Excellent long-term patency due to endothelial properties and resistance to atherosclerosis', 'Easy to harvest', 'It is the largest artery'],
    correctAnswer: 1,
    explanation: 'The internal thoracic artery (especially left ITA to LAD) has excellent long-term patency (>90% at 10 years) due to its unique endothelial properties and resistance to atherosclerosis.'
  },
  {
    id: 'int-thoracic-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What do the anterior intercostal branches of the internal thoracic artery supply?',
    options: ['Only the sternum', 'Upper six intercostal spaces (anastomose with posterior intercostals)', 'Lungs', 'Heart'],
    correctAnswer: 1,
    explanation: 'The anterior intercostal arteries from the internal thoracic supply the upper six intercostal spaces, anastomosing with posterior intercostal arteries from the aorta.'
  },
  {
    id: 'int-thoracic-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What veins accompany the internal thoracic artery?',
    options: ['Azygos veins', 'Internal thoracic veins (venae comitantes) draining to brachiocephalic veins', 'Superior vena cava', 'Pulmonary veins'],
    correctAnswer: 1,
    explanation: 'The internal thoracic veins (usually paired venae comitantes) accompany the artery and drain into the respective brachiocephalic vein on each side.'
  },
  {
    id: 'int-thoracic-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What lymph nodes lie along the internal thoracic vessels?',
    options: ['Axillary nodes', 'Parasternal (internal thoracic) lymph nodes', 'Tracheobronchial nodes', 'Hilar nodes'],
    correctAnswer: 1,
    explanation: 'Parasternal (internal thoracic) lymph nodes lie along the internal thoracic vessels. They receive lymph from the medial breast, anterior chest wall, and upper abdominal wall.'
  }
];

// 5. Brachiocephalic Veins and Superior Vena Cava
export const brachiocephalicVeinsSVCQuestions: Question[] = [
  {
    id: 'brachio-svc-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How are the brachiocephalic veins formed?',
    options: ['From the azygos system', 'By union of internal jugular and subclavian veins', 'From pulmonary veins', 'From coronary sinus'],
    correctAnswer: 1,
    explanation: 'Each brachiocephalic (innominate) vein is formed posterior to the sternoclavicular joint by the union of the internal jugular vein and subclavian vein.'
  },
  {
    id: 'brachio-svc-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which brachiocephalic vein is longer and why?',
    options: ['Right, due to heart position', 'Left, because it crosses midline to join the right', 'They are equal', 'Neither crosses midline'],
    correctAnswer: 1,
    explanation: 'The left brachiocephalic vein is longer (about 6 cm vs 2.5 cm) because it must cross from left to right, anterior to the great vessels, to join the right brachiocephalic vein and form the SVC.'
  },
  {
    id: 'brachio-svc-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What does the left brachiocephalic vein cross anterior to?',
    options: ['Esophagus', 'Branches of aortic arch (brachiocephalic trunk, left common carotid)', 'Trachea only', 'Left lung'],
    correctAnswer: 1,
    explanation: 'The left brachiocephalic vein crosses anterior to the three branches of the aortic arch: the brachiocephalic trunk, left common carotid artery, and left subclavian artery.'
  },
  {
    id: 'brachio-svc-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the superior vena cava formed?',
    options: ['Behind the first left costal cartilage', 'Behind the first right costal cartilage', 'At the aortic arch level', 'In the neck'],
    correctAnswer: 1,
    explanation: 'The SVC is formed posterior to the first right costal cartilage by the union of the right and left brachiocephalic veins.'
  },
  {
    id: 'brachio-svc-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the only tributary of the superior vena cava (besides brachiocephalic veins)?',
    options: ['Internal thoracic vein', 'Azygos vein', 'Pulmonary vein', 'Coronary sinus'],
    correctAnswer: 1,
    explanation: 'The azygos vein is the only direct tributary of the SVC, arching over the root of the right lung to enter the posterior aspect of the SVC at approximately T4 level.'
  },
  {
    id: 'brachio-svc-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Into which chamber does the superior vena cava drain?',
    options: ['Left atrium', 'Right atrium', 'Right ventricle', 'Left ventricle'],
    correctAnswer: 1,
    explanation: 'The superior vena cava drains into the superior part of the right atrium, returning deoxygenated blood from the head, neck, upper limbs, and thorax to the heart.'
  },
  {
    id: 'brachio-svc-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is SVC syndrome?',
    options: ['Congenital absence of SVC', 'Obstruction of SVC causing facial/upper body edema and venous distension', 'SVC aneurysm', 'SVC thrombophlebitis only'],
    correctAnswer: 1,
    explanation: 'SVC syndrome is obstruction (usually by lung cancer or lymphoma) causing facial and upper body edema, distended neck veins, and collateral venous circulation. It is an oncologic emergency.'
  },
  {
    id: 'brachio-svc-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the approximate length of the superior vena cava?',
    options: ['3 cm', '7 cm', '12 cm', '15 cm'],
    correctAnswer: 1,
    explanation: 'The SVC is approximately 7 cm long, extending from the first right costal cartilage to the third right costal cartilage where it enters the right atrium.'
  }
];

// 6. Inferior Vena Cava
export const inferiorVenaCavaQuestions: Question[] = [
  {
    id: 'ivc-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the inferior vena cava formed?',
    options: ['In the thorax', 'At L5 by union of common iliac veins', 'At L1', 'In the pelvis'],
    correctAnswer: 1,
    explanation: 'The IVC is formed at the L5 vertebral level by the union of the right and left common iliac veins, just to the right of the midline.'
  },
  {
    id: 'ivc-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Through which diaphragmatic opening does the IVC pass?',
    options: ['Aortic hiatus', 'Esophageal hiatus', 'Caval opening at T8', 'Sternocostal triangle'],
    correctAnswer: 2,
    explanation: 'The IVC passes through the caval opening (foramen venae cavae) in the central tendon of the diaphragm at the T8 vertebral level, the highest of the three major diaphragmatic openings.'
  },
  {
    id: 'ivc-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why does the IVC pass through the central tendon rather than muscular diaphragm?',
    options: ['Random embryology', 'To prevent compression during breathing and maintain venous return', 'To be closer to the heart', 'No specific reason'],
    correctAnswer: 1,
    explanation: 'The IVC passes through the central tendon (not muscular diaphragm) so it is not compressed during diaphragmatic contraction. The tendon actually stretches during inspiration, facilitating venous return.'
  },
  {
    id: 'ivc-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the only thoracic portion of the IVC?',
    options: ['Superior portion', 'Short intrapericardial segment before entering right atrium', 'Middle portion', 'It has no thoracic portion'],
    correctAnswer: 1,
    explanation: 'The IVC has a very short intrathoracic course (about 2-3 cm), passing through the pericardium to enter the inferior part of the right atrium almost immediately after traversing the diaphragm.'
  },
  {
    id: 'ivc-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What structure passes through the caval opening with the IVC?',
    options: ['Thoracic duct', 'Azygos vein', 'Right phrenic nerve', 'Vagus nerve'],
    correctAnswer: 2,
    explanation: 'The right phrenic nerve passes through or immediately adjacent to the caval opening along with the IVC. The left phrenic nerve pierces the muscular part of the diaphragm separately.'
  },
  {
    id: 'ivc-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Why can the IVC be compressed in pregnancy?',
    options: ['Due to fetal movement', 'Gravid uterus compresses IVC in supine position', 'Due to placental hormones', 'It cannot be compressed'],
    correctAnswer: 1,
    explanation: 'In pregnancy, the enlarged uterus can compress the IVC when the mother lies supine, reducing venous return and causing supine hypotensive syndrome. Left lateral position relieves this.'
  },
  {
    id: 'ivc-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What major tributaries does the IVC receive in the abdomen?',
    options: ['Only pelvic veins', 'Hepatic, renal, right gonadal, right suprarenal, lumbar, and common iliac veins', 'Only hepatic veins', 'Mesenteric veins directly'],
    correctAnswer: 1,
    explanation: 'Major IVC tributaries include hepatic veins, renal veins, right gonadal vein, right suprarenal vein, lumbar veins, and common iliac veins. The left gonadal and suprarenal drain via left renal vein.'
  },
  {
    id: 'ivc-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is an IVC filter used for?',
    options: ['To increase blood pressure', 'To trap emboli and prevent pulmonary embolism', 'To treat heart failure', 'To treat IVC aneurysm'],
    correctAnswer: 1,
    explanation: 'IVC filters are placed percutaneously to trap blood clots from the lower limbs and pelvis, preventing them from reaching the pulmonary circulation in patients at high risk of pulmonary embolism.'
  }
];

// 7. Azygos Veins
export const azygosVeinsQuestions: Question[] = [
  {
    id: 'azygos-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the azygos vein originate?',
    options: ['In the neck', 'From the right ascending lumbar vein or right subcostal vein', 'From the IVC', 'From the SVC'],
    correctAnswer: 1,
    explanation: 'The azygos vein typically originates from the junction of the right ascending lumbar vein and right subcostal vein. It may also arise from the posterior aspect of the IVC.'
  },
  {
    id: 'azygos-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What does the azygos vein arch over to join the SVC?',
    options: ['Left main bronchus', 'Root of the right lung', 'Aortic arch', 'Esophagus'],
    correctAnswer: 1,
    explanation: 'The azygos vein arches over the root (hilum) of the right lung at approximately T4 level to drain into the posterior aspect of the superior vena cava.'
  },
  {
    id: 'azygos-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of the azygos venous system?',
    options: ['No clinical significance', 'Provides collateral pathway between IVC and SVC systems', 'Only drains the lungs', 'Arterial collateral'],
    correctAnswer: 1,
    explanation: 'The azygos system provides an important collateral pathway between IVC and SVC territories. In IVC obstruction, blood can bypass via azygos to SVC, maintaining venous return.'
  },
  {
    id: 'azygos-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the tributaries of the azygos vein?',
    options: ['Only intercostal veins', 'Right posterior intercostals, hemiazygos, accessory hemiazygos, bronchial, esophageal veins', 'Pulmonary veins', 'Coronary veins'],
    correctAnswer: 1,
    explanation: 'The azygos vein receives right posterior intercostal veins, hemiazygos and accessory hemiazygos veins, bronchial veins, esophageal veins, and pericardial veins.'
  },
  {
    id: 'azygos-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the hemiazygos vein and where does it drain?',
    options: ['Right-sided vein draining to SVC', 'Left-sided vein draining lower left intercostals, crosses to azygos at T8-T9', 'Branch of IVC', 'Pulmonary vein tributary'],
    correctAnswer: 1,
    explanation: 'The hemiazygos vein is the left-sided counterpart to the lower azygos, receiving the lower 4-5 left posterior intercostal veins. It crosses the midline around T8-T9 to join the azygos.'
  },
  {
    id: 'azygos-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the accessory hemiazygos vein?',
    options: ['Branch of azygos', 'Drains upper left intercostals, crosses to azygos at T7-T8', 'Right-sided accessory vein', 'Tributary of IVC'],
    correctAnswer: 1,
    explanation: 'The accessory hemiazygos vein drains the 4th-8th left posterior intercostal veins. It descends on the left side of the vertebral column and crosses to join the azygos around T7-T8.'
  },
  {
    id: 'azygos-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is an "azygos lobe" of the lung?',
    options: ['A disease state', 'Anatomical variant where azygos vein invaginates into right upper lobe', 'Extra pulmonary lobe', 'Azygos vein aneurysm'],
    correctAnswer: 1,
    explanation: 'An azygos lobe is a normal variant (0.5-1% of population) where the azygos vein creates a fissure in the right upper lobe during development, appearing as a separate "lobe" on imaging.'
  },
  {
    id: 'azygos-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the azygos vein lie in the posterior mediastinum?',
    options: ['Left of the esophagus', 'Right of the vertebral column, right of thoracic duct', 'Anterior to esophagus', 'Within the pericardium'],
    correctAnswer: 1,
    explanation: 'The azygos vein ascends in the posterior mediastinum to the right of the vertebral column and to the right of the thoracic duct and aorta.'
  }
];

// 8. Thoracic Duct
export const thoracicDuctQuestions: Question[] = [
  {
    id: 'thor-duct-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the thoracic duct originate?',
    options: ['In the neck', 'From the cisterna chyli at L1-L2', 'In the thorax', 'From the spleen'],
    correctAnswer: 1,
    explanation: 'The thoracic duct originates from the cisterna chyli (chyle cistern), a dilated lymphatic sac located anterior to the L1-L2 vertebrae, between the aorta and right crus of diaphragm.'
  },
  {
    id: 'thor-duct-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Through which diaphragmatic opening does the thoracic duct enter the thorax?',
    options: ['Caval opening', 'Esophageal hiatus', 'Aortic hiatus', 'Sternocostal triangle'],
    correctAnswer: 2,
    explanation: 'The thoracic duct enters the thorax through the aortic hiatus (at T12 level) along with the aorta, passing posterior to the median arcuate ligament.'
  },
  {
    id: 'thor-duct-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where does the thoracic duct drain?',
    options: ['Right subclavian vein', 'Junction of left internal jugular and subclavian veins (left venous angle)', 'Superior vena cava', 'Azygos vein'],
    correctAnswer: 1,
    explanation: 'The thoracic duct drains into the left venous angle (junction of left internal jugular and subclavian veins), returning lymph from most of the body to the venous system.'
  },
  {
    id: 'thor-duct-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the approximate length of the thoracic duct?',
    options: ['10-15 cm', '20-25 cm', '38-45 cm', '60 cm'],
    correctAnswer: 2,
    explanation: 'The thoracic duct is approximately 38-45 cm long, making it the largest lymphatic vessel in the body. It extends from the cisterna chyli to the left venous angle.'
  },
  {
    id: 'thor-duct-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What areas of the body does the thoracic duct drain?',
    options: ['Only the abdomen', 'Entire body below diaphragm, left half of thorax, left head and neck, left upper limb', 'Only lower limbs', 'Entire body'],
    correctAnswer: 1,
    explanation: 'The thoracic duct drains lymph from below the diaphragm (both sides), the left half of the thorax, left side of the head and neck, and the left upper limb.'
  },
  {
    id: 'thor-duct-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the thoracic duct cross from right to left?',
    options: ['At T4 level', 'At T5-T6 level behind the esophagus', 'At the diaphragm', 'It stays on the right side'],
    correctAnswer: 1,
    explanation: 'The thoracic duct crosses from the right side to the left side of the posterior mediastinum around T5-T6 level, passing posterior to the esophagus and left of the aorta.'
  },
  {
    id: 'thor-duct-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is chylothorax?',
    options: ['Normal chest fluid', 'Accumulation of chyle (lymph) in pleural cavity due to thoracic duct injury', 'Blood in pleural cavity', 'Air in pleural cavity'],
    correctAnswer: 1,
    explanation: 'Chylothorax is the accumulation of chyle (lymphatic fluid rich in triglycerides) in the pleural cavity, usually due to thoracic duct trauma during surgery, malignancy, or penetrating injury.'
  },
  {
    id: 'thor-duct-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What does the right lymphatic duct drain?',
    options: ['Entire body', 'Right side of head/neck, right upper limb, right hemithorax', 'Only right arm', 'Lower body'],
    correctAnswer: 1,
    explanation: 'The right lymphatic duct (when present as a single trunk) drains the right side of the head and neck, the right upper limb, and the right half of the thorax into the right venous angle.'
  },
  {
    id: 'thor-duct-9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the thoracic duct to the esophagus and aorta in the lower thorax?',
    options: ['Anterior to both', 'Between the esophagus (anterior) and aorta/azygos vein (posterior)', 'Lateral to both', 'No relationship'],
    correctAnswer: 1,
    explanation: 'In the lower posterior mediastinum, the thoracic duct lies between the esophagus anteriorly and the aorta and azygos vein posteriorly, ascending on the right side of the vertebral column.'
  },
  {
    id: 'thor-duct-10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Why is thoracic duct injury more common on the left side during neck surgery?',
    options: ['Duct is thicker on left', 'The duct arches in the left neck to drain into the left venous angle', 'There is no duct on right', 'It is not more common on left'],
    correctAnswer: 1,
    explanation: 'The thoracic duct arches 3-4 cm above the clavicle in the left neck before descending to drain at the left venous angle, making it vulnerable during left-sided neck procedures.'
  }
];

// Combine all thoracic vessels questions for easy import
export const thoracicVesselsQuestions: Question[] = [
  ...ascendingAortaQuestions,
  ...aorticArchQuestions,
  ...descendingThoracicAortaQuestions,
  ...internalThoracicVesselsQuestions,
  ...brachiocephalicVeinsSVCQuestions,
  ...inferiorVenaCavaQuestions,
  ...azygosVeinsQuestions,
  ...thoracicDuctQuestions
];
