import type { Question } from './questions';

// Placeholder for joint questions - to be generated
// Should include: shoulder, elbow, wrist, hip, knee, ankle joints

export const shoulderJointQuestions: Question[] = [
  {
    id: 'shj1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which bones articulate to form the glenohumeral (shoulder) joint?',
    options: [
      'Clavicle and scapula',
      'Humerus and clavicle',
      'Head of humerus and glenoid cavity of scapula',
      'Scapula and thoracic wall',
      'Humerus and sternum'
    ],
    correctAnswer: 2,
    explanation:
      'The glenohumeral joint is formed by the articulation between the head of the humerus and the shallow glenoid cavity (fossa) of the scapula.'
  },
  {
    id: 'shj2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which type of synovial joint is the glenohumeral joint?',
    options: [
      'Hinge joint',
      'Pivot joint',
      'Ball-and-socket joint',
      'Saddle joint',
      'Plane (gliding) joint'
    ],
    correctAnswer: 2,
    explanation:
      'The glenohumeral joint is a ball-and-socket (spheroidal) synovial joint, allowing multiaxial movement including flexion, extension, abduction, adduction, rotation and circumduction.'
  },
  {
    id: 'shj3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which structure deepens the glenoid cavity and increases joint stability?',
    options: [
      'Articular cartilage only',
      'Glenoid labrum (fibrocartilaginous rim)',
      'Coracoacromial ligament',
      'Acromioclavicular ligament',
      'Joint capsule only'
    ],
    correctAnswer: 1,
    explanation:
      'The glenoid labrum is a fibrocartilaginous rim that surrounds and deepens the glenoid cavity, increasing congruency and stability while serving as an attachment for the joint capsule and long head of biceps.'
  },
  {
    id: 'shj4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which ligaments reinforce the anterior aspect of the glenohumeral joint capsule?',
    options: [
      'Coracoacromial and coracohumeral ligaments',
      'Superior, middle and inferior glenohumeral ligaments',
      'Acromioclavicular and coracoclavicular ligaments',
      'Transverse humeral ligament only',
      'No anterior ligaments exist'
    ],
    correctAnswer: 1,
    explanation:
      'Three glenohumeral ligaments (superior, middle and inferior) reinforce the anterior capsule and help prevent anterior dislocation; the inferior ligament is the most important.'
  },
  {
    id: 'shj5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which rotator cuff tendons blend with and reinforce the glenohumeral joint capsule?',
    options: [
      'Deltoid and trapezius',
      'Supraspinatus, infraspinatus, teres minor and subscapularis',
      'Pectoralis major and latissimus dorsi',
      'Biceps brachii and triceps brachii',
      'Teres major and coracobrachialis'
    ],
    correctAnswer: 1,
    explanation:
      'The four rotator cuff muscles (supraspinatus superiorly, infraspinatus and teres minor posteriorly, subscapularis anteriorly) have tendons that blend with the joint capsule, providing dynamic stability.'
  },
  {
    id: 'shj6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which aspect of the glenohumeral joint capsule is the weakest and most prone to dislocation?',
    options: [
      'Superior aspect',
      'Posterior aspect',
      'Anteroinferior aspect',
      'All aspects are equally strong',
      'Lateral aspect'
    ],
    correctAnswer: 2,
    explanation:
      'The anteroinferior aspect of the capsule is the weakest, with minimal ligamentous and muscular support, making it the most common site for shoulder dislocation.'
  },
  {
    id: 'shj7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which structure forms the coracoacromial arch and helps prevent superior displacement of the humeral head?',
    options: [
      'Glenoid labrum',
      'Coracoacromial ligament spanning from coracoid process to acromion',
      'Glenohumeral ligaments',
      'Transverse humeral ligament',
      'Acromioclavicular joint capsule'
    ],
    correctAnswer: 1,
    explanation:
      'The coracoacromial arch is formed by the coracoid process, acromion and coracoacromial ligament; it acts as a protective roof preventing superior humeral head displacement and houses the subacromial bursa.'
  },
  {
    id: 'shj8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which direction accounts for approximately 95% of glenohumeral dislocations?',
    options: [
      'Posterior',
      'Superior',
      'Inferior (luxatio erecta)',
      'Anterior (and anteroinferior)',
      'Lateral'
    ],
    correctAnswer: 3,
    explanation:
      'Approximately 95% of shoulder dislocations are anterior or anteroinferior, typically occurring when the arm is abducted and externally rotated, forcing the humeral head through the weak anteroinferior capsule.'
  },
  {
    id: 'shj9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which nerve and artery are at greatest risk during anterior shoulder dislocation?',
    options: [
      'Median nerve and brachial artery',
      'Radial nerve and deep brachial artery',
      'Axillary nerve and posterior circumflex humeral artery',
      'Ulnar nerve and ulnar artery',
      'Musculocutaneous nerve and anterior circumflex artery'
    ],
    correctAnswer: 2,
    explanation:
      'The axillary nerve and posterior circumflex humeral artery wind around the surgical neck of the humerus and are vulnerable to injury during anterior dislocation or proximal humerus fractures.'
  },
  {
    id: 'shj10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical finding is characteristic of a rotator cuff tear affecting the supraspinatus tendon?',
    options: [
      'Inability to extend the elbow',
      'Loss of shoulder abduction initiation and painful arc during abduction (especially 60–120°)',
      'Complete loss of all shoulder movements',
      'Wrist drop',
      'Loss of elbow flexion'
    ],
    correctAnswer: 1,
    explanation:
      'Supraspinatus tears cause difficulty initiating abduction and produce a painful arc during mid-range abduction (60–120°) due to impingement of the torn tendon under the coracoacromial arch.'
  }
];

export const elbowJointQuestions: Question[] = [
  {
    id: 'elj1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which bones articulate to form the elbow joint complex?',
    options: [
      'Humerus and scapula',
      'Humerus, radius and ulna',
      'Radius and ulna only',
      'Humerus and clavicle',
      'Ulna and carpal bones'
    ],
    correctAnswer: 1,
    explanation:
      'The elbow joint complex involves three bones: the distal humerus articulating with the proximal radius and ulna, forming three distinct articulations within a single joint capsule.'
  },
  {
    id: 'elj2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which three articulations comprise the elbow joint complex?',
    options: [
      'Humeroulnar, humeroradial and proximal radioulnar joints',
      'Glenohumeral, acromioclavicular and sternoclavicular joints',
      'Radiocarpal, midcarpal and carpometacarpal joints',
      'Only humeroulnar joint',
      'Shoulder, elbow and wrist joints'
    ],
    correctAnswer: 0,
    explanation:
      'The elbow consists of the humeroulnar joint (hinge for flexion/extension), humeroradial joint (contributes to elbow flexion and pronation/supination) and proximal radioulnar joint (pivot for forearm rotation).'
  },
  {
    id: 'elj3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which type of joint is the humeroulnar articulation and what movements does it permit?',
    options: [
      'Ball-and-socket joint allowing circumduction',
      'Hinge joint allowing primarily flexion and extension',
      'Pivot joint allowing rotation only',
      'Saddle joint allowing opposition',
      'Plane joint allowing gliding only'
    ],
    correctAnswer: 1,
    explanation:
      'The humeroulnar joint between the trochlea of the humerus and trochlear notch of the ulna is a hinge (ginglymus) joint permitting flexion and extension in the sagittal plane.'
  },
  {
    id: 'elj4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which ligaments provide medial and lateral stability to the elbow joint?',
    options: [
      'Anterior and posterior cruciate ligaments',
      'Ulnar (medial) collateral ligament and radial (lateral) collateral ligament',
      'Coracoclavicular and coracoacromial ligaments',
      'Glenohumeral ligaments',
      'No collateral ligaments exist at the elbow'
    ],
    correctAnswer: 1,
    explanation:
      'The ulnar (medial) collateral ligament (UCL) resists valgus stress, and the radial (lateral) collateral ligament complex (including annular ligament) resists varus stress and stabilizes the radial head.'
  },
  {
    id: 'elj5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which ligament encircles and stabilizes the head of the radius at the proximal radioulnar joint?',
    options: [
      'Ulnar collateral ligament',
      'Annular ligament',
      'Interosseous ligament',
      'Coracoacromial ligament',
      'Transverse carpal ligament'
    ],
    correctAnswer: 1,
    explanation:
      'The annular ligament forms a fibro-osseous ring around the radial head, attaching to the radial notch of the ulna and allowing the radius to rotate during pronation and supination.'
  },
  {
    id: 'elj6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which type of joint is the proximal radioulnar joint and what movement does it permit?',
    options: [
      'Hinge joint allowing flexion/extension',
      'Ball-and-socket joint allowing circumduction',
      'Pivot joint allowing pronation and supination of the forearm',
      'Saddle joint allowing opposition',
      'Condyloid joint allowing biaxial movement'
    ],
    correctAnswer: 2,
    explanation:
      'The proximal radioulnar joint is a pivot (trochoid) joint where the radial head rotates within the annular ligament and radial notch of the ulna, enabling pronation and supination.'
  },
  {
    id: 'elj7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical injury pattern results from a fall on an outstretched hand (FOOSH) with hyperextension of the elbow?',
    options: [
      'Anterior shoulder dislocation',
      'Supracondylar fracture of the humerus (common in children) or posterior elbow dislocation',
      'Scaphoid fracture only',
      'Clavicle fracture',
      'Wrist drop'
    ],
    correctAnswer: 1,
    explanation:
      'FOOSH injuries with elbow hyperextension commonly cause supracondylar humeral fractures (especially in children, with risk of brachial artery and median nerve injury) or posterior elbow dislocation.'
  },
  {
    id: 'elj8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which nerve is MOST at risk for injury in a supracondylar fracture of the humerus?',
    options: [
      'Radial nerve',
      'Axillary nerve',
      'Median nerve and brachial artery',
      'Ulnar nerve',
      'Musculocutaneous nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The median nerve and brachial artery are most vulnerable in supracondylar fractures due to their anterior proximity to the distal humerus; complications include Volkmann contracture from arterial injury.'
  },
  {
    id: 'elj9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which condition involves chronic medial elbow pain in throwing athletes due to repetitive valgus stress?',
    options: [
      'Lateral epicondylitis (tennis elbow)',
      'Medial epicondylitis (golfer\'s elbow) and UCL injury',
      'Carpal tunnel syndrome',
      'Rotator cuff tear',
      'De Quervain tenosynovitis'
    ],
    correctAnswer: 1,
    explanation:
      'Repetitive overhead throwing causes valgus stress on the medial elbow, leading to medial epicondylitis (flexor-pronator origin inflammation) and potential ulnar collateral ligament (UCL) tears requiring Tommy John surgery.'
  },
  {
    id: 'elj10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which pediatric elbow injury involves subluxation of the radial head from the annular ligament, typically from a pulling force on an extended, pronated arm?',
    options: [
      'Supracondylar fracture',
      'Nursemaid\'s elbow (radial head subluxation)',
      'Olecranon fracture',
      'Lateral epicondyle fracture',
      'Monteggia fracture'
    ],
    correctAnswer: 1,
    explanation:
      'Nursemaid\'s elbow (pulled elbow) occurs when the radial head slips out of the annular ligament, typically in children under 5 when pulled by the hand with the arm extended and pronated; reduction is usually simple.'
  }
];

export const wristJointQuestions: Question[] = [
  {
    id: 'wrj1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which bones articulate to form the radiocarpal (wrist) joint?',
    options: [
      'Radius and ulna with all carpal bones',
      'Distal radius and scaphoid/lunate (with triangular fibrocartilage disc between ulna and carpals)',
      'Only radius and scaphoid',
      'Ulna directly with all carpal bones',
      'Carpals with metacarpals'
    ],
    correctAnswer: 1,
    explanation:
      'The radiocarpal joint is formed by the distal radius articulating with the scaphoid and lunate; the ulna does not directly contact carpals but is connected via the triangular fibrocartilage complex (TFCC).'
  },
  {
    id: 'wrj2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which type of synovial joint is the radiocarpal (wrist) joint?',
    options: [
      'Hinge joint',
      'Pivot joint',
      'Condyloid (ellipsoid) joint',
      'Ball-and-socket joint',
      'Saddle joint'
    ],
    correctAnswer: 2,
    explanation:
      'The radiocarpal joint is a condyloid (ellipsoid) synovial joint allowing flexion, extension, radial and ulnar deviation, and circumduction (but not axial rotation).'
  },
  {
    id: 'wrj3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which structure acts as a cushion between the distal ulna and the carpal bones?',
    options: [
      'Annular ligament',
      'Triangular fibrocartilage complex (TFCC)',
      'Glenoid labrum',
      'Meniscus',
      'Articular disc of temporomandibular joint'
    ],
    correctAnswer: 1,
    explanation:
      'The TFCC is a fibrocartilaginous structure that extends from the ulnar side of the distal radius to the ulnar styloid, cushioning the ulnocarpal space and stabilizing the distal radioulnar joint.'
  },
  {
    id: 'wrj4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which ligaments provide medial and lateral stability to the wrist joint?',
    options: [
      'Anterior and posterior cruciate ligaments',
      'Ulnar (medial) collateral ligament and radial (lateral) collateral ligament',
      'Coracoacromial and coracoclavicular ligaments',
      'Glenohumeral ligaments',
      'Annular ligament only'
    ],
    correctAnswer: 1,
    explanation:
      'The ulnar collateral ligament (from ulnar styloid to triquetrum/pisiform) and radial collateral ligament (from radial styloid to scaphoid/trapezium) stabilize the wrist against varus/valgus stress.'
  },
  {
    id: 'wrj5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which carpal bone is MOST commonly fractured, typically from a fall on an outstretched hand (FOOSH)?',
    options: [
      'Lunate',
      'Scaphoid',
      'Triquetrum',
      'Pisiform',
      'Hamate'
    ],
    correctAnswer: 1,
    explanation:
      'The scaphoid is the most frequently fractured carpal bone (60–70% of carpal fractures), typically at the waist, and is prone to avascular necrosis due to retrograde blood supply.'
  },
  {
    id: 'wrj6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which carpal bone is MOST commonly dislocated at the wrist?',
    options: [
      'Scaphoid',
      'Lunate',
      'Trapezium',
      'Capitate',
      'Pisiform'
    ],
    correctAnswer: 1,
    explanation:
      'Lunate dislocation (typically volar/anterior) is the most common carpal dislocation, often following FOOSH injuries, and can compress the median nerve in the carpal tunnel.'
  },
  {
    id: 'wrj7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which classic wrist fracture pattern involves a dorsally displaced distal radius fracture from a FOOSH injury?',
    options: [
      'Smith fracture',
      'Colles fracture',
      'Barton fracture',
      'Monteggia fracture',
      'Galeazzi fracture'
    ],
    correctAnswer: 1,
    explanation:
      'Colles fracture is a distal radius fracture with dorsal displacement and angulation, creating a "dinner fork" deformity; it is the most common wrist fracture in adults, especially with osteoporosis.'
  },
  {
    id: 'wrj8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which wrist fracture pattern is the reverse of a Colles fracture, with volar (palmar) displacement of the distal radius?',
    options: [
      'Colles fracture',
      'Smith fracture (reverse Colles)',
      'Scaphoid fracture',
      'Barton fracture',
      'Monteggia fracture'
    ],
    correctAnswer: 1,
    explanation:
      'Smith fracture is a distal radius fracture with volar (palmar) displacement, typically from a fall on a flexed wrist; it is the reverse mechanism and appearance of a Colles fracture.'
  },
  {
    id: 'wrj9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Why is scaphoid fracture often missed on initial X-rays and prone to avascular necrosis (AVN)?',
    options: [
      'The scaphoid has excessive blood supply from all sides',
      'The scaphoid receives retrograde blood supply from distal to proximal; fractures through the waist can interrupt flow to the proximal pole, causing AVN and nonunion',
      'Scaphoid fractures never cause AVN',
      'The scaphoid is fully extraosseous',
      'Blood supply is irrelevant to healing'
    ],
    correctAnswer: 1,
    explanation:
      'The scaphoid\'s blood supply enters distally and flows retrograde; waist and proximal fractures can devascularize the proximal pole, leading to AVN and nonunion. Early X-rays may be negative, requiring clinical suspicion and follow-up imaging.'
  },
  {
    id: 'wrj10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical finding is characteristic of scaphoid fracture?',
    options: [
      'Wrist drop',
      'Tenderness in the anatomical snuffbox and pain with axial loading of the thumb',
      'Median nerve palsy',
      'Loss of all wrist movement',
      'Claw hand deformity'
    ],
    correctAnswer: 1,
    explanation:
      'Scaphoid fracture classically presents with anatomical snuffbox tenderness, pain with axial compression of the thumb and pain with radial deviation; clinical suspicion warrants immobilization even with negative initial X-rays.'
  }
];

export const hipJointQuestions: Question[] = [
  {
    id: 'hij1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which bones articulate to form the hip joint?',
    options: [
      'Femur and tibia',
      'Head of femur and acetabulum of hip bone',
      'Femur and sacrum',
      'Hip bone and sacrum',
      'Femur and patella'
    ],
    correctAnswer: 1,
    explanation:
      'The hip joint is formed by the articulation between the head of the femur and the acetabulum of the hip bone (os coxae).'
  },
  {
    id: 'hij2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which type of synovial joint is the hip joint?',
    options: [
      'Hinge joint',
      'Pivot joint',
      'Ball-and-socket joint',
      'Condyloid joint',
      'Saddle joint'
    ],
    correctAnswer: 2,
    explanation:
      'The hip is a ball-and-socket (spheroidal) synovial joint allowing multiaxial movements including flexion, extension, abduction, adduction, medial/lateral rotation and circumduction.'
  },
  {
    id: 'hij3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which structure deepens the acetabulum and increases hip joint stability?',
    options: [
      'Transverse acetabular ligament only',
      'Acetabular labrum (fibrocartilaginous rim)',
      'Iliofemoral ligament',
      'Ligamentum teres',
      'Joint capsule only'
    ],
    correctAnswer: 1,
    explanation:
      'The acetabular labrum is a fibrocartilaginous rim that surrounds and deepens the acetabulum, increasing coverage of the femoral head and enhancing joint stability.'
  },
  {
    id: 'hij4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which is the strongest ligament of the hip joint, preventing hyperextension?',
    options: [
      'Pubofemoral ligament',
      'Ischiofemoral ligament',
      'Iliofemoral ligament (Y-ligament of Bigelow)',
      'Ligamentum teres',
      'Transverse acetabular ligament'
    ],
    correctAnswer: 2,
    explanation:
      'The iliofemoral ligament (inverted Y-shaped ligament of Bigelow) is the strongest ligament in the body; it reinforces the anterior hip capsule and prevents hyperextension and excessive lateral rotation.'
  },
  {
    id: 'hij5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which ligament runs from the fovea capitis of the femoral head to the acetabulum and contains a small artery?',
    options: [
      'Iliofemoral ligament',
      'Pubofemoral ligament',
      'Ischiofemoral ligament',
      'Ligamentum teres (ligament of head of femur)',
      'Transverse acetabular ligament'
    ],
    correctAnswer: 3,
    explanation:
      'The ligamentum teres (round ligament) extends from the fovea on the femoral head to the acetabular notch and transmits a small artery (branch of obturator) that supplies the femoral head in children but is less significant in adults.'
  },
  {
    id: 'hij6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which direction accounts for the majority of hip dislocations in adults?',
    options: [
      'Anterior',
      'Posterior (85–90%)',
      'Inferior',
      'Superior',
      'Lateral'
    ],
    correctAnswer: 1,
    explanation:
      'Approximately 85–90% of traumatic hip dislocations are posterior, typically occurring from dashboard injuries (knee impact with hip flexed and adducted during motor vehicle accidents).'
  },
  {
    id: 'hij7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which nerve is MOST at risk for injury during posterior hip dislocation?',
    options: [
      'Femoral nerve',
      'Obturator nerve',
      'Sciatic nerve',
      'Superior gluteal nerve',
      'Saphenous nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The sciatic nerve runs posterior to the hip joint and is vulnerable to stretch or compression during posterior hip dislocation, causing sciatic nerve palsy (foot drop, loss of hamstring function).'
  },
  {
    id: 'hij8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which vascular complication is associated with intracapsular femoral neck fractures?',
    options: [
      'Brachial artery injury',
      'Avascular necrosis of the femoral head due to disruption of retinacular blood supply',
      'Deep vein thrombosis only',
      'Arterial thrombosis of the popliteal artery',
      'No vascular complications occur'
    ],
    correctAnswer: 1,
    explanation:
      'Intracapsular femoral neck fractures can disrupt the retinacular vessels (branches of medial femoral circumflex artery) that supply the femoral head, leading to avascular necrosis (AVN).'
  },
  {
    id: 'hij9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Why is the hip joint more stable but less mobile than the shoulder joint?',
    options: [
      'The hip has weaker ligaments than the shoulder',
      'The hip has deeper acetabular socket providing greater bony coverage, stronger ligaments and weight-bearing demands, trading mobility for stability',
      'The hip has no labrum',
      'The shoulder is non-weight-bearing',
      'They have identical stability and mobility'
    ],
    correctAnswer: 1,
    explanation:
      'The hip sacrifices some mobility for stability: the deep acetabulum covers >50% of the femoral head, strong ligaments (especially iliofemoral) limit motion, and weight-bearing demands prioritize stability over the shoulder\'s range.'
  },
  {
    id: 'hij10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which position of the hip maximizes joint stability and is the close-packed position?',
    options: [
      'Flexion, abduction and external rotation',
      'Extension with medial rotation and abduction (standing position)',
      'Flexion, adduction and internal rotation',
      'Neutral position',
      'Extreme flexion only'
    ],
    correctAnswer: 1,
    explanation:
      'The close-packed (maximally stable) position of the hip is extension with slight abduction and medial rotation, as in normal standing; the capsule and ligaments are maximally taut.'
  }
];

export const kneeJointQuestions: Question[] = [
  {
    id: 'kne1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which bones articulate to form the knee joint?',
    options: [
      'Femur and hip bone',
      'Femur, tibia and patella',
      'Tibia and fibula only',
      'Femur and fibula',
      'Patella and fibula'
    ],
    correctAnswer: 1,
    explanation:
      'The knee joint is formed by the distal femur, proximal tibia and patella; the fibula does not directly participate in the knee joint proper.'
  },
  {
    id: 'kne2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which type of joint is the tibiofemoral articulation?',
    options: [
      'Ball-and-socket joint',
      'Pivot joint',
      'Modified hinge joint allowing flexion/extension and some rotation',
      'Saddle joint',
      'Plane joint'
    ],
    correctAnswer: 2,
    explanation:
      'The tibiofemoral joint is a modified hinge (bicondylar) joint that primarily allows flexion and extension but also permits some axial rotation when the knee is flexed.'
  },
  {
    id: 'kne3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which fibrocartilaginous structures increase congruency between the femoral condyles and tibial plateau?',
    options: [
      'Acetabular labrum',
      'Medial and lateral menisci',
      'Glenoid labrum',
      'Intervertebral discs',
      'Triangular fibrocartilage complex'
    ],
    correctAnswer: 1,
    explanation:
      'The medial and lateral menisci are C-shaped fibrocartilage wedges that deepen the tibial articular surfaces, absorb shock and distribute load across the knee joint.'
  },
  {
    id: 'kne4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which meniscus is more commonly torn and why?',
    options: [
      'Lateral meniscus, because it is firmly attached',
      'Medial meniscus, because it is less mobile and firmly attached to the joint capsule and MCL',
      'Both tear equally',
      'Neither can tear',
      'Only in pediatric patients'
    ],
    correctAnswer: 1,
    explanation:
      'The medial meniscus is more commonly injured because it is less mobile and firmly attached to the medial collateral ligament and capsule, whereas the lateral meniscus is more mobile.'
  },
  {
    id: 'kne5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which two intracapsular ligaments provide anteroposterior stability to the knee?',
    options: [
      'Medial and lateral collateral ligaments',
      'Anterior cruciate ligament (ACL) and posterior cruciate ligament (PCL)',
      'Patellar ligament and quadriceps tendon',
      'Iliofemoral and ischiofemoral ligaments',
      'Coronary ligaments'
    ],
    correctAnswer: 1,
    explanation:
      'The ACL (prevents anterior tibial translation and hyperextension) and PCL (prevents posterior tibial translation) are intracapsular, extrasynovial ligaments that cross within the knee.'
  },
  {
    id: 'kne6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which ligaments provide medial and lateral stability to the knee?',
    options: [
      'ACL and PCL',
      'Medial (tibial) collateral ligament (MCL) and lateral (fibular) collateral ligament (LCL)',
      'Patellar and quadriceps ligaments',
      'Iliofemoral and pubofemoral ligaments',
      'Transverse and coronary ligaments only'
    ],
    correctAnswer: 1,
    explanation:
      'The MCL (medial/tibial collateral ligament) resists valgus stress and is attached to the medial meniscus; the LCL (lateral/fibular collateral ligament) resists varus stress and is separate from the lateral meniscus.'
  },
  {
    id: 'kne7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical test assesses the integrity of the anterior cruciate ligament (ACL)?',
    options: [
      'Posterior drawer test',
      'Anterior drawer test and Lachman test',
      'Valgus stress test',
      'Varus stress test',
      'McMurray test'
    ],
    correctAnswer: 1,
    explanation:
      'The anterior drawer test and Lachman test evaluate ACL integrity by attempting to translate the tibia anteriorly relative to the femur; excessive anterior movement indicates ACL tear.'
  },
  {
    id: 'kne8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which injury pattern is classically associated with the "unhappy triad" (terrible triad) of the knee?',
    options: [
      'ACL tear, MCL tear and lateral meniscus tear',
      'ACL tear, MCL tear and medial meniscus tear',
      'PCL tear, LCL tear and lateral meniscus tear',
      'Patellar fracture, quadriceps rupture and ACL tear',
      'Only isolated meniscus tear'
    ],
    correctAnswer: 1,
    explanation:
      'The unhappy triad (O\'Donoghue triad) classically involves combined ACL tear, MCL tear and medial meniscus tear, often from a lateral blow to the knee with the foot planted (valgus force plus rotation).'
  },
  {
    id: 'kne9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical test is used to detect meniscal tears?',
    options: [
      'Lachman test',
      'Anterior drawer test',
      'McMurray test (rotation and extension/flexion with palpation for click)',
      'Trendelenburg test',
      'Phalen test'
    ],
    correctAnswer: 2,
    explanation:
      'The McMurray test involves rotating the tibia while flexing and extending the knee; a palpable/audible click or pain suggests meniscal tear, especially when combined with joint line tenderness.'
  },
  {
    id: 'kne10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which structure acts as a sesamoid bone embedded in the quadriceps tendon and increases the mechanical advantage of the quadriceps muscle?',
    options: [
      'Fabella',
      'Patella',
      'Tibial tuberosity',
      'Femoral condyle',
      'Fibular head'
    ],
    correctAnswer: 1,
    explanation:
      'The patella is the largest sesamoid bone in the body, embedded in the quadriceps tendon; it articulates with the femur (patellofemoral joint) and increases the lever arm of the quadriceps for knee extension.'
  }
];

export const ankleJointQuestions: Question[] = [
  {
    id: 'ank1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which bones articulate to form the talocrural (ankle) joint?',
    options: [
      'Tibia and fibula with calcaneus',
      'Distal tibia and fibula (malleoli) with talus',
      'Talus and navicular only',
      'Fibula and calcaneus',
      'Tibia and metatarsals'
    ],
    correctAnswer: 1,
    explanation:
      'The talocrural (ankle) joint is formed by the distal tibia (tibial plafond and medial malleolus), distal fibula (lateral malleolus) and the trochlea of the talus.'
  },
  {
    id: 'ank2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which type of joint is the talocrural (ankle) joint and what movements does it permit?',
    options: [
      'Ball-and-socket joint allowing circumduction',
      'Pivot joint allowing rotation',
      'Hinge joint allowing primarily dorsiflexion and plantarflexion',
      'Saddle joint allowing opposition',
      'Plane joint allowing only gliding'
    ],
    correctAnswer: 2,
    explanation:
      'The ankle joint is a hinge (ginglymus) synovial joint permitting primarily dorsiflexion (bringing toes toward shin) and plantarflexion (pointing toes downward).'
  },
  {
    id: 'ank3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which ligament complex stabilizes the lateral aspect of the ankle joint?',
    options: [
      'Deltoid ligament',
      'Lateral (fibular) collateral ligament complex: anterior talofibular (ATFL), calcaneofibular (CFL) and posterior talofibular (PTFL) ligaments',
      'Spring ligament',
      'Plantar fascia',
      'Interosseous ligament'
    ],
    correctAnswer: 1,
    explanation:
      'The lateral ankle is stabilized by three ligaments: ATFL (most commonly injured), CFL and PTFL, extending from the lateral malleolus to the talus and calcaneus.'
  },
  {
    id: 'ank4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which strong, fan-shaped ligament stabilizes the medial aspect of the ankle?',
    options: [
      'Lateral collateral ligament',
      'Deltoid (medial collateral) ligament',
      'Anterior talofibular ligament',
      'Spring ligament',
      'Long plantar ligament'
    ],
    correctAnswer: 1,
    explanation:
      'The deltoid (medial collateral) ligament is a strong, triangular ligament complex extending from the medial malleolus to the talus, calcaneus and navicular, resisting eversion and providing medial stability.'
  },
  {
    id: 'ank5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which mechanism of injury is MOST common for lateral ankle sprains?',
    options: [
      'Eversion and dorsiflexion',
      'Inversion and plantarflexion',
      'Pure dorsiflexion',
      'Pure plantarflexion',
      'Axial compression'
    ],
    correctAnswer: 1,
    explanation:
      'Lateral ankle sprains (>85% of all ankle sprains) typically occur from inversion and plantarflexion, commonly injuring the ATFL first, then CFL and PTFL with increasing severity.'
  },
  {
    id: 'ank6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which ligament of the lateral ankle is MOST commonly injured in an inversion sprain?',
    options: [
      'Deltoid ligament',
      'Calcaneofibular ligament',
      'Anterior talofibular ligament (ATFL)',
      'Posterior talofibular ligament',
      'Spring ligament'
    ],
    correctAnswer: 2,
    explanation:
      'The ATFL is the weakest and most commonly injured lateral ankle ligament, typically torn first in inversion injuries with the ankle in plantarflexion.'
  },
  {
    id: 'ank7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical test assesses the integrity of the anterior talofibular ligament (ATFL)?',
    options: [
      'Lachman test',
      'Anterior drawer test of the ankle (anterior translation of talus)',
      'McMurray test',
      'Trendelenburg test',
      'Thompson test'
    ],
    correctAnswer: 1,
    explanation:
      'The anterior drawer test for the ankle evaluates ATFL integrity by pulling the foot anteriorly relative to the tibia; excessive anterior talar translation indicates ATFL tear.'
  },
  {
    id: 'ank8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which injury pattern involves fractures of both malleoli with disruption of the distal tibiofibular syndesmosis?',
    options: [
      'Lateral ankle sprain',
      'Bimalleolar or trimalleolar ankle fracture',
      'Isolated fibular fracture',
      'Calcaneal fracture',
      'Talar fracture'
    ],
    correctAnswer: 1,
    explanation:
      'Bimalleolar fractures involve both medial and lateral malleoli; trimalleolar fractures add a posterior tibial (posterior malleolar) fracture, often with syndesmotic disruption requiring surgical fixation.'
  },
  {
    id: 'ank9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which position of the ankle provides maximum joint stability (close-packed position)?',
    options: [
      'Plantarflexion',
      'Neutral position',
      'Maximum dorsiflexion',
      'Inversion',
      'Eversion'
    ],
    correctAnswer: 2,
    explanation:
      'The ankle is most stable in maximum dorsiflexion (close-packed position), when the wider anterior part of the talar trochlea is wedged into the ankle mortise, tightening ligaments; plantarflexion is the loose-packed position with increased instability.'
  },
  {
    id: 'ank10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which ankle injury involves rupture of the Achilles tendon, and what clinical test detects it?',
    options: [
      'Lateral ankle sprain; anterior drawer test',
      'Achilles tendon rupture; Thompson (Simmonds) test showing absent plantarflexion when calf is squeezed',
      'Medial ankle sprain; eversion stress test',
      'Syndesmotic injury; squeeze test',
      'Talar fracture; McMurray test'
    ],
    correctAnswer: 1,
    explanation:
      'Achilles tendon rupture (often during sudden push-off or forced dorsiflexion) is confirmed by the Thompson test: squeezing the calf normally causes plantarflexion; absence indicates complete rupture.'
  }
];
