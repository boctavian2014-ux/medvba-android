import type { Question } from './questions';

// ============================================================================
// ABDOMINAL VESSELS QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Aorta abdominală (abdominalAortaQuestions)
// 2. Trunchiul celiac (celiacTrunkQuestions)
// 3. Artera hepatică (hepaticArteryQuestions)
// 4. Vena portă (portalVeinQuestions)
// 5. Vasele splenice (splenicVesselsQuestions)
// 6. Vasele mezenterice superioare (superiorMesentericVesselsQuestions)
// 7. Vasele mezenterice inferioare (inferiorMesentericVesselsQuestions)
// 8. Arterele rectale (rectalArteriesQuestions)
// ============================================================================

// 1. Abdominal Aorta
export const abdominalAortaQuestions: Question[] = [
  {
    id: 'abd-aorta-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At what vertebral level does the abdominal aorta begin?',
    options: ['T10', 'T12 (aortic hiatus)', 'L1', 'L3'],
    correctAnswer: 1,
    explanation: 'The abdominal aorta begins at the T12 level where the thoracic aorta passes through the aortic hiatus of the diaphragm.'
  },
  {
    id: 'abd-aorta-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At what level does the abdominal aorta bifurcate?',
    options: ['L2', 'L3', 'L4', 'L5'],
    correctAnswer: 2,
    explanation: 'The abdominal aorta bifurcates into the right and left common iliac arteries at the L4 vertebral level, slightly to the left of the midline.'
  },
  {
    id: 'abd-aorta-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the three unpaired visceral branches of the abdominal aorta?',
    options: ['Renal, gonadal, lumbar', 'Celiac trunk, superior mesenteric, inferior mesenteric arteries', 'Phrenic, suprarenal, renal', 'Hepatic, splenic, gastric'],
    correctAnswer: 1,
    explanation: 'The three unpaired (midline) visceral branches are the celiac trunk (T12), superior mesenteric artery (L1), and inferior mesenteric artery (L3).'
  },
  {
    id: 'abd-aorta-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the paired visceral branches of the abdominal aorta?',
    options: ['Lumbar arteries', 'Suprarenal, renal, and gonadal arteries', 'Common iliac arteries', 'Intercostal arteries'],
    correctAnswer: 1,
    explanation: 'The paired visceral branches include the middle suprarenal arteries, renal arteries (L1-L2), and gonadal (testicular/ovarian) arteries.'
  },
  {
    id: 'abd-aorta-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What structure lies immediately anterior to the abdominal aorta?',
    options: ['Inferior vena cava', 'Left renal vein, pancreas, splenic vein', 'Stomach', 'Transverse colon'],
    correctAnswer: 1,
    explanation: 'The left renal vein, body of the pancreas, and splenic vein cross anterior to the abdominal aorta. The pancreas separates the aorta from the stomach.'
  },
  {
    id: 'abd-aorta-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the IVC in relation to the abdominal aorta?',
    options: ['Left of the aorta', 'Right of the aorta', 'Posterior to the aorta', 'Anterior to the aorta'],
    correctAnswer: 1,
    explanation: 'The inferior vena cava lies to the right of the abdominal aorta throughout its course. They diverge at their respective openings in the diaphragm.'
  },
  {
    id: 'abd-aorta-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is an abdominal aortic aneurysm (AAA) and its most common location?',
    options: ['Dilation above renal arteries', 'Dilation typically infrarenal (below renal arteries)', 'Narrowing of aorta', 'Aortic dissection'],
    correctAnswer: 1,
    explanation: 'AAA is abnormal dilation (>3 cm) of the abdominal aorta, most commonly infrarenal (90%). Risk factors include smoking, hypertension, and atherosclerosis.'
  },
  {
    id: 'abd-aorta-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How many pairs of lumbar arteries arise from the abdominal aorta?',
    options: ['2 pairs', '4 pairs', '6 pairs', '8 pairs'],
    correctAnswer: 1,
    explanation: 'Four pairs of lumbar arteries arise from the posterior aspect of the abdominal aorta to supply the posterior abdominal wall, corresponding to L1-L4 vertebrae.'
  },
  {
    id: 'abd-aorta-9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What terminal branch does the aorta give before bifurcating?',
    options: ['Lumbar artery', 'Middle sacral artery', 'Inferior phrenic artery', 'Iliolumbar artery'],
    correctAnswer: 1,
    explanation: 'The median (middle) sacral artery is a small unpaired terminal branch arising from the posterior aorta just above the bifurcation, descending on the sacrum.'
  },
  {
    id: 'abd-aorta-10',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What nerve plexus surrounds the abdominal aorta?',
    options: ['Celiac plexus only', 'Aortic (intermesenteric) plexus', 'Lumbar plexus', 'Sacral plexus'],
    correctAnswer: 1,
    explanation: 'The aortic (intermesenteric) plexus surrounds the abdominal aorta, connecting the celiac, superior mesenteric, and inferior mesenteric plexuses.'
  }
];

// 2. Celiac Trunk
export const celiacTrunkQuestions: Question[] = [
  {
    id: 'celiac-trunk-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At what vertebral level does the celiac trunk arise from the aorta?',
    options: ['T10', 'T12', 'L1', 'L2'],
    correctAnswer: 1,
    explanation: 'The celiac trunk arises from the anterior aorta at the T12 level, just below the aortic hiatus of the diaphragm.'
  },
  {
    id: 'celiac-trunk-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the three main branches of the celiac trunk?',
    options: ['Superior mesenteric, inferior mesenteric, renal', 'Left gastric, common hepatic, splenic arteries', 'Hepatic, cystic, gastroduodenal', 'Right gastric, left gastric, short gastric'],
    correctAnswer: 1,
    explanation: 'The celiac trunk classically divides into three branches: left gastric artery, common hepatic artery, and splenic artery (tripod of Haller).'
  },
  {
    id: 'celiac-trunk-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What embryological gut region does the celiac trunk supply?',
    options: ['Midgut', 'Hindgut', 'Foregut (distal esophagus to mid-duodenum)', 'All segments'],
    correctAnswer: 2,
    explanation: 'The celiac trunk supplies the foregut derivatives: distal esophagus, stomach, proximal duodenum (to major papilla), liver, gallbladder, pancreas, and spleen.'
  },
  {
    id: 'celiac-trunk-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the median arcuate ligament?',
    options: ['Part of the diaphragm that may compress celiac trunk', 'Ligament of the liver', 'Pancreatic attachment', 'Splenic ligament'],
    correctAnswer: 0,
    explanation: 'The median arcuate ligament connects the diaphragmatic crura anterior to the aorta. It may compress the celiac trunk causing median arcuate ligament syndrome (celiac artery compression syndrome).'
  },
  {
    id: 'celiac-trunk-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the length of the celiac trunk?',
    options: ['About 0.5 cm', 'About 1-2 cm', 'About 5 cm', 'About 10 cm'],
    correctAnswer: 1,
    explanation: 'The celiac trunk is very short, only about 1-2 cm long before dividing into its three main branches.'
  },
  {
    id: 'celiac-trunk-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What structure is immediately inferior to the celiac trunk origin?',
    options: ['Left renal vein', 'Superior border of pancreas', 'Inferior mesenteric artery', 'Transverse colon'],
    correctAnswer: 1,
    explanation: 'The superior border of the pancreatic body lies immediately inferior to the celiac trunk, separating it from the underlying splenic vein.'
  },
  {
    id: 'celiac-trunk-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the celiac ganglion and its relationship to the celiac trunk?',
    options: ['Motor ganglion', 'Paired prevertebral sympathetic ganglia surrounding the celiac trunk', 'Parasympathetic ganglion', 'Sensory ganglion'],
    correctAnswer: 1,
    explanation: 'The celiac ganglia are the largest prevertebral sympathetic ganglia, located on either side of the celiac trunk origin. They receive greater splanchnic nerves and distribute to foregut organs.'
  },
  {
    id: 'celiac-trunk-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What variations in celiac trunk anatomy are common?',
    options: ['Always has three branches', 'Hepatosplenic trunk with separate left gastric, or hepatogastric trunk', 'No variations exist', 'Always arises at L1'],
    correctAnswer: 1,
    explanation: 'Common variations include hepatosplenic trunk (left gastric from aorta), hepatogastric trunk (splenic from aorta), or replaced/accessory hepatic arteries from SMA.'
  }
];

// 3. Hepatic Artery
export const hepaticArteryQuestions: Question[] = [
  {
    id: 'hepatic-art-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What branches does the common hepatic artery give off?',
    options: ['Left and right hepatic only', 'Proper hepatic, gastroduodenal arteries (and right gastric)', 'Splenic artery', 'Left gastric artery'],
    correctAnswer: 1,
    explanation: 'The common hepatic artery divides into the proper hepatic artery and gastroduodenal artery. The right gastric artery often arises from the proper hepatic or common hepatic.'
  },
  {
    id: 'hepatic-art-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the branches of the proper hepatic artery?',
    options: ['Gastroduodenal and cystic', 'Right hepatic, left hepatic, and cystic arteries', 'Splenic and left gastric', 'Superior and inferior pancreaticoduodenal'],
    correctAnswer: 1,
    explanation: 'The proper hepatic artery divides into right and left hepatic arteries (to liver lobes) and gives off the cystic artery (usually from right hepatic) to the gallbladder.'
  },
  {
    id: 'hepatic-art-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the proper hepatic artery located in the hepatoduodenal ligament?',
    options: ['Posterior', 'Anterior and left in the free edge', 'Anterior and right', 'Posterior and right'],
    correctAnswer: 1,
    explanation: 'In the hepatoduodenal ligament (free edge of lesser omentum), the proper hepatic artery is anterior and to the left, the bile duct is anterior and right, and the portal vein is posterior.'
  },
  {
    id: 'hepatic-art-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the branches of the gastroduodenal artery?',
    options: ['Hepatic arteries', 'Superior pancreaticoduodenal and right gastroepiploic arteries', 'Splenic branches', 'Inferior mesenteric branches'],
    correctAnswer: 1,
    explanation: 'The gastroduodenal artery gives off the superior pancreaticoduodenal arteries (anterior and posterior) and the right gastroepiploic (gastro-omental) artery.'
  },
  {
    id: 'hepatic-art-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is a replaced right hepatic artery?',
    options: ['Absent right hepatic', 'Right hepatic artery arising from SMA instead of proper hepatic', 'Double right hepatic artery', 'Right hepatic from left hepatic'],
    correctAnswer: 1,
    explanation: 'A replaced right hepatic artery arises from the superior mesenteric artery (not the proper hepatic), occurring in about 15-20% of people. It courses posterior to the portal vein.'
  },
  {
    id: 'hepatic-art-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is a replaced left hepatic artery?',
    options: ['Absent left hepatic', 'Left hepatic artery arising from left gastric artery', 'Left hepatic from splenic', 'Double left hepatic'],
    correctAnswer: 1,
    explanation: 'A replaced left hepatic artery arises from the left gastric artery instead of the proper hepatic, occurring in about 10% of people. It courses in the lesser omentum.'
  },
  {
    id: 'hepatic-art-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the clinical significance of the gastroduodenal artery?',
    options: ['No significance', 'May erode in posterior duodenal ulcers causing hemorrhage', 'Supplies the heart', 'Drains the gallbladder'],
    correctAnswer: 1,
    explanation: 'The gastroduodenal artery passes posterior to the first part of the duodenum. Posterior duodenal ulcers may erode into this artery, causing massive upper GI hemorrhage.'
  },
  {
    id: 'hepatic-art-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is Pringle maneuver?',
    options: ['Liver biopsy technique', 'Compression of hepatoduodenal ligament to control hepatic hemorrhage', 'Gallbladder removal technique', 'Portal vein ligation'],
    correctAnswer: 1,
    explanation: 'The Pringle maneuver involves compressing the hepatoduodenal ligament (containing hepatic artery, portal vein, bile duct) to temporarily control hepatic bleeding during liver surgery or trauma.'
  }
];

// 4. Portal Vein
export const portalVeinQuestions: Question[] = [
  {
    id: 'portal-vein-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'How is the portal vein formed?',
    options: ['From hepatic veins', 'By union of superior mesenteric and splenic veins', 'From IVC tributaries', 'From renal veins'],
    correctAnswer: 1,
    explanation: 'The portal vein is formed posterior to the neck of the pancreas by the union of the superior mesenteric vein and splenic vein.'
  },
  {
    id: 'portal-vein-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the approximate length of the portal vein?',
    options: ['2-3 cm', '6-8 cm', '12-15 cm', '20 cm'],
    correctAnswer: 1,
    explanation: 'The portal vein is approximately 6-8 cm long, extending from its formation behind the pancreatic neck to the porta hepatis.'
  },
  {
    id: 'portal-vein-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What veins drain directly into the portal vein?',
    options: ['Hepatic veins', 'Left gastric, right gastric, cystic, and paraumbilical veins', 'Renal veins', 'Iliac veins'],
    correctAnswer: 1,
    explanation: 'The left gastric (coronary) vein, right gastric vein, cystic vein, and paraumbilical veins drain directly into the portal vein or its branches.'
  },
  {
    id: 'portal-vein-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the portal vein located in the hepatoduodenal ligament?',
    options: ['Anterior', 'Posterior to bile duct and hepatic artery', 'Lateral', 'Superior'],
    correctAnswer: 1,
    explanation: 'In the hepatoduodenal ligament, the portal vein is the most posterior structure, with the bile duct anterolateral on the right and proper hepatic artery anterolateral on the left.'
  },
  {
    id: 'portal-vein-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the major portosystemic anastomoses?',
    options: ['None exist', 'Esophageal, rectal, paraumbilical, and retroperitoneal', 'Only esophageal', 'Only rectal'],
    correctAnswer: 1,
    explanation: 'Major portosystemic anastomoses include: esophageal (left gastric-esophageal veins), rectal (superior-middle/inferior rectal), paraumbilical (paraumbilical-epigastric), and retroperitoneal (colic-lumbar/renal).'
  },
  {
    id: 'portal-vein-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is portal hypertension?',
    options: ['High systemic blood pressure', 'Elevated pressure in portal venous system (>10 mmHg)', 'Low portal pressure', 'Hepatic artery hypertension'],
    correctAnswer: 1,
    explanation: 'Portal hypertension is elevated portal venous pressure (>10 mmHg or gradient >5 mmHg). It causes splenomegaly, ascites, varices (esophageal, gastric, rectal), and caput medusae.'
  },
  {
    id: 'portal-vein-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is caput medusae?',
    options: ['Head tumor', 'Dilated paraumbilical veins radiating from umbilicus in portal hypertension', 'Abdominal hernia', 'Umbilical granuloma'],
    correctAnswer: 1,
    explanation: 'Caput medusae (head of Medusa) refers to dilated paraumbilical veins radiating from the umbilicus, seen in portal hypertension as blood shunts through paraumbilical-epigastric anastomoses.'
  },
  {
    id: 'portal-vein-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What divides the portal vein at the porta hepatis?',
    options: ['Nothing - it continues as single vessel', 'Divides into right and left branches', 'Divides into three branches', 'Divides into hepatic veins'],
    correctAnswer: 1,
    explanation: 'At the porta hepatis, the portal vein divides into right and left portal vein branches that enter the respective hepatic lobes and further subdivide to supply all liver segments.'
  }
];

// 5. Splenic Vessels
export const splenicVesselsQuestions: Question[] = [
  {
    id: 'splenic-vessel-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the course of the splenic artery?',
    options: ['Straight to spleen', 'Highly tortuous along superior border of pancreas', 'Along inferior pancreatic border', 'Through lesser omentum'],
    correctAnswer: 1,
    explanation: 'The splenic artery is notably tortuous, coursing along the superior border of the pancreas within the splenorenal ligament to reach the splenic hilum.'
  },
  {
    id: 'splenic-vessel-2',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the major branches of the splenic artery?',
    options: ['Only terminal splenic branches', 'Pancreatic, short gastric, left gastroepiploic, and terminal splenic branches', 'Hepatic branches', 'Renal branches'],
    correctAnswer: 1,
    explanation: 'Splenic artery branches include: pancreatic branches (to body/tail), short gastric arteries (to fundus), left gastroepiploic (gastro-omental) artery, and terminal branches to spleen.'
  },
  {
    id: 'splenic-vessel-3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the splenic vein course?',
    options: ['Above the pancreas', 'Posterior to the pancreatic body and tail', 'Anterior to pancreas', 'Through the pancreas'],
    correctAnswer: 1,
    explanation: 'The splenic vein courses posterior to the body and tail of the pancreas (in a groove on its posterior surface), receiving pancreatic and short gastric veins.'
  },
  {
    id: 'splenic-vessel-4',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What important vein joins the splenic vein before forming the portal vein?',
    options: ['Hepatic vein', 'Inferior mesenteric vein (usually)', 'Renal vein', 'Gonadal vein'],
    correctAnswer: 1,
    explanation: 'The inferior mesenteric vein typically joins the splenic vein just before (or at) its union with the SMV to form the portal vein. It may also join the SMV or the SMV-splenic junction.'
  },
  {
    id: 'splenic-vessel-5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the clinical significance of splenic artery aneurysm?',
    options: ['Never significant', 'Most common visceral artery aneurysm; rupture risk in pregnancy', 'Always benign', 'Causes splenomegaly only'],
    correctAnswer: 1,
    explanation: 'Splenic artery aneurysm is the most common visceral artery aneurysm. It has increased rupture risk during pregnancy due to hemodynamic changes and hormonal effects on vessel wall.'
  },
  {
    id: 'splenic-vessel-6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What causes splenic vein thrombosis?',
    options: ['Never occurs', 'Pancreatitis, pancreatic cancer, hypercoagulable states', 'Only trauma', 'Splenic infarct'],
    correctAnswer: 1,
    explanation: 'Splenic vein thrombosis can be caused by pancreatitis (due to adjacent inflammation), pancreatic cancer, and hypercoagulable states. It causes isolated gastric varices (sinistral portal hypertension).'
  },
  {
    id: 'splenic-vessel-7',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are short gastric arteries?',
    options: ['Branches of left gastric', 'Branches of splenic artery to gastric fundus (5-7 branches)', 'Right gastric branches', 'Gastroduodenal branches'],
    correctAnswer: 1,
    explanation: 'Short gastric arteries (5-7) arise from the splenic artery or its terminal branches, passing through the gastrosplenic ligament to supply the gastric fundus.'
  },
  {
    id: 'splenic-vessel-8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the left gastroepiploic artery?',
    options: ['Branch of left gastric', 'Largest branch of splenic artery supplying greater curvature', 'Branch of gastroduodenal', 'Branch of SMA'],
    correctAnswer: 1,
    explanation: 'The left gastroepiploic (gastro-omental) artery is a major branch of the splenic artery that runs along the greater curvature in the greater omentum, anastomosing with the right gastroepiploic.'
  }
];

// 6. Superior Mesenteric Vessels
export const superiorMesentericVesselsQuestions: Question[] = [
  {
    id: 'sma-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At what vertebral level does the superior mesenteric artery arise?',
    options: ['T12', 'L1', 'L2', 'L3'],
    correctAnswer: 1,
    explanation: 'The superior mesenteric artery arises from the anterior aorta at the L1 vertebral level, about 1 cm below the celiac trunk.'
  },
  {
    id: 'sma-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What embryological gut segment does the SMA supply?',
    options: ['Foregut', 'Midgut (distal duodenum to proximal 2/3 of transverse colon)', 'Hindgut', 'All segments'],
    correctAnswer: 1,
    explanation: 'The SMA supplies the midgut: distal duodenum (below major papilla), jejunum, ileum, cecum, appendix, ascending colon, and proximal 2/3 of transverse colon.'
  },
  {
    id: 'sma-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the branches of the superior mesenteric artery?',
    options: ['Only intestinal branches', 'Inferior pancreaticoduodenal, intestinal (jejunal/ileal), ileocolic, right colic, middle colic', 'Hepatic and splenic branches', 'Left colic and sigmoid'],
    correctAnswer: 1,
    explanation: 'SMA branches include: inferior pancreaticoduodenal (anastomoses with superior), jejunal and ileal arteries, ileocolic, right colic, and middle colic arteries.'
  },
  {
    id: 'sma-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What structure does the SMA cross anterior to?',
    options: ['Stomach', 'Third (horizontal) part of duodenum', 'Jejunum', 'Sigmoid colon'],
    correctAnswer: 1,
    explanation: 'The SMA crosses anterior to the third (horizontal) part of the duodenum. SMA syndrome occurs when the duodenum is compressed between the SMA and aorta.'
  },
  {
    id: 'sma-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the marginal artery (of Drummond)?',
    options: ['Branch of celiac trunk', 'Arterial anastomotic arcade along inner colonic border', 'Hepatic artery variant', 'Splenic artery branch'],
    correctAnswer: 1,
    explanation: 'The marginal artery of Drummond is a continuous arterial arcade along the mesenteric border of the colon, formed by anastomoses of ileocolic, right colic, middle colic, left colic, and sigmoid arteries.'
  },
  {
    id: 'sma-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where is the superior mesenteric vein formed?',
    options: ['In the pelvis', 'From tributaries in the right iliac fossa (ileocolic veins)', 'In the liver', 'From splenic vein'],
    correctAnswer: 1,
    explanation: 'The SMV is formed by tributaries including ileocolic, right colic, and middle colic veins. It ascends in the root of the mesentery to the right of the SMA.'
  },
  {
    id: 'sma-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is SMA syndrome (Wilkie syndrome)?',
    options: ['SMA aneurysm', 'Compression of duodenum between SMA and aorta causing obstruction', 'SMA thrombosis', 'SMA dissection'],
    correctAnswer: 1,
    explanation: 'SMA syndrome is compression of the third part of the duodenum between the SMA anteriorly and the aorta/vertebral column posteriorly, causing gastric outlet obstruction. Often seen with weight loss.'
  },
  {
    id: 'sma-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the relationship of the SMV to the SMA?',
    options: ['SMV is posterior to SMA', 'SMV lies to the right of SMA', 'SMV lies to the left of SMA', 'They have no relationship'],
    correctAnswer: 1,
    explanation: 'The SMV lies to the right of the SMA in the root of the mesentery. This relationship is important during surgical dissection and in identifying mesenteric vessel rotation.'
  }
];

// 7. Inferior Mesenteric Vessels
export const inferiorMesentericVesselsQuestions: Question[] = [
  {
    id: 'ima-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'At what vertebral level does the inferior mesenteric artery arise?',
    options: ['L1', 'L2', 'L3', 'L4'],
    correctAnswer: 2,
    explanation: 'The inferior mesenteric artery arises from the anterior aorta at the L3 vertebral level, about 3-4 cm above the aortic bifurcation.'
  },
  {
    id: 'ima-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What embryological gut segment does the IMA supply?',
    options: ['Foregut', 'Midgut', 'Hindgut (distal 1/3 transverse colon to upper rectum)', 'All segments'],
    correctAnswer: 2,
    explanation: 'The IMA supplies the hindgut: distal 1/3 of transverse colon, descending colon, sigmoid colon, and upper rectum (to the pectinate line).'
  },
  {
    id: 'ima-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What are the branches of the inferior mesenteric artery?',
    options: ['Right and middle colic', 'Left colic, sigmoid (2-4), and superior rectal arteries', 'Jejunal and ileal arteries', 'Ileocolic artery'],
    correctAnswer: 1,
    explanation: 'IMA branches include: left colic artery (to descending colon), sigmoid arteries (2-4 to sigmoid colon), and the superior rectal artery (terminal branch to rectum).'
  },
  {
    id: 'ima-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where does the IMA pass in relation to the aorta?',
    options: ['Right of aorta', 'To the left, then descends into pelvis', 'Posterior to aorta', 'Within the mesentery only'],
    correctAnswer: 1,
    explanation: 'The IMA arises from the left anterolateral aspect of the aorta and descends to the left, crossing the left common iliac vessels to become the superior rectal artery.'
  },
  {
    id: 'ima-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the arc of Riolan (meandering mesenteric artery)?',
    options: ['Normal vessel', 'Anastomotic vessel between SMA and IMA territories (middle and left colic)', 'Celiac trunk branch', 'Renal collateral'],
    correctAnswer: 1,
    explanation: 'The arc of Riolan (or meandering mesenteric artery) is a collateral vessel connecting the SMA and IMA systems, becoming prominent when one system is stenotic or occluded.'
  },
  {
    id: 'ima-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the watershed area at the splenic flexure?',
    options: ['Well-perfused area', 'Junction of SMA and IMA territories; vulnerable to ischemia', 'Area of venous drainage', 'Lymphatic drainage area'],
    correctAnswer: 1,
    explanation: 'The splenic flexure is a watershed area between SMA (middle colic) and IMA (left colic) territories. It is vulnerable to ischemia during hypoperfusion states.'
  },
  {
    id: 'ima-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Where does the inferior mesenteric vein typically drain?',
    options: ['Directly to IVC', 'Into splenic vein (or SMV or SMV-splenic junction)', 'Into left renal vein', 'Into hepatic vein'],
    correctAnswer: 1,
    explanation: 'The IMV most commonly drains into the splenic vein, but it may join the SMV or the SMV-splenic junction. It ascends to the left of the IMA and left of the duodenojejunal junction.'
  },
  {
    id: 'ima-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the clinical significance of ligating the IMA during surgery?',
    options: ['Always causes ischemia', 'Usually safe due to collateral flow from SMA via marginal artery', 'Never performed', 'Causes immediate gangrene'],
    correctAnswer: 1,
    explanation: 'IMA ligation (e.g., during aortic aneurysm repair or left colectomy) is usually safe because collateral flow from the SMA via the marginal artery maintains colonic perfusion.'
  }
];

// 8. Rectal Arteries
export const rectalArteriesQuestions: Question[] = [
  {
    id: 'rectal-art-1',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What are the three sources of arterial supply to the rectum?',
    options: ['All from IMA', 'Superior rectal (IMA), middle rectal (internal iliac), inferior rectal (internal pudendal)', 'All from internal iliac', 'Only external iliac branches'],
    correctAnswer: 1,
    explanation: 'The rectum receives triple arterial supply: superior rectal (from IMA), middle rectal (from internal iliac), and inferior rectal arteries (from internal pudendal).'
  },
  {
    id: 'rectal-art-2',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the superior rectal artery?',
    options: ['Branch of internal iliac', 'Terminal branch of IMA that divides into right and left branches', 'Branch of external iliac', 'Branch of aorta'],
    correctAnswer: 1,
    explanation: 'The superior rectal artery is the terminal continuation of the IMA. It crosses the left common iliac vessels and descends in the sigmoid mesocolon, dividing into right and left branches.'
  },
  {
    id: 'rectal-art-3',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the origin of the middle rectal artery?',
    options: ['IMA', 'Anterior division of internal iliac artery', 'External iliac', 'Superior mesenteric artery'],
    correctAnswer: 1,
    explanation: 'The middle rectal artery arises from the anterior division of the internal iliac artery (or from internal pudendal or inferior vesical). It reaches the rectum at the level of the pelvic floor.'
  },
  {
    id: 'rectal-art-4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'What is the origin of the inferior rectal artery?',
    options: ['IMA', 'Internal iliac directly', 'Internal pudendal artery', 'External pudendal'],
    correctAnswer: 2,
    explanation: 'The inferior rectal artery is a branch of the internal pudendal artery. It crosses the ischioanal fossa to supply the anal canal below the pectinate line and external anal sphincter.'
  },
  {
    id: 'rectal-art-5',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the clinical significance of rectal arterial supply?',
    options: ['No significance', 'Portosystemic anastomosis site; above/below pectinate line difference', 'Only important for hemorrhoid treatment', 'Irrelevant to surgery'],
    correctAnswer: 1,
    explanation: 'The rectal arterial (and venous) supply is significant: superior rectal drains to portal system, middle/inferior to systemic. This creates portosystemic anastomosis and explains internal vs external hemorrhoids.'
  },
  {
    id: 'rectal-art-6',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Above the pectinate line, what artery primarily supplies the rectum?',
    options: ['Inferior rectal', 'Superior and middle rectal arteries', 'External pudendal', 'Obturator artery'],
    correctAnswer: 1,
    explanation: 'Above the pectinate line, the superior rectal (main supply) and middle rectal arteries supply the rectum. This area has visceral innervation and drains to the portal system.'
  },
  {
    id: 'rectal-art-7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship between rectal arterial supply and hemorrhoids?',
    options: ['No relationship', 'Internal hemorrhoids from superior rectal territory, external from inferior rectal', 'All hemorrhoids from one source', 'Only venous system matters'],
    correctAnswer: 1,
    explanation: 'Internal hemorrhoids occur in the superior rectal (portal) territory above the pectinate line. External hemorrhoids occur in the inferior rectal (systemic) territory below the pectinate line.'
  },
  {
    id: 'rectal-art-8',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'During low anterior resection, which rectal artery is typically ligated?',
    options: ['Inferior rectal', 'Superior rectal artery at IMA origin', 'Middle rectal', 'All three arteries'],
    correctAnswer: 1,
    explanation: 'During low anterior resection for rectal cancer, the IMA (and its terminal superior rectal artery) is ligated at its origin to achieve adequate lymph node clearance while preserving middle rectal collaterals.'
  }
];

// Combine all abdominal vessels questions for easy import
export const abdominalVesselsQuestions: Question[] = [
  ...abdominalAortaQuestions,
  ...celiacTrunkQuestions,
  ...hepaticArteryQuestions,
  ...portalVeinQuestions,
  ...splenicVesselsQuestions,
  ...superiorMesentericVesselsQuestions,
  ...inferiorMesentericVesselsQuestions,
  ...rectalArteriesQuestions
];
