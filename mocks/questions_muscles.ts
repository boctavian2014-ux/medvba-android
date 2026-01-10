import type { Question } from './questions';

export const shoulderMusclesQuestions: Question[] = [
  {
    id: 'sh1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which statement BEST describes the deltoid muscle?',
    options: [
      'A small, deep rotator cuff muscle',
      'A large, multipennate muscle forming the rounded contour of the shoulder and acting as the principal abductor of the arm beyond 15°',
      'A thin muscle that only stabilizes the scapula',
      'A forearm flexor crossing the elbow joint only',
      'A chest muscle attaching to the ribs and sternum only'
    ],
    correctAnswer: 1,
    explanation:
      'The deltoid is a thick, multipennate muscle covering the shoulder joint, giving the shoulder its rounded contour and serving as the main abductor of the arm beyond the first 15° initiated by supraspinatus.[web:430][web:556][web:562]'
  },
  {
    id: 'sh2',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which combination correctly summarizes the origin, insertion and innervation of the deltoid muscle?',
    options: [
      'Origin: medial epicondyle of humerus; insertion: olecranon; innervation: radial nerve',
      'Origin: clavicle, acromion and spine of scapula; insertion: deltoid tuberosity of humerus; innervation: axillary nerve (C5–C6)',
      'Origin: coracoid process only; insertion: radial tuberosity; innervation: musculocutaneous nerve',
      'Origin: sternum and costal cartilages; insertion: greater tubercle; innervation: medial pectoral nerve',
      'Origin: supraspinous fossa; insertion: lesser tubercle; innervation: suprascapular nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The deltoid arises from the lateral third of the clavicle, acromion and spine of scapula, inserts on the deltoid tuberosity of the humerus and is innervated by the axillary nerve (C5–C6).[web:430][web:556][web:566]'
  },
  {
    id: 'sh3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which pattern BEST summarizes the main actions of the three parts (heads) of the deltoid muscle?',
    options: [
      'All parts perform only internal rotation of the arm',
      'Anterior (clavicular) part: flexion and internal rotation; middle (acromial) part: abduction; posterior (spinal) part: extension and external rotation',
      'Anterior part: extension; middle part: adduction; posterior part: flexion and internal rotation',
      'Anterior part: elbow flexion; middle part: forearm pronation; posterior part: elbow extension',
      'All three parts act only as scapular stabilizers'
    ],
    correctAnswer: 1,
    explanation:
      'The clavicular fibers flex and internally rotate the arm, the acromial fibers abduct the arm (especially 15–90°) and the spinal fibers extend and externally rotate the arm.[web:430][web:556][web:562]'
  },
  {
    id: 'sh4',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which muscles constitute the rotator cuff (SITS) of the shoulder?',
    options: [
      'Supraspinatus, infraspinatus, teres minor and subscapularis',
      'Deltoid, pectoralis major, latissimus dorsi and teres major',
      'Supraspinatus, biceps brachii, coracobrachialis and triceps brachii',
      'Trapezius, rhomboids, levator scapulae and serratus anterior',
      'Subclavius, pectoralis minor, teres major and infraspinatus'
    ],
    correctAnswer: 0,
    explanation:
      'The rotator cuff is formed by supraspinatus, infraspinatus, teres minor and subscapularis (SITS), which stabilize the glenohumeral joint and move the humeral head.[web:430][web:545][web:551]'
  },
  {
    id: 'sh5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which primary actions and innervations are correctly matched for the supraspinatus and infraspinatus muscles?',
    options: [
      'Supraspinatus: initiates arm abduction (first ~15°); infraspinatus: external rotation of arm; both innervated by suprascapular nerve',
      'Supraspinatus: internal rotation; infraspinatus: elbow flexion; both innervated by axillary nerve',
      'Supraspinatus: arm adduction; infraspinatus: scapular elevation; both innervated by dorsal scapular nerve',
      'Supraspinatus: elbow extension; infraspinatus: wrist extension; both innervated by radial nerve',
      'Supraspinatus: forearm pronation; infraspinatus: forearm supination; innervation by musculocutaneous nerve'
    ],
    correctAnswer: 0,
    explanation:
      'Supraspinatus initiates abduction of the arm (first ~15°) and infraspinatus is a major external rotator; both are innervated by the suprascapular nerve.[web:430][web:545][web:563]'
  },
  {
    id: 'sh6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which muscle–test pairing is MOST appropriate for evaluating supraspinatus integrity in the clinical setting?',
    options: [
      'Supraspinatus – Jobe (empty can) test and drop arm test',
      'Supraspinatus – lift-off test from the lumbar spine',
      'Supraspinatus – belly-press (Napoleon) test',
      'Supraspinatus – resisted external rotation with arm at side',
      'Supraspinatus – Neer and Hawkins impingement tests only'
    ],
    correctAnswer: 0,
    explanation:
      'The Jobe (empty can) test and the drop arm test are classic maneuvers for assessing supraspinatus tendon integrity and function.[web:560][web:563][web:567]'
  },
  {
    id: 'sh7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which muscles and tests are MOST specific for assessing subscapularis and infraspinatus/teres minor function, respectively?',
    options: [
      'Subscapularis – Jobe test; infraspinatus/teres minor – lift-off test',
      'Subscapularis – belly-press and lift-off tests; infraspinatus/teres minor – resisted external rotation and external rotation lag sign',
      'Subscapularis – Neer test; infraspinatus/teres minor – Hawkins test',
      'Subscapularis – drop arm test; infraspinatus/teres minor – Speed test',
      'Subscapularis – apprehension test; infraspinatus/teres minor – relocation test'
    ],
    correctAnswer: 1,
    explanation:
      'Subscapularis (internal rotation) is evaluated by lift-off and belly-press/bear-hug tests, while infraspinatus and teres minor (external rotation) are assessed with resisted external rotation and external rotation lag signs.[web:563][web:564][web:565]'
  }
];

export const armMusclesQuestions: Question[] = [
  {
    id: 'arm1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which muscles are located in the anterior (flexor) compartment of the arm?',
    options: [
      'Triceps brachii and anconeus',
      'Biceps brachii, brachialis and coracobrachialis',
      'Brachioradialis and pronator teres',
      'Deltoid and supraspinatus',
      'Pectoralis major and minor'
    ],
    correctAnswer: 1,
    explanation:
      'The anterior compartment of the arm contains three main muscles: biceps brachii, brachialis and coracobrachialis.[web:546][web:552][web:568]'
  },
  {
    id: 'arm2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve is the principal motor nerve of the anterior compartment muscles of the arm?',
    options: [
      'Radial nerve',
      'Median nerve',
      'Ulnar nerve',
      'Musculocutaneous nerve',
      'Axillary nerve'
    ],
    correctAnswer: 3,
    explanation:
      'Biceps brachii, brachialis and coracobrachialis are primarily innervated by the musculocutaneous nerve (C5–C7).[web:546][web:549][web:577]'
  },
  {
    id: 'arm3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which combination correctly matches the main actions of biceps brachii and brachialis?',
    options: [
      'Biceps brachii: elbow extension; brachialis: elbow flexion',
      'Biceps brachii: forearm supination and elbow flexion; brachialis: primary flexor of the forearm at the elbow regardless of forearm position',
      'Biceps brachii: wrist flexion; brachialis: wrist extension',
      'Biceps brachii: shoulder abduction only; brachialis: shoulder adduction',
      'Biceps brachii: pronation; brachialis: supination'
    ],
    correctAnswer: 1,
    explanation:
      'Biceps brachii is a powerful supinator and flexor of the forearm, while brachialis is the main flexor of the forearm at the elbow in all forearm positions.[web:552][web:568][web:571]'
  },
  {
    id: 'arm4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which statement BEST describes the function of coracobrachialis?',
    options: [
      'Extends the forearm at the elbow joint',
      'Powerful supinator of the forearm',
      'Adducts and flexes the arm at the shoulder joint',
      'Abducts the arm from 15° to 90°',
      'Pronates the forearm'
    ],
    correctAnswer: 2,
    explanation:
      'Coracobrachialis originates from the coracoid process and inserts on the medial humerus, acting mainly to adduct and weakly flex the arm at the shoulder.[web:552][web:568][web:571]'
  },
  {
    id: 'arm5',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which muscle occupies the posterior (extensor) compartment of the arm as its major component?',
    options: [
      'Biceps brachii',
      'Triceps brachii',
      'Brachialis',
      'Coracobrachialis',
      'Brachioradialis'
    ],
    correctAnswer: 1,
    explanation:
      'The posterior compartment of the arm is dominated by the triceps brachii muscle, the main extensor of the forearm.[web:552][web:569][web:573]'
  },
  {
    id: 'arm6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve innervates triceps brachii and what is its primary action?',
    options: [
      'Musculocutaneous nerve; flexion of forearm',
      'Median nerve; pronation of forearm',
      'Ulnar nerve; wrist flexion',
      'Radial nerve; extension of forearm at the elbow',
      'Axillary nerve; abduction of the arm'
    ],
    correctAnswer: 3,
    explanation:
      'Triceps brachii is innervated by the radial nerve (C6–C8) and is the prime extensor of the forearm at the elbow joint.[web:552][web:572][web:573]'
  },
  {
    id: 'arm7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which muscle–clinical correlation is MOST accurate for the arm compartments?',
    options: [
      'Radial nerve injury in the spiral groove leads primarily to loss of elbow flexion by biceps',
      'Musculocutaneous nerve lesion causes marked weakness of elbow extension',
      'Radial nerve lesion in the arm weakens or abolishes elbow extension due to triceps involvement and may cause wrist drop',
      'Axillary nerve lesion primarily affects forearm pronation',
      'Median nerve lesion at the arm causes isolated loss of coracobrachialis function'
    ],
    correctAnswer: 2,
    explanation:
      'Radial nerve injury in the arm can paralyze or weaken triceps (loss of elbow extension) and wrist/finger extensors, leading to wrist drop.[web:552][web:572][web:574]'
  }
];

export const forearmMusclesQuestions: Question[] = [
  {
    id: 'fm1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'How are the muscles of the forearm broadly organized into compartments?',
    options: [
      'Anterior (flexor) and posterior (extensor) compartments',
      'Medial and lateral compartments only',
      'Superficial, middle and deep compartments without functional grouping',
      'Intrinsic and extrinsic compartments of the hand',
      'Proximal and distal compartments only'
    ],
    correctAnswer: 0,
    explanation:
      'Forearm muscles are grouped into anterior (primarily flexor–pronator) and posterior (primarily extensor–supinator) compartments separated by fascial septa and the interosseous membrane.[web:555][web:580][web:582]'
  },
  {
    id: 'fm2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which muscles belong to the superficial group of the anterior (flexor–pronator) compartment of the forearm?',
    options: [
      'Pronator teres, flexor carpi radialis, palmaris longus and flexor carpi ulnaris',
      'Flexor digitorum profundus, flexor pollicis longus and pronator quadratus',
      'Brachioradialis, extensor carpi radialis longus and brevis',
      'Extensor digitorum, extensor digiti minimi and extensor carpi ulnaris',
      'Supinator, abductor pollicis longus and extensor pollicis longus'
    ],
    correctAnswer: 0,
    explanation:
      'The superficial anterior forearm flexors arise mainly from a common flexor origin on the medial epicondyle: pronator teres, flexor carpi radialis, palmaris longus and flexor carpi ulnaris.[web:580][web:581][web:582]'
  },
  {
    id: 'fm3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscle is considered the only muscle in the intermediate layer of the anterior forearm and what is its main action?',
    options: [
      'Flexor carpi radialis; wrist extension',
      'Flexor digitorum superficialis; flexion of proximal interphalangeal joints of digits 2–5',
      'Flexor digitorum profundus; flexion of distal interphalangeal joints',
      'Pronator quadratus; supination of the forearm',
      'Palmaris longus; extension of fingers'
    ],
    correctAnswer: 1,
    explanation:
      'Flexor digitorum superficialis forms an intermediate layer; it flexes the proximal interphalangeal joints (and assists flexion at MCP and wrist) of digits 2–5.[web:580][web:582][web:589]'
  },
  {
    id: 'fm4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which deep anterior forearm muscles flex the distal phalanges and thumb, and pronate the forearm?',
    options: [
      'Flexor digitorum profundus, flexor pollicis longus and pronator quadratus',
      'Flexor carpi radialis, palmaris longus and pronator teres',
      'Extensor digitorum, extensor indicis and supinator',
      'Brachioradialis, extensor carpi radialis longus and brevis',
      'Abductor pollicis longus, extensor pollicis brevis and longus'
    ],
    correctAnswer: 0,
    explanation:
      'The deep flexor–pronator group consists of flexor digitorum profundus (flexes distal phalanges), flexor pollicis longus (flexes thumb) and pronator quadratus (pronates forearm).[web:580][web:583]'
  },
  {
    id: 'fm5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which statement about innervation of anterior forearm muscles is MOST accurate?',
    options: [
      'All anterior forearm muscles are innervated exclusively by the median nerve',
      'Most anterior forearm muscles are innervated by the median nerve, except flexor carpi ulnaris and the medial (ulnar) half of flexor digitorum profundus, which are innervated by the ulnar nerve',
      'All anterior muscles are supplied by the ulnar nerve',
      'Deep anterior muscles are supplied only by the radial nerve',
      'Flexor carpi ulnaris is innervated by the radial nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The median nerve supplies the majority of anterior forearm muscles; flexor carpi ulnaris and the medial half of flexor digitorum profundus receive ulnar nerve innervation.[web:581][web:583][web:592]'
  },
  {
    id: 'fm6',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which muscles form the superficial extensor group in the posterior compartment of the forearm?',
    options: [
      'Extensor digitorum, extensor digiti minimi, extensor carpi ulnaris and anconeus',
      'Extensor indicis, abductor pollicis longus and extensor pollicis longus',
      'Pronator teres, pronator quadratus and supinator',
      'Flexor carpi radialis, palmaris longus and flexor carpi ulnaris',
      'Lumbricals and interossei'
    ],
    correctAnswer: 0,
    explanation:
      'The superficial posterior group includes extensor digitorum, extensor digiti minimi, extensor carpi ulnaris and anconeus, sharing a common extensor origin on the lateral epicondyle.[web:555][web:579][web:585]'
  },
  {
    id: 'fm7',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscles are considered "radial" muscles of the forearm and what is their primary action at the wrist?',
    options: [
      'Brachioradialis, extensor carpi radialis longus and brevis; wrist extension and radial deviation (abduction)',
      'Flexor carpi radialis and flexor carpi ulnaris; wrist flexion and ulnar deviation',
      'Extensor carpi ulnaris and anconeus; wrist flexion',
      'Pronator teres and pronator quadratus; wrist pronation',
      'Palmaris longus and flexor digitorum superficialis; wrist flexion only'
    ],
    correctAnswer: 0,
    explanation:
      'The radial group (brachioradialis, extensor carpi radialis longus and brevis) contributes to wrist extension and radial deviation (abduction); brachioradialis also flexes the elbow when the forearm is mid-pronated.[web:584][web:587][web:590]'
  },
  {
    id: 'fm8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which nerve (or branch) innervates most of the extensor muscles in the posterior compartment of the forearm?',
    options: [
      'Musculocutaneous nerve',
      'Median nerve',
      'Anterior interosseous nerve',
      'Posterior interosseous nerve (deep branch of radial nerve)',
      'Ulnar nerve'
    ],
    correctAnswer: 3,
    explanation:
      'Most posterior compartment extensor muscles are supplied by the posterior interosseous nerve, the continuation of the deep branch of the radial nerve after it pierces the supinator.[web:555][web:584][web:585]'
  }
];

export const anteriorThighMusclesQuestions: Question[] = [
  {
    id: 'at1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which muscle group forms the bulk of the anterior compartment of the thigh and is the primary extensor of the knee?',
    options: [
      'Hamstrings',
      'Adductor group',
      'Quadriceps femoris',
      'Gluteal muscles',
      'Calf muscles'
    ],
    correctAnswer: 2,
    explanation:
      'The quadriceps femoris is the large, four-headed muscle group on the anterior thigh that serves as the primary knee extensor.[web:642][web:644][web:648]'
  },
  {
    id: 'at2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which four muscles comprise the quadriceps femoris?',
    options: [
      'Rectus femoris, vastus lateralis, vastus medialis and vastus intermedius',
      'Biceps femoris, semitendinosus, semimembranosus and sartorius',
      'Gluteus maximus, medius, minimus and piriformis',
      'Adductor longus, brevis, magnus and gracilis',
      'Gastrocnemius, soleus, plantaris and tibialis posterior'
    ],
    correctAnswer: 0,
    explanation:
      'Quadriceps femoris consists of rectus femoris (the only biarticular head) and three vastus muscles: lateralis, medialis and intermedius.[web:642][web:645][web:649]'
  },
  {
    id: 'at3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve innervates all components of the quadriceps femoris?',
    options: [
      'Sciatic nerve',
      'Obturator nerve',
      'Femoral nerve',
      'Superior gluteal nerve',
      'Common peroneal nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The femoral nerve (L2–L4) innervates all four heads of the quadriceps femoris.[web:642][web:646][web:650]'
  },
  {
    id: 'at4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which component of the quadriceps is the only one that crosses both the hip and knee joints?',
    options: [
      'Vastus lateralis',
      'Vastus medialis',
      'Vastus intermedius',
      'Rectus femoris',
      'Sartorius'
    ],
    correctAnswer: 3,
    explanation:
      'Rectus femoris originates from the anterior inferior iliac spine and crosses the hip joint, making it a hip flexor as well as a knee extensor; the three vastus muscles only cross the knee.[web:642][web:647][web:651]'
  },
  {
    id: 'at5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscle is the longest in the human body and crosses both hip and knee as a weak flexor of both joints?',
    options: [
      'Rectus femoris',
      'Sartorius',
      'Gracilis',
      'Semitendinosus',
      'Biceps femoris'
    ],
    correctAnswer: 1,
    explanation:
      'Sartorius is the longest muscle in the body; it crosses the hip and knee obliquely, acting as a weak flexor, abductor and lateral rotator of the hip and flexor of the knee.[web:643][web:648][web:652]'
  },
  {
    id: 'at6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which muscle group is the primary hip flexor, formed by the fusion of psoas major and iliacus?',
    options: [
      'Quadriceps femoris',
      'Iliopsoas',
      'Hamstrings',
      'Adductors',
      'Gluteals'
    ],
    correctAnswer: 1,
    explanation:
      'Iliopsoas (psoas major from lumbar vertebrae and iliacus from iliac fossa) converges to insert on the lesser trochanter of the femur and is the strongest hip flexor, innervated by femoral nerve and direct branches from lumbar plexus.[web:643][web:649][web:653]'
  },
  {
    id: 'at7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical finding is characteristic of femoral nerve injury affecting the quadriceps?',
    options: [
      'Foot drop and loss of ankle dorsiflexion',
      'Loss of knee extension, difficulty climbing stairs, unstable knee and absent patellar reflex',
      'Loss of hip adduction only',
      'Trendelenburg sign',
      'Claw toe deformity'
    ],
    correctAnswer: 1,
    explanation:
      'Femoral nerve injury causes quadriceps paralysis, resulting in inability to extend the knee, difficulty with stair climbing and rising from a chair, knee instability and loss of the patellar (knee-jerk) reflex.[web:642][web:650][web:654]'
  }
];

export const hamstringMusclesQuestions: Question[] = [
  {
    id: 'hm1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which muscles form the hamstring group in the posterior compartment of the thigh?',
    options: [
      'Rectus femoris, vastus lateralis and vastus medialis',
      'Biceps femoris, semitendinosus and semimembranosus',
      'Adductor longus, brevis and magnus',
      'Gluteus maximus, medius and minimus',
      'Sartorius, gracilis and pectineus'
    ],
    correctAnswer: 1,
    explanation:
      'The hamstrings consist of three muscles: biceps femoris (long and short heads), semitendinosus and semimembranosus, located in the posterior thigh.[web:655][web:657][web:661]'
  },
  {
    id: 'hm2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve innervates the hamstring muscles?',
    options: [
      'Femoral nerve',
      'Obturator nerve',
      'Sciatic nerve (tibial division primarily)',
      'Superior gluteal nerve',
      'Common peroneal nerve exclusively'
    ],
    correctAnswer: 2,
    explanation:
      'The hamstrings are innervated by the tibial division of the sciatic nerve, except for the short head of biceps femoris, which receives common peroneal (fibular) innervation.[web:655][web:658][web:662]'
  },
  {
    id: 'hm3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which primary actions do the hamstring muscles perform?',
    options: [
      'Hip flexion and knee extension',
      'Hip extension and knee flexion',
      'Hip abduction and knee adduction',
      'Ankle plantarflexion only',
      'Hip adduction and knee extension'
    ],
    correctAnswer: 1,
    explanation:
      'As a group, the hamstrings extend the hip and flex the knee; they are biarticular muscles crossing both joints.[web:655][web:659][web:663]'
  },
  {
    id: 'hm4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which hamstring muscle has TWO heads and inserts laterally on the head of the fibula?',
    options: [
      'Semitendinosus',
      'Semimembranosus',
      'Biceps femoris',
      'Rectus femoris',
      'Sartorius'
    ],
    correctAnswer: 2,
    explanation:
      'Biceps femoris has a long head (from ischial tuberosity) and a short head (from linea aspera); it inserts on the fibular head and is the lateral hamstring.[web:655][web:660][web:664]'
  },
  {
    id: 'hm5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which two hamstring muscles insert medially on the tibia and are part of the pes anserinus?',
    options: [
      'Biceps femoris long and short heads',
      'Semitendinosus and semimembranosus',
      'Rectus femoris and vastus medialis',
      'Adductor longus and gracilis',
      'Gastrocnemius and soleus'
    ],
    correctAnswer: 1,
    explanation:
      'Semitendinosus and semimembranosus are the medial hamstrings; semitendinosus inserts as part of the pes anserinus on the medial tibia, while semimembranosus inserts posteriorly on the medial tibial condyle.[web:656][web:660][web:665]'
  },
  {
    id: 'hm6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which common clinical injury pattern involves the hamstrings, and which muscle is most commonly affected?',
    options: [
      'Hamstring tears are rare; biceps femoris short head most affected',
      'Hamstring strains are common, often affecting the biceps femoris long head at the musculotendinous junction during sprinting or eccentric loading',
      'Hamstrings never tear, only tendons rupture',
      'Only semimembranosus is injured in athletes',
      'Hamstring injuries only occur in elderly patients'
    ],
    correctAnswer: 1,
    explanation:
      'Hamstring strains are common sports injuries, often involving the biceps femoris long head during rapid acceleration or eccentric contraction; risk factors include strength imbalance with quadriceps.[web:656][web:661][web:666]'
  },
  {
    id: 'hm7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'What is the pes anserinus and which three tendons form it?',
    options: [
      'Lateral knee structure formed by iliotibial band only',
      'Medial knee structure where sartorius, gracilis and semitendinosus tendons insert on the proximal medial tibia',
      'Posterior knee structure formed by gastrocnemius heads',
      'Anterior patellar tendon insertion',
      'Achilles tendon attachment'
    ],
    correctAnswer: 1,
    explanation:
      'The pes anserinus ("goose foot") is the common insertion of sartorius, gracilis and semitendinosus tendons on the anteromedial proximal tibia; bursitis here is common.[web:656][web:662][web:667]'
  }
];

export const medialThighMusclesQuestions: Question[] = [
  {
    id: 'mt1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which muscle group occupies the medial (adductor) compartment of the thigh?',
    options: [
      'Quadriceps femoris',
      'Hamstrings',
      'Adductor muscles',
      'Gluteal muscles',
      'Anterior tibial muscles'
    ],
    correctAnswer: 2,
    explanation:
      'The medial compartment of the thigh contains the adductor muscle group, which adducts the hip and contributes to flexion and medial rotation.[web:668][web:670][web:674]'
  },
  {
    id: 'mt2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve primarily innervates the medial thigh adductor muscles?',
    options: [
      'Femoral nerve',
      'Sciatic nerve',
      'Obturator nerve',
      'Superior gluteal nerve',
      'Common peroneal nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The obturator nerve (L2–L4) innervates most of the adductor compartment muscles; the adductor part of adductor magnus receives additional tibial nerve innervation.[web:668][web:671][web:675]'
  },
  {
    id: 'mt3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscles are part of the adductor group of the thigh?',
    options: [
      'Adductor longus, adductor brevis, adductor magnus, gracilis and pectineus',
      'Rectus femoris, vastus lateralis, vastus medialis and vastus intermedius',
      'Biceps femoris, semitendinosus and semimembranosus',
      'Gluteus maximus, medius and minimus',
      'Sartorius, tensor fasciae latae and iliopsoas'
    ],
    correctAnswer: 0,
    explanation:
      'The main adductors are adductor longus, brevis and magnus, along with gracilis and pectineus (which also receives femoral nerve supply).[web:668][web:672][web:676]'
  },
  {
    id: 'mt4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which is the largest and most powerful adductor muscle, often considered to have both adductor and hamstring parts?',
    options: [
      'Adductor longus',
      'Adductor brevis',
      'Adductor magnus',
      'Gracilis',
      'Pectineus'
    ],
    correctAnswer: 2,
    explanation:
      'Adductor magnus is the largest adductor; its adductor part is innervated by the obturator nerve, while its hamstring (ischiocondylar) part is innervated by the tibial nerve and assists in hip extension.[web:669][web:673][web:677]'
  },
  {
    id: 'mt5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which slender muscle of the medial thigh is the only adductor that crosses the knee joint and contributes to the pes anserinus?',
    options: [
      'Adductor longus',
      'Adductor brevis',
      'Adductor magnus',
      'Gracilis',
      'Pectineus'
    ],
    correctAnswer: 3,
    explanation:
      'Gracilis is a long, thin muscle that adducts the hip and flexes the knee; it inserts as part of the pes anserinus on the medial tibia.[web:669][web:674][web:678]'
  },
  {
    id: 'mt6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which opening in adductor magnus allows passage of the femoral vessels from the adductor canal to the popliteal fossa?',
    options: [
      'Obturator foramen',
      'Greater sciatic foramen',
      'Adductor hiatus',
      'Femoral ring',
      'Popliteal hiatus'
    ],
    correctAnswer: 2,
    explanation:
      'The adductor hiatus is a gap between the adductor and hamstring parts of adductor magnus through which the femoral artery and vein pass to become the popliteal vessels.[web:669][web:675][web:679]'
  },
  {
    id: 'mt7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical condition involves damage to the obturator nerve, and what is the main functional deficit?',
    options: [
      'Femoral nerve palsy with loss of knee extension',
      'Obturator nerve injury causing weakness of hip adduction and difficulty crossing legs',
      'Sciatic nerve injury with foot drop',
      'Superior gluteal nerve palsy with Trendelenburg sign',
      'Common peroneal nerve palsy with loss of ankle dorsiflexion'
    ],
    correctAnswer: 1,
    explanation:
      'Obturator nerve injury (e.g., during pelvic surgery or trauma) impairs hip adduction, making it difficult to cross the legs or bring the thighs together.[web:668][web:676][web:680]'
  }
];

export const legMusclesQuestions: Question[] = [
  {
    id: 'lg1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which three compartments organize the muscles of the leg?',
    options: [
      'Anterior, medial and posterior',
      'Anterior, lateral and posterior',
      'Medial, lateral and central',
      'Superficial, intermediate and deep',
      'Flexor, extensor and rotator'
    ],
    correctAnswer: 1,
    explanation:
      'The leg muscles are organized into anterior (extensor), lateral (fibular/peroneal) and posterior (flexor/plantarflexor) compartments.[web:681][web:683][web:687]'
  },
  {
    id: 'lg2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve innervates the anterior compartment muscles of the leg?',
    options: [
      'Tibial nerve',
      'Deep peroneal (fibular) nerve',
      'Superficial peroneal (fibular) nerve',
      'Femoral nerve',
      'Obturator nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The deep peroneal (deep fibular) nerve innervates all muscles of the anterior compartment of the leg.[web:681][web:684][web:688]'
  },
  {
    id: 'lg3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscles form the anterior compartment of the leg?',
    options: [
      'Gastrocnemius and soleus',
      'Tibialis anterior, extensor hallucis longus, extensor digitorum longus and fibularis tertius',
      'Fibularis longus and fibularis brevis',
      'Flexor hallucis longus, flexor digitorum longus and tibialis posterior',
      'Adductor longus and gracilis'
    ],
    correctAnswer: 1,
    explanation:
      'The anterior compartment contains tibialis anterior, extensor hallucis longus, extensor digitorum longus and fibularis (peroneus) tertius, responsible for dorsiflexion and toe extension.[web:681][web:685][web:689]'
  },
  {
    id: 'lg4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve innervates the lateral compartment muscles of the leg, and what is their primary action?',
    options: [
      'Deep peroneal nerve; dorsiflexion',
      'Tibial nerve; plantarflexion and inversion',
      'Superficial peroneal (fibular) nerve; eversion of the foot',
      'Sural nerve; toe flexion',
      'Femoral nerve; knee extension'
    ],
    correctAnswer: 2,
    explanation:
      'The lateral compartment muscles (fibularis longus and brevis) are innervated by the superficial peroneal nerve and primarily evert the foot and assist plantarflexion.[web:682][web:686][web:690]'
  },
  {
    id: 'lg5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscles form the superficial group of the posterior compartment of the leg?',
    options: [
      'Tibialis posterior, flexor digitorum longus and flexor hallucis longus',
      'Gastrocnemius, soleus and plantaris',
      'Fibularis longus and brevis',
      'Tibialis anterior and extensor hallucis longus',
      'Popliteus and tibialis anterior'
    ],
    correctAnswer: 1,
    explanation:
      'The superficial posterior group consists of gastrocnemius (two heads), soleus and plantaris; together they form the triceps surae and plantarflex the ankle via the Achilles tendon.[web:682][web:687][web:691]'
  },
  {
    id: 'lg6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical deficit pattern results from injury to the deep peroneal (fibular) nerve?',
    options: [
      'Loss of plantarflexion and inability to stand on tiptoes',
      'Foot drop with loss of dorsiflexion and toe extension',
      'Loss of foot eversion only',
      'Trendelenburg gait',
      'Loss of knee extension'
    ],
    correctAnswer: 1,
    explanation:
      'Deep peroneal nerve injury causes foot drop (inability to dorsiflex the foot) and loss of toe extension, resulting in a steppage gait and sensory loss in the first web space.[web:681][web:688][web:692]'
  },
  {
    id: 'lg7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which muscles form the deep group of the posterior compartment and what nerve innervates them?',
    options: [
      'Gastrocnemius and soleus; superficial peroneal nerve',
      'Tibialis posterior, flexor digitorum longus and flexor hallucis longus; tibial nerve',
      'Fibularis longus and brevis; deep peroneal nerve',
      'Extensor hallucis longus and extensor digitorum longus; tibial nerve',
      'Plantaris and popliteus; femoral nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The deep posterior compartment contains tibialis posterior, flexor digitorum longus, flexor hallucis longus and popliteus, all innervated by the tibial nerve; they plantarflex and invert the foot and flex the toes.[web:682][web:687][web:693]'
  }
];

export const halluxMusclesQuestions: Question[] = [
  {
    id: 'hx1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which extrinsic muscle of the leg is the primary extensor of the great toe?',
    options: [
      'Extensor digitorum longus',
      'Extensor hallucis longus',
      'Flexor hallucis longus',
      'Tibialis anterior',
      'Fibularis longus'
    ],
    correctAnswer: 1,
    explanation:
      'Extensor hallucis longus, located in the anterior compartment of the leg, extends the great toe (hallux) and assists with ankle dorsiflexion and foot inversion.[web:694][web:696][web:700]'
  },
  {
    id: 'hx2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve innervates extensor hallucis longus?',
    options: [
      'Tibial nerve',
      'Superficial peroneal nerve',
      'Deep peroneal (fibular) nerve',
      'Sural nerve',
      'Medial plantar nerve'
    ],
    correctAnswer: 2,
    explanation:
      'Extensor hallucis longus is innervated by the deep peroneal nerve, like all anterior compartment leg muscles.[web:694][web:697][web:701]'
  },
  {
    id: 'hx3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which extrinsic muscle of the leg is the primary flexor of the great toe?',
    options: [
      'Flexor digitorum longus',
      'Flexor hallucis longus',
      'Extensor hallucis longus',
      'Tibialis posterior',
      'Fibularis brevis'
    ],
    correctAnswer: 1,
    explanation:
      'Flexor hallucis longus, in the deep posterior compartment, is the primary flexor of the great toe and a powerful plantarflexor, crucial for push-off during gait.[web:695][web:698][web:702]'
  },
  {
    id: 'hx4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve innervates flexor hallucis longus?',
    options: [
      'Deep peroneal nerve',
      'Superficial peroneal nerve',
      'Tibial nerve',
      'Sural nerve',
      'Common peroneal nerve'
    ],
    correctAnswer: 2,
    explanation:
      'Flexor hallucis longus is innervated by the tibial nerve, as are all deep posterior compartment muscles.[web:695][web:699][web:703]'
  },
  {
    id: 'hx5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which intrinsic foot muscles act specifically on the great toe?',
    options: [
      'Lumbricals and interossei',
      'Abductor hallucis, flexor hallucis brevis and adductor hallucis',
      'Quadratus plantae and flexor digitorum brevis',
      'Abductor digiti minimi and flexor digiti minimi',
      'Extensor digitorum brevis only'
    ],
    correctAnswer: 1,
    explanation:
      'The intrinsic muscles of the hallux are abductor hallucis (medial), flexor hallucis brevis (central) and adductor hallucis (transverse and oblique heads); they control fine movements of the big toe.[web:696][web:700][web:704]'
  },
  {
    id: 'hx6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which nerve innervates most of the intrinsic hallux muscles (abductor hallucis and flexor hallucis brevis)?',
    options: [
      'Deep peroneal nerve',
      'Superficial peroneal nerve',
      'Medial plantar nerve',
      'Lateral plantar nerve innervates all intrinsic hallux muscles',
      'Tibial nerve directly without terminal branches'
    ],
    correctAnswer: 2,
    explanation:
      'Abductor hallucis and flexor hallucis brevis are innervated by the medial plantar nerve; adductor hallucis receives lateral plantar nerve innervation.[web:696][web:701][web:705]'
  },
  {
    id: 'hx7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical condition involves lateral deviation of the great toe at the metatarsophalangeal joint, often with a medial bunion?',
    options: [
      'Hammer toe',
      'Claw toe',
      'Hallux valgus',
      'Hallux rigidus',
      'Turf toe'
    ],
    correctAnswer: 2,
    explanation:
      'Hallux valgus is lateral deviation of the great toe with medial prominence of the first metatarsal head (bunion), often due to footwear, weakness of intrinsic muscles or heredity.[web:697][web:702][web:706]'
  }
];

export const midplantarMusclesQuestions: Question[] = [
  {
    id: 'mpl1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which muscles are located in the central (middle) compartment of the sole of the foot?',
    options: [
      'Only abductor hallucis and abductor digiti minimi',
      'Flexor digitorum brevis, quadratus plantae, lumbricals and interossei',
      'Only gastrocnemius and soleus',
      'Extensor digitorum brevis and extensor hallucis brevis',
      'Only the long flexor tendons'
    ],
    correctAnswer: 1,
    explanation:
      'The central plantar compartment contains flexor digitorum brevis, quadratus plantae (flexor accessorius), four lumbricals, and the plantar interossei, along with the long flexor tendons.[web:707][web:709][web:713]'
  },
  {
    id: 'mpl2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve provides the primary motor innervation to most of the central plantar muscles?',
    options: [
      'Deep peroneal nerve',
      'Superficial peroneal nerve',
      'Medial plantar nerve for flexor digitorum brevis; lateral plantar nerve for quadratus plantae, lumbricals and interossei',
      'Sural nerve',
      'Tibial nerve directly without terminal branches'
    ],
    correctAnswer: 2,
    explanation:
      'Flexor digitorum brevis is innervated by the medial plantar nerve, while quadratus plantae, lateral three lumbricals and all plantar interossei receive lateral plantar nerve innervation.[web:707][web:710][web:714]'
  },
  {
    id: 'mpl3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscle lies in the superficial layer of the sole and flexes the middle phalanges of the lateral four toes?',
    options: [
      'Flexor digitorum longus',
      'Flexor digitorum brevis',
      'Quadratus plantae',
      'Lumbricals',
      'Extensor digitorum brevis'
    ],
    correctAnswer: 1,
    explanation:
      'Flexor digitorum brevis is the superficial intrinsic flexor of the foot, originating from the calcaneus and inserting on the middle phalanges of toes 2–5, flexing the proximal interphalangeal joints.[web:707][web:711][web:715]'
  },
  {
    id: 'mpl4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscle assists flexor digitorum longus by straightening its pull on the toes?',
    options: [
      'Flexor digitorum brevis',
      'Quadratus plantae (flexor accessorius)',
      'Lumbricals',
      'Plantar interossei',
      'Abductor digiti minimi'
    ],
    correctAnswer: 1,
    explanation:
      'Quadratus plantae (flexor accessorius) arises from the calcaneus and inserts on the tendon of flexor digitorum longus, adjusting its pull to a more direct line of action on the toes.[web:708][web:712][web:716]'
  },
  {
    id: 'mpl5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'How many lumbrical muscles are present in the foot and from which tendons do they originate?',
    options: [
      'Three lumbricals; from flexor digitorum brevis',
      'Four lumbricals; from the tendons of flexor digitorum longus',
      'Five lumbricals; from the metatarsals',
      'Two lumbricals; from the plantar aponeurosis',
      'No lumbricals exist in the foot'
    ],
    correctAnswer: 1,
    explanation:
      'Four lumbrical muscles arise from the tendons of flexor digitorum longus and insert on the medial side of the proximal phalanges and extensor expansions of toes 2–5, flexing MTP joints and extending IP joints.[web:708][web:713][web:717]'
  },
  {
    id: 'mpl6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which statement BEST describes the plantar interossei muscles and their action?',
    options: [
      'Four muscles that abduct the toes away from the midline',
      'Three muscles (PAD: Plantar ADduct) that adduct toes 3, 4 and 5 toward the axis of the second toe',
      'Two muscles that extend all toes',
      'Five muscles that plantarflex the ankle',
      'No plantar interossei exist in the foot'
    ],
    correctAnswer: 1,
    explanation:
      'There are three plantar interossei on the lateral three toes that adduct toward the second toe axis (PAD mnemonic: Plantar ADduct), and they also assist in flexing the MTP joints.[web:709][web:714][web:718]'
  },
  {
    id: 'mpl7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which combination correctly distinguishes dorsal from plantar interossei in the foot?',
    options: [
      'Dorsal interossei abduct toes (DAB); plantar interossei adduct toes (PAD)',
      'Dorsal interossei adduct; plantar interossei abduct',
      'Both groups perform identical functions',
      'Dorsal interossei only plantarflex; plantar only dorsiflex',
      'Dorsal interossei are absent in the foot'
    ],
    correctAnswer: 0,
    explanation:
      'Dorsal interossei (four muscles) abduct the toes away from the second toe axis (DAB: Dorsal ABduct), while plantar interossei (three muscles) adduct toward it (PAD: Plantar ADduct).[web:709][web:715][web:719]'
  }
];
