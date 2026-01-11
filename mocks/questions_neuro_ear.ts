import type { Question } from './questions';

// Urechea externă
export const externalEarQuestions: Question[] = [
  {
    id: 'ee-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The auricle (pinna) is composed primarily of:',
    options: [
      'Bone',
      'Elastic cartilage covered by skin',
      'Hyaline cartilage',
      'Fibrocartilage',
      'Muscle'
    ],
    correctAnswer: 1,
    explanation: 'The auricle is composed of elastic cartilage covered by tightly adherent skin. The lobule (earlobe) is the only part without cartilage, containing only fat and connective tissue.'
  },
  {
    id: 'ee-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The external acoustic meatus extends from the auricle to:',
    options: [
      'The inner ear',
      'The tympanic membrane',
      'The cochlea',
      'The vestibule',
      'The mastoid'
    ],
    correctAnswer: 1,
    explanation: 'The external acoustic meatus is an S-shaped canal about 2.5 cm long that extends from the concha of the auricle to the tympanic membrane (eardrum), which separates the external ear from the middle ear.'
  },
  {
    id: 'ee-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The lateral (outer) part of the external acoustic meatus is:',
    options: [
      'Bony',
      'Cartilaginous',
      'Membranous',
      'Muscular',
      'Ligamentous'
    ],
    correctAnswer: 1,
    explanation: 'The lateral one-third of the external acoustic meatus is cartilaginous (continuous with auricular cartilage), while the medial two-thirds is bony (formed by the tympanic part of the temporal bone).'
  },
  {
    id: 'ee-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Sensory innervation of the external ear involves which nerves?',
    options: [
      'Facial nerve only',
      'Great auricular (C2-C3), auriculotemporal (V3), and vagus (Arnold\'s nerve)',
      'Glossopharyngeal nerve only',
      'Hypoglossal nerve',
      'Accessory nerve'
    ],
    correctAnswer: 1,
    explanation: 'The external ear receives sensory innervation from: great auricular nerve (C2-C3) for most of the auricle, auriculotemporal nerve (V3) for the tragus and anterior canal, and Arnold\'s nerve (vagus) for the posterior canal and part of the tympanic membrane.'
  },
  {
    id: 'ee-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Ceruminous glands in the external acoustic meatus are modified:',
    options: [
      'Sebaceous glands',
      'Apocrine sweat glands',
      'Eccrine sweat glands',
      'Mucous glands',
      'Lacrimal glands'
    ],
    correctAnswer: 1,
    explanation: 'Ceruminous glands are modified apocrine sweat glands found in the cartilaginous portion of the external canal. They secrete cerumen (earwax) which, combined with sebaceous gland secretions and desquamated epithelium, protects the ear canal.'
  },
  {
    id: 'ee-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The blood supply to the external ear comes primarily from:',
    options: [
      'Internal carotid artery branches',
      'Posterior auricular and superficial temporal arteries (external carotid branches)',
      'Vertebral artery',
      'Ophthalmic artery',
      'Maxillary artery only'
    ],
    correctAnswer: 1,
    explanation: 'The external ear is supplied by branches of the external carotid artery: the posterior auricular artery (posterior surface) and superficial temporal artery (anterior surface). Deep auricular artery (from maxillary) supplies the deep canal.'
  },
  {
    id: 'ee-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Arnold\'s nerve (auricular branch of vagus) can cause which reflex when the ear canal is stimulated?',
    options: [
      'Sneezing',
      'Coughing (ear-cough reflex)',
      'Vomiting',
      'Lacrimation',
      'Salivation'
    ],
    correctAnswer: 1,
    explanation: 'Stimulation of Arnold\'s nerve (auricular branch of vagus) in the external canal can trigger the ear-cough reflex, causing coughing. This is clinically relevant during ear examination and cerumen removal.'
  },
  {
    id: 'ee-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The fissures of Santorini are:',
    options: [
      'Openings in the tympanic membrane',
      'Gaps in the cartilaginous external canal allowing infection spread',
      'Parts of the ossicular chain',
      'Semicircular canal openings',
      'Cochlear apertures'
    ],
    correctAnswer: 1,
    explanation: 'The fissures of Santorini are defects in the cartilage of the external canal floor where only fibrous tissue separates the canal from the parotid gland. Infections can spread between these structures through these fissures.'
  },
  {
    id: 'ee-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Malignant otitis externa typically spreads to involve:',
    options: [
      'The cochlea',
      'The skull base, causing osteomyelitis',
      'The brain directly',
      'The inner ear only',
      'The mastoid air cells first'
    ],
    correctAnswer: 1,
    explanation: 'Malignant (necrotizing) otitis externa, typically in diabetic/immunocompromised patients, spreads from the external canal through the fissures of Santorini to the skull base, causing osteomyelitis. It can involve cranial nerves (VII, IX, X, XI, XII).'
  },
  {
    id: 'ee-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Ramsay Hunt syndrome (herpes zoster oticus) affects which structure and nerve?',
    options: [
      'Cochlea and vestibulocochlear nerve',
      'Geniculate ganglion of the facial nerve',
      'Trigeminal ganglion',
      'Spiral ganglion',
      'Superior cervical ganglion'
    ],
    correctAnswer: 1,
    explanation: 'Ramsay Hunt syndrome is varicella zoster reactivation in the geniculate ganglion of the facial nerve. It causes facial paralysis, ear pain, vesicles on the auricle/canal, and may cause hearing loss and vertigo (CN VIII involvement).'
  }
];

// Urechea medie: conținut
export const middleEarContentsQuestions: Question[] = [
  {
    id: 'mec-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The three auditory ossicles from lateral to medial are:',
    options: [
      'Stapes, incus, malleus',
      'Malleus, incus, stapes',
      'Incus, malleus, stapes',
      'Stapes, malleus, incus',
      'Malleus, stapes, incus'
    ],
    correctAnswer: 1,
    explanation: 'The ossicular chain from lateral to medial consists of the malleus (attached to the tympanic membrane), incus (articulating with both), and stapes (with footplate in the oval window). They amplify and transmit sound vibrations.'
  },
  {
    id: 'mec-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The handle (manubrium) of the malleus is attached to:',
    options: [
      'The stapes',
      'The tympanic membrane',
      'The incus',
      'The oval window',
      'The round window'
    ],
    correctAnswer: 1,
    explanation: 'The manubrium (handle) of the malleus is firmly attached to the medial surface of the tympanic membrane. The lateral process creates the lateral prominence visible on otoscopy.'
  },
  {
    id: 'mec-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The footplate of the stapes fits into:',
    options: [
      'The round window',
      'The oval window (fenestra vestibuli)',
      'The tympanic membrane',
      'The incus',
      'The cochlear aqueduct'
    ],
    correctAnswer: 1,
    explanation: 'The footplate of the stapes fits into the oval window (fenestra vestibuli), sealed by the annular ligament. Vibration of the footplate transmits sound energy to the perilymph of the inner ear.'
  },
  {
    id: 'mec-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The tensor tympani muscle is innervated by:',
    options: [
      'Facial nerve',
      'Mandibular division of trigeminal nerve (V3)',
      'Glossopharyngeal nerve',
      'Vagus nerve',
      'Hypoglossal nerve'
    ],
    correctAnswer: 1,
    explanation: 'The tensor tympani is innervated by a branch of V3 (mandibular nerve) via the otic ganglion. It inserts on the malleus and tenses the tympanic membrane, dampening loud sounds.'
  },
  {
    id: 'mec-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The stapedius muscle is innervated by:',
    options: [
      'Trigeminal nerve',
      'Facial nerve (CN VII)',
      'Glossopharyngeal nerve',
      'Vagus nerve',
      'Vestibulocochlear nerve'
    ],
    correctAnswer: 1,
    explanation: 'The stapedius is innervated by the stapedial branch of the facial nerve (CN VII). It inserts on the stapes and contracts reflexively to protect the inner ear from loud sounds (acoustic reflex).'
  },
  {
    id: 'mec-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The chorda tympani nerve crosses the middle ear:',
    options: [
      'Below the ossicles',
      'Between the handle of the malleus and long process of the incus',
      'Through the cochlea',
      'Around the stapes',
      'Through the oval window'
    ],
    correctAnswer: 1,
    explanation: 'The chorda tympani (branch of CN VII) crosses the middle ear between the handle of the malleus and the long process of the incus, covered by mucous membrane. It carries taste from the anterior two-thirds of the tongue and parasympathetic fibers to submandibular/sublingual glands.'
  },
  {
    id: 'mec-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The function of the ossicular chain is to:',
    options: [
      'Generate sound waves',
      'Amplify and transmit sound from the tympanic membrane to the inner ear',
      'Filter high frequencies',
      'Produce endolymph',
      'Balance air pressure'
    ],
    correctAnswer: 1,
    explanation: 'The ossicular chain amplifies sound approximately 20-fold through the lever action of the ossicles and the area ratio between the large tympanic membrane and small oval window, overcoming the impedance mismatch between air and fluid.'
  },
  {
    id: 'mec-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Hyperacusis (increased sensitivity to sound) can occur with facial nerve palsy because:',
    options: [
      'The cochlea is damaged',
      'The stapedius muscle is paralyzed, losing the acoustic reflex',
      'The tensor tympani is paralyzed',
      'The tympanic membrane is damaged',
      'The vestibulocochlear nerve is affected'
    ],
    correctAnswer: 1,
    explanation: 'The stapedius muscle, innervated by CN VII, normally dampens ossicular movement in response to loud sounds (acoustic reflex). Facial nerve palsy paralyzes the stapedius, causing hyperacusis (sounds seem abnormally loud).'
  },
  {
    id: 'mec-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Otosclerosis typically causes hearing loss by affecting:',
    options: [
      'The tympanic membrane',
      'The stapes footplate (fixation to the oval window)',
      'The cochlear hair cells',
      'The auditory nerve',
      'The external canal'
    ],
    correctAnswer: 1,
    explanation: 'Otosclerosis causes abnormal bone remodeling, most commonly at the anterior oval window, leading to fixation of the stapes footplate. This prevents normal vibration transmission, causing conductive hearing loss. Stapedectomy can restore hearing.'
  },
  {
    id: 'mec-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The promontory on the medial wall of the middle ear overlies:',
    options: [
      'The vestibule',
      'The basal turn of the cochlea',
      'The semicircular canals',
      'The internal auditory canal',
      'The mastoid antrum'
    ],
    correctAnswer: 1,
    explanation: 'The promontory is a rounded elevation on the medial wall of the middle ear produced by the underlying basal turn of the cochlea. The tympanic plexus (CN IX) lies on its surface.'
  }
];

// Urechea medie – pereți
export const middleEarWallsQuestions: Question[] = [
  {
    id: 'mew-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The lateral wall of the middle ear is formed mainly by:',
    options: [
      'The promontory',
      'The tympanic membrane',
      'The tegmen tympani',
      'The carotid canal',
      'The jugular fossa'
    ],
    correctAnswer: 1,
    explanation: 'The lateral wall of the middle ear (tympanic cavity) is formed primarily by the tympanic membrane, with a small bony component (scutum) superiorly. The membrane separates the middle ear from the external acoustic meatus.'
  },
  {
    id: 'mew-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The roof of the middle ear (tegmen tympani) separates it from:',
    options: [
      'The external ear',
      'The middle cranial fossa',
      'The mastoid',
      'The internal ear',
      'The nasopharynx'
    ],
    correctAnswer: 1,
    explanation: 'The tegmen tympani is a thin plate of bone forming the roof of the middle ear, separating it from the middle cranial fossa and temporal lobe. Infections can spread intracranially through this thin barrier.'
  },
  {
    id: 'mew-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The floor of the middle ear is related to:',
    options: [
      'The internal carotid artery',
      'The jugular bulb (superior bulb of internal jugular vein)',
      'The sigmoid sinus',
      'The facial nerve',
      'The cochlea'
    ],
    correctAnswer: 1,
    explanation: 'The floor of the middle ear is a thin plate of bone separating it from the jugular bulb (superior bulb of the internal jugular vein). The floor may be dehiscent, exposing the jugular bulb.'
  },
  {
    id: 'mew-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The medial wall of the middle ear contains all EXCEPT:',
    options: [
      'Promontory',
      'Oval window',
      'Tympanic membrane',
      'Round window',
      'Facial nerve canal'
    ],
    correctAnswer: 2,
    explanation: 'The medial (labyrinthine) wall contains the promontory (over cochlea), oval window (fenestra vestibuli), round window (fenestra cochleae), and the prominence of the facial nerve canal. The tympanic membrane is in the lateral wall.'
  },
  {
    id: 'mew-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The posterior wall of the middle ear contains an opening (aditus) leading to:',
    options: [
      'The auditory tube',
      'The mastoid antrum',
      'The internal ear',
      'The external ear',
      'The nasopharynx'
    ],
    correctAnswer: 1,
    explanation: 'The posterior wall contains the aditus ad antrum, an opening leading from the epitympanum (attic) to the mastoid antrum. This allows middle ear infections to spread to the mastoid air cells.'
  },
  {
    id: 'mew-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The anterior wall of the middle ear contains the opening of:',
    options: [
      'The mastoid antrum',
      'The auditory (Eustachian/pharyngotympanic) tube',
      'The internal auditory canal',
      'The external acoustic meatus',
      'The cochlear aqueduct'
    ],
    correctAnswer: 1,
    explanation: 'The anterior wall contains the tympanic opening of the auditory tube (Eustachian tube) inferiorly. The canal for the tensor tympani muscle lies above it. The carotid canal is related anteriorly.'
  },
  {
    id: 'mew-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The pyramidal eminence on the posterior wall of the middle ear contains:',
    options: [
      'The tensor tympani muscle',
      'The stapedius muscle',
      'The chorda tympani',
      'The facial nerve',
      'The incus'
    ],
    correctAnswer: 1,
    explanation: 'The pyramidal eminence is a small conical projection on the posterior wall that houses the stapedius muscle. The tendon of the stapedius emerges from its apex to insert on the neck of the stapes.'
  },
  {
    id: 'mew-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The facial nerve is most vulnerable to injury during middle ear surgery at:',
    options: [
      'The internal auditory canal',
      'The second genu (where it turns posteriorly above the oval window)',
      'The stylomastoid foramen',
      'The parotid gland',
      'The geniculate ganglion'
    ],
    correctAnswer: 1,
    explanation: 'The facial nerve is most at risk at the second genu where it turns posteriorly, passing just above the oval window and stapes. Here it may be dehiscent (lacking bony covering) in up to 50% of cases.'
  },
  {
    id: 'mew-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'A cholesteatoma eroding the tegmen tympani can cause:',
    options: [
      'Sensorineural hearing loss only',
      'Intracranial complications (meningitis, brain abscess)',
      'Vertigo only',
      'Facial paralysis only',
      'External ear infection'
    ],
    correctAnswer: 1,
    explanation: 'Cholesteatoma is a destructive keratinizing epithelial cyst that erodes bone. Erosion of the tegmen tympani can lead to CSF leak, meningitis, epidural/subdural abscess, or temporal lobe abscess. It requires surgical removal.'
  },
  {
    id: 'mew-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The tympanic segment of the facial nerve runs:',
    options: [
      'Vertically through the mastoid',
      'Horizontally above the oval window on the medial wall',
      'Through the internal auditory canal',
      'In the parotid gland',
      'Across the tympanic membrane'
    ],
    correctAnswer: 1,
    explanation: 'The tympanic segment of the facial nerve runs horizontally in its bony canal on the medial wall of the middle ear, above the oval window and below the lateral semicircular canal prominence. Dehiscence here is common.'
  }
];

// Tuba auditivă
export const auditorTubeQuestions: Question[] = [
  {
    id: 'at-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The auditory (Eustachian) tube connects the middle ear to:',
    options: [
      'The oropharynx',
      'The nasopharynx',
      'The larynx',
      'The nasal cavity directly',
      'The mastoid'
    ],
    correctAnswer: 1,
    explanation: 'The auditory tube connects the middle ear (tympanic cavity) to the nasopharynx at the lateral pharyngeal wall. It equalizes pressure across the tympanic membrane and drains middle ear secretions.'
  },
  {
    id: 'at-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The auditory tube consists of which two parts?',
    options: [
      'Superior and inferior',
      'Bony (lateral) and cartilaginous (medial) portions',
      'Anterior and posterior',
      'Internal and external',
      'Muscular and membranous'
    ],
    correctAnswer: 1,
    explanation: 'The auditory tube has a bony (osseous) lateral third near the middle ear and a cartilaginous medial two-thirds toward the nasopharynx. The junction is the narrowest part (isthmus).'
  },
  {
    id: 'at-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The auditory tube in children compared to adults is:',
    options: [
      'Longer and more vertical',
      'Shorter, wider, and more horizontal',
      'The same',
      'Narrower and more vertical',
      'Absent'
    ],
    correctAnswer: 1,
    explanation: 'In children, the auditory tube is shorter, wider, and more horizontal than in adults. This facilitates the spread of infections from the nasopharynx to the middle ear, explaining the higher incidence of otitis media in children.'
  },
  {
    id: 'at-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The muscle that opens the auditory tube during swallowing is:',
    options: [
      'Tensor tympani',
      'Tensor veli palatini',
      'Levator veli palatini',
      'Stapedius',
      'Salpingopharyngeus'
    ],
    correctAnswer: 1,
    explanation: 'The tensor veli palatini (innervated by V3) opens the auditory tube by pulling on the cartilaginous wall. This occurs during swallowing, yawning, and chewing, equalizing middle ear pressure with atmospheric pressure.'
  },
  {
    id: 'at-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The pharyngeal opening of the auditory tube is surrounded by:',
    options: [
      'The palatine tonsil',
      'The tubal tonsil (part of Waldeyer\'s ring)',
      'The lingual tonsil',
      'The adenoid only',
      'No lymphoid tissue'
    ],
    correctAnswer: 1,
    explanation: 'The pharyngeal opening of the auditory tube is surrounded by the tubal tonsil, which is part of Waldeyer\'s ring of lymphoid tissue. The torus tubarius (cartilaginous elevation) forms the posterior lip of the opening.'
  },
  {
    id: 'at-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The auditory tube is lined by:',
    options: [
      'Stratified squamous epithelium',
      'Respiratory (ciliated pseudostratified columnar) epithelium',
      'Simple cuboidal epithelium',
      'Transitional epithelium',
      'Keratinized epithelium'
    ],
    correctAnswer: 1,
    explanation: 'The auditory tube is lined by respiratory epithelium (ciliated pseudostratified columnar with goblet cells) that is continuous with the nasopharyngeal and middle ear mucosa. Cilia beat toward the nasopharynx.'
  },
  {
    id: 'at-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The salpingopharyngeus muscle:',
    options: [
      'Opens the auditory tube',
      'Arises from the tube and helps elevate the pharynx during swallowing',
      'Closes the auditory tube',
      'Tenses the tympanic membrane',
      'Is innervated by the trigeminal nerve'
    ],
    correctAnswer: 1,
    explanation: 'The salpingopharyngeus arises from the inferior cartilage of the auditory tube and descends to blend with the palatopharyngeus. It elevates the pharynx during swallowing and may help open the tube (innervated by pharyngeal plexus, CN X).'
  },
  {
    id: 'at-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Eustachian tube dysfunction can cause:',
    options: [
      'Sensorineural hearing loss only',
      'Middle ear effusion, retracted tympanic membrane, and conductive hearing loss',
      'Vertigo without hearing loss',
      'Facial paralysis',
      'Tinnitus only'
    ],
    correctAnswer: 1,
    explanation: 'Eustachian tube dysfunction prevents pressure equalization and drainage. Negative middle ear pressure causes tympanic membrane retraction, and mucus accumulation causes effusion (fluid). Both cause conductive hearing loss.'
  },
  {
    id: 'at-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Patulous (abnormally patent) Eustachian tube causes:',
    options: [
      'Recurrent middle ear infections',
      'Autophony (hearing one\'s own voice/breathing loudly)',
      'Vertigo',
      'Facial weakness',
      'Complete deafness'
    ],
    correctAnswer: 1,
    explanation: 'A patulous Eustachian tube remains abnormally open, causing autophony (the patient hears their own voice and breathing loudly), sensation of ear fullness, and tympanic membrane movement with respiration.'
  },
  {
    id: 'at-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Nasopharyngeal carcinoma can present with middle ear effusion because:',
    options: [
      'It directly invades the middle ear',
      'It obstructs the pharyngeal opening of the auditory tube',
      'It compresses the cochlea',
      'It destroys the tympanic membrane',
      'It affects the facial nerve'
    ],
    correctAnswer: 1,
    explanation: 'Nasopharyngeal carcinoma commonly arises in the fossa of Rosenmüller near the auditory tube opening. Tumor obstruction of the tube causes unilateral middle ear effusion, often the presenting symptom in adults (requiring nasopharyngoscopy).'
  }
];

// Inner ear structures
export const innerEarQuestions: Question[] = [
  {
    id: 'ie-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The bony labyrinth contains:',
    options: [
      'Endolymph',
      'Perilymph',
      'Cerebrospinal fluid',
      'Blood',
      'Mucus'
    ],
    correctAnswer: 1,
    explanation: 'The bony labyrinth (osseous labyrinth) is filled with perilymph, which is similar in composition to extracellular fluid (high sodium, low potassium). The membranous labyrinth floats within and contains endolymph.'
  },
  {
    id: 'ie-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The cochlea is shaped like:',
    options: [
      'A straight tube',
      'A snail shell (spiral)',
      'A sphere',
      'A cube',
      'A semicircle'
    ],
    correctAnswer: 1,
    explanation: 'The cochlea is a coiled, snail-shell-shaped structure with about 2.5 turns around a central bony core (modiolus). It contains the organ of Corti, which transduces sound vibrations into neural signals.'
  },
  {
    id: 'ie-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The vestibular system consists of:',
    options: [
      'Only the cochlea',
      'The utricle, saccule, and three semicircular canals',
      'Only the semicircular canals',
      'The tympanic membrane and ossicles',
      'The auditory tube'
    ],
    correctAnswer: 1,
    explanation: 'The vestibular system includes the utricle and saccule (otolith organs detecting linear acceleration and gravity) and three semicircular canals (detecting angular acceleration/rotation). Together they maintain balance.'
  },
  {
    id: 'ie-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The three semicircular canals are oriented:',
    options: [
      'All in the same plane',
      'At right angles to each other (horizontal, anterior, posterior)',
      'Parallel to each other',
      'At 45-degree angles',
      'Randomly'
    ],
    correctAnswer: 1,
    explanation: 'The three semicircular canals (horizontal/lateral, anterior/superior, posterior) are oriented at approximately right angles to each other, allowing detection of head rotation in any plane of 3D space.'
  },
  {
    id: 'ie-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The cochlear duct (scala media) contains:',
    options: [
      'Perilymph',
      'Endolymph',
      'CSF',
      'Air',
      'Blood'
    ],
    correctAnswer: 1,
    explanation: 'The cochlear duct (scala media) is the membranous labyrinth portion within the cochlea and contains endolymph (high potassium, low sodium). The organ of Corti sits on its basilar membrane.'
  },
  {
    id: 'ie-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The ampullae of the semicircular canals contain:',
    options: [
      'Otoliths',
      'Cristae ampullares with hair cells',
      'The organ of Corti',
      'Ceruminous glands',
      'Perilymph only'
    ],
    correctAnswer: 1,
    explanation: 'Each semicircular canal has a dilated ampulla containing the crista ampullaris - a ridge with hair cells covered by a gelatinous cupula. Movement of endolymph during head rotation deflects the cupula and stimulates hair cells.'
  },
  {
    id: 'ie-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'The internal acoustic meatus transmits:',
    options: [
      'The facial and vestibulocochlear nerves',
      'The auditory tube',
      'The carotid artery',
      'The jugular vein',
      'The sigmoid sinus'
    ],
    correctAnswer: 0,
    explanation: 'The internal acoustic meatus, located in the petrous temporal bone, transmits the facial nerve (CN VII), vestibulocochlear nerve (CN VIII), labyrinthine artery, and labyrinthine vein.'
  },
  {
    id: 'ie-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Endolymph is produced mainly by:',
    options: [
      'The choroid plexus',
      'The stria vascularis in the cochlea',
      'The perilymphatic duct',
      'The middle ear mucosa',
      'The tympanic membrane'
    ],
    correctAnswer: 1,
    explanation: 'Endolymph is produced by the stria vascularis, a highly vascular epithelium on the lateral wall of the cochlear duct. It maintains the unique high potassium/low sodium composition essential for hair cell function.'
  },
  {
    id: 'ie-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Ménière disease is characterized by:',
    options: [
      'Conductive hearing loss only',
      'Endolymphatic hydrops causing episodic vertigo, hearing loss, and tinnitus',
      'Facial paralysis and vesicles',
      'Otosclerosis',
      'Cholesteatoma'
    ],
    correctAnswer: 1,
    explanation: 'Ménière disease is caused by endolymphatic hydrops (excess endolymph). The classic triad is episodic vertigo, fluctuating sensorineural hearing loss (low frequency initially), tinnitus, and aural fullness. Episodes last minutes to hours.'
  },
  {
    id: 'ie-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Benign paroxysmal positional vertigo (BPPV) is caused by:',
    options: [
      'Endolymphatic hydrops',
      'Otoliths (otoconia) displaced into the semicircular canals',
      'Acoustic neuroma',
      'Middle ear infection',
      'Vestibular neuritis'
    ],
    correctAnswer: 1,
    explanation: 'BPPV is caused by otoconia (calcium carbonate crystals) displaced from the utricle into a semicircular canal (usually posterior). Head position changes cause otoconia movement, stimulating the canal inappropriately and causing brief vertigo.'
  }
];

// Receptorii gustativi & Mucoasa gustativă
export const tasteReceptorsQuestions: Question[] = [
  {
    id: 'tr-1',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Taste buds are located in:',
    options: [
      'The teeth',
      'Papillae of the tongue (and palate, pharynx, epiglottis)',
      'The lips only',
      'The nasal cavity',
      'The larynx only'
    ],
    correctAnswer: 1,
    explanation: 'Taste buds are found primarily in the papillae of the tongue (fungiform, foliate, and circumvallate), but also on the soft palate, pharynx, and epiglottis. Filiform papillae do NOT contain taste buds.'
  },
  {
    id: 'tr-2',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'The five basic taste qualities are:',
    options: [
      'Hot, cold, painful, pleasant, neutral',
      'Sweet, sour, salty, bitter, and umami',
      'Red, blue, green, yellow, white',
      'Spicy, bland, rich, mild, sharp',
      'Fruity, meaty, vegetable, grain, dairy'
    ],
    correctAnswer: 1,
    explanation: 'The five basic taste qualities are sweet, sour, salty, bitter, and umami (savory/meaty, responding to glutamate). Each taste bud can detect all five tastes, though with varying sensitivity.'
  },
  {
    id: 'tr-3',
    category: 'neuroanatomy',
    difficulty: 'easy',
    question: 'Circumvallate papillae are located:',
    options: [
      'At the tip of the tongue',
      'In a V-shaped row at the posterior tongue',
      'On the lateral tongue edges',
      'On the undersurface of the tongue',
      'On the hard palate only'
    ],
    correctAnswer: 1,
    explanation: 'Circumvallate (vallate) papillae are large, dome-shaped papillae arranged in a V-shaped row at the junction of the anterior two-thirds and posterior one-third of the tongue. They contain many taste buds in their lateral walls.'
  },
  {
    id: 'tr-4',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Taste from the anterior two-thirds of the tongue is carried by:',
    options: [
      'Glossopharyngeal nerve',
      'Chorda tympani (branch of facial nerve, CN VII)',
      'Vagus nerve',
      'Hypoglossal nerve',
      'Trigeminal nerve'
    ],
    correctAnswer: 1,
    explanation: 'The chorda tympani nerve (branch of CN VII) carries taste sensation from the anterior two-thirds of the tongue. It joins the lingual nerve (V3) to reach the tongue but carries special visceral afferent fibers for taste.'
  },
  {
    id: 'tr-5',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Taste from the posterior one-third of the tongue is carried by:',
    options: [
      'Facial nerve',
      'Glossopharyngeal nerve (CN IX)',
      'Trigeminal nerve',
      'Hypoglossal nerve',
      'Accessory nerve'
    ],
    correctAnswer: 1,
    explanation: 'The glossopharyngeal nerve (CN IX) carries taste sensation from the posterior one-third of the tongue, including the circumvallate papillae. It also provides general sensation to this area.'
  },
  {
    id: 'tr-6',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Taste from the epiglottis and pharynx is carried by:',
    options: [
      'Facial nerve',
      'Vagus nerve (CN X) via internal laryngeal nerve',
      'Glossopharyngeal nerve only',
      'Hypoglossal nerve',
      'Trigeminal nerve'
    ],
    correctAnswer: 1,
    explanation: 'The vagus nerve (CN X) via its internal laryngeal branch carries taste sensation from the epiglottis and pharynx. This contributes to the gag reflex and protective airway reflexes during swallowing.'
  },
  {
    id: 'tr-7',
    category: 'neuroanatomy',
    difficulty: 'medium',
    question: 'Taste fibers synapse in which brainstem nucleus?',
    options: [
      'Spinal trigeminal nucleus',
      'Nucleus of the solitary tract (rostral gustatory portion)',
      'Vestibular nuclei',
      'Cochlear nuclei',
      'Hypoglossal nucleus'
    ],
    correctAnswer: 1,
    explanation: 'All taste fibers (from CN VII, IX, and X) synapse in the rostral (gustatory) portion of the nucleus of the solitary tract in the medulla. From here, information projects to the thalamus (VPM) and then to the gustatory cortex.'
  },
  {
    id: 'tr-8',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'The primary gustatory cortex is located in:',
    options: [
      'The occipital lobe',
      'The frontal operculum and anterior insula',
      'The temporal pole',
      'The parietal lobe',
      'The cerebellum'
    ],
    correctAnswer: 1,
    explanation: 'The primary gustatory cortex is located in the frontal operculum and anterior insula (insular cortex). From the VPM nucleus of the thalamus, taste information projects here for conscious perception of taste.'
  },
  {
    id: 'tr-9',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Ageusia (complete loss of taste) is rare because:',
    options: [
      'Taste receptors cannot be damaged',
      'Multiple cranial nerves (VII, IX, X) supply taste, providing redundancy',
      'Taste receptors regenerate immediately',
      'The gustatory cortex is protected',
      'Taste is not a real sense'
    ],
    correctAnswer: 1,
    explanation: 'Complete ageusia is rare because taste is supplied by three cranial nerves (VII, IX, X) from different regions. Damage to one nerve causes only regional taste loss. Bilateral damage to all pathways is required for complete ageusia.'
  },
  {
    id: 'tr-10',
    category: 'neuroanatomy',
    difficulty: 'hard',
    question: 'Taste receptor cells are:',
    options: [
      'Primary sensory neurons',
      'Modified epithelial cells that synapse with primary afferent neurons',
      'Glial cells',
      'Muscle cells',
      'Endocrine cells'
    ],
    correctAnswer: 1,
    explanation: 'Taste receptor cells are specialized epithelial cells (not neurons) that detect tastants and synapse with primary afferent gustatory nerve fibers. They are organized in taste buds and turn over every 10-14 days.'
  }
];
