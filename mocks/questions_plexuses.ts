import type { Question } from './questions';

export const brachialPlexusQuestions: Question[] = [
  {
    id: 'bp1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve roots contribute to the brachial plexus?',
    options: [
      'C1–C2–C3–C4–C5',
      'C5–C6–C7–C8–T1 (with contributions from C4 and T2)',
      'T1–T2–T3–T4–T5',
      'L1–L2–L3–L4–L5',
      'C3–C4–C5 only'
    ],
    correctAnswer: 1,
    explanation:
      'The brachial plexus is formed primarily by the ventral rami of C5, C6, C7, C8 and T1, with variable contributions from C4 (prefixed) and T2 (postfixed).'
  },
  {
    id: 'bp2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which anatomical structures does the brachial plexus pass between as it exits the neck?',
    options: [
      'Between the clavicle and first rib',
      'Between anterior and middle scalene muscles',
      'Through the carpal tunnel',
      'Through the obturator foramen',
      'Between pectoralis major and minor'
    ],
    correctAnswer: 1,
    explanation:
      'The roots of the brachial plexus emerge between the anterior and middle scalene muscles in the posterior triangle of the neck.'
  },
  {
    id: 'bp3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which sequence correctly describes the organizational structure of the brachial plexus from proximal to distal?',
    options: [
      'Roots → divisions → trunks → cords → terminal branches',
      'Roots → trunks → divisions → cords → terminal branches',
      'Trunks → roots → cords → divisions → terminal branches',
      'Cords → trunks → roots → divisions → terminal branches',
      'Divisions → roots → trunks → cords → terminal branches'
    ],
    correctAnswer: 1,
    explanation:
      'The brachial plexus is organized as: Roots (C5–T1) → Trunks (superior, middle, inferior) → Divisions (anterior, posterior) → Cords (lateral, medial, posterior) → Terminal branches (nerves).'
  },
  {
    id: 'bp4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which three trunks are formed by the nerve roots of the brachial plexus?',
    options: [
      'Anterior, middle and posterior trunks',
      'Superior (C5+C6), middle (C7) and inferior (C8+T1) trunks',
      'Medial, lateral and posterior trunks',
      'Upper, lower and central trunks',
      'Dorsal, ventral and intermediate trunks'
    ],
    correctAnswer: 1,
    explanation:
      'The superior trunk is formed by C5+C6, the middle trunk by C7 alone, and the inferior trunk by C8+T1.'
  },
  {
    id: 'bp5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which three cords are formed from the divisions of the brachial plexus and how are they named?',
    options: [
      'Superior, middle and inferior cords',
      'Lateral, medial and posterior cords (named by relationship to the axillary artery)',
      'Anterior, middle and posterior cords',
      'Radial, median and ulnar cords',
      'Proximal, intermediate and distal cords'
    ],
    correctAnswer: 1,
    explanation:
      'The three cords—lateral (from anterior divisions of superior/middle trunks), medial (from anterior division of inferior trunk) and posterior (from all three posterior divisions)—are named by their position relative to the axillary artery.'
  },
  {
    id: 'bp6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which major terminal nerves arise from the lateral cord?',
    options: [
      'Radial and axillary nerves',
      'Musculocutaneous nerve and lateral contribution to median nerve',
      'Ulnar and medial cutaneous nerves',
      'Long thoracic and dorsal scapular nerves',
      'Suprascapular and subscapular nerves'
    ],
    correctAnswer: 1,
    explanation:
      'The lateral cord gives rise to the musculocutaneous nerve and the lateral root of the median nerve (C5–C6–C7 fibers).'
  },
  {
    id: 'bp7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which major terminal nerves arise from the posterior cord?',
    options: [
      'Median and ulnar nerves',
      'Musculocutaneous and median nerves',
      'Axillary and radial nerves',
      'Long thoracic and phrenic nerves',
      'Obturator and femoral nerves'
    ],
    correctAnswer: 2,
    explanation:
      'The posterior cord gives rise to the axillary nerve (C5–C6) and radial nerve (C5–C8, T1), as well as the upper and lower subscapular and thoracodorsal nerves.'
  },
  {
    id: 'bp8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which major terminal nerves arise from the medial cord?',
    options: [
      'Radial and axillary nerves',
      'Musculocutaneous and lateral pectoral nerves',
      'Ulnar nerve and medial contribution to median nerve, plus medial cutaneous nerves of arm and forearm',
      'Suprascapular and long thoracic nerves',
      'Femoral and obturator nerves'
    ],
    correctAnswer: 2,
    explanation:
      'The medial cord gives rise to the ulnar nerve, the medial root of the median nerve (C8–T1 fibers), medial pectoral nerve, and medial cutaneous nerves of the arm and forearm.'
  },
  {
    id: 'bp9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical presentation is characteristic of an upper trunk (Erb-Duchenne) brachial plexus injury affecting C5–C6?',
    options: [
      'Claw hand and loss of intrinsic hand muscles',
      '"Waiter\'s tip" position: shoulder adducted/internally rotated, elbow extended, forearm pronated, with loss of shoulder abduction and elbow flexion',
      'Wrist drop and loss of finger extension',
      'Complete arm and hand paralysis',
      'Isolated finger flexion weakness'
    ],
    correctAnswer: 1,
    explanation:
      'Upper trunk (Erb) palsy affects C5–C6, causing loss of deltoid, biceps, brachialis and spinati, resulting in the "waiter\'s tip" posture with inability to abduct shoulder or flex elbow.'
  },
  {
    id: 'bp10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical presentation is characteristic of a lower trunk (Klumpke) brachial plexus injury affecting C8–T1?',
    options: [
      'Loss of shoulder abduction and elbow flexion',
      'Claw hand with intrinsic muscle atrophy, weak finger flexion and Horner syndrome (if T1 involved)',
      'Wrist drop',
      'Loss of all arm movements',
      'Foot drop'
    ],
    correctAnswer: 1,
    explanation:
      'Lower trunk (Klumpke) palsy affects C8–T1, causing intrinsic hand muscle paralysis (claw hand), weak long finger flexors and potential Horner syndrome from sympathetic fiber injury.'
  }
];

export const lumbarPlexusQuestions: Question[] = [
  {
    id: 'lp1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve roots contribute to the lumbar plexus?',
    options: [
      'T12–L1–L2–L3',
      'L1–L2–L3–L4 (with contribution from T12)',
      'L4–L5–S1–S2',
      'S1–S2–S3–S4',
      'L5–S1–S2'
    ],
    correctAnswer: 1,
    explanation:
      'The lumbar plexus is formed by the ventral rami of L1, L2, L3 and L4, often with a contribution from the subcostal nerve (T12).'
  },
  {
    id: 'lp2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Within which muscle does the lumbar plexus primarily form?',
    options: [
      'Quadratus lumborum',
      'Psoas major',
      'Iliacus',
      'Gluteus maximus',
      'Rectus abdominis'
    ],
    correctAnswer: 1,
    explanation:
      'The lumbar plexus forms within the substance of the psoas major muscle in the posterior abdominal wall.'
  },
  {
    id: 'lp3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which major terminal nerves arise from the lumbar plexus?',
    options: [
      'Sciatic, tibial and common peroneal nerves',
      'Femoral, obturator, lateral femoral cutaneous and genitofemoral nerves',
      'Superior and inferior gluteal nerves',
      'Median, ulnar and radial nerves',
      'Pudendal and posterior femoral cutaneous nerves'
    ],
    correctAnswer: 1,
    explanation:
      'The main branches of the lumbar plexus are the femoral nerve (L2–L4), obturator nerve (L2–L4), lateral femoral cutaneous nerve and genitofemoral nerve.'
  },
  {
    id: 'lp4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve from the lumbar plexus innervates the quadriceps femoris?',
    options: [
      'Obturator nerve',
      'Femoral nerve',
      'Sciatic nerve',
      'Genitofemoral nerve',
      'Lateral femoral cutaneous nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The femoral nerve (L2–L4) is the largest branch of the lumbar plexus and innervates the quadriceps femoris, iliopsoas, sartorius and pectineus.'
  },
  {
    id: 'lp5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerve from the lumbar plexus innervates the hip adductor muscles?',
    options: [
      'Femoral nerve',
      'Obturator nerve',
      'Sciatic nerve',
      'Lateral femoral cutaneous nerve',
      'Ilioinguinal nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The obturator nerve (L2–L4) passes through the obturator foramen and innervates most of the medial thigh adductor muscles.'
  },
  {
    id: 'lp6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which purely sensory nerve from the lumbar plexus supplies the anterolateral thigh?',
    options: [
      'Femoral nerve',
      'Obturator nerve',
      'Lateral femoral cutaneous nerve',
      'Genitofemoral nerve',
      'Iliohypogastric nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The lateral femoral cutaneous nerve (L2–L3) is a purely sensory nerve that supplies the lateral and anterolateral thigh; compression under the inguinal ligament causes meralgia paresthetica.'
  },
  {
    id: 'lp7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which collateral branches arise from the lumbar plexus before the main terminal nerves?',
    options: [
      'No collateral branches exist',
      'Iliohypogastric, ilioinguinal and genitofemoral nerves (from upper lumbar roots)',
      'Only the sciatic nerve',
      'Only cutaneous branches',
      'Superior and inferior gluteal nerves'
    ],
    correctAnswer: 1,
    explanation:
      'Collateral branches include the iliohypogastric nerve (T12–L1), ilioinguinal nerve (L1) and genitofemoral nerve (L1–L2), which supply the lower abdominal wall, inguinal region and genitalia.'
  },
  {
    id: 'lp8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which anatomical relationship is clinically important for lumbar plexus blocks?',
    options: [
      'The plexus is superficial and easily accessible',
      'The plexus lies within the psoas major muscle, requiring posterior approach or ultrasound guidance',
      'The plexus is entirely within the spinal canal',
      'The plexus has no clinical access points',
      'The plexus is anterior to the peritoneum'
    ],
    correctAnswer: 1,
    explanation:
      'Because the lumbar plexus forms deep within the psoas muscle, regional anesthesia requires a posterior (psoas compartment) approach or ultrasound/fluoroscopic guidance.'
  },
  {
    id: 'lp9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which nerve roots contribute to BOTH the lumbar plexus and sacral plexus (lumbosacral trunk)?',
    options: [
      'L1 and L2',
      'L4 and L5',
      'L2 and L3',
      'S1 and S2',
      'T12 and L1'
    ],
    correctAnswer: 1,
    explanation:
      'The L4 and L5 nerve roots contribute to both plexuses; part of L4 joins the lumbar plexus (femoral/obturator), while L4–L5 form the lumbosacral trunk that joins the sacral plexus to form the sciatic nerve.'
  },
  {
    id: 'lp10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical presentation would suggest a lumbar plexus lesion affecting multiple nerves?',
    options: [
      'Isolated foot drop',
      'Combined loss of knee extension (femoral) and hip adduction (obturator) with sensory loss over anterior and medial thigh',
      'Isolated loss of ankle plantarflexion',
      'Only hip extension weakness',
      'Claw hand deformity'
    ],
    correctAnswer: 1,
    explanation:
      'Lumbar plexus injury (e.g., from psoas hematoma, retroperitoneal tumor) affects both femoral and obturator nerves, causing quadriceps paralysis, weak hip adduction and sensory deficits in their territories.'
  }
];

export const sacralPlexusQuestions: Question[] = [
  {
    id: 'sp1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which nerve roots contribute to the sacral plexus?',
    options: [
      'L1–L2–L3',
      'L4–L5–S1–S2–S3 (with contributions from S4)',
      'S3–S4–S5–Co1',
      'T12–L1–L2',
      'L2–L3–L4 only'
    ],
    correctAnswer: 1,
    explanation:
      'The sacral plexus is formed by the lumbosacral trunk (L4–L5) and the ventral rami of S1, S2 and S3, with contributions from S4.'
  },
  {
    id: 'sp2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Where does the sacral plexus primarily form?',
    options: [
      'Within the psoas major muscle',
      'On the anterior surface of the piriformis muscle in the pelvis',
      'In the popliteal fossa',
      'Within the gluteus maximus',
      'In the thigh'
    ],
    correctAnswer: 1,
    explanation:
      'The sacral plexus forms on the anterior surface of the piriformis muscle within the pelvis, anterior to the sacrum.'
  },
  {
    id: 'sp3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which is the largest nerve arising from the sacral plexus?',
    options: [
      'Femoral nerve',
      'Obturator nerve',
      'Sciatic nerve',
      'Pudendal nerve',
      'Superior gluteal nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The sciatic nerve (L4–L5–S1–S2–S3) is the largest nerve in the body and the main terminal branch of the sacral plexus.'
  },
  {
    id: 'sp4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which nerves from the sacral plexus innervate the gluteal muscles?',
    options: [
      'Femoral and obturator nerves',
      'Superior gluteal nerve (gluteus medius/minimus/TFL) and inferior gluteal nerve (gluteus maximus)',
      'Sciatic nerve only',
      'Pudendal nerve',
      'Posterior femoral cutaneous nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The superior gluteal nerve (L4–L5–S1) innervates gluteus medius, gluteus minimus and tensor fasciae latae; the inferior gluteal nerve (L5–S1–S2) innervates gluteus maximus.'
  },
  {
    id: 'sp5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which branches of the sacral plexus are considered intrapelvic (do not leave the pelvis)?',
    options: [
      'Sciatic and pudendal nerves',
      'Nerve to piriformis, nerve to obturator internus and pelvic splanchnic nerves (parasympathetic)',
      'Superior and inferior gluteal nerves',
      'Posterior femoral cutaneous nerve',
      'All sacral branches exit the pelvis'
    ],
    correctAnswer: 1,
    explanation:
      'Intrapelvic branches include nerves to piriformis, obturator internus, levator ani and the pelvic splanchnic nerves (S2–S4 parasympathetic to pelvic viscera).'
  },
  {
    id: 'sp6',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which branches of the sacral plexus are extrapelvic (leave the pelvis through the greater sciatic foramen)?',
    options: [
      'Only the sciatic nerve',
      'Sciatic, superior and inferior gluteal, pudendal, posterior femoral cutaneous and nerve to quadratus femoris nerves',
      'Only pelvic splanchnic nerves',
      'Femoral and obturator nerves',
      'No branches exit the pelvis'
    ],
    correctAnswer: 1,
    explanation:
      'Extrapelvic branches exit via the greater sciatic foramen and include the sciatic, gluteal nerves, pudendal (re-enters via lesser sciatic foramen), posterior femoral cutaneous and nerves to lateral rotators.'
  },
  {
    id: 'sp7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which nerve from the sacral plexus provides motor innervation to the perineum and external anal and urethral sphincters?',
    options: [
      'Sciatic nerve',
      'Superior gluteal nerve',
      'Pudendal nerve (S2–S3–S4)',
      'Posterior femoral cutaneous nerve',
      'Inferior gluteal nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The pudendal nerve (S2–S4) exits the pelvis, loops around the ischial spine through the pudendal (Alcock) canal and supplies motor innervation to perineal muscles and external sphincters, plus sensory to the perineum.'
  },
  {
    id: 'sp8',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical sign indicates injury to the superior gluteal nerve from the sacral plexus?',
    options: [
      'Foot drop',
      'Trendelenburg sign (pelvic drop on unsupported side during single-leg stance)',
      'Loss of knee extension',
      'Claw hand',
      'Loss of ankle plantarflexion'
    ],
    correctAnswer: 1,
    explanation:
      'Superior gluteal nerve injury paralyzes gluteus medius and minimus (hip abductors), causing a positive Trendelenburg sign and Trendelenburg (lurching) gait.'
  },
  {
    id: 'sp9',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which nerve roots contribute to the pelvic splanchnic nerves (nervi erigentes) for parasympathetic innervation?',
    options: [
      'L4–L5',
      'S2–S3–S4',
      'S1–S2',
      'L1–L2',
      'Coccygeal nerves only'
    ],
    correctAnswer: 1,
    explanation:
      'The pelvic splanchnic nerves arise from S2, S3 and S4 ventral rami and provide parasympathetic innervation to pelvic viscera (bladder, rectum, reproductive organs) and distal colon.'
  },
  {
    id: 'sp10',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which clinical presentation would suggest a sacral plexus lesion affecting multiple nerves?',
    options: [
      'Isolated quadriceps weakness',
      'Combined sciatic nerve deficit (foot drop, loss of plantarflexion), gluteal weakness (Trendelenburg) and possible bowel/bladder/sexual dysfunction',
      'Pure sensory loss in the hand',
      'Isolated hip adduction weakness',
      'No clinical deficits'
    ],
    correctAnswer: 1,
    explanation:
      'Sacral plexus injury (e.g., from pelvic fracture, tumor, surgery) can affect the sciatic, gluteal and autonomic branches, causing leg/foot weakness, hip abductor weakness and pelvic visceral dysfunction.'
  }
];

export const sensoryInnervationQuestions: Question[] = [];
