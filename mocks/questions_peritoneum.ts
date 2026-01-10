import type { Question } from './questions';

// ============================================================================
// PERITONEUM & ABDOMINAL LODGES QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Cavitatea peritoneală: compartimentare (peritonealCavityCompartmentsQuestions)
// 2. Epiplonul mare și mic (greaterLesserOmentumQuestions)
// 3. Loja gastrică: delimitare (gastricLodgeQuestions)
// 4. Loja hepatică: delimitare (hepaticLodgeQuestions)
// 5. Loja splenică: delimitare și comportarea peritoneului (splenicLodgeQuestions)
// ============================================================================

// 1. Peritoneal Cavity Compartments
export const peritonealCavityCompartmentsQuestions: Question[] = [
  {
    id: 'pcc1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which structure divides the peritoneal cavity into supracolic and infracolic compartments?',
    options: [
      'Greater omentum',
      'Transverse mesocolon',
      'Falciform ligament',
      'Mesentery of small intestine',
      'Sigmoid mesocolon'
    ],
    correctAnswer: 1,
    explanation:
      'The transverse mesocolon is a horizontal peritoneal fold attaching the transverse colon to the posterior abdominal wall, dividing the peritoneal cavity into supracolic (above) and infracolic (below) compartments.'
  },
  {
    id: 'pcc2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which potential space lies behind the stomach and communicates with the greater sac via the epiploic foramen?',
    options: [
      'Hepatorenal recess',
      'Lesser sac (omental bursa)',
      'Right paracolic gutter',
      'Rectovesical pouch',
      'Subphrenic space'
    ],
    correctAnswer: 1,
    explanation:
      'The lesser sac (omental bursa) is a closed peritoneal space posterior to the stomach and lesser omentum, communicating with the greater sac only through the epiploic foramen of Winslow.'
  },
  {
    id: 'pcc3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which peritoneal recess is the most dependent part of the peritoneal cavity in the supine position?',
    options: [
      'Right subphrenic space',
      'Left subphrenic space',
      'Hepatorenal recess (Morison\'s pouch)',
      'Lesser sac',
      'Left paracolic gutter'
    ],
    correctAnswer: 2,
    explanation:
      'The hepatorenal recess (Morison\'s pouch) is the most dependent part of the peritoneal cavity in the supine position, located between the right lobe of the liver and the right kidney, where fluid tends to accumulate.'
  },
  {
    id: 'pcc4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure separates the right and left infracolic compartments?',
    options: [
      'Transverse mesocolon',
      'Greater omentum',
      'Root of the mesentery of the small intestine',
      'Falciform ligament',
      'Sigmoid mesocolon'
    ],
    correctAnswer: 2,
    explanation:
      'The root of the mesentery of the small intestine runs obliquely from the duodenojejunal flexure (left upper) to the ileocecal junction (right lower), dividing the infracolic compartment into right and left portions.'
  },
  {
    id: 'pcc5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which paracolic gutter allows direct communication between the pelvis and the right subhepatic/subphrenic spaces?',
    options: [
      'Left paracolic gutter',
      'Right paracolic gutter',
      'Both gutters equally',
      'Neither gutter',
      'Paravesical gutter'
    ],
    correctAnswer: 1,
    explanation:
      'The right paracolic gutter is continuous superiorly with the hepatorenal recess and right subphrenic space, allowing peritoneal fluid to track from the pelvis to the right upper quadrant; the left gutter is partially blocked by the phrenicocolic ligament.'
  },
  {
    id: 'pcc6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which ligament limits upward spread of fluid in the left paracolic gutter to the left subphrenic space?',
    options: [
      'Falciform ligament',
      'Coronary ligament',
      'Phrenicocolic ligament',
      'Gastrosplenic ligament',
      'Hepatoduodenal ligament'
    ],
    correctAnswer: 2,
    explanation:
      'The phrenicocolic ligament extends from the diaphragm to the splenic flexure of the colon, partially blocking the left paracolic gutter and limiting spread of fluid to the left subphrenic space.'
  },
  {
    id: 'pcc7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which peritoneal space is divided into anterior and posterior compartments by the left triangular ligament of the liver?',
    options: [
      'Right subphrenic space',
      'Left subphrenic space',
      'Hepatorenal recess',
      'Lesser sac',
      'Pelvic cavity'
    ],
    correctAnswer: 1,
    explanation:
      'The left subphrenic space may be divided by the left triangular ligament into anterior (between diaphragm and left liver lobe) and posterior (between stomach and diaphragm) compartments.'
  },
  {
    id: 'pcc8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which is the most dependent part of the peritoneal cavity in the upright position?',
    options: [
      'Hepatorenal recess',
      'Right subphrenic space',
      'Rectouterine pouch (Douglas) in females / rectovesical pouch in males',
      'Lesser sac',
      'Left subphrenic space'
    ],
    correctAnswer: 2,
    explanation:
      'In the upright position, the most dependent part of the peritoneal cavity is the rectouterine pouch (of Douglas) in females or the rectovesical pouch in males, where fluid and pus tend to collect.'
  },
  {
    id: 'pcc9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which embryological structure gives rise to the lesser sac?',
    options: [
      'Right side of the dorsal mesentery',
      'Ventral mesentery',
      'Left side of the dorsal mesogastrium',
      'Septum transversum',
      'Urorectal septum'
    ],
    correctAnswer: 2,
    explanation:
      'The lesser sac develops from the left side of the dorsal mesogastrium; as the stomach rotates, this space expands posterior to the stomach, forming the omental bursa.'
  },
  {
    id: 'pcc10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which statement correctly describes the boundaries of the epiploic foramen?',
    options: [
      'Stomach anteriorly, spleen posteriorly, diaphragm superiorly',
      'Hepatoduodenal ligament anteriorly, IVC posteriorly, caudate lobe superiorly, first part of duodenum inferiorly',
      'Lesser omentum anteriorly, greater omentum posteriorly',
      'Transverse colon anteriorly, jejunum posteriorly',
      'Liver anteriorly, pancreas posteriorly'
    ],
    correctAnswer: 1,
    explanation:
      'The epiploic foramen (of Winslow) is bounded by the hepatoduodenal ligament (portal triad) anteriorly, IVC posteriorly, caudate lobe of liver superiorly, and the superior part of the duodenum inferiorly.'
  }
];

// 2. Greater and Lesser Omentum
export const greaterLesserOmentumQuestions: Question[] = [
  {
    id: 'glo1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which peritoneal fold extends from the greater curvature of the stomach and hangs like an apron over the intestines?',
    options: [
      'Lesser omentum',
      'Greater omentum',
      'Transverse mesocolon',
      'Mesentery',
      'Falciform ligament'
    ],
    correctAnswer: 1,
    explanation:
      'The greater omentum is a large, four-layered peritoneal fold that hangs from the greater curvature of the stomach like an apron, draping over the transverse colon and small intestine.'
  },
  {
    id: 'glo2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which structure forms the anterior wall of the lesser sac?',
    options: [
      'Greater omentum',
      'Transverse mesocolon',
      'Lesser omentum and posterior wall of stomach',
      'Mesentery of small intestine',
      'Sigmoid mesocolon'
    ],
    correctAnswer: 2,
    explanation:
      'The anterior wall of the lesser sac is formed by the lesser omentum, the posterior wall of the stomach, and the anterior layers of the greater omentum.'
  },
  {
    id: 'glo3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which two parts comprise the lesser omentum?',
    options: [
      'Gastrocolic and gastrosplenic ligaments',
      'Hepatogastric and hepatoduodenal ligaments',
      'Gastrophrenic and gastrocolic ligaments',
      'Splenorenal and gastrosplenic ligaments',
      'Falciform and coronary ligaments'
    ],
    correctAnswer: 1,
    explanation:
      'The lesser omentum consists of the hepatogastric ligament (liver to lesser curvature) and the hepatoduodenal ligament (liver to first part of duodenum), which contains the portal triad.'
  },
  {
    id: 'glo4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which vessels run within the hepatogastric ligament along the lesser curvature?',
    options: [
      'Gastroepiploic vessels',
      'Short gastric vessels',
      'Left and right gastric vessels',
      'Splenic vessels',
      'Inferior phrenic vessels'
    ],
    correctAnswer: 2,
    explanation:
      'The left and right gastric arteries and veins run within the hepatogastric ligament along the lesser curvature, forming an anastomotic arcade.'
  },
  {
    id: 'glo5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which part of the greater omentum connects the stomach to the transverse colon?',
    options: [
      'Gastrosplenic ligament',
      'Gastrophrenic ligament',
      'Gastrocolic ligament',
      'Splenorenal ligament',
      'Hepatogastric ligament'
    ],
    correctAnswer: 2,
    explanation:
      'The gastrocolic ligament is the part of the greater omentum that connects the greater curvature of the stomach to the transverse colon; it is divided to enter the lesser sac surgically.'
  },
  {
    id: 'glo6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which vessels run within the gastrocolic ligament along the greater curvature?',
    options: [
      'Left and right gastric arteries',
      'Short gastric arteries',
      'Right and left gastroepiploic vessels',
      'Splenic vessels',
      'Superior mesenteric vessels'
    ],
    correctAnswer: 2,
    explanation:
      'The right and left gastroepiploic (gastro-omental) vessels run within the gastrocolic ligament along the greater curvature, forming an arcade that supplies the stomach.'
  },
  {
    id: 'glo7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which clinical function is attributed to the greater omentum in containing intra-abdominal infection?',
    options: [
      'Secretion of antibodies',
      'Migration to sites of inflammation and walling off infection ("abdominal policeman")',
      'Direct absorption of bacteria',
      'Neutralization of gastric acid',
      'Production of bile'
    ],
    correctAnswer: 1,
    explanation:
      'The greater omentum is called the "abdominal policeman" because it tends to migrate toward and wrap around sites of inflammation (such as appendicitis), helping to wall off and localize infection.'
  },
  {
    id: 'glo8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'At which border does the lesser omentum attach to the liver?',
    options: [
      'Inferior border of right lobe',
      'Fissures for ligamentum venosum and ligamentum teres, and porta hepatis',
      'Bare area',
      'Coronary ligament attachment',
      'Falciform ligament attachment'
    ],
    correctAnswer: 1,
    explanation:
      'The lesser omentum attaches to the liver along the fissure for the ligamentum venosum, the porta hepatis, and the fissure for the ligamentum teres, forming an L-shaped attachment line.'
  },
  {
    id: 'glo9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which embryological structure gives rise to the lesser omentum?',
    options: [
      'Dorsal mesogastrium',
      'Ventral mesogastrium',
      'Dorsal mesentery of midgut',
      'Septum transversum',
      'Splanchnic mesoderm'
    ],
    correctAnswer: 1,
    explanation:
      'The lesser omentum develops from the ventral mesogastrium, which connects the foregut to the ventral body wall and becomes divided by the developing liver into the lesser omentum and falciform ligament.'
  },
  {
    id: 'glo10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which potential space exists between the layers of the greater omentum and may communicate with the lesser sac?',
    options: [
      'Hepatorenal recess',
      'Inferior recess of the lesser sac (omental bursa)',
      'Right subphrenic space',
      'Rectovesical pouch',
      'Left paracolic gutter'
    ],
    correctAnswer: 1,
    explanation:
      'The inferior recess of the lesser sac extends between the layers of the greater omentum; though often obliterated in adults, it represents the embryological extension of the omental bursa.'
  }
];

// 3. Gastric Lodge
export const gastricLodgeQuestions: Question[] = [
  {
    id: 'gl1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which structure forms the roof of the gastric lodge?',
    options: [
      'Transverse colon',
      'Left hemidiaphragm',
      'Liver',
      'Spleen',
      'Pancreas'
    ],
    correctAnswer: 1,
    explanation:
      'The gastric lodge is roofed by the left hemidiaphragm superiorly, which separates it from the left pleural cavity and the base of the left lung.'
  },
  {
    id: 'gl2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which organ primarily occupies the gastric lodge?',
    options: [
      'Liver',
      'Spleen',
      'Stomach',
      'Pancreas',
      'Left kidney'
    ],
    correctAnswer: 2,
    explanation:
      'The gastric lodge is the peritoneal compartment that contains the stomach, bounded by the diaphragm above, the transverse mesocolon below, and the spleen laterally.'
  },
  {
    id: 'gl3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which ligaments form the lateral boundaries of the gastric lodge?',
    options: [
      'Falciform and coronary ligaments',
      'Gastrophrenic and gastrosplenic ligaments',
      'Hepatoduodenal and hepatogastric ligaments',
      'Splenorenal and phrenicocolic ligaments',
      'Transverse and sigmoid mesocolon'
    ],
    correctAnswer: 1,
    explanation:
      'The gastric lodge is bounded laterally by peritoneal reflections including the gastrophrenic ligament (to diaphragm) and gastrosplenic ligament (to spleen).'
  },
  {
    id: 'gl4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure forms the floor of the gastric lodge?',
    options: [
      'Diaphragm',
      'Transverse mesocolon',
      'Greater omentum alone',
      'Pelvic peritoneum',
      'Mesentery'
    ],
    correctAnswer: 1,
    explanation:
      'The floor of the gastric lodge is formed by the transverse mesocolon, which separates the supracolic compartment (containing the stomach) from the infracolic compartment.'
  },
  {
    id: 'gl5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure lies posterior to the stomach within the gastric lodge, separated by the lesser sac?',
    options: [
      'Liver',
      'Right kidney',
      'Pancreas (stomach bed)',
      'Ascending colon',
      'Cecum'
    ],
    correctAnswer: 2,
    explanation:
      'The pancreas lies posterior to the stomach, separated by the potential space of the lesser sac. Together with the left kidney, left adrenal and spleen, it forms the stomach bed.'
  },
  {
    id: 'gl6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which peritoneal space communicates with the gastric lodge through the epiploic foramen?',
    options: [
      'Greater peritoneal cavity',
      'Lesser sac (posterior to stomach)',
      'Hepatorenal recess',
      'Right subphrenic space',
      'Pelvic cavity'
    ],
    correctAnswer: 1,
    explanation:
      'The lesser sac lies posterior to the stomach within the gastric lodge and communicates with the greater peritoneal sac through the epiploic foramen (of Winslow).'
  },
  {
    id: 'gl7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which vessel runs along the superior border of the pancreas within the posterior wall of the gastric lodge?',
    options: [
      'Superior mesenteric artery',
      'Splenic artery',
      'Gastroduodenal artery',
      'Left gastric artery',
      'Inferior mesenteric artery'
    ],
    correctAnswer: 1,
    explanation:
      'The splenic artery runs a tortuous course along the superior border of the pancreas in the posterior wall of the lesser sac/gastric lodge, giving branches to the stomach and pancreas.'
  },
  {
    id: 'gl8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structures separate the gastric lodge from the hepatic lodge?',
    options: [
      'Greater omentum',
      'Lesser omentum and fissure for ligamentum venosum',
      'Transverse mesocolon',
      'Falciform ligament',
      'Coronary ligament'
    ],
    correctAnswer: 1,
    explanation:
      'The gastric lodge is separated from the hepatic lodge by the lesser omentum (hepatogastric ligament) and the fissure containing the ligamentum venosum on the visceral surface of the liver.'
  },
  {
    id: 'gl9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why is the gastric lodge clinically important in perforation of a posterior gastric ulcer?',
    options: [
      'It contains the portal vein',
      'Posterior perforation may erode into the splenic artery causing hemorrhage',
      'It communicates freely with the pleural cavity',
      'It contains the common bile duct',
      'It is directly continuous with the peritoneal cavity'
    ],
    correctAnswer: 1,
    explanation:
      'A posterior gastric ulcer may erode through the posterior gastric wall into the lesser sac and potentially into the splenic artery on the posterior wall, causing severe hemorrhage.'
  },
  {
    id: 'gl10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which recesses of the lesser sac are found within the gastric lodge region?',
    options: [
      'Superior, inferior and splenic recesses',
      'Right and left paracolic gutters',
      'Hepatorenal and subphrenic recesses',
      'Rectovesical and rectouterine pouches',
      'Paravesical spaces'
    ],
    correctAnswer: 0,
    explanation:
      'The lesser sac has superior recess (above the lesser omentum), inferior recess (between greater omentum layers) and splenic recess (toward the spleen), all related to the gastric lodge.'
  }
];

// 4. Hepatic Lodge
export const hepaticLodgeQuestions: Question[] = [
  {
    id: 'hl1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which organ occupies the hepatic lodge?',
    options: [
      'Stomach',
      'Spleen',
      'Liver',
      'Pancreas',
      'Kidney'
    ],
    correctAnswer: 2,
    explanation:
      'The hepatic lodge is the peritoneal compartment in the right upper quadrant that contains the liver, bounded by the diaphragm and defined by peritoneal ligament reflections.'
  },
  {
    id: 'hl2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which ligament attaches the liver to the anterior abdominal wall and diaphragm in the midline?',
    options: [
      'Coronary ligament',
      'Left triangular ligament',
      'Falciform ligament',
      'Hepatoduodenal ligament',
      'Gastrosplenic ligament'
    ],
    correctAnswer: 2,
    explanation:
      'The falciform ligament is a sickle-shaped peritoneal fold that attaches the liver to the anterior abdominal wall and diaphragm, containing the ligamentum teres (obliterated umbilical vein) in its free edge.'
  },
  {
    id: 'hl3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which peritoneal space within the hepatic lodge is most dependent in the supine patient?',
    options: [
      'Right subphrenic space',
      'Left subphrenic space',
      'Hepatorenal recess (Morison\'s pouch)',
      'Lesser sac',
      'Right paracolic gutter'
    ],
    correctAnswer: 2,
    explanation:
      'The hepatorenal recess (Morison\'s pouch) is the most dependent part of the peritoneal cavity in the supine position, located between the posterior right lobe of the liver and the right kidney.'
  },
  {
    id: 'hl4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which ligament forms the superior boundary of the hepatic bare area?',
    options: [
      'Falciform ligament',
      'Superior layer of coronary ligament',
      'Left triangular ligament',
      'Hepatogastric ligament',
      'Round ligament'
    ],
    correctAnswer: 1,
    explanation:
      'The bare area of the liver is bounded superiorly by the superior layer of the coronary ligament and inferiorly by the inferior layer; the layers meet laterally to form the right triangular ligament.'
  },
  {
    id: 'hl5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which space lies between the right hemidiaphragm and the superior surface of the right lobe of the liver?',
    options: [
      'Hepatorenal recess',
      'Right subphrenic space',
      'Lesser sac',
      'Left subphrenic space',
      'Right paracolic gutter'
    ],
    correctAnswer: 1,
    explanation:
      'The right subphrenic space lies between the diaphragm and the anterosuperior surface of the right lobe of the liver, separated from the left subphrenic space by the falciform ligament.'
  },
  {
    id: 'hl6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which peritoneal reflections define the lateral extent of the hepatic lodge on the right?',
    options: [
      'Falciform ligament',
      'Right triangular ligament and coronary ligament',
      'Lesser omentum',
      'Greater omentum',
      'Transverse mesocolon'
    ],
    correctAnswer: 1,
    explanation:
      'The lateral boundary of the hepatic lodge is marked by the right triangular ligament, where the superior and inferior layers of the coronary ligament meet at the right margin of the bare area.'
  },
  {
    id: 'hl7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which anatomical feature allows free communication between the right subphrenic space and the hepatorenal recess?',
    options: [
      'Falciform ligament',
      'Absence of peritoneal barrier between them on the right side',
      'Epiploic foramen',
      'Lesser omentum',
      'Transverse mesocolon'
    ],
    correctAnswer: 1,
    explanation:
      'The right subphrenic and subhepatic (hepatorenal) spaces communicate freely around the inferior margin of the liver as there is no peritoneal partition on the right side, allowing fluid to track between them.'
  },
  {
    id: 'hl8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structures lie within the bare area of the liver and are NOT covered by peritoneum?',
    options: [
      'Portal vein and hepatic artery',
      'IVC, right adrenal gland and part of right kidney',
      'Common bile duct and cystic duct',
      'Gallbladder and round ligament',
      'Splenic vein and left gastric artery'
    ],
    correctAnswer: 1,
    explanation:
      'The bare area contains the IVC (in its groove), the right suprarenal gland, and part of the right kidney, all in direct contact with the liver without peritoneal covering.'
  },
  {
    id: 'hl9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which clinical condition may result from a subphrenic abscess in the hepatic lodge?',
    options: [
      'Ascites only',
      'Referred pain to the right shoulder via phrenic nerve irritation',
      'Left-sided pleural effusion',
      'Direct spread to the stomach',
      'Portal hypertension'
    ],
    correctAnswer: 1,
    explanation:
      'A right subphrenic abscess may irritate the diaphragm, causing referred pain to the right shoulder (C3-C5 dermatome) via the phrenic nerve, and may cause sympathetic pleural effusion.'
  },
  {
    id: 'hl10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which space connects the hepatic lodge to the lesser sac?',
    options: [
      'Right paracolic gutter',
      'Hepatorenal recess',
      'Epiploic foramen (of Winslow)',
      'Falciform ligament hiatus',
      'Transverse mesocolon defect'
    ],
    correctAnswer: 2,
    explanation:
      'The epiploic foramen lies at the junction of the hepatic lodge and lesser sac, bounded by the hepatoduodenal ligament anteriorly, allowing communication between the greater and lesser peritoneal sacs.'
  }
];

// 5. Splenic Lodge
export const splenicLodgeQuestions: Question[] = [
  {
    id: 'spl1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which organ occupies the splenic lodge in the left upper quadrant?',
    options: [
      'Left kidney',
      'Stomach',
      'Spleen',
      'Pancreatic tail',
      'Left adrenal gland'
    ],
    correctAnswer: 2,
    explanation:
      'The splenic lodge is the peritoneal compartment in the left hypochondrium that contains the spleen, bounded by the diaphragm laterally and superiorly, and supported by the phrenicocolic ligament inferiorly.'
  },
  {
    id: 'spl2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which ligament supports the spleen from below by forming a "shelf"?',
    options: [
      'Gastrosplenic ligament',
      'Splenorenal ligament',
      'Phrenicocolic ligament',
      'Gastrophrenic ligament',
      'Falciform ligament'
    ],
    correctAnswer: 2,
    explanation:
      'The phrenicocolic ligament extends from the diaphragm to the splenic flexure of the colon and forms the "splenic shelf" or sustentaculum lienis, which supports the spleen inferiorly.'
  },
  {
    id: 'spl3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which two ligaments attach the spleen at its hilum and transmit its vascular supply?',
    options: [
      'Falciform and coronary ligaments',
      'Gastrosplenic and splenorenal (lienorenal) ligaments',
      'Hepatogastric and hepatoduodenal ligaments',
      'Gastrophrenic and gastrocolic ligaments',
      'Greater and lesser omentum'
    ],
    correctAnswer: 1,
    explanation:
      'The gastrosplenic ligament (transmitting short gastric and left gastroepiploic vessels) and the splenorenal ligament (transmitting splenic vessels and pancreatic tail) attach to the splenic hilum.'
  },
  {
    id: 'spl4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structures pass through the splenorenal ligament to reach the spleen?',
    options: [
      'Left gastric artery and portal vein',
      'Splenic artery, splenic vein and tail of pancreas',
      'Short gastric vessels only',
      'Right gastroepiploic vessels',
      'Superior mesenteric vessels'
    ],
    correctAnswer: 1,
    explanation:
      'The splenorenal (lienorenal) ligament transmits the splenic artery, splenic vein and the tail of the pancreas from the posterior abdominal wall to the hilum of the spleen.'
  },
  {
    id: 'spl5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which recess of the lesser sac extends toward the splenic hilum?',
    options: [
      'Superior recess',
      'Inferior recess',
      'Splenic recess',
      'Hepatic recess',
      'Duodenal recess'
    ],
    correctAnswer: 2,
    explanation:
      'The splenic recess of the lesser sac extends to the left toward the hilum of the spleen, between the gastrosplenic and splenorenal ligaments.'
  },
  {
    id: 'spl6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which peritoneal arrangement explains why the spleen is an intraperitoneal organ?',
    options: [
      'It has no peritoneal covering',
      'It is completely surrounded by peritoneum except at the hilum where ligaments attach',
      'It is retroperitoneal',
      'Only its anterior surface has peritoneum',
      'It lies within the lesser sac'
    ],
    correctAnswer: 1,
    explanation:
      'The spleen is entirely covered by peritoneum except at the hilum, where the gastrosplenic and splenorenal ligaments attach, making it a truly intraperitoneal organ.'
  },
  {
    id: 'spl7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which surface of the spleen is related to the peritoneum-covered diaphragm?',
    options: [
      'Gastric surface',
      'Renal surface',
      'Colic surface',
      'Diaphragmatic surface',
      'Hilar surface'
    ],
    correctAnswer: 3,
    explanation:
      'The diaphragmatic surface of the spleen is the smooth, convex lateral surface that lies against the peritoneum covering the left hemidiaphragm, separated from the left pleural cavity.'
  },
  {
    id: 'spl8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structures border the splenic lodge medially?',
    options: [
      'Liver and gallbladder',
      'Stomach (via gastrosplenic ligament) and left kidney (via splenorenal ligament)',
      'Right colon and duodenum',
      'Pancreatic head and portal vein',
      'Jejunum and ileum'
    ],
    correctAnswer: 1,
    explanation:
      'The splenic lodge is bounded medially by the stomach (connected via the gastrosplenic ligament) and the left kidney (connected via the splenorenal ligament).'
  },
  {
    id: 'spl9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why does the phrenicocolic ligament limit spread of infection from the left paracolic gutter to the left subphrenic space?',
    options: [
      'It is impermeable to fluid',
      'It creates a peritoneal barrier or partial obstruction at the splenic flexure',
      'It contains lymph nodes that filter bacteria',
      'It has antimicrobial properties',
      'It completely seals the left upper quadrant'
    ],
    correctAnswer: 1,
    explanation:
      'The phrenicocolic ligament forms a partial peritoneal barrier at the level of the splenic flexure, limiting (but not completely preventing) the upward spread of fluid from the left paracolic gutter.'
  },
  {
    id: 'spl10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'During splenectomy, which ligaments must be divided to mobilize the spleen?',
    options: [
      'Falciform and coronary ligaments',
      'Gastrosplenic, splenorenal and phrenicocolic ligaments',
      'Hepatogastric and hepatoduodenal ligaments',
      'Greater and lesser omentum',
      'Transverse and sigmoid mesocolon'
    ],
    correctAnswer: 1,
    explanation:
      'To remove the spleen, the surgeon must divide the gastrosplenic ligament (with short gastric vessels), splenorenal ligament (with splenic vessels) and release the phrenicocolic ligament attachments.'
  }
];

// Combine all peritoneum questions for easy import
export const peritoneumQuestions: Question[] = [
  ...peritonealCavityCompartmentsQuestions,
  ...greaterLesserOmentumQuestions,
  ...gastricLodgeQuestions,
  ...hepaticLodgeQuestions,
  ...splenicLodgeQuestions
];
