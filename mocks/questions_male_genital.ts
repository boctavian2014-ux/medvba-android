import type { Question } from './questions';

// ============================================================================
// MALE GENITAL SYSTEM QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Testiculul (testicleQuestions)
// 2. Bursele testiculare (scrotalSacQuestions)
// 3. Complex epididimo-testicular (epididymoTesticularComplexQuestions)
// 4. Ductul deferent și ejaculator (vasDeferensEjaculatoryDuctQuestions)
// 5. Prostata si glandele seminale (prostateSeminalVesiclesQuestions)
// 6. Penisul (penisQuestions)
// ============================================================================

// 1. Testicle
export const testicleQuestions: Question[] = [
  {
    id: 'testicle-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where do the testes develop embryologically?',
    options: ['In the scrotum', 'On the posterior abdominal wall near the kidneys', 'In the pelvis', 'In the inguinal canal'],
    correctAnswer: 1,
    explanation: 'The testes develop on the posterior abdominal wall near the developing kidneys (at L2-L3 level) and descend through the inguinal canal into the scrotum by birth.'
  },
  {
    id: 'testicle-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the size and weight of an adult testis?',
    options: ['1 x 1 x 1 cm, 5g', '4-5 x 2.5 x 3 cm, 10-15g', '8 x 5 x 4 cm, 50g', '10 x 6 x 5 cm, 100g'],
    correctAnswer: 1,
    explanation: 'An adult testis measures approximately 4-5 cm long, 2.5 cm wide, and 3 cm anteroposteriorly, weighing 10-15 grams.'
  },
  {
    id: 'testicle-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What covers the testis and what is its significance?',
    options: ['Skin only', 'Tunica vaginalis (visceral and parietal layers) - potential space for hydrocele', 'Fascia only', 'Peritoneum directly'],
    correctAnswer: 1,
    explanation: 'The tunica vaginalis is a serous membrane with visceral (on testis) and parietal layers. It is derived from the processus vaginalis of peritoneum. Fluid accumulation between layers causes hydrocele.'
  },
  {
    id: 'testicle-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the tunica albuginea?',
    options: ['Outer serous layer', 'Dense fibrous capsule of the testis, deep to tunica vaginalis', 'Blood vessel layer', 'Muscle layer'],
    correctAnswer: 1,
    explanation: 'The tunica albuginea is a tough, dense fibrous capsule immediately surrounding the testicular parenchyma, deep to the tunica vaginalis. It sends septa into the testis.'
  },
  {
    id: 'testicle-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the internal structure of the testis?',
    options: ['Solid parenchyma', 'Lobules (200-300) containing seminiferous tubules, Leydig cells between tubules', 'Single tubule', 'Glandular acini'],
    correctAnswer: 1,
    explanation: 'The testis contains 200-300 lobules separated by septa. Each lobule has 1-4 seminiferous tubules (sperm production). Leydig cells between tubules produce testosterone.'
  },
  {
    id: 'testicle-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the arterial blood supply of the testis?',
    options: ['Internal iliac artery', 'Testicular artery from abdominal aorta (L2 level)', 'External iliac artery', 'Femoral artery'],
    correctAnswer: 1,
    explanation: 'The testicular artery arises from the abdominal aorta at L2 level (reflecting embryological origin). It descends retroperitoneally, crosses the ureter, and enters the spermatic cord.'
  },
  {
    id: 'testicle-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the pampiniform plexus?',
    options: ['Arterial network', 'Venous plexus in spermatic cord that cools arterial blood (countercurrent exchange)', 'Lymphatic network', 'Nerve plexus'],
    correctAnswer: 1,
    explanation: 'The pampiniform plexus is a venous network in the spermatic cord. It surrounds the testicular artery and cools the arterial blood by countercurrent heat exchange, maintaining optimal testicular temperature.'
  },
  {
    id: 'testicle-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where do lymphatics from the testis drain?',
    options: ['Inguinal lymph nodes', 'Para-aortic (lumbar) lymph nodes at L2 level', 'Pelvic lymph nodes', 'Axillary nodes'],
    correctAnswer: 1,
    explanation: 'Testicular lymphatics drain to the para-aortic (lumbar) lymph nodes at L2 level, following the testicular vessels and reflecting the embryological origin of the testis.'
  },
  {
    id: 'testicle-9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is cryptorchidism and its significance?',
    options: ['Normal variant', 'Undescended testis; increased risk of infertility and testicular cancer', 'Testicular torsion', 'Hydrocele'],
    correctAnswer: 1,
    explanation: 'Cryptorchidism is failure of testicular descent into the scrotum. It increases risk of infertility (impaired spermatogenesis due to high temperature) and testicular cancer (5-10x increased risk).'
  },
  {
    id: 'testicle-10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What nerve provides sensory innervation to the testis?',
    options: ['Pudendal nerve', 'Genital branch of genitofemoral nerve and testicular plexus (T10)', 'Ilioinguinal nerve only', 'Obturator nerve'],
    correctAnswer: 1,
    explanation: 'The testis receives sensory innervation via the testicular plexus (sympathetic T10) and genital branch of genitofemoral nerve. Pain is referred to the periumbilical area (T10 dermatome).'
  }
];

// 2. Scrotal Sac (Bursae)
export const scrotalSacQuestions: Question[] = [
  {
    id: 'scrotum-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the layers of the scrotum from superficial to deep?',
    options: ['Skin only', 'Skin, dartos, external spermatic fascia, cremasteric fascia, internal spermatic fascia, tunica vaginalis', 'Three layers only', 'Skin and muscle only'],
    correctAnswer: 1,
    explanation: 'Scrotal layers (superficial to deep): skin, dartos muscle and fascia, external spermatic fascia (from external oblique), cremasteric fascia and muscle (from internal oblique), internal spermatic fascia (from transversalis), tunica vaginalis.'
  },
  {
    id: 'scrotum-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the dartos muscle and its function?',
    options: ['Skeletal muscle for movement', 'Smooth muscle that wrinkles scrotal skin for thermoregulation', 'Sphincter muscle', 'Voluntary muscle'],
    correctAnswer: 1,
    explanation: 'The dartos muscle is smooth muscle in the superficial fascia of the scrotum. It contracts in cold (wrinkling scrotum, bringing testes closer to body) and relaxes in heat for thermoregulation.'
  },
  {
    id: 'scrotum-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the cremaster muscle and reflex?',
    options: ['Smooth muscle with no reflex', 'Skeletal muscle loops; cremasteric reflex elevates testis when inner thigh is stroked', 'Voluntary muscle only', 'Part of dartos'],
    correctAnswer: 1,
    explanation: 'The cremaster muscle is skeletal muscle derived from internal oblique. The cremasteric reflex (L1-L2) causes testicular elevation when the ipsilateral inner thigh is stroked; absent in testicular torsion.'
  },
  {
    id: 'scrotum-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the gubernaculum testis?',
    options: ['Blood vessel', 'Fibromuscular cord guiding testicular descent; becomes scrotal ligament', 'Nerve', 'Lymphatic vessel'],
    correctAnswer: 1,
    explanation: 'The gubernaculum is a fibromuscular cord attached to the inferior testis pole that guides testicular descent from abdomen to scrotum. Its remnant is the scrotal ligament.'
  },
  {
    id: 'scrotum-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the blood supply of the scrotum?',
    options: ['Testicular artery only', 'External pudendal (from femoral), scrotal branches of internal pudendal', 'Femoral artery only', 'Iliac artery'],
    correctAnswer: 1,
    explanation: 'The scrotum is supplied by external pudendal arteries (branches of femoral) to the anterior scrotum and posterior scrotal branches of the internal pudendal artery to the posterior scrotum.'
  },
  {
    id: 'scrotum-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where do scrotal lymphatics drain?',
    options: ['Para-aortic nodes (like testis)', 'Superficial inguinal lymph nodes', 'Deep inguinal nodes', 'Pelvic nodes'],
    correctAnswer: 1,
    explanation: 'Scrotal skin lymphatics drain to superficial inguinal nodes, unlike the testis which drains to para-aortic nodes. This difference is important in cancer staging.'
  },
  {
    id: 'scrotum-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What nerve provides sensory innervation to the anterior scrotum?',
    options: ['Pudendal nerve', 'Ilioinguinal nerve and genital branch of genitofemoral nerve', 'Femoral nerve', 'Obturator nerve'],
    correctAnswer: 1,
    explanation: 'The anterior scrotum is innervated by the ilioinguinal nerve (L1) and genital branch of the genitofemoral nerve (L1-L2). The posterior scrotum is supplied by posterior scrotal nerves from the pudendal.'
  },
  {
    id: 'scrotum-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is a hydrocele and its anatomical basis?',
    options: ['Blood in scrotum', 'Fluid accumulation between layers of tunica vaginalis', 'Air in scrotum', 'Lymphatic obstruction'],
    correctAnswer: 1,
    explanation: 'A hydrocele is abnormal fluid accumulation between the visceral and parietal layers of the tunica vaginalis. It may be congenital (patent processus vaginalis) or acquired (inflammation, tumor, trauma).'
  }
];

// 3. Epididymo-Testicular Complex
export const epididymoTesticularComplexQuestions: Question[] = [
  {
    id: 'epididymis-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the parts of the epididymis?',
    options: ['Only body', 'Head (caput), body (corpus), and tail (cauda)', 'Two parts only', 'Four segments'],
    correctAnswer: 1,
    explanation: 'The epididymis has three parts: head (caput, receives efferent ductules), body (corpus), and tail (cauda, continuous with vas deferens). It lies on the posterolateral aspect of the testis.'
  },
  {
    id: 'epididymis-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the function of the epididymis?',
    options: ['Sperm production only', 'Sperm maturation, storage, and transport', 'Hormone production', 'Filtration of seminal fluid'],
    correctAnswer: 1,
    explanation: 'The epididymis functions in sperm maturation (acquiring motility and fertilizing capacity), storage (especially in the tail), and transport toward the vas deferens.'
  },
  {
    id: 'epididymis-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What connects the testis to the epididymis?',
    options: ['Vas deferens', 'Efferent ductules (from rete testis to epididymal head)', 'Seminal vesicle ducts', 'Direct continuity'],
    correctAnswer: 1,
    explanation: 'The efferent ductules (10-15) carry sperm from the rete testis in the mediastinum testis to the head of the epididymis, where they join to form the single epididymal duct.'
  },
  {
    id: 'epididymis-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the length of the epididymal duct if uncoiled?',
    options: ['10 cm', '50 cm', 'About 6 meters', '20 meters'],
    correctAnswer: 2,
    explanation: 'The highly coiled epididymal duct is approximately 6 meters long if uncoiled. This length allows for sperm maturation and storage as sperm transit takes about 12-21 days.'
  },
  {
    id: 'epididymis-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the appendix testis?',
    options: ['Part of epididymis', 'Remnant of paramesonephric (Müllerian) duct on upper testis pole', 'Remnant of gubernaculum', 'Normal testicular tissue'],
    correctAnswer: 1,
    explanation: 'The appendix testis (hydatid of Morgagni) is a remnant of the paramesonephric (Müllerian) duct on the upper pole of the testis. It can undergo torsion, mimicking testicular torsion.'
  },
  {
    id: 'epididymis-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the appendix epididymis?',
    options: ['Müllerian remnant', 'Remnant of mesonephric (Wolffian) duct on epididymal head', 'Part of vas deferens', 'Accessory testis'],
    correctAnswer: 1,
    explanation: 'The appendix epididymis is a remnant of the mesonephric (Wolffian) duct, usually located on the head of the epididymis. It can also undergo torsion.'
  },
  {
    id: 'epididymis-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is epididymitis and its common cause?',
    options: ['Congenital abnormality', 'Inflammation of epididymis; STIs in young men, UTI organisms in older men', 'Cancer', 'Torsion'],
    correctAnswer: 1,
    explanation: 'Epididymitis is inflammation of the epididymis. In young sexually active men, it is often caused by STIs (Chlamydia, Gonorrhea). In older men, it is usually caused by urinary tract pathogens (E. coli).'
  },
  {
    id: 'epididymis-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the Prehn sign?',
    options: ['Sign of epididymitis', 'Elevation of scrotum relieves pain in epididymitis but not in testicular torsion', 'Sign of varicocele', 'Sign of hydrocele'],
    correctAnswer: 1,
    explanation: 'Prehn sign: elevation of the scrotum relieves pain in epididymitis (venous drainage improves) but not in testicular torsion (vascular compromise). Not always reliable but helpful clinically.'
  }
];

// 4. Vas Deferens and Ejaculatory Duct
export const vasDeferensEjaculatoryDuctQuestions: Question[] = [
  {
    id: 'vas-deferens-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the vas (ductus) deferens?',
    options: ['Artery', 'Muscular tube transporting sperm from epididymis to ejaculatory duct', 'Vein', 'Nerve'],
    correctAnswer: 1,
    explanation: 'The vas deferens is a thick-walled muscular tube (~45 cm long) that transports sperm from the tail of the epididymis to the ejaculatory duct. It is palpable in the spermatic cord.'
  },
  {
    id: 'vas-deferens-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the course of the vas deferens?',
    options: ['Straight to bladder', 'Epididymis → spermatic cord → inguinal canal → crosses external iliac vessels → posterior to bladder', 'Only in scrotum', 'Through femoral canal'],
    correctAnswer: 1,
    explanation: 'The vas deferens ascends in the spermatic cord, passes through the inguinal canal, crosses the external iliac vessels medially, and descends posterior to the bladder to join the seminal vesicle duct.'
  },
  {
    id: 'vas-deferens-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the ampulla of the vas deferens?',
    options: ['Origin of vas', 'Dilated terminal portion posterior to bladder', 'Middle segment', 'Part in spermatic cord'],
    correctAnswer: 1,
    explanation: 'The ampulla is the dilated terminal portion of the vas deferens located posterior to the bladder, medial to the seminal vesicle. It serves as a sperm reservoir.'
  },
  {
    id: 'vas-deferens-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'How is the ejaculatory duct formed?',
    options: ['From vas deferens only', 'Union of vas deferens ampulla and seminal vesicle duct', 'From prostatic urethra', 'From epididymis directly'],
    correctAnswer: 1,
    explanation: 'The ejaculatory duct is formed by the union of the vas deferens (ampulla) and the duct of the seminal vesicle. It passes through the prostate to open on the seminal colliculus.'
  },
  {
    id: 'vas-deferens-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the length of the ejaculatory duct?',
    options: ['About 10 cm', 'About 2 cm', 'About 10 mm', 'About 5 cm'],
    correctAnswer: 1,
    explanation: 'The ejaculatory duct is approximately 2 cm long. It passes through the posterior part of the prostate to open into the prostatic urethra at the seminal colliculus.'
  },
  {
    id: 'vas-deferens-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the blood supply of the vas deferens?',
    options: ['Testicular artery only', 'Artery to vas deferens (from superior or inferior vesical)', 'Internal pudendal artery', 'Cremasteric artery'],
    correctAnswer: 1,
    explanation: 'The artery to the vas deferens (deferential artery) usually arises from the superior or inferior vesical artery. It accompanies the vas deferens and anastomoses with the testicular artery.'
  },
  {
    id: 'vas-deferens-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is vasectomy?',
    options: ['Removal of testis', 'Surgical division or ligation of vas deferens for contraception', 'Prostate surgery', 'Epididymal surgery'],
    correctAnswer: 1,
    explanation: 'Vasectomy is a male sterilization procedure involving surgical division, ligation, or excision of a segment of the vas deferens bilaterally. It prevents sperm from reaching the ejaculate.'
  },
  {
    id: 'vas-deferens-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the vas deferens to the ureter?',
    options: ['No relationship', 'Vas crosses anterior to ureter near bladder base', 'Ureter crosses anterior to vas', 'They run parallel'],
    correctAnswer: 1,
    explanation: 'The vas deferens crosses anterior (superficial) to the ureter near the posterolateral angle of the bladder. This is important during pelvic surgery to avoid injury to either structure.'
  }
];

// 5. Prostate and Seminal Vesicles
export const prostateSeminalVesiclesQuestions: Question[] = [
  {
    id: 'prostate-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the prostate located?',
    options: ['Superior to bladder', 'Inferior to bladder, surrounding prostatic urethra', 'In the scrotum', 'Posterior to rectum'],
    correctAnswer: 1,
    explanation: 'The prostate is located inferior to the bladder base, surrounding the prostatic urethra. It lies anterior to the rectum (allowing digital rectal examination) and posterior to the pubic symphysis.'
  },
  {
    id: 'prostate-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the zones of the prostate?',
    options: ['Only one zone', 'Peripheral (70%), central (25%), transitional (5%), and periurethral zones', 'Two zones', 'Four equal zones'],
    correctAnswer: 1,
    explanation: 'The prostate has four zones: peripheral (70%, cancer site), central (25%, surrounds ejaculatory ducts), transitional (5%, BPH site), and periurethral zone (around urethra).'
  },
  {
    id: 'prostate-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the normal size and weight of the prostate?',
    options: ['1 x 1 x 1 cm, 5g', 'About 3 x 4 x 2 cm (walnut-sized), 20g', '5 x 5 x 5 cm, 100g', '8 x 6 x 4 cm, 150g'],
    correctAnswer: 1,
    explanation: 'The normal adult prostate is approximately 3 cm long, 4 cm wide, and 2 cm thick (about the size of a walnut), weighing approximately 20 grams.'
  },
  {
    id: 'prostate-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the blood supply of the prostate?',
    options: ['Testicular artery', 'Inferior vesical and middle rectal arteries (from internal iliac)', 'External iliac artery', 'Pudendal artery'],
    correctAnswer: 1,
    explanation: 'The prostate is supplied by branches of the inferior vesical artery and middle rectal artery, both from the internal iliac artery. These vessels are important during prostatectomy.'
  },
  {
    id: 'prostate-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where are the seminal vesicles located?',
    options: ['In the scrotum', 'Posterosuperior to bladder, lateral to ampullae of vas deferens', 'In the prostate', 'Anterior to bladder'],
    correctAnswer: 1,
    explanation: 'The seminal vesicles are paired, coiled tubular glands located posterosuperior to the bladder base, lateral to the ampullae of the vas deferens, and anterior to the rectum.'
  },
  {
    id: 'prostate-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What do the seminal vesicles produce?',
    options: ['Sperm', 'Alkaline fluid rich in fructose (60-70% of semen volume)', 'Testosterone', 'Mucus only'],
    correctAnswer: 1,
    explanation: 'Seminal vesicles produce an alkaline, viscous fluid rich in fructose (energy for sperm), prostaglandins, and clotting factors. This secretion constitutes 60-70% of semen volume.'
  },
  {
    id: 'prostate-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is benign prostatic hyperplasia (BPH) and which zone is affected?',
    options: ['Peripheral zone enlargement', 'Transitional zone enlargement causing urinary obstruction', 'Central zone enlargement', 'All zones equally'],
    correctAnswer: 1,
    explanation: 'BPH is non-malignant enlargement of the prostate, primarily affecting the transitional zone (around the urethra). This causes urinary symptoms: hesitancy, weak stream, frequency, nocturia.'
  },
  {
    id: 'prostate-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which prostate zone is the most common site for prostate cancer?',
    options: ['Transitional zone', 'Peripheral zone (70% of cancers)', 'Central zone', 'Periurethral zone'],
    correctAnswer: 1,
    explanation: 'The peripheral zone is the most common site of prostate cancer (about 70%). This zone is palpable on digital rectal examination, allowing detection of suspicious nodules.'
  },
  {
    id: 'prostate-9',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is Denonvilliers fascia?',
    options: ['Prostatic capsule', 'Rectovesical (rectoprostatic) fascia separating prostate from rectum', 'Endopelvic fascia', 'Bladder fascia'],
    correctAnswer: 1,
    explanation: 'Denonvilliers fascia is a thin layer of connective tissue between the prostate/seminal vesicles anteriorly and the rectum posteriorly. It is an important surgical plane during prostatectomy.'
  },
  {
    id: 'prostate-10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What nerves are at risk during prostatectomy?',
    options: ['Pudendal nerve only', 'Cavernous nerves (from prostatic plexus) for erectile function', 'Obturator nerve', 'Femoral nerve'],
    correctAnswer: 1,
    explanation: 'The cavernous nerves (branches of the prostatic/pelvic plexus) run posterolateral to the prostate. Damage during prostatectomy can cause erectile dysfunction. Nerve-sparing techniques aim to preserve these.'
  }
];

// 6. Penis
export const penisQuestions: Question[] = [
  {
    id: 'penis-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the three erectile bodies of the penis?',
    options: ['One corpus only', 'Two corpora cavernosa and one corpus spongiosum', 'Three equal corpora', 'Two corpora spongiosum'],
    correctAnswer: 1,
    explanation: 'The penis contains three erectile bodies: two corpora cavernosa (dorsal, main erectile tissue) and one corpus spongiosum (ventral, contains urethra, expands to form glans).'
  },
  {
    id: 'penis-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the tunica albuginea of the penis?',
    options: ['Skin layer', 'Dense fibrous coat surrounding each corpus cavernosum', 'Muscle layer', 'Vascular layer'],
    correctAnswer: 1,
    explanation: 'The tunica albuginea is a dense fibrous sheath surrounding each corpus cavernosum. It is thinner around the corpus spongiosum, allowing urethral expansion during ejaculation.'
  },
  {
    id: 'penis-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the glans penis?',
    options: ['Base of penis', 'Expanded distal end of corpus spongiosum', 'Part of corpus cavernosum', 'Prepuce'],
    correctAnswer: 1,
    explanation: 'The glans penis is the expanded distal end (cap) of the corpus spongiosum. It contains the external urethral meatus and is covered by the prepuce (foreskin) in uncircumcised males.'
  },
  {
    id: 'penis-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the arterial blood supply of the penis?',
    options: ['Femoral artery', 'Internal pudendal artery branches: deep, dorsal, and bulbourethral arteries', 'External pudendal only', 'Testicular artery'],
    correctAnswer: 1,
    explanation: 'The penis is supplied by the internal pudendal artery via: deep arteries (to corpora cavernosa for erection), dorsal arteries (to glans and skin), and bulbourethral arteries (to corpus spongiosum).'
  },
  {
    id: 'penis-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the mechanism of erection?',
    options: ['Increased venous drainage', 'Parasympathetic-mediated arterial dilation and venous compression', 'Sympathetic stimulation', 'Voluntary muscle contraction'],
    correctAnswer: 1,
    explanation: 'Erection occurs via parasympathetic stimulation (S2-S4) causing arterial dilation, increased blood flow to erectile tissue, and compression of venous drainage by the expanding corpora against the tunica albuginea.'
  },
  {
    id: 'penis-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the innervation of the penis?',
    options: ['Only somatic nerves', 'Parasympathetic (erection - S2-S4), sympathetic (ejaculation - T11-L2), somatic (pudendal - sensation)', 'Only sympathetic', 'Vagus nerve'],
    correctAnswer: 1,
    explanation: 'The penis has triple innervation: parasympathetic (cavernous nerves from S2-S4) for erection, sympathetic (from T11-L2) for ejaculation, and somatic (dorsal nerve of penis from pudendal) for sensation.'
  },
  {
    id: 'penis-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the frenulum of the penis?',
    options: ['Part of glans', 'Fold of skin connecting glans to prepuce on ventral surface', 'Part of shaft', 'Urethral fold'],
    correctAnswer: 1,
    explanation: 'The frenulum is a sensitive fold of skin on the ventral (underside) surface connecting the glans to the prepuce. It may be torn during intercourse or affected in circumcision.'
  },
  {
    id: 'penis-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What muscles are associated with the penis?',
    options: ['No associated muscles', 'Ischiocavernosus (on crura) and bulbospongiosus (on bulb)', 'Only dartos', 'Cremaster'],
    correctAnswer: 1,
    explanation: 'The ischiocavernosus muscles cover the crura of the corpora cavernosa and help maintain erection. The bulbospongiosus surrounds the bulb of the corpus spongiosum and aids ejaculation.'
  },
  {
    id: 'penis-9',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is phimosis?',
    options: ['Penile cancer', 'Inability to retract prepuce over glans', 'Erectile dysfunction', 'Urethral stricture'],
    correctAnswer: 1,
    explanation: 'Phimosis is the inability to retract the prepuce (foreskin) over the glans penis. It may be physiological in children or pathological in adults (due to scarring). Treatment includes stretching or circumcision.'
  },
  {
    id: 'penis-10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is Peyronie disease?',
    options: ['Infection', 'Fibrous plaque in tunica albuginea causing penile curvature', 'Fracture', 'Cancer'],
    correctAnswer: 1,
    explanation: 'Peyronie disease is formation of fibrous plaques in the tunica albuginea, causing penile curvature (usually dorsal), pain, and erectile dysfunction. The exact cause is unknown but may involve trauma.'
  }
];

// Combine all male genital questions for easy import
export const maleGenitalQuestions: Question[] = [
  ...testicleQuestions,
  ...scrotalSacQuestions,
  ...epididymoTesticularComplexQuestions,
  ...vasDeferensEjaculatoryDuctQuestions,
  ...prostateSeminalVesiclesQuestions,
  ...penisQuestions
];
