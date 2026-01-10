import type { Question } from './questions';

// ============================================================================
// LIVER & BILIARY SYSTEM QUESTIONS - Internal Organs
// ============================================================================
// Topics covered:
// 1. Ficat – conformație externă și raporturi (liverExternalConfigQuestions)
// 2. Ficat – pediculul hepatic (hepaticPedicleQuestions)
// 3. Ficat – segmentație (liverSegmentationQuestions)
// 4. Vezicula biliară (gallbladderQuestions)
// 5. Căile biliare extrahepatice (extrahepaticBiliaryTractQuestions)
// 6. Splina (spleenQuestions)
// ============================================================================

// 1. Liver: External Configuration and Relations
export const liverExternalConfigQuestions: Question[] = [
  {
    id: 'lec1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which surface of the liver is in contact with the diaphragm?',
    options: [
      'Visceral surface',
      'Diaphragmatic (superior) surface',
      'Posterior surface only',
      'Inferior surface only',
      'Caudate lobe surface'
    ],
    correctAnswer: 1,
    explanation:
      'The diaphragmatic surface is the large, smooth, convex superior surface of the liver that is molded to the undersurface of the diaphragm and contacts it directly.'
  },
  {
    id: 'lec2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which anatomical landmark divides the liver into right and left anatomical lobes on the diaphragmatic surface?',
    options: [
      'Porta hepatis',
      'Falciform ligament',
      'Ligamentum teres',
      'Ligamentum venosum',
      'Caudate lobe'
    ],
    correctAnswer: 1,
    explanation:
      'The falciform ligament attaches the liver to the anterior abdominal wall and diaphragm, dividing the liver into a larger right anatomical lobe and smaller left anatomical lobe on the diaphragmatic surface.'
  },
  {
    id: 'lec3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structures form the H-shaped arrangement on the visceral surface of the liver?',
    options: [
      'Hepatic veins and portal vein',
      'Fissure for ligamentum teres, fissure for ligamentum venosum, porta hepatis and fossa for gallbladder/IVC',
      'Right and left hepatic arteries only',
      'Bile ducts and hepatic veins',
      'Coronary and triangular ligaments'
    ],
    correctAnswer: 1,
    explanation:
      'The visceral surface shows an H-pattern formed by: left sagittal fissure (ligamentum teres and venosum), right sagittal fissure (gallbladder fossa and IVC groove), connected by the transverse porta hepatis.'
  },
  {
    id: 'lec4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which organs are in contact with the visceral surface of the right lobe of the liver?',
    options: [
      'Spleen and pancreas only',
      'Right kidney, right adrenal gland, hepatic flexure of colon and duodenum',
      'Stomach and esophagus only',
      'Left kidney and jejunum',
      'Urinary bladder'
    ],
    correctAnswer: 1,
    explanation:
      'The visceral surface of the right lobe shows impressions for the right kidney (renal impression), right suprarenal gland, hepatic flexure of colon (colic impression) and first part of duodenum (duodenal impression).'
  },
  {
    id: 'lec5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which part of the liver is located between the IVC groove and the fissure for the ligamentum venosum?',
    options: [
      'Quadrate lobe',
      'Right lobe',
      'Caudate lobe',
      'Left lobe proper',
      'Papillary process'
    ],
    correctAnswer: 2,
    explanation:
      'The caudate lobe lies posterior to the porta hepatis, bounded on the right by the IVC groove and on the left by the fissure for the ligamentum venosum. It has independent portal and hepatic venous drainage.'
  },
  {
    id: 'lec6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which peritoneal reflection forms the bare area of the liver?',
    options: [
      'Falciform ligament',
      'Lesser omentum',
      'Coronary ligament with its superior and inferior layers',
      'Gastrosplenic ligament',
      'Transverse mesocolon'
    ],
    correctAnswer: 2,
    explanation:
      'The bare area is the region on the posterior diaphragmatic surface where the liver is not covered by peritoneum, bounded by the superior and inferior layers of the coronary ligament meeting at the triangular ligaments.'
  },
  {
    id: 'lec7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which lobe of the liver lies between the gallbladder fossa and the fissure for the ligamentum teres?',
    options: [
      'Caudate lobe',
      'Right lobe proper',
      'Quadrate lobe',
      'Left lobe proper',
      'Papillary process'
    ],
    correctAnswer: 2,
    explanation:
      'The quadrate lobe is located on the visceral surface between the gallbladder fossa (right) and the fissure for ligamentum teres (left), anterior to the porta hepatis.'
  },
  {
    id: 'lec8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure passes through the fissure for the ligamentum venosum?',
    options: [
      'Umbilical vein remnant',
      'Remnant of the ductus venosus',
      'Portal vein',
      'Hepatic artery proper',
      'Common bile duct'
    ],
    correctAnswer: 1,
    explanation:
      'The ligamentum venosum is the fibrous remnant of the fetal ductus venosus, which shunted oxygenated blood from the umbilical vein directly to the IVC, bypassing the liver.'
  },
  {
    id: 'lec9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which impression on the visceral surface of the left lobe marks the contact with the stomach?',
    options: [
      'Renal impression',
      'Colic impression',
      'Gastric impression',
      'Duodenal impression',
      'Esophageal impression'
    ],
    correctAnswer: 2,
    explanation:
      'The gastric impression is a large concavity on the inferior surface of the left lobe where it contacts the anterior surface of the stomach.'
  },
  {
    id: 'lec10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure directly contacts the bare area of the liver posteriorly?',
    options: [
      'Stomach',
      'Right kidney and right suprarenal gland, IVC and diaphragm',
      'Spleen',
      'Pancreas',
      'Transverse colon'
    ],
    correctAnswer: 1,
    explanation:
      'The bare area is in direct contact with the diaphragm, right suprarenal gland, upper pole of right kidney, and the IVC which lies in a deep groove at its right margin.'
  }
];

// 2. Hepatic Pedicle
export const hepaticPedicleQuestions: Question[] = [
  {
    id: 'hp1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which three main structures are contained within the hepatoduodenal ligament (portal triad)?',
    options: [
      'Hepatic veins, IVC and aorta',
      'Portal vein, hepatic artery proper and common bile duct',
      'Splenic vein, splenic artery and pancreatic duct',
      'Superior mesenteric artery, SMV and jejunal arteries',
      'Left gastric artery, right gastric artery and gastric veins'
    ],
    correctAnswer: 1,
    explanation:
      'The hepatoduodenal ligament (free edge of lesser omentum) contains the portal triad: portal vein posteriorly, hepatic artery proper on the left, and common bile duct on the right.'
  },
  {
    id: 'hp2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which structure lies most posteriorly in the hepatoduodenal ligament?',
    options: [
      'Common bile duct',
      'Hepatic artery proper',
      'Portal vein',
      'Cystic duct',
      'Hepatic lymph nodes'
    ],
    correctAnswer: 2,
    explanation:
      'The portal vein is the largest and most posterior structure in the hepatoduodenal ligament, lying behind the bile duct and hepatic artery.'
  },
  {
    id: 'hp3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'The Pringle maneuver involves clamping which structure to control hepatic hemorrhage?',
    options: [
      'Inferior vena cava',
      'Hepatoduodenal ligament (portal triad)',
      'Hepatic veins',
      'Aorta',
      'Splenic artery'
    ],
    correctAnswer: 1,
    explanation:
      'The Pringle maneuver involves compressing the hepatoduodenal ligament to occlude the portal vein and hepatic artery, reducing blood inflow to the liver during surgery or trauma.'
  },
  {
    id: 'hp4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which artery typically gives rise to the cystic artery?',
    options: [
      'Left hepatic artery',
      'Right hepatic artery',
      'Gastroduodenal artery',
      'Superior mesenteric artery',
      'Splenic artery'
    ],
    correctAnswer: 1,
    explanation:
      'The cystic artery most commonly arises from the right hepatic artery within the hepatocystic triangle (of Calot), though variations are frequent.'
  },
  {
    id: 'hp5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which veins form the portal vein?',
    options: [
      'Hepatic veins and IVC',
      'Superior mesenteric vein and splenic vein',
      'Right and left renal veins',
      'Azygos and hemiazygos veins',
      'Internal and external iliac veins'
    ],
    correctAnswer: 1,
    explanation:
      'The portal vein is formed posterior to the neck of the pancreas by the union of the superior mesenteric vein and splenic vein, with the inferior mesenteric vein usually joining the splenic vein.'
  },
  {
    id: 'hp6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which triangle is defined by the cystic duct, common hepatic duct and inferior surface of the liver?',
    options: [
      'Triangle of Petit',
      'Hepatocystic triangle (of Calot)',
      'Lumbar triangle',
      'Hesselbach triangle',
      'Femoral triangle'
    ],
    correctAnswer: 1,
    explanation:
      'The hepatocystic triangle (Calot\'s triangle) is bounded by the cystic duct inferiorly, common hepatic duct medially, and inferior surface of liver (segment V) superiorly. The cystic artery typically runs within it.'
  },
  {
    id: 'hp7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure in the portal triad is most susceptible to injury during cholecystectomy due to variant anatomy?',
    options: [
      'Portal vein',
      'Common bile duct or aberrant right hepatic duct',
      'Splenic vein',
      'Left gastric artery',
      'Inferior vena cava'
    ],
    correctAnswer: 1,
    explanation:
      'The common bile duct and aberrant hepatic ducts are at risk during cholecystectomy, particularly when there is a short cystic duct or anomalous drainage of the right hepatic duct into the cystic duct.'
  },
  {
    id: 'hp8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'What is the relationship of the common hepatic artery to the portal vein at the porta hepatis?',
    options: [
      'The hepatic artery lies posterior to the portal vein',
      'The hepatic artery proper lies anterior and to the left of the portal vein',
      'They are at the same level',
      'The hepatic artery runs within the portal vein',
      'They never come into contact'
    ],
    correctAnswer: 1,
    explanation:
      'At the porta hepatis, the hepatic artery proper typically lies anterior and to the left of the portal vein, with the bile duct anterior and to the right.'
  },
  {
    id: 'hp9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which lymph nodes are the primary drainage for the liver and are located within the hepatoduodenal ligament?',
    options: [
      'Para-aortic nodes',
      'Hepatic (hilar) lymph nodes',
      'Inguinal lymph nodes',
      'Axillary lymph nodes',
      'Mesenteric lymph nodes'
    ],
    correctAnswer: 1,
    explanation:
      'The hepatic (hilar) lymph nodes lie along the hepatic vessels within the hepatoduodenal ligament and receive lymphatic drainage from the liver, gallbladder and biliary ducts.'
  },
  {
    id: 'hp10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'A replaced right hepatic artery most commonly arises from which vessel?',
    options: [
      'Left gastric artery',
      'Superior mesenteric artery',
      'Splenic artery',
      'Gastroduodenal artery',
      'Aorta directly'
    ],
    correctAnswer: 1,
    explanation:
      'A replaced right hepatic artery (present in ~15-20% of individuals) most commonly arises from the SMA and runs posterior to the portal vein and bile duct to reach the liver.'
  }
];

// 3. Liver Segmentation
export const liverSegmentationQuestions: Question[] = [
  {
    id: 'ls1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'The Couinaud classification divides the liver into how many functionally independent segments?',
    options: [
      'Four',
      'Six',
      'Eight',
      'Ten',
      'Twelve'
    ],
    correctAnswer: 2,
    explanation:
      'The Couinaud (French) classification divides the liver into eight functionally independent segments (I-VIII), each with its own portal pedicle (portal vein, hepatic artery, bile duct) and hepatic venous drainage.'
  },
  {
    id: 'ls2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which plane divides the liver into functional right and left lobes?',
    options: [
      'Falciform ligament plane',
      'Cantlie\'s line (main portal fissure from gallbladder fossa to IVC)',
      'Horizontal plane through porta hepatis',
      'Sagittal plane through the caudate lobe',
      'Plane of the ligamentum venosum'
    ],
    correctAnswer: 1,
    explanation:
      'Cantlie\'s line (the main portal fissure or Rex-Cantlie line) runs from the gallbladder fossa to the IVC, corresponding to the course of the middle hepatic vein, dividing the liver into functional right and left lobes.'
  },
  {
    id: 'ls3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which Couinaud segment corresponds to the caudate lobe?',
    options: [
      'Segment II',
      'Segment IV',
      'Segment I',
      'Segment VIII',
      'Segment V'
    ],
    correctAnswer: 2,
    explanation:
      'Segment I is the caudate lobe, which is unique because it receives portal blood from both right and left portal branches and drains directly into the IVC via small hepatic veins.'
  },
  {
    id: 'ls4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which hepatic vein runs in the main portal fissure dividing right and left functional lobes?',
    options: [
      'Right hepatic vein',
      'Left hepatic vein',
      'Middle hepatic vein',
      'Caudate vein',
      'Accessory hepatic vein'
    ],
    correctAnswer: 2,
    explanation:
      'The middle hepatic vein runs in the main portal (Cantlie\'s) fissure, draining segments IV, V and VIII and marking the boundary between functional right and left lobes.'
  },
  {
    id: 'ls5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which segments comprise the functional left lobe of the liver?',
    options: [
      'Segments V, VI, VII, VIII',
      'Segments II, III and IV',
      'Segment I only',
      'Segments V and VI',
      'Segments VII and VIII'
    ],
    correctAnswer: 1,
    explanation:
      'The functional left lobe includes segments II, III (left lateral section) and segment IV (left medial section/quadrate lobe). Segment I (caudate) has independent drainage.'
  },
  {
    id: 'ls6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which landmark separates Couinaud segments IVa and IVb?',
    options: [
      'The falciform ligament',
      'The portal vein bifurcation plane',
      'The plane of the right hepatic vein',
      'A horizontal plane through the portal bifurcation',
      'The ligamentum venosum'
    ],
    correctAnswer: 3,
    explanation:
      'Segment IV is subdivided into IVa (superior) and IVb (inferior/quadrate lobe) by a horizontal plane at the level of the portal vein bifurcation.'
  },
  {
    id: 'ls7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which hepatic vein divides the right lobe into anterior and posterior sections?',
    options: [
      'Left hepatic vein',
      'Middle hepatic vein',
      'Right hepatic vein',
      'Caudate veins',
      'Inferior phrenic vein'
    ],
    correctAnswer: 2,
    explanation:
      'The right hepatic vein runs in the right portal fissure, dividing the right lobe into an anterior section (segments V and VIII) and posterior section (segments VI and VII).'
  },
  {
    id: 'ls8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'In the Couinaud classification, which segments form the right posterior section of the liver?',
    options: [
      'Segments V and VIII',
      'Segments VI and VII',
      'Segments II and III',
      'Segment IV only',
      'Segment I only'
    ],
    correctAnswer: 1,
    explanation:
      'The right posterior section consists of segments VI (inferior) and VII (superior), located posterior to the right hepatic vein and lateral to the right portal fissure.'
  },
  {
    id: 'ls9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Why is the caudate lobe (segment I) considered functionally independent?',
    options: [
      'It has no portal blood supply',
      'It receives portal branches from both right and left systems and drains directly to the IVC',
      'It is entirely extraperitoneal',
      'It has no bile duct drainage',
      'It only receives arterial blood'
    ],
    correctAnswer: 1,
    explanation:
      'The caudate lobe receives portal blood from both right and left portal vein branches and has unique venous drainage directly into the IVC via multiple small hepatic veins, making it functionally autonomous.'
  },
  {
    id: 'ls10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which segment is located between the falciform ligament and the main portal fissure (Cantlie\'s line)?',
    options: [
      'Segment II',
      'Segment III',
      'Segment IV',
      'Segment V',
      'Segment I'
    ],
    correctAnswer: 2,
    explanation:
      'Segment IV (the quadrate lobe region) lies between the falciform ligament/ligamentum teres (left boundary) and Cantlie\'s line (right boundary), forming the left medial section.'
  }
];

// 4. Gallbladder
export const gallbladderQuestions: Question[] = [
  {
    id: 'gb1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Where is the gallbladder located in relation to the liver?',
    options: [
      'On the diaphragmatic surface of the left lobe',
      'In a fossa on the visceral surface between the right lobe and quadrate lobe',
      'Within the caudate lobe',
      'Posterior to the porta hepatis',
      'Within the falciform ligament'
    ],
    correctAnswer: 1,
    explanation:
      'The gallbladder lies in the gallbladder fossa on the visceral surface of the liver, between the right lobe proper and the quadrate lobe, with its fundus typically projecting at the tip of the right 9th costal cartilage.'
  },
  {
    id: 'gb2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which part of the gallbladder is typically palpable at the tip of the 9th costal cartilage?',
    options: [
      'Neck',
      'Body',
      'Fundus',
      'Infundibulum',
      'Cystic duct'
    ],
    correctAnswer: 2,
    explanation:
      'The fundus is the rounded blind end of the gallbladder that projects beyond the inferior border of the liver and is usually palpable at the tip of the right 9th costal cartilage (intersection with lateral border of rectus abdominis).'
  },
  {
    id: 'gb3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which structure does the gallbladder neck continue as?',
    options: [
      'Common bile duct',
      'Common hepatic duct',
      'Cystic duct',
      'Right hepatic duct',
      'Pancreatic duct'
    ],
    correctAnswer: 2,
    explanation:
      'The neck of the gallbladder narrows and continues as the cystic duct, which joins the common hepatic duct to form the common bile duct.'
  },
  {
    id: 'gb4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which internal feature of the cystic duct slows bile flow and may trap gallstones?',
    options: [
      'Pyloric sphincter',
      'Spiral valve (of Heister)',
      'Sphincter of Oddi',
      'Ampulla of Vater',
      'Papilla of Vater'
    ],
    correctAnswer: 1,
    explanation:
      'The spiral valve of Heister consists of mucosal folds arranged in a spiral pattern within the cystic duct, helping to maintain patency and regulate bile flow; stones may become impacted here.'
  },
  {
    id: 'gb5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Hartmann\'s pouch is a dilation of which part of the gallbladder?',
    options: [
      'Fundus',
      'Body',
      'Infundibulum (neck) near the cystic duct junction',
      'Cystic duct itself',
      'Common bile duct'
    ],
    correctAnswer: 2,
    explanation:
      'Hartmann\'s pouch is an outpouching of the gallbladder infundibulum near the junction with the cystic duct, which may obscure the cystic duct and harbor impacted stones.'
  },
  {
    id: 'gb6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The cystic artery typically runs through which anatomical triangle?',
    options: [
      'Hesselbach\'s triangle',
      'Hepatocystic triangle (of Calot)',
      'Lumbar triangle',
      'Femoral triangle',
      'Submandibular triangle'
    ],
    correctAnswer: 1,
    explanation:
      'The cystic artery typically crosses through the hepatocystic (Calot\'s) triangle, bounded by the cystic duct, common hepatic duct and liver edge, and usually arises from the right hepatic artery.'
  },
  {
    id: 'gb7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which organs are in direct contact with the body of the gallbladder?',
    options: [
      'Stomach and spleen',
      'Transverse colon (hepatic flexure) and first/second parts of duodenum',
      'Left kidney and pancreas',
      'Jejunum and ileum',
      'Cecum and appendix'
    ],
    correctAnswer: 1,
    explanation:
      'The body of the gallbladder lies on the visceral surface and is in contact with the transverse colon (hepatic flexure) and the first or second part of the duodenum, which may be involved in cholecystoenteric fistula.'
  },
  {
    id: 'gb8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Venous drainage from the gallbladder primarily enters which vein?',
    options: [
      'Inferior vena cava directly',
      'Portal vein or directly into hepatic parenchyma (cystic veins)',
      'Splenic vein',
      'Right renal vein',
      'Azygos vein'
    ],
    correctAnswer: 1,
    explanation:
      'Gallbladder venous blood drains via cystic veins into the portal vein or directly into the liver parenchyma through small veins in the gallbladder bed, facilitating spread of gallbladder carcinoma to the liver.'
  },
  {
    id: 'gb9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'At which surface landmark does Murphy\'s sign elicit pain in acute cholecystitis?',
    options: [
      'McBurney\'s point',
      'Intersection of right costal margin and lateral border of rectus abdominis',
      'Umbilicus',
      'Right iliac fossa',
      'Epigastrium only'
    ],
    correctAnswer: 1,
    explanation:
      'Murphy\'s sign is elicited by palpation at the tip of the right 9th costal cartilage (intersection with rectus abdominis) causing inspiratory arrest due to pain when the inflamed gallbladder descends and contacts the examining fingers.'
  },
  {
    id: 'gb10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which congenital anomaly results in the gallbladder being completely surrounded by hepatic tissue?',
    options: [
      'Floating gallbladder',
      'Intrahepatic gallbladder',
      'Phrygian cap',
      'Duplicated gallbladder',
      'Agenesis of gallbladder'
    ],
    correctAnswer: 1,
    explanation:
      'An intrahepatic gallbladder is a rare anomaly where the gallbladder is completely embedded within the liver parenchyma rather than lying in the gallbladder fossa, complicating cholecystectomy.'
  }
];

// 5. Extrahepatic Biliary Tract
export const extrahepaticBiliaryTractQuestions: Question[] = [
  {
    id: 'ebt1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which duct is formed by the union of the right and left hepatic ducts?',
    options: [
      'Cystic duct',
      'Common bile duct',
      'Common hepatic duct',
      'Pancreatic duct',
      'Accessory pancreatic duct'
    ],
    correctAnswer: 2,
    explanation:
      'The right and left hepatic ducts unite at the porta hepatis to form the common hepatic duct, which then joins the cystic duct to become the common bile duct.'
  },
  {
    id: 'ebt2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which duct drains bile from the gallbladder into the common bile duct?',
    options: [
      'Right hepatic duct',
      'Left hepatic duct',
      'Cystic duct',
      'Main pancreatic duct',
      'Accessory hepatic duct'
    ],
    correctAnswer: 2,
    explanation:
      'The cystic duct connects the gallbladder to the biliary system, joining the common hepatic duct at a variable level to form the common bile duct.'
  },
  {
    id: 'ebt3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Through which part of the pancreas does the common bile duct typically pass?',
    options: [
      'Tail of pancreas',
      'Body of pancreas',
      'Head of pancreas',
      'Uncinate process',
      'Neck of pancreas'
    ],
    correctAnswer: 2,
    explanation:
      'The common bile duct passes through (or in a groove on) the posterior aspect of the head of the pancreas before joining the main pancreatic duct at the ampulla of Vater.'
  },
  {
    id: 'ebt4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Where do the common bile duct and main pancreatic duct typically open?',
    options: [
      'First part of duodenum',
      'Second part of duodenum at the major duodenal papilla',
      'Third part of duodenum',
      'Jejunum',
      'Stomach pylorus'
    ],
    correctAnswer: 1,
    explanation:
      'The common bile duct and main pancreatic duct typically join and open into the second (descending) part of the duodenum at the major duodenal papilla (of Vater) on its posteromedial wall.'
  },
  {
    id: 'ebt5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which sphincter controls the flow of bile and pancreatic juice into the duodenum?',
    options: [
      'Pyloric sphincter',
      'Sphincter of Oddi',
      'Lower esophageal sphincter',
      'Ileocecal sphincter',
      'Sphincter of Boyden'
    ],
    correctAnswer: 1,
    explanation:
      'The sphincter of Oddi is a complex muscular sphincter surrounding the terminal common bile duct, pancreatic duct and their common channel (ampulla), controlling flow into the duodenum.'
  },
  {
    id: 'ebt6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure may be compressed by a stone in the distal common bile duct, causing pancreatitis?',
    options: [
      'Hepatic artery',
      'Portal vein',
      'Main pancreatic duct at the ampulla',
      'Gastroduodenal artery',
      'Superior mesenteric artery'
    ],
    correctAnswer: 2,
    explanation:
      'A stone impacted at the ampulla of Vater can obstruct both the common bile duct and the main pancreatic duct (when they share a common channel), causing biliary pancreatitis.'
  },
  {
    id: 'ebt7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which vessel lies immediately posterior to the supraduodenal part of the common bile duct?',
    options: [
      'Hepatic artery proper',
      'Portal vein',
      'Splenic vein',
      'Left gastric arein',
      'Right renal vein'
    ],
    correctAnswer: 1,
    explanation:
      'In the hepatoduodenal ligament, the supraduodenal common bile duct lies anterior and to the right, with the portal vein lying posterior to both the duct and the hepatic artery.'
  },
  {
    id: 'ebt8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'The ampulla of Vater is formed by the union of which structures?',
    options: [
      'Right and left hepatic ducts',
      'Common bile duct and main pancreatic duct',
      'Cystic duct and common hepatic duct',
      'Accessory pancreatic duct and duodenum',
      'Portal vein and hepatic artery'
    ],
    correctAnswer: 1,
    explanation:
      'The ampulla of Vater (hepatopancreatic ampulla) is formed by the union of the terminal common bile duct and main pancreatic duct before they open together at the major papilla.'
  },
  {
    id: 'ebt9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which anatomical variant involves separate openings of the common bile duct and pancreatic duct into the duodenum?',
    options: [
      'Choledochal cyst',
      'Absence of common channel (separate papillae)',
      'Biliary atresia',
      'Pancreas divisum',
      'Annular pancreas'
    ],
    correctAnswer: 1,
    explanation:
      'In some individuals, the common bile duct and pancreatic duct open separately into the duodenum without forming a common channel, which may reduce the risk of gallstone pancreatitis.'
  },
  {
    id: 'ebt10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which structure opens at the minor duodenal papilla, located about 2 cm proximal to the major papilla?',
    options: [
      'Common bile duct',
      'Main pancreatic duct (of Wirsung)',
      'Accessory pancreatic duct (of Santorini)',
      'Cystic duct',
      'Common hepatic duct'
    ],
    correctAnswer: 2,
    explanation:
      'The accessory pancreatic duct (of Santorini) opens at the minor duodenal papilla, approximately 2 cm proximal and slightly anterior to the major papilla; it may be the main drainage in pancreas divisum.'
  }
];

// 6. Spleen
export const spleenQuestions: Question[] = [
  {
    id: 'spl1',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'In which region of the abdomen is the spleen located?',
    options: [
      'Right hypochondrium',
      'Epigastrium',
      'Left hypochondrium',
      'Right iliac fossa',
      'Hypogastrium'
    ],
    correctAnswer: 2,
    explanation:
      'The spleen is located in the left hypochondrium, protected by the 9th-11th ribs, lying between the stomach and the diaphragm.'
  },
  {
    id: 'spl2',
    category: 'internal-organs',
    difficulty: 'easy',
    question: 'Which ligament connects the spleen to the greater curvature of the stomach?',
    options: [
      'Splenorenal ligament',
      'Gastrosplenic (gastrolienal) ligament',
      'Hepatogastric ligament',
      'Phrenicocolic ligament',
      'Falciform ligament'
    ],
    correctAnswer: 1,
    explanation:
      'The gastrosplenic ligament extends from the hilum of the spleen to the greater curvature of the stomach, transmitting the short gastric and left gastroepiploic vessels.'
  },
  {
    id: 'spl3',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which vessels are transmitted through the splenorenal (lienorenal) ligament?',
    options: [
      'Short gastric vessels',
      'Splenic artery and vein, and tail of pancreas',
      'Left gastric vessels',
      'Gastroepiploic vessels only',
      'Portal vein'
    ],
    correctAnswer: 1,
    explanation:
      'The splenorenal ligament connects the spleen to the left kidney and transmits the splenic vessels and the tail of the pancreas to the splenic hilum.'
  },
  {
    id: 'spl4',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which surface of the spleen is related to the left kidney?',
    options: [
      'Gastric surface',
      'Diaphragmatic surface',
      'Renal surface',
      'Colic surface',
      'Superior border'
    ],
    correctAnswer: 2,
    explanation:
      'The renal surface (impression) is a concave area on the visceral surface of the spleen that lies in contact with the upper pole of the left kidney and sometimes the left adrenal gland.'
  },
  {
    id: 'spl5',
    category: 'internal-organs',
    difficulty: 'medium',
    question: 'Which ribs overlie and protect the spleen?',
    options: [
      '5th to 7th ribs',
      '7th to 9th ribs',
      '9th to 11th ribs',
      '11th to 12th ribs',
      '1st to 3rd ribs'
    ],
    correctAnswer: 2,
    explanation:
      'The spleen lies posterior to the midaxillary line, protected by the 9th, 10th and 11th ribs on the left side, making it vulnerable to injury in lower left rib fractures.'
  },
  {
    id: 'spl6',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which peritoneal fold supports the spleen inferiorly by attaching to the splenic flexure of the colon?',
    options: [
      'Gastrosplenic ligament',
      'Splenorenal ligament',
      'Phrenicocolic ligament',
      'Transverse mesocolon',
      'Gastrocolic ligament'
    ],
    correctAnswer: 2,
    explanation:
      'The phrenicocolic ligament extends from the diaphragm to the splenic flexure of the colon and supports the spleen inferiorly, forming the "splenic shelf" on which the spleen rests.'
  },
  {
    id: 'spl7',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which characteristic of the spleen border helps distinguish it from an enlarged left kidney on palpation?',
    options: [
      'Smooth rounded border',
      'Notched anterior (superior) border',
      'Sharp posterior border',
      'Irregular hilum',
      'Soft consistency'
    ],
    correctAnswer: 1,
    explanation:
      'The spleen typically has a notched anterior (superior) border, and when enlarged, these notches may be palpable; the left kidney is smooth and ballotable.'
  },
  {
    id: 'spl8',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which impression on the visceral surface of the spleen marks contact with the splenic flexure of the colon?',
    options: [
      'Gastric impression',
      'Renal impression',
      'Colic impression',
      'Pancreatic impression',
      'Adrenal impression'
    ],
    correctAnswer: 2,
    explanation:
      'The colic impression is located on the lower part of the visceral surface of the spleen, where it contacts the splenic (left) flexure of the colon.'
  },
  {
    id: 'spl9',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'In which direction does an enlarged spleen typically extend?',
    options: [
      'Posteriorly toward the vertebral column',
      'Superiorly toward the diaphragm',
      'Inferomedially toward the umbilicus',
      'Laterally toward the flank',
      'Toward the right hypochondrium'
    ],
    correctAnswer: 2,
    explanation:
      'The spleen enlarges along its long axis, which is directed inferomedially toward the umbilicus. Massive splenomegaly may extend into the right lower quadrant.'
  },
  {
    id: 'spl10',
    category: 'internal-organs',
    difficulty: 'hard',
    question: 'Which arterial supply pattern makes the spleen susceptible to infarction if a branch is occluded?',
    options: [
      'Rich collateral anastomoses',
      'Segmental (end-arterial) distribution from trabecular arteries',
      'Dual arterial supply from celiac and SMA',
      'Extensive capsular plexus',
      'Direct supply from aorta'
    ],
    correctAnswer: 1,
    explanation:
      'The spleen has a segmental arterial supply with minimal collateral circulation; the splenic artery divides into superior and inferior branches that further divide into trabecular arteries that are essentially end-arteries, making infarction common when occluded.'
  }
];

// Combine all liver/biliary questions for easy import
export const liverBiliaryQuestions: Question[] = [
  ...liverExternalConfigQuestions,
  ...hepaticPedicleQuestions,
  ...liverSegmentationQuestions,
  ...gallbladderQuestions,
  ...extrahepaticBiliaryTractQuestions,
  ...spleenQuestions
];
