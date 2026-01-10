import type { Question } from './questions';

// Talamus – conformație externă, raporturi
export const thalamusExternalQuestions: Question[] = [
  {
    id: 'thal-ext-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The thalamus forms the lateral wall of which ventricular cavity?',
    options: [
      'Lateral ventricle',
      'Third ventricle',
      'Fourth ventricle',
      'Cerebral aqueduct',
      'Central canal'
    ],
    correctAnswer: 1,
    explanation: 'The medial surface of the thalamus forms the lateral wall of the third ventricle. The two thalami are often connected across the third ventricle by the interthalamic adhesion (massa intermedia), though this connection is absent in approximately 20-30% of individuals.'
  },
  {
    id: 'thal-ext-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The pulvinar is located at which pole of the thalamus?',
    options: [
      'Anterior pole',
      'Posterior pole',
      'Superior surface',
      'Inferior surface',
      'Medial surface'
    ],
    correctAnswer: 1,
    explanation: 'The pulvinar is the large posterior expansion of the thalamus that overhangs the superior colliculus. It is the largest thalamic nucleus in humans and is primarily involved in visual attention and integration of sensory information.'
  },
  {
    id: 'thal-ext-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which structure separates the thalamus from the caudate nucleus?',
    options: [
      'Internal capsule',
      'External capsule',
      'Stria terminalis and thalamostriate vein',
      'Corpus callosum',
      'Fornix'
    ],
    correctAnswer: 2,
    explanation: 'The stria terminalis and thalamostriate vein run in the groove between the thalamus and the caudate nucleus on the floor of the lateral ventricle. This sulcus terminalis marks the junction between diencephalon and telencephalon.'
  },
  {
    id: 'thal-ext-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The anterior tubercle of the thalamus contains which nucleus?',
    options: [
      'Ventral posterolateral nucleus',
      'Medial dorsal nucleus',
      'Anterior nuclear group',
      'Pulvinar',
      'Centromedian nucleus'
    ],
    correctAnswer: 2,
    explanation: 'The anterior tubercle is a prominence at the anterior end of the thalamus formed by the anterior nuclear group. These nuclei are part of the Papez circuit, receiving input from the mammillary bodies via the mammillothalamic tract and projecting to the cingulate gyrus.'
  },
  {
    id: 'thal-ext-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which thalamic surface is in direct contact with the posterior limb of the internal capsule?',
    options: [
      'Medial surface',
      'Superior surface',
      'Lateral surface',
      'Inferior surface',
      'Anterior surface'
    ],
    correctAnswer: 2,
    explanation: 'The lateral surface of the thalamus is in direct contact with the posterior limb of the internal capsule, which separates it from the lentiform nucleus. This close relationship makes thalamic lesions often associated with capsular involvement.'
  },
  {
    id: 'thal-ext-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The interthalamic adhesion (massa intermedia) connects the two thalami across which structure?',
    options: [
      'Lateral ventricle',
      'Third ventricle',
      'Fourth ventricle',
      'Septum pellucidum',
      'Corpus callosum'
    ],
    correctAnswer: 1,
    explanation: 'The interthalamic adhesion crosses the third ventricle, connecting the medial surfaces of the two thalami. It contains gray matter but its functional significance is unclear, and it is absent in 20-30% of brains without apparent clinical consequence.'
  },
  {
    id: 'thal-ext-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The metathalamus consists of which structures?',
    options: [
      'Pulvinar and lateral posterior nucleus',
      'Medial and lateral geniculate bodies',
      'Anterior and medial nuclear groups',
      'Centromedian and parafascicular nuclei',
      'Ventral anterior and ventral lateral nuclei'
    ],
    correctAnswer: 1,
    explanation: 'The metathalamus comprises the medial geniculate body (auditory relay) and lateral geniculate body (visual relay). These nuclei project to primary auditory and visual cortices respectively and are sometimes considered part of the posterior thalamus.'
  },
  {
    id: 'thal-ext-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient presents with contralateral hemianesthesia followed by severe, burning pain (thalamic pain syndrome). Which thalamic nucleus is most likely affected?',
    options: [
      'Anterior nucleus',
      'Medial dorsal nucleus',
      'Ventral posterolateral nucleus',
      'Pulvinar',
      'Centromedian nucleus'
    ],
    correctAnswer: 2,
    explanation: 'Dejerine-Roussy syndrome (thalamic pain syndrome) results from lesions of the ventral posterolateral (VPL) nucleus, which relays somatosensory information from the body. Initial hemianesthesia is followed by spontaneous, often excruciating pain, typically from posterior cerebral artery infarction.'
  },
  {
    id: 'thal-ext-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with a thalamic stroke presents with memory impairment, personality changes, and decreased motivation. Which nucleus is most likely involved?',
    options: [
      'Ventral posterolateral nucleus',
      'Lateral geniculate body',
      'Medial dorsal (mediodorsal) nucleus',
      'Ventral lateral nucleus',
      'Pulvinar'
    ],
    correctAnswer: 2,
    explanation: 'The medial dorsal (mediodorsal) nucleus has extensive reciprocal connections with the prefrontal cortex and is involved in memory, executive function, and emotional processing. Lesions produce memory deficits, personality changes, and abulia (lack of will or initiative).'
  },
  {
    id: 'thal-ext-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Which artery primarily supplies the posterior thalamus including the pulvinar?',
    options: [
      'Anterior choroidal artery',
      'Posterior communicating artery',
      'Thalamogeniculate branches of posterior cerebral artery',
      'Anterior cerebral artery',
      'Middle cerebral artery'
    ],
    correctAnswer: 2,
    explanation: 'The thalamogeniculate arteries (branches of the P2 segment of the posterior cerebral artery) supply the posterior thalamus including the pulvinar, lateral geniculate body, and posterior portions of the ventral nuclei. Occlusion can cause visual field defects and sensory loss.'
  }
];

// Talamus – enumerarea și clasificarea topografică a nucleilor
export const thalamusNucleiQuestions: Question[] = [
  {
    id: 'thal-nuc-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which thalamic nucleus is the primary relay for somatosensory information from the face?',
    options: [
      'Ventral posterolateral (VPL) nucleus',
      'Ventral posteromedial (VPM) nucleus',
      'Ventral lateral (VL) nucleus',
      'Medial geniculate body',
      'Lateral geniculate body'
    ],
    correctAnswer: 1,
    explanation: 'The ventral posteromedial (VPM) nucleus receives somatosensory input from the face via the trigeminal lemniscus and projects to the face region of the primary somatosensory cortex. It is the facial equivalent of the VPL nucleus.'
  },
  {
    id: 'thal-nuc-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The lateral geniculate body (nucleus) is the thalamic relay for which sensory modality?',
    options: [
      'Audition',
      'Vision',
      'Olfaction',
      'Gustation',
      'General somatic sensation'
    ],
    correctAnswer: 1,
    explanation: 'The lateral geniculate body (LGB) is the thalamic relay nucleus for vision. It receives input from the optic tract and projects via the optic radiation to the primary visual cortex (V1) in the occipital lobe.'
  },
  {
    id: 'thal-nuc-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The internal medullary lamina divides the thalamus into which major nuclear groups?',
    options: [
      'Superior and inferior groups',
      'Anterior, medial, and lateral groups',
      'Dorsal and ventral groups',
      'Rostral and caudal groups',
      'Sensory and motor groups'
    ],
    correctAnswer: 1,
    explanation: 'The internal medullary lamina is a Y-shaped sheet of white matter that divides the thalamus into anterior, medial, and lateral nuclear groups. Intralaminar nuclei are embedded within this lamina.'
  },
  {
    id: 'thal-nuc-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which thalamic nucleus receives input from the globus pallidus internus and substantia nigra pars reticulata?',
    options: [
      'Ventral posterolateral nucleus',
      'Ventral anterior (VA) nucleus',
      'Medial dorsal nucleus',
      'Anterior nucleus',
      'Pulvinar'
    ],
    correctAnswer: 1,
    explanation: 'The ventral anterior (VA) nucleus receives inhibitory GABAergic input from the globus pallidus internus and substantia nigra pars reticulata. It projects to premotor and prefrontal cortex and is part of the basal ganglia motor loop.'
  },
  {
    id: 'thal-nuc-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The ventral lateral (VL) nucleus receives cerebellar input via which structure?',
    options: [
      'Medial lemniscus',
      'Spinothalamic tract',
      'Dentatorubrothalamic tract',
      'Mammillothalamic tract',
      'Optic tract'
    ],
    correctAnswer: 2,
    explanation: 'The VL nucleus receives cerebellar efferents via the dentatorubrothalamic tract (from the dentate nucleus via the superior cerebellar peduncle). It projects to the primary motor cortex and is targeted in deep brain stimulation for movement disorders.'
  },
  {
    id: 'thal-nuc-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which nuclear group of the thalamus is considered part of the reticular activating system?',
    options: [
      'Anterior nuclear group',
      'Ventral nuclear group',
      'Intralaminar nuclei',
      'Lateral nuclear group',
      'Metathalamic nuclei'
    ],
    correctAnswer: 2,
    explanation: 'The intralaminar nuclei (centromedian, parafascicular, etc.) receive input from the reticular formation and project diffusely to the cerebral cortex and striatum. They are involved in arousal, attention, and consciousness as part of the ascending reticular activating system.'
  },
  {
    id: 'thal-nuc-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The reticular nucleus of the thalamus has which unique property?',
    options: [
      'It projects directly to the cerebral cortex',
      'It does not project to the cortex but modulates other thalamic nuclei',
      'It receives direct input from the spinal cord',
      'It is the largest thalamic nucleus',
      'It relays auditory information'
    ],
    correctAnswer: 1,
    explanation: 'The reticular nucleus is a thin sheet of GABAergic neurons surrounding the lateral thalamus. Unlike other thalamic nuclei, it does not project to the cortex but provides inhibitory modulation of thalamocortical transmission, acting as a "gatekeeper" for sensory information.'
  },
  {
    id: 'thal-ext-8b',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with bilateral paramedian thalamic infarction presents with hypersomnia, vertical gaze palsy, and memory impairment. Which artery and nuclei are most likely affected?',
    options: [
      'Thalamogeniculate arteries; lateral nuclei',
      'Artery of Percheron; medial dorsal and intralaminar nuclei',
      'Posterior choroidal arteries; pulvinar',
      'Tuberothalamic artery; anterior nuclei',
      'Anterior choroidal artery; ventral nuclei'
    ],
    correctAnswer: 1,
    explanation: 'The artery of Percheron is an anatomic variant where a single artery from one P1 segment supplies bilateral paramedian thalami. Occlusion causes bilateral medial thalamic infarction affecting intralaminar nuclei (arousal) and medial dorsal nuclei (memory), plus midbrain involvement causing vertical gaze palsy.'
  },
  {
    id: 'thal-nuc-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Damage to the anterior thalamic nucleus would most likely disrupt which circuit?',
    options: [
      'Cortico-striato-thalamo-cortical motor loop',
      'Papez circuit for memory and emotion',
      'Visual processing pathway',
      'Auditory relay pathway',
      'Pain modulation pathway'
    ],
    correctAnswer: 1,
    explanation: 'The anterior nucleus is a key component of the Papez circuit, receiving input from the mammillary bodies via the mammillothalamic tract and projecting to the cingulate gyrus. Damage disrupts this limbic circuit, causing anterograde amnesia and emotional dysregulation.'
  },
  {
    id: 'thal-nuc-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Deep brain stimulation of the ventral intermediate (VIM) nucleus is used to treat which condition?',
    options: [
      'Parkinson disease bradykinesia',
      'Essential tremor',
      'Dystonia',
      'Depression',
      'Epilepsy'
    ],
    correctAnswer: 1,
    explanation: 'The VIM nucleus (part of the ventral lateral complex) receives cerebellar input and is the target for DBS treatment of essential tremor and tremor-dominant Parkinson disease. Stimulation disrupts pathological oscillatory activity in the cerebello-thalamo-cortical circuit.'
  }
];

// Hipotalamusul – conformație externă, raporturi
export const hypothalamusQuestions: Question[] = [
  {
    id: 'hypo-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The hypothalamus forms the floor and part of the lateral walls of which ventricle?',
    options: [
      'Lateral ventricle',
      'Third ventricle',
      'Fourth ventricle',
      'Cerebral aqueduct',
      'Central canal'
    ],
    correctAnswer: 1,
    explanation: 'The hypothalamus forms the floor and the inferior part of the lateral walls of the third ventricle. Its position allows it to sample cerebrospinal fluid and respond to circulating hormones and metabolites.'
  },
  {
    id: 'hypo-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The infundibulum connects the hypothalamus to which structure?',
    options: [
      'Thalamus',
      'Pineal gland',
      'Pituitary gland (hypophysis)',
      'Mammillary bodies',
      'Amygdala'
    ],
    correctAnswer: 2,
    explanation: 'The infundibulum (pituitary stalk) is a funnel-shaped structure connecting the hypothalamus to the posterior pituitary gland. It contains axons of magnocellular neurons and the portal vessels of the hypothalamo-hypophyseal system.'
  },
  {
    id: 'hypo-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The mammillary bodies are located in which region of the hypothalamus?',
    options: [
      'Anterior (supraoptic) region',
      'Middle (tuberal) region',
      'Posterior (mammillary) region',
      'Lateral hypothalamic area',
      'Preoptic region'
    ],
    correctAnswer: 2,
    explanation: 'The mammillary bodies are paired spherical nuclei located in the posterior hypothalamic region. They receive input from the hippocampus via the fornix and project to the anterior thalamic nuclei via the mammillothalamic tract, forming part of the Papez circuit.'
  },
  {
    id: 'hypo-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The supraoptic nucleus primarily synthesizes which hormone?',
    options: [
      'Corticotropin-releasing hormone',
      'Growth hormone-releasing hormone',
      'Vasopressin (ADH)',
      'Dopamine',
      'Thyrotropin-releasing hormone'
    ],
    correctAnswer: 2,
    explanation: 'The supraoptic nucleus contains magnocellular neurons that synthesize vasopressin (antidiuretic hormone, ADH). These neurons project to the posterior pituitary where vasopressin is released into the systemic circulation to regulate water balance.'
  },
  {
    id: 'hypo-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The tuber cinereum is located between which structures?',
    options: [
      'Optic chiasm and mammillary bodies',
      'Mammillary bodies and posterior commissure',
      'Anterior commissure and optic chiasm',
      'Thalamus and subthalamus',
      'Pineal gland and posterior commissure'
    ],
    correctAnswer: 0,
    explanation: 'The tuber cinereum is the region of gray matter located between the optic chiasm anteriorly and the mammillary bodies posteriorly. The infundibulum arises from its center, and it contains the arcuate and ventromedial nuclei.'
  },
  {
    id: 'hypo-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The suprachiasmatic nucleus receives direct input from which source?',
    options: [
      'Auditory system via inferior colliculus',
      'Retina via retinohypothalamic tract',
      'Olfactory bulb via lateral olfactory stria',
      'Cerebellum via superior cerebellar peduncle',
      'Spinal cord via spinothalamic tract'
    ],
    correctAnswer: 1,
    explanation: 'The suprachiasmatic nucleus (SCN) receives direct retinal input via the retinohypothalamic tract, using melanopsin-containing retinal ganglion cells. This input entrains the circadian pacemaker to the light-dark cycle.'
  },
  {
    id: 'hypo-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The lateral hypothalamic area is primarily associated with which function?',
    options: [
      'Sleep induction',
      'Satiety and feeding inhibition',
      'Hunger and feeding behavior',
      'Temperature regulation',
      'Sexual behavior'
    ],
    correctAnswer: 2,
    explanation: 'The lateral hypothalamic area (LHA) is the "feeding center" and contains orexin/hypocretin neurons. Lesions cause aphagia and weight loss, while stimulation increases food intake. Orexin neurons also regulate arousal and are deficient in narcolepsy.'
  },
  {
    id: 'hypo-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient presents with polydipsia, polyuria, and inability to concentrate urine despite adequate hydration. MRI shows a lesion in the supraoptic region. What is the most likely diagnosis?',
    options: [
      'Syndrome of inappropriate ADH secretion (SIADH)',
      'Central diabetes insipidus',
      'Nephrogenic diabetes insipidus',
      'Primary polydipsia',
      'Cerebral salt wasting'
    ],
    correctAnswer: 1,
    explanation: 'Central diabetes insipidus results from destruction of vasopressin-producing neurons in the supraoptic and paraventricular nuclei. Without ADH, the kidneys cannot concentrate urine, leading to dilute polyuria and compensatory polydipsia. Treatment requires desmopressin replacement.'
  },
  {
    id: 'hypo-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with a craniopharyngioma presents with bitemporal hemianopia, growth failure, and excessive daytime sleepiness. Which hypothalamic region involvement explains the sleepiness?',
    options: [
      'Supraoptic nucleus destruction',
      'Mammillary body compression',
      'Lateral hypothalamic area with orexin neuron loss',
      'Anterior hypothalamic nucleus destruction',
      'Arcuate nucleus involvement'
    ],
    correctAnswer: 2,
    explanation: 'Excessive daytime sleepiness in hypothalamic lesions results from damage to orexin/hypocretin neurons in the lateral hypothalamus. Craniopharyngiomas, arising from Rathke pouch remnants, can compress this region, causing secondary narcolepsy-like symptoms along with visual and endocrine deficits.'
  },
  {
    id: 'hypo-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Wernicke encephalopathy classically involves which hypothalamic structure, contributing to memory impairment?',
    options: [
      'Supraoptic nucleus',
      'Suprachiasmatic nucleus',
      'Mammillary bodies',
      'Arcuate nucleus',
      'Ventromedial nucleus'
    ],
    correctAnswer: 2,
    explanation: 'Wernicke encephalopathy (thiamine deficiency) characteristically affects the mammillary bodies, medial thalamus, and periaqueductal gray. Mammillary body damage disrupts the Papez circuit, contributing to the anterograde amnesia seen in Korsakoff syndrome.'
  }
];

// Epitalamusul și metatalamusul
export const epithalamMetathalamQuestions: Question[] = [
  {
    id: 'epi-meta-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which structure is the main component of the epithalamus?',
    options: [
      'Lateral geniculate body',
      'Medial geniculate body',
      'Pineal gland (epiphysis)',
      'Pulvinar',
      'Subthalamic nucleus'
    ],
    correctAnswer: 2,
    explanation: 'The epithalamus consists primarily of the pineal gland (epiphysis cerebri) and the habenular nuclei with their commissure. The pineal gland secretes melatonin and plays a role in circadian rhythm regulation.'
  },
  {
    id: 'epi-meta-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The habenular nuclei receive input primarily via which structure?',
    options: [
      'Optic tract',
      'Stria medullaris thalami',
      'Fornix',
      'Mammillothalamic tract',
      'Medial lemniscus'
    ],
    correctAnswer: 1,
    explanation: 'The stria medullaris thalami carries afferent fibers from the septal nuclei, hypothalamus, and other limbic structures to the habenular nuclei. The habenula serves as a relay in the limbic-midbrain circuit.'
  },
  {
    id: 'epi-meta-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The medial geniculate body is the thalamic relay nucleus for which sensory system?',
    options: [
      'Visual',
      'Auditory',
      'Somatosensory',
      'Vestibular',
      'Olfactory'
    ],
    correctAnswer: 1,
    explanation: 'The medial geniculate body (MGB) is the thalamic relay for the auditory system. It receives input from the inferior colliculus via the brachium of the inferior colliculus and projects to the primary auditory cortex (Heschl gyrus) via the auditory radiation.'
  },
  {
    id: 'epi-meta-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The habenular nuclei project to which midbrain structure via the habenulointerpeduncular tract (fasciculus retroflexus)?',
    options: [
      'Red nucleus',
      'Substantia nigra',
      'Interpeduncular nucleus',
      'Superior colliculus',
      'Periaqueductal gray'
    ],
    correctAnswer: 2,
    explanation: 'The fasciculus retroflexus (habenulointerpeduncular tract) connects the habenular nuclei to the interpeduncular nucleus in the midbrain. This pathway is part of the dorsal diencephalic conduction system involved in limbic-motor integration.'
  },
  {
    id: 'epi-meta-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The lateral geniculate body has how many layers?',
    options: [
      'Two layers',
      'Four layers',
      'Six layers',
      'Eight layers',
      'Ten layers'
    ],
    correctAnswer: 2,
    explanation: 'The lateral geniculate body has six layers: layers 1 and 2 are magnocellular (motion, contrast), and layers 3-6 are parvocellular (color, fine detail). Layers 1, 4, and 6 receive contralateral eye input; layers 2, 3, and 5 receive ipsilateral eye input.'
  },
  {
    id: 'epi-meta-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The posterior commissure is located at which level?',
    options: [
      'At the level of the optic chiasm',
      'At the junction of the cerebral aqueduct and third ventricle',
      'Within the corpus callosum',
      'At the level of the mammillary bodies',
      'Within the anterior wall of the third ventricle'
    ],
    correctAnswer: 1,
    explanation: 'The posterior commissure marks the junction between the third ventricle and the cerebral aqueduct, just superior to the superior colliculi. It contains fibers coordinating bilateral pupillary light reflexes and vertical gaze mechanisms.'
  },
  {
    id: 'epi-meta-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The pineal gland is located in relation to which structures?',
    options: [
      'Between the cerebral peduncles',
      'Between the superior colliculi, below the splenium of corpus callosum',
      'Above the optic chiasm',
      'Within the interpeduncular fossa',
      'Lateral to the thalamus'
    ],
    correctAnswer: 1,
    explanation: 'The pineal gland lies in the midline between the two superior colliculi, just below the splenium of the corpus callosum and above the posterior commissure. It is attached to the diencephalon by the pineal stalk.'
  },
  {
    id: 'epi-meta-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A tumor of the pineal region compressing the superior colliculi and pretectal area would most likely cause which clinical finding?',
    options: [
      'Horizontal gaze palsy',
      'Parinaud syndrome (upgaze palsy, light-near dissociation)',
      'Internuclear ophthalmoplegia',
      'Oculomotor nerve palsy with ptosis',
      'Bitemporal hemianopia'
    ],
    correctAnswer: 1,
    explanation: 'Parinaud syndrome (dorsal midbrain syndrome) results from compression of the pretectal area and superior colliculi by pineal region tumors. It presents with paralysis of upgaze, convergence-retraction nystagmus, light-near dissociation of pupils, and eyelid retraction (Collier sign).'
  },
  {
    id: 'epi-meta-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A lesion of the lateral geniculate body would produce which visual field defect?',
    options: [
      'Monocular blindness',
      'Bitemporal hemianopia',
      'Contralateral homonymous hemianopia',
      'Superior quadrantanopia',
      'Inferior quadrantanopia'
    ],
    correctAnswer: 2,
    explanation: 'Lesions of the lateral geniculate body produce contralateral homonymous hemianopia because it receives already-decussated fibers representing the contralateral visual field. Unlike optic radiation lesions, LGB lesions often spare macular vision due to dual blood supply.'
  },
  {
    id: 'epi-meta-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The habenula has been implicated in which psychiatric condition through its role in the reward-aversion system?',
    options: [
      'Schizophrenia primarily',
      'Obsessive-compulsive disorder',
      'Major depressive disorder',
      'Autism spectrum disorder',
      'Attention deficit hyperactivity disorder'
    ],
    correctAnswer: 2,
    explanation: 'The lateral habenula is hyperactive in depression and encodes negative reward prediction errors (disappointment). It inhibits dopaminergic and serotonergic neurons. Deep brain stimulation of the habenula has been explored as treatment for refractory depression.'
  }
];

// Glanda pineală
export const pinealGlandQuestions: Question[] = [
  {
    id: 'pineal-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The pineal gland primarily secretes which hormone?',
    options: [
      'Cortisol',
      'Melatonin',
      'Serotonin',
      'Dopamine',
      'Thyroxine'
    ],
    correctAnswer: 1,
    explanation: 'The pineal gland secretes melatonin, synthesized from serotonin. Melatonin secretion follows a circadian rhythm, with peak levels at night, and plays a key role in regulating sleep-wake cycles and seasonal biological rhythms.'
  },
  {
    id: 'pineal-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Pineal gland calcification (brain sand/corpora arenacea) is:',
    options: [
      'Always pathological and requires treatment',
      'A normal finding that increases with age',
      'Indicative of pineal tumor',
      'Only seen in children',
      'A sign of calcium metabolism disorder'
    ],
    correctAnswer: 1,
    explanation: 'Pineal calcification is a normal age-related finding visible on CT and skull X-rays in most adults over 40. The calcified pineal serves as a useful radiological landmark for detecting midline shift in brain pathology.'
  },
  {
    id: 'pineal-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The pineal gland receives its sympathetic innervation ultimately from which nucleus?',
    options: [
      'Edinger-Westphal nucleus',
      'Superior cervical ganglion',
      'Ciliary ganglion',
      'Pterygopalatine ganglion',
      'Trigeminal ganglion'
    ],
    correctAnswer: 1,
    explanation: 'Sympathetic innervation of the pineal gland originates from the superior cervical ganglion. These postganglionic fibers release norepinephrine, which stimulates melatonin synthesis during darkness via beta-adrenergic receptors.'
  },
  {
    id: 'pineal-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Melatonin synthesis is inhibited by:',
    options: [
      'Darkness',
      'Light exposure to the retina',
      'Sleep',
      'Low body temperature',
      'High serotonin levels'
    ],
    correctAnswer: 1,
    explanation: 'Light exposure inhibits melatonin synthesis via the retinohypothalamic tract to the suprachiasmatic nucleus, which then suppresses sympathetic output to the pineal gland. This pathway allows the pineal to function as a neuroendocrine transducer of light information.'
  },
  {
    id: 'pineal-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The pineal gland develops embryologically from which structure?',
    options: [
      'Neural crest',
      'Roof plate of the diencephalon',
      'Floor of the third ventricle',
      'Mesoderm',
      'Rathke pouch'
    ],
    correctAnswer: 1,
    explanation: 'The pineal gland develops as an evagination from the roof plate (ependymal roof) of the diencephalon. Its photoreceptor-like pinealocytes reflect its evolutionary origin as a "third eye" in lower vertebrates.'
  },
  {
    id: 'pineal-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The blood-brain barrier in the pineal gland is:',
    options: [
      'Identical to that in the cerebral cortex',
      'Absent, making it a circumventricular organ',
      'More restrictive than other brain regions',
      'Only present in the pineal stalk',
      'Only develops after puberty'
    ],
    correctAnswer: 1,
    explanation: 'The pineal gland lacks a blood-brain barrier and is classified as a circumventricular organ. This allows melatonin to be secreted directly into the bloodstream and permits the pineal to respond to circulating hormones and other signals.'
  },
  {
    id: 'pineal-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The pineal recess is an extension of which ventricular cavity?',
    options: [
      'Lateral ventricle',
      'Third ventricle',
      'Fourth ventricle',
      'Cerebral aqueduct',
      'Suprapineal recess'
    ],
    correctAnswer: 1,
    explanation: 'The pineal recess is a small extension of the third ventricle into the stalk of the pineal gland. It lies between the habenular commissure above and the posterior commissure below.'
  },
  {
    id: 'pineal-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A child presents with precocious puberty, visual disturbances, and hydrocephalus. MRI reveals a pineal region mass with elevated serum beta-HCG. What is the most likely diagnosis?',
    options: [
      'Pineocytoma',
      'Pineal cyst',
      'Germ cell tumor (germinoma or choriocarcinoma)',
      'Meningioma',
      'Astrocytoma'
    ],
    correctAnswer: 2,
    explanation: 'Pineal region germ cell tumors (germinomas, choriocarcinomas) can secrete beta-HCG, causing precocious puberty in boys. The tumor location causes aqueductal obstruction (hydrocephalus) and tectal compression (Parinaud syndrome). Germinomas are radiosensitive with good prognosis.'
  },
  {
    id: 'pineal-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Destruction of the pineal gland would most likely result in which physiological change?',
    options: [
      'Complete loss of circadian rhythms',
      'Diabetes insipidus',
      'Altered circadian rhythm entrainment and sleep-wake disturbances',
      'Blindness',
      'Loss of pupillary reflexes'
    ],
    correctAnswer: 2,
    explanation: 'Pineal destruction reduces melatonin and impairs circadian rhythm entrainment, though the suprachiasmatic nucleus maintains basic rhythmicity. Patients may experience sleep disturbances, jet lag difficulty, and seasonal affective symptoms, but do not lose all circadian function.'
  },
  {
    id: 'pineal-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Which surgical approach is typically used for pineal region tumors?',
    options: [
      'Pterional (frontotemporal) approach',
      'Transsphenoidal approach',
      'Supracerebellar-infratentorial or occipital-transtentorial approach',
      'Retrosigmoid approach',
      'Transpetrosal approach'
    ],
    correctAnswer: 2,
    explanation: 'The supracerebellar-infratentorial approach (below tentorium, above cerebellum) provides direct access to the pineal region while avoiding critical structures. The occipital-transtentorial approach is an alternative. These approaches navigate around the deep venous system (vein of Galen).'
  }
];

// Hipofiza – conformaţie externă, raporturi
export const pituitaryGlandQuestions: Question[] = [
  {
    id: 'pit-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The pituitary gland (hypophysis) is located within which bony structure?',
    options: [
      'Foramen magnum',
      'Sella turcica of the sphenoid bone',
      'Petrous part of temporal bone',
      'Cribriform plate',
      'Jugular foramen'
    ],
    correctAnswer: 1,
    explanation: 'The pituitary gland sits within the sella turcica (Turkish saddle), a depression in the body of the sphenoid bone. The sella is bounded anteriorly by the tuberculum sellae and posteriorly by the dorsum sellae.'
  },
  {
    id: 'pit-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The anterior pituitary (adenohypophysis) develops from which embryonic structure?',
    options: [
      'Neural ectoderm (infundibulum)',
      'Oral ectoderm (Rathke pouch)',
      'Neural crest',
      'Mesoderm',
      'Endoderm'
    ],
    correctAnswer: 1,
    explanation: 'The adenohypophysis develops from Rathke pouch, an evagination of oral ectoderm. The neurohypophysis develops from the infundibulum (neural ectoderm). This dual origin explains the different histology and function of the two lobes.'
  },
  {
    id: 'pit-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which structure forms the roof of the sella turcica?',
    options: [
      'Sphenoid bone',
      'Diaphragma sellae (dura mater)',
      'Cavernous sinus',
      'Optic chiasm',
      'Tentorium cerebelli'
    ],
    correctAnswer: 1,
    explanation: 'The diaphragma sellae is a circular fold of dura mater forming the roof of the sella turcica. It has a central opening for the pituitary stalk (infundibulum). The optic chiasm lies just above this dural covering.'
  },
  {
    id: 'pit-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The cavernous sinus lies in which position relative to the pituitary gland?',
    options: [
      'Superior to the pituitary',
      'Inferior to the pituitary',
      'Lateral to the pituitary on each side',
      'Anterior to the pituitary only',
      'Posterior to the pituitary only'
    ],
    correctAnswer: 2,
    explanation: 'The cavernous sinuses are paired venous structures lying lateral to the sella turcica on each side of the pituitary. They contain the internal carotid artery and cranial nerves III, IV, V1, V2, and VI. Pituitary tumors can extend into the cavernous sinus.'
  },
  {
    id: 'pit-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The hypothalamo-hypophyseal portal system carries releasing hormones from the hypothalamus to which part of the pituitary?',
    options: [
      'Posterior pituitary (neurohypophysis)',
      'Anterior pituitary (adenohypophysis)',
      'Pars intermedia',
      'Infundibulum only',
      'All parts equally'
    ],
    correctAnswer: 1,
    explanation: 'The hypothalamo-hypophyseal portal system carries releasing and inhibiting hormones from hypothalamic neurons in the median eminence to the anterior pituitary. This vascular link allows precise hormonal control of adenohypophyseal hormone secretion.'
  },
  {
    id: 'pit-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The posterior pituitary contains which type of neural elements?',
    options: [
      'Cell bodies of hypothalamic neurons',
      'Axon terminals of supraoptic and paraventricular neurons',
      'Dopaminergic neurons',
      'Endocrine secretory cells',
      'Glial cells only'
    ],
    correctAnswer: 1,
    explanation: 'The posterior pituitary (neurohypophysis) contains axon terminals of magnocellular neurons whose cell bodies are in the supraoptic and paraventricular nuclei. These terminals release vasopressin and oxytocin directly into the bloodstream.'
  },
  {
    id: 'pit-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The sphenoid sinus lies in which position relative to the sella turcica?',
    options: [
      'Superior',
      'Inferior and anterior',
      'Lateral',
      'Posterior only',
      'Within the sella turcica'
    ],
    correctAnswer: 1,
    explanation: 'The sphenoid sinus lies inferior and anterior to the sella turcica, separated by a thin bony wall. This relationship is surgically important for the transsphenoidal approach to pituitary tumors, which accesses the sella through the sphenoid sinus.'
  },
  {
    id: 'pit-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with a pituitary macroadenoma presents with bitemporal hemianopia. Which structure is being compressed?',
    options: [
      'Lateral geniculate body',
      'Optic nerve',
      'Optic chiasm',
      'Optic tract',
      'Optic radiation'
    ],
    correctAnswer: 2,
    explanation: 'Suprasellar extension of pituitary adenomas compresses the optic chiasm from below, affecting the crossing nasal retinal fibers first. This produces bitemporal (heteronymous) hemianopia, typically beginning in the upper temporal quadrants.'
  },
  {
    id: 'pit-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient develops acute headache, visual loss, and hypopituitarism following hemorrhage into a pituitary adenoma. What is this condition called?',
    options: [
      'Sheehan syndrome',
      'Pituitary apoplexy',
      'Empty sella syndrome',
      'Cushing disease',
      'Nelson syndrome'
    ],
    correctAnswer: 1,
    explanation: 'Pituitary apoplexy is hemorrhage or infarction within a pituitary adenoma, presenting with sudden headache, visual loss, ophthalmoplegia (cavernous sinus compression), and acute hypopituitarism. It is a neurosurgical emergency requiring urgent decompression.'
  },
  {
    id: 'pit-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Lateral extension of a pituitary adenoma into the cavernous sinus would most likely affect which cranial nerve first?',
    options: [
      'Oculomotor nerve (CN III)',
      'Trochlear nerve (CN IV)',
      'Abducens nerve (CN VI)',
      'Ophthalmic division of trigeminal (V1)',
      'Maxillary division of trigeminal (V2)'
    ],
    correctAnswer: 2,
    explanation: 'The abducens nerve (CN VI) runs freely through the center of the cavernous sinus, adjacent to the internal carotid artery, making it most vulnerable to compression by lateral tumor extension. CN III, IV, V1, and V2 run in the lateral wall and are relatively protected.'
  }
];

// Spaţiile perforate anterior şi posterior
export const perforatedSpacesQuestions: Question[] = [
  {
    id: 'perf-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The anterior perforated substance is located between which structures?',
    options: [
      'Between the cerebral peduncles',
      'Between the optic chiasm and optic tract anteriorly and the uncus posterolaterally',
      'Between the mammillary bodies and pons',
      'Between the two thalami',
      'Between the cerebellum and medulla'
    ],
    correctAnswer: 1,
    explanation: 'The anterior perforated substance (APS) is a diamond-shaped area at the base of the brain bounded by the optic tract, olfactory trigone, and diagonal band. It is perforated by lenticulostriate and other central arteries entering the brain.'
  },
  {
    id: 'perf-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which arteries penetrate the anterior perforated substance?',
    options: [
      'Posterior cerebral artery branches',
      'Lenticulostriate arteries from the middle cerebral artery',
      'Anterior inferior cerebellar artery branches',
      'Posterior choroidal arteries',
      'Vertebral artery branches'
    ],
    correctAnswer: 1,
    explanation: 'The lenticulostriate arteries (medial and lateral) arise from the M1 segment of the middle cerebral artery and penetrate the anterior perforated substance to supply the basal ganglia, internal capsule, and surrounding structures.'
  },
  {
    id: 'perf-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The posterior perforated substance is located in which region?',
    options: [
      'Anterior to the optic chiasm',
      'In the interpeduncular fossa, between the cerebral peduncles',
      'In the fourth ventricle floor',
      'Superior to the corpus callosum',
      'Lateral to the thalamus'
    ],
    correctAnswer: 1,
    explanation: 'The posterior perforated substance lies in the interpeduncular fossa, the depression between the two cerebral peduncles on the ventral midbrain. It is perforated by paramedian branches of the basilar artery supplying the midbrain.'
  },
  {
    id: 'perf-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The recurrent artery of Heubner enters the brain through which structure?',
    options: [
      'Posterior perforated substance',
      'Anterior perforated substance',
      'Optic canal',
      'Lateral sulcus',
      'Interpeduncular fossa'
    ],
    correctAnswer: 1,
    explanation: 'The recurrent artery of Heubner (medial striate artery) arises from the A1-A2 junction of the anterior cerebral artery and enters the brain through the medial part of the anterior perforated substance. It supplies the head of caudate, anterior limb of internal capsule, and anterior putamen.'
  },
  {
    id: 'perf-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which structure lies immediately superior to the posterior perforated substance?',
    options: [
      'Optic chiasm',
      'Mammillary bodies',
      'Hypothalamus',
      'Pons',
      'Cerebellum'
    ],
    correctAnswer: 1,
    explanation: 'The mammillary bodies lie immediately superior to (above) the posterior perforated substance in the interpeduncular fossa. The oculomotor nerves emerge from the medial aspect of the cerebral peduncles adjacent to this region.'
  },
  {
    id: 'perf-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The diagonal band of Broca is located adjacent to which perforated substance?',
    options: [
      'Posterior perforated substance only',
      'Anterior perforated substance',
      'Both equally',
      'Neither, it is in the lateral sulcus',
      'It forms the perforated substance itself'
    ],
    correctAnswer: 1,
    explanation: 'The diagonal band of Broca runs obliquely across the anterior perforated substance, connecting the septal area to the amygdala. It contains cholinergic neurons that project to the hippocampus and is part of the basal forebrain cholinergic system.'
  },
  {
    id: 'perf-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The olfactory trigone is located at which edge of the anterior perforated substance?',
    options: [
      'Posterior edge',
      'Lateral edge',
      'Anteromedial edge',
      'Superior edge',
      'Inferior edge'
    ],
    correctAnswer: 2,
    explanation: 'The olfactory trigone is located at the anteromedial corner of the anterior perforated substance, where the olfactory tract divides into medial and lateral olfactory striae. This location marks the transition from olfactory to limbic structures.'
  },
  {
    id: 'perf-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient presents with contralateral hemiparesis, hemisensory loss, and homonymous hemianopia following a small lacunar stroke. The lesion most likely affected perforating arteries supplying which structure?',
    options: [
      'Anterior limb of internal capsule',
      'Posterior limb and genu of internal capsule',
      'Putamen only',
      'Caudate head only',
      'Globus pallidus externus'
    ],
    correctAnswer: 1,
    explanation: 'This triad (motor, sensory, and visual deficits) suggests a lacunar infarct affecting the posterior limb of the internal capsule, where corticospinal, thalamocortical sensory, and optic radiation fibers are closely packed. Lenticulostriate artery occlusion is the typical cause.'
  },
  {
    id: 'perf-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Occlusion of perforating branches entering the posterior perforated substance would most likely cause which syndrome?',
    options: [
      'Lateral medullary syndrome',
      'Weber syndrome or other midbrain syndromes',
      'Millard-Gubler syndrome',
      'Lateral pontine syndrome',
      'Anterior spinal artery syndrome'
    ],
    correctAnswer: 1,
    explanation: 'Paramedian perforating branches from the basilar artery enter the posterior perforated substance to supply the midbrain. Occlusion causes midbrain syndromes such as Weber (CN III palsy with contralateral hemiplegia) or Benedikt syndrome (CN III palsy with contralateral tremor/ataxia).'
  },
  {
    id: 'perf-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'During surgery for an anterior communicating artery aneurysm, which perforating vessels passing through the anterior perforated substance are at greatest risk?',
    options: [
      'Thalamoperforating arteries',
      'Recurrent artery of Heubner and medial lenticulostriate arteries',
      'Posterior choroidal arteries',
      'Quadrigeminal artery branches',
      'Basilar perforators'
    ],
    correctAnswer: 1,
    explanation: 'The recurrent artery of Heubner and medial lenticulostriate arteries arise near the anterior communicating artery complex and enter the anterior perforated substance. Inadvertent injury during aneurysm surgery can cause infarction of the caudate head and anterior internal capsule.'
  }
];
