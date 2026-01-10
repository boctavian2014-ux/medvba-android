import type { Question } from './questions';

export const medianNerveQuestions: Question[] = [
  {
    id: 'mdn1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'From which nerve roots does the median nerve arise?',
    options: [
      'C5–C6 only',
      'C6–C7–C8–T1',
      'C8–T1 only',
      'T1–T2',
      'C3–C4–C5'
    ],
    correctAnswer: 1,
    explanation:
      'The median nerve is formed by contributions from the lateral cord (C6, C7) and medial cord (C8, T1) of the brachial plexus, giving it C6–C7–C8–T1 innervation.[web:733][web:735][web:740]'
  },
  {
    id: 'mdn2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which compartment of the forearm does the median nerve primarily supply?',
    options: [
      'Posterior (extensor) compartment',
      'Lateral compartment',
      'Anterior (flexor–pronator) compartment',
      'No forearm muscles',
      'Only intrinsic hand muscles'
    ],
    correctAnswer: 2,
    explanation:
      'The median nerve innervates most muscles of the anterior compartment of the forearm, except flexor carpi ulnaris and the medial half of flexor digitorum profundus.[web:733][web:736][web:741]'
  },
  {
    id: 'mdn3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which branch of the median nerve innervates the deep flexor muscles of the forearm?',
    options: [
      'Palmar cutaneous branch',
      'Recurrent (thenar) motor branch',
      'Anterior interosseous nerve',
      'Posterior interosseous nerve',
      'Superficial branch'
    ],
    correctAnswer: 2,
    explanation:
      'The anterior interosseous nerve (AIN) is a pure motor branch of the median nerve that innervates flexor pollicis longus, the lateral half of flexor digitorum profundus and pronator quadratus.[web:734][web:737][web:742]'
  },
  {
    id: 'mdn4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which intrinsic hand muscles are innervated by the recurrent (thenar) motor branch of the median nerve?',
    options: [
      'All lumbricals',
      'Abductor pollicis brevis, opponens pollicis and superficial head of flexor pollicis brevis',
      'Adductor pollicis and all interossei',
      'Hypothenar muscles',
      'Only the first lumbrical'
    ],
    correctAnswer: 1,
    explanation:
      'The recurrent motor branch innervates the thenar muscles: abductor pollicis brevis, opponens pollicis and the superficial head of flexor pollicis brevis; the median nerve also supplies the first two lumbricals.[web:734][web:738][web:743]'
  },
  {
    id: 'mdn5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which sensory territory does the median nerve supply in the hand?',
    options: [
      'Entire palmar and dorsal hand',
      'Palmar aspect of the thumb, index, middle and lateral half of ring finger, plus dorsal tips of the same fingers',
      'Only the little finger',
      'Medial palm and medial three fingers',
      'No sensory innervation'
    ],
    correctAnswer: 1,
    explanation:
      'The median nerve provides sensation to the palmar surface of the thumb, index, middle and lateral half of the ring finger, and the dorsal tips of these digits.[web:735][web:739][web:744]'
  },
  {
    id: 'mdn6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which anatomical structure does the median nerve pass through at the wrist?',
    options: [
      'Guyon canal',
      'Carpal tunnel',
      'Cubital tunnel',
      'Radial tunnel',
      'Quadrangular space'
    ],
    correctAnswer: 1,
    explanation:
      'The median nerve passes through the carpal tunnel along with the nine long flexor tendons, making it vulnerable to compression in carpal tunnel syndrome.[web:735][web:740][web:745]'
  },
  {
    id: 'mdn7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical sign is characteristic of anterior interosseous nerve syndrome?',
    options: [
      'Loss of thumb opposition and thenar atrophy',
      'Inability to flex the thumb IP joint and index finger DIP joint (loss of "OK" sign), with no sensory deficit',
      'Wrist drop',
      'Claw hand deformity',
      'Sensory loss over the entire hand'
    ],
    correctAnswer: 1,
    explanation:
      'Anterior interosseous nerve palsy causes weakness of flexor pollicis longus and the lateral flexor digitorum profundus, preventing thumb IP and index DIP flexion (cannot make "OK" sign); it is a pure motor syndrome.[web:734][web:742][web:746]'
  },
  {
    id: 'mdn8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which deformity pattern results from a high median nerve lesion (above the elbow)?',
    options: [
      'Benediction hand (inability to flex digits 2–3 at MCP and IP joints, loss of pronation)',
      'Claw hand (hyperextension of MCP with flexion of IP joints in digits 4–5)',
      'Wrist drop',
      'Ape hand with pure thenar atrophy',
      'Foot drop'
    ],
    correctAnswer: 0,
    explanation:
      'High median nerve lesions cause loss of most flexor function in digits 2–3 and pronation, producing a "benediction" or "hand of benediction" deformity when attempting to make a fist.[web:736][web:743][web:747]'
  },
  {
    id: 'mdn9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical test is used to diagnose carpal tunnel syndrome?',
    options: [
      'Finkelstein test',
      'Froment sign',
      'Phalen test (wrist flexion) and Tinel sign at the wrist',
      'Allen test',
      'Empty can test'
    ],
    correctAnswer: 2,
    explanation:
      'Phalen test (maximal wrist flexion for 60 seconds reproducing symptoms) and Tinel sign (tapping over the carpal tunnel eliciting paresthesias) are classic tests for carpal tunnel syndrome.[web:735][web:745][web:748]'
  },
  {
    id: 'mdn10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which functional deficit is MOST characteristic of isolated carpal tunnel syndrome (distal median nerve compression)?',
    options: [
      'Loss of forearm pronation',
      'Loss of thumb opposition, weak thumb abduction/flexion, thenar atrophy and sensory loss in median distribution',
      'Complete inability to flex any fingers',
      'Wrist drop',
      'Loss of finger abduction and adduction'
    ],
    correctAnswer: 1,
    explanation:
      'Carpal tunnel syndrome affects the median nerve distal to the wrist, causing thenar muscle weakness (especially opponens pollicis), sensory deficits in the median nerve territory and often nocturnal paresthesias.[web:735][web:744][web:749]'
  }
];

export const musculocutaneousNerveQuestions: Question[] = [
  {
    id: 'mcn1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'From which nerve roots does the musculocutaneous nerve arise?',
    options: [
      'C5–C6–C7',
      'C7–C8–T1',
      'C8–T1 only',
      'T1–T2',
      'C3–C4'
    ],
    correctAnswer: 0,
    explanation:
      'The musculocutaneous nerve arises from the lateral cord of the brachial plexus with contributions from C5, C6 and C7 nerve roots.[web:750][web:752][web:756]'
  },
  {
    id: 'mcn2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which muscle does the musculocutaneous nerve characteristically pierce early in its course?',
    options: [
      'Deltoid',
      'Pectoralis major',
      'Coracobrachialis',
      'Triceps brachii',
      'Brachioradialis'
    ],
    correctAnswer: 2,
    explanation:
      'The musculocutaneous nerve pierces the coracobrachialis muscle shortly after arising from the lateral cord, then travels between biceps and brachialis.[web:750][web:753][web:757]'
  },
  {
    id: 'mcn3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscles are innervated by the musculocutaneous nerve?',
    options: [
      'Triceps brachii, anconeus and brachioradialis',
      'Biceps brachii, brachialis and coracobrachialis',
      'Deltoid and teres minor',
      'Pronator teres and flexor carpi radialis',
      'Supinator and extensor carpi radialis'
    ],
    correctAnswer: 1,
    explanation:
      'The musculocutaneous nerve provides motor innervation to all three muscles of the anterior compartment of the arm: biceps brachii, brachialis and coracobrachialis.[web:750][web:754][web:758]'
  },
  {
    id: 'mcn4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'After piercing coracobrachialis, where does the musculocutaneous nerve continue in the arm?',
    options: [
      'Posterior to the humerus with the radial nerve',
      'Between biceps brachii and brachialis in the anterior compartment',
      'Through the cubital tunnel at the elbow',
      'Along the medial aspect with the ulnar nerve',
      'Superficial to all arm muscles'
    ],
    correctAnswer: 1,
    explanation:
      'The musculocutaneous nerve descends between biceps brachii (superficially) and brachialis (deeply) in the anterior arm compartment.[web:751][web:754][web:759]'
  },
  {
    id: 'mcn5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'What is the sensory continuation of the musculocutaneous nerve called, and which area does it supply?',
    options: [
      'Medial cutaneous nerve of forearm; medial forearm',
      'Lateral cutaneous nerve of forearm (lateral antebrachial cutaneous nerve); lateral forearm',
      'Superficial radial nerve; dorsum of hand',
      'Palmar cutaneous branch; palm',
      'Digital nerves; fingertips'
    ],
    correctAnswer: 1,
    explanation:
      'The musculocutaneous nerve becomes the lateral cutaneous nerve of the forearm (lateral antebrachial cutaneous nerve) at the elbow, providing sensation to the lateral forearm.[web:751][web:755][web:760]'
  },
  {
    id: 'mcn6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which primary function would be lost with complete musculocutaneous nerve palsy?',
    options: [
      'Elbow extension',
      'Forearm pronation',
      'Elbow flexion and forearm supination',
      'Wrist flexion',
      'Finger extension'
    ],
    correctAnswer: 2,
    explanation:
      'Musculocutaneous nerve palsy causes paralysis of biceps (elbow flexion and powerful supination) and brachialis (primary elbow flexor), severely weakening elbow flexion.[web:751][web:756][web:761]'
  },
  {
    id: 'mcn7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical scenario is MOST commonly associated with musculocutaneous nerve injury?',
    options: [
      'Carpal tunnel compression',
      'Supracondylar fracture of humerus',
      'Trauma to the axilla or upper arm, or vigorous exercise causing coracobrachialis hypertrophy',
      'Wrist laceration',
      'Lateral epicondylitis'
    ],
    correctAnswer: 2,
    explanation:
      'Musculocutaneous nerve injury can occur from penetrating trauma to the axilla or proximal arm, or from strenuous exercise causing coracobrachialis compression.[web:752][web:757][web:762]'
  },
  {
    id: 'mcn8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Why is elbow flexion not completely lost even with total musculocutaneous nerve palsy?',
    options: [
      'The radial nerve also innervates biceps',
      'Brachioradialis (radial nerve) and other forearm flexors can partially compensate',
      'The median nerve innervates brachialis',
      'Triceps can flex the elbow',
      'No compensation is possible'
    ],
    correctAnswer: 1,
    explanation:
      'Although biceps and brachialis are paralyzed, brachioradialis (innervated by radial nerve) and pronator teres can provide weak elbow flexion, especially with the forearm in mid-pronation.[web:751][web:758][web:763]'
  },
  {
    id: 'mcn9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which reflex is lost or diminished with musculocutaneous nerve injury?',
    options: [
      'Triceps reflex',
      'Biceps reflex (C5–C6)',
      'Brachioradialis reflex',
      'Patellar reflex',
      'Achilles reflex'
    ],
    correctAnswer: 1,
    explanation:
      'The biceps reflex (elbow flexion in response to biceps tendon tap) is lost or diminished with musculocutaneous nerve injury, as the nerve innervates biceps brachii.[web:751][web:759][web:764]'
  },
  {
    id: 'mcn10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which pattern of weakness is MOST characteristic of isolated musculocutaneous nerve palsy?',
    options: [
      'Weak wrist extension and finger drop',
      'Weak elbow flexion (especially with forearm supinated), weak forearm supination and sensory loss over lateral forearm',
      'Complete loss of all forearm and hand function',
      'Isolated loss of thumb opposition',
      'Foot drop'
    ],
    correctAnswer: 1,
    explanation:
      'Musculocutaneous nerve palsy produces weak elbow flexion (most notable with supinated forearm when biceps is most effective), weak supination and lateral forearm sensory deficit.[web:751][web:760][web:765]'
  }
];

export const radialNerveQuestions: Question[] = [
  {
    id: 'rdn1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'From which nerve roots does the radial nerve arise?',
    options: [
      'C5–C6 only',
      'C5–C6–C7–C8–T1 (all roots of brachial plexus)',
      'C8–T1 only',
      'C7–C8 only',
      'T1–T2'
    ],
    correctAnswer: 1,
    explanation:
      'The radial nerve is the largest branch of the brachial plexus, arising from the posterior cord with contributions from all five nerve roots (C5–C6–C7–C8–T1).[web:766][web:768][web:773]'
  },
  {
    id: 'rdn2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which anatomical groove does the radial nerve travel through in the arm, making it vulnerable to injury?',
    options: [
      'Carpal tunnel',
      'Cubital tunnel',
      'Radial groove (spiral groove) on the posterior humerus',
      'Quadrangular space',
      'Guyon canal'
    ],
    correctAnswer: 2,
    explanation:
      'The radial nerve spirals around the posterior humerus in the radial (spiral) groove with the deep brachial artery, making it susceptible to injury in midshaft humeral fractures.[web:766][web:769][web:774]'
  },
  {
    id: 'rdn3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscle groups does the radial nerve innervate?',
    options: [
      'All flexor muscles of the forearm',
      'Triceps brachii, anconeus, brachioradialis and all posterior (extensor) forearm muscles',
      'Thenar and hypothenar muscles',
      'Anterior compartment muscles of the arm only',
      'Intrinsic hand muscles only'
    ],
    correctAnswer: 1,
    explanation:
      'The radial nerve innervates triceps and anconeus (elbow extensors), brachioradialis and extensor carpi radialis longus (via radial nerve proper), and all posterior compartment extensors via the posterior interosseous nerve.[web:767][web:770][web:775]'
  },
  {
    id: 'rdn4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which branch of the radial nerve innervates the deep extensor muscles of the forearm?',
    options: [
      'Superficial radial nerve',
      'Anterior interosseous nerve',
      'Posterior interosseous nerve (deep branch)',
      'Palmar cutaneous branch',
      'Recurrent motor branch'
    ],
    correctAnswer: 2,
    explanation:
      'The posterior interosseous nerve (deep branch of radial nerve) innervates all muscles in the deep posterior compartment, including extensors of thumb and fingers, supinator and extensor carpi ulnaris.[web:767][web:771][web:776]'
  },
  {
    id: 'rdn5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which sensory territory does the superficial radial nerve supply?',
    options: [
      'Palmar surface of thumb and index finger',
      'Dorsal surface of lateral hand and thumb, index and middle fingers',
      'Medial hand and little finger',
      'Entire forearm',
      'No sensory territory'
    ],
    correctAnswer: 1,
    explanation:
      'The superficial radial nerve provides sensation to the dorsolateral hand, including dorsal surfaces of the thumb, index, middle and lateral half of the ring finger (excluding distal phalanges).[web:768][web:772][web:777]'
  },
  {
    id: 'rdn6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which clinical presentation is MOST characteristic of radial nerve injury at the spiral groove?',
    options: [
      'Loss of elbow flexion',
      'Wrist drop (inability to extend wrist and fingers) and weak grip',
      'Claw hand deformity',
      'Loss of thumb opposition',
      'Foot drop'
    ],
    correctAnswer: 1,
    explanation:
      'Radial nerve injury at the spiral groove causes wrist drop due to paralysis of wrist and finger extensors, along with weak grip (hand cannot stabilize for strong finger flexion).[web:769][web:774][web:778]'
  },
  {
    id: 'rdn7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical scenario is commonly called "Saturday night palsy"?',
    options: [
      'Ulnar nerve compression at elbow',
      'Median nerve compression at wrist',
      'Radial nerve compression in the axilla or upper arm from prolonged pressure (e.g., sleeping with arm over chair)',
      'Sciatic nerve injury',
      'Peroneal nerve palsy'
    ],
    correctAnswer: 2,
    explanation:
      'Saturday night palsy refers to radial nerve compression from prolonged pressure on the upper arm or axilla, often from falling asleep with the arm draped over a chair or partner.[web:769][web:775][web:779]'
  },
  {
    id: 'rdn8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which functional deficit distinguishes a high radial nerve lesion (above elbow) from a posterior interosseous nerve lesion (below elbow)?',
    options: [
      'High lesion spares triceps and elbow extension; PIN lesion affects triceps',
      'High lesion causes wrist drop and loss of elbow extension; PIN lesion spares wrist extensors (ECRL, brachioradialis) and elbow extension but affects finger/thumb extension',
      'Both lesions have identical presentations',
      'High lesion has no motor deficit',
      'PIN lesion causes complete arm paralysis'
    ],
    correctAnswer: 1,
    explanation:
      'High radial nerve lesions affect triceps, wrist extensors and finger extensors (wrist drop + loss of elbow extension), while isolated PIN lesions spare brachioradialis, ECRL and triceps but cause finger/thumb extension weakness.[web:770][web:776][web:780]'
  },
  {
    id: 'rdn9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Why is grip strength significantly reduced even though finger flexors are intact in radial nerve palsy?',
    options: [
      'Finger flexors are also paralyzed',
      'Wrist must be extended to allow effective finger flexion; with wrist drop, mechanical advantage is lost',
      'The radial nerve innervates finger flexors',
      'Grip strength is not affected',
      'Only thumb flexion is lost'
    ],
    correctAnswer: 1,
    explanation:
      'Strong grip requires wrist extension for optimal finger flexor function (tenodesis effect); wrist drop in radial nerve palsy eliminates this mechanical advantage, severely weakening grip despite intact flexors.[web:769][web:777][web:781]'
  },
  {
    id: 'rdn10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which area of sensory loss is characteristic of superficial radial nerve injury?',
    options: [
      'Palmar thumb and index finger',
      'Dorsal first web space between thumb and index finger',
      'Little finger',
      'Medial forearm',
      'No sensory loss occurs'
    ],
    correctAnswer: 1,
    explanation:
      'The superficial radial nerve classically supplies the dorsal first web space (between thumb and index finger), and isolated injury causes numbness/paresthesias in this region.[web:768][web:778][web:782]'
  }
];

export const ulnarNerveQuestions: Question[] = [
  {
    id: 'uln1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'From which nerve roots does the ulnar nerve arise?',
    options: [
      'C5–C6 only',
      'C6–C7 only',
      'C8–T1 primarily',
      'C7–C8 only',
      'T1–T2'
    ],
    correctAnswer: 2,
    explanation:
      'The ulnar nerve arises from the medial cord of the brachial plexus with contributions primarily from C8 and T1 nerve roots.[web:783][web:785][web:790]'
  },
  {
    id: 'uln2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which anatomical structure does the ulnar nerve pass through at the elbow?',
    options: [
      'Carpal tunnel',
      'Cubital tunnel (behind the medial epicondyle)',
      'Radial groove',
      'Quadrangular space',
      'Guyon canal at the elbow'
    ],
    correctAnswer: 1,
    explanation:
      'The ulnar nerve passes posterior to the medial epicondyle of the humerus through the cubital tunnel, where it is superficial and vulnerable to compression.[web:783][web:786][web:791]'
  },
  {
    id: 'uln3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which forearm muscles does the ulnar nerve innervate?',
    options: [
      'All flexor muscles',
      'Flexor carpi ulnaris and medial half of flexor digitorum profundus',
      'All extensor muscles',
      'Pronator teres and flexor carpi radialis',
      'No forearm muscles'
    ],
    correctAnswer: 1,
    explanation:
      'In the forearm, the ulnar nerve innervates only flexor carpi ulnaris and the medial (ulnar) half of flexor digitorum profundus (digits 4 and 5).[web:784][web:787][web:792]'
  },
  {
    id: 'uln4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which canal does the ulnar nerve pass through at the wrist?',
    options: [
      'Carpal tunnel',
      'Cubital tunnel',
      'Guyon canal (ulnar canal)',
      'Radial tunnel',
      'No canal, it passes superficially'
    ],
    correctAnswer: 2,
    explanation:
      'The ulnar nerve passes through Guyon canal (ulnar canal) at the wrist, between the pisiform bone and hook of hamate, where it can be compressed.[web:784][web:788][web:793]'
  },
  {
    id: 'uln5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which intrinsic hand muscles are innervated by the ulnar nerve?',
    options: [
      'All thenar muscles',
      'All hypothenar muscles, all interossei, medial two lumbricals and adductor pollicis',
      'Only the first two lumbricals',
      'No intrinsic hand muscles',
      'Only abductor pollicis brevis'
    ],
    correctAnswer: 1,
    explanation:
      'The ulnar nerve (via deep branch) innervates all hypothenar muscles, all interossei (palmar and dorsal), lumbricals 3–4, adductor pollicis and often the deep head of flexor pollicis brevis.[web:784][web:789][web:794]'
  },
  {
    id: 'uln6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which sensory territory does the ulnar nerve supply in the hand?',
    options: [
      'Thumb and index finger',
      'Little finger and medial half of ring finger (palmar and dorsal)',
      'Entire palm',
      'Dorsum of hand only',
      'No sensory territory'
    ],
    correctAnswer: 1,
    explanation:
      'The ulnar nerve provides sensation to the little finger and medial half of the ring finger on both palmar and dorsal surfaces, plus the medial palm.[web:785][web:790][web:795]'
  },
  {
    id: 'uln7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical sign tests for ulnar nerve integrity and adductor pollicis function?',
    options: [
      'Phalen test',
      'Froment sign (inability to pinch paper between thumb and index without flexing thumb IP joint)',
      'Tinel sign at carpal tunnel',
      'Empty can test',
      'Allen test'
    ],
    correctAnswer: 1,
    explanation:
      'Froment sign: when attempting to pinch paper, weakness of adductor pollicis (ulnar nerve) causes compensatory flexion of the thumb IP joint by flexor pollicis longus (median/AIN).[web:786][web:791][web:796]'
  },
  {
    id: 'uln8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which deformity is characteristic of chronic ulnar nerve palsy?',
    options: [
      'Wrist drop',
      'Benediction hand',
      'Claw hand (hyperextension of MCP joints and flexion of IP joints in digits 4–5)',
      'Ape hand',
      'Foot drop'
    ],
    correctAnswer: 2,
    explanation:
      'Ulnar claw hand results from paralysis of interossei and lumbricals 3–4; unopposed long extensors hyperextend the MCPs of digits 4–5, while unopposed long flexors flex the IP joints (the "ulnar paradox" is more pronounced with distal lesions).[web:786][web:792][web:797]'
  },
  {
    id: 'uln9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical condition involves ulnar nerve compression at the elbow?',
    options: [
      'Carpal tunnel syndrome',
      'Cubital tunnel syndrome',
      'Radial tunnel syndrome',
      'Pronator syndrome',
      'Guyon canal syndrome exclusively'
    ],
    correctAnswer: 1,
    explanation:
      'Cubital tunnel syndrome is compression of the ulnar nerve at the elbow (behind medial epicondyle), causing medial elbow pain, paresthesias in digits 4–5 and hand weakness.[web:783][web:791][web:798]'
  },
  {
    id: 'uln10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which functional deficit pattern results from complete ulnar nerve palsy?',
    options: [
      'Loss of thumb opposition only',
      'Loss of finger/thumb abduction and adduction, weak grip, claw hand and sensory loss in little and medial ring fingers',
      'Wrist drop',
      'Complete loss of all hand function',
      'Isolated loss of wrist flexion'
    ],
    correctAnswer: 1,
    explanation:
      'Ulnar nerve palsy causes loss of interossei (finger abduction/adduction), weak grip, claw deformity in digits 4–5, loss of thumb adduction (Froment+) and sensory deficit in ulnar territory.[web:785][web:793][web:799]'
  }
];

export const femoralNerveQuestions: Question[] = [
  {
    id: 'fem1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'From which nerve roots does the femoral nerve arise?',
    options: [
      'L1–L2 only',
      'L2–L3–L4 (posterior divisions of lumbar plexus)',
      'L5–S1',
      'S1–S2',
      'T12–L1'
    ],
    correctAnswer: 1,
    explanation:
      'The femoral nerve is formed from the posterior divisions of the L2, L3 and L4 nerve roots of the lumbar plexus.'
  },
  {
    id: 'fem2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which muscle does the femoral nerve pass through or underneath as it enters the thigh?',
    options: [
      'Adductor longus',
      'Gluteus maximus',
      'Inguinal ligament',
      'Piriformis',
      'Obturator externus'
    ],
    correctAnswer: 2,
    explanation:
      'The femoral nerve descends through the pelvis within the psoas major and enters the thigh by passing deep to the inguinal ligament, lateral to the femoral artery.'
  },
  {
    id: 'fem3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscles does the femoral nerve innervate?',
    options: [
      'Hamstrings and adductors',
      'Iliopsoas and quadriceps femoris (all four heads) and sartorius',
      'Gluteal muscles',
      'Anterior and lateral leg compartments',
      'Only hip adductors'
    ],
    correctAnswer: 1,
    explanation:
      'The femoral nerve innervates iliopsoas (hip flexor), quadriceps femoris (rectus femoris, vastus lateralis, medialis, intermedius) and sartorius, as well as pectineus.'
  },
  {
    id: 'fem4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which sensory branch of the femoral nerve supplies the anterior and medial thigh and medial leg?',
    options: [
      'Lateral femoral cutaneous nerve',
      'Saphenous nerve',
      'Obturator nerve',
      'Sural nerve',
      'Common peroneal nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The saphenous nerve is the largest cutaneous branch of the femoral nerve, providing sensation to the medial leg and foot, traveling with the great saphenous vein.'
  },
  {
    id: 'fem5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which reflex is mediated by the femoral nerve?',
    options: [
      'Achilles (ankle jerk) reflex',
      'Patellar (knee jerk) reflex (L2–L4)',
      'Biceps reflex',
      'Triceps reflex',
      'Plantar reflex'
    ],
    correctAnswer: 1,
    explanation:
      'The patellar reflex tests the femoral nerve and L2–L4 nerve roots; tapping the patellar tendon causes quadriceps contraction and knee extension.'
  },
  {
    id: 'fem6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which clinical scenario is commonly associated with femoral nerve injury?',
    options: [
      'Wrist fracture',
      'Pelvic fracture, hip surgery or prolonged lithotomy position',
      'Shoulder dislocation',
      'Ankle sprain',
      'Elbow dislocation'
    ],
    correctAnswer: 1,
    explanation:
      'Femoral nerve injury can occur from pelvic or proximal femoral fractures, hip arthroplasty, inguinal surgery or prolonged lithotomy positioning during surgery.'
  },
  {
    id: 'fem7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which functional deficit pattern is MOST characteristic of complete femoral nerve palsy?',
    options: [
      'Foot drop',
      'Loss of knee extension, difficulty climbing stairs, unstable knee and absent patellar reflex',
      'Loss of hip adduction',
      'Loss of ankle plantarflexion',
      'Trendelenburg gait'
    ],
    correctAnswer: 1,
    explanation:
      'Femoral nerve injury causes quadriceps paralysis with inability to extend the knee, difficulty with stairs and rising from sitting, knee buckling and loss of the patellar reflex.'
  },
  {
    id: 'fem8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which sensory deficit is characteristic of femoral nerve injury?',
    options: [
      'Loss of sensation over lateral thigh only',
      'Loss of sensation over anterior thigh and medial leg/foot (saphenous distribution)',
      'Complete loss of all leg sensation',
      'Loss of sensation over posterior thigh only',
      'No sensory deficit'
    ],
    correctAnswer: 1,
    explanation:
      'Femoral nerve injury causes sensory loss over the anterior and medial thigh and, via the saphenous nerve, the medial aspect of the leg and foot.'
  },
  {
    id: 'fem9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which compensatory mechanism allows some knee stability despite quadriceps paralysis?',
    options: [
      'Hamstrings can extend the knee',
      'Patient can lock the knee in hyperextension and use hip extensors to advance the leg',
      'Adductors provide full compensation',
      'Ankle muscles compensate completely',
      'No compensation is possible'
    ],
    correctAnswer: 1,
    explanation:
      'Patients with femoral nerve palsy often compensate by locking the knee in hyperextension (recurvatum) and using hip extensors (gluteus maximus) to swing the leg forward during gait.'
  },
  {
    id: 'fem10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which condition involves compression of the lateral femoral cutaneous nerve (a branch near the femoral nerve origin)?',
    options: [
      'Tarsal tunnel syndrome',
      'Meralgia paresthetica (lateral thigh numbness/pain)',
      'Carpal tunnel syndrome',
      'Cubital tunnel syndrome',
      'Piriformis syndrome'
    ],
    correctAnswer: 1,
    explanation:
      'Meralgia paresthetica is compression of the lateral femoral cutaneous nerve (from L2–L3, near femoral nerve) under the inguinal ligament, causing anterolateral thigh numbness and dysesthesia.'
  }
];

export const sciaticNerveQuestions: Question[] = [
  {
    id: 'sci1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'From which nerve roots does the sciatic nerve arise?',
    options: [
      'L2–L3–L4',
      'L4–L5–S1–S2–S3 (lumbosacral plexus)',
      'S2–S3–S4 only',
      'L1–L2 only',
      'T12–L1'
    ],
    correctAnswer: 1,
    explanation:
      'The sciatic nerve is formed from the ventral rami of L4, L5, S1, S2 and S3, making it the largest nerve in the body.'
  },
  {
    id: 'sci2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which two major nerves does the sciatic nerve typically divide into?',
    options: [
      'Femoral and obturator nerves',
      'Tibial and common peroneal (fibular) nerves',
      'Superior and inferior gluteal nerves',
      'Saphenous and sural nerves',
      'Medial and lateral plantar nerves'
    ],
    correctAnswer: 1,
    explanation:
      'The sciatic nerve typically bifurcates in the distal thigh or popliteal fossa into the tibial nerve (medially) and common peroneal (fibular) nerve (laterally).'
  },
  {
    id: 'sci3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which anatomical relationship is clinically important for the sciatic nerve as it exits the pelvis?',
    options: [
      'It passes through the obturator foramen',
      'It exits through the greater sciatic foramen, usually inferior to the piriformis muscle',
      'It passes through the inguinal canal',
      'It travels anterior to the femur',
      'It passes through the carpal tunnel'
    ],
    correctAnswer: 1,
    explanation:
      'The sciatic nerve typically exits the pelvis through the greater sciatic foramen inferior to the piriformis muscle, entering the gluteal region.'
  },
  {
    id: 'sci4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscles does the sciatic nerve innervate before it divides?',
    options: [
      'Quadriceps femoris',
      'Hamstrings (except short head of biceps femoris) and adductor magnus (hamstring part)',
      'Gluteal muscles only',
      'Anterior leg compartment',
      'Hip adductors only'
    ],
    correctAnswer: 1,
    explanation:
      'Before dividing, the sciatic nerve (via tibial division) innervates the hamstrings (biceps femoris long head, semitendinosus, semimembranosus) and the ischial part of adductor magnus; the short head of biceps receives common peroneal innervation.'
  },
  {
    id: 'sci5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which clinical condition involves compression or irritation of the sciatic nerve, often causing pain radiating down the leg?',
    options: [
      'Carpal tunnel syndrome',
      'Sciatica (often from lumbar disc herniation or piriformis syndrome)',
      'Cubital tunnel syndrome',
      'Tarsal tunnel syndrome exclusively',
      'Meralgia paresthetica'
    ],
    correctAnswer: 1,
    explanation:
      'Sciatica is pain along the sciatic nerve distribution (buttock, posterior thigh, leg, foot), commonly caused by lumbar disc herniation (L4–L5 or L5–S1) or piriformis syndrome.'
  },
  {
    id: 'sci6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which scenario is commonly associated with sciatic nerve injury?',
    options: [
      'Wrist fracture',
      'Posterior hip dislocation, pelvic fracture or iatrogenic injury during hip surgery',
      'Shoulder dislocation',
      'Clavicle fracture',
      'Ankle sprain'
    ],
    correctAnswer: 1,
    explanation:
      'Sciatic nerve injury commonly occurs with posterior hip dislocation, acetabular or pelvic fractures, or during hip arthroplasty.'
  },
  {
    id: 'sci7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which functional deficit pattern results from complete sciatic nerve injury at the sciatic notch?',
    options: [
      'Loss of knee extension only',
      'Loss of all knee flexion, all ankle/foot movement (foot drop, inability to plantarflex) and most foot/toe function, with sensory loss below the knee except medial leg',
      'Isolated hip weakness',
      'Complete leg paralysis including hip',
      'No motor deficit'
    ],
    correctAnswer: 1,
    explanation:
      'High sciatic nerve lesions cause loss of hamstrings (knee flexion), all muscles below the knee (foot drop, loss of plantarflexion, toe movements) and sensation below the knee except the medial leg/foot (saphenous territory).'
  },
  {
    id: 'sci8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which sensory territories are affected by complete sciatic nerve injury?',
    options: [
      'Entire leg and foot',
      'Lateral and posterior leg, dorsum and sole of foot (sparing medial leg supplied by saphenous nerve)',
      'Only the anterior thigh',
      'Only the medial foot',
      'No sensory loss'
    ],
    correctAnswer: 1,
    explanation:
      'Sciatic nerve injury causes sensory loss in the posterior and lateral leg (via tibial and peroneal branches) and most of the foot, except the medial leg and foot supplied by the saphenous nerve (femoral).'
  },
  {
    id: 'sci9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'What is piriformis syndrome?',
    options: [
      'Weakness of the piriformis muscle only',
      'Compression or irritation of the sciatic nerve by the piriformis muscle, causing sciatica-like symptoms',
      'Fracture of the piriformis bone',
      'Inflammation of the sciatic notch',
      'A type of spinal stenosis'
    ],
    correctAnswer: 1,
    explanation:
      'Piriformis syndrome is controversial but refers to sciatic nerve compression or irritation by the piriformis muscle (spasm, hypertrophy or anatomical variants), causing buttock pain and sciatica.'
  },
  {
    id: 'sci10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which ankle reflex is lost with sciatic nerve (specifically S1 root) injury?',
    options: [
      'Patellar reflex',
      'Achilles (ankle jerk) reflex',
      'Biceps reflex',
      'Brachioradialis reflex',
      'No reflex is affected'
    ],
    correctAnswer: 1,
    explanation:
      'The Achilles (ankle jerk) reflex, mediated by S1–S2 roots via the tibial nerve (sciatic branch), is lost or diminished with sciatic nerve or S1 root lesions.'
  }
];

export const tibialNerveQuestions: Question[] = [
  {
    id: 'tib1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'From which nerve does the tibial nerve arise?',
    options: [
      'Femoral nerve',
      'Obturator nerve',
      'Sciatic nerve (medial division)',
      'Common peroneal nerve',
      'Saphenous nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The tibial nerve is one of the two terminal branches of the sciatic nerve, arising from its medial division (L4–L5–S1–S2–S3).'
  },
  {
    id: 'tib2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which compartment of the leg does the tibial nerve primarily supply?',
    options: [
      'Anterior compartment',
      'Lateral compartment',
      'Posterior compartment (superficial and deep)',
      'No leg muscles',
      'Only foot muscles'
    ],
    correctAnswer: 2,
    explanation:
      'The tibial nerve innervates all muscles of the posterior compartment of the leg, including gastrocnemius, soleus, plantaris, tibialis posterior and long toe flexors.'
  },
  {
    id: 'tib3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which major action is lost with complete tibial nerve palsy in the leg?',
    options: [
      'Ankle dorsiflexion',
      'Ankle plantarflexion and toe flexion',
      'Ankle eversion',
      'Knee extension',
      'Hip flexion'
    ],
    correctAnswer: 1,
    explanation:
      'Tibial nerve injury causes loss of ankle plantarflexion (calf muscles) and toe flexion, making push-off during gait impossible and resulting in a calcaneal (heel-walking) gait.'
  },
  {
    id: 'tib4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which anatomical structure does the tibial nerve pass through at the ankle?',
    options: [
      'Carpal tunnel',
      'Tarsal tunnel (behind the medial malleolus)',
      'Guyon canal',
      'Cubital tunnel',
      'Anterior to the lateral malleolus'
    ],
    correctAnswer: 1,
    explanation:
      'The tibial nerve passes through the tarsal tunnel behind the medial malleolus, where it can be compressed (tarsal tunnel syndrome), and divides into medial and lateral plantar nerves.'
  },
  {
    id: 'tib5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which two terminal branches does the tibial nerve give rise to in the foot?',
    options: [
      'Deep and superficial peroneal nerves',
      'Medial and lateral plantar nerves',
      'Saphenous and sural nerves',
      'Femoral and obturator nerves',
      'Tibial and fibular nerves'
    ],
    correctAnswer: 1,
    explanation:
      'Within or just distal to the tarsal tunnel, the tibial nerve divides into the medial plantar nerve (sensory and motor to medial sole) and lateral plantar nerve (motor to most intrinsic foot muscles).'
  },
  {
    id: 'tib6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which sensory territories does the tibial nerve supply?',
    options: [
      'Dorsum of foot only',
      'Lateral leg and dorsum of foot',
      'Sole of the foot (via medial and lateral plantar nerves) and posterior leg (via sural nerve contribution)',
      'Medial leg only',
      'No sensory territory'
    ],
    correctAnswer: 2,
    explanation:
      'The tibial nerve provides sensation to the sole of the foot via its plantar branches and contributes to the sural nerve for lateral/posterior leg and lateral foot sensation.'
  },
  {
    id: 'tib7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which reflex is mediated by the tibial nerve?',
    options: [
      'Patellar reflex',
      'Achilles (ankle jerk) reflex (S1–S2)',
      'Biceps reflex',
      'Brachioradialis reflex',
      'No reflex'
    ],
    correctAnswer: 1,
    explanation:
      'The Achilles (ankle jerk) reflex tests the tibial nerve and S1–S2 nerve roots; tapping the Achilles tendon causes plantarflexion via gastrocnemius and soleus.'
  },
  {
    id: 'tib8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'What is tarsal tunnel syndrome?',
    options: [
      'Compression of the common peroneal nerve at the fibular neck',
      'Compression of the tibial nerve in the tarsal tunnel behind the medial malleolus, causing heel and sole pain/numbness',
      'Compression of the saphenous nerve',
      'Compression of the femoral nerve at the inguinal ligament',
      'A knee injury'
    ],
    correctAnswer: 1,
    explanation:
      'Tarsal tunnel syndrome is entrapment of the tibial nerve or its branches in the tarsal tunnel, causing burning pain, numbness and paresthesias in the heel and sole.'
  },
  {
    id: 'tib9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which functional deficit pattern results from high tibial nerve injury (proximal leg)?',
    options: [
      'Foot drop with loss of dorsiflexion',
      'Loss of plantarflexion, toe flexion, foot inversion and intrinsic foot muscle function, with sensory loss on sole',
      'Loss of knee extension',
      'Loss of hip abduction',
      'No deficit'
    ],
    correctAnswer: 1,
    explanation:
      'High tibial nerve lesions cause loss of plantarflexion (calf), toe flexion, foot inversion, all intrinsic foot muscles (via plantar nerves) and sole sensation, with absent Achilles reflex.'
  },
  {
    id: 'tib10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical scenario is commonly associated with tibial nerve injury?',
    options: [
      'Fibular neck trauma',
      'Knee dislocation, penetrating popliteal trauma or Baker cyst compression',
      'Wrist fracture',
      'Shoulder dislocation',
      'Hip fracture alone'
    ],
    correctAnswer: 1,
    explanation:
      'Tibial nerve injury can occur from knee dislocation, popliteal fossa trauma, compartment syndrome or compression by a Baker cyst.'
  }
];

export const upperLimbSensoryQuestions: Question[] = [
  {
    id: 'uls1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve root dermatome typically corresponds to the lateral arm over the deltoid region?',
    options: [
      'C4',
      'C5',
      'C6',
      'C7',
      'C8'
    ],
    correctAnswer: 1,
    explanation:
      'The C5 dermatome covers the lateral aspect of the upper arm, overlying the deltoid muscle and the "regimental badge" area supplied by the axillary nerve.'
  },
  {
    id: 'uls2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve root dermatome typically corresponds to the thumb and lateral hand?',
    options: [
      'C5',
      'C6',
      'C7',
      'C8',
      'T1'
    ],
    correctAnswer: 1,
    explanation:
      'The C6 dermatome includes the lateral forearm, thumb and radial side of the hand; it is supplied peripherally by the radial and median nerves.'
  },
  {
    id: 'uls3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve root dermatome typically corresponds to the middle finger?',
    options: [
      'C5',
      'C6',
      'C7',
      'C8',
      'T1'
    ],
    correctAnswer: 2,
    explanation:
      'The C7 dermatome classically includes the middle finger and can extend to the dorsum of the hand; the median nerve supplies the palmar middle finger.'
  },
  {
    id: 'uls4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve root dermatome typically corresponds to the little finger and medial hand?',
    options: [
      'C6',
      'C7',
      'C8',
      'T1',
      'T2'
    ],
    correctAnswer: 2,
    explanation:
      'The C8 dermatome covers the medial forearm, little finger and ulnar side of the hand; peripherally supplied by the ulnar nerve and medial cutaneous nerves.'
  },
  {
    id: 'uls5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve supplies sensation to the dorsal first web space between thumb and index finger?',
    options: [
      'Median nerve',
      'Ulnar nerve',
      'Superficial radial nerve',
      'Musculocutaneous nerve',
      'Axillary nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The superficial radial nerve provides sensation to the dorsal first web space (between thumb and index finger), a key area for testing radial nerve sensory function.'
  },
  {
    id: 'uls6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve supplies sensation to the palmar aspect of the thumb, index, middle and lateral half of the ring finger?',
    options: [
      'Ulnar nerve',
      'Radial nerve',
      'Median nerve',
      'Musculocutaneous nerve',
      'Axillary nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The median nerve provides palmar sensation to the thumb, index, middle and lateral ring finger, plus the dorsal tips of these digits.'
  },
  {
    id: 'uls7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which combination of sensory loss (palmar little finger + medial ring finger) suggests ulnar nerve injury?',
    options: [
      'C6 dermatome loss only',
      'C7 dermatome loss only',
      'Ulnar nerve sensory territory: little finger and medial half of ring finger (palmar and dorsal)',
      'Median nerve territory',
      'Radial nerve territory'
    ],
    correctAnswer: 2,
    explanation:
      'The ulnar nerve supplies sensation to the little finger and medial half of the ring finger on both palmar and dorsal surfaces, distinct from C8 dermatomal distribution.'
  },
  {
    id: 'uls8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which sensory nerve supplies the lateral forearm?',
    options: [
      'Medial cutaneous nerve of forearm',
      'Superficial radial nerve',
      'Lateral cutaneous nerve of forearm (terminal sensory branch of musculocutaneous nerve)',
      'Ulnar nerve',
      'Median nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The lateral cutaneous nerve of the forearm (lateral antebrachial cutaneous nerve) is the sensory continuation of the musculocutaneous nerve and supplies the lateral forearm.'
  },
  {
    id: 'uls9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which dermatome level corresponds to the medial aspect of the arm and medial epicondyle region?',
    options: [
      'C6',
      'C7',
      'C8',
      'T1',
      'T2'
    ],
    correctAnswer: 3,
    explanation:
      'The T1 dermatome covers the medial arm down to the medial epicondyle region; it is supplied by the medial cutaneous nerve of the arm (from medial cord).'
  },
  {
    id: 'uls10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'How can you clinically differentiate a C6 radiculopathy from isolated radial nerve palsy based on sensory loss?',
    options: [
      'They have identical sensory patterns',
      'C6 radiculopathy affects the entire C6 dermatome (lateral forearm, thumb, index); radial nerve palsy affects only the dorsal first web space and dorsal hand',
      'Radial nerve palsy has no sensory loss',
      'C6 radiculopathy has no sensory loss',
      'Both cause medial hand numbness'
    ],
    correctAnswer: 1,
    explanation:
      'C6 radiculopathy causes dermatomal sensory loss (lateral forearm, thumb, radial hand), often with neck/arm pain; isolated radial nerve palsy causes more limited sensory loss (dorsal first web space, dorsal hand) without neck pain.'
  }
];

export const obturatorNerveQuestions: Question[] = [
  {
    id: 'obt1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'From which nerve roots does the obturator nerve arise?',
    options: [
      'L1–L2 only',
      'L2–L3–L4 (anterior divisions of lumbar plexus)',
      'L5–S1',
      'S1–S2',
      'T12–L1'
    ],
    correctAnswer: 1,
    explanation:
      'The obturator nerve is formed from the anterior divisions of the L2, L3 and L4 nerve roots of the lumbar plexus.'
  },
  {
    id: 'obt2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which anatomical structure does the obturator nerve pass through to enter the thigh?',
    options: [
      'Greater sciatic foramen',
      'Inguinal canal',
      'Obturator foramen (obturator canal)',
      'Femoral triangle',
      'Adductor hiatus'
    ],
    correctAnswer: 2,
    explanation:
      'The obturator nerve exits the pelvis by passing through the obturator canal in the obturator foramen, accompanied by obturator vessels.'
  },
  {
    id: 'obt3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscles does the obturator nerve innervate?',
    options: [
      'Quadriceps femoris',
      'Most hip adductors: adductor longus, adductor brevis, gracilis and adductor magnus (adductor part)',
      'Hamstrings',
      'Gluteal muscles',
      'Anterior leg compartment'
    ],
    correctAnswer: 1,
    explanation:
      'The obturator nerve innervates the medial thigh (adductor) compartment: adductor longus, adductor brevis, gracilis and the adductor (pubofemoral) part of adductor magnus, plus obturator externus.'
  },
  {
    id: 'obt4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which sensory territory does the obturator nerve supply?',
    options: [
      'Anterior thigh',
      'Small area of medial thigh and sometimes medial knee',
      'Lateral thigh',
      'Entire lower leg',
      'No sensory territory'
    ],
    correctAnswer: 1,
    explanation:
      'The obturator nerve provides variable sensory innervation to a small area of the medial thigh and sometimes the medial aspect of the knee.'
  },
  {
    id: 'obt5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which clinical scenario is commonly associated with obturator nerve injury?',
    options: [
      'Shoulder dislocation',
      'Pelvic surgery, pelvic fracture or obturator hernia',
      'Wrist fracture',
      'Ankle sprain',
      'Elbow dislocation'
    ],
    correctAnswer: 1,
    explanation:
      'Obturator nerve injury can occur during pelvic surgery (especially gynecologic), pelvic fractures, or from obturator hernia compression.'
  },
  {
    id: 'obt6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which functional deficit is MOST characteristic of obturator nerve palsy?',
    options: [
      'Loss of knee extension',
      'Weakness of hip adduction and difficulty crossing legs',
      'Foot drop',
      'Loss of ankle plantarflexion',
      'Trendelenburg gait'
    ],
    correctAnswer: 1,
    explanation:
      'Obturator nerve injury causes weakness or loss of hip adduction, making it difficult to cross the legs or squeeze the thighs together.'
  },
  {
    id: 'obt7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which gait abnormality may result from obturator nerve palsy?',
    options: [
      'Steppage gait (foot drop)',
      'Trendelenburg gait (pelvic drop)',
      'Waddling gait with lateral swing of affected leg during adduction weakness',
      'Antalgic gait only',
      'No gait abnormality'
    ],
    correctAnswer: 2,
    explanation:
      'Patients with obturator nerve palsy may exhibit a waddling or circumduction gait, swinging the affected leg laterally to compensate for weak hip adduction.'
  },
  {
    id: 'obt8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Why is sensory loss often minimal or absent despite obturator nerve injury?',
    options: [
      'The obturator nerve has extensive sensory territory',
      'The cutaneous branch is small and variable, with overlap from femoral and lateral femoral cutaneous nerves',
      'The obturator nerve is purely motor',
      'Sensory loss is always severe',
      'The nerve regenerates sensory fibers immediately'
    ],
    correctAnswer: 1,
    explanation:
      'The obturator nerve has a small, variable cutaneous branch to the medial thigh, and sensory overlap from femoral and other nerves often makes sensory deficits subtle or undetectable.'
  },
  {
    id: 'obt9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical sign can help differentiate obturator nerve palsy from other causes of hip weakness?',
    options: [
      'Loss of knee extension (patellar reflex absent)',
      'Positive Trendelenburg sign',
      'Isolated weakness of hip adduction with preserved hip flexion, extension and abduction',
      'Complete lower limb paralysis',
      'Foot drop'
    ],
    correctAnswer: 2,
    explanation:
      'Obturator nerve palsy selectively affects hip adduction; hip flexion (iliopsoas/femoral), extension (gluteals) and abduction (gluteus medius/minimus) remain intact.'
  },
  {
    id: 'obt10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'What is an obturator hernia and how can it affect the obturator nerve?',
    options: [
      'Hernia through the inguinal canal compressing the femoral nerve',
      'Hernia through the obturator canal that can compress the obturator nerve, causing medial thigh pain and adductor weakness',
      'Hernia through the femoral canal',
      'Spinal disc herniation at L4–L5',
      'Abdominal wall hernia with no nerve involvement'
    ],
    correctAnswer: 1,
    explanation:
      'An obturator hernia protrudes through the obturator canal and can compress the obturator nerve, causing medial thigh/knee pain (Howship-Romberg sign) and adductor weakness.'
  }
];

export const lowerLimbSensoryQuestions: Question[] = [
  {
    id: 'lls1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve root dermatome typically corresponds to the anterior thigh and medial leg?',
    options: [
      'L2',
      'L3',
      'L4',
      'L5',
      'S1'
    ],
    correctAnswer: 2,
    explanation:
      'The L4 dermatome covers the anterior thigh and medial leg down to the medial malleolus; it is supplied peripherally by the femoral and saphenous nerves.'
  },
  {
    id: 'lls2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve root dermatome typically corresponds to the dorsum of the foot and great toe?',
    options: [
      'L3',
      'L4',
      'L5',
      'S1',
      'S2'
    ],
    correctAnswer: 2,
    explanation:
      'The L5 dermatome includes the lateral leg, dorsum of the foot and great toe; peripherally supplied by the deep peroneal nerve and branches of the superficial peroneal nerve.'
  },
  {
    id: 'lls3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve root dermatome typically corresponds to the posterior leg, lateral foot and small toe?',
    options: [
      'L3',
      'L4',
      'L5',
      'S1',
      'S2'
    ],
    correctAnswer: 3,
    explanation:
      'The S1 dermatome covers the posterior calf, lateral foot and small toe; peripherally supplied by the sural nerve and tibial nerve branches.'
  },
  {
    id: 'lls4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve supplies sensation to the medial leg and medial aspect of the foot down to the great toe?',
    options: [
      'Superficial peroneal nerve',
      'Deep peroneal nerve',
      'Saphenous nerve (terminal branch of femoral nerve)',
      'Sural nerve',
      'Obturator nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The saphenous nerve, the longest sensory branch of the femoral nerve, supplies the medial leg and extends to the medial foot, representing L3–L4 fibers.'
  },
  {
    id: 'lls5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve supplies sensation to the lateral leg and dorsum of the foot (except the first web space)?',
    options: [
      'Superficial peroneal (fibular) nerve',
      'Deep peroneal nerve',
      'Saphenous nerve',
      'Sural nerve',
      'Tibial nerve'
    ],
    correctAnswer: 0,
    explanation:
      'The superficial peroneal nerve provides sensation to the lateral leg and most of the dorsum of the foot, except the first web space (deep peroneal territory).'
  },
  {
    id: 'lls6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve supplies sensation to the dorsal first web space between the great toe and second toe?',
    options: [
      'Superficial peroneal nerve',
      'Deep peroneal (fibular) nerve',
      'Saphenous nerve',
      'Sural nerve',
      'Tibial nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The deep peroneal nerve provides a small but clinically important sensory area in the dorsal first web space between the great and second toes.'
  },
  {
    id: 'lls7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which nerve supplies sensation to the lateral aspect of the foot and lateral border of the small toe?',
    options: [
      'Superficial peroneal nerve',
      'Deep peroneal nerve',
      'Saphenous nerve',
      'Sural nerve (formed by tibial and common peroneal contributions)',
      'Obturator nerve'
    ],
    correctAnswer: 3,
    explanation:
      'The sural nerve, formed by medial sural cutaneous (tibial) and lateral sural cutaneous (common peroneal) branches, supplies the lateral foot and heel.'
  },
  {
    id: 'lls8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which combination of sensory loss (dorsum of foot + first web space) suggests deep peroneal nerve or L5 root injury?',
    options: [
      'S1 dermatome only',
      'L5 dermatome (lateral leg, dorsum foot, great toe) versus isolated deep peroneal (only first web space)',
      'L4 dermatome',
      'Saphenous nerve territory',
      'Sural nerve territory'
    ],
    correctAnswer: 1,
    explanation:
      'L5 radiculopathy causes broader dermatomal loss (lateral leg, dorsum foot, great toe) often with back/leg pain; isolated deep peroneal nerve injury causes only first web space numbness.'
  },
  {
    id: 'lls9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which sensory finding helps differentiate sciatic nerve injury from L5–S1 radiculopathy?',
    options: [
      'Sciatic nerve injury spares the medial leg (saphenous/femoral territory); radiculopathy may not',
      'Sciatic nerve injury affects only the medial thigh',
      'They have identical sensory patterns',
      'Sciatic nerve injury has no sensory loss',
      'Radiculopathy never causes sensory loss'
    ],
    correctAnswer: 0,
    explanation:
      'Sciatic nerve lesions cause sensory loss below the knee except the medial leg (saphenous territory); L5 or S1 radiculopathy has dermatomal distribution often with back pain radiating down the leg.'
  },
  {
    id: 'lls10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which dermatome level corresponds to the sole of the foot?',
    options: [
      'L4',
      'L5',
      'S1',
      'S2 (via tibial nerve branches: medial and lateral plantar nerves)',
      'S3'
    ],
    correctAnswer: 3,
    explanation:
      'The sole of the foot is supplied by the medial and lateral plantar nerves (branches of the tibial nerve) carrying S1–S2 fibers, with S2 contribution prominent.'
  }
];
