import type { Question } from './questions';

// ============================================================================
// URINARY SYSTEM QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Loja renală și fascia fibroasă renală (renalLodgeFasciaQuestions)
// 2. Rinichiul drept – configurație externă și raporturi (rightKidneyQuestions)
// 3. Rinichiul stâng – configurație externă și raporturi (leftKidneyQuestions)
// 4. Pediculul renal drept (rightRenalPedicleQuestions)
// 5. Pediculul renal stâng (leftRenalPedicleQuestions)
// 6. Căile urinare excretorii: calice, bazinet, ureter lombo-iliac (urinaryExcretoryPathwaysQuestions)
// 7. Ureterul (ureterQuestions)
// 8. Glandele suprarenale (adrenalGlandsQuestions)
// 9. Vezica urinară (urinaryBladderQuestions)
// 10. Loja vezicală (bladderLodgeQuestions)
// 11. Uretra masculină (maleUrethraQuestions)
// 12. Uretra feminină (femaleUrethraQuestions)
// ============================================================================

// 1. Renal Lodge and Renal Fascia
export const renalLodgeFasciaQuestions: Question[] = [
  {
    id: 'renal-lodge-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the renal fascia (Gerota fascia)?',
    options: ['Capsule of the kidney', 'Fibrous envelope surrounding kidney and perirenal fat', 'Part of peritoneum', 'Muscle layer'],
    correctAnswer: 1,
    explanation: 'The renal fascia (Gerota fascia) is a fibrous envelope surrounding the kidney and perirenal fat. It has anterior and posterior layers that fuse laterally.'
  },
  {
    id: 'renal-lodge-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the layers of tissue surrounding the kidney from inside to outside?',
    options: ['Only renal capsule', 'Fibrous capsule, perirenal fat, renal fascia, pararenal fat', 'Peritoneum, fat, capsule', 'Single layer of fascia'],
    correctAnswer: 1,
    explanation: 'From inside out: fibrous capsule (directly on kidney), perirenal (perinephric) fat, renal fascia (Gerota), and pararenal (paranephric) fat outside the fascia.'
  },
  {
    id: 'renal-lodge-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where do the anterior and posterior layers of renal fascia fuse?',
    options: ['Medially', 'Laterally to form lateroconal fascia', 'Superiorly only', 'They do not fuse'],
    correctAnswer: 1,
    explanation: 'The anterior and posterior layers of renal fascia fuse laterally to form the lateroconal fascia, which is continuous with the transversalis fascia.'
  },
  {
    id: 'renal-lodge-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the renal fascia layers medially?',
    options: ['They fuse completely', 'Anterior layer crosses midline, posterior attaches to vertebral column', 'Both attach to vertebrae', 'Both are open medially'],
    correctAnswer: 1,
    explanation: 'Medially, the anterior layer of renal fascia crosses the midline to fuse with the opposite side. The posterior layer attaches to the vertebral column and psoas fascia.'
  },
  {
    id: 'renal-lodge-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the clinical significance of the renal fascia?',
    options: ['No significance', 'Contains spread of perinephric abscesses and urine leaks', 'Only protects during trauma', 'Produces hormones'],
    correctAnswer: 1,
    explanation: 'The renal fascia contains the spread of infections, abscesses, and urine extravasation. However, it communicates inferiorly with the pelvis along the ureter.'
  },
  {
    id: 'renal-lodge-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the adrenal gland to the renal fascia?',
    options: ['Outside renal fascia', 'Within renal fascia but separated from kidney by septum', 'Directly attached to kidney', 'In pararenal fat'],
    correctAnswer: 1,
    explanation: 'The adrenal gland is within the renal fascia but separated from the kidney by a thin fascial septum. This allows nephrectomy without removing the adrenal gland.'
  },
  {
    id: 'renal-lodge-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the pararenal (paranephric) fat?',
    options: ['Fat around renal pelvis', 'Fat between renal fascia and transversalis fascia', 'Perirenal fat', 'Retroperitoneal fat only'],
    correctAnswer: 1,
    explanation: 'Pararenal fat lies between the posterior layer of renal fascia and the transversalis fascia. It is most abundant posterolaterally and does not contain the kidney.'
  },
  {
    id: 'renal-lodge-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Through what pathway can infections spread from the perirenal space to the pelvis?',
    options: ['Through the peritoneum', 'Along the ureter within the renal fascia (open inferiorly)', 'Through the bloodstream only', 'No pathway exists'],
    correctAnswer: 1,
    explanation: 'The renal fascia is open inferiorly, allowing potential spread of infections or fluid collections along the ureter from the perirenal space into the pelvis.'
  }
];

// 2. Right Kidney: External Configuration and Relations
export const rightKidneyQuestions: Question[] = [
  {
    id: 'right-kidney-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At what vertebral levels is the right kidney located?',
    options: ['T11-L2', 'T12-L3', 'L1-L3', 'L1-L4'],
    correctAnswer: 1,
    explanation: 'The right kidney lies at T12-L3 vertebral levels. It is slightly lower than the left kidney due to the liver above it.'
  },
  {
    id: 'right-kidney-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Why is the right kidney lower than the left?',
    options: ['Due to heart position', 'Due to the liver occupying space above it', 'Due to the spleen', 'They are at the same level'],
    correctAnswer: 1,
    explanation: 'The right kidney is positioned about 1-2 cm lower than the left kidney because the liver occupies considerable space in the right upper quadrant above it.'
  },
  {
    id: 'right-kidney-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the anterior relations of the right kidney?',
    options: ['Only liver', 'Liver (upper), duodenum (medial), hepatic flexure (lower), small intestine', 'Stomach and spleen', 'Pancreas and jejunum'],
    correctAnswer: 1,
    explanation: 'Anterior relations of the right kidney include: suprarenal gland (upper pole), liver (upper 2/3), second part of duodenum (medially), hepatic flexure and small intestine (lower pole).'
  },
  {
    id: 'right-kidney-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the posterior relations of both kidneys?',
    options: ['Only vertebral column', 'Diaphragm, psoas major, quadratus lumborum, transversus abdominis', 'Only muscles', 'Peritoneum'],
    correctAnswer: 1,
    explanation: 'Posterior relations include the diaphragm (upper pole), psoas major (medially), quadratus lumborum (laterally), and transversus abdominis (lower lateral). Also the 12th rib and subcostal nerve.'
  },
  {
    id: 'right-kidney-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What nerves lie posterior to the kidney?',
    options: ['Vagus nerve', 'Subcostal (T12), iliohypogastric (L1), ilioinguinal (L1) nerves', 'Phrenic nerve', 'Obturator nerve'],
    correctAnswer: 1,
    explanation: 'The subcostal nerve (T12), iliohypogastric nerve (L1), and ilioinguinal nerve (L1) pass posterior to the kidneys on the quadratus lumborum muscle.'
  },
  {
    id: 'right-kidney-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the relationship of the right kidney to the peritoneum?',
    options: ['Intraperitoneal', 'Retroperitoneal - covered by peritoneum anteriorly only', 'Completely extraperitoneal', 'Within peritoneal cavity'],
    correctAnswer: 1,
    explanation: 'The kidneys are retroperitoneal organs, with peritoneum covering only their anterior surfaces. The posterior surface is in direct contact with the posterior abdominal wall.'
  },
  {
    id: 'right-kidney-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What structure separates the right kidney from the liver?',
    options: ['Fat only', 'Hepatorenal recess (Morison pouch)', 'Fibrous septum', 'Muscle layer'],
    correctAnswer: 1,
    explanation: 'The hepatorenal recess (Morison pouch) is a potential space between the right kidney and liver. It is the most dependent part of the peritoneal cavity in supine position and collects fluid.'
  },
  {
    id: 'right-kidney-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the approximate size of an adult kidney?',
    options: ['5 x 3 x 2 cm', '11 x 6 x 3 cm', '15 x 8 x 4 cm', '20 x 10 x 5 cm'],
    correctAnswer: 1,
    explanation: 'An adult kidney measures approximately 11 cm long, 6 cm wide, and 3 cm thick, weighing about 150 grams. The left kidney is usually slightly larger.'
  }
];

// 3. Left Kidney: External Configuration and Relations
export const leftKidneyQuestions: Question[] = [
  {
    id: 'left-kidney-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At what vertebral levels is the left kidney located?',
    options: ['T12-L3', 'T11-L2 (or T12-L2)', 'L1-L4', 'L2-L4'],
    correctAnswer: 1,
    explanation: 'The left kidney lies at T11-L2 (or T12-L2) vertebral levels, slightly higher than the right kidney.'
  },
  {
    id: 'left-kidney-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the anterior relations of the left kidney?',
    options: ['Only spleen and stomach', 'Suprarenal, stomach, spleen, pancreas, splenic flexure, jejunum', 'Liver and duodenum', 'Only jejunum'],
    correctAnswer: 1,
    explanation: 'Anterior relations of the left kidney: suprarenal gland (upper pole), stomach (upper), spleen (lateral), pancreas and splenic vessels (middle), splenic flexure of colon and jejunum (lower).'
  },
  {
    id: 'left-kidney-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What separates the left kidney from the stomach?',
    options: ['Nothing - they are in direct contact', 'Lesser sac (omental bursa)', 'Greater omentum', 'Transverse mesocolon'],
    correctAnswer: 1,
    explanation: 'The lesser sac (omental bursa) separates the left kidney from the stomach. This is important during surgical approaches to the kidney.'
  },
  {
    id: 'left-kidney-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure crosses the middle part of the left kidney anteriorly?',
    options: ['Splenic artery only', 'Body and tail of pancreas with splenic vessels', 'Transverse colon', 'Stomach'],
    correctAnswer: 1,
    explanation: 'The body and tail of the pancreas, along with the splenic artery and vein, cross the anterior surface of the left kidney at its middle part.'
  },
  {
    id: 'left-kidney-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the splenorenal ligament and its relation to the left kidney?',
    options: ['Attaches spleen directly to kidney', 'Peritoneal fold connecting spleen to left kidney containing splenic vessels', 'Muscle attachment', 'Fascial layer'],
    correctAnswer: 1,
    explanation: 'The splenorenal (lienorenal) ligament is a peritoneal fold connecting the spleen to the left kidney, containing the splenic vessels and tail of pancreas.'
  },
  {
    id: 'left-kidney-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What peritoneal areas of the left kidney are bare (without peritoneal covering)?',
    options: ['All of anterior surface', 'Area for suprarenal gland and pancreas', 'Only posterior surface', 'Entire kidney is covered'],
    correctAnswer: 1,
    explanation: 'The left kidney has bare areas (no peritoneum) anteriorly where the suprarenal gland and pancreas are in direct contact. The stomach and jejunum contact is through peritoneum.'
  },
  {
    id: 'left-kidney-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What structure forms the medial border of the left kidney?',
    options: ['Spleen', 'Hilum with renal vessels and pelvis', 'Liver', 'Ureter only'],
    correctAnswer: 1,
    explanation: 'The medial border of the kidney contains the hilum, where the renal artery, renal vein, renal pelvis, lymphatics, and nerves enter and exit.'
  },
  {
    id: 'left-kidney-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'In which part of the left kidney does the splenic flexure of the colon contact?',
    options: ['Upper pole', 'Lower lateral part of anterior surface', 'Posterior surface', 'Hilum'],
    correctAnswer: 1,
    explanation: 'The splenic (left colic) flexure of the colon contacts the lower lateral part of the anterior surface of the left kidney.'
  }
];

// 4. Right Renal Pedicle
export const rightRenalPedicleQuestions: Question[] = [
  {
    id: 'right-pedicle-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What structures comprise the renal pedicle?',
    options: ['Only artery and vein', 'Renal artery, renal vein, renal pelvis/ureter, lymphatics, nerves', 'Only ureter', 'Artery and ureter'],
    correctAnswer: 1,
    explanation: 'The renal pedicle contains the renal artery, renal vein, renal pelvis (becoming ureter), lymphatic vessels, and autonomic nerve plexuses.'
  },
  {
    id: 'right-pedicle-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the arrangement of structures in the right renal hilum from anterior to posterior?',
    options: ['Artery, vein, pelvis', 'Vein, artery, pelvis (VAP)', 'Pelvis, artery, vein', 'Artery, pelvis, vein'],
    correctAnswer: 1,
    explanation: 'At the renal hilum, from anterior to posterior, the structures are: renal Vein, renal Artery, renal Pelvis (mnemonic: VAP). The vein is most anterior.'
  },
  {
    id: 'right-pedicle-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How does the right renal artery course to the kidney?',
    options: ['Short course anterior to IVC', 'Long course posterior to IVC', 'Does not cross IVC', 'Through IVC'],
    correctAnswer: 1,
    explanation: 'The right renal artery has a longer course than the left and passes posterior to the inferior vena cava to reach the right kidney.'
  },
  {
    id: 'right-pedicle-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the length of the right renal vein compared to the left?',
    options: ['Longer than left', 'Shorter than left (2-3 cm vs 6-8 cm)', 'Equal length', 'Variable'],
    correctAnswer: 1,
    explanation: 'The right renal vein is shorter (2-3 cm) than the left (6-8 cm) because the IVC lies to the right of the aorta, closer to the right kidney.'
  },
  {
    id: 'right-pedicle-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What veins drain directly into the right renal vein?',
    options: ['Left gonadal vein', 'Usually no major tributaries (short vein)', 'Suprarenal and gonadal', 'Lumbar veins'],
    correctAnswer: 1,
    explanation: 'The right renal vein usually has no major tributaries due to its short length. The right gonadal and right suprarenal veins typically drain directly into the IVC.'
  },
  {
    id: 'right-pedicle-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of right renal artery passing behind the IVC?',
    options: ['No significance', 'Makes right nephrectomy more complex; risk of IVC injury', 'Easier access', 'Prevents nephrectomy'],
    correctAnswer: 1,
    explanation: 'The right renal artery passing posterior to the IVC can make right nephrectomy more challenging, requiring careful retraction of the IVC and awareness of potential injury.'
  },
  {
    id: 'right-pedicle-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How common are accessory renal arteries?',
    options: ['Very rare (<1%)', 'Common (25-30% of individuals)', 'Universal', 'Only on left side'],
    correctAnswer: 1,
    explanation: 'Accessory (supernumerary) renal arteries occur in 25-30% of individuals. They are end arteries, so occlusion causes segmental infarction.'
  },
  {
    id: 'right-pedicle-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is a polar artery to the kidney?',
    options: ['Main renal artery', 'Accessory artery entering the upper or lower pole outside the hilum', 'Capsular artery', 'Ureteric artery'],
    correctAnswer: 1,
    explanation: 'Polar arteries are accessory renal arteries that enter the kidney at the upper or lower pole rather than through the hilum. They may cross the ureteropelvic junction and cause obstruction.'
  }
];

// 5. Left Renal Pedicle
export const leftRenalPedicleQuestions: Question[] = [
  {
    id: 'left-pedicle-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is unique about the left renal vein course?',
    options: ['It is very short', 'It crosses anterior to the aorta to reach the IVC', 'It passes posterior to the aorta', 'It does not connect to IVC'],
    correctAnswer: 1,
    explanation: 'The left renal vein has a long course (6-8 cm), crossing anterior to the aorta (and posterior to the SMA) to drain into the IVC on the right side.'
  },
  {
    id: 'left-pedicle-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What veins drain into the left renal vein?',
    options: ['None', 'Left suprarenal, left gonadal (testicular/ovarian), and left inferior phrenic veins', 'Right gonadal vein', 'Portal vein tributaries'],
    correctAnswer: 1,
    explanation: 'The left renal vein receives the left suprarenal vein, left gonadal vein (testicular/ovarian), and often the left inferior phrenic vein. The right-sided equivalents drain directly to IVC.'
  },
  {
    id: 'left-pedicle-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Why is the left kidney preferred for living donor transplantation?',
    options: ['It is healthier', 'Longer left renal vein makes surgical anastomosis easier', 'Right kidney is essential', 'No preference exists'],
    correctAnswer: 1,
    explanation: 'The left kidney is preferred for living donor transplantation because the longer left renal vein (6-8 cm vs 2-3 cm) provides more length for surgical anastomosis in the recipient.'
  },
  {
    id: 'left-pedicle-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is nutcracker syndrome?',
    options: ['Kidney stone disease', 'Compression of left renal vein between aorta and SMA', 'Ureteral obstruction', 'Renal artery stenosis'],
    correctAnswer: 1,
    explanation: 'Nutcracker syndrome is compression of the left renal vein between the aorta (posteriorly) and superior mesenteric artery (anteriorly), causing left renal venous hypertension and hematuria.'
  },
  {
    id: 'left-pedicle-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the clinical significance of the left gonadal vein draining into the left renal vein?',
    options: ['No significance', 'Left varicocele more common due to perpendicular drainage and valve incompetence', 'Right varicocele more common', 'Affects fertility equally'],
    correctAnswer: 1,
    explanation: 'Left varicoceles are more common (85-90%) because the left gonadal vein enters the left renal vein perpendicularly (increasing resistance) and has more incompetent valves compared to the right gonadal vein draining directly into IVC.'
  },
  {
    id: 'left-pedicle-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the left renal vein to the third part of the duodenum?',
    options: ['Superior to it', 'Posterior to it (between duodenum and aorta)', 'Anterior to it', 'No relationship'],
    correctAnswer: 1,
    explanation: 'The left renal vein passes posterior to the third part of the duodenum and anterior to the aorta, in the angle between the SMA and aorta.'
  },
  {
    id: 'left-pedicle-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How does the left renal artery compare to the right?',
    options: ['Longer than right', 'Shorter than right (aorta is left of midline)', 'Same length', 'Does not exist'],
    correctAnswer: 1,
    explanation: 'The left renal artery is slightly shorter than the right because the aorta lies slightly left of the midline, closer to the left kidney.'
  },
  {
    id: 'left-pedicle-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is a retroaortic left renal vein?',
    options: ['Normal variant', 'Anomaly where left renal vein passes posterior to aorta', 'Double left renal vein', 'Left renal vein draining to portal system'],
    correctAnswer: 1,
    explanation: 'A retroaortic left renal vein is a variant (1-3%) where the vein passes posterior to the aorta instead of anterior. This has surgical implications for aortic and renal surgery.'
  }
];

// 6. Urinary Excretory Pathways: Calyces, Pelvis, Ureter
export const urinaryExcretoryPathwaysQuestions: Question[] = [
  {
    id: 'excretory-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the minor calyces and how many are there?',
    options: ['3 per kidney', 'Cup-shaped structures receiving renal pyramids; 7-13 per kidney', '2 per kidney', '20 per kidney'],
    correctAnswer: 1,
    explanation: 'Minor calyces are cup-shaped structures that surround the renal papillae (tips of renal pyramids) and collect urine. There are typically 7-13 minor calyces per kidney.'
  },
  {
    id: 'excretory-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How are major calyces formed?',
    options: ['From nephrons directly', 'By union of 2-3 minor calyces; usually 2-3 major calyces per kidney', 'From ureter', 'From bladder'],
    correctAnswer: 1,
    explanation: 'Major calyces are formed by the union of 2-3 minor calyces. There are typically 2-3 major calyces (upper, middle, lower) that unite to form the renal pelvis.'
  },
  {
    id: 'excretory-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the renal pelvis?',
    options: ['Part of kidney parenchyma', 'Funnel-shaped structure formed by union of major calyces, becoming ureter', 'Capsule of kidney', 'Blood vessel'],
    correctAnswer: 1,
    explanation: 'The renal pelvis is a funnel-shaped collecting structure formed by the union of major calyces. It lies partly within the renal sinus and partly outside, becoming the ureter at the ureteropelvic junction (UPJ).'
  },
  {
    id: 'excretory-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the ureteropelvic junction (UPJ)?',
    options: ['Junction of ureter with bladder', 'Junction of renal pelvis with ureter; common site of obstruction', 'Junction of calyces', 'Junction within kidney'],
    correctAnswer: 1,
    explanation: 'The UPJ is where the renal pelvis narrows to become the ureter. It is a common site of congenital or acquired obstruction (UPJ obstruction).'
  },
  {
    id: 'excretory-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the three normal constrictions of the ureter?',
    options: ['All at same location', 'UPJ, crossing of iliac vessels, vesicoureteral junction', 'Only at bladder entry', 'No constrictions'],
    correctAnswer: 1,
    explanation: 'The ureter has three normal constrictions: at the UPJ, where it crosses the iliac vessels (pelvic brim), and at the vesicoureteral junction (VUJ) entering the bladder. Stones commonly lodge here.'
  },
  {
    id: 'excretory-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What type of epithelium lines the urinary collecting system?',
    options: ['Squamous epithelium', 'Transitional epithelium (urothelium)', 'Columnar epithelium', 'Cuboidal epithelium'],
    correctAnswer: 1,
    explanation: 'Transitional epithelium (urothelium) lines the urinary tract from renal calyces to the urethra. It can stretch to accommodate urine volume changes.'
  },
  {
    id: 'excretory-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What muscle layer propels urine through the ureter?',
    options: ['No muscle present', 'Smooth muscle with peristaltic waves (inner longitudinal, middle circular, outer longitudinal)', 'Skeletal muscle', 'Cardiac muscle'],
    correctAnswer: 1,
    explanation: 'The ureter has smooth muscle that produces peristaltic waves (1-5 per minute) to propel urine to the bladder. The arrangement is inner longitudinal, middle circular, and outer longitudinal (in lower third).'
  },
  {
    id: 'excretory-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the approximate length of the ureter?',
    options: ['10 cm', '25-30 cm', '50 cm', '75 cm'],
    correctAnswer: 1,
    explanation: 'The ureter is approximately 25-30 cm long, extending from the renal pelvis to the bladder. It is divided into abdominal (lumbar), pelvic, and intramural portions.'
  }
];

// 7. Ureter
export const ureterQuestions: Question[] = [
  {
    id: 'ureter-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the course of the abdominal (lumbar) ureter?',
    options: ['Lateral to psoas', 'Descends on psoas major, crosses genitofemoral nerve and iliac vessels', 'Anterior to kidney', 'Through psoas muscle'],
    correctAnswer: 1,
    explanation: 'The abdominal ureter descends on the psoas major muscle, crosses the genitofemoral nerve, and crosses the common iliac vessels at the pelvic brim to enter the pelvis.'
  },
  {
    id: 'ureter-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What structures does the ureter cross to enter the pelvis?',
    options: ['External iliac vessels', 'Common iliac vessels at their bifurcation', 'Internal iliac vessels', 'Femoral vessels'],
    correctAnswer: 1,
    explanation: 'The ureter crosses the common iliac vessels at or near their bifurcation into external and internal iliac arteries to enter the pelvis. This is the second narrowing point.'
  },
  {
    id: 'ureter-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the relationship of the ureter to the gonadal vessels?',
    options: ['Ureter is anterior', 'Gonadal vessels cross anterior to ureter', 'No relationship', 'They run parallel without crossing'],
    correctAnswer: 1,
    explanation: 'The gonadal (testicular/ovarian) vessels cross anterior to the ureter in the abdomen. This is important during retroperitoneal surgery.'
  },
  {
    id: 'ureter-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'In females, what is the relationship of the ureter to the uterine artery?',
    options: ['Ureter is anterior to uterine artery', 'Uterine artery crosses over (anterior to) ureter - "water under the bridge"', 'No relationship', 'Ureter is lateral to uterine artery'],
    correctAnswer: 1,
    explanation: 'The uterine artery crosses over (anterior to) the ureter approximately 2 cm lateral to the cervix. Mnemonic: "water (ureter) under the bridge (uterine artery)." Risk of injury during hysterectomy.'
  },
  {
    id: 'ureter-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the blood supply of the ureter?',
    options: ['Single artery throughout', 'Multiple sources: renal, gonadal, aortic, iliac, vesical, and uterine arteries', 'Only from renal artery', 'Only from iliac arteries'],
    correctAnswer: 1,
    explanation: 'The ureter has a segmental blood supply from multiple sources: renal, gonadal, direct aortic branches, common iliac, internal iliac, vesical, and (in females) uterine arteries.'
  },
  {
    id: 'ureter-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'How does the ureter enter the bladder?',
    options: ['Perpendicular to bladder wall', 'Obliquely through bladder wall, creating a valve mechanism', 'Through a sphincter', 'Directly without any valve'],
    correctAnswer: 1,
    explanation: 'The ureter passes obliquely through the bladder wall (intramural ureter ~2cm) before opening into the bladder, creating a valve mechanism that prevents vesicoureteral reflux during bladder contraction.'
  },
  {
    id: 'ureter-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is referred pain from ureteral colic typically felt?',
    options: ['Shoulder', 'Flank radiating to groin, labia/scrotum (following dermatomes)', 'Chest', 'Back of thigh'],
    correctAnswer: 1,
    explanation: 'Ureteral colic causes referred pain from flank to groin, following the course of the ureter and involving T11-L2 dermatomes. Lower ureteral stones may cause testicular/labial pain.'
  },
  {
    id: 'ureter-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the most common site for ureteral stones to lodge?',
    options: ['Upper ureter', 'Vesicoureteral junction (narrowest point)', 'Middle ureter', 'Renal pelvis'],
    correctAnswer: 1,
    explanation: 'The vesicoureteral junction is the narrowest point of the ureter and the most common site for stone impaction. Other common sites are the UPJ and crossing of iliac vessels.'
  }
];

// 8. Adrenal (Suprarenal) Glands
export const adrenalGlandsQuestions: Question[] = [
  {
    id: 'adrenal-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where are the adrenal glands located?',
    options: ['Below the kidneys', 'Superior and medial to the upper poles of the kidneys', 'Anterior to kidneys', 'In the pelvis'],
    correctAnswer: 1,
    explanation: 'The adrenal (suprarenal) glands are located superior and slightly medial to the upper poles of each kidney, within the renal fascia but separated by a fascial septum.'
  },
  {
    id: 'adrenal-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the shape difference between right and left adrenal glands?',
    options: ['Both are round', 'Right is pyramidal/triangular, left is semilunar/crescentic', 'Both are triangular', 'Left is pyramidal, right is semilunar'],
    correctAnswer: 1,
    explanation: 'The right adrenal gland is pyramidal or triangular, sitting like a cap on the kidney. The left adrenal gland is semilunar or crescentic, extending along the medial border of the left kidney.'
  },
  {
    id: 'adrenal-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the arterial blood supply of the adrenal glands?',
    options: ['Single artery', 'Triple supply: superior (from inferior phrenic), middle (from aorta), inferior (from renal artery)', 'Only from renal artery', 'Only from aorta'],
    correctAnswer: 1,
    explanation: 'Adrenal glands have a rich arterial supply from three sources: superior suprarenal (from inferior phrenic), middle suprarenal (from aorta), and inferior suprarenal (from renal artery).'
  },
  {
    id: 'adrenal-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How does venous drainage of the adrenal glands differ between sides?',
    options: ['Both drain to IVC', 'Right drains directly to IVC (short vein), left drains to left renal vein', 'Both drain to renal veins', 'Both drain to portal vein'],
    correctAnswer: 1,
    explanation: 'The right adrenal vein is short and drains directly into the IVC (surgical challenge). The left adrenal vein is longer and drains into the left renal vein.'
  },
  {
    id: 'adrenal-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the two parts of the adrenal gland and their embryological origins?',
    options: ['Both from mesoderm', 'Cortex from mesoderm (steroid hormones), medulla from neural crest (catecholamines)', 'Both from ectoderm', 'Both from neural crest'],
    correctAnswer: 1,
    explanation: 'The adrenal cortex develops from mesoderm and produces steroid hormones (cortisol, aldosterone, androgens). The medulla develops from neural crest cells and produces catecholamines (epinephrine, norepinephrine).'
  },
  {
    id: 'adrenal-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the anterior relation of the right adrenal gland?',
    options: ['Stomach', 'Liver (bare area) and IVC', 'Spleen', 'Pancreas'],
    correctAnswer: 1,
    explanation: 'The right adrenal gland is related anteriorly to the bare area of the liver and the IVC. It is tucked between the right kidney and IVC.'
  },
  {
    id: 'adrenal-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the anterior relation of the left adrenal gland?',
    options: ['Liver', 'Stomach (via lesser sac), pancreas, and splenic vessels', 'Duodenum', 'Ascending colon'],
    correctAnswer: 1,
    explanation: 'The left adrenal gland is related anteriorly to the stomach (separated by lesser sac), pancreatic tail, and splenic vessels.'
  },
  {
    id: 'adrenal-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Why is the right adrenal vein surgically challenging?',
    options: ['It is very long', 'It is short and drains directly into IVC posteriorly, risk of hemorrhage', 'It does not exist', 'It is very small'],
    correctAnswer: 1,
    explanation: 'The right adrenal vein is short (5-10mm) and drains directly into the posterior aspect of the IVC. During right adrenalectomy, this vein must be carefully ligated to avoid IVC injury and hemorrhage.'
  }
];

// 9. Urinary Bladder
export const urinaryBladderQuestions: Question[] = [
  {
    id: 'bladder-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the empty urinary bladder located?',
    options: ['In the abdomen', 'In the true pelvis, posterior to pubic symphysis', 'In the perineum', 'Retroperitoneal in upper abdomen'],
    correctAnswer: 1,
    explanation: 'When empty, the bladder lies entirely within the true (lesser) pelvis, posterior to the pubic symphysis. When full, it can rise into the abdomen.'
  },
  {
    id: 'bladder-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the trigone of the bladder?',
    options: ['A muscle layer', 'Triangular area between ureteric orifices and internal urethral orifice', 'Outer covering', 'Blood vessel area'],
    correctAnswer: 1,
    explanation: 'The trigone is a smooth triangular area on the internal bladder surface, bounded by the two ureteric orifices superolaterally and the internal urethral orifice inferiorly.'
  },
  {
    id: 'bladder-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is unique about the mucosa of the trigone compared to rest of bladder?',
    options: ['Different epithelium', 'Smooth (no rugae) even when bladder empty; firmly attached to muscle', 'Produces mucus', 'Has hair follicles'],
    correctAnswer: 1,
    explanation: 'The trigone mucosa is smooth and firmly attached to underlying muscle, unlike the rest of the bladder which has rugae (folds) when empty that flatten when full.'
  },
  {
    id: 'bladder-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What muscle forms the bladder wall?',
    options: ['Skeletal muscle', 'Detrusor muscle (smooth muscle)', 'Cardiac muscle', 'No muscle'],
    correctAnswer: 1,
    explanation: 'The detrusor muscle is the smooth muscle forming the bladder wall, arranged in interlacing bundles. It contracts during micturition to expel urine.'
  },
  {
    id: 'bladder-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the internal urethral sphincter?',
    options: ['Skeletal muscle sphincter', 'Thickened detrusor muscle at bladder neck (involuntary)', 'Part of external sphincter', 'Does not exist'],
    correctAnswer: 1,
    explanation: 'The internal urethral sphincter is formed by thickened detrusor smooth muscle at the bladder neck. It is involuntary and prevents leakage during bladder filling.'
  },
  {
    id: 'bladder-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the bladder capacity?',
    options: ['50-100 mL', '300-500 mL (urge felt at ~200 mL)', '1000 mL', '2000 mL'],
    correctAnswer: 1,
    explanation: 'Normal bladder capacity is approximately 300-500 mL. The urge to void is typically felt at around 200-300 mL. Maximum capacity can reach 800 mL or more.'
  },
  {
    id: 'bladder-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the nerve supply to the bladder?',
    options: ['Somatic nerves only', 'Parasympathetic (pelvic splanchnic S2-S4), sympathetic (hypogastric), somatic (pudendal to external sphincter)', 'Sympathetic only', 'Vagus nerve'],
    correctAnswer: 1,
    explanation: 'Bladder innervation: parasympathetic (S2-S4 pelvic splanchnic) for detrusor contraction; sympathetic (T11-L2 hypogastric) for relaxation and internal sphincter; somatic (S2-S4 pudendal) for external sphincter.'
  },
  {
    id: 'bladder-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is peritoneum in relation to the bladder?',
    options: ['Covers entire bladder', 'Covers only superior surface; absent from anterior and lateral walls', 'Covers only anterior', 'No peritoneal covering'],
    correctAnswer: 1,
    explanation: 'Peritoneum covers only the superior surface of the bladder. The anterior and lateral walls are extraperitoneal, important for suprapubic catheterization without entering the peritoneal cavity.'
  }
];

// 10. Bladder Lodge
export const bladderLodgeQuestions: Question[] = [
  {
    id: 'bladder-lodge-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What forms the anterior boundary of the bladder lodge?',
    options: ['Sacrum', 'Pubic symphysis and pubic bones', 'Rectum', 'Pelvic floor'],
    correctAnswer: 1,
    explanation: 'The anterior boundary of the bladder lodge is formed by the pubic symphysis and pubic bones. The retropubic space (of Retzius) lies between the bladder and pubis.'
  },
  {
    id: 'bladder-lodge-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the retropubic space (space of Retzius)?',
    options: ['Space behind rectum', 'Extraperitoneal space between bladder and pubic symphysis', 'Space in scrotum', 'Intraperitoneal space'],
    correctAnswer: 1,
    explanation: 'The retropubic space (of Retzius) is an extraperitoneal space between the bladder posteriorly and pubic symphysis anteriorly. It contains fat and the vesicoprostatic venous plexus.'
  },
  {
    id: 'bladder-lodge-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is posterior to the bladder in males?',
    options: ['Uterus', 'Rectum, seminal vesicles, and vas deferens', 'Ovaries', 'Sigmoid colon only'],
    correctAnswer: 1,
    explanation: 'In males, posterior to the bladder are the seminal vesicles, ampullae of the vas deferens, and the rectum (separated by rectovesical pouch and Denonvilliers fascia).'
  },
  {
    id: 'bladder-lodge-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is posterior to the bladder in females?',
    options: ['Rectum only', 'Uterus and vagina (vesicouterine pouch between bladder and uterus)', 'Seminal vesicles', 'Prostate'],
    correctAnswer: 1,
    explanation: 'In females, the uterus and upper vagina lie posterior to the bladder. The vesicouterine pouch (peritoneum) lies between the bladder and uterus at the level of the uterine isthmus.'
  },
  {
    id: 'bladder-lodge-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What forms the floor (inferior boundary) of the bladder lodge?',
    options: ['Peritoneum', 'Pelvic floor (levator ani and coccygeus)', 'Pubic bone', 'Sacrum'],
    correctAnswer: 1,
    explanation: 'The floor of the bladder lodge is formed by the pelvic diaphragm (levator ani and coccygeus muscles), which supports the pelvic viscera.'
  },
  {
    id: 'bladder-lodge-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the rectovesical pouch in males?',
    options: ['Space above bladder', 'Peritoneal pouch between bladder and rectum (lowest peritoneal point in male pelvis)', 'Space in scrotum', 'Part of bladder wall'],
    correctAnswer: 1,
    explanation: 'The rectovesical pouch is the peritoneal reflection between the bladder and rectum in males. It is the lowest point of the peritoneal cavity in males and can accumulate fluid.'
  },
  {
    id: 'bladder-lodge-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What ligaments support the bladder?',
    options: ['No ligaments', 'Pubovesical (females) or puboprostatic (males) ligaments, lateral ligaments', 'Broad ligaments', 'Round ligaments'],
    correctAnswer: 1,
    explanation: 'The bladder is supported by pubovesical ligaments in females (puboprostatic in males) anteriorly, lateral ligaments (condensation around vessels), and the pelvic floor inferiorly.'
  },
  {
    id: 'bladder-lodge-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of the retropubic space?',
    options: ['No significance', 'Allows suprapubic catheterization and bladder/prostate surgery without entering peritoneum', 'Only for diagnosis', 'Site of hernia'],
    correctAnswer: 1,
    explanation: 'The retropubic space allows suprapubic catheterization, retropubic prostatectomy, and bladder surgery without opening the peritoneal cavity. It also contains important venous plexuses.'
  }
];

// 11. Male Urethra
export const maleUrethraQuestions: Question[] = [
  {
    id: 'male-urethra-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the four parts of the male urethra?',
    options: ['Only three parts', 'Preprostatic (intramural), prostatic, membranous, spongy (penile)', 'Prostatic and penile only', 'Bladder and urethral parts'],
    correctAnswer: 1,
    explanation: 'The male urethra has four parts: preprostatic (intramural, in bladder wall), prostatic (through prostate), membranous (through urogenital diaphragm), and spongy/penile (in corpus spongiosum).'
  },
  {
    id: 'male-urethra-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the approximate total length of the male urethra?',
    options: ['4 cm', '8 cm', '18-20 cm', '30 cm'],
    correctAnswer: 2,
    explanation: 'The male urethra is approximately 18-20 cm long, extending from the internal urethral orifice at the bladder to the external urethral meatus at the glans penis.'
  },
  {
    id: 'male-urethra-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What structures open into the prostatic urethra?',
    options: ['Only bladder', 'Prostatic ducts, ejaculatory ducts (at seminal colliculus), and prostatic utricle', 'Vas deferens directly', 'Seminal vesicles directly'],
    correctAnswer: 1,
    explanation: 'The prostatic urethra receives openings of numerous prostatic ducts, both ejaculatory ducts (at the seminal colliculus/verumontanum), and the prostatic utricle (Müllerian remnant).'
  },
  {
    id: 'male-urethra-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the seminal colliculus (verumontanum)?',
    options: ['Part of seminal vesicle', 'Midline elevation in prostatic urethra where ejaculatory ducts open', 'Bladder sphincter', 'Penile structure'],
    correctAnswer: 1,
    explanation: 'The seminal colliculus (verumontanum) is a midline ridge on the posterior wall of the prostatic urethra where the ejaculatory ducts and prostatic utricle open.'
  },
  {
    id: 'male-urethra-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where is the membranous urethra and why is it clinically significant?',
    options: ['In the prostate', 'Passes through urogenital diaphragm; narrowest and least distensible part, vulnerable to injury', 'In the penis', 'In the bladder neck'],
    correctAnswer: 1,
    explanation: 'The membranous urethra passes through the urogenital diaphragm (deep perineal pouch). It is the shortest (1-2 cm), narrowest, and least distensible part, vulnerable to pelvic fracture injury.'
  },
  {
    id: 'male-urethra-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What muscle surrounds the membranous urethra?',
    options: ['Detrusor', 'External urethral sphincter (skeletal muscle)', 'Internal sphincter', 'Bulbospongiosus'],
    correctAnswer: 1,
    explanation: 'The external urethral sphincter (sphincter urethrae) is a skeletal muscle surrounding the membranous urethra, providing voluntary control of urination.'
  },
  {
    id: 'male-urethra-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the three constrictions of the male urethra?',
    options: ['No constrictions', 'External meatus (narrowest), membranous urethra, internal urethral orifice', 'Only at prostate', 'At bulb and glans only'],
    correctAnswer: 1,
    explanation: 'The male urethra has three constrictions: the external urethral meatus (narrowest), membranous urethra, and internal urethral orifice. The navicular fossa and prostatic urethra are dilations.'
  },
  {
    id: 'male-urethra-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What opens into the spongy urethra?',
    options: ['Prostate ducts', 'Bulbourethral (Cowper) glands and urethral glands (of Littré)', 'Ejaculatory ducts', 'Seminal vesicles'],
    correctAnswer: 1,
    explanation: 'The spongy urethra receives the ducts of bulbourethral (Cowper) glands in the bulb portion and numerous small urethral glands (of Littré) throughout its length.'
  }
];

// 12. Female Urethra
export const femaleUrethraQuestions: Question[] = [
  {
    id: 'female-urethra-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the length of the female urethra?',
    options: ['1-2 cm', '3-4 cm', '10 cm', '18-20 cm'],
    correctAnswer: 1,
    explanation: 'The female urethra is approximately 3-4 cm long, much shorter than the male urethra (18-20 cm). It extends from the bladder neck to the external urethral orifice in the vestibule.'
  },
  {
    id: 'female-urethra-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the female urethra open?',
    options: ['Into the vagina', 'Into the vestibule, anterior to vaginal orifice', 'On the labia majora', 'On the clitoris'],
    correctAnswer: 1,
    explanation: 'The female urethra opens into the vestibule (between labia minora), about 2-3 cm posterior to the clitoris and anterior to the vaginal orifice.'
  },
  {
    id: 'female-urethra-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the female urethra to the vagina?',
    options: ['No relationship', 'Urethra is embedded in anterior vaginal wall', 'Urethra is posterior to vagina', 'Urethra is inside vagina'],
    correctAnswer: 1,
    explanation: 'The female urethra is embedded in the anterior wall of the vagina. This close relationship explains why vaginal procedures can affect urethral function and vice versa.'
  },
  {
    id: 'female-urethra-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What glands open into or near the female urethra?',
    options: ['Prostate glands', 'Paraurethral (Skene) glands and urethral glands', 'Bartholin glands', 'Cowper glands'],
    correctAnswer: 1,
    explanation: 'Paraurethral (Skene) glands open on either side of the external urethral orifice. These are homologous to the male prostate and can become infected (Skenitis).'
  },
  {
    id: 'female-urethra-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What sphincters control the female urethra?',
    options: ['Only external sphincter', 'Internal (smooth muscle) and external (skeletal muscle) sphincters', 'No sphincters', 'Only internal sphincter'],
    correctAnswer: 1,
    explanation: 'The female urethra has an internal sphincter (smooth muscle at bladder neck) and an external sphincter (skeletal muscle in urogenital diaphragm) similar to males.'
  },
  {
    id: 'female-urethra-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Why are urinary tract infections more common in females?',
    options: ['Weaker immune system', 'Shorter urethra and proximity to anal region', 'Hormonal factors only', 'Larger bladder'],
    correctAnswer: 1,
    explanation: 'The shorter female urethra (3-4 cm vs 18-20 cm in males) and its proximity to the vaginal and anal regions allow easier ascent of bacteria to the bladder.'
  },
  {
    id: 'female-urethra-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is urethral hypermobility?',
    options: ['Normal finding', 'Excessive movement of urethra contributing to stress urinary incontinence', 'Urethral stricture', 'Urethral prolapse'],
    correctAnswer: 1,
    explanation: 'Urethral hypermobility is excessive descent of the urethra during increased abdominal pressure (coughing, sneezing), contributing to stress urinary incontinence. Often due to pelvic floor weakness.'
  },
  {
    id: 'female-urethra-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What supports the female urethra?',
    options: ['No supporting structures', 'Pubourethral ligaments, urethropelvic ligaments, and pelvic floor muscles', 'Only pelvic bones', 'Broad ligaments'],
    correctAnswer: 1,
    explanation: 'The female urethra is supported by pubourethral ligaments, urethropelvic (periurethral) ligaments, and the pelvic floor muscles (especially pubococcygeus portion of levator ani).'
  }
];

// Combine all urinary questions for easy import
export const urinaryQuestions: Question[] = [
  ...renalLodgeFasciaQuestions,
  ...rightKidneyQuestions,
  ...leftKidneyQuestions,
  ...rightRenalPedicleQuestions,
  ...leftRenalPedicleQuestions,
  ...urinaryExcretoryPathwaysQuestions,
  ...ureterQuestions,
  ...adrenalGlandsQuestions,
  ...urinaryBladderQuestions,
  ...bladderLodgeQuestions,
  ...maleUrethraQuestions,
  ...femaleUrethraQuestions
];
