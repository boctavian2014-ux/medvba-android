import type { Question } from './questions';

// Ariile corticale senzoriale
export const sensoryCorticalAreasQuestions: Question[] = [
  {
    id: 'sca-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The primary visual cortex (V1) corresponds to which Brodmann area?',
    options: [
      'Area 4',
      'Area 17',
      'Area 22',
      'Area 41',
      'Area 3'
    ],
    correctAnswer: 1,
    explanation: 'The primary visual cortex (V1, striate cortex) corresponds to Brodmann area 17, located along the calcarine sulcus. It receives retinotopic input from the lateral geniculate nucleus and is the first cortical area for visual processing.'
  },
  {
    id: 'sca-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The primary auditory cortex corresponds to which Brodmann areas?',
    options: [
      'Areas 1, 2, 3',
      'Areas 41 and 42',
      'Areas 17 and 18',
      'Areas 44 and 45',
      'Area 4'
    ],
    correctAnswer: 1,
    explanation: 'The primary auditory cortex (A1) corresponds to Brodmann areas 41 and 42, located in Heschl gyrus on the superior temporal plane. It receives tonotopically organized input from the medial geniculate nucleus.'
  },
  {
    id: 'sca-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The primary somatosensory cortex is located in which gyrus?',
    options: [
      'Precentral gyrus',
      'Postcentral gyrus',
      'Superior temporal gyrus',
      'Angular gyrus',
      'Cingulate gyrus'
    ],
    correctAnswer: 1,
    explanation: 'The primary somatosensory cortex (S1) is located in the postcentral gyrus, immediately posterior to the central sulcus. It comprises Brodmann areas 3a, 3b, 1, and 2 and receives input from the VPL and VPM thalamic nuclei.'
  },
  {
    id: 'sca-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The visual association cortex includes which Brodmann areas?',
    options: [
      'Areas 1, 2, 3',
      'Areas 18 and 19',
      'Areas 41 and 42',
      'Areas 44 and 45',
      'Area 4 only'
    ],
    correctAnswer: 1,
    explanation: 'The visual association cortex (V2-V5 and beyond) corresponds to Brodmann areas 18 and 19, surrounding the primary visual cortex. These areas process increasingly complex visual features including form, color, motion, and depth.'
  },
  {
    id: 'sca-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The gustatory cortex is located in which region?',
    options: [
      'Postcentral gyrus only',
      'Anterior insula and frontal operculum',
      'Superior temporal gyrus',
      'Occipital lobe',
      'Cingulate gyrus'
    ],
    correctAnswer: 1,
    explanation: 'The primary gustatory cortex is located in the anterior insula and adjacent frontal operculum (area 43). It receives taste information from the VPM nucleus of the thalamus, which relays input from the nucleus of the solitary tract.'
  },
  {
    id: 'sca-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The vestibular cortex is distributed across which regions?',
    options: [
      'Primary visual cortex only',
      'Parieto-insular vestibular cortex (PIVC), area 2v, and area 3a',
      'Broca area',
      'Primary auditory cortex only',
      'Hippocampus'
    ],
    correctAnswer: 1,
    explanation: 'Vestibular processing involves multiple cortical regions including the parieto-insular vestibular cortex (PIVC) in the posterior insula, area 2v in the intraparietal sulcus, and area 3a in the somatosensory cortex. There is no single primary vestibular cortex.'
  },
  {
    id: 'sca-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The secondary somatosensory cortex (S2) is located in which region?',
    options: [
      'Postcentral gyrus',
      'Parietal operculum (upper bank of lateral sulcus)',
      'Angular gyrus',
      'Precentral gyrus',
      'Temporal pole'
    ],
    correctAnswer: 1,
    explanation: 'Secondary somatosensory cortex (S2) is located on the parietal operculum in the upper bank of the lateral sulcus. Unlike S1, it receives bilateral input and is involved in tactile memory, attention, and pain processing.'
  },
  {
    id: 'sca-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient cannot recognize objects by touch despite intact primary somatosensory function. This condition, called astereognosis, results from damage to:',
    options: [
      'Primary somatosensory cortex',
      'Somatosensory association cortex (areas 5, 7)',
      'Primary motor cortex',
      'Visual cortex',
      'Auditory cortex'
    ],
    correctAnswer: 1,
    explanation: 'Astereognosis (tactile agnosia) results from damage to the posterior parietal somatosensory association areas (5, 7) or their connections, with intact primary sensation. Patients cannot integrate tactile information to recognize objects but can perceive individual features like texture and temperature.'
  },
  {
    id: 'sca-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Lesion of area V4 in the fusiform and lingual gyri causes:',
    options: [
      'Complete blindness',
      'Cerebral achromatopsia (loss of color perception)',
      'Motion blindness',
      'Prosopagnosia',
      'Alexia'
    ],
    correctAnswer: 1,
    explanation: 'Area V4 is specialized for color processing. Bilateral damage causes cerebral achromatopsia—loss of color vision with preserved form and motion perception. Patients describe the world as appearing in shades of gray. Unilateral lesions cause hemiachromatopsia in the contralateral field.'
  },
  {
    id: 'sca-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient can hear sounds but cannot recognize spoken words or environmental sounds. This auditory agnosia results from bilateral damage to:',
    options: [
      'Primary auditory cortex',
      'Auditory association cortex (superior temporal regions)',
      'Broca area',
      'Primary visual cortex',
      'Frontal eye fields'
    ],
    correctAnswer: 1,
    explanation: 'Auditory agnosia results from bilateral damage to auditory association cortex in the superior temporal gyri, with relative sparing of primary auditory cortex. Patients hear sounds but cannot recognize their meaning. Verbal auditory agnosia (pure word deafness) and nonverbal auditory agnosia may dissociate.'
  }
];

// Ariile corticale motorii și premotorii
export const motorCorticalAreasQuestions: Question[] = [
  {
    id: 'mca-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The primary motor cortex (M1) corresponds to which Brodmann area?',
    options: [
      'Area 1',
      'Area 4',
      'Area 6',
      'Area 8',
      'Area 17'
    ],
    correctAnswer: 1,
    explanation: 'The primary motor cortex (M1) corresponds to Brodmann area 4, located in the precentral gyrus. It contains large pyramidal (Betz) cells in layer V that contribute to the corticospinal tract for voluntary motor control.'
  },
  {
    id: 'mca-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The premotor cortex corresponds to which Brodmann area?',
    options: [
      'Area 4',
      'Area 6',
      'Area 17',
      'Area 22',
      'Area 41'
    ],
    correctAnswer: 1,
    explanation: 'The premotor cortex (PMC) corresponds to Brodmann area 6, located on the lateral surface anterior to the primary motor cortex. It is involved in planning movements, especially those guided by external sensory cues.'
  },
  {
    id: 'mca-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The supplementary motor area (SMA) is located on which surface?',
    options: [
      'Lateral surface of frontal lobe',
      'Medial surface of frontal lobe',
      'Orbital surface',
      'Temporal lobe',
      'Parietal lobe'
    ],
    correctAnswer: 1,
    explanation: 'The SMA is located on the medial surface of the frontal lobe, in the medial portion of area 6, anterior to the paracentral lobule. It is critical for internally generated movements and sequential motor planning.'
  },
  {
    id: 'mca-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The frontal eye field (FEF), involved in voluntary saccadic eye movements, is located in:',
    options: [
      'Brodmann area 4',
      'Brodmann area 8',
      'Brodmann area 17',
      'Brodmann area 41',
      'Brodmann area 22'
    ],
    correctAnswer: 1,
    explanation: 'The frontal eye field is located in Brodmann area 8, in the posterior middle frontal gyrus. It controls voluntary saccadic eye movements to the contralateral visual field and works with the parietal eye field for visual attention.'
  },
  {
    id: 'mca-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The motor homunculus demonstrates that which body parts have the largest cortical representation?',
    options: [
      'Trunk and back',
      'Hand, face, and tongue',
      'Lower limbs',
      'All parts equally',
      'Internal organs'
    ],
    correctAnswer: 1,
    explanation: 'The motor homunculus shows disproportionately large representation for the hand (especially fingers), face, and tongue, reflecting the fine motor control required for manipulation, facial expression, and speech. The trunk has relatively small representation.'
  },
  {
    id: 'mca-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The pre-supplementary motor area (pre-SMA) is primarily involved in:',
    options: [
      'Execution of simple movements',
      'Cognitive aspects of motor control, including action selection',
      'Primary sensory processing',
      'Visual processing',
      'Auditory processing'
    ],
    correctAnswer: 1,
    explanation: 'The pre-SMA, located anterior to the SMA proper, is involved in higher-order motor control including action selection, learning new sequences, and switching between tasks. It has strong connections with prefrontal cortex.'
  },
  {
    id: 'mca-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The cingulate motor areas are located in which region?',
    options: [
      'Lateral frontal cortex',
      'Cingulate sulcus on the medial surface',
      'Temporal lobe',
      'Occipital lobe',
      'Insula'
    ],
    correctAnswer: 1,
    explanation: 'The cingulate motor areas (CMA) are located in the banks of the cingulate sulcus on the medial frontal surface. They contribute to the corticospinal tract and are involved in motor aspects of emotion, pain responses, and reward-based action selection.'
  },
  {
    id: 'mca-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient can perform individual movements but cannot execute learned sequences of movements (like brushing teeth). This likely reflects damage to:',
    options: [
      'Primary motor cortex',
      'Supplementary motor area',
      'Primary somatosensory cortex',
      'Visual cortex',
      'Wernicke area'
    ],
    correctAnswer: 1,
    explanation: 'The SMA is crucial for organizing and executing sequential movements, especially self-initiated sequences. Damage causes difficulty with complex motor sequences while simple movements remain intact. Bilateral damage can cause akinetic mutism.'
  },
  {
    id: 'mca-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Damage to the dominant premotor cortex can cause:',
    options: [
      'Contralateral hemiplegia',
      'Ideomotor apraxia (inability to pantomime)',
      'Wernicke aphasia',
      'Visual agnosia',
      'Amnesia'
    ],
    correctAnswer: 1,
    explanation: 'The dominant (usually left) premotor cortex stores motor programs for skilled actions. Damage causes ideomotor apraxia—the inability to pantomime gestures or use tools correctly despite intact comprehension and motor ability. The motor engrams cannot be accessed for volitional movement.'
  },
  {
    id: 'mca-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'An acute lesion of the right frontal eye field causes:',
    options: [
      'Eyes deviate to the left',
      'Eyes deviate to the right (toward the lesion)',
      'Vertical gaze palsy',
      'Bilateral ptosis',
      'No eye movement abnormality'
    ],
    correctAnswer: 1,
    explanation: 'The FEF drives saccades to the contralateral side. An acute destructive lesion causes eyes to deviate toward the lesion (ipsilateral) because the intact contralateral FEF is unopposed. This is summarized as "eyes look toward the lesion" (and away from the hemiparesis).'
  }
];

// Ariile somestezice
export const somestheticAreasQuestions: Question[] = [
  {
    id: 'som-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The primary somatosensory cortex (S1) comprises which Brodmann areas?',
    options: [
      'Areas 4 and 6',
      'Areas 3a, 3b, 1, and 2',
      'Areas 17, 18, 19',
      'Areas 41 and 42',
      'Areas 44 and 45'
    ],
    correctAnswer: 1,
    explanation: 'S1 comprises four cytoarchitecturally distinct areas: 3a (proprioception), 3b (cutaneous—main receiving area), 1 (texture), and 2 (size/shape). They are arranged in parallel strips in the postcentral gyrus with distinct functional specializations.'
  },
  {
    id: 'som-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Area 3b of the somatosensory cortex primarily receives which type of input?',
    options: [
      'Proprioceptive input from muscles',
      'Cutaneous (skin) input',
      'Visual input',
      'Auditory input',
      'Vestibular input'
    ],
    correctAnswer: 1,
    explanation: 'Area 3b receives the densest thalamocortical input from VPL/VPM and primarily processes cutaneous (skin) sensation. It is considered the primary receiving area for touch and projects to areas 1 and 2 for further processing.'
  },
  {
    id: 'som-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The somatosensory association cortex is located in which region?',
    options: [
      'Precentral gyrus',
      'Superior parietal lobule (areas 5 and 7)',
      'Temporal lobe',
      'Occipital lobe',
      'Frontal pole'
    ],
    correctAnswer: 1,
    explanation: 'The somatosensory association cortex in the superior parietal lobule (areas 5 and 7) integrates tactile information for object recognition (stereognosis) and combines it with visual and motor information for spatial processing and sensorimotor integration.'
  },
  {
    id: 'som-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Area 3a of the somatosensory cortex primarily processes:',
    options: [
      'Pain and temperature',
      'Proprioceptive information from muscle spindles',
      'Fine touch discrimination',
      'Visual information',
      'Auditory information'
    ],
    correctAnswer: 1,
    explanation: 'Area 3a lies in the depth of the central sulcus and receives proprioceptive input from muscle spindles via the thalamus. It provides information about muscle length and joint position important for motor control and kinesthesia.'
  },
  {
    id: 'som-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The sensory homunculus shows which characteristic organization in the postcentral gyrus?',
    options: [
      'Face represented medially, leg laterally',
      'Leg represented medially, face represented laterally',
      'All body parts equally represented',
      'Trunk has the largest representation',
      'No topographic organization'
    ],
    correctAnswer: 1,
    explanation: 'The sensory homunculus is arranged with the leg/foot on the medial surface (paracentral lobule), trunk and arm on the convexity, and face represented most laterally near the lateral sulcus. Sensory receptor density determines representation size.'
  },
  {
    id: 'som-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Area 2 of the somatosensory cortex is specialized for processing:',
    options: [
      'Pain only',
      'Size and shape of objects (stereognosis)',
      'Temperature exclusively',
      'Visual information',
      'Auditory information'
    ],
    correctAnswer: 1,
    explanation: 'Area 2 lies most posteriorly in S1 and integrates information about object size and shape. It receives input from areas 3b and 1 and from deep receptors. It is essential for stereognosis—recognizing objects by touch.'
  },
  {
    id: 'som-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The posterior parietal cortex (areas 5 and 7) integrates somatosensory information with:',
    options: [
      'Olfactory information only',
      'Visual and motor information for spatial awareness',
      'Gustatory information',
      'Limbic information only',
      'Cerebellar output'
    ],
    correctAnswer: 1,
    explanation: 'Areas 5 and 7 receive convergent somatosensory, visual, and vestibular input. They create spatial representations for body schema and extrapersonal space, essential for reaching, grasping, and navigating the environment.'
  },
  {
    id: 'som-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient cannot localize touch stimuli on the skin despite detecting them. This suggests damage to:',
    options: [
      'Peripheral nerves',
      'Posterior parietal cortex',
      'Primary motor cortex',
      'Cerebellum',
      'Basal ganglia'
    ],
    correctAnswer: 1,
    explanation: 'Impaired tactile localization with preserved detection suggests a deficit in higher-order somatosensory processing in the posterior parietal cortex (areas 5, 7). The primary cortex detects the stimulus but spatial processing is impaired.'
  },
  {
    id: 'som-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A stroke affecting the postcentral gyrus at the level of the hand representation would cause:',
    options: [
      'Ipsilateral hand weakness',
      'Contralateral hand sensory loss',
      'Bilateral leg weakness',
      'Visual field defect',
      'Aphasia'
    ],
    correctAnswer: 1,
    explanation: 'The postcentral gyrus contains S1, which receives contralateral sensory input. A stroke affecting the hand area causes contralateral hand sensory loss (numbness, impaired discrimination). Motor function would be preserved unless the precentral gyrus is also involved.'
  },
  {
    id: 'som-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient reports that their left arm feels foreign and does not belong to them despite intact sensation. This somatoparaphrenia results from damage to:',
    options: [
      'Left primary somatosensory cortex',
      'Right posterior parietal cortex',
      'Broca area',
      'Hippocampus',
      'Cerebellum'
    ],
    correctAnswer: 1,
    explanation: 'Somatoparaphrenia is a delusion of limb non-belonging typically resulting from right posterior parietal or temporo-parietal damage affecting body schema. Patients deny ownership of their left limbs despite intact primary sensation. It often accompanies left hemispatial neglect.'
  }
];

// Nucleii bazali
export const basalNucleiQuestions: Question[] = [
  {
    id: 'bn-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The striatum consists of which nuclei?',
    options: [
      'Globus pallidus and subthalamic nucleus',
      'Caudate nucleus and putamen',
      'Thalamus and hypothalamus',
      'Red nucleus and substantia nigra',
      'Amygdala and hippocampus'
    ],
    correctAnswer: 1,
    explanation: 'The striatum comprises the caudate nucleus and putamen, which are embryologically and functionally related, connected by cellular bridges across the internal capsule. The striatum is the primary input structure of the basal ganglia.'
  },
  {
    id: 'bn-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The lentiform (lenticular) nucleus consists of:',
    options: [
      'Caudate and putamen',
      'Putamen and globus pallidus',
      'Caudate and globus pallidus',
      'Thalamus and caudate',
      'Claustrum and putamen'
    ],
    correctAnswer: 1,
    explanation: 'The lentiform nucleus is a lens-shaped structure comprising the putamen (laterally) and globus pallidus (medially). Despite being anatomically continuous, they have different embryological origins and functions.'
  },
  {
    id: 'bn-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The caudate nucleus has which relationship with the lateral ventricle?',
    options: [
      'Lies completely outside the ventricle',
      'Forms part of the floor and lateral wall of the lateral ventricle',
      'Forms the roof of the ventricle',
      'Has no relationship with the ventricle',
      'Lies within the third ventricle'
    ],
    correctAnswer: 1,
    explanation: 'The caudate nucleus arches around the lateral ventricle, forming part of its floor and lateral wall. The head bulges into the frontal horn, the body lies along the body of the ventricle, and the tail curves into the temporal horn.'
  },
  {
    id: 'bn-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The globus pallidus is divided into which segments?',
    options: [
      'Anterior and posterior',
      'External (GPe) and internal (GPi)',
      'Superior and inferior',
      'Medial and lateral',
      'Dorsal and ventral'
    ],
    correctAnswer: 1,
    explanation: 'The globus pallidus is divided by the medial medullary lamina into external (GPe) and internal (GPi) segments. GPe is part of the indirect pathway, while GPi is a major output nucleus projecting to the thalamus.'
  },
  {
    id: 'bn-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The substantia nigra pars compacta (SNpc) produces which neurotransmitter?',
    options: [
      'Acetylcholine',
      'Dopamine',
      'Serotonin',
      'GABA',
      'Glutamate'
    ],
    correctAnswer: 1,
    explanation: 'The SNpc contains dopaminergic neurons that project to the striatum via the nigrostriatal pathway. Degeneration of these neurons causes Parkinson disease. The melanin pigment in these neurons gives the substantia nigra its dark color.'
  },
  {
    id: 'bn-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The subthalamic nucleus receives input primarily from:',
    options: [
      'Primary motor cortex directly',
      'Globus pallidus externus (GPe)',
      'Thalamus',
      'Cerebellum',
      'Hippocampus'
    ],
    correctAnswer: 1,
    explanation: 'The subthalamic nucleus (STN) receives GABAergic input from the GPe as part of the indirect pathway. It sends glutamatergic excitatory output to GPi/SNr. STN hyperactivity in Parkinson disease makes it a target for deep brain stimulation.'
  },
  {
    id: 'bn-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The direct pathway through the basal ganglia has what net effect on thalamocortical activity?',
    options: [
      'Inhibition (suppresses movement)',
      'Facilitation (promotes movement)',
      'No effect',
      'Only affects sensory processing',
      'Only affects cognitive function'
    ],
    correctAnswer: 1,
    explanation: 'The direct pathway (cortex→striatum→GPi/SNr→thalamus→cortex) facilitates movement. Striatal activation inhibits GPi, reducing tonic inhibition of thalamus, thus releasing (disinhibiting) thalamocortical neurons to promote movement.'
  },
  {
    id: 'bn-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient develops sudden-onset involuntary flinging movements of the left arm and leg. This hemiballismus most likely results from a lesion of:',
    options: [
      'Left caudate nucleus',
      'Right subthalamic nucleus',
      'Left globus pallidus',
      'Right putamen',
      'Left thalamus'
    ],
    correctAnswer: 1,
    explanation: 'Hemiballismus (violent flinging movements of contralateral limbs) results from lesions of the subthalamic nucleus, typically from small vessel stroke. Loss of STN excitatory drive to GPi causes reduced inhibition of thalamus, resulting in excessive movement.'
  },
  {
    id: 'bn-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'In Huntington disease, early degeneration occurs primarily in which basal ganglia structure?',
    options: [
      'Globus pallidus',
      'Caudate nucleus (especially indirect pathway neurons)',
      'Subthalamic nucleus',
      'Substantia nigra',
      'Red nucleus'
    ],
    correctAnswer: 1,
    explanation: 'Huntington disease causes early degeneration of medium spiny neurons in the caudate nucleus, particularly those of the indirect pathway expressing D2 receptors. This causes reduced inhibition of movement, manifesting as chorea. Later, direct pathway neurons are also affected.'
  },
  {
    id: 'bn-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The nucleus accumbens is part of which functional system?',
    options: [
      'Motor system only',
      'Limbic (reward) system',
      'Visual system',
      'Auditory system',
      'Somatosensory system'
    ],
    correctAnswer: 1,
    explanation: 'The nucleus accumbens (ventral striatum) is a key structure in the mesolimbic reward pathway. It receives dopaminergic input from the ventral tegmental area and is critical for reward, motivation, and addiction. It represents the limbic-motor interface.'
  }
];

// Capsula albă internă
export const internalCapsuleQuestions: Question[] = [
  {
    id: 'ic-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The internal capsule is located between which structures?',
    options: [
      'Thalamus and hypothalamus',
      'Caudate/thalamus medially and lentiform nucleus laterally',
      'Cerebellum and brainstem',
      'Two cerebral hemispheres',
      'Frontal and parietal lobes'
    ],
    correctAnswer: 1,
    explanation: 'The internal capsule is a compact band of white matter passing between the caudate nucleus and thalamus medially and the lentiform nucleus (putamen and globus pallidus) laterally. It carries all cortical projection fibers.'
  },
  {
    id: 'ic-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The internal capsule has which parts when viewed in horizontal section?',
    options: [
      'Head, body, tail',
      'Anterior limb, genu, posterior limb',
      'Superior, middle, inferior',
      'Medial, lateral',
      'Proximal, distal'
    ],
    correctAnswer: 1,
    explanation: 'On horizontal section, the internal capsule has three parts: anterior limb (between caudate and lentiform nucleus), genu (knee, at the junction), and posterior limb (between thalamus and lentiform nucleus). Each carries different fiber systems.'
  },
  {
    id: 'ic-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The corticospinal tract is primarily located in which part of the internal capsule?',
    options: [
      'Anterior limb',
      'Posterior limb',
      'Genu only',
      'External capsule',
      'Extreme capsule'
    ],
    correctAnswer: 1,
    explanation: 'The corticospinal tract passes through the posterior limb of the internal capsule, with fibers for the upper limb anterior to those for the lower limb. This compact arrangement makes small strokes potentially devastating for motor function.'
  },
  {
    id: 'ic-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The anterior limb of the internal capsule primarily contains:',
    options: [
      'Corticospinal fibers',
      'Frontopontine fibers and anterior thalamic radiations',
      'Optic radiations',
      'Auditory radiations',
      'Corticobulbar fibers only'
    ],
    correctAnswer: 1,
    explanation: 'The anterior limb contains frontopontine fibers (frontal cortex to pons) and anterior thalamic radiations connecting the anterior and mediodorsal thalamic nuclei with the prefrontal cortex and cingulate gyrus.'
  },
  {
    id: 'ic-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The genu of the internal capsule contains fibers of which tract?',
    options: [
      'Optic radiation',
      'Corticobulbar (corticonuclear) tract',
      'Corticospinal tract for leg',
      'Auditory radiation',
      'Frontopontine tract'
    ],
    correctAnswer: 1,
    explanation: 'The genu contains corticobulbar (corticonuclear) fibers projecting from motor cortex to cranial nerve nuclei in the brainstem. These fibers control facial expression, swallowing, and tongue movement.'
  },
  {
    id: 'ic-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The retrolenticular part of the internal capsule contains:',
    options: [
      'Corticospinal tract',
      'Optic radiation (geniculocalcarine tract)',
      'Frontopontine fibers',
      'Corticobulbar fibers',
      'Anterior thalamic radiation'
    ],
    correctAnswer: 1,
    explanation: 'The retrolenticular part (behind the lentiform nucleus) contains the optic radiation carrying visual information from the lateral geniculate nucleus to the primary visual cortex. Lesions cause contralateral homonymous hemianopia.'
  },
  {
    id: 'ic-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The lenticulostriate arteries, which supply the internal capsule, arise from:',
    options: [
      'Anterior cerebral artery',
      'Middle cerebral artery (M1 segment)',
      'Posterior cerebral artery',
      'Basilar artery',
      'Vertebral artery'
    ],
    correctAnswer: 1,
    explanation: 'The lenticulostriate arteries are small penetrating branches from the M1 segment of the middle cerebral artery. They are end arteries supplying the internal capsule and basal ganglia and are prone to lipohyalinosis in hypertension, causing lacunar strokes.'
  },
  {
    id: 'ic-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient presents with pure motor hemiparesis affecting face, arm, and leg equally without sensory loss. The lacunar infarct is most likely located in:',
    options: [
      'Anterior limb of internal capsule',
      'Posterior limb of internal capsule or basis pontis',
      'Thalamus',
      'Medulla',
      'Cerebellum'
    ],
    correctAnswer: 1,
    explanation: 'Pure motor hemiparesis (face, arm, leg equally affected without sensory/visual loss) is a classic lacunar syndrome from small vessel occlusion in the posterior limb of the internal capsule or basis pontis, where corticospinal and corticobulbar fibers are concentrated.'
  },
  {
    id: 'ic-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A lesion of the posterior limb of the internal capsule affecting the thalamocortical sensory fibers would cause:',
    options: [
      'Ipsilateral sensory loss',
      'Contralateral hemisensory loss',
      'Bilateral sensory loss',
      'No sensory deficit',
      'Cerebellar ataxia'
    ],
    correctAnswer: 1,
    explanation: 'The posterior limb carries sensory thalamocortical fibers from VPL/VPM to sensory cortex. Lesions cause contralateral hemisensory loss affecting face, arm, and leg. Combined motor and sensory loss (sensorimotor stroke) occurs when both pathways are involved.'
  },
  {
    id: 'ic-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Meyer loop (part of the optic radiation) passes through which region?',
    options: [
      'Genu of internal capsule',
      'Sublenticular and retrolenticular parts, looping into temporal lobe',
      'Anterior limb only',
      'External capsule',
      'Corpus callosum'
    ],
    correctAnswer: 1,
    explanation: 'Meyer loop carries inferior visual field information (superior retinal fibers) from LGN around the temporal horn of the lateral ventricle before reaching the visual cortex. Temporal lobe surgery can damage it, causing contralateral superior quadrantanopia ("pie in the sky").'
  }
];

// Capsulele albe externă şi extremă
export const externalExtremeCapsuleQuestions: Question[] = [
  {
    id: 'eec-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The external capsule is located between which structures?',
    options: [
      'Caudate and putamen',
      'Putamen and claustrum',
      'Claustrum and insula',
      'Thalamus and putamen',
      'Caudate and thalamus'
    ],
    correctAnswer: 1,
    explanation: 'The external capsule is a thin layer of white matter located between the putamen (medially) and the claustrum (laterally). It contains corticostriate and long association fibers.'
  },
  {
    id: 'eec-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The extreme capsule is located between which structures?',
    options: [
      'Putamen and claustrum',
      'Claustrum and insular cortex',
      'Caudate and thalamus',
      'Globus pallidus and putamen',
      'Thalamus and internal capsule'
    ],
    correctAnswer: 1,
    explanation: 'The extreme capsule is the thin layer of white matter between the claustrum medially and the insular cortex laterally. It contains connections between the insula and temporal/frontal cortices.'
  },
  {
    id: 'eec-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The claustrum is located between:',
    options: [
      'Internal and external capsules',
      'External and extreme capsules',
      'Putamen and caudate',
      'Thalamus and hypothalamus',
      'Globus pallidus segments'
    ],
    correctAnswer: 1,
    explanation: 'The claustrum is a thin sheet of gray matter located between the external capsule (medially) and extreme capsule (laterally). Its function is debated but may involve multisensory integration and consciousness.'
  },
  {
    id: 'eec-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The external capsule contains fibers of which association tract?',
    options: [
      'Superior longitudinal fasciculus',
      'Uncinate fasciculus (partially)',
      'Corpus callosum',
      'Optic radiation',
      'Corticospinal tract'
    ],
    correctAnswer: 1,
    explanation: 'The external capsule contains some fibers of the uncinate fasciculus connecting the orbitofrontal cortex with the anterior temporal lobe, as well as claustrocortical connections and other association fibers.'
  },
  {
    id: 'eec-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The extreme capsule primarily contains connections between:',
    options: [
      'Motor and premotor areas',
      'Insula and auditory/language-related temporal areas',
      'Visual areas only',
      'Thalamus and cortex',
      'Cerebellum and cortex'
    ],
    correctAnswer: 1,
    explanation: 'The extreme capsule contains fibers connecting the insula with temporal and frontal cortices, including language-related areas. It may contribute to the ventral language pathway and auditory processing.'
  },
  {
    id: 'eec-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The claustrum has reciprocal connections with:',
    options: [
      'Cerebellum only',
      'Nearly all areas of the cerebral cortex',
      'Spinal cord',
      'Brainstem nuclei only',
      'Thalamus only'
    ],
    correctAnswer: 1,
    explanation: 'The claustrum has extensive reciprocal connections with nearly all cortical areas. This widespread connectivity has led to hypotheses about its role in integrating information across modalities and potentially in consciousness.'
  },
  {
    id: 'eec-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The external capsule receives blood supply from which arteries?',
    options: [
      'Posterior cerebral artery only',
      'Lateral lenticulostriate arteries (MCA branches)',
      'Anterior cerebral artery only',
      'Vertebral artery',
      'Basilar artery'
    ],
    correctAnswer: 1,
    explanation: 'The external capsule, like the adjacent putamen and globus pallidus, is supplied by lenticulostriate arteries from the middle cerebral artery. This explains why it can be involved in striatocapsular infarctions.'
  },
  {
    id: 'eec-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Recent research suggests the extreme capsule may be part of a ventral pathway for:',
    options: [
      'Motor control',
      'Language processing (connecting temporal and frontal language areas)',
      'Visual processing only',
      'Vestibular function',
      'Olfaction'
    ],
    correctAnswer: 1,
    explanation: 'The extreme capsule fiber system is now recognized as part of the ventral language pathway, running from posterior temporal regions to frontal language areas parallel to but distinct from the arcuate fasciculus. It may be important for semantic aspects of language.'
  },
  {
    id: 'eec-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Stimulation of the claustrum in some studies has been associated with:',
    options: [
      'Enhanced motor function',
      'Disruption of consciousness',
      'Improved memory',
      'Visual hallucinations',
      'Auditory enhancement'
    ],
    correctAnswer: 1,
    explanation: 'Electrical stimulation of the claustrum has been reported to cause transient loss of consciousness and behavioral arrest in some patients, supporting theories that it may play a role in conscious awareness and integration of sensory information.'
  },
  {
    id: 'eec-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'In "striatocapsular" infarction from MCA occlusion, which structures are typically involved?',
    options: [
      'Thalamus and hypothalamus',
      'Striatum, internal capsule, and external capsule',
      'Cerebellum and brainstem',
      'Occipital lobe',
      'Hippocampus'
    ],
    correctAnswer: 1,
    explanation: 'Striatocapsular infarction results from occlusion of lenticulostriate arteries or proximal MCA and affects the caudate, putamen, internal capsule, and external capsule. It causes contralateral hemiparesis and may include sensory loss and aphasia (if dominant hemisphere).'
  }
];

// Corpul calos
export const corpusCallosumQuestions: Question[] = [
  {
    id: 'cc-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The corpus callosum connects:',
    options: [
      'Thalamus to hypothalamus',
      'The two cerebral hemispheres',
      'Frontal to occipital lobes',
      'Cerebrum to cerebellum',
      'Brainstem to spinal cord'
    ],
    correctAnswer: 1,
    explanation: 'The corpus callosum is the largest commissure in the brain, containing about 200 million axons connecting homologous areas of the two cerebral hemispheres. It enables interhemispheric communication and coordination.'
  },
  {
    id: 'cc-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The parts of the corpus callosum from anterior to posterior are:',
    options: [
      'Body, genu, splenium, rostrum',
      'Rostrum, genu, body, splenium',
      'Splenium, body, genu, rostrum',
      'Genu, rostrum, body, splenium',
      'Rostrum, body, genu, splenium'
    ],
    correctAnswer: 1,
    explanation: 'From anterior to posterior, the corpus callosum consists of: rostrum (inferior continuation curving under the genu), genu (anterior curved portion), body (middle portion), and splenium (posterior rounded end).'
  },
  {
    id: 'cc-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The splenium of the corpus callosum primarily connects which cortical regions?',
    options: [
      'Frontal lobes',
      'Occipital and posterior parietal lobes',
      'Temporal pole',
      'Motor cortices',
      'Cingulate gyri'
    ],
    correctAnswer: 1,
    explanation: 'The splenium, the posterior expansion of the corpus callosum, connects the occipital lobes and posterior parietal regions. Lesions can cause disconnection syndromes affecting visual processing between hemispheres.'
  },
  {
    id: 'cc-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The genu of the corpus callosum primarily connects:',
    options: [
      'Occipital cortices',
      'Prefrontal cortices',
      'Motor cortices',
      'Auditory cortices',
      'Somatosensory cortices'
    ],
    correctAnswer: 1,
    explanation: 'The genu connects the prefrontal cortices of the two hemispheres. Fibers from the genu curve forward as the forceps minor (frontal forceps) to reach the frontal poles.'
  },
  {
    id: 'cc-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The body of the corpus callosum connects:',
    options: [
      'Prefrontal cortices only',
      'Motor, premotor, and sensory cortices',
      'Occipital cortices only',
      'Limbic structures',
      'Brainstem'
    ],
    correctAnswer: 1,
    explanation: 'The body of the corpus callosum connects the motor, premotor, and somatosensory cortices of the two hemispheres. Damage can impair bilateral motor coordination and interhemispheric transfer of sensory information.'
  },
  {
    id: 'cc-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The corpus callosum is supplied by branches of which arteries?',
    options: [
      'Middle cerebral artery only',
      'Anterior cerebral artery (pericallosal branches)',
      'Posterior cerebral artery only',
      'Basilar artery',
      'Vertebral artery'
    ],
    correctAnswer: 1,
    explanation: 'The corpus callosum receives blood supply primarily from the pericallosal artery (a branch of the anterior cerebral artery) and posterior pericallosal artery from the posterior cerebral artery. The splenium has dual supply.'
  },
  {
    id: 'cc-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The fibers passing through the splenium to the occipital lobes form which structure?',
    options: [
      'Forceps minor',
      'Forceps major (occipital forceps)',
      'Corona radiata',
      'Internal capsule',
      'External capsule'
    ],
    correctAnswer: 1,
    explanation: 'The forceps major (occipital forceps) consists of callosal fibers from the splenium curving posteriorly to connect the occipital lobes. The forceps minor similarly curves from the genu to connect the frontal poles.'
  },
  {
    id: 'cc-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Complete callosotomy (split-brain) patients show which characteristic finding?',
    options: [
      'Complete paralysis',
      'Inability to name objects in left visual field or left hand',
      'Loss of vision',
      'Loss of hearing',
      'Complete amnesia'
    ],
    correctAnswer: 1,
    explanation: 'After callosotomy, visual or tactile information from the left side cannot reach the language-dominant left hemisphere. Patients cannot verbally name objects in the left visual field or identify objects held in the left hand, though they can point to or draw them.'
  },
  {
    id: 'cc-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Alien hand syndrome following callosal lesion typically affects which hand?',
    options: [
      'Right hand only',
      'Left hand (controlled by disconnected right hemisphere)',
      'Both hands equally',
      'Neither hand',
      'Dominant hand always'
    ],
    correctAnswer: 1,
    explanation: 'Callosal alien hand syndrome typically affects the left hand (controlled by the right hemisphere), which performs autonomous actions that conflict with the right hand. The non-dominant hemisphere acts independently, without verbal conscious awareness from the dominant hemisphere.'
  },
  {
    id: 'cc-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A left posterior cerebral artery stroke affecting the splenium and left occipital lobe causes alexia without agraphia because:',
    options: [
      'Broca area is damaged',
      'Visual information cannot reach left language areas from either hemisphere',
      'Wernicke area is damaged',
      'Motor cortex is damaged',
      'Angular gyrus is directly damaged'
    ],
    correctAnswer: 1,
    explanation: 'This lesion destroys the left visual cortex (causing right hemianopia) and the splenium (preventing visual information from the intact right visual cortex from reaching left language areas). Patients can write (intact motor/language systems) but cannot read what they wrote.'
  }
];

// Trigonul cerebral (Fornix)
export const fornixQuestions: Question[] = [
  {
    id: 'fx-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The fornix connects which structures?',
    options: [
      'Thalamus to hypothalamus',
      'Hippocampus to mammillary bodies and septal area',
      'Frontal to occipital lobes',
      'Two cerebral hemispheres',
      'Cerebellum to cortex'
    ],
    correctAnswer: 1,
    explanation: 'The fornix is the major efferent pathway of the hippocampus, carrying fibers to the mammillary bodies, septal nuclei, and other targets. It is essential for memory circuits and is part of the Papez circuit.'
  },
  {
    id: 'fx-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The parts of the fornix from hippocampus to mammillary bodies are:',
    options: [
      'Body, column, crus, fimbria',
      'Fimbria, crus, body, column',
      'Column, body, crus, fimbria',
      'Crus, fimbria, body, column',
      'Fimbria, column, body, crus'
    ],
    correctAnswer: 1,
    explanation: 'From the hippocampus, the fornix progresses as: fimbria (along the hippocampus), crus (curves posteriorly), body (in the midline under corpus callosum), and column (descending to the mammillary body).'
  },
  {
    id: 'fx-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The body of the fornix lies inferior to which structure?',
    options: [
      'Thalamus',
      'Corpus callosum',
      'Hypothalamus',
      'Brainstem',
      'Insula'
    ],
    correctAnswer: 1,
    explanation: 'The body of the fornix is a paired structure that runs in the midline beneath the corpus callosum and above the thalamus and third ventricle. It lies within the septum pellucidum connecting the two leaves of this membrane.'
  },
  {
    id: 'fx-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The commissure of the fornix (hippocampal commissure) connects:',
    options: [
      'Two thalami',
      'Two hippocampi via their crura',
      'Two mammillary bodies',
      'Fornix to corpus callosum',
      'Fornix to cingulate'
    ],
    correctAnswer: 1,
    explanation: 'The commissure of the fornix (hippocampal commissure, psalterium) is a small commissure between the two crura of the fornix, connecting the hippocampi of the two hemispheres. It lies beneath the splenium of the corpus callosum.'
  },
  {
    id: 'fx-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The column of the fornix passes through or near which structure to reach the mammillary body?',
    options: [
      'Internal capsule',
      'Hypothalamus',
      'Thalamus',
      'Corpus callosum',
      'Brainstem'
    ],
    correctAnswer: 1,
    explanation: 'The column of the fornix descends through the hypothalamus to terminate primarily in the mammillary body. Some fibers (precommissural fornix) end in the septal nuclei and nucleus accumbens before reaching the hypothalamus.'
  },
  {
    id: 'fx-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The fimbria of the hippocampus is located:',
    options: [
      'At the anterior pole of hippocampus',
      'Along the medial edge of the hippocampus',
      'In the frontal lobe',
      'In the occipital lobe',
      'In the brainstem'
    ],
    correctAnswer: 1,
    explanation: 'The fimbria is a flat band of white matter along the medial edge of the hippocampus, formed by hippocampal efferent fibers. It continues posteriorly as the crus of the fornix.'
  },
  {
    id: 'fx-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The fornix is part of which limbic circuit?',
    options: [
      'Visual pathway',
      'Papez circuit',
      'Auditory pathway',
      'Motor pathway',
      'Somatosensory pathway'
    ],
    correctAnswer: 1,
    explanation: 'The fornix is a key component of the Papez circuit: hippocampus → fornix → mammillary body → mammillothalamic tract → anterior thalamus → cingulate → parahippocampal gyrus → hippocampus. This circuit is important for memory and emotion.'
  },
  {
    id: 'fx-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Bilateral fornix damage would most likely cause:',
    options: [
      'Visual loss',
      'Anterograde amnesia',
      'Hemiparesis',
      'Aphasia',
      'Ataxia'
    ],
    correctAnswer: 1,
    explanation: 'Bilateral fornix damage interrupts the hippocampal output pathway, causing anterograde amnesia (inability to form new declarative memories) similar to bilateral hippocampal damage. Surgical damage during colloid cyst removal can cause this.'
  },
  {
    id: 'fx-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A colloid cyst of the third ventricle can damage the fornix because:',
    options: [
      'The fornix is in the fourth ventricle',
      'The columns of the fornix bound the foramen of Monro',
      'The fornix is in the lateral sulcus',
      'The fornix passes through the brainstem',
      'The fornix is in the occipital lobe'
    ],
    correctAnswer: 1,
    explanation: 'The columns of the fornix form the anterior boundary of the foramen of Monro (interventricular foramen). Colloid cysts arise in this location and can compress the fornices, causing hydrocephalus and memory impairment.'
  },
  {
    id: 'fx-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The precommissural fornix terminates primarily in:',
    options: [
      'Mammillary bodies',
      'Septal nuclei and nucleus accumbens',
      'Occipital cortex',
      'Cerebellum',
      'Brainstem'
    ],
    correctAnswer: 1,
    explanation: 'The fornix divides at the anterior commissure into precommissural and postcommissural components. The precommissural fornix ends in the septal nuclei, nucleus accumbens, and diagonal band, while the postcommissural fornix continues to the mammillary bodies.'
  }
];

// Comisurile albe anterioară şi posterioară
export const anteriorPosteriorCommissuresQuestions: Question[] = [
  {
    id: 'apc-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The anterior commissure connects which structures?',
    options: [
      'Two thalami',
      'Temporal lobes and olfactory structures',
      'Two occipital lobes',
      'Frontal lobes only',
      'Cerebellum to cortex'
    ],
    correctAnswer: 1,
    explanation: 'The anterior commissure crosses the midline at the lamina terminalis and connects the temporal lobes (including amygdalae) and olfactory structures (anterior olfactory nuclei). It is the second largest cerebral commissure after the corpus callosum.'
  },
  {
    id: 'apc-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The anterior commissure is located:',
    options: [
      'Posterior to the third ventricle',
      'In the anterior wall of the third ventricle (lamina terminalis)',
      'In the fourth ventricle',
      'In the corpus callosum',
      'In the brainstem'
    ],
    correctAnswer: 1,
    explanation: 'The anterior commissure crosses the midline in the lamina terminalis, forming the anterior wall of the third ventricle. It lies anterior to the columns of the fornix and inferior to the rostrum of the corpus callosum.'
  },
  {
    id: 'apc-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The posterior commissure is located at:',
    options: [
      'The anterior wall of the third ventricle',
      'The junction of the third ventricle and cerebral aqueduct',
      'Within the corpus callosum',
      'In the fourth ventricle',
      'In the lateral ventricle'
    ],
    correctAnswer: 1,
    explanation: 'The posterior commissure is located at the junction of the third ventricle and cerebral aqueduct, superior to the superior colliculi and inferior to the pineal gland. It marks the posterior boundary of the diencephalon.'
  },
  {
    id: 'apc-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The anterior commissure contains two distinct parts connecting:',
    options: [
      'Motor cortices only',
      'Olfactory bulbs (anterior part) and temporal neocortex/amygdala (posterior part)',
      'Visual cortices',
      'Auditory cortices only',
      'Frontal cortices only'
    ],
    correctAnswer: 1,
    explanation: 'The anterior commissure has an anterior (olfactory) part connecting the olfactory bulbs and anterior olfactory nuclei, and a larger posterior (temporal) part connecting the middle and inferior temporal gyri and the amygdalae.'
  },
  {
    id: 'apc-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The posterior commissure contains fibers involved in:',
    options: [
      'Motor control',
      'Pupillary light reflex and vertical gaze',
      'Hearing',
      'Memory',
      'Language'
    ],
    correctAnswer: 1,
    explanation: 'The posterior commissure contains fibers connecting pretectal nuclei (for consensual pupillary light reflex) and fibers involved in vertical gaze mechanisms. Lesions in this area can cause Parinaud syndrome with impaired upgaze.'
  },
  {
    id: 'apc-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The anterior commissure is used as a reference point for:',
    options: [
      'Calculating cardiac output',
      'Stereotactic neurosurgery (AC-PC line)',
      'Measuring blood pressure',
      'Assessing hearing',
      'Measuring visual acuity'
    ],
    correctAnswer: 1,
    explanation: 'The anterior commissure (AC) and posterior commissure (PC) define the AC-PC line, a standard reference plane in stereotactic neurosurgery. The intercommissural line helps locate deep brain structures for procedures like DBS.'
  },
  {
    id: 'apc-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'In patients with agenesis of the corpus callosum, the anterior commissure:',
    options: [
      'Is always absent',
      'May be enlarged to partially compensate',
      'Is unaffected',
      'Becomes part of the internal capsule',
      'Degenerates completely'
    ],
    correctAnswer: 1,
    explanation: 'In corpus callosum agenesis, the anterior commissure is often enlarged (hypertrophic) and may carry fibers that would normally cross in the corpus callosum, providing partial interhemispheric communication.'
  },
  {
    id: 'apc-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A lesion involving the posterior commissure and adjacent pretectum would cause:',
    options: [
      'Broca aphasia',
      'Light-near dissociation of pupils and upgaze palsy',
      'Deafness',
      'Motor weakness',
      'Memory loss'
    ],
    correctAnswer: 1,
    explanation: 'Lesions of the posterior commissure and pretectum cause Parinaud syndrome (dorsal midbrain syndrome): impaired upgaze, light-near dissociation (pupils react to accommodation but not light), convergence-retraction nystagmus, and lid retraction.'
  },
  {
    id: 'apc-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The anterior commissure provides an alternative pathway for interhemispheric transfer of:',
    options: [
      'Motor commands',
      'Emotional and olfactory information',
      'Visual information primarily',
      'Auditory information only',
      'Somatosensory information'
    ],
    correctAnswer: 1,
    explanation: 'The anterior commissure provides interhemispheric transfer of emotional information (via amygdala connections) and olfactory information. In split-brain patients, emotional responses can still be transferred via the intact anterior commissure.'
  },
  {
    id: 'apc-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The distance between the anterior and posterior commissures (AC-PC distance) is approximately:',
    options: [
      '5-10 mm',
      '23-28 mm',
      '50-60 mm',
      '100 mm',
      '150 mm'
    ],
    correctAnswer: 1,
    explanation: 'The AC-PC distance is approximately 23-28 mm in adults. This measurement, along with the AC-PC line orientation, is fundamental for stereotactic localization of deep brain targets in neurosurgery.'
  }
];

// Cornul lui Amon, fimbria şi girusul dentat
export const hippocampalFormationQuestions: Question[] = [
  {
    id: 'hf-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The cornu Ammonis (CA, Ammon horn) is another name for:',
    options: [
      'Amygdala',
      'Hippocampus proper',
      'Parahippocampal gyrus',
      'Fornix',
      'Entorhinal cortex'
    ],
    correctAnswer: 1,
    explanation: 'Cornu Ammonis (horn of Ammon, named for the Egyptian god with ram horns) refers to the hippocampus proper. It is divided into subfields CA1, CA2, CA3, and CA4, each with distinct connectivity and vulnerability patterns.'
  },
  {
    id: 'hf-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The dentate gyrus is located:',
    options: [
      'In the frontal lobe',
      'Between the hippocampus and parahippocampal gyrus, interlocking with CA3',
      'In the occipital lobe',
      'In the thalamus',
      'In the brainstem'
    ],
    correctAnswer: 1,
    explanation: 'The dentate gyrus is a C-shaped structure that interlocks with the CA3 region of the hippocampus. It receives input from the entorhinal cortex (via the perforant path) and projects to CA3 via mossy fibers.'
  },
  {
    id: 'hf-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The fimbria is:',
    options: [
      'A layer of gray matter',
      'The white matter output tract of the hippocampus',
      'A blood vessel',
      'Part of the thalamus',
      'A cranial nerve'
    ],
    correctAnswer: 1,
    explanation: 'The fimbria is a band of white matter along the medial edge of the hippocampus, carrying efferent axons from hippocampal pyramidal cells. It continues as the crus and then the body of the fornix.'
  },
  {
    id: 'hf-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The hippocampal formation includes which structures?',
    options: [
      'Thalamus and hypothalamus',
      'Hippocampus, dentate gyrus, and subiculum',
      'Caudate and putamen',
      'Frontal and parietal cortex',
      'Cerebellum and brainstem'
    ],
    correctAnswer: 1,
    explanation: 'The hippocampal formation comprises the hippocampus proper (CA1-4), dentate gyrus, and subiculum. Some definitions also include the presubiculum, parasubiculum, and entorhinal cortex as part of the extended hippocampal region.'
  },
  {
    id: 'hf-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'CA1 neurons are particularly vulnerable to which type of injury?',
    options: [
      'Trauma',
      'Hypoxia/ischemia',
      'Infection',
      'Tumor compression',
      'Radiation'
    ],
    correctAnswer: 1,
    explanation: 'CA1 pyramidal neurons (in the "Sommer sector") are highly vulnerable to hypoxic/ischemic injury and excitotoxicity due to high glutamate receptor density. They are selectively damaged in global ischemia, cardiac arrest, and temporal lobe epilepsy.'
  },
  {
    id: 'hf-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The trisynaptic pathway through the hippocampus proceeds:',
    options: [
      'CA1 → CA3 → dentate gyrus',
      'Entorhinal cortex → dentate gyrus → CA3 → CA1',
      'CA3 → CA1 → dentate gyrus',
      'Subiculum → CA1 → entorhinal cortex',
      'Fimbria → CA3 → CA1'
    ],
    correctAnswer: 1,
    explanation: 'The classic trisynaptic circuit: entorhinal cortex (layer II) → perforant path → dentate gyrus granule cells → mossy fibers → CA3 pyramidal cells → Schaffer collaterals → CA1 pyramidal cells → subiculum/entorhinal cortex.'
  },
  {
    id: 'hf-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The dentate gyrus is notable for:',
    options: [
      'Being the largest structure in the brain',
      'Ongoing adult neurogenesis',
      'Having no synaptic connections',
      'Controlling motor function',
      'Processing visual information'
    ],
    correctAnswer: 1,
    explanation: 'The dentate gyrus is one of few brain regions where neurogenesis continues into adulthood. New granule cells are generated in the subgranular zone and integrate into existing circuits, possibly contributing to memory and learning.'
  },
  {
    id: 'hf-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'In temporal lobe epilepsy, hippocampal sclerosis typically shows:',
    options: [
      'Selective loss of CA4 neurons only',
      'Neuronal loss in CA1 and CA4, with relative sparing of CA2',
      'Complete destruction of all CA fields equally',
      'Selective dentate gyrus damage',
      'No neuronal loss'
    ],
    correctAnswer: 1,
    explanation: 'Hippocampal sclerosis (mesial temporal sclerosis) in epilepsy shows characteristic neuronal loss in CA1, CA4 (end folium), and dentate gyrus, with relative sparing of CA2 (the "resistant sector"). CA3 is variably affected.'
  },
  {
    id: 'hf-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Place cells in the hippocampus are primarily found in:',
    options: [
      'Dentate gyrus',
      'CA1 and CA3 regions',
      'Subiculum only',
      'Fimbria',
      'Entorhinal cortex only'
    ],
    correctAnswer: 1,
    explanation: 'Place cells, which fire when an animal is in a specific location, are found primarily in CA1 and CA3. Grid cells in the entorhinal cortex provide spatial input. The discovery of place cells earned O\'Keefe the 2014 Nobel Prize.'
  },
  {
    id: 'hf-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Mossy fiber sprouting in the dentate gyrus is associated with:',
    options: [
      'Normal aging',
      'Temporal lobe epilepsy (creating recurrent excitatory circuits)',
      'Parkinson disease',
      'Stroke recovery',
      'Sleep enhancement'
    ],
    correctAnswer: 1,
    explanation: 'In temporal lobe epilepsy, mossy fibers from dentate granule cells sprout abnormally and form recurrent connections with other granule cells, creating hyperexcitable circuits that contribute to seizure generation and propagation.'
  }
];
