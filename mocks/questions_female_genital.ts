import type { Question } from './questions';

// ============================================================================
// FEMALE GENITAL SYSTEM QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Ovarul (ovaryQuestions)
// 2. Trompa uterina (uterineTubeQuestions)
// 3. Uterul – raporturi și mijloace de susținere (uterusQuestions)
// 4. Ligamentele largi (broadLigamentsQuestions)
// 5. Vaginul (vaginaQuestions)
// 6. Vulva (vulvaQuestions)
// 7. Glandele bulbo-vaginale și bulbo-uretrale (bulboVaginalUrethralGlandsQuestions)
// ============================================================================

// 1. Ovary
export const ovaryQuestions: Question[] = [
  {
    id: 'ovary-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where are the ovaries located?',
    options: ['In the abdominal cavity', 'In the ovarian fossa on lateral pelvic wall', 'Anterior to bladder', 'In the inguinal canal'],
    correctAnswer: 1,
    explanation: 'The ovaries are located in the ovarian fossa on the lateral pelvic wall, bounded by the external iliac vessels superiorly and the internal iliac vessels and ureter posteriorly.'
  },
  {
    id: 'ovary-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the size of a normal adult ovary?',
    options: ['1 x 1 x 1 cm', '3 x 1.5 x 1 cm (almond-sized)', '5 x 3 x 2 cm', '8 x 4 x 3 cm'],
    correctAnswer: 1,
    explanation: 'A normal adult ovary is approximately 3 cm long, 1.5 cm wide, and 1 cm thick (almond-sized), weighing 5-8 grams. Size varies with age and hormonal status.'
  },
  {
    id: 'ovary-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What ligaments attach to the ovary?',
    options: ['Round ligament only', 'Suspensory ligament (infundibulopelvic), ovarian ligament, and mesovarium', 'Broad ligament only', 'Uterosacral ligament'],
    correctAnswer: 1,
    explanation: 'The ovary is attached by: suspensory ligament (infundibulopelvic, carries ovarian vessels), ovarian ligament (to uterus), and mesovarium (posterior leaf of broad ligament).'
  },
  {
    id: 'ovary-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the blood supply of the ovary?',
    options: ['Internal iliac artery only', 'Ovarian artery (from aorta at L2) and ovarian branch of uterine artery', 'External iliac artery', 'Pudendal artery'],
    correctAnswer: 1,
    explanation: 'The ovary receives dual blood supply: the ovarian artery (from abdominal aorta at L2, through suspensory ligament) and the ovarian branch of the uterine artery (anastomoses with ovarian).'
  },
  {
    id: 'ovary-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where do ovarian lymphatics drain?',
    options: ['Inguinal nodes', 'Para-aortic (lumbar) lymph nodes at L2 level', 'Pelvic nodes only', 'Axillary nodes'],
    correctAnswer: 1,
    explanation: 'Ovarian lymphatics drain primarily to para-aortic (lumbar) nodes at L2 level, following the ovarian vessels. This is important for ovarian cancer staging and differs from uterine drainage.'
  },
  {
    id: 'ovary-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the surface epithelium of the ovary?',
    options: ['Stratified squamous', 'Simple cuboidal (germinal epithelium) continuous with peritoneum', 'Pseudostratified columnar', 'Transitional'],
    correctAnswer: 1,
    explanation: 'The ovarian surface is covered by simple cuboidal epithelium (germinal epithelium), continuous with the peritoneum at the mesovarium. Most ovarian cancers arise from this epithelium.'
  },
  {
    id: 'ovary-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the ovary to the ureter?',
    options: ['No relationship', 'Ureter lies posterior to ovary in ovarian fossa', 'Ureter is anterior', 'Ureter passes through ovary'],
    correctAnswer: 1,
    explanation: 'The ureter lies posterior to the ovary in the ovarian fossa, along with the internal iliac vessels. This relationship is important during ovarian surgery to avoid ureteral injury.'
  },
  {
    id: 'ovary-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the suspensory ligament (infundibulopelvic ligament)?',
    options: ['Supports the uterus', 'Connects ovary to pelvic wall; contains ovarian vessels, nerves, lymphatics', 'Connects ovary to uterus', 'Part of broad ligament'],
    correctAnswer: 1,
    explanation: 'The suspensory ligament (infundibulopelvic ligament) extends from the ovary and tubal fimbria to the pelvic wall, containing the ovarian vessels, nerves, and lymphatics.'
  },
  {
    id: 'ovary-9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the ovarian ligament (proper ovarian ligament)?',
    options: ['Connects ovary to pelvic wall', 'Connects medial pole of ovary to uterus below uterine tube', 'Contains ovarian vessels', 'Supports the bladder'],
    correctAnswer: 1,
    explanation: 'The ovarian ligament (proper ovarian ligament) connects the medial pole of the ovary to the uterus, attaching below the uterine tube attachment. It is a remnant of the gubernaculum.'
  },
  {
    id: 'ovary-10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How do ovarian cysts cause pain?',
    options: ['Direct nerve compression', 'Stretching of ovarian capsule, torsion, or rupture with peritoneal irritation', 'Urinary obstruction', 'Bowel obstruction'],
    correctAnswer: 1,
    explanation: 'Ovarian cysts cause pain through stretching of the ovarian capsule, torsion (twisting) of the ovary on its pedicle compromising blood supply, or rupture causing peritoneal irritation.'
  }
];

// 2. Uterine Tube (Fallopian Tube)
export const uterineTubeQuestions: Question[] = [
  {
    id: 'uterine-tube-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the four parts of the uterine tube from lateral to medial?',
    options: ['Only three parts', 'Infundibulum, ampulla, isthmus, intramural (uterine) part', 'Two parts only', 'Five parts'],
    correctAnswer: 1,
    explanation: 'The uterine tube has four parts (lateral to medial): infundibulum (funnel with fimbriae), ampulla (widest, fertilization site), isthmus (narrow), and intramural/uterine part (through uterine wall).'
  },
  {
    id: 'uterine-tube-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the function of the fimbriae?',
    options: ['Sperm storage', 'Finger-like projections that sweep ovum from ovarian surface into tube', 'Hormone production', 'Mucus secretion'],
    correctAnswer: 1,
    explanation: 'The fimbriae are finger-like projections at the infundibulum. The longest (ovarian fimbria) attaches to the ovary. They sweep the released ovum from the ovarian surface into the tube.'
  },
  {
    id: 'uterine-tube-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does fertilization normally occur?',
    options: ['Uterus', 'Ampulla of the uterine tube', 'Isthmus', 'Infundibulum'],
    correctAnswer: 1,
    explanation: 'Fertilization normally occurs in the ampulla of the uterine tube, the widest portion located in the lateral third of the tube.'
  },
  {
    id: 'uterine-tube-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the blood supply of the uterine tube?',
    options: ['Ovarian artery only', 'Tubal branches from both uterine artery (medial) and ovarian artery (lateral)', 'Internal iliac only', 'External iliac'],
    correctAnswer: 1,
    explanation: 'The uterine tube receives dual blood supply: tubal branches from the uterine artery (medially) and tubal branches from the ovarian artery (laterally), anastomosing in the mesosalpinx.'
  },
  {
    id: 'uterine-tube-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the length of the uterine tube?',
    options: ['5 cm', '10 cm', '20 cm', '30 cm'],
    correctAnswer: 1,
    explanation: 'The uterine tube is approximately 10 cm (4 inches) long, extending from the uterus to the ovary in the upper margin of the broad ligament.'
  },
  {
    id: 'uterine-tube-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is an ectopic pregnancy and its most common site?',
    options: ['Pregnancy in uterus', 'Implantation outside uterus; most commonly in ampulla of uterine tube', 'Pregnancy in cervix', 'Pregnancy in ovary'],
    correctAnswer: 1,
    explanation: 'Ectopic pregnancy is implantation outside the uterine cavity. About 95% occur in the uterine tube (tubal pregnancy), most commonly in the ampulla (70%). It is a surgical emergency if ruptured.'
  },
  {
    id: 'uterine-tube-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the mesosalpinx?',
    options: ['Muscle layer of tube', 'Part of broad ligament that suspends the uterine tube', 'Tubal lumen', 'Fimbria'],
    correctAnswer: 1,
    explanation: 'The mesosalpinx is the part of the broad ligament that suspends the uterine tube. It contains the tubal blood vessels and nerves and forms the upper margin of the broad ligament.'
  },
  {
    id: 'uterine-tube-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What type of epithelium lines the uterine tube?',
    options: ['Stratified squamous', 'Ciliated columnar with secretory cells', 'Simple cuboidal', 'Transitional'],
    correctAnswer: 1,
    explanation: 'The uterine tube is lined by ciliated columnar epithelium with non-ciliated secretory (peg) cells. Ciliary action and muscular contractions transport the ovum toward the uterus.'
  }
];

// 3. Uterus: Relations and Support Mechanisms
export const uterusQuestions: Question[] = [
  {
    id: 'uterus-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the parts of the uterus?',
    options: ['Body only', 'Fundus, body, isthmus, and cervix', 'Two parts', 'Three parts'],
    correctAnswer: 1,
    explanation: 'The uterus has four parts: fundus (dome-shaped top above tubal openings), body (main part), isthmus (narrowing between body and cervix), and cervix (lower cylindrical portion).'
  },
  {
    id: 'uterus-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the normal position of the uterus?',
    options: ['Retroverted and retroflexed', 'Anteverted (angled forward on vagina) and anteflexed (body bent forward on cervix)', 'Vertical', 'Lateral'],
    correctAnswer: 1,
    explanation: 'The normal uterine position is anteverted (uterus angled forward relative to vaginal axis) and anteflexed (uterine body bent forward on cervix). Retroversion occurs in about 20% of women.'
  },
  {
    id: 'uterus-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is anterior to the uterus?',
    options: ['Rectum', 'Urinary bladder (vesicouterine pouch between them)', 'Sigmoid colon', 'Small intestine only'],
    correctAnswer: 1,
    explanation: 'The urinary bladder lies anterior to the uterus. The vesicouterine pouch (peritoneal reflection) lies between them at the level of the uterine isthmus.'
  },
  {
    id: 'uterus-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is posterior to the uterus?',
    options: ['Bladder', 'Rectum with rectouterine pouch (of Douglas) between them', 'Pubic symphysis', 'Only sigmoid colon'],
    correctAnswer: 1,
    explanation: 'The rectum lies posterior to the uterus. The rectouterine pouch (pouch of Douglas) is the deepest peritoneal point in the female pelvis, between the uterus and rectum.'
  },
  {
    id: 'uterus-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the main uterine support structures?',
    options: ['Bones only', 'Pelvic floor, cardinal ligaments, uterosacral ligaments, round ligaments, broad ligaments', 'Muscles only', 'Fascia only'],
    correctAnswer: 1,
    explanation: 'Uterine support: pelvic floor muscles (primary), cardinal (transverse cervical) ligaments, uterosacral ligaments, round ligaments, and broad ligaments. Weakness leads to prolapse.'
  },
  {
    id: 'uterus-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the cardinal (transverse cervical/Mackenrodt) ligament?',
    options: ['Round structure', 'Main ligament support; extends from cervix/vagina to lateral pelvic wall, contains uterine vessels', 'Connects to sacrum', 'Connects to pubis'],
    correctAnswer: 1,
    explanation: 'The cardinal ligament is the main support of the uterus, extending from the cervix and upper vagina to the lateral pelvic wall. It contains the uterine artery and veins.'
  },
  {
    id: 'uterus-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the blood supply of the uterus?',
    options: ['Ovarian artery only', 'Uterine artery (from internal iliac), with ovarian artery contribution', 'External iliac artery', 'Pudendal artery'],
    correctAnswer: 1,
    explanation: 'The uterus is supplied primarily by the uterine artery (branch of internal iliac), which anastomoses with the ovarian artery. The uterine artery crosses over the ureter near the cervix.'
  },
  {
    id: 'uterus-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of uterine artery-ureter relationship?',
    options: ['No significance', 'Uterine artery crosses over ureter 2cm lateral to cervix; ureter at risk during hysterectomy', 'Ureter crosses over artery', 'They do not cross'],
    correctAnswer: 1,
    explanation: 'The uterine artery crosses over (anterior to) the ureter approximately 2 cm lateral to the cervix ("water under the bridge"). The ureter is at risk during hysterectomy when ligating the uterine vessels.'
  },
  {
    id: 'uterus-9',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the size of a nulliparous (never pregnant) uterus?',
    options: ['3 x 2 x 1 cm', '7-8 x 5 x 2.5 cm', '12 x 8 x 4 cm', '15 x 10 x 5 cm'],
    correctAnswer: 1,
    explanation: 'A nulliparous uterus measures approximately 7-8 cm long, 5 cm wide, and 2.5 cm thick, weighing about 30-40 grams. It enlarges with pregnancy and is slightly larger in multiparous women.'
  },
  {
    id: 'uterus-10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the uterosacral ligaments?',
    options: ['Connect uterus to pubis', 'Extend from cervix to sacrum; maintain uterine position', 'Support the bladder', 'Connect to ischium'],
    correctAnswer: 1,
    explanation: 'The uterosacral ligaments extend from the posterior cervix to the sacrum, passing on either side of the rectum. They help maintain the anteverted uterine position and are palpable on rectal exam.'
  }
];

// 4. Broad Ligaments
export const broadLigamentsQuestions: Question[] = [
  {
    id: 'broad-lig-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the broad ligament?',
    options: ['Single fold of peritoneum', 'Double layer of peritoneum extending from lateral uterus to pelvic wall', 'Muscle layer', 'Fascial layer'],
    correctAnswer: 1,
    explanation: 'The broad ligament is a double layer of peritoneum (fold) extending from the lateral margins of the uterus to the lateral pelvic wall and floor, covering the uterine tubes and ovaries.'
  },
  {
    id: 'broad-lig-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the parts of the broad ligament?',
    options: ['Only one part', 'Mesometrium (largest), mesosalpinx (for tube), mesovarium (for ovary)', 'Two parts', 'Four parts'],
    correctAnswer: 1,
    explanation: 'The broad ligament has three parts: mesometrium (largest, below the tube/ovary), mesosalpinx (supports uterine tube), and mesovarium (attaches to ovary posterior leaf).'
  },
  {
    id: 'broad-lig-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What structures are contained within the broad ligament?',
    options: ['Only the uterus', 'Uterine tubes, ovarian and round ligaments, vessels, nerves, lymphatics, ureter', 'Blood vessels only', 'Nerves only'],
    correctAnswer: 1,
    explanation: 'The broad ligament contains: uterine tubes, ovarian and round ligaments, uterine and ovarian vessels, nerves, lymphatics, and the ureter (at its base). Also epoophoron and paroophoron (vestigial).'
  },
  {
    id: 'broad-lig-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where is the round ligament located?',
    options: ['Posterior to broad ligament', 'In the anterior layer of broad ligament, from uterus through inguinal canal to labia majora', 'Within ovary', 'Attached to sacrum'],
    correctAnswer: 1,
    explanation: 'The round ligament lies in the anterior layer of the broad ligament, extending from the uterus (below tube attachment), through the inguinal canal, to terminate in the labia majora.'
  },
  {
    id: 'broad-lig-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the function of the round ligament?',
    options: ['Main uterine support', 'Maintains anteversion of uterus (minor role)', 'Blood supply', 'Nerve pathway'],
    correctAnswer: 1,
    explanation: 'The round ligament helps maintain the anteverted position of the uterus, though it plays a minor supportive role. It is the homologue of the gubernaculum in males.'
  },
  {
    id: 'broad-lig-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What vestigial structures are found in the broad ligament?',
    options: ['None', 'Epoophoron (mesonephric tubules) and paroophoron (near ovary)', 'Gubernaculum', 'Processus vaginalis'],
    correctAnswer: 1,
    explanation: 'Vestigial structures in the broad ligament include: epoophoron (remnant of mesonephric tubules, between ovary and tube) and paroophoron (small groups of tubules near ovary). Gartner duct cysts may arise from these.'
  },
  {
    id: 'broad-lig-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the relationship of the ureter to the broad ligament?',
    options: ['Superior to it', 'Passes at the base of broad ligament, beneath uterine artery', 'Anterior to it', 'Not related'],
    correctAnswer: 1,
    explanation: 'The ureter passes at the base of the broad ligament (in the parametrium), crossing beneath the uterine artery approximately 2 cm from the cervix.'
  },
  {
    id: 'broad-lig-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is parametrium?',
    options: ['Uterine muscle', 'Connective tissue at the base of broad ligament around cervix, containing vessels', 'Peritoneum', 'Endometrium'],
    correctAnswer: 1,
    explanation: 'The parametrium is the connective tissue at the base of the broad ligament, surrounding the cervix and upper vagina. It contains the uterine vessels and ureter, and forms the cardinal ligaments.'
  }
];

// 5. Vagina
export const vaginaQuestions: Question[] = [
  {
    id: 'vagina-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the length of the vagina?',
    options: ['3-4 cm', '7-9 cm', '15 cm', '20 cm'],
    correctAnswer: 1,
    explanation: 'The vagina is approximately 7-9 cm long, with the posterior wall being slightly longer than the anterior wall because the cervix projects into the upper anterior vagina.'
  },
  {
    id: 'vagina-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the vaginal fornices?',
    options: ['Vaginal walls', 'Recesses around the cervix; posterior fornix is deepest (related to rectouterine pouch)', 'Vaginal opening', 'Vaginal rugae'],
    correctAnswer: 1,
    explanation: 'The fornices are the recesses around the vaginal portion of the cervix: anterior, posterior, and two lateral. The posterior fornix is deepest and related to the rectouterine pouch (Douglas).'
  },
  {
    id: 'vagina-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is anterior to the vagina?',
    options: ['Rectum', 'Bladder base and urethra', 'Small intestine', 'Pubic symphysis directly'],
    correctAnswer: 1,
    explanation: 'The bladder base and urethra lie anterior to the vagina. The urethra is embedded in the anterior vaginal wall, explaining their close clinical relationship.'
  },
  {
    id: 'vagina-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is posterior to the vagina at different levels?',
    options: ['Only bladder', 'Upper: rectouterine pouch; middle: rectum; lower: perineal body', 'Same structure throughout', 'Only rectum'],
    correctAnswer: 1,
    explanation: 'Posterior vaginal relations differ by level: upper quarter - rectouterine pouch (peritoneum), middle half - rectum (separated by rectovaginal septum), lower quarter - perineal body.'
  },
  {
    id: 'vagina-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the blood supply of the vagina?',
    options: ['Ovarian artery', 'Vaginal artery (from uterine or internal iliac), internal pudendal, middle rectal', 'External iliac', 'Femoral artery'],
    correctAnswer: 1,
    explanation: 'The vagina receives blood from vaginal branches of the uterine artery, vaginal arteries (from internal iliac), internal pudendal artery, and middle rectal artery.'
  },
  {
    id: 'vagina-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of the posterior fornix?',
    options: ['No significance', 'Site for culdocentesis (sampling rectouterine pouch); close to rectouterine pouch', 'Site for cervical biopsy', 'Site for IUD insertion'],
    correctAnswer: 1,
    explanation: 'The posterior fornix is the thinnest point between vagina and peritoneal cavity (rectouterine pouch). Culdocentesis (needle aspiration) through the posterior fornix can diagnose intraperitoneal bleeding or infection.'
  },
  {
    id: 'vagina-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the vaginal epithelium?',
    options: ['Columnar epithelium', 'Stratified squamous non-keratinized epithelium', 'Transitional epithelium', 'Simple cuboidal'],
    correctAnswer: 1,
    explanation: 'The vagina is lined by stratified squamous non-keratinized epithelium, which provides protection against mechanical stress. It forms rugae (folds) that allow vaginal expansion.'
  },
  {
    id: 'vagina-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where do vaginal lymphatics drain?',
    options: ['All to inguinal nodes', 'Upper: internal/external iliac; lower: superficial inguinal nodes', 'Only to para-aortic nodes', 'No lymphatic drainage'],
    correctAnswer: 1,
    explanation: 'Vaginal lymphatic drainage varies by level: upper vagina drains to internal and external iliac nodes; lower vagina drains to superficial inguinal nodes (like vulva). Important for cancer staging.'
  }
];

// 6. Vulva
export const vulvaQuestions: Question[] = [
  {
    id: 'vulva-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the components of the vulva?',
    options: ['Vagina only', 'Mons pubis, labia majora/minora, clitoris, vestibule, bulbs, glands', 'Clitoris only', 'External structures only'],
    correctAnswer: 1,
    explanation: 'The vulva includes: mons pubis, labia majora, labia minora, clitoris, vestibule (with urethral and vaginal openings), vestibular bulbs, and greater/lesser vestibular glands.'
  },
  {
    id: 'vulva-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clitoris and its parts?',
    options: ['Simple structure', 'Erectile organ with root (crura, bulbs), body, and glans', 'Glandular structure', 'Muscular structure'],
    correctAnswer: 1,
    explanation: 'The clitoris is an erectile organ with: root (two crura attached to ischiopubic rami, and vestibular bulbs), body (formed by fused corpora cavernosa), and glans (exposed tip). Homologue of penis.'
  },
  {
    id: 'vulva-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the vestibule?',
    options: ['Part of vagina', 'Space between labia minora containing urethral, vaginal, and gland openings', 'Clitoral structure', 'Labial fold'],
    correctAnswer: 1,
    explanation: 'The vestibule is the cleft between the labia minora, containing the external urethral orifice, vaginal orifice (with hymen), and openings of greater and lesser vestibular glands.'
  },
  {
    id: 'vulva-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the blood supply of the vulva?',
    options: ['Ovarian artery', 'Internal and external pudendal arteries', 'Uterine artery', 'Femoral artery directly'],
    correctAnswer: 1,
    explanation: 'The vulva is supplied by: internal pudendal artery (main supply to deep structures) and external pudendal arteries (from femoral, to labia majora and mons pubis).'
  },
  {
    id: 'vulva-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What nerve provides sensory innervation to the vulva?',
    options: ['Femoral nerve', 'Pudendal nerve (S2-S4) and ilioinguinal, genitofemoral branches', 'Obturator nerve', 'Sciatic nerve'],
    correctAnswer: 1,
    explanation: 'Vulvar innervation: pudendal nerve (S2-S4) to posterior/deep structures; ilioinguinal and genital branch of genitofemoral (anterior); posterior cutaneous nerve of thigh (posterior labia).'
  },
  {
    id: 'vulva-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where do vulvar lymphatics drain?',
    options: ['Internal iliac nodes', 'Superficial inguinal lymph nodes primarily', 'Para-aortic nodes', 'Popliteal nodes'],
    correctAnswer: 1,
    explanation: 'Vulvar lymphatics drain primarily to superficial inguinal lymph nodes, then to deep inguinal and external iliac nodes. The clitoris and labia minora may drain directly to deep nodes. Important for vulvar cancer staging.'
  },
  {
    id: 'vulva-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the vestibular bulbs?',
    options: ['Glands', 'Paired erectile tissue masses on either side of vaginal orifice', 'Nerve endings', 'Lymph nodes'],
    correctAnswer: 1,
    explanation: 'The vestibular bulbs are paired masses of erectile tissue lying on either side of the vaginal orifice, deep to the bulbospongiosus muscle. They are homologous to the male corpus spongiosum and bulb.'
  },
  {
    id: 'vulva-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is an episiotomy and its anatomical considerations?',
    options: ['Cesarean section', 'Surgical incision of perineum during delivery; mediolateral avoids anal sphincter', 'Hysterectomy', 'Vulvar biopsy'],
    correctAnswer: 1,
    explanation: 'Episiotomy is a surgical incision of the perineum during delivery. Mediolateral incision (preferred) avoids the anal sphincter. Median incision has higher risk of extending into the anal sphincter.'
  }
];

// 7. Bulbo-vaginal and Bulbo-urethral Glands
export const bulboVaginalUrethralGlandsQuestions: Question[] = [
  {
    id: 'bulbo-glands-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the greater vestibular (Bartholin) glands?',
    options: ['Sweat glands', 'Paired glands at posterior vaginal orifice secreting lubricating mucus', 'Sebaceous glands', 'Endocrine glands'],
    correctAnswer: 1,
    explanation: 'The greater vestibular (Bartholin) glands are paired pea-sized glands located posterolateral to the vaginal orifice, deep to the posterior labia majora. They secrete mucus for lubrication.'
  },
  {
    id: 'bulbo-glands-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where do the greater vestibular gland ducts open?',
    options: ['Into the vagina', 'Into the vestibule at the junction of labia minora and hymen', 'Into the urethra', 'On the labia majora'],
    correctAnswer: 1,
    explanation: 'The greater vestibular gland ducts open into the vestibule at the junction of the posterior labia minora and hymenal remnants, between the hymen and labia minora.'
  },
  {
    id: 'bulbo-glands-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is a Bartholin gland cyst/abscess?',
    options: ['Normal variant', 'Obstruction of gland duct causing cyst; infection causes abscess', 'Tumor', 'Congenital anomaly'],
    correctAnswer: 1,
    explanation: 'Bartholin gland cyst results from duct obstruction with mucus accumulation. Infection (often polymicrobial including STIs) leads to abscess formation, causing painful swelling at the posterior labia.'
  },
  {
    id: 'bulbo-glands-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the lesser vestibular glands (Skene glands)?',
    options: ['Large glands', 'Paraurethral glands opening near external urethral orifice', 'Glands in labia majora', 'Glands in clitoris'],
    correctAnswer: 1,
    explanation: 'The lesser vestibular (Skene or paraurethral) glands are small glands that open on either side of the external urethral orifice. They are homologous to the male prostate.'
  },
  {
    id: 'bulbo-glands-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the bulbourethral (Cowper) glands in males?',
    options: ['Testicular glands', 'Paired glands in deep perineal pouch secreting pre-ejaculate', 'Prostatic glands', 'Seminal vesicles'],
    correctAnswer: 1,
    explanation: 'The bulbourethral (Cowper) glands are paired pea-sized glands in the deep perineal pouch (urogenital diaphragm). They secrete clear alkaline pre-ejaculate fluid that lubricates and neutralizes urethral acidity.'
  },
  {
    id: 'bulbo-glands-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where do the bulbourethral gland ducts open?',
    options: ['Into the prostatic urethra', 'Into the bulbar (spongy) urethra', 'Into the bladder', 'Into the membranous urethra'],
    correctAnswer: 1,
    explanation: 'The bulbourethral gland ducts pierce the perineal membrane and open into the proximal part of the spongy (bulbar) urethra, within the bulb of the penis.'
  },
  {
    id: 'bulbo-glands-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the homology between male and female glands?',
    options: ['No homology exists', 'Bartholin glands are homologous to bulbourethral (Cowper) glands', 'Skene glands are homologous to seminal vesicles', 'No female homologues exist'],
    correctAnswer: 1,
    explanation: 'Greater vestibular (Bartholin) glands are homologous to bulbourethral (Cowper) glands. Lesser vestibular (Skene) glands are homologous to the prostate. Both develop from urogenital sinus.'
  },
  {
    id: 'bulbo-glands-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical presentation of Skene gland infection?',
    options: ['Asymptomatic always', 'Dysuria, urethral discharge, tender periurethral swelling', 'Vaginal discharge only', 'Lower back pain'],
    correctAnswer: 1,
    explanation: 'Skene gland (paraurethral) infection (Skenitis) presents with dysuria, urethral discharge, and tender periurethral swelling. It may be associated with STIs (gonorrhea, chlamydia) and can form abscesses.'
  }
];

// Combine all female genital questions for easy import
export const femaleGenitalQuestions: Question[] = [
  ...ovaryQuestions,
  ...uterineTubeQuestions,
  ...uterusQuestions,
  ...broadLigamentsQuestions,
  ...vaginaQuestions,
  ...vulvaQuestions,
  ...bulboVaginalUrethralGlandsQuestions
];
