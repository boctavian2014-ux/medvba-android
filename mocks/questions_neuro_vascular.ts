import type { Question } from './questions';

// Artera carotidă internă – segment intracranian
export const internalCarotidIntracranialQuestions: Question[] = [
  {
    id: 'ica-int-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The internal carotid artery enters the cranial cavity through which structure?',
    options: [
      'Foramen magnum',
      'Carotid canal and foramen lacerum',
      'Jugular foramen',
      'Foramen ovale',
      'Foramen spinosum'
    ],
    correctAnswer: 1,
    explanation: 'The internal carotid artery enters the skull through the carotid canal in the petrous temporal bone, then passes over the foramen lacerum (without traversing it) to enter the cavernous sinus.'
  },
  {
    id: 'ica-int-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'How many segments does the intracranial internal carotid artery have according to the Bouthillier classification?',
    options: [
      'Three segments',
      'Five segments',
      'Seven segments (C1-C7)',
      'Ten segments',
      'Two segments'
    ],
    correctAnswer: 2,
    explanation: 'The Bouthillier classification divides the ICA into seven segments: C1 (cervical), C2 (petrous), C3 (lacerum), C4 (cavernous), C5 (clinoid), C6 (ophthalmic), and C7 (communicating).'
  },
  {
    id: 'ica-int-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The cavernous segment of the internal carotid artery is located:',
    options: [
      'In the neck',
      'Within the cavernous sinus',
      'In the subarachnoid space',
      'In the petrous bone',
      'At the bifurcation'
    ],
    correctAnswer: 1,
    explanation: 'The cavernous segment (C4) of the ICA passes through the cavernous sinus, surrounded by venous blood. It is the only major artery to pass through a venous sinus.'
  },
  {
    id: 'ica-int-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The S-shaped curve of the internal carotid artery in the cavernous sinus is called:',
    options: [
      'Circle of Willis',
      'Carotid siphon',
      'Carotid bulb',
      'Carotid body',
      'Carotid triangle'
    ],
    correctAnswer: 1,
    explanation: 'The carotid siphon refers to the S-shaped curve of the ICA as it passes through the cavernous sinus and turns posteriorly, then anteriorly, before exiting. This curve is important in aneurysm formation.'
  },
  {
    id: 'ica-int-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The internal carotid artery enters the subarachnoid space by piercing which structure?',
    options: [
      'Tentorium cerebelli',
      'Dura mater medial to the anterior clinoid process',
      'Falx cerebri',
      'Arachnoid granulations',
      'Diaphragma sellae'
    ],
    correctAnswer: 1,
    explanation: 'The ICA pierces the dura mater medial to the anterior clinoid process to enter the subarachnoid space. This is where it becomes the supraclinoid or intradural segment.'
  },
  {
    id: 'ica-int-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The petrous segment of the internal carotid artery runs within:',
    options: [
      'The cavernous sinus',
      'The carotid canal in the petrous temporal bone',
      'The jugular foramen',
      'The foramen ovale',
      'The subarachnoid space'
    ],
    correctAnswer: 1,
    explanation: 'The petrous segment (C2) runs within the carotid canal of the petrous part of the temporal bone. It has vertical and horizontal portions and is surrounded by the sympathetic carotid plexus.'
  },
  {
    id: 'ica-int-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which structure lies immediately lateral to the cavernous segment of the ICA?',
    options: [
      'Optic nerve',
      'Cranial nerves III, IV, V1, V2 in the lateral wall',
      'Pituitary gland',
      'Sphenoid sinus',
      'Temporal lobe'
    ],
    correctAnswer: 1,
    explanation: 'The lateral wall of the cavernous sinus contains (from superior to inferior): CN III, CN IV, CN V1, and CN V2. CN VI runs freely within the sinus adjacent to the ICA.'
  },
  {
    id: 'ica-int-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A carotid-cavernous fistula (CCF) would present with which classic triad?',
    options: [
      'Headache, fever, neck stiffness',
      'Pulsatile proptosis, chemosis, and orbital bruit',
      'Ptosis, miosis, anhidrosis',
      'Diplopia, vertigo, ataxia',
      'Papilledema, headache, vomiting'
    ],
    correctAnswer: 1,
    explanation: 'Carotid-cavernous fistula presents with pulsatile exophthalmos (proptosis), chemosis (conjunctival edema), and orbital bruit due to arterial blood shunting into the venous system and causing venous engorgement of orbital structures.'
  },
  {
    id: 'ica-int-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'An aneurysm of the supraclinoid ICA at the origin of the posterior communicating artery would most likely compress:',
    options: [
      'Optic nerve',
      'Oculomotor nerve (CN III)',
      'Trochlear nerve (CN IV)',
      'Abducens nerve (CN VI)',
      'Trigeminal nerve (CN V)'
    ],
    correctAnswer: 1,
    explanation: 'Posterior communicating artery aneurysms classically compress CN III as it passes between the PCA and SCA. This causes pupil-involving third nerve palsy (dilated pupil, ptosis, "down and out" eye) due to external compression of parasympathetic fibers.'
  },
  {
    id: 'ica-int-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Complete occlusion of the internal carotid artery may be compensated by collateral flow through:',
    options: [
      'External carotid artery only',
      'Circle of Willis and external carotid-ophthalmic anastomoses',
      'Vertebral artery alone without any anastomoses',
      'Spinal arteries',
      'Meningeal arteries only'
    ],
    correctAnswer: 1,
    explanation: 'ICA occlusion can be compensated by: (1) Circle of Willis (AComm, PComm), (2) ECA-ICA anastomoses via ophthalmic artery (facial→angular→ophthalmic), and (3) leptomeningeal anastomoses. The adequacy depends on individual anatomy.'
  }
];

// Artera carotidă internă – ramuri colaterale
export const internalCarotidBranchesQuestions: Question[] = [
  {
    id: 'ica-br-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The ophthalmic artery arises from which segment of the internal carotid artery?',
    options: [
      'Cervical segment',
      'Supraclinoid (ophthalmic) segment',
      'Petrous segment',
      'Cavernous segment',
      'At the bifurcation'
    ],
    correctAnswer: 1,
    explanation: 'The ophthalmic artery is the first major branch of the supraclinoid ICA, arising just as the ICA exits the cavernous sinus. It enters the orbit through the optic canal with the optic nerve.'
  },
  {
    id: 'ica-br-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The posterior communicating artery connects the ICA to which artery?',
    options: [
      'Anterior cerebral artery',
      'Posterior cerebral artery',
      'Middle cerebral artery',
      'Basilar artery directly',
      'Superior cerebellar artery'
    ],
    correctAnswer: 1,
    explanation: 'The posterior communicating artery (PComm) connects the internal carotid artery to the posterior cerebral artery (P1 segment), forming the lateral portion of the circle of Willis.'
  },
  {
    id: 'ica-br-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The internal carotid artery terminates by dividing into which two arteries?',
    options: [
      'Ophthalmic and posterior communicating',
      'Anterior cerebral artery and middle cerebral artery',
      'Posterior cerebral and superior cerebellar',
      'Basilar and vertebral',
      'Anterior and posterior choroidal'
    ],
    correctAnswer: 1,
    explanation: 'The ICA terminates by bifurcating into the anterior cerebral artery (ACA) and middle cerebral artery (MCA). This occurs at the medial end of the lateral sulcus, below the anterior perforated substance.'
  },
  {
    id: 'ica-br-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The anterior choroidal artery arises from the ICA and supplies which structures?',
    options: [
      'Frontal lobe only',
      'Choroid plexus, optic tract, hippocampus, and internal capsule',
      'Cerebellum',
      'Brainstem',
      'Occipital lobe'
    ],
    correctAnswer: 1,
    explanation: 'The anterior choroidal artery supplies the choroid plexus of the lateral ventricle, optic tract, lateral geniculate body, hippocampus, and posterior limb of the internal capsule. Occlusion causes the "anterior choroidal syndrome."'
  },
  {
    id: 'ica-br-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The meningohypophyseal trunk arises from which segment of the ICA?',
    options: [
      'Cervical segment',
      'Cavernous segment',
      'Supraclinoid segment',
      'Petrous segment',
      'At the bifurcation'
    ],
    correctAnswer: 1,
    explanation: 'The meningohypophyseal trunk arises from the posterior bend of the cavernous ICA and gives branches to the pituitary gland (inferior hypophyseal artery), tentorium, and clivus.'
  },
  {
    id: 'ica-br-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The inferolateral trunk (artery of the inferior cavernous sinus) supplies:',
    options: [
      'The optic nerve',
      'Cranial nerves in the cavernous sinus',
      'The cerebellum',
      'The hippocampus',
      'The frontal lobe'
    ],
    correctAnswer: 1,
    explanation: 'The inferolateral trunk arises from the lateral aspect of the cavernous ICA and supplies cranial nerves III, IV, V, and VI within and adjacent to the cavernous sinus. It may provide collateral flow in ICA occlusion.'
  },
  {
    id: 'ica-br-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The central retinal artery is a branch of:',
    options: [
      'Middle cerebral artery',
      'Ophthalmic artery',
      'Posterior cerebral artery',
      'External carotid artery',
      'Anterior cerebral artery'
    ],
    correctAnswer: 1,
    explanation: 'The central retinal artery is a branch of the ophthalmic artery (which arises from the ICA). It enters the optic nerve and supplies the inner retinal layers. It is an end artery; occlusion causes sudden painless vision loss.'
  },
  {
    id: 'ica-br-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Anterior choroidal artery occlusion classically produces which triad?',
    options: [
      'Headache, fever, neck stiffness',
      'Contralateral hemiplegia, hemianesthesia, and homonymous hemianopia',
      'Ipsilateral Horner syndrome and contralateral pain loss',
      'Bilateral blindness and amnesia',
      'Vertigo, ataxia, and nystagmus'
    ],
    correctAnswer: 1,
    explanation: 'Anterior choroidal artery syndrome presents with contralateral hemiplegia (internal capsule), hemianesthesia (thalamus), and homonymous hemianopia (lateral geniculate body/optic tract). The full triad is variable due to collateral supply.'
  },
  {
    id: 'ica-br-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A fetal-type posterior cerebral artery (fetal PCA) means:',
    options: [
      'The PCA is absent',
      'The PCA arises predominantly from the ICA via a large PComm',
      'The PCA arises from the anterior cerebral artery',
      'The PCA supplies the frontal lobe',
      'The PCA is duplicated'
    ],
    correctAnswer: 1,
    explanation: 'Fetal-type PCA (present in 20-30% of individuals) occurs when the posterior communicating artery is larger than the P1 segment, so the PCA receives most of its blood from the ICA rather than the basilar artery. This variant affects stroke patterns.'
  },
  {
    id: 'ica-br-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The superior hypophyseal arteries arise from which part of the ICA and supply:',
    options: [
      'Cavernous segment; posterior pituitary',
      'Supraclinoid segment; pituitary stalk and anterior pituitary',
      'Petrous segment; middle ear',
      'Cervical segment; thyroid',
      'At bifurcation; hypothalamus only'
    ],
    correctAnswer: 1,
    explanation: 'Superior hypophyseal arteries arise from the supraclinoid ICA and supply the pituitary stalk, median eminence, and anterior pituitary gland. They form the hypothalamo-hypophyseal portal system for releasing hormone delivery.'
  }
];

// Trunchiul arterial vertebro-bazilar
export const vertebrobasilarTrunkQuestions: Question[] = [
  {
    id: 'vb-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The vertebral arteries enter the cranial cavity through which foramen?',
    options: [
      'Foramen ovale',
      'Foramen magnum',
      'Jugular foramen',
      'Foramen spinosum',
      'Foramen lacerum'
    ],
    correctAnswer: 1,
    explanation: 'The vertebral arteries enter the cranial cavity through the foramen magnum after ascending through the transverse foramina of cervical vertebrae C6-C1 and piercing the atlanto-occipital membrane.'
  },
  {
    id: 'vb-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The two vertebral arteries unite to form the basilar artery at which level?',
    options: [
      'Foramen magnum',
      'Pontomedullary junction',
      'Midbrain',
      'C2 vertebral level',
      'Superior aspect of pons'
    ],
    correctAnswer: 1,
    explanation: 'The two vertebral arteries unite at the pontomedullary junction (lower border of the pons) to form the basilar artery. The basilar artery then ascends in the basilar sulcus on the ventral pons.'
  },
  {
    id: 'vb-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The basilar artery terminates by dividing into:',
    options: [
      'Anterior cerebral arteries',
      'Posterior cerebral arteries',
      'Middle cerebral arteries',
      'Superior cerebellar arteries',
      'Anterior inferior cerebellar arteries'
    ],
    correctAnswer: 1,
    explanation: 'The basilar artery terminates at the upper border of the pons by dividing into the two posterior cerebral arteries (PCAs) in the interpeduncular cistern.'
  },
  {
    id: 'vb-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The posterior inferior cerebellar artery (PICA) is typically a branch of:',
    options: [
      'Basilar artery',
      'Vertebral artery',
      'Posterior cerebral artery',
      'Internal carotid artery',
      'External carotid artery'
    ],
    correctAnswer: 1,
    explanation: 'PICA is the largest branch of the vertebral artery, arising just before the vertebral arteries unite. It supplies the posteroinferior cerebellum, choroid plexus of the fourth ventricle, and lateral medulla.'
  },
  {
    id: 'vb-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The anterior inferior cerebellar artery (AICA) arises from:',
    options: [
      'Vertebral artery',
      'Lower basilar artery',
      'Posterior cerebral artery',
      'Superior cerebellar artery',
      'Internal carotid artery'
    ],
    correctAnswer: 1,
    explanation: 'AICA arises from the lower third of the basilar artery and supplies the anteroinferior cerebellum, lateral pons, and (via the labyrinthine artery) the inner ear structures.'
  },
  {
    id: 'vb-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The superior cerebellar artery (SCA) arises from:',
    options: [
      'Vertebral artery',
      'Upper basilar artery just before its bifurcation',
      'Posterior cerebral artery',
      'Middle cerebral artery',
      'Anterior cerebral artery'
    ],
    correctAnswer: 1,
    explanation: 'The SCA arises from the upper basilar artery just proximal to its bifurcation into the PCAs. It passes around the midbrain below CN III and supplies the superior cerebellum and parts of the midbrain.'
  },
  {
    id: 'vb-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The labyrinthine (internal auditory) artery is typically a branch of:',
    options: [
      'Vertebral artery',
      'AICA (or sometimes basilar directly)',
      'PICA',
      'Posterior cerebral artery',
      'External carotid artery'
    ],
    correctAnswer: 1,
    explanation: 'The labyrinthine artery usually arises from AICA (or sometimes directly from the basilar) and enters the internal acoustic meatus to supply the inner ear. It is an end artery; occlusion causes sudden hearing loss and vertigo.'
  },
  {
    id: 'vb-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Occlusion of PICA causing Wallenberg syndrome (lateral medullary syndrome) produces all EXCEPT:',
    options: [
      'Ipsilateral facial pain/temperature loss',
      'Contralateral body pain/temperature loss',
      'Ipsilateral Horner syndrome',
      'Contralateral hemiparesis',
      'Dysphagia and dysarthria'
    ],
    correctAnswer: 3,
    explanation: 'Wallenberg syndrome does NOT cause hemiparesis (pyramids are spared). It causes ipsilateral: facial sensory loss, Horner syndrome, ataxia, vestibular symptoms; contralateral: body pain/temperature loss; and bulbar symptoms (dysphagia, dysarthria, hoarseness).'
  },
  {
    id: 'vb-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Basilar artery thrombosis with "locked-in syndrome" results from infarction of:',
    options: [
      'Midbrain',
      'Bilateral ventral pons (basis pontis)',
      'Medulla',
      'Cerebellum',
      'Thalamus'
    ],
    correctAnswer: 1,
    explanation: 'Locked-in syndrome results from bilateral ventral pontine infarction destroying corticospinal and corticobulbar tracts. Patients are conscious (intact tegmentum/reticular formation) but quadriplegic and mute, able to communicate only by vertical eye movements and blinking.'
  },
  {
    id: 'vb-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The "top of the basilar" syndrome typically causes:',
    options: [
      'Isolated hemiparesis',
      'Visual, oculomotor, and behavioral disturbances from midbrain/thalamic ischemia',
      'Pure sensory stroke',
      'Isolated vertigo',
      'Isolated hearing loss'
    ],
    correctAnswer: 1,
    explanation: 'Top of the basilar syndrome results from emboli lodging at the basilar apex, affecting the midbrain, thalami, and PCA territories. It causes visual disturbances (hemianopia, cortical blindness), oculomotor palsies, altered consciousness, and behavioral changes.'
  }
];

// Vascularizația măduvei spinării
export const spinalCordVascularizationQuestions: Question[] = [
  {
    id: 'scv-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The anterior spinal artery is formed by branches from which arteries?',
    options: [
      'External carotid arteries',
      'Vertebral arteries',
      'Internal carotid arteries',
      'Basilar artery',
      'Posterior cerebral arteries'
    ],
    correctAnswer: 1,
    explanation: 'The anterior spinal artery is formed by the union of branches from each vertebral artery at the level of the foramen magnum. It descends in the anterior median fissure and supplies the anterior two-thirds of the spinal cord.'
  },
  {
    id: 'scv-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'How many posterior spinal arteries supply the spinal cord?',
    options: [
      'One midline artery',
      'Two arteries (right and left)',
      'Four arteries',
      'Six arteries',
      'No posterior arteries exist'
    ],
    correctAnswer: 1,
    explanation: 'There are two posterior spinal arteries, one on each side, arising from the vertebral arteries or PICA. They descend along the posterolateral sulci near the dorsal roots and supply the posterior one-third of the spinal cord.'
  },
  {
    id: 'scv-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The anterior spinal artery supplies which portion of the spinal cord?',
    options: [
      'Posterior columns only',
      'Anterior two-thirds (including anterior horns and corticospinal tracts)',
      'Posterior one-third only',
      'Only the white matter',
      'Only the gray matter'
    ],
    correctAnswer: 1,
    explanation: 'The anterior spinal artery supplies the anterior two-thirds of the spinal cord, including the anterior horns (motor neurons), lateral corticospinal tracts, and spinothalamic tracts. The posterior columns are spared (posterior spinal artery territory).'
  },
  {
    id: 'scv-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The artery of Adamkiewicz (arteria radicularis magna) typically arises from:',
    options: [
      'Cervical segmental arteries',
      'Lower thoracic or upper lumbar intercostal/lumbar arteries (T9-L2)',
      'Sacral arteries',
      'Vertebral artery directly',
      'Internal iliac artery'
    ],
    correctAnswer: 1,
    explanation: 'The artery of Adamkiewicz typically arises from a left lower intercostal or upper lumbar artery between T9-L2 (most commonly T9-T12). It is the major blood supply to the lower two-thirds of the spinal cord.'
  },
  {
    id: 'scv-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Radicular arteries enter the spinal canal through:',
    options: [
      'The foramen magnum',
      'Intervertebral foramina with the spinal nerves',
      'The vertebral body',
      'The laminae',
      'The spinous processes'
    ],
    correctAnswer: 1,
    explanation: 'Radicular arteries are segmental branches that enter the spinal canal through the intervertebral foramina alongside the spinal nerve roots. Not all radicular arteries contribute significantly to the spinal cord blood supply.'
  },
  {
    id: 'scv-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The venous drainage of the spinal cord occurs via:',
    options: [
      'Internal jugular vein directly',
      'Internal and external vertebral venous plexuses',
      'Azygos system only',
      'Portal venous system',
      'Dural venous sinuses directly'
    ],
    correctAnswer: 1,
    explanation: 'Spinal cord veins drain into the internal vertebral (epidural) venous plexus and external vertebral venous plexus. These communicate with basivertebral veins and ultimately drain into the azygos and hemiazygos systems.'
  },
  {
    id: 'scv-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The watershed zone of the spinal cord, most vulnerable to hypoperfusion, is located at:',
    options: [
      'Cervical enlargement',
      'Mid-thoracic region (T4-T8)',
      'Lumbar enlargement',
      'Conus medullaris',
      'Filum terminale'
    ],
    correctAnswer: 1,
    explanation: 'The mid-thoracic region (T4-T8) is a watershed zone between the territories of the upper and lower radicular feeder vessels. It is most vulnerable to hypoperfusion injury during hypotension or aortic surgery.'
  },
  {
    id: 'scv-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Anterior spinal artery syndrome presents with all EXCEPT:',
    options: [
      'Bilateral motor weakness below the lesion',
      'Loss of pain and temperature sensation',
      'Loss of proprioception and vibration sense',
      'Bowel and bladder dysfunction',
      'Flaccid paralysis initially'
    ],
    correctAnswer: 2,
    explanation: 'Anterior spinal artery syndrome spares the posterior columns, so proprioception and vibration sense are preserved. It causes bilateral weakness (corticospinal), loss of pain/temperature (spinothalamic), and autonomic dysfunction. Position sense remains intact.'
  },
  {
    id: 'scv-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'During thoracoabdominal aortic aneurysm repair, paraplegia risk is highest when:',
    options: [
      'Operating on the ascending aorta',
      'Cross-clamping near the origin of the artery of Adamkiewicz',
      'Operating on the aortic arch',
      'Repairing abdominal aortic aneurysm below the renals',
      'Performing carotid endarterectomy'
    ],
    correctAnswer: 1,
    explanation: 'Paraplegia risk during thoracoabdominal aortic surgery is highest when cross-clamping involves the origin of the artery of Adamkiewicz (typically T9-L2). Preoperative identification and reimplantation of critical intercostal arteries can reduce this risk.'
  },
  {
    id: 'scv-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A spinal dural arteriovenous fistula (dAVF) typically causes symptoms via:',
    options: [
      'Hemorrhage',
      'Venous hypertension causing congestive myelopathy',
      'Direct compression',
      'Arterial steal',
      'Infection'
    ],
    correctAnswer: 1,
    explanation: 'Spinal dural AVFs cause symptoms through venous hypertension rather than hemorrhage. Arterialized venous pressure impairs spinal cord drainage, causing progressive congestive myelopathy with ascending weakness, sensory symptoms, and bladder dysfunction.'
  }
];

// Vascularizația cerebelului și a trunchiului cerebral
export const cerebellumBrainstemVascularizationQuestions: Question[] = [
  {
    id: 'cbv-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The cerebellum receives blood supply from which three paired arteries?',
    options: [
      'ACA, MCA, PCA',
      'PICA, AICA, and SCA',
      'Vertebral, basilar, and internal carotid',
      'Ophthalmic, anterior choroidal, and posterior communicating',
      'Lenticulostriate, thalamoperforating, and pontine'
    ],
    correctAnswer: 1,
    explanation: 'The cerebellum is supplied by three paired arteries from the vertebrobasilar system: posterior inferior cerebellar artery (PICA), anterior inferior cerebellar artery (AICA), and superior cerebellar artery (SCA).'
  },
  {
    id: 'cbv-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'PICA supplies which region of the cerebellum?',
    options: [
      'Superior surface',
      'Posteroinferior cerebellum and inferior vermis',
      'Anterior lobe only',
      'Dentate nucleus only',
      'Flocculus only'
    ],
    correctAnswer: 1,
    explanation: 'PICA supplies the posteroinferior cerebellum including the inferior vermis, tonsils, and inferior semilunar lobule. It also supplies the choroid plexus of the fourth ventricle and the lateral medulla.'
  },
  {
    id: 'cbv-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The SCA supplies which region of the cerebellum?',
    options: [
      'Inferior vermis and tonsils',
      'Superior surface of the cerebellum and dentate nucleus',
      'Flocculus and nodule only',
      'Middle cerebellar peduncle only',
      'Fourth ventricle choroid plexus'
    ],
    correctAnswer: 1,
    explanation: 'SCA supplies the superior surface of the cerebellum, the superior vermis, and most of the deep cerebellar nuclei including the dentate nucleus. It also supplies parts of the superior and middle cerebellar peduncles.'
  },
  {
    id: 'cbv-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The medulla receives blood supply primarily from:',
    options: [
      'Middle cerebral artery',
      'Vertebral arteries and PICA',
      'Internal carotid artery',
      'Basilar artery only',
      'Posterior cerebral artery'
    ],
    correctAnswer: 1,
    explanation: 'The medulla is supplied primarily by the vertebral arteries (via direct perforating branches and the anterior spinal artery) and PICA (lateral medulla). The pyramids and medial medulla receive supply from vertebral branches.'
  },
  {
    id: 'cbv-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The pons receives blood supply from:',
    options: [
      'Internal carotid perforators',
      'Basilar artery perforators (paramedian and short/long circumferential)',
      'Vertebral artery only',
      'Posterior cerebral artery perforators',
      'PICA branches'
    ],
    correctAnswer: 1,
    explanation: 'The pons is supplied by basilar artery branches: paramedian perforators (medial pons), short circumferential (anterolateral pons), and long circumferential branches (lateral pons). AICA also contributes to lateral pontine supply.'
  },
  {
    id: 'cbv-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The midbrain receives blood supply primarily from:',
    options: [
      'PICA',
      'Basilar tip, PCA, and SCA branches',
      'Anterior cerebral artery',
      'Middle cerebral artery',
      'Vertebral artery directly'
    ],
    correctAnswer: 1,
    explanation: 'The midbrain is supplied by perforating branches from the basilar apex, P1 segment of PCA (thalamoperforating arteries), and SCA. The posterior perforated substance receives basilar and PCA perforators.'
  },
  {
    id: 'cbv-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'AICA territory infarction may cause:',
    options: [
      'Pure motor hemiparesis',
      'Hearing loss, vertigo, facial weakness, and cerebellar signs',
      'Homonymous hemianopia',
      'Bitemporal hemianopia',
      'Isolated aphasia'
    ],
    correctAnswer: 1,
    explanation: 'AICA infarction affects the lateral pons and anteroinferior cerebellum, causing ipsilateral hearing loss (labyrinthine artery), vertigo, facial weakness (CN VII nucleus), facial sensory loss (CN V), and cerebellar ataxia.'
  },
  {
    id: 'cbv-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Medial medullary (Dejerine) syndrome from vertebral/anterior spinal artery occlusion presents with:',
    options: [
      'Ipsilateral Horner syndrome and contralateral pain loss',
      'Ipsilateral hypoglossal palsy and contralateral hemiparesis',
      'Bilateral deafness',
      'Bitemporal hemianopia',
      'Locked-in syndrome'
    ],
    correctAnswer: 1,
    explanation: 'Medial medullary syndrome affects the pyramid (contralateral hemiparesis), medial lemniscus (contralateral proprioception loss), and hypoglossal nucleus/fibers (ipsilateral tongue weakness with deviation toward the lesion).'
  },
  {
    id: 'cbv-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A large cerebellar infarction can become life-threatening primarily due to:',
    options: [
      'Hemorrhagic transformation causing coagulopathy',
      'Swelling causing brainstem compression and obstructive hydrocephalus',
      'Cardiac arrhythmias',
      'Respiratory center destruction',
      'Status epilepticus'
    ],
    correctAnswer: 1,
    explanation: 'Large cerebellar infarcts swell within the posterior fossa, compressing the brainstem (causing decreased consciousness, respiratory arrest) and obstructing the fourth ventricle (causing acute hydrocephalus). Urgent decompression may be needed.'
  },
  {
    id: 'cbv-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'SCA territory infarction classically presents with:',
    options: [
      'Contralateral hemiparesis only',
      'Ipsilateral cerebellar ataxia, contralateral pain/temperature loss, and Horner syndrome',
      'Bilateral blindness',
      'Global aphasia',
      'Locked-in syndrome'
    ],
    correctAnswer: 1,
    explanation: 'SCA infarction causes ipsilateral cerebellar ataxia (superior cerebellum), contralateral pain/temperature loss (spinothalamic tract in lateral midbrain/pons), and ipsilateral Horner syndrome. CN IV may be affected causing diplopia.'
  }
];

// Vascularizația diencefalului
export const diencephalonVascularizationQuestions: Question[] = [
  {
    id: 'dv-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The thalamus receives blood supply primarily from branches of:',
    options: [
      'Anterior cerebral artery',
      'Posterior cerebral artery and posterior communicating artery',
      'Middle cerebral artery',
      'Internal carotid artery directly',
      'Basilar artery directly'
    ],
    correctAnswer: 1,
    explanation: 'The thalamus is supplied primarily by branches of the posterior cerebral artery (thalamogeniculate, posterior choroidal) and posterior communicating artery (thalamoperforating arteries).'
  },
  {
    id: 'dv-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The hypothalamus receives blood supply from which arterial sources?',
    options: [
      'PICA and AICA',
      'Branches of the circle of Willis (ACA, AComm, ICA, PComm)',
      'External carotid artery',
      'Vertebral artery directly',
      'Ophthalmic artery'
    ],
    correctAnswer: 1,
    explanation: 'The hypothalamus is supplied by perforating branches from multiple arteries forming the circle of Willis, including the anterior cerebral artery, anterior communicating artery, internal carotid artery, and posterior communicating artery.'
  },
  {
    id: 'dv-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The thalamogeniculate arteries supply:',
    options: [
      'Anterior thalamus',
      'Posterior and lateral thalamus including the geniculate bodies',
      'Hypothalamus',
      'Globus pallidus',
      'Caudate nucleus'
    ],
    correctAnswer: 1,
    explanation: 'Thalamogeniculate arteries (from P2 segment of PCA) supply the posterior thalamus including the pulvinar, lateral geniculate body (visual relay), and posterior ventral nuclei.'
  },
  {
    id: 'dv-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The tuberothalamic (polar) artery supplies which thalamic region?',
    options: [
      'Posterior thalamus',
      'Anterior thalamus including the anterior nucleus',
      'Lateral geniculate body',
      'Pulvinar',
      'Medial geniculate body'
    ],
    correctAnswer: 1,
    explanation: 'The tuberothalamic (polar) artery arises from the posterior communicating artery and supplies the anterior thalamus, including the anterior nucleus (part of the Papez circuit) and ventral anterior nucleus.'
  },
  {
    id: 'dv-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Thalamoperforating arteries arise from:',
    options: [
      'Middle cerebral artery',
      'P1 segment of the posterior cerebral artery',
      'Anterior cerebral artery',
      'PICA',
      'AICA'
    ],
    correctAnswer: 1,
    explanation: 'Thalamoperforating (posterior thalamosubthalamic paramedian) arteries arise from the P1 segment of the PCA and basilar apex. They supply the medial thalamus, subthalamus, and parts of the midbrain.'
  },
  {
    id: 'dv-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The artery of Percheron is a variant where:',
    options: [
      'Both ACAs arise from one side',
      'A single artery from one P1 supplies bilateral paramedian thalami',
      'The MCA has early bifurcation',
      'The basilar artery is duplicated',
      'PICA arises from the basilar artery'
    ],
    correctAnswer: 1,
    explanation: 'The artery of Percheron is an anatomic variant where a single perforating artery from one P1 segment supplies both paramedian thalami. Occlusion causes bilateral thalamic infarction with altered consciousness, vertical gaze palsy, and memory impairment.'
  },
  {
    id: 'dv-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The posterior choroidal arteries supply:',
    options: [
      'Anterior choroid plexus',
      'Posterior thalamus, pineal region, and choroid plexus of third ventricle',
      'Frontal lobe',
      'Temporal lobe',
      'Cerebellum'
    ],
    correctAnswer: 1,
    explanation: 'Posterior choroidal arteries (medial and lateral) arise from the PCA (P2) and supply the posterior thalamus (pulvinar), pineal gland, posterior third ventricle, and choroid plexus of the third and lateral ventricles.'
  },
  {
    id: 'dv-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A thalamic infarct causing contralateral hemisensory loss and severe "thalamic pain" syndrome involves which vascular territory?',
    options: [
      'Tuberothalamic artery',
      'Thalamogeniculate artery (VPL/VPM territory)',
      'Posterior choroidal artery',
      'Anterior choroidal artery',
      'Lenticulostriate arteries'
    ],
    correctAnswer: 1,
    explanation: 'Thalamogeniculate artery occlusion affecting the ventral posterolateral (VPL) and ventral posteromedial (VPM) nuclei causes Dejerine-Roussy syndrome: initial contralateral hemianesthesia followed by severe, burning thalamic pain.'
  },
  {
    id: 'dv-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Bilateral paramedian thalamic infarction (artery of Percheron occlusion) characteristically causes:',
    options: [
      'Pure motor hemiparesis',
      'Hypersomnolence, vertical gaze palsy, and memory impairment',
      'Cortical blindness',
      'Bitemporal hemianopia',
      'Isolated aphasia'
    ],
    correctAnswer: 1,
    explanation: 'Bilateral paramedian thalamic infarction affects the intralaminar nuclei (arousal) and medial dorsal nuclei (memory). Patients present with hypersomnolence/coma, vertical gaze palsy (midbrain involvement), and anterograde amnesia.'
  },
  {
    id: 'dv-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Anterior thalamic infarction from tuberothalamic artery occlusion primarily disrupts:',
    options: [
      'Motor pathways',
      'The Papez circuit causing memory and executive dysfunction',
      'Visual processing',
      'Auditory processing',
      'Pain pathways'
    ],
    correctAnswer: 1,
    explanation: 'The anterior thalamic nucleus is part of the Papez circuit (hippocampus→mammillary body→anterior thalamus→cingulate→hippocampus). Infarction causes anterograde amnesia and may cause executive dysfunction and personality changes.'
  }
];

// Poligonul arterial al lui Willis
export const circleOfWillisQuestions: Question[] = [
  {
    id: 'cow-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The circle of Willis is located at which level?',
    options: [
      'Posterior fossa',
      'Base of the brain around the optic chiasm and pituitary stalk',
      'Cerebral convexity',
      'Within the brainstem',
      'In the cervical region'
    ],
    correctAnswer: 1,
    explanation: 'The circle of Willis is an arterial anastomosis at the base of the brain, surrounding the optic chiasm, pituitary stalk, and interpeduncular fossa. It provides collateral circulation between the anterior and posterior cerebral circulations.'
  },
  {
    id: 'cow-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The anterior portion of the circle of Willis is formed by:',
    options: [
      'Posterior cerebral arteries',
      'Anterior cerebral arteries and anterior communicating artery',
      'Vertebral arteries',
      'Basilar artery',
      'Superior cerebellar arteries'
    ],
    correctAnswer: 1,
    explanation: 'The anterior portion of the circle of Willis consists of the A1 segments of both anterior cerebral arteries connected by the anterior communicating artery (AComm). The AComm is a common site for aneurysms.'
  },
  {
    id: 'cow-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The posterior communicating arteries connect which vessels?',
    options: [
      'ACA to MCA',
      'Internal carotid arteries to posterior cerebral arteries',
      'Both PCAs to each other',
      'Vertebral arteries to basilar artery',
      'ACA to PCA directly'
    ],
    correctAnswer: 1,
    explanation: 'The posterior communicating arteries (PComm) connect the internal carotid arteries (or the terminal ICA/proximal MCA) to the posterior cerebral arteries (P1 segments), linking the anterior (carotid) and posterior (vertebrobasilar) circulations.'
  },
  {
    id: 'cow-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'A complete, "textbook" circle of Willis is found in approximately what percentage of the population?',
    options: [
      '90-95%',
      '20-50%',
      '100%',
      '5%',
      '80%'
    ],
    correctAnswer: 1,
    explanation: 'A complete circle of Willis with all components of adequate size is present in only 20-50% of individuals. Variations include hypoplastic or absent segments (especially PComm and A1), which affect collateral flow capacity.'
  },
  {
    id: 'cow-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The most common site of intracranial aneurysms is:',
    options: [
      'Basilar tip',
      'Anterior communicating artery',
      'Vertebral artery',
      'PICA',
      'Pericallosal artery'
    ],
    correctAnswer: 1,
    explanation: 'The anterior communicating artery is the most common site of intracranial aneurysms (30-35%), followed by the posterior communicating artery (25-30%) and the MCA bifurcation. These are all branch points with hemodynamic stress.'
  },
  {
    id: 'cow-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The circle of Willis provides collateral flow between:',
    options: [
      'Superior and inferior brain regions',
      'The two carotid systems and between carotid and vertebrobasilar systems',
      'Cortical and subcortical regions',
      'Venous and arterial systems',
      'Intracranial and extracranial circulations'
    ],
    correctAnswer: 1,
    explanation: 'The circle of Willis provides crucial collateral pathways: (1) between the two hemispheres via the AComm, and (2) between the anterior (carotid) and posterior (vertebrobasilar) circulations via the PComm arteries.'
  },
  {
    id: 'cow-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The recurrent artery of Heubner arises from which component of the circle of Willis?',
    options: [
      'Posterior communicating artery',
      'A1-A2 junction or proximal A2 of anterior cerebral artery',
      'Basilar artery',
      'Internal carotid artery directly',
      'P1 segment of PCA'
    ],
    correctAnswer: 1,
    explanation: 'The recurrent artery of Heubner (medial striate artery) arises from the A1-A2 junction or proximal A2 segment of the ACA near the AComm. It supplies the head of the caudate, anterior limb of the internal capsule, and anterior putamen.'
  },
  {
    id: 'cow-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with ICA occlusion has no symptoms due to collateral flow via the circle of Willis. If the ipsilateral A1 is hypoplastic, flow to the ipsilateral ACA territory comes primarily from:',
    options: [
      'Ipsilateral PComm',
      'Contralateral ACA via the anterior communicating artery',
      'Ophthalmic artery',
      'External carotid artery',
      'Basilar artery directly'
    ],
    correctAnswer: 1,
    explanation: 'With ICA occlusion and hypoplastic ipsilateral A1, the ipsilateral ACA territory receives blood from the contralateral ACA via the anterior communicating artery. The AComm is the critical collateral in this scenario.'
  },
  {
    id: 'cow-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'An aneurysm at the junction of the PComm and ICA would endanger which cranial nerve?',
    options: [
      'Optic nerve (CN II)',
      'Oculomotor nerve (CN III)',
      'Abducens nerve (CN VI)',
      'Facial nerve (CN VII)',
      'Trigeminal nerve (CN V)'
    ],
    correctAnswer: 1,
    explanation: 'The oculomotor nerve (CN III) passes between the PCA and SCA, near the junction of the ICA and PComm. PComm aneurysms classically present with a painful, pupil-involving CN III palsy (dilated pupil, ptosis, eye "down and out").'
  },
  {
    id: 'cow-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Rupture of an anterior communicating artery aneurysm may cause all EXCEPT:',
    options: [
      'Subarachnoid hemorrhage',
      'Abulia and amnesia from ACA territory vasospasm',
      'Contralateral hemiparesis from ACA stroke',
      'Bitemporal hemianopia from direct compression',
      'Hyponatremia from hypothalamic involvement'
    ],
    correctAnswer: 3,
    explanation: 'AComm aneurysm rupture causes SAH, and vasospasm can cause ACA territory ischemia (leg weakness, abulia, amnesia). Hyponatremia may occur from hypothalamic injury. Bitemporal hemianopia is from optic chiasm compression (more typical of pituitary lesions).'
  }
];

// Artera cerebrală anterioară
export const anteriorCerebralArteryQuestions: Question[] = [
  {
    id: 'aca-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The anterior cerebral artery supplies which surface of the cerebral hemisphere?',
    options: [
      'Lateral surface entirely',
      'Medial surface and superior margin of the frontal and parietal lobes',
      'Inferior temporal surface',
      'Occipital pole',
      'Insula'
    ],
    correctAnswer: 1,
    explanation: 'The ACA supplies the medial surface of the frontal and parietal lobes (including the paracentral lobule) and extends over the superior margin to supply a strip of the lateral surface. It also supplies part of the basal forebrain.'
  },
  {
    id: 'aca-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The A1 segment of the anterior cerebral artery extends from:',
    options: [
      'AComm to the pericallosal artery',
      'ICA bifurcation to the anterior communicating artery',
      'Vertebral artery to basilar artery',
      'MCA origin to the sylvian fissure',
      'Pericallosal artery to cortical branches'
    ],
    correctAnswer: 1,
    explanation: 'The A1 segment (precommunicating segment) extends from the ICA bifurcation to the anterior communicating artery. It gives off medial lenticulostriate (perforating) branches to the anterior perforated substance.'
  },
  {
    id: 'aca-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The pericallosal artery is a continuation of which vessel?',
    options: [
      'Middle cerebral artery',
      'Anterior cerebral artery (A2 and beyond)',
      'Posterior cerebral artery',
      'Basilar artery',
      'Internal carotid artery'
    ],
    correctAnswer: 1,
    explanation: 'The pericallosal artery is the continuation of the ACA beyond the A2 segment, running in the pericallosal cistern above the corpus callosum. It supplies the medial frontal and parietal cortex.'
  },
  {
    id: 'aca-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The callosomarginal artery is a major branch of the ACA that runs in:',
    options: [
      'The lateral sulcus',
      'The cingulate sulcus',
      'The calcarine sulcus',
      'The central sulcus',
      'The parieto-occipital sulcus'
    ],
    correctAnswer: 1,
    explanation: 'The callosomarginal artery is a major branch of the ACA that runs in or parallel to the cingulate sulcus. It supplies the cingulate gyrus, medial frontal cortex, and paracentral lobule.'
  },
  {
    id: 'aca-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The recurrent artery of Heubner supplies which structures?',
    options: [
      'Occipital lobe',
      'Head of caudate, anterior internal capsule, and anterior putamen',
      'Thalamus',
      'Midbrain',
      'Cerebellum'
    ],
    correctAnswer: 1,
    explanation: 'The recurrent artery of Heubner supplies the head of the caudate nucleus, anterior limb of the internal capsule, and anterior putamen. Injury during AComm aneurysm surgery can cause contralateral face/arm weakness and aphasia.'
  },
  {
    id: 'aca-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Bilateral ACA territory infarction (e.g., from AComm aneurysm vasospasm) causes:',
    options: [
      'Bitemporal hemianopia',
      'Abulia, akinetic mutism, and bilateral leg weakness',
      'Global aphasia',
      'Complete blindness',
      'Locked-in syndrome'
    ],
    correctAnswer: 1,
    explanation: 'Bilateral ACA infarction affects the medial frontal lobes (supplementary motor areas, cingulate) and paracentral lobules, causing abulia (lack of will), akinetic mutism, bilateral leg weakness, and urinary incontinence.'
  },
  {
    id: 'aca-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The frontopolar artery is a branch of the ACA that supplies:',
    options: [
      'Occipital pole',
      'Frontal pole',
      'Temporal pole',
      'Parietal cortex',
      'Insula'
    ],
    correctAnswer: 1,
    explanation: 'The frontopolar artery arises from the A2 segment and supplies the frontal pole and adjacent medial orbital cortex. It is one of the cortical branches of the ACA.'
  },
  {
    id: 'aca-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with unilateral ACA territory stroke presents with contralateral leg weakness greater than arm weakness. This pattern occurs because:',
    options: [
      'The MCA supplies the leg area',
      'The leg motor area is on the medial surface (ACA territory), arm is lateral (MCA territory)',
      'The ACA supplies the internal capsule',
      'The spinal cord is affected',
      'The cerebellum controls leg movement'
    ],
    correctAnswer: 1,
    explanation: 'The leg motor representation is on the medial surface of the precentral gyrus (paracentral lobule) in ACA territory. The arm and face are represented on the lateral convexity in MCA territory. ACA stroke thus causes leg > arm weakness.'
  },
  {
    id: 'aca-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Alien hand syndrome (the hand acts autonomously, sometimes in conflict with the other hand) can occur with lesions affecting:',
    options: [
      'Occipital lobe',
      'Corpus callosum and supplementary motor area (ACA territory)',
      'Temporal lobe',
      'Cerebellum',
      'Thalamus'
    ],
    correctAnswer: 1,
    explanation: 'Alien hand syndrome (especially the callosal type affecting the non-dominant hand) results from damage to the corpus callosum and/or supplementary motor area, often from ACA territory infarction or callosal surgery.'
  },
  {
    id: 'aca-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'An azygos anterior cerebral artery (both ACAs arising from a single trunk) creates increased risk for:',
    options: [
      'Brainstem stroke',
      'Bilateral ACA territory infarction from single vessel occlusion',
      'MCA territory stroke',
      'Posterior circulation stroke',
      'Spinal cord infarction'
    ],
    correctAnswer: 1,
    explanation: 'An azygos ACA is a variant where both hemispheres are supplied by a single ACA trunk beyond a fused A2 segment. Occlusion of this single vessel can cause catastrophic bilateral medial frontal infarction.'
  }
];

// Artera cerebrală mijlocie
export const middleCerebralArteryQuestions: Question[] = [
  {
    id: 'mca-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The middle cerebral artery is the largest branch of which vessel?',
    options: [
      'Vertebral artery',
      'Internal carotid artery',
      'Basilar artery',
      'External carotid artery',
      'Anterior cerebral artery'
    ],
    correctAnswer: 1,
    explanation: 'The MCA is the larger of the two terminal branches of the internal carotid artery and receives approximately 80% of the carotid blood flow. It supplies most of the lateral cerebral hemisphere.'
  },
  {
    id: 'mca-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The M1 segment of the MCA runs:',
    options: [
      'Vertically upward',
      'Horizontally in the lateral (Sylvian) fissure',
      'Posteriorly around the brainstem',
      'Medially toward the midline',
      'Inferiorly toward the temporal pole'
    ],
    correctAnswer: 1,
    explanation: 'The M1 (horizontal/sphenoidal) segment runs laterally from the ICA bifurcation in the lateral sulcus. It gives off the lenticulostriate arteries before bifurcating or trifurcating at the genu.'
  },
  {
    id: 'mca-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The lenticulostriate arteries arise from:',
    options: [
      'Posterior cerebral artery',
      'M1 segment of the middle cerebral artery',
      'Anterior cerebral artery',
      'Basilar artery',
      'Posterior communicating artery'
    ],
    correctAnswer: 1,
    explanation: 'The lenticulostriate arteries (medial and lateral groups) arise from the M1 segment of the MCA and penetrate the anterior perforated substance to supply the basal ganglia, internal capsule, and corona radiata.'
  },
  {
    id: 'mca-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The MCA divides into superior and inferior divisions that supply different functions. The superior division supplies:',
    options: [
      'Wernicke area and visual cortex',
      'Motor cortex, sensory cortex, and Broca area (frontal and anterior parietal)',
      'Occipital lobe',
      'Medial temporal lobe',
      'Cerebellum'
    ],
    correctAnswer: 1,
    explanation: 'The MCA superior division supplies the frontal and anterior parietal opercula, including motor and sensory cortex (face/arm) and Broca area. Stroke causes contralateral face/arm weakness and expressive aphasia (in dominant hemisphere).'
  },
  {
    id: 'mca-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The MCA inferior division supplies:',
    options: [
      'Motor cortex and Broca area',
      'Temporal lobe and posterior parietal lobe including Wernicke area',
      'Medial frontal cortex',
      'Occipital lobe',
      'Cerebellum'
    ],
    correctAnswer: 1,
    explanation: 'The MCA inferior division supplies the temporal lobe (including Wernicke area) and posterior parietal lobe (angular and supramarginal gyri). Stroke causes Wernicke aphasia and may cause hemineglect (non-dominant).'
  },
  {
    id: 'mca-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'A lacunar infarct in the lenticulostriate territory typically causes:',
    options: [
      'Visual field defect',
      'Pure motor hemiparesis or sensorimotor stroke',
      'Aphasia without weakness',
      'Isolated vertigo',
      'Memory loss'
    ],
    correctAnswer: 1,
    explanation: 'Lenticulostriate artery occlusion causes small (lacunar) infarcts in the basal ganglia or internal capsule. Classic lacunar syndromes include pure motor hemiparesis and sensorimotor stroke (when thalamocortical fibers involved).'
  },
  {
    id: 'mca-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The insular cortex is supplied primarily by:',
    options: [
      'Anterior cerebral artery',
      'MCA (M2 insular branches)',
      'Posterior cerebral artery',
      'PICA',
      'Anterior choroidal artery'
    ],
    correctAnswer: 1,
    explanation: 'The insula is supplied by insular branches from the M2 segment of the MCA. The MCA passes through the lateral sulcus in close relationship to the insular cortex.'
  },
  {
    id: 'mca-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A large MCA territory infarct with mass effect may require hemicraniectomy because:',
    options: [
      'It improves blood flow',
      'Malignant cerebral edema can cause fatal herniation',
      'It prevents infection',
      'It restores speech function',
      'It treats the underlying cause'
    ],
    correctAnswer: 1,
    explanation: 'Large MCA territory infarcts (malignant MCA syndrome) cause massive cerebral edema peaking at 2-5 days. Herniation can be fatal. Decompressive hemicraniectomy reduces mortality in selected patients under 60 years old.'
  },
  {
    id: 'mca-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Global aphasia (loss of both expression and comprehension) with right hemiplegia indicates:',
    options: [
      'Right MCA stroke',
      'Large left MCA stroke affecting both Broca and Wernicke areas',
      'Posterior cerebral artery stroke',
      'Cerebellar stroke',
      'Bilateral ACA strokes'
    ],
    correctAnswer: 1,
    explanation: 'Global aphasia with dense right hemiplegia results from large left MCA territory infarction affecting both the superior division (Broca area, motor cortex) and inferior division (Wernicke area). This typically indicates proximal M1 or ICA occlusion.'
  },
  {
    id: 'mca-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A right MCA territory stroke causes left hemispatial neglect because:',
    options: [
      'The left hemisphere controls attention to right space only',
      'The right parietal lobe attends to both hemispaces while the left attends mainly to right',
      'The left visual cortex is damaged',
      'The corpus callosum is affected',
      'The cerebellum coordinates attention'
    ],
    correctAnswer: 1,
    explanation: 'Hemispatial neglect is more common and severe with right hemisphere lesions because the right parietal lobe attends to both hemispaces while the left attends primarily to the right. Left parietal damage is compensated by the right, but not vice versa.'
  }
];

// Artera cerebrală posterioară
export const posteriorCerebralArteryQuestions: Question[] = [
  {
    id: 'pca-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The posterior cerebral artery is the terminal branch of which vessel?',
    options: [
      'Internal carotid artery',
      'Basilar artery',
      'Middle cerebral artery',
      'Anterior cerebral artery',
      'Vertebral artery'
    ],
    correctAnswer: 1,
    explanation: 'The PCAs are the terminal bifurcation branches of the basilar artery. The P1 (precommunicating) segment extends from the basilar bifurcation to the posterior communicating artery.'
  },
  {
    id: 'pca-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The posterior cerebral artery primarily supplies:',
    options: [
      'Frontal lobe',
      'Occipital lobe, inferior temporal lobe, and posterior thalamus',
      'Lateral parietal lobe',
      'Cerebellum',
      'Brainstem'
    ],
    correctAnswer: 1,
    explanation: 'The PCA supplies the occipital lobe (including primary visual cortex), inferior and medial temporal lobe, posterior thalamus (via thalamogeniculate branches), and midbrain (via perforating branches).'
  },
  {
    id: 'pca-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The calcarine artery is a branch of the PCA that supplies:',
    options: [
      'Frontal lobe',
      'Primary visual cortex along the calcarine sulcus',
      'Temporal pole',
      'Motor cortex',
      'Hippocampus'
    ],
    correctAnswer: 1,
    explanation: 'The calcarine artery is a cortical branch of the PCA that runs along the calcarine sulcus and supplies the primary visual cortex (V1). Occlusion causes contralateral homonymous hemianopia.'
  },
  {
    id: 'pca-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The P1 segment of the PCA gives off which important perforating branches?',
    options: [
      'Lenticulostriate arteries',
      'Thalamoperforating (posterior thalamosubthalamic) arteries',
      'Anterior choroidal arteries',
      'Recurrent artery of Heubner',
      'Pontine perforators'
    ],
    correctAnswer: 1,
    explanation: 'The P1 segment gives off thalamoperforating arteries (posterior thalamosubthalamic paramedian arteries) that supply the medial thalamus, subthalamus, and rostral midbrain via the posterior perforated substance.'
  },
  {
    id: 'pca-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The temporal branches of the PCA supply which structures important for memory?',
    options: [
      'Primary motor cortex',
      'Hippocampus and parahippocampal gyrus',
      'Broca area',
      'Wernicke area',
      'Precentral gyrus'
    ],
    correctAnswer: 1,
    explanation: 'The inferior temporal branches of the PCA supply the hippocampus, parahippocampal gyrus, and fusiform gyrus. Bilateral PCA infarction can cause severe amnesia from hippocampal damage.'
  },
  {
    id: 'pca-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Posterior cerebral artery territory stroke typically causes:',
    options: [
      'Hemiparesis',
      'Contralateral homonymous hemianopia with macular sparing',
      'Expressive aphasia',
      'Hearing loss',
      'Ataxia'
    ],
    correctAnswer: 1,
    explanation: 'PCA stroke causes contralateral homonymous hemianopia from visual cortex ischemia. Macular sparing may occur because the occipital pole often has dual supply from MCA via collaterals.'
  },
  {
    id: 'pca-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The splenium of the corpus callosum receives blood supply from:',
    options: [
      'Anterior cerebral artery only',
      'Posterior cerebral artery (posterior pericallosal branches)',
      'Middle cerebral artery only',
      'Basilar artery directly',
      'Vertebral artery'
    ],
    correctAnswer: 1,
    explanation: 'The splenium has dual supply from the ACA (pericallosal artery) and PCA (posterior pericallosal/splenial branches). PCA stroke affecting the splenium plus left occipital cortex causes alexia without agraphia.'
  },
  {
    id: 'pca-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Bilateral PCA territory infarction causes:',
    options: [
      'Bilateral arm weakness',
      'Cortical blindness with possible Anton syndrome',
      'Global aphasia',
      'Bilateral facial weakness',
      'Ataxia only'
    ],
    correctAnswer: 1,
    explanation: 'Bilateral PCA stroke causes cortical blindness from bilateral visual cortex infarction. Anton syndrome (visual anosognosia) may occur where patients deny blindness and confabulate visual experiences.'
  },
  {
    id: 'pca-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Alexia without agraphia (pure alexia) results from:',
    options: [
      'Broca area lesion',
      'Left PCA stroke affecting visual cortex and splenium',
      'Wernicke area lesion',
      'Right parietal lesion',
      'Bilateral frontal lesions'
    ],
    correctAnswer: 1,
    explanation: 'Alexia without agraphia occurs when left PCA stroke destroys the left visual cortex (causing right hemianopia) and splenium (disconnecting visual input from the intact right hemisphere from reaching left language areas). Patients cannot read but can write.'
  },
  {
    id: 'pca-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A fetal-type posterior cerebral artery (fetal PCA) means the PCA is primarily supplied by:',
    options: [
      'Basilar artery as usual',
      'The internal carotid artery via a large posterior communicating artery',
      'The anterior cerebral artery',
      'The middle cerebral artery',
      'The vertebral artery directly'
    ],
    correctAnswer: 1,
    explanation: 'Fetal-type PCA (present in 20-30%) occurs when the PComm is larger than the P1 segment, so the PCA receives blood primarily from the ICA rather than the basilar. ICA occlusion in these patients may cause PCA territory stroke.'
  }
];
