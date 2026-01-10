import type { Question } from './questions';

// ============================================================================
// PELVIC VESSELS QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Vasele genitale (genitalVesselsQuestions)
// 2. Vasele iliace interne (internalIliacVesselsQuestions)
// ============================================================================

// 1. Genital Vessels
export const genitalVesselsQuestions: Question[] = [
  {
    id: 'genital-vessels-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the gonadal (testicular/ovarian) artery originate?',
    options: ['Internal iliac artery', 'Abdominal aorta at L2 level', 'External iliac artery', 'Common iliac artery'],
    correctAnswer: 1,
    explanation: 'The gonadal arteries (testicular in males, ovarian in females) arise from the anterior surface of the abdominal aorta at L2 level, reflecting the embryological origin of the gonads near the kidneys.'
  },
  {
    id: 'genital-vessels-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the course of the testicular artery?',
    options: ['Short course in pelvis', 'Descends retroperitoneally, crosses ureter anteriorly, enters inguinal canal in spermatic cord', 'Through femoral canal', 'Along external iliac vessels'],
    correctAnswer: 1,
    explanation: 'The testicular artery descends retroperitoneally on psoas major, crosses anterior to the ureter, and enters the inguinal canal as part of the spermatic cord to supply the testis.'
  },
  {
    id: 'genital-vessels-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the course of the ovarian artery?',
    options: ['Through inguinal canal', 'Descends retroperitoneally, crosses ureter, enters pelvis in suspensory ligament', 'Directly to ovary', 'Through broad ligament only'],
    correctAnswer: 1,
    explanation: 'The ovarian artery descends retroperitoneally, crosses the ureter and external iliac vessels, and enters the pelvis in the suspensory (infundibulopelvic) ligament to reach the ovary.'
  },
  {
    id: 'genital-vessels-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where does the left gonadal vein drain?',
    options: ['Directly into IVC', 'Into left renal vein', 'Into common iliac vein', 'Into internal iliac vein'],
    correctAnswer: 1,
    explanation: 'The left gonadal vein drains into the left renal vein (perpendicular entry), while the right gonadal vein drains directly into the IVC. This explains higher left varicocele incidence.'
  },
  {
    id: 'genital-vessels-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the uterine artery and its origin?',
    options: ['Branch of aorta', 'Branch of internal iliac (or anterior division) supplying the uterus', 'Branch of external iliac', 'Branch of ovarian artery'],
    correctAnswer: 1,
    explanation: 'The uterine artery is a branch of the internal iliac artery (usually from anterior division). It is the main blood supply to the uterus and has important anastomoses with ovarian and vaginal arteries.'
  },
  {
    id: 'genital-vessels-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the course of the uterine artery in relation to the ureter?',
    options: ['Ureter is anterior to artery', 'Uterine artery crosses over (anterior to) ureter about 2cm lateral to cervix', 'No relationship', 'They run parallel'],
    correctAnswer: 1,
    explanation: 'The uterine artery crosses over (anterior to) the ureter approximately 2 cm lateral to the cervix. "Water (ureter) under the bridge (uterine artery)" - important during hysterectomy to avoid ureteral injury.'
  },
  {
    id: 'genital-vessels-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What does the uterine artery supply?',
    options: ['Only uterus', 'Uterus, cervix, upper vagina, medial tube and ovary (via anastomoses)', 'Only ovary', 'Only vagina'],
    correctAnswer: 1,
    explanation: 'The uterine artery supplies the uterus, cervix, upper vagina, and part of the uterine tube. It anastomoses with ovarian artery (in broad ligament) and vaginal arteries.'
  },
  {
    id: 'genital-vessels-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the vaginal artery?',
    options: ['Branch of aorta', 'Branch of internal iliac (or uterine artery) corresponding to inferior vesical in males', 'Branch of external iliac', 'Branch of femoral'],
    correctAnswer: 1,
    explanation: 'The vaginal artery is a branch of the internal iliac artery (may arise from uterine artery) supplying the vagina and bladder base. It is homologous to the inferior vesical artery in males.'
  },
  {
    id: 'genital-vessels-9',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What forms the azygos arteries of the vagina?',
    options: ['Single midline vessel', 'Longitudinal anastomoses of vaginal, uterine, and middle rectal arteries on vaginal walls', 'Branches of aorta', 'External iliac branches'],
    correctAnswer: 1,
    explanation: 'The azygos arteries of the vagina are longitudinal anastomotic channels on the anterior and posterior vaginal walls, formed by branches of vaginal, uterine, internal pudendal, and middle rectal arteries.'
  },
  {
    id: 'genital-vessels-10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the prostatic venous plexus?',
    options: ['Arterial network', 'Venous plexus around prostate draining to internal iliac vein; connects to vertebral venous plexus', 'Lymphatic network', 'Nerve plexus'],
    correctAnswer: 1,
    explanation: 'The prostatic venous plexus surrounds the prostate, receiving the deep dorsal vein of the penis. It drains to internal iliac veins and connects to the vertebral venous plexus (Batson plexus) - route for prostate cancer metastasis to spine.'
  }
];

// 2. Internal Iliac Vessels
export const internalIliacVesselsQuestions: Question[] = [
  {
    id: 'internal-iliac-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the internal iliac artery originate?',
    options: ['From aorta directly', 'From common iliac artery bifurcation at SI joint level', 'From external iliac', 'From femoral artery'],
    correctAnswer: 1,
    explanation: 'The internal iliac artery originates from the common iliac artery bifurcation at the level of the sacroiliac joint (L5-S1). It descends into the pelvis to supply pelvic viscera, walls, perineum, and gluteal region.'
  },
  {
    id: 'internal-iliac-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the divisions of the internal iliac artery?',
    options: ['Superior and inferior', 'Anterior (mainly visceral) and posterior (mainly parietal) divisions', 'Medial and lateral', 'Right and left'],
    correctAnswer: 1,
    explanation: 'The internal iliac artery divides into anterior division (mainly visceral branches to pelvic organs) and posterior division (mainly parietal branches to pelvic walls and gluteal region).'
  },
  {
    id: 'internal-iliac-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the branches of the posterior division of the internal iliac artery?',
    options: ['Uterine and vaginal', 'Iliolumbar, lateral sacral, and superior gluteal arteries', 'Internal pudendal', 'Obturator'],
    correctAnswer: 1,
    explanation: 'The posterior division gives three branches: iliolumbar artery (to iliacus and psoas), lateral sacral arteries (to sacral canal), and superior gluteal artery (largest branch, to gluteal muscles).'
  },
  {
    id: 'internal-iliac-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the branches of the anterior division in males?',
    options: ['Only obturator', 'Umbilical, obturator, inferior vesical, middle rectal, internal pudendal, inferior gluteal', 'Only internal pudendal', 'Only inferior vesical'],
    correctAnswer: 1,
    explanation: 'In males, anterior division branches: umbilical (gives superior vesical), obturator, inferior vesical (also supplies prostate and seminal vesicles), middle rectal, internal pudendal, and inferior gluteal arteries.'
  },
  {
    id: 'internal-iliac-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What additional branch does the anterior division have in females?',
    options: ['Testicular artery', 'Uterine and vaginal arteries (instead of inferior vesical)', 'Prostatic artery', 'Cremasteric artery'],
    correctAnswer: 1,
    explanation: 'In females, the anterior division includes uterine and vaginal arteries instead of the inferior vesical artery. The vaginal artery is homologous to the inferior vesical artery in males.'
  },
  {
    id: 'internal-iliac-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the superior gluteal artery and its course?',
    options: ['Smallest branch', 'Largest branch of internal iliac; exits pelvis through greater sciatic foramen above piriformis', 'Exits through lesser sciatic foramen', 'Remains in pelvis'],
    correctAnswer: 1,
    explanation: 'The superior gluteal artery is the largest branch of the internal iliac (continuation of posterior division). It exits the pelvis through the greater sciatic foramen above the piriformis to supply gluteus medius and minimus.'
  },
  {
    id: 'internal-iliac-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the course of the internal pudendal artery?',
    options: ['Remains in pelvis', 'Exits greater sciatic foramen, crosses ischial spine, enters perineum through lesser sciatic foramen', 'Goes through obturator canal', 'Descends along femur'],
    correctAnswer: 1,
    explanation: 'The internal pudendal artery exits the pelvis through the greater sciatic foramen (below piriformis), hooks around the ischial spine, and enters the perineum through the lesser sciatic foramen to supply perineal structures.'
  },
  {
    id: 'internal-iliac-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What does the internal pudendal artery supply?',
    options: ['Only gluteal muscles', 'Perineum, external genitalia, anal canal below pectinate line', 'Only rectum', 'Only bladder'],
    correctAnswer: 1,
    explanation: 'The internal pudendal artery supplies the perineum (ischioanal fossa, deep and superficial perineal pouches), external genitalia (penis/clitoris, scrotum/labia), and anal canal below the pectinate line.'
  },
  {
    id: 'internal-iliac-9',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the obturator artery and its course?',
    options: ['Goes through inguinal canal', 'Passes through obturator canal with obturator nerve to medial thigh', 'Remains in pelvis', 'Goes to gluteal region'],
    correctAnswer: 1,
    explanation: 'The obturator artery runs along the lateral pelvic wall and passes through the obturator canal (in obturator membrane) with the obturator nerve to supply the medial thigh compartment.'
  },
  {
    id: 'internal-iliac-10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the aberrant obturator artery and its clinical significance?',
    options: ['Normal variant with no significance', 'Obturator artery arising from external iliac/inferior epigastric; at risk during hernia repair', 'Extra obturator artery', 'Absent obturator artery'],
    correctAnswer: 1,
    explanation: 'An aberrant (accessory) obturator artery arises from the external iliac or inferior epigastric artery (20-30% of people) and descends near the femoral ring. It is at risk of injury during femoral hernia repair.'
  },
  {
    id: 'internal-iliac-11',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the internal iliac vein formed by?',
    options: ['Single tributary', 'Union of tributaries corresponding to branches of internal iliac artery', 'From external iliac vein', 'From femoral vein'],
    correctAnswer: 1,
    explanation: 'The internal iliac vein is formed by tributaries that correspond to the branches of the internal iliac artery. It joins the external iliac vein to form the common iliac vein.'
  },
  {
    id: 'internal-iliac-12',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What venous plexuses drain into the internal iliac vein?',
    options: ['No plexuses', 'Vesical, prostatic/uterovaginal, and rectal venous plexuses', 'Only pampiniform plexus', 'Only hemorrhoidal plexus'],
    correctAnswer: 1,
    explanation: 'Major venous plexuses draining to internal iliac vein: vesical plexus (around bladder), prostatic plexus (males) or uterovaginal plexus (females), and rectal plexus (including middle rectal veins).'
  }
];

// Combine all pelvic vessels questions for easy import
export const pelvicVesselsQuestions: Question[] = [
  ...genitalVesselsQuestions,
  ...internalIliacVesselsQuestions
];
