import type { Question } from './questions';

export const generalVertebraeQuestions: Question[] = [
  {
    id: 'gv1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which components are present in a typical vertebra?',
    question_ro: 'Care componente sunt prezente într-o vertebră tipică?',
    options: [
      'Vertebral body only',
      'Vertebral arch only',
      'Vertebral body and vertebral arch giving rise to several processes',
      'Only spinous and transverse processes',
      'Only articular processes and pedicles'
    ],
    options_ro: [
      'Doar corpul vertebral',
      'Doar arcul vertebral',
      'Corpul vertebral și arcul vertebral care dau naștere la mai multe procese',
      'Doar procesele spinoase și transversale',
      'Doar procesele articulare și pediculii'
    ],
    correctAnswer: 2,
    explanation:
      'A typical vertebra consists of a vertebral body anteriorly and a vertebral arch posteriorly, together forming the vertebral foramen and giving rise to multiple processes.[web:606][web:608][web:619]',
    explanation_ro:
      'O vertebră tipică constă dintr-un corp vertebral anterior și un arc vertebral posterior, formând împreună foramenul vertebral și dând naștere la multiple procese.[web:606][web:608][web:619]'
  },
  {
    id: 'gv2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which structures form the vertebral arch of a typical vertebra?',
    question_ro: 'Care structuri formează arcul vertebral al unei vertebre tipice?',
    options: [
      'Pedicles and laminae',
      'Transverse and spinous processes',
      'Articular processes only',
      'Body and spinous process',
      'Intervertebral discs'
    ],
    options_ro: [
      'Pediculii și laminele',
      'Procesele transversale și spinoase',
      'Doar procesele articulare',
      'Corpul și procesul spinos',
      'Discurile intervertebrale'
    ],
    correctAnswer: 0,
    explanation:
      'The vertebral arch is formed by a pair of pedicles and a pair of laminae, projecting posteriorly from the vertebral body.[web:609][web:610][web:619]',
    explanation_ro:
      'Arcul vertebral este format dintr-o pereche de pediculi și o pereche de lamine, care se proiectează posterior de la corpul vertebral.[web:609][web:610][web:619]'
  },
  {
    id: 'gv3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'How many processes typically arise from the vertebral arch of a typical vertebra and what are they?',
    options: [
      'Four processes: two transverse and two spinous',
      'Five processes: one spinous, two transverse and two articular',
      'Seven processes: one spinous, two transverse and four articular (two superior, two inferior)',
      'Eight processes: two spinous, two transverse and four articular',
      'Three processes: one spinous and two articular'
    ],
    correctAnswer: 2,
    explanation:
      'A typical vertebral arch supports seven processes: one spinous, two transverse and four articular processes (paired superior and inferior).[web:609][web:610][web:619]'
  },
  {
    id: 'gv4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which statement BEST describes the vertebral foramen and vertebral canal?',
    options: [
      'Each vertebral body alone forms the vertebral canal',
      'The vertebral foramen is bounded by the body and arch; aligned foramina form the vertebral canal for the spinal cord',
      'Only cervical vertebrae have vertebral foramina',
      'The vertebral canal is formed by intervertebral discs only',
      'The vertebral canal contains only vertebral veins'
    ],
    correctAnswer: 1,
    explanation:
      'In each vertebra, the body and vertebral arch enclose a vertebral foramen; the succession of foramina forms the vertebral canal that transmits and protects the spinal cord.[web:606][web:607][web:618]'
  },
  {
    id: 'gv5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'What forms an intervertebral foramen and what typically passes through it?',
    options: [
      'Spinous processes; vertebral arteries',
      'Laminae; spinal cord',
      'Intervertebral discs; cerebrospinal fluid',
      'Vertebral notches of adjacent pedicles; spinal nerve roots and vessels',
      'Articular processes; dorsal root ganglion only'
    ],
    correctAnswer: 3,
    explanation:
      'Superior and inferior vertebral notches of adjacent pedicles plus the intervertebral disc form the intervertebral foramen, which transmits spinal nerve roots, vessels and contains the dorsal root ganglion.[web:606][web:612][web:615]'
  },
  {
    id: 'gv6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which vertebral structures directly participate in forming zygapophyseal (facet) joints between adjacent vertebrae?',
    options: [
      'Spinous processes',
      'Transverse processes',
      'Superior and inferior articular processes with their articular facets',
      'Pedicles and laminae',
      'Vertebral bodies and intervertebral discs'
    ],
    correctAnswer: 2,
    explanation:
      'Zygapophyseal (facet) joints are synovial joints between the superior articular processes of one vertebra and the inferior articular processes of the vertebra above.[web:609][web:619]'
  },
  {
    id: 'gv7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Functionally, which statement BEST summarizes the role of the vertebral body versus the vertebral arch in a typical vertebra?',
    options: [
      'Vertebral body primarily provides muscle attachment; vertebral arch bears weight',
      'Vertebral body primarily bears weight and resists compressive forces; vertebral arch protects the spinal cord and provides attachment for muscles and ligaments',
      'Both structures have identical roles in protection only',
      'Vertebral body only transmits spinal nerves; vertebral arch only houses bone marrow',
      'Vertebral arch is the main weight-bearing structure; vertebral body is vestigial'
    ],
    correctAnswer: 1,
    explanation:
      'The vertebral body is the main weight-bearing component, whereas the vertebral arch surrounds and protects the spinal cord and serves as an attachment and lever system for muscles and ligaments.[web:606][web:609][web:619]'
  }
];

export const regionalVertebraeQuestions: Question[] = [
  {
    id: 'rv1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'How many cervical, thoracic and lumbar vertebrae are present in the typical adult spine?',
    options: [
      'C7, T10, L5',
      'C7, T12, L5',
      'C6, T12, L4',
      'C8, T12, L6',
      'C7, T11, L5'
    ],
    correctAnswer: 1,
    explanation:
      'The movable segments of the adult spine consist of 7 cervical, 12 thoracic and 5 lumbar vertebrae.[web:606][web:622][web:623]'
  },
  {
    id: 'rv2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which feature is MOST characteristic of typical cervical vertebrae (C3–C6)?',
    options: [
      'Large kidney-shaped bodies and absence of transverse foramina',
      'Presence of transverse foramina and often bifid (split) spinous processes',
      'Costal facets on the bodies for rib heads',
      'Massive spinous processes projecting horizontally',
      'Fusion of vertebral bodies into a single bone'
    ],
    correctAnswer: 1,
    explanation:
      'Typical cervical vertebrae have small bodies, large triangular vertebral foramina, transverse foramina in the transverse processes and often bifid spinous processes.[web:611][web:613][web:622]'
  },
  {
    id: 'rv3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which distinguishing features are associated with typical thoracic vertebrae?',
    options: [
      'Transverse foramina and uncinate processes',
      'Heart-shaped vertebral bodies, long downward-sloping spinous processes and costal facets for articulation with ribs',
      'Massive kidney-shaped bodies without costal facets and short blunt spinous processes',
      'Large triangular vertebral foramina without rib articulations',
      'Complete fusion into the sacrum'
    ],
    correctAnswer: 1,
    explanation:
      'Typical thoracic vertebrae (T2–T9) have heart-shaped bodies, costal facets on the bodies and transverse processes for rib articulation and long, inferiorly directed spinous processes.[web:611][web:620][web:625]'
  },
  {
    id: 'rv4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which features BEST characterize typical lumbar vertebrae?',
    options: [
      'Small, delicate bodies with transverse foramina',
      'Medium-sized bodies and costal facets for ribs',
      'Large, kidney-shaped bodies with short, thick, hatchet-shaped spinous processes and no costal facets',
      'Fused spinous processes and sacral foramina',
      'Bifid spinous processes and uncinate processes'
    ],
    correctAnswer: 2,
    explanation:
      'Lumbar vertebrae have large, kidney-shaped vertebral bodies, robust pedicles, short, broad spinous processes and lack transverse foramina or costal facets, reflecting their weight-bearing role.[web:611][web:616][web:619]'
  },
  {
    id: 'rv5',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which combination correctly matches the principal planes of facet (zygapophyseal) joint orientation in cervical, thoracic and lumbar regions?',
    options: [
      'Cervical: sagittal; thoracic: coronal; lumbar: horizontal',
      'Cervical: oblique (between horizontal and coronal); thoracic: coronal; lumbar: sagittal',
      'Cervical: coronal; thoracic: sagittal; lumbar: horizontal',
      'All regions: purely horizontal',
      'All regions: purely sagittal'
    ],
    correctAnswer: 1,
    explanation:
      'Cervical facets are oriented obliquely (allowing multi‑axial motion), thoracic facets are more coronal (favor rotation, limit flexion/extension) and lumbar facets are mainly sagittal (favor flexion/extension, limit rotation).[web:611][web:620][web:625]'
  },
  {
    id: 'rv6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Functionally, which statement BEST summarizes the overall differences between cervical, thoracic and lumbar vertebral regions?',
    options: [
      'Cervical spine prioritizes weight-bearing; thoracic prioritizes mobility; lumbar is immobile',
      'Cervical region prioritizes mobility of head and neck; thoracic region emphasizes stability and rib cage support; lumbar region emphasizes weight‑bearing and flexion–extension in the lower back',
      'All three regions have identical mobility and load-sharing roles',
      'Thoracic region allows greatest flexion–extension; cervical and lumbar primarily stabilize the rib cage',
      'Lumbar region is the most mobile and least loaded portion of the spine'
    ],
    correctAnswer: 1,
    explanation:
      'Cervical vertebrae support and move the head with high mobility; thoracic vertebrae, articulated with ribs, provide stability and protect thoracic organs; lumbar vertebrae are large and robust for weight-bearing and flexion–extension of the trunk.[web:614][web:620][web:624]'
  }
];

export const thoracicVertebraeQuestions: Question[] = [
  {
    id: 'tv1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which feature MOST distinguishes thoracic vertebrae from cervical and lumbar vertebrae?',
    options: [
      'Presence of transverse foramina',
      'Presence of costal facets for articulation with ribs',
      'Bifid spinous processes',
      'Large kidney-shaped bodies',
      'Absence of vertebral foramina'
    ],
    correctAnswer: 1,
    explanation:
      'Thoracic vertebrae uniquely possess costal facets (or demifacets) on their bodies and transverse processes for articulation with the heads and tubercles of ribs.[web:620][web:656][web:658]'
  },
  {
    id: 'tv2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which vertebrae are considered "typical" thoracic vertebrae?',
    options: [
      'T1 and T12',
      'T2 through T9',
      'T10, T11 and T12',
      'Only T1',
      'All thoracic vertebrae T1–T12'
    ],
    correctAnswer: 1,
    explanation:
      'Typical thoracic vertebrae are T2–T9; they have heart-shaped bodies, costal facets on bodies and transverse processes and long, inferiorly angled spinous processes.[web:656][web:658][web:662]'
  },
  {
    id: 'tv3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which description BEST characterizes the spinous processes of typical thoracic vertebrae?',
    options: [
      'Short and bifid like cervical spinous processes',
      'Long, slender and project sharply inferoposteriorly, often overlapping the vertebra below',
      'Broad and horizontal like lumbar spinous processes',
      'Absent in most thoracic vertebrae',
      'Completely fused to form the sacrum'
    ],
    correctAnswer: 1,
    explanation:
      'Typical thoracic spinous processes are long, slender and slope steeply inferiorly, often overlapping the next vertebra, which limits extension of the thoracic spine.[web:620][web:656][web:660]'
  },
  {
    id: 'tv4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'How do the costal facets of a typical mid-thoracic vertebra (e.g., T6) articulate with ribs?',
    options: [
      'The body has two full costal facets for the heads of two different ribs',
      'The body has superior and inferior demifacets that each articulate with half of one rib head, and the transverse process has a facet for the rib tubercle',
      'Only the transverse processes have facets; bodies have none',
      'Ribs do not articulate with thoracic vertebrae',
      'The spinous process articulates with rib shafts'
    ],
    correctAnswer: 1,
    explanation:
      'In typical thoracic vertebrae, the body has superior and inferior demifacets (half-facets) that together with adjacent vertebrae form complete facets for rib heads, and each transverse process has a facet for the corresponding rib tubercle.[web:656][web:659][web:662]'
  },
  {
    id: 'tv5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which thoracic vertebrae are considered atypical and often have different costal facet patterns?',
    options: [
      'T2–T9',
      'T1, T10, T11 and T12',
      'Only T6 and T7',
      'None; all thoracic vertebrae are identical',
      'T5–T8'
    ],
    correctAnswer: 1,
    explanation:
      'T1 often has a full superior costal facet for rib 1; T10–T12 may have only single full facets on their bodies (T10) or lack transverse costal facets (T11, T12), making them atypical.[web:656][web:661][web:663]'
  },
  {
    id: 'tv6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'What is the functional significance of the orientation of thoracic facet joints (zygapophyses)?',
    options: [
      'They allow maximal flexion and extension like lumbar facets',
      'They are oriented in a coronal (frontal) plane, which facilitates rotation and lateral bending but limits flexion and extension',
      'They are purely horizontal, allowing only rotation',
      'They are sagittal like lumbar facets',
      'They have no articular surfaces'
    ],
    correctAnswer: 1,
    explanation:
      'Thoracic zygapophyseal joints are oriented more coronally, which permits rotation and lateral flexion but restricts sagittal plane motion, contributing to thoracic stability with the rib cage.[web:620][web:656][web:660]'
  },
  {
    id: 'tv7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which thoracic vertebra often serves as a transitional vertebra with features intermediate between thoracic and lumbar?',
    options: [
      'T1',
      'T6',
      'T12',
      'T2',
      'T9'
    ],
    correctAnswer: 2,
    explanation:
      'T12 is transitional; it may lack inferior costal facets and has features resembling lumbar vertebrae, including broader transverse processes and a more horizontal spinous process.[web:661][web:663][web:664]'
  }
];

export const lumbarVertebraeQuestions: Question[] = [
  {
    id: 'lv1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which feature MOST characterizes lumbar vertebrae compared to cervical and thoracic vertebrae?',
    options: [
      'Presence of transverse foramina',
      'Presence of costal facets for ribs',
      'Large, kidney-shaped bodies and robust processes adapted for weight-bearing',
      'Bifid spinous processes',
      'Long, inferiorly angled spinous processes'
    ],
    correctAnswer: 2,
    explanation:
      'Lumbar vertebrae have massive, kidney-shaped bodies, thick pedicles and laminae, and short, broad spinous processes, reflecting their major weight-bearing role.[web:616][web:665][web:668]'
  },
  {
    id: 'lv2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'How many lumbar vertebrae are typically present in the adult spine?',
    options: [
      'Four',
      'Five',
      'Six',
      'Seven',
      'Twelve'
    ],
    correctAnswer: 1,
    explanation:
      'The typical lumbar spine consists of five lumbar vertebrae, L1 through L5.[web:606][web:665][web:668]'
  },
  {
    id: 'lv3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which description BEST characterizes the spinous processes of lumbar vertebrae?',
    options: [
      'Long, slender and inferiorly angled like thoracic spinous processes',
      'Short, bifid and posteroinferior like cervical',
      'Short, broad, quadrangular (hatchet-shaped) and project horizontally posteriorly',
      'Completely absent',
      'Fused into a continuous ridge'
    ],
    correctAnswer: 2,
    explanation:
      'Lumbar spinous processes are short, thick, quadrangular and project almost horizontally, providing large attachment areas for back muscles.[web:616][web:665][web:670]'
  },
  {
    id: 'lv4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'What is the orientation of the articular facets (zygapophyseal joints) in lumbar vertebrae and what movements does this allow?',
    options: [
      'Coronal orientation allowing primarily rotation',
      'Sagittal (or near-sagittal) orientation allowing primarily flexion and extension while limiting rotation',
      'Horizontal orientation allowing only compression',
      'Oblique orientation allowing equal motion in all planes',
      'Random orientation with no functional pattern'
    ],
    correctAnswer: 1,
    explanation:
      'Lumbar facet joints are oriented in a sagittal plane (superior facets facing posteromedially, inferior facets anterolaterally), which permits flexion and extension but restricts axial rotation.[web:616][web:665][web:671]'
  },
  {
    id: 'lv5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which structures project laterally from the lumbar vertebral arches and are homologous to ribs?',
    options: [
      'Spinous processes',
      'Articular processes',
      'Transverse processes (costal elements)',
      'Pedicles',
      'Laminae'
    ],
    correctAnswer: 2,
    explanation:
      'Lumbar transverse processes are slender, project laterally and represent fused costal elements (rib equivalents), providing attachment for muscles.[web:665][web:669][web:672]'
  },
  {
    id: 'lv6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which lumbar vertebra commonly shows transitional anatomy with the sacrum (sacralization or lumbarization)?',
    options: [
      'L1',
      'L2',
      'L3',
      'L5',
      'L4'
    ],
    correctAnswer: 3,
    explanation:
      'L5 can exhibit transitional features such as partial or complete fusion with the sacrum (sacralization), or conversely, S1 may remain separate (lumbarization), affecting biomechanics.[web:665][web:673][web:674]'
  },
  {
    id: 'lv7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'What is the clinical significance of the large vertebral bodies and short, thick pedicles of lumbar vertebrae?',
    options: [
      'They reduce the size of the vertebral canal, increasing risk of cord compression',
      'They provide maximum strength for weight-bearing but leave relatively narrow lateral recesses and intervertebral foramina, predisposing to nerve root compression with disc herniation or stenosis',
      'They eliminate the need for intervertebral discs',
      'They prevent any lumbar spine motion',
      'They have no clinical relevance'
    ],
    correctAnswer: 1,
    explanation:
      'The robust lumbar anatomy supports heavy loads, but the combination of large bodies, short thick pedicles and posteriorly directed superior articular processes creates relatively tight intervertebral foramina and lateral recesses, increasing vulnerability to nerve root impingement.[web:665][web:671][web:675]'
  }
];

export const sacrumQuestions: Question[] = [
  {
    id: 'sa1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which statement BEST describes the sacrum?',
    options: [
      'A single lumbar vertebra',
      'A triangular bone formed by fusion of five sacral vertebrae, situated between the two hip bones',
      'The terminal segment of the coccyx',
      'A movable thoracic vertebra',
      'Part of the cervical spine'
    ],
    correctAnswer: 1,
    explanation:
      'The sacrum is a large, triangular, fused bone consisting of five sacral vertebrae (S1–S5) that articulates with the iliac bones of the pelvis and forms the posterior pelvic wall.[web:676][web:677][web:680]'
  },
  {
    id: 'sa2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which surfaces of the sacrum articulate laterally with the iliac bones to form the sacroiliac joints?',
    options: [
      'Anterior (pelvic) surface',
      'Posterior surface',
      'Lateral surfaces bearing the auricular surfaces',
      'Apex of the sacrum',
      'Median sacral crest'
    ],
    correctAnswer: 2,
    explanation:
      'The lateral surfaces of the sacrum have ear-shaped auricular surfaces that articulate with the iliac bones at the sacroiliac joints.[web:676][web:679][web:682]'
  },
  {
    id: 'sa3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which foramina on the anterior (pelvic) surface of the sacrum transmit the anterior rami of the sacral spinal nerves?',
    options: [
      'Intervertebral foramina',
      'Transverse foramina',
      'Anterior (pelvic) sacral foramina',
      'Posterior sacral foramina',
      'Vertebral foramina'
    ],
    correctAnswer: 2,
    explanation:
      'Four pairs of anterior (pelvic) sacral foramina on the concave pelvic surface transmit the anterior rami of spinal nerves S1–S4.[web:676][web:678][web:681]'
  },
  {
    id: 'sa4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which ridges on the posterior surface of the sacrum represent fused remnants of vertebral processes?',
    options: [
      'Median sacral crest (fused spinous processes), intermediate crests (fused articular processes) and lateral crests (fused transverse processes)',
      'Only the median sacral crest',
      'Auricular surfaces and sacral cornua',
      'Anterior sacral foramina',
      'Promontory and ala'
    ],
    correctAnswer: 0,
    explanation:
      'The posterior sacrum displays a median sacral crest (fused spinous processes), paired intermediate crests (fused articular processes) and lateral crests (fused transverse processes).[web:676][web:679][web:683]'
  },
  {
    id: 'sa5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'What is the sacral promontory and why is it clinically important?',
    options: [
      'The apex of the sacrum articulating with the coccyx',
      'The anterior projecting upper border of S1, forming the posterior margin of the pelvic inlet and an obstetric landmark',
      'The lateral wing of the sacrum',
      'The posterior median crest',
      'The inferior end of the sacral canal'
    ],
    correctAnswer: 1,
    explanation:
      'The sacral promontory is the prominent anterior upper edge of the S1 body; it marks the posterior boundary of the pelvic inlet and is a key landmark in obstetric pelvimetry.[web:676][web:678][web:684]'
  },
  {
    id: 'sa6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which opening at the inferior end of the sacral canal is bounded by sacral cornua and transmits the fifth sacral nerve?',
    options: [
      'Anterior sacral foramen',
      'Posterior sacral foramen',
      'Sacral hiatus',
      'Intervertebral foramen',
      'Auricular surface'
    ],
    correctAnswer: 2,
    explanation:
      'The sacral hiatus is a U-shaped deficiency at the inferior end of the sacral canal, formed by incomplete fusion of the laminae of S5, bounded by sacral cornua; it transmits S5 nerve roots and is used for caudal epidural anesthesia.[web:676][web:680][web:685]'
  },
  {
    id: 'sa7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Functionally, which statement BEST summarizes the role of the sacrum in the axial skeleton and pelvis?',
    options: [
      'It provides mobility between the trunk and lower limbs',
      'It serves as the primary weight-bearing keystone transmitting weight from the axial spine to the pelvic girdle and lower limbs via the sacroiliac joints, and forms the posterior pelvic wall',
      'It is purely protective with no mechanical role',
      'It only houses bone marrow',
      'It allows rotation of the pelvis independently of the spine'
    ],
    correctAnswer: 1,
    explanation:
      'The sacrum acts as a keystone between the spine and pelvis, transmitting body weight from the vertebral column through the sacroiliac joints to the hip bones and lower limbs, and forms the rigid posterior wall of the pelvic cavity.[web:676][web:677][web:686]'
  }
];

export const atlasAxisVertebraeQuestions: Question[] = [
  {
    id: 'aa1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which statement BEST describes the atlas (C1) vertebra?',
    options: [
      'It has a large vertebral body and a tooth-like dens',
      'It lacks a vertebral body and spinous process, forming a ring with anterior and posterior arches and two lateral masses',
      'It has costal facets for rib articulation',
      'It has fused transverse processes forming the sacrum',
      'It has a long, downward sloping spinous process'
    ],
    correctAnswer: 1,
    explanation:
      'The atlas is ring‑shaped, with anterior and posterior arches and paired lateral masses; it lacks a typical vertebral body and spinous process.[web:622][web:631][web:632]'
  },
  {
    id: 'aa2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which feature is MOST characteristic of the axis (C2) vertebra?',
    options: [
      'Presence of large transverse foramina only',
      'Presence of a prominent odontoid process (dens) projecting superiorly from the body',
      'Complete absence of vertebral body',
      'Fusion with the occipital bone',
      'Costal facets for rib heads'
    ],
    correctAnswer: 1,
    explanation:
      'The hallmark of the axis is the odontoid process (dens), a strong tooth‑like projection from the body that acts as a pivot for rotation of the atlas and head.[web:634][web:637][web:640]'
  },
  {
    id: 'aa3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'What is the main movement permitted at the atlanto‑occipital joint between the atlas and occipital condyles?',
    options: [
      'Rotation of the head as in shaking the head "no"',
      'Flexion and extension of the head as in nodding "yes"',
      'Lateral flexion only',
      'Axial compression of the spine',
      'Gliding movements of the ribs'
    ],
    correctAnswer: 1,
    explanation:
      'The atlanto‑occipital joints between the superior articular facets of the atlas and the occipital condyles primarily permit flexion and extension, producing the "yes" nodding movement.[web:622][web:632][web:642]'
  },
  {
    id: 'aa4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which movement is mainly allowed at the median atlanto‑axial joint between the dens of the axis and the anterior arch of the atlas?',
    options: [
      'Nodding flexion–extension',
      'Rotation of the head to the right and left (as in saying "no")',
      'Pure lateral flexion only',
      'Only axial compression',
      'Circumduction of the head'
    ],
    correctAnswer: 1,
    explanation:
      'The dens of C2 acts as a pivot around which the atlas and skull rotate at the atlanto‑axial joints, producing the "no" head‑shaking movement.[web:634][web:640][web:642]'
  },
  {
    id: 'aa5',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which combination CORRECTLY matches a distinctive anatomical feature to the atlas (C1) rather than the axis (C2)?',
    options: [
      'Dens with anterior and posterior articular facets',
      'Large bifid spinous process',
      'Lateral masses bearing superior concave articular facets for the occipital condyles',
      'Typical vertebral body with uncinate processes',
      'Vertical tooth‑like process for rotation'
    ],
    correctAnswer: 2,
    explanation:
      'The atlas has prominent lateral masses with superior concave facets that articulate with the occipital condyles in the atlanto‑occipital joints, whereas the dens and bifid spinous process belong to the axis.[web:622][web:630][web:632]'
  },
  {
    id: 'aa6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which statement best contrasts the vertebral canals of the atlas and axis?',
    options: [
      'Both have identical canals without regional differences',
      'The atlas canal is formed by a ring lacking a body, while the axis canal is formed around a body bearing the dens and thick laminae with a bifid spinous process',
      'Only the axis has a vertebral canal',
      'The atlas canal is entirely occupied by the dens',
      'The axis canal is absent due to fusion with the skull'
    ],
    correctAnswer: 1,
    explanation:
      'In the atlas, the vertebral canal is enclosed by a delicate ring without a body, whereas in the axis it is formed by a vertebral body with dens anteriorly and robust laminae and spinous process posteriorly.[web:622][web:632][web:634]'
  }
];

export const ribsGeneralQuestions: Question[] = [
  {
    id: 'rg1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'How many pairs of ribs are typically present in the human thoracic cage?',
    options: [
      'Ten pairs',
      'Eleven pairs',
      'Twelve pairs',
      'Thirteen pairs',
      'Seven pairs'
    ],
    correctAnswer: 2,
    explanation:
      'The typical human rib cage consists of twelve pairs of ribs.[web:687][web:689][web:692]'
  },
  {
    id: 'rg2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which classification divides ribs into true, false and floating ribs?',
    options: [
      'True ribs (1–7) attach directly to sternum; false ribs (8–10) attach indirectly via costal cartilage; floating ribs (11–12) have no anterior attachment',
      'True ribs (1–5); false ribs (6–10); floating ribs (11–12)',
      'All ribs are classified as true ribs',
      'True ribs (1–10); floating ribs (11–12) only',
      'True ribs (1–12); no false or floating ribs'
    ],
    correctAnswer: 0,
    explanation:
      'Ribs 1–7 are true (vertebrosternal) ribs connecting directly to the sternum; ribs 8–10 are false (vertebrochondral) ribs connecting indirectly; ribs 11–12 are floating (vertebral) ribs with no anterior attachment.[web:687][web:690][web:693]'
  },
  {
    id: 'rg3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which parts constitute a typical rib?',
    options: [
      'Head, neck, tubercle, angle and body (shaft)',
      'Only head and shaft',
      'Manubrium, body and xiphoid process',
      'Spinous and transverse processes',
      'Pedicle and lamina'
    ],
    correctAnswer: 0,
    explanation:
      'A typical rib has a head with facets for vertebral bodies, a neck, a tubercle with a facet for the transverse process, an angle and a shaft.[web:688][web:691][web:694]'
  },
  {
    id: 'rg4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Where does the head of a typical rib articulate with the vertebral column?',
    options: [
      'Only with the spinous process of one vertebra',
      'With demifacets on the bodies of two adjacent vertebrae and the intervertebral disc',
      'With the transverse process only',
      'Directly with the sternum',
      'With the sacrum'
    ],
    correctAnswer: 1,
    explanation:
      'The head of a typical rib (e.g., ribs 2–9) has two facets separated by a crest that articulate with the superior and inferior costal demifacets of two adjacent vertebrae and the intervertebral disc.[web:688][web:691][web:695]'
  },
  {
    id: 'rg5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'What is the costal groove and what does it transmit?',
    options: [
      'A groove on the superior border of the rib for muscle attachment',
      'A shallow groove along the inferior inner border of the rib that houses the intercostal vein, artery and nerve',
      'A groove on the external surface for the serratus anterior',
      'The articulation site for the sternum',
      'The point of rib fracture'
    ],
    correctAnswer: 1,
    explanation:
      'The costal groove runs along the inferior internal aspect of the rib shaft and contains the intercostal neurovascular bundle (vein, artery, nerve from superior to inferior).[web:688][web:692][web:696]'
  },
  {
    id: 'rg6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which ribs are considered atypical and why?',
    options: [
      'Ribs 3–9, because they have two facets on the head',
      'Ribs 1, 2, 10, 11 and 12, because they have unique features such as single facets, broad flat shapes or lack of tubercles',
      'All ribs are identical',
      'Only rib 12',
      'Ribs 5–8 only'
    ],
    correctAnswer: 1,
    explanation:
      'Ribs 1 and 2 are broad and flat; rib 1 has a single facet and grooves for subclavian vessels; ribs 10–12 often have single facets, and ribs 11–12 lack neck and tubercle articulations.[web:687][web:694][web:697]'
  },
  {
    id: 'rg7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Functionally, what is the primary role of the rib cage?',
    options: [
      'To produce red blood cells exclusively',
      'To protect thoracic and upper abdominal organs and provide a flexible framework for respiration',
      'To support the weight of the upper limbs only',
      'To anchor the pelvis',
      'To form the vertebral canal'
    ],
    correctAnswer: 1,
    explanation:
      'The rib cage protects vital thoracic organs (heart, lungs) and upper abdominal organs (liver, spleen) and provides a mobile, expandable framework essential for breathing.[web:687][web:693][web:698]'
  }
];

export const sternumQuestions: Question[] = [
  {
    id: 'st1',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which three parts compose the sternum?',
    options: [
      'Manubrium, body (gladiolus) and xiphoid process',
      'Head, neck and shaft',
      'Superior, middle and inferior segments',
      'Clavicular, costal and vertebral portions',
      'Anterior, posterior and lateral parts'
    ],
    correctAnswer: 0,
    explanation:
      'The sternum consists of the manubrium superiorly, the body (gladiolus or corpus sterni) centrally and the xiphoid process inferiorly.[web:699][web:700][web:703]'
  },
  {
    id: 'st2',
    category: 'upper-lower-limbs',
    difficulty: 'easy',
    question: 'Which ribs articulate directly with the sternum via their costal cartilages?',
    options: [
      'Ribs 1–12',
      'Ribs 1–7 (true ribs)',
      'Only ribs 1 and 2',
      'Ribs 8–12',
      'No ribs articulate with the sternum'
    ],
    correctAnswer: 1,
    explanation:
      'The first seven pairs of ribs (true ribs) attach directly to the sternum through their costal cartilages; the manubrium articulates with ribs 1 and part of 2, and the body with ribs 2–7.[web:699][web:701][web:704]'
  },
  {
    id: 'st3',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'What is the jugular (suprasternal) notch and where is it located?',
    options: [
      'A depression on the xiphoid process',
      'A shallow notch on the superior border of the manubrium between the clavicular notches, palpable at the base of the anterior neck',
      'The articulation site for the first rib',
      'A foramen in the body of the sternum',
      'The inferior tip of the xiphoid'
    ],
    correctAnswer: 1,
    explanation:
      'The jugular (suprasternal) notch is the concave superior border of the manubrium, easily palpable in the midline at the root of the neck, flanked by the clavicular notches.[web:699][web:702][web:705]'
  },
  {
    id: 'st4',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'What is the sternal angle (angle of Louis) and what is its clinical significance?',
    options: [
      'The joint between the xiphoid and body of the sternum',
      'The palpable ridge at the junction of the manubrium and body of the sternum at the level of the second costal cartilage, marking important anatomical landmarks (e.g., T4–T5 vertebral level, tracheal bifurcation)',
      'The superior notch of the manubrium',
      'The inferior tip of the xiphoid process',
      'The lateral border of the sternum'
    ],
    correctAnswer: 1,
    explanation:
      'The sternal angle (Louis) is a palpable transverse ridge at the manubriosternal junction, corresponding to the second costal cartilage, T4–T5 disc level and serving as a landmark for counting ribs and approximating the carina.[web:699][web:702][web:706]'
  },
  {
    id: 'st5',
    category: 'upper-lower-limbs',
    difficulty: 'medium',
    question: 'Which structure lies immediately posterior to the manubrium and body of the sternum in the mediastinum?',
    options: [
      'Esophagus',
      'Descending aorta',
      'Heart, great vessels and thymus (or its remnant)',
      'Liver',
      'Stomach'
    ],
    correctAnswer: 2,
    explanation:
      'The sternum lies anterior to the mediastinum, protecting the heart, great vessels (aorta, pulmonary trunk, superior vena cava) and thymus.[web:699][web:703][web:707]'
  },
  {
    id: 'st6',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Which type of joint connects the manubrium to the body of the sternum?',
    options: [
      'Synovial ball-and-socket joint',
      'Primary cartilaginous joint (synchondrosis) or secondary cartilaginous joint (symphysis)',
      'Fibrous suture joint',
      'Pivot joint allowing rotation',
      'Complete bony fusion present from birth'
    ],
    correctAnswer: 1,
    explanation:
      'The manubriosternal joint is typically a secondary cartilaginous joint (symphysis) that may partially ossify with age; it allows slight movement during respiration.[web:699][web:704][web:708]'
  },
  {
    id: 'st7',
    category: 'upper-lower-limbs',
    difficulty: 'hard',
    question: 'Functionally, which statement BEST summarizes the role of the sternum in the thoracic cage?',
    options: [
      'It provides the sole attachment for all ribs and is the main weight-bearing bone of the thorax',
      'It serves as the anterior midline anchor for the costal cartilages of the true ribs, protects mediastinal structures and provides attachment for respiratory and pectoral muscles',
      'It is purely vestigial with no protective or mechanical role',
      'It articulates directly with the vertebral column posteriorly',
      'It functions only as a site for bone marrow production'
    ],
    correctAnswer: 1,
    explanation:
      'The sternum anchors the anterior rib cage via costal cartilages, protects the heart and great vessels, and provides attachment for muscles including pectoralis major, sternocleidomastoid and rectus abdominis.[web:699][web:701][web:709]'
  }
];
