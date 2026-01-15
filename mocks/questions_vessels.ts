import type { Question } from './questions';

export const lowerLimbArteryQuestions: Question[] = [
  {
    id: 'lla1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'The femoral artery is a continuation of which artery as it passes deep to the inguinal ligament?',
    options: ['Common iliac artery', 'External iliac artery', 'Internal iliac artery', 'Abdominal aorta'],
    correctAnswer: 1,
    explanation: 'The femoral artery is the continuation of the external iliac artery as it passes beneath the inguinal ligament to enter the femoral triangle.',
  },
  {
    id: 'lla2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'At what anatomical landmark does the femoral artery become the popliteal artery?',
    options: [
      'Inguinal ligament',
      'Adductor hiatus (opening in adductor magnus)',
      'Knee joint',
      'Fibular neck'
    ],
    correctAnswer: 1,
    explanation: 'The femoral artery passes through the adductor hiatus (an opening in the adductor magnus tendon) and emerges as the popliteal artery in the popliteal fossa.',
  },
  {
    id: 'lla3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which major branch arises from the femoral artery approximately 4 cm below the inguinal ligament?',
    options: [
      'Deep femoral artery (profunda femoris)',
      'Superficial epigastric artery',
      'Anterior tibial artery',
      'Popliteal artery'
    ],
    correctAnswer: 0,
    explanation: 'The deep femoral artery (profunda femoris) is the largest branch of the femoral artery, arising laterally about 4 cm below the inguinal ligament and supplying the thigh muscles.',
  },
  {
    id: 'lla4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'At what level does the popliteal artery typically bifurcate into its terminal branches?',
    options: [
      'At the knee joint',
      'At the lower border of the popliteus muscle',
      'At the ankle',
      'At the adductor hiatus'
    ],
    correctAnswer: 1,
    explanation: 'The popliteal artery terminates at the lower border of the popliteus muscle by dividing into the anterior tibial artery and the tibioperoneal trunk.',
  },
  {
    id: 'lla5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which artery passes anteriorly through the interosseous membrane to supply the anterior compartment of the leg?',
    options: [
      'Posterior tibial artery',
      'Anterior tibial artery',
      'Peroneal (fibular) artery',
      'Femoral artery'
    ],
    correctAnswer: 1,
    explanation: 'The anterior tibial artery pierces the interosseous membrane to enter the anterior compartment, descending with the deep peroneal nerve to become the dorsalis pedis artery.',
  },
  {
    id: 'lla6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'What is the continuation of the anterior tibial artery on the dorsum of the foot?',
    options: [
      'Plantar arch',
      'Dorsalis pedis artery',
      'Posterior tibial artery',
      'Medial plantar artery'
    ],
    correctAnswer: 1,
    explanation: 'The anterior tibial artery becomes the dorsalis pedis artery as it crosses the ankle joint, running over the dorsum of the foot where its pulse is palpable.',
  },
  {
    id: 'lla7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which artery passes posterior to the medial malleolus with the tibial nerve through the tarsal tunnel?',
    options: [
      'Anterior tibial artery',
      'Dorsalis pedis artery',
      'Posterior tibial artery',
      'Peroneal artery'
    ],
    correctAnswer: 2,
    explanation: 'The posterior tibial artery descends in the deep posterior compartment and passes behind the medial malleolus through the tarsal tunnel, dividing into medial and lateral plantar arteries.',
  },
  {
    id: 'lla8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical scenario is most commonly associated with acute femoral artery occlusion?',
    options: [
      'Thromboembolism causing the "6 Ps": Pain, Pallor, Pulselessness, Paresthesias, Paralysis, Poikilothermia',
      'Gradual claudication only',
      'Asymptomatic presentation',
      'Increased warmth and redness'
    ],
    correctAnswer: 0,
    explanation: 'Acute femoral artery occlusion presents with the classic "6 Ps" indicating limb-threatening ischemia requiring urgent revascularization.',
  },
  {
    id: 'lla9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Where is the femoral pulse best palpated?',
    options: [
      'Lateral to the femoral nerve',
      'At the midinguinal point (halfway between ASIS and pubic symphysis)',
      'Behind the knee',
      'At the ankle'
    ],
    correctAnswer: 1,
    explanation: 'The femoral pulse is palpated at the midinguinal point (halfway between anterior superior iliac spine and pubic symphysis), where the artery lies on the superior pubic ramus.',
  },
  {
    id: 'lla10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which collateral pathway is MOST important in maintaining leg perfusion when the femoral artery is gradually occluded?',
    options: [
      'Direct continuation of the external iliac',
      'Anastomoses between deep femoral branches and popliteal branches (cruciate and geniculate anastomoses)',
      'Dorsalis pedis to plantar arch',
      'No collateral pathways exist'
    ],
    correctAnswer: 1,
    explanation: 'The profunda femoris (deep femoral) branches form rich anastomoses with popliteal and geniculate branches, providing crucial collateral circulation that can maintain limb viability in chronic femoral occlusion.',
  }
];

export const brachialArteryQuestions: Question[] = [
  {
    id: 'b1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'The brachial artery is a direct continuation of which artery?',
    options: ['Subclavian artery', 'Axillary artery', 'Radial artery', 'Ulnar artery'],
    correctAnswer: 1,
    explanation: 'The brachial artery continues distally from the axillary artery at the level of the inferior border of the teres major muscle.',
  },
  {
    id: 'b2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'At approximately which level does the brachial artery terminate by bifurcating into its main branches?',
    options: [
      'At the surgical neck of the humerus',
      'At the midshaft of the humerus',
      'Just distal to the elbow joint in the cubital fossa',
      'At the wrist joint'
    ],
    correctAnswer: 2,
    explanation: 'The brachial artery ends in the region of the cubital fossa, about 1 cm distal to the elbow joint, by dividing into the radial and ulnar arteries.',
  },
  {
    id: 'b3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which best describes the course of the brachial artery in the arm?',
    options: [
      'It runs along the lateral border of the humerus, deep to the biceps brachii',
      'It runs medially in the arm, initially medial to the humerus and then anterior to the elbow joint',
      'It runs posteriorly in the radial groove of the humerus',
      'It passes behind the medial epicondyle of the humerus'
    ],
    correctAnswer: 1,
    explanation: 'The brachial artery descends along the medial aspect of the arm, relatively superficial, and becomes more anterior as it approaches the elbow.',
  },
  {
    id: 'b4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve accompanies the brachial artery most closely in the arm?',
    options: ['Radial nerve', 'Median nerve', 'Ulnar nerve', 'Musculocutaneous nerve'],
    correctAnswer: 1,
    explanation: 'The median nerve typically runs alongside the brachial artery in the arm, crossing from lateral to medial as it descends.',
  },
  {
    id: 'b5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which of the following is a major branch of the brachial artery that accompanies the radial nerve in the radial groove?',
    options: [
      'Superior ulnar collateral artery',
      'Inferior ulnar collateral artery',
      'Deep brachial (profunda brachii) artery',
      'Common interosseous artery'
    ],
    correctAnswer: 2,
    explanation: 'The deep brachial artery is a large posterior branch of the brachial artery and accompanies the radial nerve in the radial (spiral) groove.',
  },
  {
    id: 'b6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which muscular group is primarily supplied by small muscular branches of the brachial artery?',
    options: [
      'Posterior compartment of the arm',
      'Anterior compartment of the arm',
      'Superficial flexors of the forearm',
      'Intrinsic muscles of the hand'
    ],
    correctAnswer: 1,
    explanation: 'Muscular branches of the brachial artery mainly supply the anterior compartment of the arm, including biceps brachii, brachialis, and coracobrachialis.',
  },
  {
    id: 'b7',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'In measuring blood pressure with a sphygmomanometer, the stethoscope is typically placed over which vessel in the cubital fossa?',
    options: [
      'Radial artery',
      'Ulnar artery',
      'Brachial artery',
      'Deep brachial artery'
    ],
    correctAnswer: 2,
    explanation: 'Korotkoff sounds are auscultated over the brachial artery in the cubital fossa when measuring systemic arterial blood pressure.',
  },
  {
    id: 'b8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'A supracondylar fracture of the humerus in a child may compromise blood flow in which artery, risking ischemia of the forearm and hand?',
    options: [
      'Radial artery',
      'Ulnar artery',
      'Brachial artery',
      'Deep brachial artery'
    ],
    correctAnswer: 2,
    explanation: 'The brachial artery lies anterior to the distal humerus and is vulnerable in supracondylar fractures, potentially leading to ischemic injury (e.g. Volkmann ischemic contracture).',
  },
  {
    id: 'b9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Collateral branches from the brachial artery (such as superior and inferior ulnar collateral arteries) mainly participate in anastomoses around which joint?',
    options: [
      'Shoulder joint',
      'Elbow joint',
      'Wrist joint',
      'Metacarpophalangeal joints'
    ],
    correctAnswer: 1,
    explanation: 'The superior and inferior ulnar collateral arteries contribute to the rich anastomotic network around the elbow, maintaining blood flow during joint movement or arterial occlusion.',
  },
  {
    id: 'b10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'An unusually high division of the brachial artery into radial and ulnar branches in the arm is an example of:',
    options: [
      'A normal finding with no clinical significance',
      'An anatomical variation that may complicate cannulation or surgery',
      'A sign of congenital heart disease',
      'A traumatic pseudoaneurysm of the artery'
    ],
    correctAnswer: 1,
    explanation: 'High bifurcation of the brachial artery is a recognized anatomical variation and can affect procedures such as arterial cannulation or flap surgery.',
  }
];
