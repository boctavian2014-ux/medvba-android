import type { Question } from './questions';

// Măduva spinării – conformație externă, raporturi
export const spinalCordExternalQuestions: Question[] = [
  {
    id: 'sc-ext-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'At which vertebral level does the spinal cord typically terminate in adults?',
    options: [
      'T12 vertebra',
      'L1-L2 vertebral level',
      'L3-L4 vertebral level',
      'S1 vertebra',
      'L5 vertebra'
    ],
    correctAnswer: 1,
    explanation: 'The spinal cord in adults typically terminates at the level of the L1-L2 intervertebral disc, forming the conus medullaris. This is clinically significant for lumbar puncture, which is safely performed below L3 to avoid spinal cord injury.'
  },
  {
    id: 'sc-ext-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which of the following represents the cervical enlargement of the spinal cord?',
    options: [
      'C1-C4 segments',
      'C4-T1 segments',
      'T2-T6 segments',
      'L1-L3 segments',
      'S1-S3 segments'
    ],
    correctAnswer: 1,
    explanation: 'The cervical enlargement extends from C4 to T1 spinal segments and corresponds to the origin of the brachial plexus, which innervates the upper limbs. The increased neural tissue reflects the complex motor and sensory innervation required for upper limb function.'
  },
  {
    id: 'sc-ext-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The filum terminale is a continuation of which meningeal layer?',
    options: [
      'Dura mater only',
      'Arachnoid mater only',
      'Pia mater',
      'Epidural fat',
      'Posterior longitudinal ligament'
    ],
    correctAnswer: 2,
    explanation: 'The filum terminale is a slender filament of pia mater that extends from the apex of the conus medullaris to the dorsum of the coccyx, anchoring the spinal cord inferiorly within the vertebral canal.'
  },
  {
    id: 'sc-ext-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which fissure of the spinal cord contains the anterior spinal artery?',
    options: [
      'Posterior median sulcus',
      'Posterolateral sulcus',
      'Anterior median fissure',
      'Anterolateral sulcus',
      'Central canal'
    ],
    correctAnswer: 2,
    explanation: 'The anterior median fissure is a deep longitudinal groove on the ventral surface of the spinal cord that contains the anterior spinal artery and its branches. This artery supplies the anterior two-thirds of the spinal cord.'
  },
  {
    id: 'sc-ext-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The dorsal root ganglia are located in which anatomical position?',
    options: [
      'Within the spinal cord substance',
      'In the intervertebral foramina',
      'Within the vertebral canal posterior to the cord',
      'Anterior to the vertebral bodies',
      'Within the dura mater sleeve'
    ],
    correctAnswer: 1,
    explanation: 'Dorsal root ganglia, containing the cell bodies of primary sensory neurons, are located within the intervertebral foramina. Their position makes them vulnerable to compression in conditions such as disc herniation or foraminal stenosis.'
  },
  {
    id: 'sc-ext-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which structure forms the lateral boundary of the cauda equina within the lumbar cistern?',
    options: [
      'Conus medullaris',
      'Filum terminale',
      'Dural sac (thecal sac)',
      'Posterior longitudinal ligament',
      'Ligamentum flavum'
    ],
    correctAnswer: 2,
    explanation: 'The cauda equina, comprising the lumbar and sacral nerve roots, is contained within the dural sac (thecal sac) filled with cerebrospinal fluid. The dural sac typically terminates at the S2 vertebral level.'
  },
  {
    id: 'sc-ext-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The lumbosacral enlargement of the spinal cord corresponds to which segments?',
    options: [
      'T10-L2',
      'L1-S3',
      'L2-S2',
      'T12-L4',
      'L4-S1'
    ],
    correctAnswer: 1,
    explanation: 'The lumbosacral enlargement extends from L1 to S3 spinal segments and gives rise to the lumbar and sacral plexuses innervating the lower limbs. Like the cervical enlargement, it reflects increased neural tissue for limb innervation.'
  },
  {
    id: 'sc-ext-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient presents with sudden onset of bilateral lower limb weakness, urinary retention, and loss of pain/temperature sensation below T10, but preserved proprioception and vibration sense. Which vascular territory is most likely affected?',
    options: [
      'Posterior spinal artery territory',
      'Anterior spinal artery territory',
      'Artery of Adamkiewicz only',
      'Radicular arteries bilaterally',
      'Vertebral artery territory'
    ],
    correctAnswer: 1,
    explanation: 'Anterior spinal artery syndrome presents with loss of motor function (corticospinal tracts), pain and temperature sensation (spinothalamic tracts), and autonomic dysfunction, while sparing dorsal column functions (proprioception, vibration). The anterior spinal artery supplies the anterior two-thirds of the cord.'
  },
  {
    id: 'sc-ext-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The artery of Adamkiewicz (arteria radicularis magna) most commonly arises from which level and enters on which side?',
    options: [
      'T5-T8, right side',
      'T9-L2, left side',
      'L3-L5, right side',
      'T1-T4, left side',
      'L2-L4, bilateral'
    ],
    correctAnswer: 1,
    explanation: 'The artery of Adamkiewicz typically arises from a left posterior intercostal or lumbar artery between T9-L2 (most often T9-T12). It is the major blood supply to the lower two-thirds of the spinal cord. Damage during thoracoabdominal surgery can cause paraplegia.'
  },
  {
    id: 'sc-ext-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'In a patient with cauda equina syndrome, which combination of findings is most characteristic?',
    options: [
      'Hyperreflexia, spastic paralysis, and Babinski sign',
      'Saddle anesthesia, areflexic bladder, and lower motor neuron weakness',
      'Dissociated sensory loss with preserved motor function',
      'Unilateral radicular pain without motor deficit',
      'Upper motor neuron signs with preserved bladder function'
    ],
    correctAnswer: 1,
    explanation: 'Cauda equina syndrome involves compression of the lumbosacral nerve roots below the conus medullaris, producing lower motor neuron signs: flaccid weakness, areflexia, saddle anesthesia (S2-S5 dermatomes), and bladder/bowel dysfunction. This is a surgical emergency requiring prompt decompression.'
  }
];

// Trunchiul cerebral – conformație externă și raporturi
export const brainstemExternalQuestions: Question[] = [
  {
    id: 'bs-ext-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which cranial nerves emerge from the cerebellopontine angle?',
    options: [
      'CN III and CN IV',
      'CN VII and CN VIII',
      'CN IX and CN X',
      'CN XI and CN XII',
      'CN V and CN VI'
    ],
    correctAnswer: 1,
    explanation: 'The facial (CN VII) and vestibulocochlear (CN VIII) nerves emerge at the cerebellopontine angle, the junction between the pons, medulla, and cerebellum. Acoustic neuromas commonly arise here from the vestibular division of CN VIII.'
  },
  {
    id: 'bs-ext-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The pyramids are prominent longitudinal elevations on the ventral surface of which brainstem structure?',
    options: [
      'Midbrain',
      'Pons',
      'Medulla oblongata',
      'Cerebellum',
      'Diencephalon'
    ],
    correctAnswer: 2,
    explanation: 'The pyramids are paired longitudinal elevations on the ventral surface of the medulla oblongata, formed by the descending corticospinal tracts. At the caudal medulla, most fibers decussate (pyramidal decussation) to the contralateral side.'
  },
  {
    id: 'bs-ext-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The superior and inferior colliculi are located on the dorsal surface of which structure?',
    options: [
      'Pons',
      'Medulla',
      'Midbrain (tectum)',
      'Thalamus',
      'Hypothalamus'
    ],
    correctAnswer: 2,
    explanation: 'The superior and inferior colliculi form the tectum (roof) of the midbrain. The superior colliculi are involved in visual reflexes and eye movements, while the inferior colliculi are relay stations in the auditory pathway.'
  },
  {
    id: 'bs-ext-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which cranial nerve emerges from the interpeduncular fossa?',
    options: [
      'Trochlear nerve (CN IV)',
      'Abducens nerve (CN VI)',
      'Oculomotor nerve (CN III)',
      'Trigeminal nerve (CN V)',
      'Facial nerve (CN VII)'
    ],
    correctAnswer: 2,
    explanation: 'The oculomotor nerve (CN III) emerges from the interpeduncular fossa, located between the cerebral peduncles on the ventral midbrain. It is the only cranial nerve to exit from this location and is vulnerable to compression by posterior communicating artery aneurysms.'
  },
  {
    id: 'bs-ext-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The olive is a prominent oval elevation on the lateral surface of which brainstem region?',
    options: [
      'Midbrain tegmentum',
      'Pontine base',
      'Medulla oblongata',
      'Superior cerebellar peduncle',
      'Cerebral peduncle'
    ],
    correctAnswer: 2,
    explanation: 'The olive is a prominent oval swelling on the lateral surface of the medulla, produced by the underlying inferior olivary nucleus. This nucleus is a major source of climbing fibers to the cerebellar cortex and is essential for motor learning.'
  },
  {
    id: 'bs-ext-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which structure connects the cerebellum to the midbrain?',
    options: [
      'Inferior cerebellar peduncle',
      'Middle cerebellar peduncle',
      'Superior cerebellar peduncle',
      'Cerebral peduncle',
      'Pyramid'
    ],
    correctAnswer: 2,
    explanation: 'The superior cerebellar peduncle (brachium conjunctivum) connects the cerebellum to the midbrain and contains predominantly efferent fibers from the dentate nucleus projecting to the red nucleus and thalamus.'
  },
  {
    id: 'bs-ext-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The trochlear nerve (CN IV) has which unique characteristic among cranial nerves?',
    options: [
      'It is the only purely sensory cranial nerve',
      'It is the only nerve to emerge from the dorsal brainstem',
      'It is the largest cranial nerve',
      'It has the shortest intracranial course',
      'It innervates multiple extraocular muscles'
    ],
    correctAnswer: 1,
    explanation: 'The trochlear nerve is unique in being the only cranial nerve to emerge from the dorsal aspect of the brainstem (from the inferior colliculus level) and the only one whose fibers decussate completely within the brainstem before exit.'
  },
  {
    id: 'bs-ext-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient presents with ipsilateral facial paralysis, loss of taste from the anterior two-thirds of the tongue, hyperacusis, and contralateral hemiplegia. Where is the lesion most likely located?',
    options: [
      'Internal capsule',
      'Cerebellopontine angle',
      'Caudal pons at the facial colliculus',
      'Medullary pyramid',
      'Midbrain cerebral peduncle'
    ],
    correctAnswer: 2,
    explanation: 'This presentation describes Millard-Gubler syndrome, a caudal pontine lesion affecting the facial nerve nucleus/fibers (LMN facial palsy, taste loss, hyperacusis from stapedius paralysis) and the corticospinal tract before decussation (contralateral hemiplegia).'
  },
  {
    id: 'bs-ext-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with a lesion at the pontomedullary junction presents with ipsilateral lateral rectus palsy and contralateral hemiplegia. Which syndrome does this represent?',
    options: [
      'Weber syndrome',
      'Benedikt syndrome',
      'Foville syndrome',
      'Wallenberg syndrome',
      'Parinaud syndrome'
    ],
    correctAnswer: 2,
    explanation: 'Foville syndrome results from a lesion at the pontomedullary junction affecting the abducens nerve (CN VI) nucleus or its fibers (ipsilateral lateral rectus palsy) and the corticospinal tract (contralateral hemiplegia). Horizontal gaze palsy toward the lesion may also occur.'
  },
  {
    id: 'bs-ext-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A midbrain lesion produces ipsilateral oculomotor palsy with contralateral tremor and ataxia. Which structure, in addition to CN III, is involved?',
    options: [
      'Substantia nigra',
      'Red nucleus',
      'Superior colliculus',
      'Periaqueductal gray',
      'Inferior olivary nucleus'
    ],
    correctAnswer: 1,
    explanation: 'This describes Benedikt syndrome, involving the oculomotor nerve fascicles (ipsilateral CN III palsy) and the red nucleus (contralateral tremor and cerebellar ataxia due to involvement of cerebellar efferents). It typically results from paramedian midbrain infarction.'
  }
];

// Cerebelul – conformaţie externă, raporturi
export const cerebellumExternalQuestions: Question[] = [
  {
    id: 'cb-ext-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which structure separates the cerebellar hemispheres from the vermis?',
    options: [
      'Primary fissure',
      'Horizontal fissure',
      'Paravermal sulcus',
      'Posterolateral fissure',
      'Prepyramidal fissure'
    ],
    correctAnswer: 2,
    explanation: 'The paravermal (paramedian) sulcus separates the vermis from the cerebellar hemispheres on each side. The vermis is the midline structure connecting the two hemispheres and is phylogenetically older.'
  },
  {
    id: 'cb-ext-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The cerebellum is connected to the brainstem by how many pairs of peduncles?',
    options: [
      'One pair',
      'Two pairs',
      'Three pairs',
      'Four pairs',
      'Five pairs'
    ],
    correctAnswer: 2,
    explanation: 'Three pairs of cerebellar peduncles connect the cerebellum to the brainstem: superior (to midbrain), middle (to pons), and inferior (to medulla). Each carries distinct afferent and efferent fiber systems.'
  },
  {
    id: 'cb-ext-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which fissure divides the cerebellum into anterior and posterior lobes?',
    options: [
      'Horizontal fissure',
      'Primary fissure',
      'Posterolateral fissure',
      'Secondary fissure',
      'Prepyramidal fissure'
    ],
    correctAnswer: 1,
    explanation: 'The primary fissure is a deep transverse groove on the superior cerebellar surface that divides the cerebellum into anterior and posterior lobes. It is the first fissure to appear during cerebellar development.'
  },
  {
    id: 'cb-ext-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The flocculonodular lobe is separated from the corpus cerebelli by which fissure?',
    options: [
      'Primary fissure',
      'Horizontal fissure',
      'Posterolateral fissure',
      'Prepyramidal fissure',
      'Secondary fissure'
    ],
    correctAnswer: 2,
    explanation: 'The posterolateral fissure separates the phylogenetically oldest part of the cerebellum (archicerebellum/flocculonodular lobe) from the corpus cerebelli. The flocculonodular lobe is primarily involved in vestibular function and balance.'
  },
  {
    id: 'cb-ext-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which structure forms the roof of the fourth ventricle?',
    options: [
      'Pons',
      'Medulla',
      'Cerebellum (superior and inferior medullary vela)',
      'Thalamus',
      'Midbrain tectum'
    ],
    correctAnswer: 2,
    explanation: 'The roof of the fourth ventricle is formed by the superior medullary velum (between superior cerebellar peduncles) and the inferior medullary velum, along with the tela choroidea. The cerebellum lies dorsal to this roof.'
  },
  {
    id: 'cb-ext-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The tonsils of the cerebellum are located in which region?',
    options: [
      'Anterior lobe, adjacent to the primary fissure',
      'Posterior lobe, on the inferior surface near the foramen magnum',
      'Superior surface, lateral to the vermis',
      'Within the flocculonodular lobe',
      'Anterior to the middle cerebellar peduncle'
    ],
    correctAnswer: 1,
    explanation: 'The cerebellar tonsils are rounded lobules on the inferior surface of the cerebellar hemispheres, lying adjacent to the foramen magnum. Tonsillar herniation through the foramen magnum is a life-threatening complication of increased intracranial pressure.'
  },
  {
    id: 'cb-ext-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The middle cerebellar peduncle receives fibers predominantly from which source?',
    options: [
      'Inferior olivary nucleus',
      'Vestibular nuclei',
      'Pontine nuclei (corticopontocerebellar pathway)',
      'Spinal cord (spinocerebellar tracts)',
      'Red nucleus'
    ],
    correctAnswer: 2,
    explanation: 'The middle cerebellar peduncle (brachium pontis) is the largest peduncle and contains predominantly afferent fibers from the contralateral pontine nuclei, forming part of the corticopontocerebellar pathway that conveys cortical information to the cerebellum.'
  },
  {
    id: 'cb-ext-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient presents with severe truncal ataxia, inability to sit unsupported, and nystagmus, but relatively preserved limb coordination. Which cerebellar region is most likely affected?',
    options: [
      'Lateral cerebellar hemisphere (neocerebellum)',
      'Flocculonodular lobe and vermis (vestibulocerebellum)',
      'Anterior lobe only',
      'Dentate nucleus',
      'Superior cerebellar peduncle'
    ],
    correctAnswer: 1,
    explanation: 'Lesions of the flocculonodular lobe and vermis (vestibulocerebellum/archicerebellum) produce truncal ataxia with preserved limb coordination, as these structures primarily control axial muscles and balance. This pattern is classic for midline cerebellar tumors such as medulloblastoma in children.'
  },
  {
    id: 'cb-ext-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'In Arnold-Chiari type I malformation, which cerebellar structure herniates through the foramen magnum?',
    options: [
      'Cerebellar vermis',
      'Flocculus',
      'Cerebellar tonsils',
      'Dentate nucleus',
      'Superior cerebellar peduncle'
    ],
    correctAnswer: 2,
    explanation: 'Chiari I malformation is characterized by downward herniation of the cerebellar tonsils (>5mm) through the foramen magnum, potentially compressing the cervicomedullary junction and obstructing CSF flow. Patients may present with headaches, neck pain, and syringomyelia.'
  },
  {
    id: 'cb-ext-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A posterior fossa tumor compresses the inferior cerebellar peduncle. Which clinical finding would you most expect?',
    options: [
      'Intention tremor of the ipsilateral limbs',
      'Ipsilateral ataxia and impaired vestibular function',
      'Contralateral hemiparesis',
      'Bilateral lower limb spasticity',
      'Loss of pain and temperature sensation'
    ],
    correctAnswer: 1,
    explanation: 'The inferior cerebellar peduncle (restiform body) carries spinocerebellar afferents and vestibular inputs to the cerebellum. Compression produces ipsilateral ataxia (loss of proprioceptive input) and vestibular dysfunction (vertigo, nystagmus) from interruption of vestibulocerebellar connections.'
  }
];

// Cerebelul – lobulația
export const cerebellumLobulationQuestions: Question[] = [
  {
    id: 'cb-lob-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The lingula of the cerebellum is part of which lobe?',
    options: [
      'Posterior lobe',
      'Anterior lobe',
      'Flocculonodular lobe',
      'It is part of the vermis only',
      'It is a separate lobe'
    ],
    correctAnswer: 1,
    explanation: 'The lingula is the most anterior lobule of the cerebellar vermis and belongs to the anterior lobe. It is attached to the superior medullary velum and receives vestibular and spinocerebellar inputs.'
  },
  {
    id: 'cb-lob-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which lobule of the vermis is most closely associated with vestibular function?',
    options: [
      'Culmen',
      'Declive',
      'Nodulus',
      'Pyramid',
      'Uvula'
    ],
    correctAnswer: 2,
    explanation: 'The nodulus is the vermian portion of the flocculonodular lobe (vestibulocerebellum) and is primarily involved in vestibular function, balance, and vestibulo-ocular reflexes. Together with the flocculi, it forms the archicerebellum.'
  },
  {
    id: 'cb-lob-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The phylogenetically newest part of the cerebellum is the:',
    options: [
      'Archicerebellum (flocculonodular lobe)',
      'Paleocerebellum (anterior lobe)',
      'Neocerebellum (posterior lobe hemispheres)',
      'Vermis',
      'Fastigial region'
    ],
    correctAnswer: 2,
    explanation: 'The neocerebellum (cerebrocerebellum), comprising the lateral parts of the posterior lobe hemispheres, is phylogenetically newest and is highly developed in humans. It receives input from the cerebral cortex via pontine nuclei and is involved in planning and coordination of skilled movements.'
  },
  {
    id: 'cb-lob-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The dentate nucleus primarily receives input from and projects to structures associated with which cerebellar functional division?',
    options: [
      'Vestibulocerebellum',
      'Spinocerebellum',
      'Cerebrocerebellum (neocerebellum)',
      'Archicerebellum',
      'Paleocerebellum only'
    ],
    correctAnswer: 2,
    explanation: 'The dentate nucleus is the largest of the deep cerebellar nuclei and is primarily associated with the cerebrocerebellum (lateral hemispheres). It receives input from the lateral cerebellar cortex and projects via the superior cerebellar peduncle to the thalamus and red nucleus.'
  },
  {
    id: 'cb-lob-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The fastigial nucleus is primarily associated with which functional division of the cerebellum?',
    options: [
      'Cerebrocerebellum',
      'Vestibulocerebellum',
      'Lateral hemisphere only',
      'Dentate-thalamic system',
      'Corticopontocerebellar pathway'
    ],
    correctAnswer: 1,
    explanation: 'The fastigial nucleus is the most medial deep cerebellar nucleus and receives input from the vermis and flocculonodular lobe. It projects to vestibular nuclei and reticular formation, playing a key role in balance and axial motor control.'
  },
  {
    id: 'cb-lob-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which cerebellar lobule is also known as the "anterior quadrangular lobule"?',
    options: [
      'Lobulus simplex',
      'Lobule HV (culmen)',
      'Lobule HVI',
      'Lobule HVII',
      'Tonsil'
    ],
    correctAnswer: 1,
    explanation: 'The culmen (lobule HV) is also called the anterior quadrangular lobule and is part of the anterior lobe of the cerebellum. It lies between the central lobule and the primary fissure and is involved in spinocerebellar functions.'
  },
  {
    id: 'cb-lob-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The interposed nuclei (emboliform and globose) are primarily associated with which cerebellar zone?',
    options: [
      'Lateral (hemispheric) zone',
      'Intermediate (paravermal) zone',
      'Medial (vermal) zone',
      'Flocculonodular zone',
      'Dentate nuclear zone'
    ],
    correctAnswer: 1,
    explanation: 'The interposed nuclei (emboliform and globose, collectively nucleus interpositus) receive input from the paravermal (intermediate) zone of the cerebellar cortex. They project to the red nucleus and thalamus, influencing limb motor control.'
  },
  {
    id: 'cb-lob-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with a midline posterior fossa tumor develops wide-based gait ataxia but can perform finger-to-nose testing without dysmetria. Which cerebellar structure is most likely affected?',
    options: [
      'Dentate nucleus',
      'Cerebellar hemispheres (neocerebellum)',
      'Vermis (spinocerebellum/paleocerebellum)',
      'Flocculus bilaterally',
      'Superior cerebellar peduncles'
    ],
    correctAnswer: 2,
    explanation: 'The vermis (spinocerebellum) controls axial and proximal muscles. Midline lesions produce truncal and gait ataxia while sparing limb coordination. This is a classic presentation of midline tumors such as medulloblastoma in children, where appendicular coordination remains relatively intact.'
  },
  {
    id: 'cb-lob-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Lesion of the lateral cerebellar hemisphere produces which characteristic clinical finding?',
    options: [
      'Truncal ataxia with preserved limb coordination',
      'Ipsilateral intention tremor and dysmetria',
      'Contralateral hemiparesis',
      'Bilateral vestibular dysfunction',
      'Axial hypotonia only'
    ],
    correctAnswer: 1,
    explanation: 'Lateral cerebellar hemisphere (neocerebellum) lesions produce ipsilateral limb ataxia, including intention tremor, dysmetria, and dysdiadochokinesia. The ipsilateral nature reflects the double-crossing of cerebellar pathways (cerebello-thalamo-cortical and corticospinal).'
  },
  {
    id: 'cb-lob-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Which cerebellar deep nucleus projects directly to vestibular nuclei without synapsing in the thalamus?',
    options: [
      'Dentate nucleus',
      'Emboliform nucleus',
      'Globose nucleus',
      'Fastigial nucleus',
      'All deep nuclei project through thalamus'
    ],
    correctAnswer: 3,
    explanation: 'The fastigial nucleus uniquely projects directly to the vestibular nuclei and reticular formation via the juxtarestiform body, bypassing the thalamus. This allows rapid modulation of vestibulospinal and reticulospinal systems for balance and postural control.'
  }
];
