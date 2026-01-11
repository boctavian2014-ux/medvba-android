import type { Question } from './questions';

// Sinusurile venoase ale durei mater craniene
export const duralVenousSinusesQuestions: Question[] = [
  {
    id: 'dvs-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The superior sagittal sinus runs along which dural structure?',
    options: [
      'Tentorium cerebelli',
      'Superior attached border of the falx cerebri',
      'Diaphragma sellae',
      'Falx cerebelli',
      'Cavernous sinus wall'
    ],
    correctAnswer: 1,
    explanation: 'The superior sagittal sinus runs along the superior attached border of the falx cerebri from the crista galli to the internal occipital protuberance. It receives cerebral veins and CSF via arachnoid granulations.'
  },
  {
    id: 'dvs-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The confluence of sinuses (torcular Herophili) is located at:',
    options: [
      'The crista galli',
      'The internal occipital protuberance',
      'The foramen magnum',
      'The sella turcica',
      'The petrous apex'
    ],
    correctAnswer: 1,
    explanation: 'The confluence of sinuses is located at the internal occipital protuberance where the superior sagittal sinus, straight sinus, and occipital sinus meet and the two transverse sinuses originate.'
  },
  {
    id: 'dvs-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The transverse sinuses continue as which sinuses?',
    options: [
      'Cavernous sinuses',
      'Sigmoid sinuses',
      'Inferior sagittal sinus',
      'Straight sinus',
      'Sphenoparietal sinuses'
    ],
    correctAnswer: 1,
    explanation: 'Each transverse sinus runs laterally along the attached border of the tentorium cerebelli, then turns inferiorly as the sigmoid sinus, which exits the skull through the jugular foramen as the internal jugular vein.'
  },
  {
    id: 'dvs-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The inferior sagittal sinus runs along:',
    options: [
      'The superior border of falx cerebri',
      'The inferior free edge of the falx cerebri',
      'The tentorium cerebelli',
      'The floor of the middle cranial fossa',
      'The clivus'
    ],
    correctAnswer: 1,
    explanation: 'The inferior sagittal sinus runs along the inferior free edge of the falx cerebri, above the corpus callosum. It joins with the great cerebral vein (of Galen) to form the straight sinus.'
  },
  {
    id: 'dvs-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The straight sinus is formed by the union of:',
    options: [
      'Superior sagittal sinus and transverse sinus',
      'Inferior sagittal sinus and great cerebral vein (of Galen)',
      'Two sigmoid sinuses',
      'Cavernous sinuses',
      'Superior and inferior petrosal sinuses'
    ],
    correctAnswer: 1,
    explanation: 'The straight sinus is formed by the junction of the inferior sagittal sinus and the great cerebral vein (vein of Galen) at the junction of the falx cerebri and tentorium cerebelli.'
  },
  {
    id: 'dvs-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The cavernous sinus receives blood from:',
    options: [
      'Internal jugular vein',
      'Superior and inferior ophthalmic veins and superficial middle cerebral vein',
      'Straight sinus',
      'Superior sagittal sinus directly',
      'Sigmoid sinus'
    ],
    correctAnswer: 1,
    explanation: 'The cavernous sinus receives the superior and inferior ophthalmic veins, superficial middle cerebral vein (Sylvian vein), and sphenoparietal sinus. It drains via the superior and inferior petrosal sinuses.'
  },
  {
    id: 'dvs-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Which cranial nerve runs freely THROUGH the cavernous sinus (not in its wall)?',
    options: [
      'Oculomotor nerve (CN III)',
      'Abducens nerve (CN VI)',
      'Trochlear nerve (CN IV)',
      'Ophthalmic nerve (V1)',
      'Maxillary nerve (V2)'
    ],
    correctAnswer: 1,
    explanation: 'CN VI runs freely through the center of the cavernous sinus adjacent to the internal carotid artery, making it most vulnerable to cavernous sinus pathology. CN III, IV, V1, and V2 run in the lateral wall.'
  },
  {
    id: 'dvs-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Cavernous sinus thrombosis can result from facial infections because:',
    options: [
      'The facial nerve passes through the sinus',
      'Valveless facial veins communicate with the ophthalmic veins',
      'The maxillary artery enters the sinus',
      'Lymphatics drain directly to the sinus',
      'The trigeminal ganglion is infected first'
    ],
    correctAnswer: 1,
    explanation: 'The "danger triangle" of the face (nose and upper lip) drains via valveless facial veins that communicate with the ophthalmic veins, allowing retrograde spread of infection to the cavernous sinus.'
  },
  {
    id: 'dvs-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Cerebral venous sinus thrombosis most commonly affects:',
    options: [
      'Cavernous sinus',
      'Superior sagittal sinus and transverse sinuses',
      'Straight sinus',
      'Inferior petrosal sinus',
      'Occipital sinus'
    ],
    correctAnswer: 1,
    explanation: 'The superior sagittal sinus and transverse sinuses are most commonly affected by cerebral venous thrombosis. Risk factors include hypercoagulable states, pregnancy, infection, and dehydration. Symptoms include headache, seizures, and focal deficits.'
  },
  {
    id: 'dvs-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The inferior petrosal sinus drains from the cavernous sinus to:',
    options: [
      'Transverse sinus',
      'Internal jugular vein at the jugular foramen',
      'Sigmoid sinus',
      'Superior sagittal sinus',
      'Straight sinus'
    ],
    correctAnswer: 1,
    explanation: 'The inferior petrosal sinus runs in the petroclival fissure from the cavernous sinus to drain directly into the internal jugular vein at the jugular foramen. This route is used for petrosal sinus sampling in Cushing disease diagnosis.'
  }
];

// Vena cerebrală magna (of Galen)
export const greatCerebralVeinQuestions: Question[] = [
  {
    id: 'gcv-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The great cerebral vein (of Galen) is formed by the union of:',
    options: [
      'Superior sagittal and inferior sagittal sinuses',
      'The two internal cerebral veins',
      'Superior and inferior ophthalmic veins',
      'Transverse sinuses',
      'Cavernous sinuses'
    ],
    correctAnswer: 1,
    explanation: 'The great cerebral vein (vein of Galen) is formed by the union of the two internal cerebral veins beneath the splenium of the corpus callosum. It also receives the basal veins (of Rosenthal).'
  },
  {
    id: 'gcv-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The great cerebral vein drains into:',
    options: [
      'Superior sagittal sinus directly',
      'The straight sinus (by joining the inferior sagittal sinus)',
      'The cavernous sinus',
      'The transverse sinus directly',
      'The internal jugular vein'
    ],
    correctAnswer: 1,
    explanation: 'The great cerebral vein joins the inferior sagittal sinus to form the straight sinus at the junction of the falx cerebri and tentorium cerebelli.'
  },
  {
    id: 'gcv-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The internal cerebral veins run in which location?',
    options: [
      'Lateral sulcus',
      'Roof of the third ventricle in the tela choroidea',
      'Floor of the fourth ventricle',
      'Interpeduncular cistern',
      'Ambient cistern'
    ],
    correctAnswer: 1,
    explanation: 'The internal cerebral veins run in the tela choroidea of the third ventricle (velum interpositum), receiving tributaries from the choroid plexus, thalamus, and deep white matter.'
  },
  {
    id: 'gcv-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The internal cerebral veins receive blood from the thalamostriate veins, which drain:',
    options: [
      'The cerebellum',
      'The caudate nucleus, internal capsule, and thalamus',
      'The brainstem',
      'The occipital lobe',
      'The frontal pole'
    ],
    correctAnswer: 1,
    explanation: 'The thalamostriate (terminal) veins run in the groove between the caudate nucleus and thalamus, draining these structures and the internal capsule. They join the internal cerebral veins at the venous angle (foramen of Monro).'
  },
  {
    id: 'gcv-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The basal veins (of Rosenthal) drain which regions?',
    options: [
      'Frontal lobe only',
      'Basal surface of brain, insula, and medial temporal lobe',
      'Cerebellum',
      'Brainstem only',
      'Spinal cord'
    ],
    correctAnswer: 1,
    explanation: 'The basal veins (of Rosenthal) curve around the midbrain and drain the basal surface of the brain, including the insula, medial temporal lobe, and basal ganglia. They empty into the great cerebral vein.'
  },
  {
    id: 'gcv-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The great cerebral vein lies in which cistern?',
    options: [
      'Suprasellar cistern',
      'Quadrigeminal (superior) cistern',
      'Pontine cistern',
      'Cerebellopontine angle cistern',
      'Interpeduncular cistern'
    ],
    correctAnswer: 1,
    explanation: 'The great cerebral vein lies in the quadrigeminal (superior) cistern, posterior to the pineal gland and superior to the superior colliculi. This location makes it vulnerable during pineal region surgery.'
  },
  {
    id: 'gcv-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The septal veins drain into which structure before reaching the internal cerebral veins?',
    options: [
      'Great cerebral vein directly',
      'Thalamostriate veins at the venous angle',
      'Basal veins',
      'Superior sagittal sinus',
      'Cavernous sinus'
    ],
    correctAnswer: 1,
    explanation: 'The septal veins drain the septum pellucidum and anterior regions and join the thalamostriate veins at the venous angle near the foramen of Monro to form the internal cerebral veins.'
  },
  {
    id: 'gcv-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A vein of Galen malformation in neonates typically presents with:',
    options: [
      'Focal seizures only',
      'High-output cardiac failure and hydrocephalus',
      'Isolated developmental delay',
      'Normal examination',
      'Localized skin changes'
    ],
    correctAnswer: 1,
    explanation: 'Vein of Galen aneurysmal malformation (VGAM) causes high-flow arteriovenous shunting, leading to high-output cardiac failure in neonates. Mass effect can cause hydrocephalus. Older children may present with developmental delay or hemorrhage.'
  },
  {
    id: 'gcv-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Thrombosis of the deep venous system (internal cerebral veins, vein of Galen) typically causes:',
    options: [
      'Isolated headache',
      'Bilateral thalamic infarction, coma, and high mortality',
      'Peripheral neuropathy',
      'Isolated visual loss',
      'Hearing loss'
    ],
    correctAnswer: 1,
    explanation: 'Deep cerebral venous thrombosis causes bilateral thalamic and basal ganglia venous infarction, presenting with altered consciousness, coma, and high mortality. It is much less common than superficial sinus thrombosis.'
  },
  {
    id: 'gcv-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'During surgery for pineal region tumors, injury to the vein of Galen can result in:',
    options: [
      'Isolated visual loss',
      'Deep venous infarction with coma or death',
      'Isolated motor weakness',
      'Hearing loss',
      'Isolated cranial nerve palsy'
    ],
    correctAnswer: 1,
    explanation: 'The vein of Galen lies in the surgical corridor to pineal region tumors. Injury can cause thrombosis of the deep venous system leading to bilateral thalamic/basal ganglia infarction with devastating neurological consequences.'
  }
];

// Meningele spinal
export const spinalMeningesQuestions: Question[] = [
  {
    id: 'sm-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The spinal dura mater extends from the foramen magnum to:',
    options: [
      'L1-L2 vertebral level',
      'S2 vertebral level',
      'L5 vertebral level',
      'T12 vertebral level',
      'Coccyx'
    ],
    correctAnswer: 1,
    explanation: 'The spinal dural sac (thecal sac) extends from the foramen magnum to approximately the S2 vertebral level, where it tapers and continues as the coccygeal ligament around the filum terminale.'
  },
  {
    id: 'sm-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The epidural space of the spinal canal contains:',
    options: [
      'Cerebrospinal fluid',
      'Fat and the internal vertebral venous plexus',
      'The spinal cord',
      'Spinal nerves only',
      'Nothing (potential space)'
    ],
    correctAnswer: 1,
    explanation: 'The spinal epidural space (between dura and vertebral periosteum) contains fat, the internal vertebral venous plexus (Batson plexus), and lymphatics. It is the target for epidural anesthesia.'
  },
  {
    id: 'sm-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The spinal subarachnoid space contains:',
    options: [
      'Fat',
      'Cerebrospinal fluid',
      'Venous blood',
      'Epidural fat',
      'Nothing'
    ],
    correctAnswer: 1,
    explanation: 'The subarachnoid space between the arachnoid and pia mater contains cerebrospinal fluid. In the lumbar cistern (below L1-L2), it also contains the cauda equina and filum terminale.'
  },
  {
    id: 'sm-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The denticulate ligaments attach the spinal cord to:',
    options: [
      'The vertebral bodies',
      'The dura mater laterally',
      'The posterior longitudinal ligament',
      'The ligamentum flavum',
      'The spinous processes'
    ],
    correctAnswer: 1,
    explanation: 'The denticulate ligaments are lateral extensions of pia mater that attach to the dura between spinal nerve roots. They help anchor and stabilize the spinal cord within the dural sac.'
  },
  {
    id: 'sm-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The lumbar cistern (containing CSF and cauda equina) extends from:',
    options: [
      'Foramen magnum to C7',
      'L1-L2 to S2',
      'T12 to L5',
      'S2 to coccyx',
      'C1 to L1'
    ],
    correctAnswer: 1,
    explanation: 'The lumbar cistern extends from the conus medullaris (L1-L2) to the end of the dural sac (S2). Lumbar puncture accesses this space below L3 to sample CSF without risk of spinal cord injury.'
  },
  {
    id: 'sm-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The filum terminale has two parts: the filum terminale internum and externum. The externum is also called:',
    options: [
      'Denticulate ligament',
      'Coccygeal ligament',
      'Anterior longitudinal ligament',
      'Supraspinous ligament',
      'Ligamentum flavum'
    ],
    correctAnswer: 1,
    explanation: 'The filum terminale externum (coccygeal ligament) is the portion of the filum below S2, surrounded by dura, that attaches to the coccyx. It anchors the dural sac and spinal cord inferiorly.'
  },
  {
    id: 'sm-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The spinal arachnoid mater:',
    options: [
      'Is tightly adherent to bone',
      'Is avascular and closely applied to the inner surface of the dura',
      'Contains blood vessels',
      'Is pigmented',
      'Forms the denticulate ligaments'
    ],
    correctAnswer: 1,
    explanation: 'The spinal arachnoid is a thin, avascular membrane closely applied to the inner surface of the dura. The subdural space between them is a potential space that can accumulate blood in subdural hematoma.'
  },
  {
    id: 'sm-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'An epidural hematoma in the spinal canal:',
    options: [
      'Is usually arterial and associated with skull fracture',
      'Is usually venous and can cause cord compression',
      'Never occurs spontaneously',
      'Always requires surgery',
      'Is asymptomatic'
    ],
    correctAnswer: 1,
    explanation: 'Spinal epidural hematomas are usually venous (from the internal vertebral venous plexus) and can occur spontaneously (especially with anticoagulation) or after trauma. They cause progressive cord compression requiring urgent decompression.'
  },
  {
    id: 'sm-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A dural tear during lumbar spine surgery can result in:',
    options: [
      'Epidural hematoma',
      'CSF leak, pseudomeningocele, or positional headache',
      'Spinal cord infarction',
      'Vertebral fracture',
      'Disc herniation'
    ],
    correctAnswer: 1,
    explanation: 'Incidental durotomy during spine surgery can cause CSF leak leading to positional headache, wound leak, pseudomeningocele formation, or rarely meningitis. Primary repair or blood patch may be needed.'
  },
  {
    id: 'sm-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The internal vertebral venous plexus (Batson plexus) is clinically significant because:',
    options: [
      'It supplies the spinal cord',
      'It provides a valveless route for metastatic spread to the spine',
      'It is routinely used for venous access',
      'It drains CSF',
      'It contains arterial blood'
    ],
    correctAnswer: 1,
    explanation: 'Batson\'s plexus is a valveless venous network that communicates with pelvic, abdominal, and thoracic veins. During increased intra-abdominal pressure, it provides a route for metastatic spread of prostate, breast, and other cancers to the vertebrae.'
  }
];

// Dependențele (septurile) sagitale ale durei mater craniene
export const sagittalDuralReflectionsQuestions: Question[] = [
  {
    id: 'sdr-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The falx cerebri separates:',
    options: [
      'The cerebrum from the cerebellum',
      'The two cerebral hemispheres',
      'The brainstem from the cerebellum',
      'The frontal from the parietal lobe',
      'The temporal from the occipital lobe'
    ],
    correctAnswer: 1,
    explanation: 'The falx cerebri is a sickle-shaped fold of dura mater in the longitudinal fissure that separates the two cerebral hemispheres. It attaches anteriorly to the crista galli and posteriorly to the tentorium cerebelli.'
  },
  {
    id: 'sdr-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The superior sagittal sinus runs along which border of the falx cerebri?',
    options: [
      'The inferior free border',
      'The superior attached border',
      'The anterior border',
      'The posterior border',
      'Within the substance of the falx'
    ],
    correctAnswer: 1,
    explanation: 'The superior sagittal sinus runs along the superior attached border of the falx cerebri where it attaches to the inner table of the skull. The inferior sagittal sinus runs along the inferior free border.'
  },
  {
    id: 'sdr-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The falx cerebri is attached anteriorly to:',
    options: [
      'The clivus',
      'The crista galli of the ethmoid bone',
      'The petrous temporal bone',
      'The foramen magnum',
      'The sella turcica'
    ],
    correctAnswer: 1,
    explanation: 'The falx cerebri attaches anteriorly to the crista galli (a midline projection of the ethmoid bone) and the frontal crest of the frontal bone.'
  },
  {
    id: 'sdr-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The falx cerebelli separates:',
    options: [
      'The two cerebral hemispheres',
      'The two cerebellar hemispheres',
      'The cerebrum from cerebellum',
      'The brainstem from cerebellum',
      'The occipital lobes'
    ],
    correctAnswer: 1,
    explanation: 'The falx cerebelli is a small vertical fold of dura between the cerebellar hemispheres, attached to the internal occipital crest. It contains the occipital sinus.'
  },
  {
    id: 'sdr-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The inferior free edge of the falx cerebri lies above:',
    options: [
      'The tentorium cerebelli',
      'The corpus callosum',
      'The brainstem',
      'The cerebellum',
      'The pituitary gland'
    ],
    correctAnswer: 1,
    explanation: 'The inferior free edge of the falx cerebri arches over the corpus callosum. The inferior sagittal sinus runs within this free edge. The posterior part of the falx attaches to the upper surface of the tentorium.'
  },
  {
    id: 'sdr-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'During subfalcine herniation, which structure is compressed against the falx?',
    options: [
      'Brainstem',
      'Cingulate gyrus',
      'Temporal lobe uncus',
      'Cerebellar tonsil',
      'Optic nerve'
    ],
    correctAnswer: 1,
    explanation: 'Subfalcine (cingulate) herniation occurs when mass effect pushes the cingulate gyrus under the falx cerebri to the contralateral side. The anterior cerebral artery may be compressed, causing ACA territory infarction.'
  },
  {
    id: 'sdr-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The straight sinus runs at the junction of:',
    options: [
      'Falx cerebri and skull',
      'Falx cerebri and tentorium cerebelli',
      'Tentorium cerebelli and skull',
      'Two layers of the falx',
      'Diaphragma sellae and falx'
    ],
    correctAnswer: 1,
    explanation: 'The straight sinus runs at the junction of the falx cerebri and tentorium cerebelli, from the confluence of the inferior sagittal sinus and great cerebral vein anteriorly to the confluence of sinuses posteriorly.'
  },
  {
    id: 'sdr-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A parasagittal meningioma compressing the superior sagittal sinus can cause:',
    options: [
      'Isolated hearing loss',
      'Bilateral lower extremity weakness and/or seizures',
      'Visual field defects only',
      'Cerebellar ataxia',
      'Facial weakness'
    ],
    correctAnswer: 1,
    explanation: 'Parasagittal meningiomas near the motor strip can cause contralateral leg weakness (or bilateral if crossing midline) by compressing the leg motor area on the medial cortex. Seizures are common. Sinus involvement complicates resection.'
  },
  {
    id: 'sdr-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Injury to bridging veins during head trauma most commonly causes:',
    options: [
      'Epidural hematoma',
      'Subdural hematoma',
      'Subarachnoid hemorrhage',
      'Intraparenchymal hemorrhage',
      'Intraventricular hemorrhage'
    ],
    correctAnswer: 1,
    explanation: 'Bridging veins traverse the subdural space from the cortical surface to the dural sinuses. Trauma (especially acceleration-deceleration) can tear these veins, causing subdural hematoma. This is common in elderly and infants.'
  },
  {
    id: 'sdr-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The arachnoid granulations (Pacchionian granulations) project into:',
    options: [
      'The subarachnoid space',
      'The superior sagittal sinus and lateral lacunae',
      'The epidural space',
      'The ventricular system',
      'The cavernous sinus'
    ],
    correctAnswer: 1,
    explanation: 'Arachnoid granulations are outpouchings of arachnoid that project into the superior sagittal sinus and its lateral lacunae. They are the primary site of CSF absorption into the venous system.'
  }
];

// Dependențele (septurile) orizontale ale durei mater craniene
export const horizontalDuralReflectionsQuestions: Question[] = [
  {
    id: 'hdr-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The tentorium cerebelli separates:',
    options: [
      'The two cerebral hemispheres',
      'The cerebrum from the cerebellum',
      'The two cerebellar hemispheres',
      'The brainstem from the spinal cord',
      'The frontal from parietal lobes'
    ],
    correctAnswer: 1,
    explanation: 'The tentorium cerebelli is a tent-shaped fold of dura that separates the cerebral hemispheres above (supratentorial) from the cerebellum below (infratentorial). It roofs over the posterior cranial fossa.'
  },
  {
    id: 'hdr-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The tentorial notch (incisura) allows passage of:',
    options: [
      'The internal carotid artery',
      'The brainstem (midbrain)',
      'The vertebral arteries',
      'The spinal cord',
      'The optic nerves'
    ],
    correctAnswer: 1,
    explanation: 'The tentorial notch (incisura) is the U-shaped opening in the tentorium cerebelli through which the midbrain passes, connecting the supratentorial and infratentorial compartments. The uncus lies adjacent to this opening.'
  },
  {
    id: 'hdr-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The diaphragma sellae covers:',
    options: [
      'The foramen magnum',
      'The pituitary gland (hypophysis) in the sella turcica',
      'The cavernous sinus',
      'The cerebellum',
      'The pineal gland'
    ],
    correctAnswer: 1,
    explanation: 'The diaphragma sellae is a small circular fold of dura that roofs over the sella turcica, covering the pituitary gland. It has a central opening for the pituitary stalk (infundibulum).'
  },
  {
    id: 'hdr-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The free border of the tentorium cerebelli attaches anteriorly to:',
    options: [
      'The crista galli',
      'The anterior clinoid processes',
      'The foramen magnum',
      'The clivus',
      'The petrous apex'
    ],
    correctAnswer: 1,
    explanation: 'The free (inner) border of the tentorium attaches anteriorly to the anterior clinoid processes. It forms the lateral margin of the tentorial notch and lies adjacent to the oculomotor nerve.'
  },
  {
    id: 'hdr-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The attached (peripheral) border of the tentorium cerebelli encloses:',
    options: [
      'The straight sinus',
      'The transverse sinuses',
      'The superior sagittal sinus',
      'The inferior sagittal sinus',
      'The cavernous sinus'
    ],
    correctAnswer: 1,
    explanation: 'The attached (outer) border of the tentorium encloses the transverse sinuses and attaches to the inner surface of the occipital bone, the superior border of the petrous temporal bone, and the posterior clinoid processes.'
  },
  {
    id: 'hdr-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'In transtentorial (uncal) herniation, the oculomotor nerve is compressed, causing:',
    options: [
      'Constricted pupil',
      'Dilated pupil, ptosis, and "down and out" eye',
      'Hearing loss',
      'Facial weakness',
      'Tongue deviation'
    ],
    correctAnswer: 1,
    explanation: 'Uncal herniation compresses CN III against the tentorial edge. The parasympathetic fibers (pupil constriction) on the nerve surface are affected first, causing ipsilateral pupil dilation (blown pupil), then complete CN III palsy (ptosis, down and out).'
  },
  {
    id: 'hdr-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The Kernohan notch phenomenon in uncal herniation refers to:',
    options: [
      'Ipsilateral pupil dilation',
      'Contralateral cerebral peduncle compression causing ipsilateral hemiparesis',
      'Brainstem hemorrhage',
      'Cerebellar tonsillar herniation',
      'Obstructive hydrocephalus'
    ],
    correctAnswer: 1,
    explanation: 'Kernohan notch phenomenon occurs when uncal herniation pushes the midbrain against the opposite tentorial edge, compressing the contralateral cerebral peduncle. This causes false localizing ipsilateral (same side as lesion) hemiparesis.'
  },
  {
    id: 'hdr-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Tentorial meningiomas may compress which cranial nerves?',
    options: [
      'Olfactory and optic only',
      'Oculomotor (III), trochlear (IV), and trigeminal (V)',
      'Facial and vestibulocochlear only',
      'Vagus and accessory only',
      'Hypoglossal only'
    ],
    correctAnswer: 1,
    explanation: 'Tentorial meningiomas near the tentorial edge can compress CN III and IV (which pass between PCA and SCA near the tentorial edge) and CN V (trigeminal root enters near the petrous apex at the tentorial attachment).'
  },
  {
    id: 'hdr-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The trochlear nerve (CN IV) has a unique relationship with the tentorium because:',
    options: [
      'It passes through the tentorium',
      'It runs along the free edge of the tentorium after exiting the brainstem',
      'It originates from the tentorium',
      'It supplies the tentorium',
      'It is embedded in the tentorium'
    ],
    correctAnswer: 1,
    explanation: 'CN IV emerges from the dorsal midbrain and wraps around the brainstem to run along the free edge of the tentorium before entering the cavernous sinus. This long course makes it vulnerable to injury in head trauma and tentorial herniation.'
  },
  {
    id: 'hdr-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Duret hemorrhages in transtentorial herniation occur in:',
    options: [
      'The cerebral cortex',
      'The brainstem (midbrain and pons)',
      'The cerebellum',
      'The basal ganglia',
      'The thalamus'
    ],
    correctAnswer: 1,
    explanation: 'Duret hemorrhages are secondary brainstem hemorrhages (usually in the midbrain and pons) that occur as a result of transtentorial herniation. They result from stretching and tearing of perforating vessels during downward brainstem displacement.'
  }
];

// Arahnoida și pia mater craniene
export const arachnoidPiaMaterQuestions: Question[] = [
  {
    id: 'apm-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The subarachnoid space is located between:',
    options: [
      'Dura mater and skull',
      'Arachnoid mater and pia mater',
      'Dura mater and arachnoid mater',
      'Pia mater and brain',
      'Two layers of dura'
    ],
    correctAnswer: 1,
    explanation: 'The subarachnoid space lies between the arachnoid mater (outer) and pia mater (inner). It contains cerebrospinal fluid, cerebral arteries and veins, and arachnoid trabeculae.'
  },
  {
    id: 'apm-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The pia mater:',
    options: [
      'Is thick and fibrous',
      'Closely invests the brain surface, following sulci and gyri',
      'Is separated from the brain by a space',
      'Does not contain blood vessels',
      'Is the same as dura mater'
    ],
    correctAnswer: 1,
    explanation: 'The pia mater is a thin, delicate, highly vascular membrane that closely adheres to the brain surface, following every sulcus and gyrus. It is separated from the brain by a thin subpial space.'
  },
  {
    id: 'apm-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Subarachnoid hemorrhage (SAH) occurs when blood enters:',
    options: [
      'The epidural space',
      'The subarachnoid space',
      'The subdural space',
      'The brain parenchyma',
      'The ventricular system only'
    ],
    correctAnswer: 1,
    explanation: 'Subarachnoid hemorrhage occurs when blood enters the subarachnoid space, most commonly from ruptured cerebral aneurysms. The blood mixes with CSF and can cause severe headache, meningism, and vasospasm.'
  },
  {
    id: 'apm-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The cisterns of the brain are:',
    options: [
      'Ventricles',
      'Enlarged portions of the subarachnoid space',
      'Extradural fluid collections',
      'Subdural spaces',
      'Venous sinuses'
    ],
    correctAnswer: 1,
    explanation: 'Cisterns are enlarged portions of the subarachnoid space where the arachnoid bridges over brain surface irregularities. They include the cisterna magna, pontine cistern, interpeduncular cistern, and quadrigeminal cistern.'
  },
  {
    id: 'apm-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The cisterna magna (cerebellomedullary cistern) is located:',
    options: [
      'Above the tentorium',
      'Between the cerebellum and medulla oblongata',
      'Around the optic chiasm',
      'In the lateral sulcus',
      'Above the corpus callosum'
    ],
    correctAnswer: 1,
    explanation: 'The cisterna magna is the largest cistern, located between the inferior surface of the cerebellum and the dorsal surface of the medulla. CSF exits the fourth ventricle through the foramen of Magendie into this cistern.'
  },
  {
    id: 'apm-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Perivascular (Virchow-Robin) spaces are:',
    options: [
      'Ventricular extensions',
      'Extensions of subarachnoid space around penetrating vessels',
      'Epidural spaces',
      'Subdural spaces',
      'Dural sinuses'
    ],
    correctAnswer: 1,
    explanation: 'Virchow-Robin spaces are CSF-filled extensions of the subarachnoid space that surround penetrating arteries and veins as they enter the brain parenchyma. They may be visible on MRI and enlarged in various conditions.'
  },
  {
    id: 'apm-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Arachnoid granulations function to:',
    options: [
      'Produce CSF',
      'Absorb CSF into the venous sinuses',
      'Filter blood',
      'Produce hormones',
      'Anchor the brain'
    ],
    correctAnswer: 1,
    explanation: 'Arachnoid granulations (Pacchionian granulations) are outpouchings of arachnoid into the dural venous sinuses (especially the superior sagittal sinus) that serve as the primary sites for CSF absorption into the venous system.'
  },
  {
    id: 'apm-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Leptomeningitis refers to inflammation of:',
    options: [
      'Dura mater only',
      'Arachnoid and pia mater (leptomeninges)',
      'Epidural space',
      'Brain parenchyma',
      'Bone'
    ],
    correctAnswer: 1,
    explanation: 'Leptomeningitis is inflammation of the leptomeninges (arachnoid and pia mater) and subarachnoid space, typically from bacterial, viral, or fungal infection. It presents with headache, neck stiffness, fever, and photophobia.'
  },
  {
    id: 'apm-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Superficial siderosis of the CNS results from:',
    options: [
      'Acute hemorrhage',
      'Chronic/recurrent subarachnoid bleeding with hemosiderin deposition on leptomeninges',
      'Iron deficiency',
      'Venous thrombosis',
      'Arterial stenosis'
    ],
    correctAnswer: 1,
    explanation: 'Superficial siderosis results from chronic or recurrent subarachnoid bleeding, causing hemosiderin deposition on the leptomeninges. It presents with progressive sensorineural hearing loss, cerebellar ataxia, and myelopathy.'
  },
  {
    id: 'apm-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The arachnoid barrier layer:',
    options: [
      'Is freely permeable to all substances',
      'Forms the blood-CSF barrier at the arachnoid membrane',
      'Is located in the pia mater',
      'Is part of the dura',
      'Produces CSF'
    ],
    correctAnswer: 1,
    explanation: 'The arachnoid barrier layer, formed by tight junctions between arachnoid cells, is part of the blood-CSF barrier. It prevents free exchange between the dura (which has fenestrated capillaries) and the CSF in the subarachnoid space.'
  }
];

// Circulația lichidului rahidian (CSF)
export const csfCirculationQuestions: Question[] = [
  {
    id: 'csf-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Cerebrospinal fluid is primarily produced by:',
    options: [
      'Arachnoid granulations',
      'Choroid plexuses in the ventricles',
      'Ependymal cells only',
      'Dura mater',
      'Brain parenchyma only'
    ],
    correctAnswer: 1,
    explanation: 'CSF is produced primarily (70%) by the choroid plexuses located in the lateral, third, and fourth ventricles. Additional CSF comes from the brain interstitium and ependymal lining.'
  },
  {
    id: 'csf-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The normal volume of CSF in adults is approximately:',
    options: [
      '50 mL',
      '150 mL',
      '500 mL',
      '1000 mL',
      '10 mL'
    ],
    correctAnswer: 1,
    explanation: 'The total CSF volume in adults is approximately 150 mL, with about 25 mL in the ventricles and 125 mL in the subarachnoid space. CSF is produced at a rate of about 500 mL/day, being replaced 3-4 times daily.'
  },
  {
    id: 'csf-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'CSF flows from the lateral ventricles to the third ventricle through:',
    options: [
      'Cerebral aqueduct',
      'Foramina of Monro (interventricular foramina)',
      'Foramen of Magendie',
      'Foramina of Luschka',
      'Central canal'
    ],
    correctAnswer: 1,
    explanation: 'CSF flows from each lateral ventricle through the interventricular foramen (of Monro) into the third ventricle. The columns of the fornix form the anterior boundary of these foramina.'
  },
  {
    id: 'csf-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'CSF exits the fourth ventricle into the subarachnoid space through:',
    options: [
      'Foramen of Monro',
      'Median foramen of Magendie and lateral foramina of Luschka',
      'Cerebral aqueduct',
      'Central canal only',
      'Arachnoid granulations'
    ],
    correctAnswer: 1,
    explanation: 'CSF exits the fourth ventricle through three openings: the median foramen of Magendie (into the cisterna magna) and two lateral foramina of Luschka (into the cerebellopontine angle cisterns).'
  },
  {
    id: 'csf-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'CSF is absorbed primarily by:',
    options: [
      'Choroid plexuses',
      'Arachnoid granulations into the dural venous sinuses',
      'Cerebral veins directly',
      'Brain parenchyma',
      'Lymphatic vessels only'
    ],
    correctAnswer: 1,
    explanation: 'CSF is absorbed primarily through arachnoid granulations that project into the dural venous sinuses, especially the superior sagittal sinus. Absorption is driven by the pressure gradient between CSF and venous blood.'
  },
  {
    id: 'csf-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Communicating hydrocephalus results from:',
    options: [
      'Obstruction within the ventricular system',
      'Impaired CSF absorption with patent ventricular pathways',
      'Overproduction of CSF',
      'Venous thrombosis',
      'Arachnoid cyst'
    ],
    correctAnswer: 1,
    explanation: 'Communicating hydrocephalus occurs when CSF can flow through the ventricular system but absorption is impaired (e.g., from SAH, meningitis, or arachnoid granulation dysfunction). All ventricles enlarge proportionally.'
  },
  {
    id: 'csf-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Obstruction of the cerebral aqueduct causes:',
    options: [
      'Communicating hydrocephalus',
      'Non-communicating (obstructive) hydrocephalus with dilated lateral and third ventricles',
      'Normal pressure hydrocephalus',
      'Pseudotumor cerebri',
      'Fourth ventricle enlargement'
    ],
    correctAnswer: 1,
    explanation: 'Aqueductal stenosis causes non-communicating hydrocephalus with enlargement of the lateral and third ventricles, while the fourth ventricle remains normal in size. Causes include congenital stenosis, tumors, and infection.'
  },
  {
    id: 'csf-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Normal pressure hydrocephalus (NPH) classically presents with the triad of:',
    options: [
      'Headache, vomiting, papilledema',
      'Gait disturbance, dementia, and urinary incontinence',
      'Diplopia, ataxia, dysarthria',
      'Seizures, hemiparesis, aphasia',
      'Vertigo, hearing loss, tinnitus'
    ],
    correctAnswer: 1,
    explanation: 'NPH presents with the "wet, wacky, and wobbly" triad: urinary incontinence, dementia, and gait apraxia (magnetic gait). It is potentially treatable with ventriculoperitoneal shunting. Gait disturbance often improves first.'
  },
  {
    id: 'csf-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The blood-CSF barrier is located at:',
    options: [
      'The brain capillaries',
      'The choroid plexus epithelium',
      'The arachnoid granulations',
      'The ependymal lining',
      'The dura mater'
    ],
    correctAnswer: 1,
    explanation: 'The blood-CSF barrier is formed by tight junctions between choroid plexus epithelial cells. Unlike brain capillaries (which form the blood-brain barrier), choroid plexus capillaries are fenestrated.'
  },
  {
    id: 'csf-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The glymphatic system refers to:',
    options: [
      'The lymphatic drainage of the scalp',
      'A brain-wide paravascular pathway for CSF-interstitial fluid exchange and waste clearance',
      'The venous drainage system',
      'The arterial supply',
      'The meningeal lymphatics only'
    ],
    correctAnswer: 1,
    explanation: 'The glymphatic system is a recently discovered brain-wide waste clearance pathway where CSF enters the brain along periarterial spaces, exchanges with interstitial fluid, and exits along perivenous pathways. It is most active during sleep.'
  }
];

// Plexurile coroide ale sistemului ventricular cerebral
export const choroidPlexusQuestions: Question[] = [
  {
    id: 'cp-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The choroid plexus is present in which ventricles?',
    options: [
      'Only in the lateral ventricles',
      'Lateral, third, and fourth ventricles',
      'Only in the fourth ventricle',
      'Only in the third ventricle',
      'In all ventricles including the cerebral aqueduct'
    ],
    correctAnswer: 1,
    explanation: 'Choroid plexus is present in all major ventricles: the lateral ventricles (body, atrium, and temporal horn), third ventricle (roof), and fourth ventricle (roof). There is no choroid plexus in the cerebral aqueduct or frontal/occipital horns.'
  },
  {
    id: 'cp-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The primary function of the choroid plexus is:',
    options: [
      'Absorbing CSF',
      'Producing cerebrospinal fluid',
      'Filtering blood',
      'Producing hormones',
      'Immune surveillance only'
    ],
    correctAnswer: 1,
    explanation: 'The choroid plexus produces approximately 70% of the total CSF volume (about 500 mL/day). It also functions in removing metabolic waste, secreting growth factors, and serving as part of the blood-CSF barrier.'
  },
  {
    id: 'cp-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The choroid plexus consists of which type of tissue?',
    options: [
      'Nerve fibers',
      'Highly vascularized, modified ependyma',
      'Smooth muscle',
      'Cartilage',
      'Squamous epithelium'
    ],
    correctAnswer: 1,
    explanation: 'The choroid plexus consists of highly vascularized connective tissue (pia mater with fenestrated capillaries) covered by modified ependymal epithelium (choroidal epithelium). The epithelium has tight junctions forming the blood-CSF barrier.'
  },
  {
    id: 'cp-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The choroid plexus of the lateral ventricles is supplied by:',
    options: [
      'Vertebral artery',
      'Anterior and posterior choroidal arteries',
      'Middle cerebral artery directly',
      'Basilar artery',
      'PICA'
    ],
    correctAnswer: 1,
    explanation: 'The lateral ventricle choroid plexus receives blood from both the anterior choroidal artery (from ICA, supplying the temporal horn) and posterior choroidal arteries (from PCA, supplying the body and atrium).'
  },
  {
    id: 'cp-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The tela choroidea of the third ventricle is formed by:',
    options: [
      'Dura mater',
      'Two layers of pia mater with the choroid plexus between them',
      'Ependyma only',
      'Arachnoid only',
      'Falx cerebri'
    ],
    correctAnswer: 1,
    explanation: 'The tela choroidea of the third ventricle (velum interpositum) is formed by two layers of pia mater reflected from the undersurface of the fornix and upper surface of the third ventricle, with the internal cerebral veins and choroid plexus between.'
  },
  {
    id: 'cp-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Choroid plexus cysts are:',
    options: [
      'Always malignant',
      'Usually benign and often resolve spontaneously (especially fetal)',
      'Always require surgery',
      'Caused by infection',
      'Only occur in adults'
    ],
    correctAnswer: 1,
    explanation: 'Choroid plexus cysts are usually benign, fluid-filled structures that are common findings on fetal ultrasound (1-2% of pregnancies). Isolated cysts typically resolve by the third trimester and are rarely clinically significant.'
  },
  {
    id: 'cp-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The foramen of Monro is bordered by the choroid plexus and:',
    options: [
      'The optic chiasm',
      'The column of the fornix anteriorly',
      'The corpus callosum',
      'The pineal gland',
      'The cerebral aqueduct'
    ],
    correctAnswer: 1,
    explanation: 'The foramen of Monro (interventricular foramen) is bounded anteriorly by the column of the fornix, posterosuperiorly by the choroid plexus, and inferiorly by the thalamus. Colloid cysts commonly occur at this location.'
  },
  {
    id: 'cp-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Choroid plexus papilloma in a child most commonly causes:',
    options: [
      'Focal seizures',
      'Hydrocephalus from CSF overproduction',
      'Hemorrhagic stroke',
      'Cranial nerve palsy',
      'Hormonal dysfunction'
    ],
    correctAnswer: 1,
    explanation: 'Choroid plexus papillomas (benign tumors, most common in children) can cause hydrocephalus through CSF overproduction (the tumor produces excess CSF) or obstruction. They most commonly occur in the lateral ventricle in children and fourth ventricle in adults.'
  },
  {
    id: 'cp-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Xanthogranuloma of the choroid plexus is:',
    options: [
      'A malignant tumor',
      'A benign degenerative lesion often found incidentally',
      'An infectious process',
      'A vascular malformation',
      'A developmental cyst'
    ],
    correctAnswer: 1,
    explanation: 'Xanthogranuloma is a benign degenerative lesion of the choroid plexus, characterized by lipid-laden macrophages. It is usually an incidental finding on imaging or autopsy and rarely causes symptoms unless very large.'
  },
  {
    id: 'cp-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The blood-CSF barrier at the choroid plexus differs from the blood-brain barrier (BBB) because:',
    options: [
      'The BBB has fenestrated capillaries',
      'The choroid plexus has fenestrated capillaries with the barrier at the epithelium',
      'The BBB has no tight junctions',
      'The choroid plexus has no barrier function',
      'They are identical'
    ],
    correctAnswer: 1,
    explanation: 'Unlike the BBB (formed by tight junctions between brain capillary endothelial cells), the blood-CSF barrier at the choroid plexus has fenestrated capillaries; the barrier is formed by tight junctions between the choroidal epithelial cells.'
  }
];
