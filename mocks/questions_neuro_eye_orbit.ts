import type { Question } from './questions';

// Orbita – pereți
export const orbitWallsQuestions: Question[] = [
  {
    id: 'ow-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The roof of the orbit is formed primarily by:',
    options: [
      'Maxillary bone',
      'Orbital plate of the frontal bone',
      'Zygomatic bone',
      'Ethmoid bone',
      'Sphenoid bone'
    ],
    correctAnswer: 1,
    explanation: 'The roof of the orbit is formed mainly by the orbital plate of the frontal bone, with a small posterior contribution from the lesser wing of the sphenoid. It separates the orbit from the anterior cranial fossa.'
  },
  {
    id: 'ow-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The floor of the orbit is formed mainly by:',
    options: [
      'Frontal bone',
      'Maxillary bone (orbital surface)',
      'Ethmoid bone',
      'Lacrimal bone',
      'Palatine bone'
    ],
    correctAnswer: 1,
    explanation: 'The floor of the orbit is formed mainly by the orbital surface of the maxilla, with contributions from the zygomatic bone laterally and the orbital process of the palatine bone posteriorly. It roofs over the maxillary sinus.'
  },
  {
    id: 'ow-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The medial wall of the orbit includes which paper-thin bone?',
    options: [
      'Maxilla',
      'Lamina papyracea of the ethmoid',
      'Frontal bone',
      'Sphenoid bone',
      'Zygomatic bone'
    ],
    correctAnswer: 1,
    explanation: 'The medial wall includes the lamina papyracea (orbital plate) of the ethmoid bone, which is paper-thin and separates the orbit from the ethmoid air cells. Fractures can allow orbital emphysema or infection spread.'
  },
  {
    id: 'ow-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The optic canal transmits which structures?',
    options: [
      'Oculomotor nerve and superior ophthalmic vein',
      'Optic nerve (CN II) and ophthalmic artery',
      'Trochlear nerve only',
      'Maxillary nerve',
      'Lacrimal artery only'
    ],
    correctAnswer: 1,
    explanation: 'The optic canal, located at the apex of the orbit in the lesser wing of the sphenoid, transmits the optic nerve (CN II) and the ophthalmic artery. It connects the orbit to the middle cranial fossa.'
  },
  {
    id: 'ow-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The superior orbital fissure transmits all EXCEPT:',
    options: [
      'Oculomotor nerve (CN III)',
      'Optic nerve (CN II)',
      'Trochlear nerve (CN IV)',
      'Abducens nerve (CN VI)',
      'Ophthalmic division of trigeminal (V1)'
    ],
    correctAnswer: 1,
    explanation: 'The optic nerve passes through the optic canal, NOT the superior orbital fissure. The superior orbital fissure transmits CN III, IV, VI, V1 (frontal, lacrimal, nasociliary), and the superior ophthalmic vein.'
  },
  {
    id: 'ow-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The inferior orbital fissure communicates with:',
    options: [
      'The anterior cranial fossa',
      'The pterygopalatine and infratemporal fossae',
      'The nasal cavity',
      'The middle cranial fossa',
      'The oral cavity'
    ],
    correctAnswer: 1,
    explanation: 'The inferior orbital fissure lies between the floor and lateral wall of the orbit and communicates with the pterygopalatine fossa medially and infratemporal fossa laterally. It transmits the infraorbital nerve and vessels and zygomatic nerve.'
  },
  {
    id: 'ow-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The lateral wall of the orbit is formed by:',
    options: [
      'Ethmoid and lacrimal bones',
      'Zygomatic bone and greater wing of sphenoid',
      'Maxilla only',
      'Frontal bone only',
      'Palatine bone'
    ],
    correctAnswer: 1,
    explanation: 'The lateral wall is formed by the zygomatic bone anteriorly and the greater wing of the sphenoid posteriorly. It is the thickest and strongest orbital wall, protecting the eye from lateral trauma.'
  },
  {
    id: 'ow-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A blowout fracture of the orbital floor may cause:',
    options: [
      'Proptosis only',
      'Diplopia (especially on upward gaze) and infraorbital nerve hypoesthesia',
      'Optic nerve damage',
      'Increased intraocular pressure',
      'Lacrimal gland injury'
    ],
    correctAnswer: 1,
    explanation: 'Orbital floor blowout fractures can trap the inferior rectus or orbital fat, causing diplopia (especially limited upgaze). The infraorbital nerve in the floor may be injured, causing cheek/upper lip numbness. Enophthalmos may occur.'
  },
  {
    id: 'ow-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Orbital cellulitis from ethmoid sinusitis spreads through:',
    options: [
      'The optic canal',
      'The thin lamina papyracea',
      'The orbital floor',
      'The lateral wall',
      'The superior orbital fissure'
    ],
    correctAnswer: 1,
    explanation: 'The lamina papyracea (paper-thin ethmoid bone) allows spread of ethmoid sinusitis into the orbit, causing orbital cellulitis. This can progress to subperiosteal abscess, orbital abscess, and cavernous sinus thrombosis if untreated.'
  },
  {
    id: 'ow-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The annulus of Zinn (common tendinous ring) is located at:',
    options: [
      'The anterior orbital margin',
      'The orbital apex, surrounding the optic canal and part of the superior orbital fissure',
      'The inferior orbital fissure',
      'The lacrimal fossa',
      'The trochlea'
    ],
    correctAnswer: 1,
    explanation: 'The annulus of Zinn is a fibrous ring at the orbital apex from which the four rectus muscles originate. It surrounds the optic canal and the central part of the superior orbital fissure, with structures passing inside or outside the ring.'
  }
];

// Pleoapele și conjunctiva
export const eyelidsConjunctivaQuestions: Question[] = [
  {
    id: 'ec-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The levator palpebrae superioris muscle is innervated by:',
    options: [
      'Facial nerve (CN VII)',
      'Oculomotor nerve (CN III)',
      'Trochlear nerve (CN IV)',
      'Abducens nerve (CN VI)',
      'Trigeminal nerve (CN V)'
    ],
    correctAnswer: 1,
    explanation: 'The levator palpebrae superioris is innervated by the superior division of the oculomotor nerve (CN III). Damage causes ptosis. The smooth muscle component (Müller muscle) receives sympathetic innervation.'
  },
  {
    id: 'ec-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The orbicularis oculi muscle, responsible for eyelid closure, is innervated by:',
    options: [
      'Oculomotor nerve',
      'Facial nerve (CN VII)',
      'Trigeminal nerve',
      'Abducens nerve',
      'Trochlear nerve'
    ],
    correctAnswer: 1,
    explanation: 'The orbicularis oculi is a muscle of facial expression innervated by the temporal and zygomatic branches of the facial nerve (CN VII). It closes the eyelids and is essential for the blink reflex.'
  },
  {
    id: 'ec-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The tarsal plates of the eyelids contain:',
    options: [
      'Bone',
      'Meibomian (tarsal) glands',
      'Lacrimal glands',
      'Striated muscle',
      'Cartilage'
    ],
    correctAnswer: 1,
    explanation: 'The tarsal plates are dense connective tissue (not cartilage) that contain the meibomian (tarsal) glands. These glands secrete the oily layer of the tear film, preventing tear evaporation.'
  },
  {
    id: 'ec-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Müller muscle (superior tarsal muscle) is innervated by:',
    options: [
      'Facial nerve',
      'Sympathetic fibers',
      'Parasympathetic fibers',
      'Oculomotor nerve directly',
      'Trigeminal nerve'
    ],
    correctAnswer: 1,
    explanation: 'Müller muscle is a smooth muscle that contributes to upper eyelid elevation. It receives sympathetic innervation via fibers traveling with the ophthalmic artery. Sympathetic damage causes mild ptosis (part of Horner syndrome).'
  },
  {
    id: 'ec-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The conjunctival sac is continuous with the corneal surface at:',
    options: [
      'The lacrimal puncta',
      'The limbus (corneoscleral junction)',
      'The medial canthus',
      'The lateral canthus',
      'The fornices'
    ],
    correctAnswer: 1,
    explanation: 'The conjunctiva reflects at the limbus (corneoscleral junction) where it becomes continuous with the corneal epithelium. The limbus is an important landmark containing limbal stem cells for corneal epithelial renewal.'
  },
  {
    id: 'ec-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The sensory innervation of the conjunctiva is primarily from:',
    options: [
      'Facial nerve',
      'Ophthalmic division of trigeminal nerve (V1)',
      'Maxillary nerve (V2)',
      'Oculomotor nerve',
      'Optic nerve'
    ],
    correctAnswer: 1,
    explanation: 'The conjunctiva receives sensory innervation mainly from branches of the ophthalmic nerve (V1): the lacrimal, frontal, and nasociliary nerves. The lower conjunctiva may receive some fibers from V2.'
  },
  {
    id: 'ec-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The gray line of the eyelid marks:',
    options: [
      'The limbus',
      'The junction of the orbicularis muscle and tarsal plate',
      'The lacrimal punctum',
      'The meibomian gland openings',
      'The lash line'
    ],
    correctAnswer: 1,
    explanation: 'The gray line (intermarginal sulcus) marks the junction between the orbicularis muscle anteriorly and the tarsal plate posteriorly. It is a surgical landmark for splitting the eyelid into anterior and posterior lamellae.'
  },
  {
    id: 'ec-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Complete CN III palsy causes ptosis because:',
    options: [
      'The orbicularis oculi is paralyzed',
      'The levator palpebrae superioris is paralyzed',
      'Müller muscle is paralyzed',
      'The frontalis muscle is paralyzed',
      'The tarsal plate is damaged'
    ],
    correctAnswer: 1,
    explanation: 'CN III innervates the levator palpebrae superioris. Complete CN III palsy causes severe ptosis (complete in some cases) as the levator is the main elevator of the upper eyelid. Müller muscle (sympathetic) provides only 2mm of elevation.'
  },
  {
    id: 'ec-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Horner syndrome causes mild ptosis because:',
    options: [
      'CN III is damaged',
      'Müller muscle loses sympathetic innervation',
      'The levator is paralyzed',
      'The orbicularis is overactive',
      'The tarsal plate is weakened'
    ],
    correctAnswer: 1,
    explanation: 'Horner syndrome (sympathetic disruption) causes mild ptosis (1-2mm) due to loss of Müller muscle function. The levator (CN III) is intact, so severe ptosis does not occur. Other features include miosis and anhidrosis.'
  },
  {
    id: 'ec-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The blood supply to the eyelids comes from:',
    options: [
      'Internal carotid artery only',
      'Branches of both ophthalmic (internal carotid) and facial (external carotid) arteries',
      'External carotid artery only',
      'Vertebral artery',
      'Maxillary artery only'
    ],
    correctAnswer: 1,
    explanation: 'The eyelids have dual blood supply from medial and lateral palpebral arteries. Medial palpebral arteries arise from the ophthalmic artery (ICA); lateral palpebral from the lacrimal artery. External carotid branches (facial, superficial temporal) also contribute.'
  }
];

// Aparatul lacrimal
export const lacrimalApparatusQuestions: Question[] = [
  {
    id: 'la-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The lacrimal gland is located in:',
    options: [
      'The medial part of the orbit',
      'The superolateral part of the orbit (lacrimal fossa)',
      'The inferior orbit',
      'The orbital apex',
      'The nasal cavity'
    ],
    correctAnswer: 1,
    explanation: 'The lacrimal gland lies in the lacrimal fossa in the superolateral part of the orbit, behind the supraorbital margin of the frontal bone. It produces the aqueous component of the tear film.'
  },
  {
    id: 'la-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Tears drain from the eye through the lacrimal puncta located on:',
    options: [
      'The lateral canthus',
      'The medial aspect of each eyelid margin',
      'The conjunctival fornix',
      'The limbus',
      'The caruncle'
    ],
    correctAnswer: 1,
    explanation: 'The lacrimal puncta are small openings on the medial aspect of each eyelid margin (upper and lower). Tears enter the puncta, then flow through the canaliculi to the lacrimal sac.'
  },
  {
    id: 'la-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The nasolacrimal duct drains tears into:',
    options: [
      'The maxillary sinus',
      'The inferior meatus of the nasal cavity',
      'The middle meatus',
      'The nasopharynx',
      'The frontal sinus'
    ],
    correctAnswer: 1,
    explanation: 'The nasolacrimal duct runs from the lacrimal sac through the nasolacrimal canal in the maxilla and opens into the inferior meatus of the nasal cavity, beneath the inferior turbinate.'
  },
  {
    id: 'la-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Parasympathetic secretomotor innervation to the lacrimal gland travels via:',
    options: [
      'The oculomotor nerve',
      'The greater petrosal nerve → pterygopalatine ganglion → lacrimal nerve',
      'The chorda tympani',
      'The vagus nerve',
      'The glossopharyngeal nerve'
    ],
    correctAnswer: 1,
    explanation: 'Parasympathetic fibers from the superior salivatory nucleus travel via CN VII (greater petrosal nerve) to the pterygopalatine ganglion, then join the lacrimal nerve (V1) to reach the lacrimal gland.'
  },
  {
    id: 'la-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The lacrimal sac is located in:',
    options: [
      'The orbit proper',
      'The lacrimal fossa formed by the lacrimal bone and frontal process of maxilla',
      'The nasal cavity',
      'The ethmoid sinus',
      'The maxillary sinus'
    ],
    correctAnswer: 1,
    explanation: 'The lacrimal sac lies in the lacrimal fossa, a groove formed by the lacrimal bone and frontal process of the maxilla at the inferomedial orbital margin. It is enclosed by the lacrimal fascia.'
  },
  {
    id: 'la-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The sensory innervation of the lacrimal gland is from:',
    options: [
      'The optic nerve',
      'The lacrimal nerve (branch of V1)',
      'The facial nerve',
      'The maxillary nerve',
      'The mandibular nerve'
    ],
    correctAnswer: 1,
    explanation: 'The lacrimal nerve, a branch of the ophthalmic division (V1) of the trigeminal nerve, provides sensory innervation to the lacrimal gland and also carries postganglionic parasympathetic fibers for secretion.'
  },
  {
    id: 'la-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The three layers of the tear film from superficial to deep are:',
    options: [
      'Aqueous, lipid, mucin',
      'Lipid, aqueous, mucin',
      'Mucin, aqueous, lipid',
      'Lipid, mucin, aqueous',
      'Mucin, lipid, aqueous'
    ],
    correctAnswer: 1,
    explanation: 'The tear film has three layers: superficial lipid layer (meibomian glands, prevents evaporation), middle aqueous layer (lacrimal gland), and deep mucin layer (goblet cells, allows adherence to cornea).'
  },
  {
    id: 'la-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Crocodile tears syndrome (gustatory lacrimation) results from:',
    options: [
      'Lacrimal gland tumor',
      'Aberrant regeneration of facial nerve fibers to the lacrimal gland',
      'Trigeminal nerve damage',
      'Oculomotor nerve damage',
      'Sympathetic chain injury'
    ],
    correctAnswer: 1,
    explanation: 'Crocodile tears (gustatory lacrimation) occurs after facial nerve injury when regenerating parasympathetic fibers meant for salivary glands aberrantly innervate the lacrimal gland. Patients tear during eating.'
  },
  {
    id: 'la-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Dacryocystitis (lacrimal sac infection) most commonly results from:',
    options: [
      'Hematogenous spread',
      'Nasolacrimal duct obstruction',
      'Direct trauma',
      'Sinus infection',
      'Orbital cellulitis'
    ],
    correctAnswer: 1,
    explanation: 'Dacryocystitis typically results from nasolacrimal duct obstruction causing stagnation and infection of tears in the lacrimal sac. It presents with painful swelling inferior to the medial canthus and may form an abscess.'
  },
  {
    id: 'la-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The valve of Hasner is located at:',
    options: [
      'The lacrimal punctum',
      'The opening of the nasolacrimal duct in the inferior meatus',
      'The common canaliculus',
      'The lacrimal sac',
      'The lacrimal gland'
    ],
    correctAnswer: 1,
    explanation: 'The valve of Hasner is a mucosal fold at the lower end of the nasolacrimal duct where it opens into the inferior meatus. Failure of this valve to open (imperforate) causes congenital nasolacrimal duct obstruction.'
  }
];

// Muşchii extrinseci ai globului ocular
export const extraocularMusclesQuestions: Question[] = [
  {
    id: 'eom-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The lateral rectus muscle is innervated by:',
    options: [
      'Oculomotor nerve (CN III)',
      'Abducens nerve (CN VI)',
      'Trochlear nerve (CN IV)',
      'Facial nerve (CN VII)',
      'Trigeminal nerve (CN V)'
    ],
    correctAnswer: 1,
    explanation: 'The lateral rectus is innervated by the abducens nerve (CN VI). The mnemonic "LR6" helps remember this. The lateral rectus abducts the eye (moves it laterally).'
  },
  {
    id: 'eom-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The superior oblique muscle is innervated by:',
    options: [
      'Oculomotor nerve (CN III)',
      'Trochlear nerve (CN IV)',
      'Abducens nerve (CN VI)',
      'Facial nerve',
      'Ophthalmic nerve'
    ],
    correctAnswer: 1,
    explanation: 'The superior oblique is innervated by the trochlear nerve (CN IV). The mnemonic "SO4" helps remember this. It depresses, intorts, and abducts the eye.'
  },
  {
    id: 'eom-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The oculomotor nerve (CN III) innervates all extraocular muscles EXCEPT:',
    options: [
      'Superior rectus and inferior rectus',
      'Lateral rectus and superior oblique',
      'Medial rectus and inferior rectus',
      'Inferior oblique and superior rectus',
      'Medial rectus and inferior oblique'
    ],
    correctAnswer: 1,
    explanation: 'CN III innervates all extraocular muscles except the lateral rectus (CN VI) and superior oblique (CN IV). The mnemonic "LR6 SO4 remainder 3" summarizes this.'
  },
  {
    id: 'eom-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The primary action of the superior rectus muscle is:',
    options: [
      'Depression',
      'Elevation',
      'Abduction',
      'Adduction',
      'Intorsion'
    ],
    correctAnswer: 1,
    explanation: 'The primary action of the superior rectus is elevation of the eye. Secondary actions include intorsion and adduction. It is most effective as an elevator when the eye is abducted.'
  },
  {
    id: 'eom-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The inferior oblique muscle originates from:',
    options: [
      'The annulus of Zinn',
      'The orbital floor near the lacrimal fossa',
      'The trochlea',
      'The superior orbital margin',
      'The lateral orbital wall'
    ],
    correctAnswer: 1,
    explanation: 'The inferior oblique is the only extraocular muscle that does NOT originate from the orbital apex. It arises from the orbital floor near the lacrimal fossa and inserts on the posterior inferior globe.'
  },
  {
    id: 'eom-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The trochlea is:',
    options: [
      'A tendon of the lateral rectus',
      'A fibrocartilaginous pulley for the superior oblique tendon',
      'Part of the inferior oblique muscle',
      'The origin of the medial rectus',
      'A bony prominence'
    ],
    correctAnswer: 1,
    explanation: 'The trochlea is a fibrocartilaginous pulley attached to the superomedial orbital wall through which the superior oblique tendon passes before inserting on the globe. It changes the direction of pull of the muscle.'
  },
  {
    id: 'eom-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'When testing the superior oblique muscle function, the eye should be:',
    options: [
      'Abducted',
      'Adducted then depressed',
      'In primary position',
      'Elevated',
      'Intorted'
    ],
    correctAnswer: 1,
    explanation: 'The superior oblique is best tested with the eye adducted (to eliminate the depressor action of the inferior rectus), then asking the patient to look down. Weakness causes difficulty looking down and in.'
  },
  {
    id: 'eom-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A patient with CN III palsy holds the head tilted to compensate for:',
    options: [
      'Lateral rectus weakness',
      'Superior oblique overaction (extorsion of the affected eye)',
      'Superior rectus weakness',
      'Medial rectus overaction',
      'Inferior rectus weakness'
    ],
    correctAnswer: 1,
    explanation: 'In CN III palsy, the unopposed superior oblique causes the eye to be extorted and depressed (down and out). Patients may tilt their head to the opposite side to compensate for the extorsion and reduce diplopia.'
  },
  {
    id: 'eom-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'CN IV palsy typically causes the patient to adopt which head position?',
    options: [
      'Chin up',
      'Head tilt away from the affected side and face turn toward the affected side',
      'Head tilt toward the affected side',
      'Chin down only',
      'No head tilt'
    ],
    correctAnswer: 1,
    explanation: 'In CN IV palsy, the affected eye is extorted due to loss of the intorting superior oblique. Patients tilt the head away from the affected side (to intort the eye) and turn the face toward the affected side to reduce diplopia.'
  },
  {
    id: 'eom-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Internuclear ophthalmoplegia (INO) is caused by a lesion of:',
    options: [
      'The oculomotor nucleus',
      'The medial longitudinal fasciculus (MLF)',
      'The abducens nucleus',
      'The trochlear nucleus',
      'The superior colliculus'
    ],
    correctAnswer: 1,
    explanation: 'INO results from a lesion of the MLF, which connects the CN VI nucleus to the contralateral CN III nucleus for conjugate gaze. It causes impaired adduction of the ipsilateral eye with nystagmus of the abducting eye. MS is a common cause.'
  }
];

// Remaining eye topics (Tenon capsule, fibrous tunic, media, cornea, lens, uveal tract, ciliary body, iris, retina, ophthalmic artery)
export const eyeAnatomyQuestions: Question[] = [
  {
    id: 'eye-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Tenon\'s capsule (fascia bulbi) is:',
    options: [
      'The sclera',
      'A fascial sheath surrounding the globe from the limbus to the optic nerve',
      'The conjunctiva',
      'The tarsal plate',
      'The orbital periosteum'
    ],
    correctAnswer: 1,
    explanation: 'Tenon\'s capsule is a fascial envelope surrounding the globe from the corneoscleral junction (limbus) to the optic nerve. It separates the globe from orbital fat and is pierced by the extraocular muscles.'
  },
  {
    id: 'eye-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The fibrous tunic of the eye consists of:',
    options: [
      'Retina and choroid',
      'Cornea and sclera',
      'Iris and ciliary body',
      'Lens and vitreous',
      'Conjunctiva and cornea'
    ],
    correctAnswer: 1,
    explanation: 'The fibrous tunic (outer coat) of the eye consists of the cornea (anterior transparent part) and sclera (posterior opaque white part). They are continuous at the limbus.'
  },
  {
    id: 'eye-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The cornea is avascular and receives nutrition from:',
    options: [
      'The retinal vessels',
      'Aqueous humor, tears, and limbal vessels',
      'The ciliary body only',
      'The choroid',
      'The vitreous humor'
    ],
    correctAnswer: 1,
    explanation: 'The cornea is avascular to maintain transparency. It receives nutrients from the aqueous humor (posteriorly), tear film (anteriorly), and limbal blood vessels (peripherally). Oxygen comes mainly from tears/air.'
  },
  {
    id: 'eye-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The lens is suspended by:',
    options: [
      'The retina',
      'Zonular fibers (suspensory ligament) attached to the ciliary body',
      'The iris',
      'The vitreous humor',
      'The sclera'
    ],
    correctAnswer: 1,
    explanation: 'The lens is suspended by zonular fibers (zonules of Zinn) that extend from the lens equator to the ciliary processes. Contraction of the ciliary muscle relaxes the zonules, allowing the lens to become more convex (accommodation).'
  },
  {
    id: 'eye-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The uveal tract consists of:',
    options: [
      'Cornea, sclera, and conjunctiva',
      'Iris, ciliary body, and choroid',
      'Lens, vitreous, and aqueous',
      'Retina and optic nerve',
      'Extraocular muscles'
    ],
    correctAnswer: 1,
    explanation: 'The uveal tract (vascular tunic) consists of the iris (anteriorly), ciliary body, and choroid (posteriorly). It contains the blood supply to the inner eye and the muscles controlling pupil size and accommodation.'
  },
  {
    id: 'eye-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The ciliary body produces:',
    options: [
      'Vitreous humor',
      'Aqueous humor',
      'Tears',
      'Mucus',
      'Melatonin'
    ],
    correctAnswer: 1,
    explanation: 'The ciliary epithelium of the ciliary processes secretes aqueous humor into the posterior chamber. Aqueous flows through the pupil into the anterior chamber and drains through the trabecular meshwork and Schlemm\'s canal.'
  },
  {
    id: 'eye-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The sphincter pupillae muscle (constricts the pupil) receives innervation from:',
    options: [
      'Sympathetic nervous system',
      'Parasympathetic fibers via CN III (from the ciliary ganglion)',
      'Trigeminal nerve',
      'Facial nerve',
      'Abducens nerve'
    ],
    correctAnswer: 1,
    explanation: 'The sphincter pupillae is innervated by parasympathetic fibers originating in the Edinger-Westphal nucleus, traveling via CN III to the ciliary ganglion, then via short ciliary nerves to the muscle (miosis).'
  },
  {
    id: 'eye-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The fovea centralis of the retina:',
    options: [
      'Contains mostly rod photoreceptors',
      'Contains only cone photoreceptors and provides highest visual acuity',
      'Is the site of optic disc',
      'Is where the optic nerve exits',
      'Has no photoreceptors'
    ],
    correctAnswer: 1,
    explanation: 'The fovea is a small depression in the macula containing only cone photoreceptors with a 1:1 ratio to ganglion cells. The inner retinal layers are displaced, maximizing light reaching the photoreceptors and providing highest acuity.'
  },
  {
    id: 'eye-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The ophthalmic artery is the first branch of the:',
    options: [
      'External carotid artery',
      'Intracranial internal carotid artery (supraclinoid segment)',
      'Middle cerebral artery',
      'Anterior cerebral artery',
      'Basilar artery'
    ],
    correctAnswer: 1,
    explanation: 'The ophthalmic artery is the first major branch of the intracranial ICA, arising from the supraclinoid segment just as the ICA exits the cavernous sinus. It enters the orbit through the optic canal with the optic nerve.'
  },
  {
    id: 'eye-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Central retinal artery occlusion causes:',
    options: [
      'Gradual vision loss over weeks',
      'Sudden painless monocular vision loss with "cherry red spot" on fundoscopy',
      'Painful vision loss with red eye',
      'Bilateral vision loss',
      'Temporary vision loss that recovers completely'
    ],
    correctAnswer: 1,
    explanation: 'Central retinal artery occlusion (CRAO) causes sudden, painless, severe monocular vision loss. Fundoscopy shows pale retina with a "cherry red spot" at the macula (choroidal blood showing through thin fovea). It is an ocular emergency.'
  }
];
