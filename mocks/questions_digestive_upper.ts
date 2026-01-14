import type { Question } from './questions';

// ============================================================================
// UPPER DIGESTIVE SYSTEM QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Stomacul: mijloace de fixare si raporturi (stomachFixationRelationsQuestions)
// 2. Stomacul: proiecție, configurație externă, raporturi (stomachExternalConfigQuestions)
// 3. Stomacul: pediculii vasculonervoși (stomachVasculonervousPediclesQuestions)
// 4. Duodenul (duodenumQuestions)
// 5. Pancreasul (pancreasQuestions)
// ============================================================================

// 1. Stomach: Fixation and Relations
export const stomachFixationRelationsQuestions: Question[] = [
  {
    id: 'sfr1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which peritoneal fold attaches the lesser curvature of the stomach to the liver?',
    question_ro: 'Care pliu peritoneal atașează curbura mică a stomacului la ficat?',
    options: [
      'Greater omentum',
      'Lesser omentum (hepatogastric ligament)',
      'Gastrosplenic ligament',
      'Transverse mesocolon',
      'Falciform ligament'
    ],
    options_ro: [
      'Omentul mare',
      'Omentul mic (ligamentul hepatogastric)',
      'Ligamentul gastrosplenic',
      'Mezocolonul transvers',
      'Ligamentul falciform'
    ],
    correctAnswer: 1,
    explanation:
      'The lesser omentum extends from the lesser curvature of the stomach and proximal duodenum to the liver, with the hepatogastric ligament being the portion attached to the stomach.',
    explanation_ro:
      'Omentul mic se extinde de la curbura mică a stomacului și duodenul proximal la ficat, ligamentul hepatogastric fiind porțiunea atașată la stomac.'
  },
  {
    id: 'sfr2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which structure forms the posterior wall of the lesser sac (omental bursa) behind the stomach?',
    question_ro: 'Care structură formează peretele posterior al sacului mic (bursa omentală) în spatele stomacului?',
    options: [
      'Liver',
      'Transverse colon',
      'Pancreas and its peritoneal covering',
      'Spleen',
      'Left kidney'
    ],
    options_ro: [
      'Ficatul',
      'Colonul transvers',
      'Pancreasul și acoperirea sa peritoneală',
      'Splina',
      'Rinichiul stâng'
    ],
    correctAnswer: 2,
    explanation:
      'The posterior wall of the lesser sac is formed primarily by the peritoneum covering the pancreas, with the stomach forming the anterior wall of this potential space.',
    explanation_ro:
      'Peretele posterior al sacului mic este format în principal de peritoneul care acoperă pancreasul, stomacul formând peretele anterior al acestui spațiu potențial.'
  },
  {
    id: 'sfr3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which ligament connects the greater curvature of the stomach to the spleen?',
    question_ro: 'Care ligament conectează curbura mare a stomacului la splină?',
    options: [
      'Hepatogastric ligament',
      'Gastrocolic ligament',
      'Gastrosplenic (gastrolienal) ligament',
      'Splenorenal ligament',
      'Phrenicogastric ligament'
    ],
    options_ro: [
      'Ligamentul hepatogastric',
      'Ligamentul gastrocolic',
      'Ligamentul gastrosplenic (gastrolienal)',
      'Ligamentul splenorenal',
      'Ligamentul frenicogastric'
    ],
    correctAnswer: 2,
    explanation:
      'The gastrosplenic (gastrolienal) ligament extends from the greater curvature of the stomach to the hilum of the spleen, transmitting the short gastric and left gastroepiploic vessels.',
    explanation_ro:
      'Ligamentul gastrosplenic (gastrolienal) se extinde de la curbura mare a stomacului la hilul splinei, transmițând vasele gastrice scurte și vasele gastroepiploice stângi.'
  },
  {
    id: 'sfr4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which part of the stomach is relatively fixed in position and serves as the main anchor point?',
    question_ro: 'Care parte a stomacului este relativ fixată în poziție și servește ca principal punct de ancoraj?',
    options: [
      'Fundus',
      'Body',
      'Pyloric antrum',
      'Cardia and gastroesophageal junction',
      'Greater curvature'
    ],
    options_ro: [
      'Fundul',
      'Corpul',
      'Antrul piloric',
      'Cardia și joncțiunea gastroesofagiană',
      'Curbura mare'
    ],
    correctAnswer: 3,
    explanation:
      'The cardia is the most fixed part of the stomach, anchored at the esophageal hiatus of the diaphragm by the phrenoesophageal ligament and surrounded by the muscular crura.',
    explanation_ro:
      'Cardia este partea cea mai fixată a stomacului, ancorată la hiatul esofagian al diafragmului prin ligamentul frenoesofagian și înconjurată de crurile musculare.'
  },
  {
    id: 'sfr5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure lies immediately posterior to the stomach in the stomach bed?',
    question_ro: 'Care structură se află imediat posterior de stomac în patul stomacului?',
    options: [
      'Right kidney and adrenal gland',
      'Pancreas, left kidney, left adrenal gland and splenic artery',
      'Descending colon only',
      'Liver and gallbladder',
      'Urinary bladder'
    ],
    options_ro: [
      'Rinichiul drept și glanda suprarenală',
      'Pancreasul, rinichiul stâng, glanda suprarenală stângă și artera splenică',
      'Doar colonul descendent',
      'Ficatul și vezica biliară',
      'Vezica urinară'
    ],
    correctAnswer: 1,
    explanation:
      'The stomach bed includes the pancreas, left kidney, left suprarenal gland, splenic artery, and part of the transverse mesocolon, all separated from the stomach by the lesser sac.',
    explanation_ro:
      'Patul stomacului include pancreasul, rinichiul stâng, glanda suprarenală stângă, artera splenică și o parte din mezocolonul transvers, toate separate de stomac prin sacul mic.'
  },
  {
    id: 'sfr6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which peritoneal ligament attaches the fundus of the stomach to the undersurface of the diaphragm?',
    options: [
      'Hepatogastric ligament',
      'Gastrocolic ligament',
      'Gastrophrenic ligament',
      'Gastrosplenic ligament',
      'Coronary ligament'
    ],
    correctAnswer: 2,
    explanation:
      'The gastrophrenic ligament is a reflection of peritoneum extending from the fundus of the stomach to the inferior surface of the diaphragm, helping to stabilize the gastric fundus.'
  },
  {
    id: 'sfr7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Through which opening does the lesser sac communicate with the greater peritoneal cavity?',
    options: [
      'Foramen of Winslow (epiploic foramen)',
      'Hiatus of Schwalbe',
      'Foramen of Bochdalek',
      'Foramen of Morgagni',
      'Greater sciatic foramen'
    ],
    correctAnswer: 0,
    explanation:
      'The epiploic foramen (foramen of Winslow) is bounded by the hepatoduodenal ligament anteriorly, IVC posteriorly, caudate lobe superiorly, and first part of duodenum inferiorly, connecting the lesser and greater sacs.'
  },
  {
    id: 'sfr8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structures form the boundaries of the epiploic foramen?',
    options: [
      'Liver anteriorly, stomach posteriorly, spleen laterally',
      'Hepatoduodenal ligament anteriorly, IVC posteriorly, caudate lobe superiorly, first part of duodenum inferiorly',
      'Portal vein anteriorly, aorta posteriorly, diaphragm superiorly',
      'Gallbladder anteriorly, right kidney posteriorly, hepatic flexure inferiorly',
      'Lesser omentum anteriorly, greater omentum posteriorly'
    ],
    correctAnswer: 1,
    explanation:
      'The epiploic foramen has precise boundaries: hepatoduodenal ligament (containing portal triad) anteriorly, IVC posteriorly, caudate lobe of liver superiorly, and superior part of duodenum inferiorly.'
  },
  {
    id: 'sfr9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure separates the stomach from the left lobe of the liver anteriorly?',
    options: [
      'Greater omentum',
      'Transverse mesocolon',
      'Lesser omentum and lesser sac',
      'Falciform ligament',
      'Gastrosplenic ligament'
    ],
    correctAnswer: 2,
    explanation:
      'The anterior surface of the stomach is related to the left lobe of the liver, with the lesser omentum extending between them and the lesser sac lying posterior to the stomach.'
  },
  {
    id: 'sfr10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'In gastric volvulus, which type of rotation occurs around an axis connecting the cardia and pylorus?',
    options: [
      'Mesenteroaxial volvulus',
      'Organoaxial volvulus',
      'Combined volvulus',
      'Paraesophageal herniation',
      'Sliding hiatal herniation'
    ],
    correctAnswer: 1,
    explanation:
      'Organoaxial volvulus involves rotation of the stomach around its long axis (cardiopyloric axis), typically with the greater curvature rotating superiorly, and is the more common type of gastric volvulus.'
  }
];

// 2. Stomach: Projection, External Configuration, Relations
export const stomachExternalConfigQuestions: Question[] = [
  {
    id: 'sec1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which part of the stomach lies superior to the level of the cardiac orifice?',
    options: [
      'Pyloric antrum',
      'Body',
      'Fundus',
      'Pyloric canal',
      'Angular incisure'
    ],
    correctAnswer: 2,
    explanation:
      'The fundus is the dome-shaped portion of the stomach that projects superiorly and to the left, rising above the level of the cardiac orifice and contacting the left hemidiaphragm.'
  },
  {
    id: 'sec2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which curvature of the stomach is shorter and faces to the right?',
    options: [
      'Greater curvature',
      'Lesser curvature',
      'Anterior curvature',
      'Posterior curvature',
      'Inferior curvature'
    ],
    correctAnswer: 1,
    explanation:
      'The lesser curvature is the shorter, concave border of the stomach facing to the right, extending from the cardia to the pylorus and giving attachment to the lesser omentum.'
  },
  {
    id: 'sec3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At which vertebral level does the cardiac orifice of the stomach typically lie?',
    options: [
      'T8',
      'T10-T11',
      'T12',
      'L1',
      'L2-L3'
    ],
    correctAnswer: 1,
    explanation:
      'The cardiac orifice lies at approximately the level of T10-T11, posterior to the 7th left costal cartilage, about 2.5 cm from the median plane.'
  },
  {
    id: 'sec4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which notch on the lesser curvature marks the junction between the body and pyloric part of the stomach?',
    options: [
      'Cardiac notch',
      'Angular incisure (incisura angularis)',
      'Pyloric notch',
      'Duodenal notch',
      'Fundic notch'
    ],
    correctAnswer: 1,
    explanation:
      'The angular incisure (incisura angularis) is a constant notch on the lesser curvature that marks the junction between the body and pyloric portion of the stomach.'
  },
  {
    id: 'sec5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which organs are in direct contact with the anterior surface of the stomach?',
    options: [
      'Pancreas and left kidney',
      'Left lobe of liver, diaphragm and anterior abdominal wall',
      'Spleen and splenic flexure of colon',
      'Right kidney and adrenal gland',
      'Transverse colon only'
    ],
    correctAnswer: 1,
    explanation:
      'The anterior surface of the stomach is related to the left lobe of the liver, the diaphragm, and (when distended) the anterior abdominal wall.'
  },
  {
    id: 'sec6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure creates the cardiac notch at the junction of the esophagus and stomach?',
    options: [
      'The fundus projecting above and to the left of the esophageal entry',
      'The pyloric sphincter',
      'The angular incisure',
      'The greater curvature folding inward',
      'The lesser omentum attachment'
    ],
    correctAnswer: 0,
    explanation:
      'The cardiac notch is formed by the angle between the left edge of the esophagus and the fundus of the stomach, which bulges superiorly and to the left of the esophagogastric junction.'
  },
  {
    id: 'sec7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'At which vertebral level does the pylorus typically lie in the supine position?',
    options: [
      'T10',
      'T12',
      'L1 (transpyloric plane)',
      'L3',
      'L5'
    ],
    correctAnswer: 2,
    explanation:
      'The pylorus typically lies at the level of L1 vertebra in the supine position, corresponding to the transpyloric plane, approximately a hands breadth below the xiphisternum.'
  },
  {
    id: 'sec8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which parts constitute the pyloric portion of the stomach from proximal to distal?',
    options: [
      'Fundus and body',
      'Cardia and fundus',
      'Pyloric antrum, pyloric canal and pyloric sphincter',
      'Body and angular incisure only',
      'Greater curvature and lesser curvature'
    ],
    correctAnswer: 2,
    explanation:
      'The pyloric portion consists of the pyloric antrum (wider proximal part), pyloric canal (narrow distal part) and pyloric sphincter (thickened circular muscle at the gastroduodenal junction).'
  },
  {
    id: 'sec9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which surface of the stomach is more correctly described as posteroinferior?',
    options: [
      'Anterior surface',
      'Posterior surface (forming the stomach bed relations)',
      'Superior surface',
      'Lateral surface',
      'Medial surface'
    ],
    correctAnswer: 1,
    explanation:
      'The so-called posterior surface is actually posteroinferior in orientation and forms the anterior wall of the lesser sac, relating to the stomach bed structures (pancreas, left kidney, spleen, splenic artery).'
  },
  {
    id: 'sec10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which radiological appearance is characteristic of the J-shaped (hypersthenic) stomach?',
    options: [
      'Stomach nearly horizontal with high pylorus',
      'Long, vertical stomach with low pylorus extending into the pelvis',
      'Short, high-lying stomach with nearly transverse orientation',
      'Stomach rotated 90 degrees on its long axis',
      'Stomach completely behind the liver'
    ],
    correctAnswer: 2,
    explanation:
      'The J-shaped or hypersthenic stomach is short and high-lying with a nearly transverse orientation, typically seen in stocky individuals, with the pylorus at a higher level than in asthenic body types.'
  }
];

// 3. Stomach: Vasculonervous Pedicles
export const stomachVasculonervousPediclesQuestions: Question[] = [
  {
    id: 'svp1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'From which major arterial trunk do the left gastric and splenic arteries arise?',
    options: [
      'Superior mesenteric artery',
      'Celiac trunk',
      'Inferior mesenteric artery',
      'Abdominal aorta directly',
      'Common hepatic artery'
    ],
    correctAnswer: 1,
    explanation:
      'The celiac trunk gives rise to the left gastric artery, splenic artery and common hepatic artery, all of which contribute to the gastric blood supply.'
  },
  {
    id: 'svp2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which artery runs along the lesser curvature of the stomach from left to right?',
    options: [
      'Left gastroepiploic artery',
      'Right gastroepiploic artery',
      'Left gastric artery',
      'Short gastric arteries',
      'Splenic artery'
    ],
    correctAnswer: 2,
    explanation:
      'The left gastric artery runs along the lesser curvature within the lesser omentum, anastomosing with the right gastric artery to form an arterial arcade along this border.'
  },
  {
    id: 'svp3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which artery supplies the greater curvature of the stomach and arises from the splenic artery?',
    options: [
      'Right gastric artery',
      'Right gastroepiploic artery',
      'Left gastroepiploic artery',
      'Left gastric artery',
      'Gastroduodenal artery'
    ],
    correctAnswer: 2,
    explanation:
      'The left gastroepiploic artery arises from the splenic artery near the splenic hilum and runs along the greater curvature within the gastrosplenic and gastrocolic ligaments.'
  },
  {
    id: 'svp4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which arteries supply the fundus of the stomach?',
    options: [
      'Right gastric arteries only',
      'Short gastric arteries from the splenic artery',
      'Inferior phrenic arteries only',
      'Superior mesenteric artery branches',
      'Gastroduodenal artery branches'
    ],
    correctAnswer: 1,
    explanation:
      'The short gastric arteries (4-5 branches) arise from the splenic artery or its branches near the splenic hilum and pass through the gastrosplenic ligament to supply the fundus.'
  },
  {
    id: 'svp5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which nerve provides parasympathetic innervation to the stomach and runs along the lesser curvature?',
    options: [
      'Greater splanchnic nerve',
      'Phrenic nerve',
      'Anterior vagal trunk (from left vagus)',
      'Sympathetic chain',
      'Pudendal nerve'
    ],
    correctAnswer: 2,
    explanation:
      'The anterior vagal trunk (derived mainly from the left vagus) descends on the anterior surface of the esophagus and stomach, giving branches along the lesser curvature (the "crow\'s foot").'
  },
  {
    id: 'svp6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which branch of the anterior vagal trunk is preserved in highly selective vagotomy to maintain antral motility?',
    options: [
      'Hepatic branches',
      'Celiac branches',
      'Criminal nerve of Grassi',
      'Nerve of Latarjet (anterior nerve of the lesser curvature)',
      'Greater splanchnic nerve'
    ],
    correctAnswer: 3,
    explanation:
      'The nerve of Latarjet runs along the lesser curvature and provides motor innervation to the antrum and pylorus; it is preserved in highly selective (parietal cell) vagotomy to maintain gastric emptying.'
  },
  {
    id: 'svp7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which veins drain the stomach and ultimately contribute to the portal venous system?',
    options: [
      'Gastric veins draining to the inferior vena cava directly',
      'Left and right gastric veins, short gastric veins and gastroepiploic veins to portal or splenic vein',
      'Gastric veins to the azygos system',
      'Gastric veins to the renal veins',
      'Gastric veins to the hepatic veins directly'
    ],
    correctAnswer: 1,
    explanation:
      'Gastric venous blood drains via the left and right gastric veins (to portal vein), short gastric and left gastroepiploic veins (to splenic vein), and right gastroepiploic vein (to SMV).'
  },
  {
    id: 'svp8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure transmits the right gastric artery to the lesser curvature?',
    options: [
      'Greater omentum',
      'Gastrosplenic ligament',
      'Hepatogastric ligament (lesser omentum)',
      'Transverse mesocolon',
      'Gastrocolic ligament'
    ],
    correctAnswer: 2,
    explanation:
      'The right gastric artery runs within the hepatogastric ligament (part of the lesser omentum) along the lesser curvature, anastomosing with the left gastric artery.'
  },
  {
    id: 'svp9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which plexus provides sympathetic innervation to the stomach?',
    options: [
      'Inferior mesenteric plexus',
      'Superior hypogastric plexus',
      'Celiac plexus',
      'Lumbar plexus',
      'Sacral plexus'
    ],
    correctAnswer: 2,
    explanation:
      'Sympathetic fibers reach the stomach via the celiac plexus, derived from the greater splanchnic nerves (T5-T9), traveling along the arterial branches from the celiac trunk.'
  },
  {
    id: 'svp10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The "criminal nerve of Grassi" is significant in vagotomy because:',
    options: [
      'It is the main motor supply to the pylorus',
      'It is a posterior vagal branch to the fundus that, if not divided, may cause recurrent ulceration',
      'It provides sensation to the cardia only',
      'It is the sole blood supply to the lesser curvature',
      'It connects the vagus to the phrenic nerve'
    ],
    correctAnswer: 1,
    explanation:
      'The criminal nerve of Grassi is a branch of the posterior vagus to the gastric fundus; failure to divide it during vagotomy may leave acid-secreting mucosa innervated, leading to recurrent ulceration.'
  }
];

// 4. Duodenum
export const duodenumQuestions: Question[] = [
  {
    id: 'duo1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which part of the duodenum is entirely intraperitoneal and mobile?',
    options: [
      'Second (descending) part',
      'Third (horizontal) part',
      'Fourth (ascending) part',
      'First part (superior/duodenal bulb)',
      'None; the entire duodenum is retroperitoneal'
    ],
    correctAnswer: 3,
    explanation:
      'The first 2-3 cm of the superior (first) part of the duodenum, called the duodenal bulb or cap, is intraperitoneal and relatively mobile, while the remainder is secondarily retroperitoneal.'
  },
  {
    id: 'duo2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which structure opens into the posteromedial wall of the second part of the duodenum?',
    options: [
      'Appendix',
      'Common bile duct and main pancreatic duct at the major duodenal papilla',
      'Jejunum',
      'Splenic vein',
      'Portal vein'
    ],
    correctAnswer: 1,
    explanation:
      'The major duodenal papilla (of Vater) is located on the posteromedial wall of the descending duodenum, where the common bile duct and main pancreatic duct typically join and open.'
  },
  {
    id: 'duo3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which vessel crosses anterior to the third (horizontal) part of the duodenum?',
    options: [
      'Inferior vena cava',
      'Abdominal aorta',
      'Superior mesenteric artery and vein',
      'Splenic artery',
      'Left renal vein'
    ],
    correctAnswer: 2,
    explanation:
      'The superior mesenteric vessels (artery and vein) cross anterior to the third part of the duodenum, which can result in compression (superior mesenteric artery syndrome) in certain conditions.'
  },
  {
    id: 'duo4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure lies posterior to the first part of the duodenum?',
    options: [
      'Head of pancreas',
      'Portal vein, gastroduodenal artery and common bile duct',
      'Left kidney',
      'Spleen',
      'Transverse colon'
    ],
    correctAnswer: 1,
    explanation:
      'Posterior to the first part of the duodenum lie the portal vein, gastroduodenal artery and common bile duct—structures at risk during surgery for duodenal ulcer disease.'
  },
  {
    id: 'duo5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At which vertebral level does the duodenojejunal junction (ligament of Treitz) typically lie?',
    options: [
      'T12',
      'L1',
      'L2',
      'L4',
      'S1'
    ],
    correctAnswer: 2,
    explanation:
      'The duodenojejunal flexure is located at approximately the level of L2, supported by the suspensory ligament of Treitz, which contains muscle fibers from the right crus of the diaphragm.'
  },
  {
    id: 'duo6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which arteries provide the primary blood supply to the duodenum?',
    options: [
      'Left gastric and splenic arteries',
      'Superior and inferior pancreaticoduodenal arteries',
      'Jejunal arteries only',
      'Inferior mesenteric artery branches',
      'Lumbar arteries'
    ],
    correctAnswer: 1,
    explanation:
      'The duodenum is supplied by the superior pancreaticoduodenal artery (from gastroduodenal artery/celiac trunk) and inferior pancreaticoduodenal artery (from SMA), forming arcades around the head of the pancreas.'
  },
  {
    id: 'duo7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The duodenum curves around which structure, forming a C-shaped loop?',
    options: [
      'Left kidney',
      'Spleen',
      'Head of the pancreas',
      'Right lobe of liver',
      'Gallbladder'
    ],
    correctAnswer: 2,
    explanation:
      'The duodenum forms a C-shaped curve around the head of the pancreas, with the concavity facing left. The descending and horizontal parts are intimately related to the pancreatic head.'
  },
  {
    id: 'duo8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure marks the embryological boundary between foregut and midgut derivatives in the duodenum?',
    options: [
      'Pylorus',
      'Major duodenal papilla',
      'Duodenojejunal flexure',
      'Minor duodenal papilla',
      'First part of duodenum'
    ],
    correctAnswer: 1,
    explanation:
      'The major duodenal papilla marks the approximate junction of foregut and midgut derivatives, hence the dual blood supply from celiac trunk (foregut) and SMA (midgut).'
  },
  {
    id: 'duo9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which ligament suspends the duodenojejunal flexure and contains smooth muscle fibers?',
    options: [
      'Hepatoduodenal ligament',
      'Ligament of Treitz (suspensory muscle of duodenum)',
      'Gastrocolic ligament',
      'Falciform ligament',
      'Coronary ligament'
    ],
    correctAnswer: 1,
    explanation:
      'The ligament of Treitz is a fibromuscular band extending from the right crus of the diaphragm to the duodenojejunal flexure; it serves as an important surgical landmark.'
  },
  {
    id: 'duo10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure lies directly posterior to the third and fourth parts of the duodenum?',
    options: [
      'Liver',
      'Spleen',
      'Abdominal aorta and inferior vena cava',
      'Stomach',
      'Sigmoid colon'
    ],
    correctAnswer: 2,
    explanation:
      'The third and fourth parts of the duodenum lie anterior to the aorta and IVC, with the left renal vein crossing between the aorta and SMA just superior to the horizontal duodenum.'
  }
];

// 5. Pancreas
export const pancreasQuestions: Question[] = [
  {
    id: 'pan1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which part of the pancreas lies within the curve of the duodenum?',
    options: [
      'Tail',
      'Body',
      'Neck',
      'Head',
      'Uncinate process'
    ],
    correctAnswer: 3,
    explanation:
      'The head of the pancreas is the expanded right end of the gland that lies within the C-shaped concavity of the duodenum, closely related to the second and third duodenal parts.'
  },
  {
    id: 'pan2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'At which vertebral level does the body of the pancreas typically lie?',
    options: [
      'T10',
      'T12',
      'L1-L2',
      'L4',
      'S1'
    ],
    correctAnswer: 2,
    explanation:
      'The body of the pancreas lies approximately at the level of L1-L2, corresponding to the transpyloric plane, with the gland oriented obliquely from lower right (head) to upper left (tail).'
  },
  {
    id: 'pan3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which major vessel runs in a groove on the posterior surface of the neck of the pancreas?',
    options: [
      'Inferior mesenteric vein',
      'Splenic vein joining the superior mesenteric vein to form the portal vein',
      'Inferior vena cava',
      'Aorta',
      'Left renal artery'
    ],
    correctAnswer: 1,
    explanation:
      'The portal vein is formed posterior to the neck of the pancreas by the union of the splenic vein and superior mesenteric vein. The SMV runs in a groove on the posterior neck.'
  },
  {
    id: 'pan4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which artery runs along the superior border of the pancreas?',
    options: [
      'Gastroduodenal artery',
      'Splenic artery',
      'Superior mesenteric artery',
      'Left gastric artery',
      'Inferior pancreaticoduodenal artery'
    ],
    correctAnswer: 1,
    explanation:
      'The splenic artery runs a tortuous course along the superior border of the pancreas from the celiac trunk to the splenic hilum, giving pancreatic branches along the way.'
  },
  {
    id: 'pan5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which part of the pancreas extends behind the superior mesenteric vessels?',
    options: [
      'Head',
      'Neck',
      'Body',
      'Tail',
      'Uncinate process'
    ],
    correctAnswer: 4,
    explanation:
      'The uncinate process is a hook-like projection from the lower part of the pancreatic head that extends posterior to the superior mesenteric vessels.'
  },
  {
    id: 'pan6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure lies directly anterior to the body of the pancreas?',
    options: [
      'Right kidney',
      'Stomach (posterior wall) separated by the lesser sac',
      'Liver',
      'Ascending colon',
      'Urinary bladder'
    ],
    correctAnswer: 1,
    explanation:
      'The body of the pancreas lies in the floor of the lesser sac (omental bursa), with the posterior wall of the stomach anterior to it, separated by the potential space of the lesser sac.'
  },
  {
    id: 'pan7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structures lie posterior to the head of the pancreas?',
    options: [
      'Stomach and spleen',
      'IVC, right renal vessels, right crus of diaphragm and common bile duct',
      'Left kidney and adrenal',
      'Transverse colon',
      'Jejunum'
    ],
    correctAnswer: 1,
    explanation:
      'Posterior to the pancreatic head lie the IVC, right renal vessels, right crus of diaphragm, and the common bile duct (which may be embedded in the posterior head or pass in a groove).'
  },
  {
    id: 'pan8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which embryological structure gives rise to the uncinate process and inferior head of the pancreas?',
    options: [
      'Dorsal pancreatic bud',
      'Ventral pancreatic bud',
      'Foregut endoderm only',
      'Midgut endoderm only',
      'Neural crest cells'
    ],
    correctAnswer: 1,
    explanation:
      'The ventral pancreatic bud rotates posteriorly during development and fuses with the dorsal bud, forming the uncinate process and inferior part of the head, while the dorsal bud forms the body, tail and superior head.'
  },
  {
    id: 'pan9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which anatomical relationship explains referred pain from pancreatic disease to the back?',
    options: [
      'Anterior relation to the stomach',
      'Retroperitoneal position against the posterior abdominal wall and vertebral column',
      'Relation to the transverse colon',
      'Proximity to the spleen',
      'Connection to the duodenum'
    ],
    correctAnswer: 1,
    explanation:
      'The pancreas is a retroperitoneal organ lying against the posterior abdominal wall at L1-L2; inflammation or tumor can irritate retroperitoneal nerves, causing characteristic back pain.'
  },
  {
    id: 'pan10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The tail of the pancreas is closely related to which structure at the splenic hilum?',
    options: [
      'Right kidney',
      'Duodenum',
      'Spleen within the splenorenal ligament',
      'Liver',
      'Stomach fundus'
    ],
    correctAnswer: 2,
    explanation:
      'The tail of the pancreas extends into the splenorenal (lienorenal) ligament and reaches the hilum of the spleen. It is the only part of the pancreas that is intraperitoneal.'
  }
];

// Combine all upper digestive questions for easy import
export const upperDigestiveQuestions: Question[] = [
  ...stomachFixationRelationsQuestions,
  ...stomachExternalConfigQuestions,
  ...stomachVasculonervousPediclesQuestions,
  ...duodenumQuestions,
  ...pancreasQuestions
];
