import type { Question } from './questions';

// Emisferele cerebrale – şanţuri şi girusuri
export const cerebralHemisphereSulciGyriQuestions: Question[] = [
  {
    id: 'ch-sg-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which sulcus separates the frontal lobe from the parietal lobe?',
    options: [
      'Lateral (Sylvian) sulcus',
      'Central (Rolandic) sulcus',
      'Parieto-occipital sulcus',
      'Calcarine sulcus',
      'Cingulate sulcus'
    ],
    correctAnswer: 1,
    explanation: 'The central sulcus (fissure of Rolando) is a prominent landmark separating the frontal lobe anteriorly from the parietal lobe posteriorly. The precentral gyrus (motor cortex) lies anterior to it, and the postcentral gyrus (sensory cortex) lies posterior.'
  },
  {
    id: 'ch-sg-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The lateral (Sylvian) fissure separates which lobes?',
    options: [
      'Frontal from parietal',
      'Temporal from frontal and parietal lobes',
      'Occipital from parietal',
      'Frontal from occipital',
      'Temporal from occipital'
    ],
    correctAnswer: 1,
    explanation: 'The lateral sulcus (Sylvian fissure) is a deep cleft separating the temporal lobe below from the frontal and parietal lobes above. The insula lies deep within this fissure, covered by the opercula.'
  },
  {
    id: 'ch-sg-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Which gyrus lies immediately anterior to the central sulcus?',
    options: [
      'Postcentral gyrus',
      'Superior frontal gyrus',
      'Precentral gyrus',
      'Angular gyrus',
      'Supramarginal gyrus'
    ],
    correctAnswer: 2,
    explanation: 'The precentral gyrus lies immediately anterior to the central sulcus and contains the primary motor cortex (Brodmann area 4). It is responsible for voluntary motor control of the contralateral body.'
  },
  {
    id: 'ch-sg-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The insula is located deep to which fissure?',
    options: [
      'Longitudinal fissure',
      'Transverse fissure',
      'Lateral (Sylvian) fissure',
      'Parieto-occipital fissure',
      'Calcarine fissure'
    ],
    correctAnswer: 2,
    explanation: 'The insula (Island of Reil) is a buried cortical region deep to the lateral sulcus, covered by the frontal, parietal, and temporal opercula. It is involved in gustatory processing, visceral sensation, and emotional awareness.'
  },
  {
    id: 'ch-sg-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The cingulate gyrus is located in relation to which structure?',
    options: [
      'Lateral to the insula',
      'Superior to the corpus callosum',
      'Inferior to the temporal lobe',
      'Posterior to the occipital pole',
      'Within the lateral sulcus'
    ],
    correctAnswer: 1,
    explanation: 'The cingulate gyrus arches over the corpus callosum on the medial surface of each hemisphere. It is part of the limbic system and plays roles in emotion, attention, and autonomic regulation.'
  },
  {
    id: 'ch-sg-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which sulcus marks the boundary between the parietal and occipital lobes on the medial surface?',
    options: [
      'Central sulcus',
      'Calcarine sulcus',
      'Parieto-occipital sulcus',
      'Cingulate sulcus',
      'Collateral sulcus'
    ],
    correctAnswer: 2,
    explanation: 'The parieto-occipital sulcus is a deep groove on the medial surface of the hemisphere that separates the parietal lobe from the occipital lobe. It joins the calcarine sulcus at an acute angle.'
  },
  {
    id: 'ch-sg-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The opercula covering the insula include all EXCEPT:',
    options: [
      'Frontal operculum',
      'Parietal operculum',
      'Temporal operculum',
      'Occipital operculum',
      'All of the above cover the insula'
    ],
    correctAnswer: 3,
    explanation: 'The insula is covered by three opercula: frontal (containing Broca area), parietal, and temporal. There is no occipital operculum. The opercula can be retracted surgically to access the insular cortex.'
  },
  {
    id: 'ch-sg-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with a stroke affecting the posterior inferior frontal gyrus of the dominant hemisphere presents with which deficit?',
    options: [
      'Receptive aphasia (Wernicke)',
      'Expressive aphasia (Broca)',
      'Global aphasia',
      'Conduction aphasia',
      'Anomic aphasia'
    ],
    correctAnswer: 1,
    explanation: 'The posterior inferior frontal gyrus (pars opercularis and pars triangularis) of the dominant hemisphere contains Broca area (areas 44, 45). Lesions cause Broca (expressive/motor) aphasia with nonfluent speech but relatively preserved comprehension.'
  },
  {
    id: 'ch-sg-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The "hand knob" or omega sign on axial MRI corresponds to which functional area?',
    options: [
      'Primary visual cortex',
      'Primary auditory cortex',
      'Hand motor area of precentral gyrus',
      'Wernicke area',
      'Supplementary motor area'
    ],
    correctAnswer: 2,
    explanation: 'The "hand knob" is an omega-shaped or epsilon-shaped region of the precentral gyrus visible on axial MRI that corresponds to the hand motor area. Its identification is crucial for neurosurgical planning to avoid hand motor deficits.'
  },
  {
    id: 'ch-sg-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A tumor involving the posterior superior temporal gyrus of the dominant hemisphere would most likely cause:',
    options: [
      'Contralateral hemiparesis',
      'Visual field defect',
      'Receptive (Wernicke) aphasia',
      'Apraxia',
      'Prosopagnosia'
    ],
    correctAnswer: 2,
    explanation: 'The posterior superior temporal gyrus of the dominant hemisphere contains Wernicke area (area 22). Lesions cause receptive (fluent) aphasia characterized by impaired comprehension, fluent but meaningless speech with paraphasias and neologisms.'
  }
];

// Faţa inferioară a emisferelor cerebrale
export const inferiorSurfaceQuestions: Question[] = [
  {
    id: 'inf-surf-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The olfactory bulb and tract lie on which surface of the frontal lobe?',
    options: [
      'Lateral surface',
      'Medial surface',
      'Orbital (inferior) surface',
      'Superior surface',
      'Posterior surface'
    ],
    correctAnswer: 2,
    explanation: 'The olfactory bulb and tract lie in the olfactory sulcus on the orbital (inferior) surface of the frontal lobe. The gyrus rectus lies medial to this sulcus, and the orbital gyri lie lateral to it.'
  },
  {
    id: 'inf-surf-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The parahippocampal gyrus is located on which surface of the temporal lobe?',
    options: [
      'Lateral surface',
      'Superior surface',
      'Inferior (tentorial) surface',
      'Anterior surface',
      'Posterior surface'
    ],
    correctAnswer: 2,
    explanation: 'The parahippocampal gyrus lies on the inferior (tentorial) surface of the temporal lobe, medial to the collateral sulcus. Its anterior end forms the uncus, which contains the amygdala and is prone to herniation.'
  },
  {
    id: 'inf-surf-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The uncus is the anterior hooked portion of which gyrus?',
    options: [
      'Cingulate gyrus',
      'Parahippocampal gyrus',
      'Fusiform gyrus',
      'Lingual gyrus',
      'Inferior temporal gyrus'
    ],
    correctAnswer: 1,
    explanation: 'The uncus is the hook-shaped anterior end of the parahippocampal gyrus. It contains part of the amygdala and olfactory cortex. Uncal herniation through the tentorial notch compresses CN III and the midbrain.'
  },
  {
    id: 'inf-surf-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The collateral sulcus separates which structures on the inferior temporal surface?',
    options: [
      'Uncus from parahippocampal gyrus',
      'Parahippocampal gyrus from fusiform gyrus',
      'Fusiform gyrus from inferior temporal gyrus',
      'Lingual gyrus from cuneus',
      'Cingulate gyrus from parahippocampal gyrus'
    ],
    correctAnswer: 1,
    explanation: 'The collateral sulcus is a prominent groove on the inferior temporal surface separating the parahippocampal gyrus medially from the fusiform (occipitotemporal) gyrus laterally. It extends posteriorly toward the occipital lobe.'
  },
  {
    id: 'inf-surf-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The fusiform gyrus is also known as the:',
    options: [
      'Parahippocampal gyrus',
      'Medial occipitotemporal gyrus',
      'Lateral occipitotemporal gyrus',
      'Lingual gyrus',
      'Inferior temporal gyrus'
    ],
    correctAnswer: 2,
    explanation: 'The fusiform gyrus is also called the lateral occipitotemporal gyrus. It lies between the collateral sulcus medially and the occipitotemporal sulcus laterally. The fusiform face area within it is specialized for face recognition.'
  },
  {
    id: 'inf-surf-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The gyrus rectus is located in which position on the orbital surface?',
    options: [
      'Most lateral, adjacent to the lateral sulcus',
      'Most medial, between the olfactory sulcus and longitudinal fissure',
      'Central, surrounded by orbital gyri',
      'Posterior, adjacent to the temporal pole',
      'Anterior, at the frontal pole'
    ],
    correctAnswer: 1,
    explanation: 'The gyrus rectus (straight gyrus) is the most medial gyrus on the orbital surface of the frontal lobe, lying between the olfactory sulcus laterally and the longitudinal fissure medially. It is part of the orbitofrontal cortex.'
  },
  {
    id: 'inf-surf-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The occipitotemporal sulcus separates which structures?',
    options: [
      'Parahippocampal gyrus from fusiform gyrus',
      'Fusiform gyrus from inferior temporal gyrus',
      'Lingual gyrus from fusiform gyrus',
      'Cuneus from lingual gyrus',
      'Superior temporal gyrus from middle temporal gyrus'
    ],
    correctAnswer: 1,
    explanation: 'The occipitotemporal sulcus lies on the inferior surface of the temporal lobe, separating the fusiform gyrus (medially) from the inferior temporal gyrus (laterally). It runs parallel to the collateral sulcus.'
  },
  {
    id: 'inf-surf-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient cannot recognize familiar faces but has normal vision and can identify people by voice. A lesion of which structure is most likely?',
    options: [
      'Primary visual cortex',
      'Fusiform face area (fusiform gyrus)',
      'Superior temporal gyrus',
      'Parahippocampal place area',
      'Angular gyrus'
    ],
    correctAnswer: 1,
    explanation: 'Prosopagnosia (face blindness) results from damage to the fusiform face area in the fusiform gyrus, typically bilaterally or in the right hemisphere. Patients cannot recognize faces despite normal visual acuity and can identify people by other cues.'
  },
  {
    id: 'inf-surf-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'During transtentorial (uncal) herniation, which cranial nerve is typically compressed first?',
    options: [
      'Optic nerve (CN II)',
      'Oculomotor nerve (CN III)',
      'Trochlear nerve (CN IV)',
      'Abducens nerve (CN VI)',
      'Trigeminal nerve (CN V)'
    ],
    correctAnswer: 1,
    explanation: 'During uncal herniation, the uncus displaces medially over the tentorial edge, compressing the ipsilateral oculomotor nerve (CN III). This causes ipsilateral pupil dilation (mydriasis) due to loss of parasympathetic fibers. Progressive compression affects the cerebral peduncle.'
  },
  {
    id: 'inf-surf-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The anterior perforated substance on the inferior brain surface is bounded anteriorly by which structure?',
    options: [
      'Optic tract',
      'Olfactory trigone and striae',
      'Mammillary bodies',
      'Uncus',
      'Cerebral peduncle'
    ],
    correctAnswer: 1,
    explanation: 'The anterior perforated substance is bounded anteriorly by the olfactory trigone (where the olfactory tract divides into medial and lateral striae), laterally by the limen insulae, and posteriorly by the optic tract and anterior edge of uncus.'
  }
];

// Faţa laterală a emisferelor cerebrale
export const lateralSurfaceQuestions: Question[] = [
  {
    id: 'lat-surf-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The lateral surface of the frontal lobe contains how many major gyri?',
    options: [
      'Two gyri',
      'Three gyri (superior, middle, inferior frontal)',
      'Four gyri',
      'Five gyri',
      'One continuous gyrus'
    ],
    correctAnswer: 1,
    explanation: 'The lateral frontal lobe contains three horizontal gyri: superior, middle, and inferior frontal gyri, separated by superior and inferior frontal sulci. The inferior frontal gyrus is further divided into pars orbitalis, triangularis, and opercularis.'
  },
  {
    id: 'lat-surf-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Heschl gyrus (transverse temporal gyrus) contains which primary cortical area?',
    options: [
      'Primary motor cortex',
      'Primary somatosensory cortex',
      'Primary auditory cortex',
      'Primary visual cortex',
      'Primary gustatory cortex'
    ],
    correctAnswer: 2,
    explanation: 'Heschl gyrus (transverse temporal gyrus) is located on the superior surface of the temporal lobe within the lateral sulcus and contains the primary auditory cortex (Brodmann areas 41 and 42). It receives tonotopically organized input from the medial geniculate body.'
  },
  {
    id: 'lat-surf-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The angular gyrus is located in which lobe?',
    options: [
      'Frontal lobe',
      'Temporal lobe',
      'Parietal lobe',
      'Occipital lobe',
      'Insula'
    ],
    correctAnswer: 2,
    explanation: 'The angular gyrus (Brodmann area 39) is located in the inferior parietal lobule, posterior to the supramarginal gyrus. It wraps around the posterior end of the superior temporal sulcus and is involved in language, number processing, and spatial cognition.'
  },
  {
    id: 'lat-surf-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The supramarginal gyrus wraps around the posterior end of which sulcus?',
    options: [
      'Central sulcus',
      'Superior temporal sulcus',
      'Lateral sulcus (posterior ramus)',
      'Intraparietal sulcus',
      'Parieto-occipital sulcus'
    ],
    correctAnswer: 2,
    explanation: 'The supramarginal gyrus (Brodmann area 40) wraps around the posterior ascending ramus of the lateral sulcus. Together with the angular gyrus, it forms the inferior parietal lobule and is involved in phonological processing and tool use.'
  },
  {
    id: 'lat-surf-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The intraparietal sulcus divides the parietal lobe into which regions?',
    options: [
      'Precentral and postcentral gyri',
      'Superior and inferior parietal lobules',
      'Supramarginal and angular gyri',
      'Precuneus and cuneus',
      'Paracentral lobule and precuneus'
    ],
    correctAnswer: 1,
    explanation: 'The intraparietal sulcus runs horizontally across the lateral parietal lobe, dividing it into the superior parietal lobule above and the inferior parietal lobule (containing supramarginal and angular gyri) below.'
  },
  {
    id: 'lat-surf-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The pars triangularis and pars opercularis of the inferior frontal gyrus in the dominant hemisphere correspond to:',
    options: [
      'Primary motor cortex',
      'Broca area (motor speech area)',
      'Wernicke area',
      'Primary auditory cortex',
      'Prefrontal association cortex'
    ],
    correctAnswer: 1,
    explanation: 'The pars triangularis (area 45) and pars opercularis (area 44) of the inferior frontal gyrus in the dominant (usually left) hemisphere constitute Broca area, essential for speech production and language expression.'
  },
  {
    id: 'lat-surf-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which gyrus lies immediately posterior to the central sulcus?',
    options: [
      'Precentral gyrus',
      'Superior frontal gyrus',
      'Postcentral gyrus',
      'Supramarginal gyrus',
      'Angular gyrus'
    ],
    correctAnswer: 2,
    explanation: 'The postcentral gyrus lies immediately posterior to the central sulcus and contains the primary somatosensory cortex (Brodmann areas 1, 2, 3). It receives somatosensory input from the contralateral body via the ventral posterolateral and posteromedial thalamic nuclei.'
  },
  {
    id: 'lat-surf-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient has difficulty with reading but preserved writing ability. Lesion of which structure is most likely?',
    options: [
      'Broca area',
      'Wernicke area',
      'Angular gyrus of dominant hemisphere',
      'Primary visual cortex',
      'Arcuate fasciculus'
    ],
    correctAnswer: 2,
    explanation: 'Alexia without agraphia (pure word blindness) can result from angular gyrus lesions disconnecting visual input from language areas. The angular gyrus is critical for grapheme-to-phoneme conversion in reading. Classic cases involve left occipital lobe plus splenium lesions.'
  },
  {
    id: 'lat-surf-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Gerstmann syndrome (finger agnosia, right-left confusion, agraphia, acalculia) results from lesion of which region?',
    options: [
      'Broca area',
      'Angular gyrus of dominant hemisphere',
      'Temporal pole',
      'Prefrontal cortex',
      'Primary motor cortex'
    ],
    correctAnswer: 1,
    explanation: 'Gerstmann syndrome results from lesions of the angular gyrus in the dominant (usually left) parietal lobe. The classic tetrad includes finger agnosia, right-left disorientation, agraphia, and acalculia, reflecting the angular gyrus role in body schema and symbolic processing.'
  },
  {
    id: 'lat-surf-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A middle cerebral artery stroke affecting the superior division would most likely spare which area?',
    options: [
      'Broca area',
      'Primary motor cortex (face and arm)',
      'Primary somatosensory cortex',
      'Wernicke area',
      'Prefrontal cortex'
    ],
    correctAnswer: 3,
    explanation: 'The MCA superior division supplies the frontal and anterior parietal regions including Broca area and motor/sensory cortex for face and arm. Wernicke area in the posterior superior temporal gyrus is supplied by the inferior division and would be spared in superior division stroke.'
  }
];

// Faţa medială a emisferelor cerebrale
export const medialSurfaceQuestions: Question[] = [
  {
    id: 'med-surf-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The corpus callosum is best visualized on which surface of the cerebral hemisphere?',
    options: [
      'Lateral surface',
      'Inferior surface',
      'Medial surface',
      'Superior surface',
      'Orbital surface'
    ],
    correctAnswer: 2,
    explanation: 'The corpus callosum, the largest white matter commissure connecting the two hemispheres, is best seen on the medial surface. Its parts (rostrum, genu, body, splenium) are visible arching over the third ventricle and below the cingulate gyrus.'
  },
  {
    id: 'med-surf-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The precuneus is located between which sulci on the medial surface?',
    options: [
      'Central sulcus and parieto-occipital sulcus',
      'Marginal branch of cingulate sulcus and parieto-occipital sulcus',
      'Calcarine sulcus and parieto-occipital sulcus',
      'Cingulate sulcus and callosal sulcus',
      'Collateral sulcus and calcarine sulcus'
    ],
    correctAnswer: 1,
    explanation: 'The precuneus lies on the medial parietal surface between the marginal branch of the cingulate sulcus anteriorly and the parieto-occipital sulcus posteriorly. It is involved in visuospatial imagery, episodic memory, and self-referential processing.'
  },
  {
    id: 'med-surf-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The cuneus is located in which lobe?',
    options: [
      'Frontal lobe',
      'Parietal lobe',
      'Temporal lobe',
      'Occipital lobe',
      'Limbic lobe'
    ],
    correctAnswer: 3,
    explanation: 'The cuneus is a wedge-shaped gyrus on the medial surface of the occipital lobe, located between the parieto-occipital sulcus above and the calcarine sulcus below. It contains part of the primary and association visual cortex.'
  },
  {
    id: 'med-surf-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The paracentral lobule represents which functional areas?',
    options: [
      'Primary visual cortex only',
      'Motor and sensory areas for the lower limb',
      'Auditory association cortex',
      'Language areas',
      'Prefrontal association cortex'
    ],
    correctAnswer: 1,
    explanation: 'The paracentral lobule on the medial surface surrounds the superior end of the central sulcus. Its anterior part (precentral extension) contains motor cortex for the lower limb, and its posterior part (postcentral extension) contains sensory cortex for the lower limb and perineum.'
  },
  {
    id: 'med-surf-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The calcarine sulcus contains which primary cortical area along its banks?',
    options: [
      'Primary motor cortex',
      'Primary auditory cortex',
      'Primary visual cortex (V1)',
      'Primary somatosensory cortex',
      'Primary olfactory cortex'
    ],
    correctAnswer: 2,
    explanation: 'The primary visual cortex (V1, area 17, striate cortex) is located along the banks of the calcarine sulcus on the medial occipital surface. The upper bank represents the inferior visual field and the lower bank represents the superior visual field.'
  },
  {
    id: 'med-surf-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The cingulate gyrus is separated from the corpus callosum by which sulcus?',
    options: [
      'Cingulate sulcus',
      'Callosal sulcus',
      'Parieto-occipital sulcus',
      'Subparietal sulcus',
      'Collateral sulcus'
    ],
    correctAnswer: 1,
    explanation: 'The callosal sulcus separates the cingulate gyrus above from the corpus callosum below. The cingulate sulcus lies superior to the cingulate gyrus, separating it from the medial frontal and parietal cortex.'
  },
  {
    id: 'med-surf-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The lingual gyrus is located between which sulci?',
    options: [
      'Cingulate and callosal sulci',
      'Calcarine and collateral sulci',
      'Parieto-occipital and calcarine sulci',
      'Intraparietal and postcentral sulci',
      'Superior and inferior temporal sulci'
    ],
    correctAnswer: 1,
    explanation: 'The lingual gyrus lies on the medial and inferior occipitotemporal surface between the calcarine sulcus above and the collateral sulcus below. It is part of the visual association cortex and is involved in processing complex visual information.'
  },
  {
    id: 'med-surf-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with bilateral medial occipital lobe infarction cannot consciously perceive objects but can accurately reach for them. This phenomenon is called:',
    options: [
      'Prosopagnosia',
      'Blindsight',
      'Anton syndrome',
      'Balint syndrome',
      'Visual agnosia'
    ],
    correctAnswer: 1,
    explanation: 'Blindsight occurs when primary visual cortex (V1) in the calcarine region is damaged but patients retain unconscious visual processing via subcortical pathways (superior colliculus to pulvinar). They deny seeing but can respond to visual stimuli with above-chance accuracy.'
  },
  {
    id: 'med-surf-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Anterior cerebral artery occlusion affecting the paracentral lobule would produce which pattern of weakness?',
    options: [
      'Contralateral face and arm weakness',
      'Contralateral leg weakness greater than arm',
      'Ipsilateral hemiplegia',
      'Bilateral arm weakness',
      'Isolated facial weakness'
    ],
    correctAnswer: 1,
    explanation: 'The anterior cerebral artery supplies the medial frontal and parietal cortex including the paracentral lobule. Occlusion causes contralateral leg weakness and sensory loss greater than arm involvement, as the leg area is represented on the medial surface while arm and face are on the lateral surface (MCA territory).'
  },
  {
    id: 'med-surf-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient denies being blind despite complete cortical blindness and confabulates visual experiences. This syndrome is called:',
    options: [
      'Blindsight',
      'Anton syndrome (visual anosognosia)',
      'Balint syndrome',
      'Prosopagnosia',
      'Capgras syndrome'
    ],
    correctAnswer: 1,
    explanation: 'Anton syndrome (visual anosognosia) occurs with bilateral occipital lobe damage causing cortical blindness. Patients deny their blindness and confabulate visual experiences. It results from disconnection between visual and awareness networks, preventing recognition of the deficit.'
  }
];

// Lobul occipital
export const occipitalLobeQuestions: Question[] = [
  {
    id: 'occ-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The primary visual cortex corresponds to which Brodmann area?',
    options: [
      'Area 4',
      'Area 17',
      'Area 22',
      'Area 41',
      'Area 44'
    ],
    correctAnswer: 1,
    explanation: 'The primary visual cortex (V1, striate cortex) corresponds to Brodmann area 17. It is located along the banks of the calcarine sulcus and receives direct input from the lateral geniculate nucleus. It is characterized by the line of Gennari visible macroscopically.'
  },
  {
    id: 'occ-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The cuneus and lingual gyrus are separated by which sulcus?',
    options: [
      'Parieto-occipital sulcus',
      'Calcarine sulcus',
      'Collateral sulcus',
      'Lateral sulcus',
      'Central sulcus'
    ],
    correctAnswer: 1,
    explanation: 'The calcarine sulcus separates the cuneus (above) from the lingual gyrus (below) on the medial occipital surface. The primary visual cortex lies along both banks of this sulcus.'
  },
  {
    id: 'occ-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The blood supply to the primary visual cortex is primarily from which artery?',
    options: [
      'Anterior cerebral artery',
      'Middle cerebral artery',
      'Posterior cerebral artery',
      'Anterior choroidal artery',
      'Superior cerebellar artery'
    ],
    correctAnswer: 2,
    explanation: 'The posterior cerebral artery supplies the medial and inferior occipital lobe including the primary visual cortex. The occipital pole may have dual supply from MCA, which accounts for macular sparing in some PCA strokes.'
  },
  {
    id: 'occ-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Visual information from the upper visual field is processed in which part of the primary visual cortex?',
    options: [
      'Upper bank of calcarine sulcus (cuneus)',
      'Lower bank of calcarine sulcus (lingual gyrus)',
      'Occipital pole equally',
      'Parieto-occipital junction',
      'Lateral occipital cortex'
    ],
    correctAnswer: 1,
    explanation: 'Due to the optics of the eye, the upper visual field projects to the lower retina, which then projects to the lower bank of the calcarine sulcus (lingual gyrus). Conversely, the lower visual field projects to the upper bank (cuneus). This retinotopic organization is preserved throughout the visual pathway.'
  },
  {
    id: 'occ-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The "what" pathway for object recognition projects from V1 to:',
    options: [
      'Posterior parietal cortex (dorsal stream)',
      'Inferior temporal cortex (ventral stream)',
      'Frontal eye fields',
      'Superior colliculus',
      'Pulvinar'
    ],
    correctAnswer: 1,
    explanation: 'The ventral stream ("what" pathway) projects from V1 through V2, V4 to the inferior temporal cortex for object recognition and identification. The dorsal stream ("where/how" pathway) projects to posterior parietal cortex for spatial localization and visually guided action.'
  },
  {
    id: 'occ-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Area V5/MT is specialized for processing which visual attribute?',
    options: [
      'Color',
      'Motion',
      'Face recognition',
      'Object shape',
      'Depth perception'
    ],
    correctAnswer: 1,
    explanation: 'Area V5/MT (middle temporal visual area) at the temporo-parieto-occipital junction is specialized for motion processing. Lesions cause akinetopsia (motion blindness), where patients see the world as a series of static images.'
  },
  {
    id: 'occ-7',
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
    explanation: 'The visual association cortex (V2, V3, etc.) corresponds to Brodmann areas 18 and 19, surrounding the primary visual cortex (area 17). These areas process increasingly complex visual features including form, color, and motion.'
  },
  {
    id: 'occ-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient can see objects but cannot recognize them despite intact visual acuity and intelligence. This condition is called:',
    options: [
      'Cortical blindness',
      'Visual agnosia',
      'Blindsight',
      'Hemianopia',
      'Papilledema'
    ],
    correctAnswer: 1,
    explanation: 'Visual agnosia is the inability to recognize objects by sight despite intact visual perception, naming ability, and intelligence. Apperceptive agnosia (impaired perceptual processing) localizes to early visual areas; associative agnosia (impaired meaning) localizes to temporal-occipital regions.'
  },
  {
    id: 'occ-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Bilateral posterior cerebral artery occlusion would most likely produce which visual field defect?',
    options: [
      'Bitemporal hemianopia',
      'Left homonymous hemianopia',
      'Cortical blindness with macular sparing',
      'Monocular blindness',
      'Superior quadrantanopia'
    ],
    correctAnswer: 2,
    explanation: 'Bilateral PCA occlusion causes cortical blindness (loss of all vision) due to bilateral primary visual cortex infarction. Macular sparing may occur if the occipital poles receive collateral supply from MCA branches. Patients may exhibit Anton syndrome, denying their blindness.'
  },
  {
    id: 'occ-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient cannot perceive more than one object at a time, has optic ataxia, and cannot voluntarily direct gaze. This triad describes:',
    options: [
      'Anton syndrome',
      'Balint syndrome',
      'Gerstmann syndrome',
      'Wernicke-Korsakoff syndrome',
      'Brown-Séquard syndrome'
    ],
    correctAnswer: 1,
    explanation: 'Balint syndrome results from bilateral parieto-occipital lesions and includes: simultanagnosia (inability to perceive more than one object), optic ataxia (impaired visually-guided reaching), and oculomotor apraxia (difficulty voluntarily directing gaze). It reflects dorsal stream dysfunction.'
  }
];

// Lobul frontal
export const frontalLobeQuestions: Question[] = [
  {
    id: 'front-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The primary motor cortex corresponds to which Brodmann area?',
    options: [
      'Area 1',
      'Area 4',
      'Area 6',
      'Area 17',
      'Area 44'
    ],
    correctAnswer: 1,
    explanation: 'The primary motor cortex (M1) corresponds to Brodmann area 4, located in the precentral gyrus. It contains giant Betz cells and gives rise to the corticospinal tract for voluntary motor control of the contralateral body.'
  },
  {
    id: 'front-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The frontal eye field, controlling voluntary eye movements, is located in which area?',
    options: [
      'Brodmann area 4',
      'Brodmann area 8',
      'Brodmann area 17',
      'Brodmann area 22',
      'Brodmann area 44'
    ],
    correctAnswer: 1,
    explanation: 'The frontal eye field (FEF) is located in Brodmann area 8, in the posterior part of the middle frontal gyrus. It controls voluntary saccadic eye movements to the contralateral side and works with the parietal eye field for visual attention.'
  },
  {
    id: 'front-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The premotor cortex corresponds to which Brodmann area?',
    options: [
      'Area 4',
      'Area 6',
      'Area 8',
      'Area 44',
      'Area 46'
    ],
    correctAnswer: 1,
    explanation: 'The premotor cortex (PMC) corresponds to Brodmann area 6, located anterior to the primary motor cortex. It is involved in motor planning, selecting movements, and integrating sensory information for motor output.'
  },
  {
    id: 'front-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The supplementary motor area (SMA) is located on which surface of the frontal lobe?',
    options: [
      'Lateral surface, anterior to area 4',
      'Medial surface, anterior to the paracentral lobule',
      'Orbital surface',
      'Inferior frontal gyrus',
      'Posterior to the central sulcus'
    ],
    correctAnswer: 1,
    explanation: 'The supplementary motor area (SMA) is located on the medial surface of the frontal lobe, in the medial part of area 6, anterior to the paracentral lobule. It is essential for internally generated movement sequences and bimanual coordination.'
  },
  {
    id: 'front-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which part of the inferior frontal gyrus contains Broca area?',
    options: [
      'Pars orbitalis only',
      'Pars triangularis and pars opercularis',
      'Pars orbitalis and pars triangularis',
      'All three parts equally',
      'None; Broca area is in the middle frontal gyrus'
    ],
    correctAnswer: 1,
    explanation: 'Broca area comprises the pars triangularis (area 45) and pars opercularis (area 44) of the inferior frontal gyrus in the dominant hemisphere. The pars orbitalis (area 47) is part of the orbitofrontal cortex and has different functions.'
  },
  {
    id: 'front-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The prefrontal cortex is involved primarily in which functions?',
    options: [
      'Primary motor execution',
      'Primary sensory processing',
      'Executive function, planning, and decision-making',
      'Visual processing',
      'Auditory processing'
    ],
    correctAnswer: 2,
    explanation: 'The prefrontal cortex (PFC), especially the dorsolateral region, is involved in executive functions including working memory, planning, decision-making, judgment, and personality. It receives input from all sensory association areas and is highly developed in humans.'
  },
  {
    id: 'front-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The motor homunculus in the precentral gyrus has which characteristic body representation?',
    options: [
      'Head represented superiorly, leg inferiorly',
      'Leg represented superiorly/medially, face represented inferiorly/laterally',
      'Equal representation for all body parts',
      'Trunk has largest representation',
      'Random organization without topographic map'
    ],
    correctAnswer: 1,
    explanation: 'The motor homunculus shows somatotopic organization with the leg represented on the medial surface (paracentral lobule), trunk and arm on the lateral convexity, and face represented inferiorly near the lateral sulcus. Hands and face have disproportionately large representations.'
  },
  {
    id: 'front-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient has nonfluent speech with intact comprehension, repetition difficulties, and right face/arm weakness. The lesion most likely involves:',
    options: [
      'Wernicke area',
      'Broca area and adjacent motor cortex',
      'Arcuate fasciculus only',
      'Angular gyrus',
      'Primary auditory cortex'
    ],
    correctAnswer: 1,
    explanation: 'This presentation (Broca aphasia with right hemiparesis affecting face/arm more than leg) indicates an MCA superior division stroke affecting Broca area in the inferior frontal gyrus and adjacent precentral gyrus (face/arm motor area). The leg is spared because it is represented in ACA territory.'
  },
  {
    id: 'front-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with frontal lobe damage exhibits inappropriate behavior, poor judgment, disinhibition, and personality change. This syndrome is called:',
    options: [
      'Broca aphasia',
      'Orbitofrontal (disinhibited) syndrome',
      'Dorsolateral prefrontal syndrome',
      'Medial frontal (akinetic) syndrome',
      'Gerstmann syndrome'
    ],
    correctAnswer: 1,
    explanation: 'Orbitofrontal syndrome results from damage to the orbital and medial prefrontal cortex. It causes personality change, disinhibition, impulsivity, poor judgment, and inappropriate social behavior. The classic example is Phineas Gage who survived prefrontal damage from a tamping iron.'
  },
  {
    id: 'front-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Damage to the frontal eye field causes deviation of the eyes toward which side?',
    options: [
      'Toward the contralateral side',
      'Toward the side of the lesion (ipsilateral)',
      'Upward',
      'Downward',
      'No deviation; only affects saccades'
    ],
    correctAnswer: 1,
    explanation: 'The frontal eye field (area 8) drives saccades to the contralateral side. Acute destructive lesions cause eyes to deviate toward the lesion side (away from the hemiparesis) because the intact contralateral FEF is unopposed. Irritative lesions (seizures) deviate eyes away from the lesion.'
  }
];

// Lobul parietal
export const parietalLobeQuestions: Question[] = [
  {
    id: 'par-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The primary somatosensory cortex corresponds to which Brodmann areas?',
    options: [
      'Areas 4 and 6',
      'Areas 1, 2, and 3',
      'Areas 17, 18, 19',
      'Areas 41 and 42',
      'Areas 44 and 45'
    ],
    correctAnswer: 1,
    explanation: 'The primary somatosensory cortex (S1) in the postcentral gyrus comprises Brodmann areas 3a, 3b, 1, and 2. Area 3b receives cutaneous input and projects to areas 1 (texture) and 2 (size, shape). Area 3a receives proprioceptive input.'
  },
  {
    id: 'par-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The inferior parietal lobule consists of which gyri?',
    options: [
      'Precentral and postcentral gyri',
      'Supramarginal and angular gyri',
      'Superior and inferior frontal gyri',
      'Cuneus and precuneus',
      'Cingulate and parahippocampal gyri'
    ],
    correctAnswer: 1,
    explanation: 'The inferior parietal lobule comprises the supramarginal gyrus (area 40, wrapping around the lateral sulcus) and angular gyrus (area 39, wrapping around the superior temporal sulcus). Together they form a critical association area for language and spatial functions.'
  },
  {
    id: 'par-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The sensory homunculus has which characteristic feature?',
    options: [
      'All body parts equally represented',
      'Disproportionately large face, hands, and tongue representation',
      'Largest representation for trunk',
      'Lower limb most heavily represented',
      'No topographic organization'
    ],
    correctAnswer: 1,
    explanation: 'The sensory homunculus shows body parts represented proportionally to their tactile sensitivity and receptor density, not physical size. The lips, tongue, hands (especially fingertips), and genitalia have disproportionately large cortical representations.'
  },
  {
    id: 'par-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The posterior parietal cortex (areas 5 and 7) is primarily involved in:',
    options: [
      'Primary sensory processing',
      'Motor execution',
      'Sensorimotor integration, spatial awareness, and attention',
      'Language comprehension',
      'Memory consolidation'
    ],
    correctAnswer: 2,
    explanation: 'The posterior parietal cortex (PPC, areas 5 and 7) integrates somatosensory, visual, and auditory information for spatial awareness, attention, and sensorimotor integration. It is part of the dorsal "where/how" visual stream and is essential for visually guided action.'
  },
  {
    id: 'par-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The parietal lobe receives somatosensory input from which thalamic nuclei?',
    options: [
      'Lateral geniculate nucleus',
      'Medial geniculate nucleus',
      'Ventral posterolateral (VPL) and ventral posteromedial (VPM) nuclei',
      'Anterior nucleus',
      'Pulvinar only'
    ],
    correctAnswer: 2,
    explanation: 'The VPL nucleus relays somatosensory information from the body (via medial lemniscus and spinothalamic tract) and VPM relays information from the face (via trigeminal pathways). Both project to the primary somatosensory cortex in the postcentral gyrus.'
  },
  {
    id: 'par-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The intraparietal sulcus contains neurons important for:',
    options: [
      'Face recognition',
      'Auditory processing',
      'Numerical cognition and visuospatial attention',
      'Language production',
      'Memory encoding'
    ],
    correctAnswer: 2,
    explanation: 'The intraparietal sulcus (IPS) contains multiple functional areas involved in numerical cognition, spatial attention, eye movements, and visually guided reaching. The lateral intraparietal area (LIP) is critical for saccade planning and attention.'
  },
  {
    id: 'par-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Secondary somatosensory cortex (S2) is located in which region?',
    options: [
      'Postcentral gyrus',
      'Upper bank of the lateral sulcus (parietal operculum)',
      'Angular gyrus',
      'Superior parietal lobule',
      'Precuneus'
    ],
    correctAnswer: 1,
    explanation: 'Secondary somatosensory cortex (S2) is located on the parietal operculum, in the upper bank of the lateral sulcus, deep to the postcentral gyrus. It receives bilateral input and is involved in tactile learning, memory, and pain processing.'
  },
  {
    id: 'par-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with right parietal lobe damage ignores the left side of space, does not dress the left side of their body, and denies any deficit. This syndrome is called:',
    options: [
      'Gerstmann syndrome',
      'Hemispatial neglect (contralateral neglect syndrome)',
      'Balint syndrome',
      'Anton syndrome',
      'Broca aphasia'
    ],
    correctAnswer: 1,
    explanation: 'Hemispatial neglect (usually left-sided from right parietal damage) involves failure to attend to contralateral space, body, or stimuli. Patients may not recognize their left limbs as their own (asomatognosia), deny deficits (anosognosia), or fail to dress/groom the left side.'
  },
  {
    id: 'par-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient cannot perform learned motor tasks (like using scissors) despite intact motor function, sensation, and comprehension. This deficit is called:',
    options: [
      'Ataxia',
      'Apraxia',
      'Aphasia',
      'Agnosia',
      'Amnesia'
    ],
    correctAnswer: 1,
    explanation: 'Apraxia is the inability to perform learned skilled movements despite intact motor function, sensation, and comprehension of the task. Ideomotor apraxia (inability to pantomime) often results from left parietal or premotor lesions. Ideational apraxia involves loss of conceptual knowledge of tool use.'
  },
  {
    id: 'par-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Damage to the left angular gyrus can cause difficulty with:',
    options: [
      'Face recognition only',
      'Reading, writing, and calculation (as part of Gerstmann syndrome)',
      'Motor planning',
      'Visual object recognition',
      'Auditory processing'
    ],
    correctAnswer: 1,
    explanation: 'The angular gyrus (area 39) in the dominant hemisphere is crucial for language-related functions including reading, writing, and calculation. Damage contributes to Gerstmann syndrome (agraphia, acalculia, finger agnosia, right-left confusion) and alexia.'
  }
];

// Lobul temporal
export const temporalLobeQuestions: Question[] = [
  {
    id: 'temp-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The primary auditory cortex is located in which structure?',
    options: [
      'Superior temporal gyrus (lateral surface)',
      'Heschl gyrus (transverse temporal gyrus)',
      'Middle temporal gyrus',
      'Inferior temporal gyrus',
      'Fusiform gyrus'
    ],
    correctAnswer: 1,
    explanation: 'The primary auditory cortex (A1, areas 41-42) is located in Heschl gyrus (transverse temporal gyri) on the superior temporal plane, within the lateral sulcus. It receives tonotopically organized input from the medial geniculate body.'
  },
  {
    id: 'temp-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Wernicke area is located in which region of the dominant hemisphere?',
    options: [
      'Inferior frontal gyrus',
      'Posterior superior temporal gyrus',
      'Middle temporal gyrus',
      'Angular gyrus',
      'Precentral gyrus'
    ],
    correctAnswer: 1,
    explanation: 'Wernicke area (area 22 and adjacent regions) is located in the posterior part of the superior temporal gyrus in the dominant (usually left) hemisphere. It is essential for language comprehension and is connected to Broca area via the arcuate fasciculus.'
  },
  {
    id: 'temp-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The hippocampus is located within which temporal lobe structure?',
    options: [
      'Superior temporal gyrus',
      'Middle temporal gyrus',
      'Inferior temporal gyrus',
      'Parahippocampal gyrus (medial temporal lobe)',
      'Temporal pole'
    ],
    correctAnswer: 3,
    explanation: 'The hippocampus is a curved, elongated structure within the medial temporal lobe, located deep to the parahippocampal gyrus. It is essential for converting short-term memories to long-term memories and for spatial navigation.'
  },
  {
    id: 'temp-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The amygdala is located within which part of the temporal lobe?',
    options: [
      'Temporal pole only',
      'Within the uncus, anterior to the hippocampus',
      'Posterior temporal cortex',
      'Heschl gyrus',
      'Middle temporal gyrus'
    ],
    correctAnswer: 1,
    explanation: 'The amygdala is an almond-shaped nucleus located in the uncus of the medial temporal lobe, anterior to the hippocampus. It plays crucial roles in emotional processing, fear responses, and emotional modulation of memory.'
  },
  {
    id: 'temp-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The auditory association cortex surrounds the primary auditory cortex and includes:',
    options: [
      'Area 4',
      'Area 22',
      'Area 17',
      'Areas 1, 2, 3',
      'Area 44'
    ],
    correctAnswer: 1,
    explanation: 'Area 22 is the auditory association cortex surrounding the primary auditory cortex (areas 41, 42). The posterior part of area 22 in the dominant hemisphere forms Wernicke area, involved in language comprehension.'
  },
  {
    id: 'temp-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The entorhinal cortex (area 28) is located in which gyrus?',
    options: [
      'Superior temporal gyrus',
      'Middle temporal gyrus',
      'Anterior parahippocampal gyrus',
      'Fusiform gyrus',
      'Cingulate gyrus'
    ],
    correctAnswer: 2,
    explanation: 'The entorhinal cortex is located in the anterior portion of the parahippocampal gyrus. It is the major input/output structure of the hippocampus, receiving multimodal sensory input and is one of the earliest regions affected in Alzheimer disease.'
  },
  {
    id: 'temp-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The "what" pathway for visual object recognition projects to which temporal region?',
    options: [
      'Superior temporal gyrus',
      'Inferior temporal cortex (areas TE, TEO)',
      'Temporal pole only',
      'Heschl gyrus',
      'Amygdala'
    ],
    correctAnswer: 1,
    explanation: 'The ventral "what" stream projects from V1 through V4 to the inferior temporal cortex (including areas TE and TEO) for object identification. This region contains neurons selective for complex objects, including the fusiform face area.'
  },
  {
    id: 'temp-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient has fluent but meaningless speech with impaired comprehension, poor repetition, and word-finding difficulties with paraphasias. This describes:',
    options: [
      'Broca aphasia',
      'Wernicke aphasia',
      'Conduction aphasia',
      'Global aphasia',
      'Transcortical motor aphasia'
    ],
    correctAnswer: 1,
    explanation: 'Wernicke aphasia results from damage to the posterior superior temporal gyrus (area 22) of the dominant hemisphere. Patients speak fluently but with meaningless content, paraphasias (word substitutions), and neologisms. Comprehension and repetition are impaired.'
  },
  {
    id: 'temp-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Bilateral hippocampal damage, as in patient H.M., produces which type of memory deficit?',
    options: [
      'Loss of all memories including motor skills',
      'Severe anterograde amnesia with relatively preserved remote memories',
      'Only retrograde amnesia',
      'Only working memory deficit',
      'Semantic memory loss without episodic memory impairment'
    ],
    correctAnswer: 1,
    explanation: 'Bilateral hippocampal damage causes severe anterograde amnesia (inability to form new declarative memories) with temporally graded retrograde amnesia (remote memories relatively spared). Procedural memory (motor skills) is preserved as it depends on the striatum and cerebellum.'
  },
  {
    id: 'temp-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient experiences episodes of déjà vu, olfactory hallucinations, and automatisms arising from the medial temporal lobe. This describes:',
    options: [
      'Absence seizures',
      'Mesial temporal lobe epilepsy',
      'Frontal lobe seizures',
      'Occipital lobe seizures',
      'Primary generalized epilepsy'
    ],
    correctAnswer: 1,
    explanation: 'Mesial temporal lobe epilepsy (MTLE) is the most common focal epilepsy in adults. Typical features include auras (déjà vu, rising epigastric sensation, fear, olfactory hallucinations), behavioral arrest, and automatisms. It often results from hippocampal sclerosis.'
  }
];

// Lobul orbitar
export const orbitalLobeQuestions: Question[] = [
  {
    id: 'orb-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The orbital gyri are located on which surface of the frontal lobe?',
    options: [
      'Lateral surface',
      'Medial surface',
      'Inferior (orbital) surface',
      'Superior surface',
      'Posterior surface'
    ],
    correctAnswer: 2,
    explanation: 'The orbital gyri are located on the inferior (orbital) surface of the frontal lobe, which rests on the orbital plate of the frontal bone. They are lateral to the olfactory sulcus and gyrus rectus.'
  },
  {
    id: 'orb-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The orbitofrontal cortex is primarily involved in:',
    options: [
      'Primary motor function',
      'Primary visual processing',
      'Emotional regulation, reward processing, and decision-making',
      'Language comprehension',
      'Spatial navigation'
    ],
    correctAnswer: 2,
    explanation: 'The orbitofrontal cortex (OFC) is involved in emotional processing, reward valuation, decision-making, and social behavior. It receives input from limbic structures and sensory association areas and is crucial for behavioral flexibility.'
  },
  {
    id: 'orb-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The olfactory sulcus is located between which structures?',
    options: [
      'Orbital gyri and lateral sulcus',
      'Gyrus rectus and orbital gyri',
      'Superior and middle frontal gyri',
      'Precentral and postcentral gyri',
      'Cingulate gyrus and corpus callosum'
    ],
    correctAnswer: 1,
    explanation: 'The olfactory sulcus is a longitudinal groove on the orbital surface of the frontal lobe, running between the gyrus rectus medially and the orbital gyri laterally. The olfactory bulb and tract lie within this sulcus.'
  },
  {
    id: 'orb-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The orbital gyri include all of the following EXCEPT:',
    options: [
      'Anterior orbital gyrus',
      'Medial orbital gyrus',
      'Posterior orbital gyrus',
      'Lateral orbital gyrus',
      'Gyrus rectus'
    ],
    correctAnswer: 4,
    explanation: 'The orbital gyri comprise anterior, medial, posterior, and lateral orbital gyri arranged around the H-shaped orbital sulcus. The gyrus rectus is a separate structure lying medial to the olfactory sulcus.'
  },
  {
    id: 'orb-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The orbitofrontal cortex has extensive connections with which structure?',
    options: [
      'Cerebellum',
      'Amygdala and limbic system',
      'Primary motor cortex',
      'Primary visual cortex',
      'Spinal cord'
    ],
    correctAnswer: 1,
    explanation: 'The OFC has dense reciprocal connections with the amygdala, anterior cingulate, hypothalamus, and other limbic structures. These connections allow it to integrate emotional and visceral information with sensory data for decision-making.'
  },
  {
    id: 'orb-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The gyrus rectus corresponds to approximately which Brodmann area?',
    options: [
      'Area 4',
      'Area 11',
      'Area 17',
      'Area 22',
      'Area 44'
    ],
    correctAnswer: 1,
    explanation: 'The gyrus rectus and adjacent orbital cortex correspond roughly to Brodmann area 11 (with areas 12, 13, 14 in non-human primates). These areas are part of the ventromedial prefrontal cortex involved in emotion and decision-making.'
  },
  {
    id: 'orb-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The orbital surface of the frontal lobe rests on which bony structure?',
    options: [
      'Cribriform plate only',
      'Orbital plate of the frontal bone',
      'Lesser wing of sphenoid',
      'Temporal bone',
      'Parietal bone'
    ],
    correctAnswer: 1,
    explanation: 'The orbital surface of the frontal lobe rests on the orbital plate of the frontal bone, which forms the roof of the orbit. The cribriform plate of the ethmoid bone lies medially, transmitting olfactory nerve fibers.'
  },
  {
    id: 'orb-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with bilateral orbitofrontal damage exhibits impulsive behavior, socially inappropriate actions, and inability to learn from negative consequences. This represents dysfunction of:',
    options: [
      'Working memory',
      'Response inhibition and emotional regulation',
      'Language production',
      'Visuospatial processing',
      'Motor planning'
    ],
    correctAnswer: 1,
    explanation: 'The OFC is critical for response inhibition and learning from negative feedback. Bilateral damage causes acquired sociopathy with disinhibition, poor judgment, and inability to modify behavior based on consequences, as famously seen in Phineas Gage.'
  },
  {
    id: 'orb-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Olfactory groove meningiomas arising from the cribriform plate can compress which structures?',
    options: [
      'Optic chiasm only',
      'Olfactory tracts and gyrus rectus',
      'Temporal lobes',
      'Cerebellum',
      'Brainstem'
    ],
    correctAnswer: 1,
    explanation: 'Olfactory groove meningiomas arise from the cribriform plate and compress the olfactory tracts (causing anosmia), gyrus rectus, and orbital gyri. Large tumors may extend posteriorly to compress the optic nerves/chiasm, causing visual symptoms.'
  },
  {
    id: 'orb-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The orbital prefrontal cortex is part of which larger functional network?',
    options: [
      'Motor network',
      'Salience and limbic network',
      'Primary sensory network',
      'Cerebellar network',
      'Default mode network only'
    ],
    correctAnswer: 1,
    explanation: 'The OFC is part of the limbic/paralimbic system and the salience network. It integrates interoceptive, emotional, and sensory information to assign value to stimuli and guide adaptive behavior. It works closely with the anterior insula and anterior cingulate.'
  }
];

// Lobul temporo-occipital
export const temporoOccipitalLobeQuestions: Question[] = [
  {
    id: 'to-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The fusiform gyrus spans the junction of which two lobes?',
    options: [
      'Frontal and parietal',
      'Temporal and occipital',
      'Frontal and temporal',
      'Parietal and occipital',
      'Frontal and occipital'
    ],
    correctAnswer: 1,
    explanation: 'The fusiform gyrus (lateral occipitotemporal gyrus) extends from the temporal lobe anteriorly to the occipital lobe posteriorly on the inferior brain surface. It lies between the collateral sulcus medially and occipitotemporal sulcus laterally.'
  },
  {
    id: 'to-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The fusiform face area (FFA) is specialized for:',
    options: [
      'Object recognition in general',
      'Place recognition',
      'Face perception and recognition',
      'Motion processing',
      'Color processing'
    ],
    correctAnswer: 2,
    explanation: 'The fusiform face area (FFA) is a region in the lateral fusiform gyrus that shows selective activation for faces compared to other objects. Damage causes prosopagnosia (inability to recognize faces). It is typically larger in the right hemisphere.'
  },
  {
    id: 'to-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The parahippocampal place area (PPA) is activated by:',
    options: [
      'Faces',
      'Scenes and places',
      'Body parts',
      'Written words',
      'Motion'
    ],
    correctAnswer: 1,
    explanation: 'The parahippocampal place area (PPA), located in the posterior parahippocampal gyrus and adjacent lingual gyrus, responds selectively to scenes, places, and spatial layouts. It is important for navigation and spatial context processing.'
  },
  {
    id: 'to-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The visual word form area (VWFA) is located in which region?',
    options: [
      'Superior temporal gyrus',
      'Left fusiform gyrus (mid-fusiform)',
      'Angular gyrus',
      'Primary visual cortex',
      'Broca area'
    ],
    correctAnswer: 1,
    explanation: 'The visual word form area (VWFA) is located in the left mid-fusiform gyrus and responds selectively to written words and letter strings. It is essential for rapid visual word recognition and damage causes pure alexia.'
  },
  {
    id: 'to-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The lingual gyrus is involved in:',
    options: [
      'Auditory processing',
      'Visual processing including color perception',
      'Motor planning',
      'Language production',
      'Spatial navigation only'
    ],
    correctAnswer: 1,
    explanation: 'The lingual gyrus is part of the visual association cortex involved in processing visual information, particularly color (area V4 extends into this region). It also contributes to the encoding of complex visual scenes and visual memory.'
  },
  {
    id: 'to-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Area V4, associated with color processing, is located in which region?',
    options: [
      'Calcarine cortex',
      'Lateral occipital cortex and fusiform/lingual gyri',
      'Heschl gyrus',
      'Precentral gyrus',
      'Superior parietal lobule'
    ],
    correctAnswer: 1,
    explanation: 'Area V4 is located in the lateral occipital cortex extending into the fusiform and lingual gyri. It is crucial for color perception and color constancy. Damage causes cerebral achromatopsia (loss of color vision with preserved form vision).'
  },
  {
    id: 'to-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The lateral occipital complex (LOC) is important for:',
    options: [
      'Primary visual processing',
      'Object recognition and form perception',
      'Motion processing',
      'Face recognition specifically',
      'Color perception'
    ],
    correctAnswer: 1,
    explanation: 'The lateral occipital complex (LOC) includes regions in the lateral occipital and posterior temporal cortex that respond more strongly to intact objects than to scrambled images. It is a key region in the ventral "what" stream for object recognition.'
  },
  {
    id: 'to-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient can perceive colors normally but cannot associate colors with objects (e.g., knows that bananas are yellow but cannot retrieve this information). This is:',
    options: [
      'Achromatopsia',
      'Color agnosia',
      'Color anomia',
      'Prosopagnosia',
      'Visual agnosia'
    ],
    correctAnswer: 1,
    explanation: 'Color agnosia is the inability to associate colors with objects (semantic color knowledge) despite intact color perception. It results from left temporal-occipital lesions affecting color-object associations. Color anomia is inability to name colors despite normal perception.'
  },
  {
    id: 'to-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Damage to the left posterior cerebral artery causing infarction of the left occipital lobe and splenium of corpus callosum produces:',
    options: [
      'Global aphasia',
      'Alexia without agraphia (pure alexia)',
      'Broca aphasia',
      'Wernicke aphasia',
      'Prosopagnosia'
    ],
    correctAnswer: 1,
    explanation: 'Alexia without agraphia results from left PCA infarction affecting the left visual cortex (causing right hemianopia) and splenium (preventing visual information from the intact right hemisphere from reaching left language areas). Patients cannot read but can write.'
  },
  {
    id: 'to-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Bilateral fusiform gyrus damage would most likely cause:',
    options: [
      'Cortical blindness',
      'Prosopagnosia (inability to recognize faces)',
      'Wernicke aphasia',
      'Hemispatial neglect',
      'Anton syndrome'
    ],
    correctAnswer: 1,
    explanation: 'Bilateral fusiform gyrus damage, particularly involving the fusiform face areas, causes prosopagnosia—the inability to recognize familiar faces despite intact visual acuity. Patients must rely on voice, gait, or other features to identify people.'
  }
];
