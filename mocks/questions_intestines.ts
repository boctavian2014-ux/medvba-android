import type { Question } from './questions';

// ============================================================================
// INTESTINES & RECTUM QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Jejuno-ileonul (jejunoIleumQuestions)
// 2. Mezenterul (mesenteryQuestions)
// 3. Cecul și apendicele vermiform (cecumAppendixQuestions)
// 4. Colonul ascendent (ascendingColonQuestions)
// 5. Colonul și mezocolonul transvers (transverseColonMesocolonQuestions)
// 6. Colonul descendent (descendingColonQuestions)
// 7. Colonul sigmoid (sigmoidColonQuestions)
// 8. Mezoul sigmoid și foseta intersigmoidiană (sigmoidMesoFossaQuestions)
// 9. Rectul pelvin (pelvicRectumQuestions)
// 10. Loja rectală la femeie (rectalLodgeFemaleQuestions)
// 11. Loja rectală la bărbat (rectalLodgeMaleQuestions)
// ============================================================================

// 1. Jejunum and Ileum
export const jejunoIleumQuestions: Question[] = [
  {
    id: 'ji1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which feature distinguishes jejunum from ileum macroscopically?',
    options: [
      'Ileum has thicker walls and more vasa recta',
      'Jejunum has thicker walls, larger diameter, and more prominent plicae circulares',
      'Jejunum is located in the right iliac fossa',
      'Ileum has fewer arterial arcades',
      'There is no macroscopic difference'
    ],
    correctAnswer: 1,
    explanation:
      'The jejunum has thicker walls, larger diameter, more prominent plicae circulares (circular folds), fewer arterial arcades, and longer vasa recta compared to the ileum.'
  },
  {
    id: 'ji2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Where does the jejunum begin?',
    options: [
      'At the pylorus',
      'At the ileocecal junction',
      'At the duodenojejunal flexure (ligament of Treitz)',
      'At the hepatic flexure',
      'At the splenic flexure'
    ],
    correctAnswer: 2,
    explanation:
      'The jejunum begins at the duodenojejunal flexure, which is supported by the suspensory ligament of Treitz, marking the transition from the fixed duodenum to the mobile small bowel.'
  },
  {
    id: 'ji3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which arterial pattern is characteristic of the jejunal mesentery?',
    options: [
      'Many short arcades with short vasa recta',
      'Few long arcades with long vasa recta',
      'No arterial arcades',
      'Direct branches from the aorta',
      'Single arcade with short vasa recta'
    ],
    correctAnswer: 1,
    explanation:
      'Jejunal arteries form only one or two arcades before giving off long, straight vasa recta to the bowel wall, in contrast to the ileum which has multiple arcades and short vasa recta.'
  },
  {
    id: 'ji4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which lymphoid structures are characteristic of the ileum?',
    options: [
      'Isolated lymphoid follicles only',
      'Aggregated lymphoid nodules (Peyer\'s patches)',
      'Lymph nodes within the bowel wall',
      'No lymphoid tissue',
      'Tonsils'
    ],
    correctAnswer: 1,
    explanation:
      'Peyer\'s patches are aggregated lymphoid nodules found predominantly in the ileum, located on the antimesenteric border, important for intestinal immune surveillance.'
  },
  {
    id: 'ji5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the approximate length of the jejunum and ileum combined?',
    options: [
      '1-2 meters',
      '3-4 meters',
      '6-7 meters',
      '10-12 meters',
      '15-20 meters'
    ],
    correctAnswer: 2,
    explanation:
      'The jejunum and ileum together measure approximately 6-7 meters in length, with the jejunum comprising roughly the proximal 2/5 and the ileum the distal 3/5.'
  },
  {
    id: 'ji6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where does the ileum terminate?',
    options: [
      'At the duodenojejunal flexure',
      'At the appendix',
      'At the ileocecal junction opening into the cecum',
      'At the rectum',
      'At the splenic flexure'
    ],
    correctAnswer: 2,
    explanation:
      'The ileum terminates at the ileocecal junction, where it opens into the posteromedial aspect of the cecum, controlled by the ileocecal valve.'
  },
  {
    id: 'ji7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which vessel provides the arterial supply to the jejunum and ileum?',
    options: [
      'Celiac trunk',
      'Inferior mesenteric artery',
      'Superior mesenteric artery via jejunal and ileal branches',
      'Internal iliac artery',
      'Gastroduodenal artery'
    ],
    correctAnswer: 2,
    explanation:
      'The jejunum and ileum are supplied by jejunal and ileal branches arising from the left side of the superior mesenteric artery, forming arterial arcades in the mesentery.'
  },
  {
    id: 'ji8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which feature helps identify the antimesenteric border of the small intestine?',
    options: [
      'Attachment of the mesentery',
      'Location of the arterial arcades',
      'Opposite to mesenteric attachment; site of Peyer\'s patches in ileum',
      'Presence of appendices epiploicae',
      'Presence of taeniae coli'
    ],
    correctAnswer: 2,
    explanation:
      'The antimesenteric border is opposite the mesenteric attachment, where Peyer\'s patches are located in the ileum and where perforation may occur in typhoid fever.'
  },
  {
    id: 'ji9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'A Meckel\'s diverticulum, when present, is located on which border of the ileum?',
    options: [
      'Mesenteric border',
      'Antimesenteric border',
      'Superior border',
      'Inferior border',
      'Lateral border'
    ],
    correctAnswer: 1,
    explanation:
      'Meckel\'s diverticulum is a remnant of the vitellointestinal (omphalomesenteric) duct, located on the antimesenteric border of the ileum, typically within 60-100 cm of the ileocecal valve.'
  },
  {
    id: 'ji10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which venous drainage pattern mirrors the arterial supply to the jejunoileum?',
    options: [
      'Direct drainage to the IVC',
      'Drainage via jejunal and ileal veins to the superior mesenteric vein',
      'Drainage to the azygos system',
      'Drainage to the inferior mesenteric vein',
      'Drainage to the portal vein directly'
    ],
    correctAnswer: 1,
    explanation:
      'Venous blood from the jejunum and ileum drains via jejunal and ileal veins that parallel the arteries and join to form the superior mesenteric vein, which contributes to the portal vein.'
  }
];

// 2. Mesentery
export const mesenteryQuestions: Question[] = [
  {
    id: 'mes1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'What is the mesentery?',
    options: [
      'A muscle layer of the intestine',
      'A double layer of peritoneum connecting jejunum and ileum to the posterior abdominal wall',
      'The blood supply to the colon',
      'The mucosa of the small intestine',
      'The nerve supply to the gut'
    ],
    correctAnswer: 1,
    explanation:
      'The mesentery is a fan-shaped, double-layered fold of peritoneum that suspends the jejunum and ileum from the posterior abdominal wall, transmitting their blood vessels, nerves and lymphatics.'
  },
  {
    id: 'mes2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Where does the root of the mesentery attach to the posterior abdominal wall?',
    options: [
      'Horizontally across the abdomen',
      'Obliquely from duodenojejunal flexure (L2) to ileocecal junction (right iliac fossa)',
      'Vertically along the aorta',
      'Only at the duodenojejunal flexure',
      'Only at the ileocecal junction'
    ],
    correctAnswer: 1,
    explanation:
      'The root of the mesentery runs obliquely from the duodenojejunal flexure (at L2) to the ileocecal junction (right iliac fossa), approximately 15 cm in length, crossing several structures.'
  },
  {
    id: 'mes3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structures does the root of the mesentery cross?',
    options: [
      'Stomach and spleen',
      'Third part of duodenum, aorta, IVC, right ureter, right psoas muscle',
      'Liver and gallbladder',
      'Transverse colon only',
      'Bladder and rectum'
    ],
    correctAnswer: 1,
    explanation:
      'The root of the mesentery crosses (from left to right): the third part of the duodenum, aorta, IVC, right ureter and right psoas major muscle.'
  },
  {
    id: 'mes4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is contained between the two peritoneal layers of the mesentery?',
    options: [
      'Only fat',
      'Branches of SMA and SMV, lymphatics, lymph nodes, nerves and fat',
      'Only blood vessels',
      'Muscle tissue',
      'Bone marrow'
    ],
    correctAnswer: 1,
    explanation:
      'The mesentery contains the jejunal and ileal branches of the superior mesenteric vessels, autonomic nerve plexuses, lymphatic vessels, mesenteric lymph nodes and variable amounts of fat.'
  },
  {
    id: 'mes5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the approximate length of the mesentery from root to intestinal border?',
    options: [
      '5 cm',
      '10 cm',
      '15-20 cm',
      '30-40 cm',
      '50 cm'
    ],
    correctAnswer: 2,
    explanation:
      'The mesentery is approximately 15-20 cm from its root to the intestinal border, allowing considerable mobility of the jejunum and ileum within the abdominal cavity.'
  },
  {
    id: 'mes6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which clinical condition involves twisting of the mesentery and its vessels?',
    options: [
      'Appendicitis',
      'Midgut volvulus',
      'Cholecystitis',
      'Pancreatitis',
      'Peptic ulcer'
    ],
    correctAnswer: 1,
    explanation:
      'Midgut volvulus involves twisting of the small bowel mesentery around the superior mesenteric vessels, often associated with intestinal malrotation, causing vascular compromise and obstruction.'
  },
  {
    id: 'mes7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The mesentery divides the infracolic compartment into which regions?',
    options: [
      'Superior and inferior',
      'Right and left infracolic spaces',
      'Anterior and posterior',
      'Medial and lateral',
      'Supracolic and infracolic'
    ],
    correctAnswer: 1,
    explanation:
      'The root of the mesentery runs obliquely and divides the infracolic compartment into right and left infracolic spaces, with the right space communicating with the pelvis.'
  },
  {
    id: 'mes8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which lymph node group drains the jejunum and ileum via the mesentery?',
    options: [
      'Inguinal lymph nodes',
      'Superior mesenteric lymph nodes',
      'Para-aortic lymph nodes directly',
      'Axillary lymph nodes',
      'Celiac lymph nodes'
    ],
    correctAnswer: 1,
    explanation:
      'Lymph from the jejunum and ileum drains through mesenteric lymph nodes within the mesentery to superior mesenteric nodes around the SMA, then to intestinal trunk and cisterna chyli.'
  },
  {
    id: 'mes9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'An internal hernia may occur through a defect in the mesentery. Which type is most common?',
    options: [
      'Paraduodenal hernia',
      'Trans-mesenteric hernia',
      'Pericecal hernia',
      'Intersigmoid hernia',
      'Foramen of Winslow hernia'
    ],
    correctAnswer: 0,
    explanation:
      'Paraduodenal hernias (through the paraduodenal fossae near the duodenojejunal flexure) are the most common internal hernias, though trans-mesenteric hernias occur through defects in the mesentery itself.'
  },
  {
    id: 'mes10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Recent anatomical studies suggest the mesentery is:',
    options: [
      'Fragmented and discontinuous',
      'A continuous organ from duodenojejunal flexure to rectum',
      'Only present in the jejunum',
      'Absent in adults',
      'Only present in embryonic life'
    ],
    correctAnswer: 1,
    explanation:
      'Recent studies (Coffey & O\'Leary, 2016) demonstrate that the mesentery is a continuous organ, prompting its reclassification and recognition of "mesenteric science" as a field of study.'
  }
];

// 3. Cecum and Vermiform Appendix
export const cecumAppendixQuestions: Question[] = [
  {
    id: 'ca1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Where is the cecum located?',
    options: [
      'Left upper quadrant',
      'Right iliac fossa',
      'Epigastrium',
      'Left iliac fossa',
      'Umbilical region'
    ],
    correctAnswer: 1,
    explanation:
      'The cecum is the blind pouch of the large intestine located in the right iliac fossa, below the ileocecal junction, continuous superiorly with the ascending colon.'
  },
  {
    id: 'ca2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Where does the appendix attach to the cecum?',
    options: [
      'At the apex of the cecum',
      'At the convergence of the three taeniae coli on the posteromedial cecal wall',
      'At the ileocecal junction',
      'At the hepatic flexure',
      'On the anterior cecal wall'
    ],
    correctAnswer: 1,
    explanation:
      'The appendix arises from the posteromedial wall of the cecum, approximately 2 cm below the ileocecal valve, at the point where the three taeniae coli converge.'
  },
  {
    id: 'ca3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which is the most common position of the appendix?',
    options: [
      'Preileal',
      'Retrocecal',
      'Pelvic',
      'Subcecal',
      'Postileal'
    ],
    correctAnswer: 1,
    explanation:
      'The retrocecal position (behind the cecum) is the most common position of the appendix, found in approximately 65% of individuals, which may modify the presentation of appendicitis.'
  },
  {
    id: 'ca4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which surface landmark corresponds to the base of the appendix (McBurney\'s point)?',
    options: [
      'Umbilicus',
      'Junction of lateral 1/3 and medial 2/3 of line from ASIS to umbilicus',
      'Right costal margin',
      'Pubic symphysis',
      'Xiphoid process'
    ],
    correctAnswer: 1,
    explanation:
      'McBurney\'s point is located at the junction of the lateral one-third and medial two-thirds of a line from the right anterior superior iliac spine (ASIS) to the umbilicus.'
  },
  {
    id: 'ca5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which artery supplies the appendix?',
    options: [
      'Right colic artery',
      'Appendicular artery (branch of ileocolic artery)',
      'Middle colic artery',
      'Sigmoid arteries',
      'Superior rectal artery'
    ],
    correctAnswer: 1,
    explanation:
      'The appendicular artery, a branch of the ileocolic artery (from SMA), runs in the free edge of the mesoappendix to supply the appendix; it is an end artery.'
  },
  {
    id: 'ca6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why is the appendicular artery clinically significant?',
    options: [
      'It has rich collateral supply',
      'It is an end artery; thrombosis leads to gangrene of the appendix',
      'It supplies the entire colon',
      'It anastomoses with the portal vein',
      'It supplies the liver'
    ],
    correctAnswer: 1,
    explanation:
      'The appendicular artery is an end artery without significant collateral circulation; occlusion (e.g., by a faecolith) leads to ischemia and gangrene, predisposing to perforation.'
  },
  {
    id: 'ca7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which peritoneal fold suspends the appendix?',
    options: [
      'Greater omentum',
      'Mesoappendix',
      'Transverse mesocolon',
      'Sigmoid mesocolon',
      'Mesentery proper'
    ],
    correctAnswer: 1,
    explanation:
      'The mesoappendix is a triangular fold of peritoneum that attaches the appendix to the mesentery of the terminal ileum and contains the appendicular vessels.'
  },
  {
    id: 'ca8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The ileocecal valve is formed by:',
    options: [
      'A muscular sphincter only',
      'Two horizontal folds (lips) of mucosa projecting into the cecum',
      'A single vertical fold',
      'A ring of lymphoid tissue',
      'A fibrous ring'
    ],
    correctAnswer: 1,
    explanation:
      'The ileocecal valve consists of two horizontal lip-like folds of mucosa (upper and lower) that project into the cecum, helping to prevent reflux of cecal contents into the ileum.'
  },
  {
    id: 'ca9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'In a pelvic appendix, appendicitis may mimic which condition in females?',
    options: [
      'Cholecystitis',
      'Pelvic inflammatory disease or ovarian pathology',
      'Pancreatitis',
      'Gastritis',
      'Hepatitis'
    ],
    correctAnswer: 1,
    explanation:
      'A pelvic appendix lies near the uterine adnexa; when inflamed, it may cause pelvic pain, urinary symptoms, or diarrhea, mimicking PID, ovarian cyst torsion, or ectopic pregnancy.'
  },
  {
    id: 'ca10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the approximate length of the vermiform appendix?',
    options: [
      '1-2 cm',
      '2-5 cm',
      '6-10 cm',
      '15-20 cm',
      '25-30 cm'
    ],
    correctAnswer: 2,
    explanation:
      'The vermiform appendix is typically 6-10 cm in length (range 2-20 cm), with a diameter of approximately 6 mm; obstruction of its narrow lumen predisposes to appendicitis.'
  }
];

// 4. Ascending Colon
export const ascendingColonQuestions: Question[] = [
  {
    id: 'ac1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Where does the ascending colon extend from and to?',
    options: [
      'From cecum to hepatic flexure',
      'From hepatic flexure to splenic flexure',
      'From splenic flexure to sigmoid colon',
      'From sigmoid colon to rectum',
      'From duodenum to jejunum'
    ],
    correctAnswer: 0,
    explanation:
      'The ascending colon extends from the cecum in the right iliac fossa upward to the hepatic (right colic) flexure beneath the right lobe of the liver.'
  },
  {
    id: 'ac2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Is the ascending colon intraperitoneal or retroperitoneal?',
    options: [
      'Completely intraperitoneal with a mesentery',
      'Secondarily retroperitoneal with peritoneum on anterior and lateral surfaces only',
      'Completely extraperitoneal',
      'Has a long mesocolon',
      'Suspended by the greater omentum'
    ],
    correctAnswer: 1,
    explanation:
      'The ascending colon is secondarily retroperitoneal; during development, the ascending mesocolon fuses with the posterior abdominal wall, leaving peritoneum only on the anterior and lateral surfaces.'
  },
  {
    id: 'ac3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which artery supplies the ascending colon?',
    options: [
      'Left colic artery',
      'Ileocolic and right colic arteries (from SMA)',
      'Inferior mesenteric artery branches',
      'Sigmoid arteries',
      'Superior rectal artery'
    ],
    correctAnswer: 1,
    explanation:
      'The ascending colon is supplied by the ileocolic artery and right colic artery, both branches of the superior mesenteric artery.'
  },
  {
    id: 'ac4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structures lie posterior to the ascending colon?',
    options: [
      'Stomach and spleen',
      'Iliacus muscle, quadratus lumborum, right kidney and right ureter',
      'Liver and gallbladder',
      'Pancreas only',
      'Bladder and uterus'
    ],
    correctAnswer: 1,
    explanation:
      'Posterior relations of the ascending colon include the iliacus muscle, quadratus lumborum, right kidney (lower pole), right ureter and iliohypogastric/ilioinguinal nerves.'
  },
  {
    id: 'ac5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which gutter lies lateral to the ascending colon?',
    options: [
      'Left paracolic gutter',
      'Right paracolic gutter',
      'Hepatorenal recess',
      'Lesser sac',
      'Rectovesical pouch'
    ],
    correctAnswer: 1,
    explanation:
      'The right paracolic gutter lies lateral to the ascending colon, providing a pathway for peritoneal fluid to track between the pelvis and the right subhepatic/subphrenic spaces.'
  },
  {
    id: 'ac6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'At which vertebral level is the hepatic flexure typically located?',
    options: [
      'T12',
      'L1',
      'L2-L3',
      'L4',
      'L5'
    ],
    correctAnswer: 2,
    explanation:
      'The hepatic (right colic) flexure is located at approximately L2-L3 level, beneath the right lobe of the liver, where the ascending colon turns sharply to become the transverse colon.'
  },
  {
    id: 'ac7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which characteristic features distinguish colon from small intestine externally?',
    options: [
      'Plicae circulares and Peyer\'s patches',
      'Taeniae coli, haustra and appendices epiploicae',
      'Smooth wall without sacculations',
      'Valvulae conniventes',
      'Presence of villi'
    ],
    correctAnswer: 1,
    explanation:
      'The colon is distinguished by taeniae coli (three longitudinal muscle bands), haustra (sacculations), and appendices epiploicae (fat-filled peritoneal tags).'
  },
  {
    id: 'ac8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why is mobilization of the ascending colon important in right hemicolectomy?',
    options: [
      'It is completely mobile',
      'Its retroperitoneal attachments must be divided to mobilize it (Kocher-like maneuver)',
      'It has no posterior attachments',
      'It is attached to the liver',
      'It has a long mesentery'
    ],
    correctAnswer: 1,
    explanation:
      'The ascending colon must be mobilized by incising the peritoneum along its lateral border and reflecting it medially, dividing the embryologically fused retroperitoneal fascia (Toldt\'s fascia).'
  },
  {
    id: 'ac9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the white line of Toldt?',
    options: [
      'A muscle band in the colon wall',
      'The peritoneal reflection along the lateral border of the ascending/descending colon',
      'The marginal artery',
      'A nerve pathway',
      'The appendices epiploicae attachment'
    ],
    correctAnswer: 1,
    explanation:
      'The white line of Toldt is the avascular peritoneal reflection along the lateral aspect of the ascending and descending colon, incised during colonic mobilization.'
  },
  {
    id: 'ac10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Venous drainage of the ascending colon eventually reaches which vessel?',
    options: [
      'Inferior vena cava directly',
      'Superior mesenteric vein and then portal vein',
      'Renal vein',
      'Splenic vein only',
      'Azygos vein'
    ],
    correctAnswer: 1,
    explanation:
      'Veins draining the ascending colon (ileocolic and right colic veins) join the superior mesenteric vein, which contributes to the portal vein for hepatic processing.'
  }
];

// 5. Transverse Colon and Mesocolon
export const transverseColonMesocolonQuestions: Question[] = [
  {
    id: 'tcm1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which part of the colon crosses the abdomen from right to left?',
    options: [
      'Ascending colon',
      'Transverse colon',
      'Descending colon',
      'Sigmoid colon',
      'Cecum'
    ],
    correctAnswer: 1,
    explanation:
      'The transverse colon extends from the hepatic flexure (right) to the splenic flexure (left), crossing the abdomen and suspended by the transverse mesocolon.'
  },
  {
    id: 'tcm2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Is the transverse colon intraperitoneal or retroperitoneal?',
    options: [
      'Retroperitoneal',
      'Intraperitoneal with a mesentery (transverse mesocolon)',
      'Extraperitoneal',
      'Partially covered by peritoneum',
      'Has no peritoneal covering'
    ],
    correctAnswer: 1,
    explanation:
      'The transverse colon is intraperitoneal and suspended by the transverse mesocolon, making it the most mobile segment of the colon.'
  },
  {
    id: 'tcm3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which artery primarily supplies the transverse colon?',
    options: [
      'Ileocolic artery',
      'Middle colic artery (from SMA)',
      'Inferior mesenteric artery',
      'Left gastric artery',
      'Splenic artery'
    ],
    correctAnswer: 1,
    explanation:
      'The middle colic artery, a branch of the superior mesenteric artery, is the primary supply to the transverse colon; the marginal artery provides collateral anastomoses.'
  },
  {
    id: 'tcm4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure lies in the root of the transverse mesocolon?',
    options: [
      'Liver',
      'Head and body of pancreas',
      'Spleen',
      'Kidneys',
      'Stomach'
    ],
    correctAnswer: 1,
    explanation:
      'The root of the transverse mesocolon attaches along the anterior surface of the pancreas (head, neck and body), an important relationship during pancreatic surgery.'
  },
  {
    id: 'tcm5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure attaches to the transverse colon forming the gastrocolic ligament?',
    options: [
      'Liver',
      'Greater curvature of stomach (greater omentum)',
      'Spleen',
      'Duodenum',
      'Kidney'
    ],
    correctAnswer: 1,
    explanation:
      'The greater omentum attaches to the transverse colon via the gastrocolic ligament, which must be divided to access the lesser sac.'
  },
  {
    id: 'tcm6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'At which flexure is the colon at highest risk of ischemia due to watershed blood supply?',
    options: [
      'Hepatic flexure',
      'Splenic flexure',
      'Sigmoid-rectal junction',
      'Cecum',
      'Rectosigmoid junction'
    ],
    correctAnswer: 1,
    explanation:
      'The splenic flexure is a watershed area between SMA (middle colic) and IMA (left colic) territories; it is vulnerable to ischemia in low-flow states.'
  },
  {
    id: 'tcm7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The transverse mesocolon divides the peritoneal cavity into which compartments?',
    options: [
      'Right and left',
      'Supracolic and infracolic compartments',
      'Anterior and posterior',
      'Pelvic and abdominal',
      'Medial and lateral'
    ],
    correctAnswer: 1,
    explanation:
      'The transverse mesocolon is a horizontal peritoneal partition that divides the peritoneal cavity into supracolic (containing stomach, liver, spleen) and infracolic (containing small intestine) compartments.'
  },
  {
    id: 'tcm8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which ligament supports the splenic flexure from below?',
    options: [
      'Gastrosplenic ligament',
      'Phrenicocolic ligament',
      'Splenorenal ligament',
      'Gastrophrenic ligament',
      'Coronary ligament'
    ],
    correctAnswer: 1,
    explanation:
      'The phrenicocolic ligament extends from the diaphragm to the splenic flexure, supporting it and forming a partial barrier in the left paracolic gutter.'
  },
  {
    id: 'tcm9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The marginal artery (of Drummond) is formed by anastomoses between branches of:',
    options: [
      'Celiac trunk and SMA',
      'SMA and IMA along the mesenteric border of the colon',
      'IMA and internal iliac artery',
      'Splenic and left gastric arteries',
      'Hepatic and gastroduodenal arteries'
    ],
    correctAnswer: 1,
    explanation:
      'The marginal artery (of Drummond) is a continuous arterial arcade along the mesenteric border of the colon, formed by anastomoses between branches of the SMA and IMA.'
  },
  {
    id: 'tcm10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structures pass through or behind the root of the transverse mesocolon?',
    options: [
      'Only the pancreas',
      'Second part of duodenum, pancreas, SMA and SMV',
      'Stomach and esophagus',
      'Liver and gallbladder',
      'Spleen and left kidney'
    ],
    correctAnswer: 1,
    explanation:
      'The root of the transverse mesocolon is crossed by the second part of the duodenum and overlies the pancreas; the superior mesenteric vessels pass anterior to the duodenum and behind the mesocolon.'
  }
];

// 6. Descending Colon
export const descendingColonQuestions: Question[] = [
  {
    id: 'dc1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Where does the descending colon extend from and to?',
    options: [
      'From cecum to hepatic flexure',
      'From splenic flexure to sigmoid colon (left iliac fossa)',
      'From hepatic flexure to splenic flexure',
      'From sigmoid to rectum',
      'From duodenum to jejunum'
    ],
    correctAnswer: 1,
    explanation:
      'The descending colon extends from the splenic (left colic) flexure downward to the pelvic brim in the left iliac fossa, where it becomes the sigmoid colon.'
  },
  {
    id: 'dc2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Is the descending colon intraperitoneal or retroperitoneal?',
    options: [
      'Intraperitoneal with a mesentery',
      'Secondarily retroperitoneal',
      'Completely extraperitoneal',
      'Suspended by greater omentum',
      'Has a mesocolon'
    ],
    correctAnswer: 1,
    explanation:
      'Like the ascending colon, the descending colon is secondarily retroperitoneal, with peritoneum covering only its anterior and lateral surfaces.'
  },
  {
    id: 'dc3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which artery supplies the descending colon?',
    options: [
      'Superior mesenteric artery branches',
      'Left colic artery (from IMA)',
      'Middle colic artery',
      'Ileocolic artery',
      'Right colic artery'
    ],
    correctAnswer: 1,
    explanation:
      'The descending colon is supplied primarily by the left colic artery, a branch of the inferior mesenteric artery, with collateral supply from the marginal artery.'
  },
  {
    id: 'dc4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structures lie posterior to the descending colon?',
    options: [
      'Stomach and spleen',
      'Left kidney, left ureter, quadratus lumborum, iliacus muscle',
      'Liver and gallbladder',
      'Pancreas only',
      'Bladder'
    ],
    correctAnswer: 1,
    explanation:
      'Posterior to the descending colon lie the left kidney (lateral border), left ureter, quadratus lumborum, transversus abdominis and iliacus muscles.'
  },
  {
    id: 'dc5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which gutter lies lateral to the descending colon?',
    options: [
      'Right paracolic gutter',
      'Left paracolic gutter',
      'Hepatorenal recess',
      'Lesser sac',
      'Rectovesical pouch'
    ],
    correctAnswer: 1,
    explanation:
      'The left paracolic gutter lies lateral to the descending colon, though it communicates less freely with the left subphrenic space due to the phrenicocolic ligament.'
  },
  {
    id: 'dc6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The descending colon is narrower than the ascending colon because:',
    options: [
      'It receives less blood supply',
      'Fecal content is more solid/dehydrated as water absorption progresses',
      'It has fewer taeniae coli',
      'It lacks haustra',
      'It has thicker walls'
    ],
    correctAnswer: 1,
    explanation:
      'The descending colon has a narrower caliber than the right colon because the fecal content is progressively dehydrated as water is absorbed, resulting in more formed stool.'
  },
  {
    id: 'dc7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which veins drain the descending colon?',
    options: [
      'Right colic and ileocolic veins',
      'Left colic veins to the inferior mesenteric vein',
      'Splenic vein directly',
      'Hepatic veins',
      'Renal veins'
    ],
    correctAnswer: 1,
    explanation:
      'Venous blood from the descending colon drains via left colic veins to the inferior mesenteric vein, which typically joins the splenic vein to contribute to the portal vein.'
  },
  {
    id: 'dc8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which autonomic plexus provides parasympathetic innervation to the descending colon?',
    options: [
      'Vagal fibers via celiac plexus',
      'Pelvic splanchnic nerves (S2-S4) via inferior hypogastric plexus',
      'Greater splanchnic nerves',
      'Phrenic nerve',
      'Lumbar splanchnic nerves'
    ],
    correctAnswer: 1,
    explanation:
      'The descending colon (from splenic flexure onward) receives parasympathetic innervation from pelvic splanchnic nerves (S2-S4), unlike the proximal colon which receives vagal innervation.'
  },
  {
    id: 'dc9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'At which vertebral level does the descending colon become the sigmoid colon?',
    options: [
      'T12',
      'L3',
      'At the pelvic brim (S1-S2)',
      'L5',
      'S4'
    ],
    correctAnswer: 2,
    explanation:
      'The descending colon transitions to the sigmoid colon at the pelvic brim, approximately at the level of the left iliac crest and sacroiliac joint.'
  },
  {
    id: 'dc10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Mobilization of the descending colon in left hemicolectomy involves incising:',
    options: [
      'The greater omentum',
      'The white line of Toldt along its lateral peritoneal reflection',
      'The transverse mesocolon',
      'The lesser omentum',
      'The falciform ligament'
    ],
    correctAnswer: 1,
    explanation:
      'Mobilization requires incising the peritoneal reflection (white line of Toldt) along the lateral border of the descending colon and reflecting it medially off the retroperitoneum.'
  }
];

// 7. Sigmoid Colon
export const sigmoidColonQuestions: Question[] = [
  {
    id: 'sc1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'What shape characterizes the sigmoid colon?',
    options: [
      'Straight tube',
      'S-shaped or omega-shaped loop',
      'Spiral coil',
      'Circular ring',
      'V-shaped'
    ],
    correctAnswer: 1,
    explanation:
      'The sigmoid colon has a characteristic S-shaped (or omega-shaped) loop, extending from the pelvic brim to the rectum at S3 vertebral level.'
  },
  {
    id: 'sc2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Is the sigmoid colon intraperitoneal or retroperitoneal?',
    options: [
      'Retroperitoneal',
      'Intraperitoneal with a mesentery (sigmoid mesocolon)',
      'Extraperitoneal',
      'Subperitoneal',
      'Has no peritoneal covering'
    ],
    correctAnswer: 1,
    explanation:
      'The sigmoid colon is intraperitoneal and suspended by the sigmoid mesocolon, giving it considerable mobility within the pelvis.'
  },
  {
    id: 'sc3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which arteries supply the sigmoid colon?',
    options: [
      'Middle colic artery',
      'Sigmoid arteries (from IMA)',
      'Superior mesenteric artery',
      'Internal iliac artery',
      'Right colic artery'
    ],
    correctAnswer: 1,
    explanation:
      'The sigmoid colon is supplied by 2-4 sigmoid arteries arising from the inferior mesenteric artery, which form arcades and anastomose with the superior rectal artery.'
  },
  {
    id: 'sc4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the sigmoid colon become the rectum?',
    options: [
      'At the pelvic brim',
      'At the level of S3 vertebra where the mesocolon ends',
      'At the anorectal junction',
      'At the sacral promontory',
      'At L5 vertebra'
    ],
    correctAnswer: 1,
    explanation:
      'The sigmoid colon becomes the rectum at approximately the S3 vertebral level, where the sigmoid mesocolon ends and the rectum becomes retroperitoneal.'
  },
  {
    id: 'sc5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why is the sigmoid colon prone to volvulus?',
    options: [
      'It has a short mesentery',
      'Its long mesentery with narrow attachment allows twisting on its axis',
      'It lacks blood supply',
      'It is fixed to the posterior wall',
      'It has no taeniae coli'
    ],
    correctAnswer: 1,
    explanation:
      'The sigmoid colon has a relatively long mesentery with a narrow root attachment, predisposing it to volvulus (twisting on its mesenteric axis), particularly when loaded with feces/gas.'
  },
  {
    id: 'sc6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What lies within the apex of the V-shaped attachment of the sigmoid mesocolon?',
    options: [
      'Right ureter',
      'Left ureter and bifurcation of left common iliac artery',
      'Right iliac artery',
      'Appendix',
      'Cecum'
    ],
    correctAnswer: 1,
    explanation:
      'The root of the sigmoid mesocolon forms an inverted V, with the apex overlying the left ureter and the bifurcation of the left common iliac artery—important surgical landmarks.'
  },
  {
    id: 'sc7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which peritoneal fossa is formed between the two limbs of the sigmoid mesocolon attachment?',
    options: [
      'Paraduodenal fossa',
      'Intersigmoid fossa',
      'Ileocecal fossa',
      'Hepatorenal fossa',
      'Paravesical fossa'
    ],
    correctAnswer: 1,
    explanation:
      'The intersigmoid fossa (recess) is a small peritoneal pocket formed between the two limbs of the sigmoid mesocolon attachment, with the left ureter at its apex.'
  },
  {
    id: 'sc8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of sigmoid diverticulosis?',
    options: [
      'It only affects the cecum',
      'The sigmoid is the most common site for colonic diverticula due to high intraluminal pressure',
      'It never causes complications',
      'Diverticula only occur in the ascending colon',
      'It is always symptomatic'
    ],
    correctAnswer: 1,
    explanation:
      'The sigmoid colon is the most common site for diverticula because it has the narrowest diameter and highest intraluminal pressures; complications include diverticulitis and bleeding.'
  },
  {
    id: 'sc9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Venous drainage of the sigmoid colon is via:',
    options: [
      'Superior mesenteric vein',
      'Sigmoid veins to inferior mesenteric vein',
      'Portal vein directly',
      'Internal iliac vein',
      'External iliac vein'
    ],
    correctAnswer: 1,
    explanation:
      'Sigmoid veins drain into the inferior mesenteric vein, which joins the splenic vein (or SMV directly) to contribute to the portal venous system.'
  },
  {
    id: 'sc10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which nerves provide parasympathetic innervation to the sigmoid colon?',
    options: [
      'Vagus nerve',
      'Pelvic splanchnic nerves (S2-S4)',
      'Greater splanchnic nerves',
      'Lesser splanchnic nerves',
      'Lumbar splanchnic nerves'
    ],
    correctAnswer: 1,
    explanation:
      'The sigmoid colon receives parasympathetic innervation from pelvic splanchnic nerves (S2-S4), which reach it via the inferior hypogastric plexus.'
  }
];

// 8. Sigmoid Meso and Intersigmoid Fossa
export const sigmoidMesoFossaQuestions: Question[] = [
  {
    id: 'smf1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the shape of the root of the sigmoid mesocolon?',
    options: [
      'Horizontal line',
      'Inverted V-shape',
      'Circular',
      'Vertical line',
      'S-shaped'
    ],
    correctAnswer: 1,
    explanation:
      'The root of the sigmoid mesocolon has an inverted V-shape, with the apex over the left ureter and common iliac bifurcation, and two limbs extending laterally and medially.'
  },
  {
    id: 'smf2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'The intersigmoid fossa is located:',
    options: [
      'Above the transverse mesocolon',
      'Between the two limbs of the sigmoid mesocolon root',
      'In the right iliac fossa',
      'Behind the cecum',
      'In the lesser sac'
    ],
    correctAnswer: 1,
    explanation:
      'The intersigmoid fossa (recess) is a small peritoneal pocket located between the two limbs of the V-shaped root of the sigmoid mesocolon.'
  },
  {
    id: 'smf3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure lies at the apex of the intersigmoid fossa?',
    options: [
      'Right ureter',
      'Left ureter',
      'Appendix',
      'Portal vein',
      'Splenic artery'
    ],
    correctAnswer: 1,
    explanation:
      'The left ureter lies at the apex of the intersigmoid fossa, making it vulnerable during sigmoid colon surgery if not identified.'
  },
  {
    id: 'smf4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The sigmoid mesocolon contains which vessels?',
    options: [
      'Right colic vessels',
      'Sigmoid vessels and branches of superior rectal vessels',
      'Middle colic vessels only',
      'Ileocolic vessels',
      'Hepatic vessels'
    ],
    correctAnswer: 1,
    explanation:
      'The sigmoid mesocolon transmits the sigmoid arteries and veins (from IMA/IMV) and branches of the superior rectal vessels to the sigmoid colon.'
  },
  {
    id: 'smf5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'An intersigmoid hernia occurs when:',
    options: [
      'Small bowel enters the inguinal canal',
      'Small bowel herniates into the intersigmoid fossa',
      'Sigmoid colon protrudes through the abdominal wall',
      'Colon enters the thorax',
      'Appendix enters the sigmoid mesocolon'
    ],
    correctAnswer: 1,
    explanation:
      'An intersigmoid hernia is a rare internal hernia where loops of small bowel herniate into the intersigmoid fossa, potentially causing obstruction.'
  }
];

// 9. Pelvic Rectum
export const pelvicRectumQuestions: Question[] = [
  {
    id: 'pr1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'At which vertebral level does the rectum begin?',
    options: [
      'L3',
      'S3',
      'L5',
      'S5',
      'Coccyx'
    ],
    correctAnswer: 1,
    explanation:
      'The rectum begins at the level of S3 vertebra, where the sigmoid mesocolon ends and the rectum becomes a retroperitoneal structure following the sacral curve.'
  },
  {
    id: 'pr2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'What are the transverse folds of the rectum (Houston\'s valves)?',
    options: [
      'External muscular bands',
      'Three horizontal mucosal folds within the rectal lumen',
      'Sphincters at the anorectal junction',
      'Peritoneal reflections',
      'Hemorrhoidal cushions'
    ],
    correctAnswer: 1,
    explanation:
      'Houston\'s valves are three (sometimes two) horizontal mucosal and submucosal folds projecting into the rectal lumen; the middle one on the right is most prominent.'
  },
  {
    id: 'pr3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which artery is the primary blood supply to the rectum?',
    options: [
      'Inferior mesenteric artery via superior rectal artery',
      'Internal iliac artery only',
      'External iliac artery',
      'Femoral artery',
      'Pudendal artery only'
    ],
    correctAnswer: 0,
    explanation:
      'The superior rectal artery (terminal branch of IMA) is the primary arterial supply to the rectum, supplemented by middle rectal arteries (from internal iliac) and inferior rectal arteries (from internal pudendal).'
  },
  {
    id: 'pr4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'The mesorectum contains:',
    options: [
      'Only fat',
      'Perirectal fat, lymph nodes, superior rectal vessels and nerves',
      'Only blood vessels',
      'Muscle tissue',
      'Bone marrow'
    ],
    correctAnswer: 1,
    explanation:
      'The mesorectum is the perirectal fat and fascia containing lymph nodes, branches of the superior rectal vessels, and autonomic nerves; its complete excision (TME) is important in rectal cancer surgery.'
  },
  {
    id: 'pr5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which fascia envelops the mesorectum and is important in total mesorectal excision (TME)?',
    options: [
      'Transversalis fascia',
      'Mesorectal fascia (fascia propria of rectum)',
      'Denonvilliers fascia',
      'Waldeyer fascia',
      'Scarpa fascia'
    ],
    correctAnswer: 1,
    explanation:
      'The mesorectal fascia (fascia propria) encloses the mesorectum; TME involves sharp dissection in the avascular plane outside this fascia to achieve complete mesorectal excision for rectal cancer.'
  },
  {
    id: 'pr6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Waldeyer\'s fascia (rectosacral fascia) extends between:',
    options: [
      'Bladder and rectum',
      'S4 vertebra and posterior rectal wall',
      'Uterus and rectum',
      'Prostate and bladder',
      'Peritoneum and rectum'
    ],
    correctAnswer: 1,
    explanation:
      'Waldeyer\'s fascia is a condensation of pelvic fascia extending from S4 to the posterior aspect of the mesorectum; it must be divided during posterior rectal mobilization.'
  },
  {
    id: 'pr7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which veins drain the rectum and are important in portosystemic anastomosis?',
    options: [
      'Only portal tributaries',
      'Superior rectal vein (to portal) and middle/inferior rectal veins (to systemic)',
      'Only systemic veins',
      'Hepatic veins',
      'Renal veins'
    ],
    correctAnswer: 1,
    explanation:
      'The superior rectal vein drains to the IMV (portal system), while middle and inferior rectal veins drain to internal iliac veins (systemic); this anastomosis is a site of portosystemic shunting in portal hypertension.'
  },
  {
    id: 'pr8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Parasympathetic innervation to the rectum derives from:',
    options: [
      'Vagus nerve',
      'Pelvic splanchnic nerves (S2-S4)',
      'Greater splanchnic nerves',
      'Lumbar splanchnic nerves',
      'Hypogastric nerves'
    ],
    correctAnswer: 1,
    explanation:
      'The rectum receives parasympathetic innervation from pelvic splanchnic nerves (nervi erigentes, S2-S4), which promote motility and relaxation of the internal anal sphincter.'
  },
  {
    id: 'pr9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which lymph node group is the primary drainage for the upper rectum?',
    options: [
      'Inguinal nodes',
      'Pararectal and inferior mesenteric nodes',
      'Axillary nodes',
      'Cervical nodes',
      'Para-aortic nodes directly'
    ],
    correctAnswer: 1,
    explanation:
      'The upper rectum drains primarily to pararectal nodes along the superior rectal vessels, then to inferior mesenteric nodes and para-aortic nodes.'
  },
  {
    id: 'pr10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Damage to autonomic nerves during rectal surgery may result in:',
    options: [
      'Only motor weakness',
      'Bladder and sexual dysfunction',
      'Hearing loss',
      'Visual disturbance',
      'Respiratory failure'
    ],
    correctAnswer: 1,
    explanation:
      'The hypogastric plexus and pelvic splanchnic nerves lie close to the rectum; damage during surgery may cause urinary retention/incontinence and erectile/ejaculatory dysfunction.'
  }
];

// 10. Rectal Lodge and Relations in Female
export const rectalLodgeFemaleQuestions: Question[] = [
  {
    id: 'rlf1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which structure lies anterior to the rectum in females?',
    options: [
      'Prostate',
      'Vagina and uterus',
      'Bladder only',
      'Seminal vesicles',
      'Testis'
    ],
    correctAnswer: 1,
    explanation:
      'In females, the vagina and uterus lie anterior to the rectum, separated by the rectouterine pouch (of Douglas) superiorly and the rectovaginal septum inferiorly.'
  },
  {
    id: 'rlf2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'What is the rectouterine pouch (of Douglas)?',
    options: [
      'A space between bladder and rectum',
      'The peritoneal pouch between rectum and posterior uterus/vaginal fornix',
      'A space in the anterior abdominal wall',
      'The potential space in the breast',
      'A renal fossa'
    ],
    correctAnswer: 1,
    explanation:
      'The rectouterine pouch (of Douglas) is the deepest part of the female peritoneal cavity, lying between the rectum posteriorly and the uterus/upper vagina anteriorly.'
  },
  {
    id: 'rlf3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure separates the rectum from the vagina below the peritoneal reflection?',
    options: [
      'Denonvilliers fascia',
      'Rectovaginal septum',
      'Mesorectum',
      'Waldeyer fascia',
      'Presacral fascia'
    ],
    correctAnswer: 1,
    explanation:
      'The rectovaginal septum (posterior vaginal fascia) is a thin fibrous partition between the posterior vaginal wall and anterior rectum below the level of the peritoneal reflection.'
  },
  {
    id: 'rlf4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'The peritoneum covering the rectum in females extends to approximately which level?',
    options: [
      'Entire rectum',
      'Upper third (anterior and lateral surfaces)',
      'Only the rectal ampulla',
      'None of the rectum',
      'To the anal canal'
    ],
    correctAnswer: 1,
    explanation:
      'In females, peritoneum covers the upper third of the rectum on its anterior and lateral surfaces, then reflects onto the posterior vaginal fornix to form the rectouterine pouch.'
  },
  {
    id: 'rlf5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The rectouterine pouch can be accessed clinically via:',
    options: [
      'Anterior abdominal wall only',
      'Posterior vaginal fornix (culdocentesis/culdoscopy)',
      'Urethra',
      'Rectum only',
      'Inguinal canal'
    ],
    correctAnswer: 1,
    explanation:
      'The rectouterine pouch (pouch of Douglas) is accessible through the posterior vaginal fornix, allowing drainage of pelvic abscesses or sampling of peritoneal fluid (culdocentesis).'
  },
  {
    id: 'rlf6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which ligaments support the rectum laterally in females?',
    options: [
      'Broad ligaments',
      'Lateral ligaments of rectum (lateral rectal stalks)',
      'Round ligaments',
      'Uterosacral ligaments only',
      'Ovarian ligaments'
    ],
    correctAnswer: 1,
    explanation:
      'The lateral ligaments of the rectum (lateral rectal stalks) are condensations of pelvic fascia containing the middle rectal vessels; they support the rectum laterally.'
  },
  {
    id: 'rlf7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'A rectocele is:',
    options: [
      'Herniation of bladder into vagina',
      'Herniation of rectum into posterior vaginal wall',
      'Prolapse of uterus',
      'Herniation of small bowel into vagina',
      'Rectal cancer'
    ],
    correctAnswer: 1,
    explanation:
      'A rectocele is the herniation of the rectum into the posterior vaginal wall due to weakness of the rectovaginal septum, often causing difficulty with defecation.'
  },
  {
    id: 'rlf8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure may herniate into the rectouterine pouch in an enterocele?',
    options: [
      'Bladder',
      'Small intestine',
      'Liver',
      'Spleen',
      'Kidney'
    ],
    correctAnswer: 1,
    explanation:
      'An enterocele is the herniation of small intestine (usually ileum) into the rectouterine pouch and posterior vaginal fornix, more common after hysterectomy.'
  },
  {
    id: 'rlf9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The inferior extent of the rectouterine pouch is usually at the level of:',
    options: [
      'Cervix only',
      'Upper third of vagina (posterior fornix)',
      'Lower third of vagina',
      'Vulva',
      'Introitus'
    ],
    correctAnswer: 1,
    explanation:
      'The peritoneum of the rectouterine pouch extends to the upper third of the posterior vaginal wall (posterior fornix), which is only about 5.5 cm from the vaginal opening.'
  },
  {
    id: 'rlf10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which anatomical relationship explains why endometriosis commonly affects the rectouterine pouch?',
    options: [
      'It is far from the uterus',
      'It is the most dependent part of the female pelvis where menstrual blood may accumulate',
      'It has no peritoneal covering',
      'It is continuous with the thorax',
      'It contains ovarian tissue normally'
    ],
    correctAnswer: 1,
    explanation:
      'The rectouterine pouch is the most dependent part of the female peritoneal cavity; retrograde menstruation may deposit endometrial tissue here, leading to endometriosis.'
  }
];

// 11. Rectal Lodge and Relations in Male
export const rectalLodgeMaleQuestions: Question[] = [
  {
    id: 'rlm1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which structure lies anterior to the rectum in males?',
    options: [
      'Uterus',
      'Bladder, prostate and seminal vesicles',
      'Vagina',
      'Ovaries',
      'Uterine tubes'
    ],
    correctAnswer: 1,
    explanation:
      'In males, the rectum is related anteriorly to the bladder (upper), seminal vesicles and vas deferens (middle), and prostate (lower), separated by the rectovesical pouch and Denonvilliers fascia.'
  },
  {
    id: 'rlm2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'What is the rectovesical pouch in males?',
    options: [
      'A space between rectum and uterus',
      'The peritoneal pouch between rectum and bladder',
      'A space in the inguinal region',
      'The prostatic urethra',
      'The scrotal cavity'
    ],
    correctAnswer: 1,
    explanation:
      'The rectovesical pouch is the peritoneal space between the rectum posteriorly and the bladder anteriorly; it is the most dependent part of the male peritoneal cavity.'
  },
  {
    id: 'rlm3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Denonvilliers fascia (rectovesical septum) separates:',
    options: [
      'Bladder from urethra',
      'Rectum from prostate and seminal vesicles',
      'Kidney from adrenal',
      'Liver from diaphragm',
      'Stomach from pancreas'
    ],
    correctAnswer: 1,
    explanation:
      'Denonvilliers fascia is a thin fascial layer between the rectum posteriorly and the prostate/seminal vesicles anteriorly, derived from obliterated embryonic rectovesical pouch.'
  },
  {
    id: 'rlm4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'The peritoneum in males covers the rectum to approximately which level?',
    options: [
      'Entire rectum',
      'Upper third only, then reflects onto bladder',
      'Only the anal canal',
      'None of the rectum',
      'To the prostate'
    ],
    correctAnswer: 1,
    explanation:
      'In males, peritoneum covers the upper third of the rectum (anterior and lateral), then reflects anteriorly onto the superior surface of the bladder, forming the rectovesical pouch.'
  },
  {
    id: 'rlm5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structures lie immediately anterior to the lower rectum in males?',
    options: [
      'Bladder dome',
      'Prostate, seminal vesicles and ampullae of vas deferens',
      'Uterus',
      'Ovaries',
      'Small intestine only'
    ],
    correctAnswer: 1,
    explanation:
      'Below the peritoneal reflection, the lower rectum is directly related anteriorly to the prostate, seminal vesicles and ampullae of the vas deferens, separated by Denonvilliers fascia.'
  },
  {
    id: 'rlm6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The prostate can be palpated by digital rectal examination (DRE) because:',
    options: [
      'It lies superior to the rectum',
      'It lies anterior to the lower rectum, separated only by Denonvilliers fascia and rectal wall',
      'It is within the rectal lumen',
      'It lies posterior to the sacrum',
      'It is in the scrotum'
    ],
    correctAnswer: 1,
    explanation:
      'The prostate lies immediately anterior to the lower rectum, separated only by the thin Denonvilliers fascia and rectal wall, making it readily palpable on DRE.'
  },
  {
    id: 'rlm7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'During radical prostatectomy, which plane is followed behind the prostate?',
    options: [
      'In front of Denonvilliers fascia',
      'Behind Denonvilliers fascia (between it and the mesorectal fascia)',
      'Through the rectum',
      'Through the bladder',
      'Lateral to the seminal vesicles'
    ],
    correctAnswer: 1,
    explanation:
      'During radical prostatectomy, dissection is performed posterior to Denonvilliers fascia to separate the prostate from the rectum while preserving the mesorectal fascia and rectal wall.'
  },
  {
    id: 'rlm8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which nerves are at risk during surgery in the male rectal lodge?',
    options: [
      'Sciatic nerves',
      'Pelvic autonomic nerves (hypogastric and pelvic splanchnic)',
      'Femoral nerves',
      'Obturator nerves only',
      'Pudendal nerves only'
    ],
    correctAnswer: 1,
    explanation:
      'The hypogastric plexus and pelvic splanchnic nerves lie lateral to the rectum; injury during rectal or prostatic surgery may cause erectile dysfunction and bladder dysfunction.'
  },
  {
    id: 'rlm9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Fluid or pus in the rectovesical pouch in males can be detected by:',
    options: [
      'Chest X-ray',
      'Digital rectal examination (bulging anterior rectal wall)',
      'Inspection of the penis',
      'Examination of the scrotum',
      'Abdominal palpation only'
    ],
    correctAnswer: 1,
    explanation:
      'A collection in the rectovesical pouch may cause the anterior rectal wall to bulge posteriorly, detectable on digital rectal examination; ultrasound and CT can confirm.'
  },
  {
    id: 'rlm10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which embryological structure gives rise to Denonvilliers fascia?',
    options: [
      'Dorsal mesentery',
      'Fused peritoneal layers of the obliterated caudal rectovesical pouch',
      'Neural crest',
      'Urogenital ridge',
      'Allantois'
    ],
    correctAnswer: 1,
    explanation:
      'Denonvilliers fascia develops from the fusion of the two peritoneal layers of the embryonic rectovesical pouch as it becomes obliterated, forming the rectovesical septum.'
  }
];

// Combine all intestines questions for easy import
export const intestinesQuestions: Question[] = [
  ...jejunoIleumQuestions,
  ...mesenteryQuestions,
  ...cecumAppendixQuestions,
  ...ascendingColonQuestions,
  ...transverseColonMesocolonQuestions,
  ...descendingColonQuestions,
  ...sigmoidColonQuestions,
  ...sigmoidMesoFossaQuestions,
  ...pelvicRectumQuestions,
  ...rectalLodgeFemaleQuestions,
  ...rectalLodgeMaleQuestions
];
