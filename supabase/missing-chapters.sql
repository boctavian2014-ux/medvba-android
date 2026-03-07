BEGIN;
-- CAPITOL: Introducere în anatomie și fiziologie
-- ID: intro-anatomy
-- ============================================

-- Set 1 (Easy)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro1',
  'med-admission-barrons',
  'easy',
  'Which of the following best defines anatomy?',
  'Care dintre următoarele definește cel mai bine anatomia?',
  '["The study of how body structures function and interact","The study of the structure and form of body parts and their relationships","The study of disease processes and their treatment","The study of chemical reactions within cells","The study of genetic inheritance"]'::jsonb,
  '["Studiul modului în care structurile corpului funcționează și interacționează","Studiul structurii și formei părților corpului și al relațiilor dintre ele","Studiul proceselor patologice și al tratamentului lor","Studiul reacțiilor chimice din celule","Studiul moștenirii genetice"]'::jsonb,
  1,
  'Anatomy is the branch of science concerned with the structure, shape, and organization of body parts and their spatial relationships.',
  'Anatomia este ramura științei care se ocupă cu structura, forma și organizarea părților corpului și relațiile lor spațiale.',
  'intro-anatomy',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro2',
  'med-admission-barrons',
  'easy',
  'Which term describes the study of how body structures perform their functions?',
  'Care termen descrie studiul modului în care structurile corpului își îndeplinesc funcțiile?',
  '["Anatomy","Physiology","Pathology","Histology","Biochemistry"]'::jsonb,
  '["Anatomie","Fiziologie","Patologie","Histologie","Biochimie"]'::jsonb,
  1,
  'Physiology is the study of the functions of living organisms and their parts, including mechanisms and processes.',
  'Fiziologia este studiul funcțiilor organismelor vii și al părților lor, inclusiv mecanismele și procesele implicate.',
  'intro-anatomy',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro3',
  'med-admission-barrons',
  'easy',
  'Which directional term means "toward the front" or "in front of"?',
  'Care termen direcțional înseamnă „spre față” sau „în față”?',
  '["Posterior","Dorsal","Anterior","Inferior","Medial"]'::jsonb,
  '["Posterior","Dorsal","Anterior","Inferior","Medial"]'::jsonb,
  2,
  'Anterior (or ventral) refers to the front of the body or a structure; posterior (dorsal) refers to the back.',
  'Anterior (sau ventral) se referă la fața din față a corpului sau a unei structuri; posterior (dorsal) la spate.',
  'intro-anatomy',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro4',
  'med-admission-barrons',
  'medium',
  'Which plane divides the body into superior and inferior portions?',
  'Care plan împarte corpul în porțiuni superioare și inferioare?',
  '["Sagittal plane","Frontal (coronal) plane","Transverse (horizontal) plane","Midsagittal plane","Oblique plane"]'::jsonb,
  '["Planul sagital","Planul frontal (coronal)","Planul transversal (orizontal)","Planul midsagital","Planul oblic"]'::jsonb,
  2,
  'The transverse (horizontal) plane runs parallel to the ground and divides the body into superior (upper) and inferior (lower) parts.',
  'Planul transversal (orizontal) este paralel cu solul și împarte corpul în părți superioare și inferioare.',
  'intro-anatomy',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro5',
  'med-admission-barrons',
  'medium',
  'Which level of organization is more complex than tissues but less complex than organ systems?',
  'Care nivel de organizare este mai complex decât țesuturile dar mai puțin complex decât sistemele de organe?',
  '["Cell","Organ","Molecule","Organism","Organelle"]'::jsonb,
  '["Celulă","Organ","Moleculă","Organism","Organelă"]'::jsonb,
  1,
  'The organizational hierarchy is: cell → tissue → organ → organ system → organism. An organ is composed of multiple tissue types.',
  'Ierarhia organizării este: celulă → țesut → organ → sistem de organe → organism. Un organ este format din mai multe tipuri de țesut.',
  'intro-anatomy',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro6',
  'med-admission-barrons',
  'medium',
  'Homeostasis refers primarily to which of the following?',
  'Homeostazia se referă în principal la care dintre următoarele?',
  '["Rapid growth of tissues during development","Maintenance of a relatively stable internal environment despite external changes","The breakdown of nutrients to release energy","Voluntary control of skeletal muscle","Production of hormones by endocrine glands"]'::jsonb,
  '["Creșterea rapidă a țesuturilor în timpul dezvoltării","Menținerea unui mediu intern relativ constant în ciuda schimbărilor externe","Degradarea nutrienților pentru eliberarea energiei","Controlul voluntar al mușchiului scheletic","Producerea hormonilor de către glandele endocrine"]'::jsonb,
  1,
  'Homeostasis is the tendency of the body to maintain a stable internal environment (e.g., temperature, pH, glucose) through regulatory mechanisms.',
  'Homeostazia este tendința organismului de a menține un mediu intern stabil (ex. temperatură, pH, glucoză) prin mecanisme de reglare.',
  'intro-anatomy',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro7',
  'med-admission-barrons',
  'medium',
  'Which body cavity contains the heart and lungs?',
  'Care cavitate a corpului conține inima și plămânii?',
  '["Abdominal cavity","Cranial cavity","Thoracic cavity","Pelvic cavity","Spinal cavity"]'::jsonb,
  '["Cavitatea abdominală","Cavitatea cranială","Cavitatea toracică","Cavitatea pelvică","Cavitatea spinală"]'::jsonb,
  2,
  'The thoracic cavity is enclosed by the ribs and sternum and contains the heart, lungs, and associated structures.',
  'Cavitatea toracică este delimitată de coaste și stern și conține inima, plămânii și structurile asociate.',
  'intro-anatomy',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro8',
  'med-admission-barrons',
  'hard',
  'Which feedback mechanism typically restores a physiological variable toward its set point after a disturbance?',
  'Care mecanism de feedback readuce de obicei o variabilă fiziologică spre valoarea ei de referință după o perturbare?',
  '["Positive feedback only","Negative feedback","Feed-forward control only","No feedback is involved","Both positive and negative feedback equally"]'::jsonb,
  '["Doar feedback-ul pozitiv","Feedback-ul negativ","Doar controlul feed-forward","Nu intervine niciun feedback","Atât feedback pozitiv cât și negativ în mod egal"]'::jsonb,
  1,
  'Negative feedback opposes a change in a variable and restores it toward the set point (e.g., thermoregulation, blood glucose regulation).',
  'Feedback-ul negativ se opune unei modificări a variabilei și o readuce spre valoarea de referință (ex. termoreglare, reglarea glicemiei).',
  'intro-anatomy',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro9',
  'med-admission-barrons',
  'hard',
  'In which body cavity would you find the liver and stomach?',
  'În care cavitate a corpului se găsesc ficatul și stomacul?',
  '["Thoracic cavity","Cranial cavity","Abdominopelvic cavity","Spinal cavity","Pleural cavity"]'::jsonb,
  '["Cavitatea toracică","Cavitatea cranială","Cavitatea abdominopelviană","Cavitatea spinală","Cavitatea pleurală"]'::jsonb,
  2,
  'The abdominopelvic cavity includes the abdominal cavity (containing liver, stomach, intestines, etc.) and the pelvic cavity.',
  'Cavitatea abdominopelviană include cavitatea abdominală (ficat, stomac, intestin etc.) și cavitatea pelvică.',
  'intro-anatomy',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro10',
  'med-admission-barrons',
  'hard',
  'Which statement about positive feedback is correct?',
  'Care afirmație despre feedback-ul pozitiv este corectă?',
  '["It always promotes stability of the internal environment","It amplifies a change and drives a process to completion (e.g., childbirth, blood clotting)","It is more common than negative feedback in homeostasis","It prevents any deviation from the set point","It is the main mechanism for temperature regulation"]'::jsonb,
  '["Promovează întotdeauna stabilitatea mediului intern","Amplifică o schimbare și duce un proces la finalizare (ex. naștere, coagularea sângelui)","Este mai frecvent decât feedback-ul negativ în homeostazie","Previne orice abatere de la valoarea de referință","Este mecanismul principal de reglare a temperaturii"]'::jsonb,
  1,
  'Positive feedback reinforces a change and accelerates a process until it reaches completion; it is less common than negative feedback in homeostasis.',
  'Feedback-ul pozitiv amplifică o schimbare și accelerează un proces până la finalizare; este mai puțin frecvent decât feedback-ul negativ în homeostazie.',
  'intro-anatomy',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 2 (Easy)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro11',
  'med-admission-barrons',
  'easy',
  'What is the correct order of structural organization from simplest to most complex?',
  'Care este ordinea corectă a organizării structurale de la cea mai simplă la cea mai complexă?',
  '["Organ → tissue → cell → organ system → organism","Cell → tissue → organ → organ system → organism","Tissue → cell → organ → organism → organ system","Organism → organ system → organ → tissue → cell","Organ system → organ → cell → tissue → organism"]'::jsonb,
  '["Organ → țesut → celulă → sistem de organe → organism","Celulă → țesut → organ → sistem de organe → organism","Țesut → celulă → organ → organism → sistem de organe","Organism → sistem de organe → organ → țesut → celulă","Sistem de organe → organ → celulă → țesut → organism"]'::jsonb,
  1,
  'The hierarchy from simplest to most complex is: cell → tissue → organ → organ system → organism.',
  'Ierarhia de la simplu la complex este: celulă → țesut → organ → sistem de organe → organism.',
  'intro-anatomy',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro12',
  'med-admission-barrons',
  'easy',
  'Which directional term means "toward the head"?',
  'Care termen direcțional înseamnă „spre cap"?',
  '["Caudal","Inferior","Superior (cranial)","Posterior","Ventral"]'::jsonb,
  '["Caudal","Inferior","Superior (cranial)","Posterior","Ventral"]'::jsonb,
  2,
  'Superior (or cranial) means toward the head or upper part of the body.',
  'Superior (sau cranial) înseamnă spre cap sau partea superioară a corpului.',
  'intro-anatomy',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro13',
  'med-admission-barrons',
  'easy',
  'The anatomical position is characterized by all of the following EXCEPT:',
  'Poziția anatomică este caracterizată de toate următoarele CU EXCEPȚIA:',
  '["Standing erect","Feet together or slightly apart","Palms facing forward","Arms crossed over the chest","Eyes looking forward"]'::jsonb,
  '["Stând drept","Picioarele împreună sau ușor depărtate","Palmele orientate înainte","Brațele încrucișate pe piept","Ochii privind înainte"]'::jsonb,
  3,
  'In the anatomical position, the arms hang at the sides with palms facing forward, not crossed over the chest.',
  'În poziția anatomică, brațele atârnă pe lângă corp cu palmele orientate înainte, nu încrucișate pe piept.',
  'intro-anatomy',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro14',
  'med-admission-barrons',
  'easy',
  'The term "distal" refers to a structure that is:',
  'Termenul „distal" se referă la o structură care este:',
  '["Closer to the midline of the body","Farther from the point of attachment to the trunk","Closer to the surface of the body","Toward the back of the body","Closer to the point of attachment to the trunk"]'::jsonb,
  '["Mai aproape de linia mediană a corpului","Mai departe de punctul de atașare la trunchi","Mai aproape de suprafața corpului","Spre spatele corpului","Mai aproape de punctul de atașare la trunchi"]'::jsonb,
  1,
  'Distal means farther from the point of attachment to the trunk or from the origin of a structure.',
  'Distal înseamnă mai departe de punctul de atașare la trunchi sau de originea unei structuri.',
  'intro-anatomy',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro15',
  'med-admission-barrons',
  'easy',
  'Which body cavity is located within the skull and protects the brain?',
  'Care cavitate a corpului este situată în craniu și protejează creierul?',
  '["Thoracic cavity","Abdominal cavity","Cranial cavity","Pelvic cavity","Pleural cavity"]'::jsonb,
  '["Cavitatea toracică","Cavitatea abdominală","Cavitatea craniană","Cavitatea pelvică","Cavitatea pleurală"]'::jsonb,
  2,
  'The cranial cavity is formed by the bones of the skull and houses and protects the brain.',
  'Cavitatea craniană este formată de oasele craniului și adăpostește și protejează creierul.',
  'intro-anatomy',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro16',
  'med-admission-barrons',
  'easy',
  'Which plane divides the body into right and left halves?',
  'Care plan împarte corpul în jumătăți dreaptă și stângă?',
  '["Frontal (coronal) plane","Transverse plane","Sagittal plane","Oblique plane","Horizontal plane"]'::jsonb,
  '["Planul frontal (coronal)","Planul transversal","Planul sagital","Planul oblic","Planul orizontal"]'::jsonb,
  2,
  'The sagittal plane runs vertically and divides the body into right and left portions. A midsagittal plane divides into equal halves.',
  'Planul sagital este vertical și împarte corpul în porțiuni dreaptă și stângă. Planul midsagital împarte în jumătăți egale.',
  'intro-anatomy',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro17',
  'med-admission-barrons',
  'easy',
  'The term "anterior" is synonymous with which other directional term?',
  'Termenul „anterior" este sinonim cu care alt termen direcțional?',
  '["Dorsal","Posterior","Ventral","Caudal","Superior"]'::jsonb,
  '["Dorsal","Posterior","Ventral","Caudal","Superior"]'::jsonb,
  2,
  'Anterior and ventral both mean toward the front of the body (in humans in the anatomical position).',
  'Anterior și ventral înseamnă ambele spre partea din față a corpului (la om în poziția anatomică).',
  'intro-anatomy',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro18',
  'med-admission-barrons',
  'easy',
  'How many organ systems are typically recognized in the human body?',
  'Câte sisteme de organe sunt recunoscute în mod tipic în corpul uman?',
  '["5","8","11","15","20"]'::jsonb,
  '["5","8","11","15","20"]'::jsonb,
  2,
  'The human body has 11 organ systems: integumentary, skeletal, muscular, nervous, endocrine, cardiovascular, lymphatic, respiratory, digestive, urinary, and reproductive.',
  'Corpul uman are 11 sisteme de organe: tegumentar, scheletic, muscular, nervos, endocrin, cardiovascular, limfatic, respirator, digestiv, urinar și reproducător.',
  'intro-anatomy',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro19',
  'med-admission-barrons',
  'easy',
  'Which term describes a position closer to the midline of the body?',
  'Care termen descrie o poziție mai aproape de linia mediană a corpului?',
  '["Lateral","Distal","Medial","Proximal","Superficial"]'::jsonb,
  '["Lateral","Distal","Medial","Proximal","Superficial"]'::jsonb,
  2,
  'Medial means toward or at the midline of the body.',
  'Medial înseamnă spre sau la linia mediană a corpului.',
  'intro-anatomy',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro20',
  'med-admission-barrons',
  'easy',
  'The dorsal body cavity includes which two subdivisions?',
  'Cavitatea dorsală a corpului include care două subdiviziuni?',
  '["Thoracic and abdominal","Cranial and vertebral (spinal)","Pleural and pericardial","Abdominal and pelvic","Oral and nasal"]'::jsonb,
  '["Toracică și abdominală","Craniană și vertebrală (spinală)","Pleurală și pericardică","Abdominală și pelvică","Orală și nazală"]'::jsonb,
  1,
  'The dorsal body cavity is divided into the cranial cavity (containing the brain) and the vertebral (spinal) cavity (containing the spinal cord).',
  'Cavitatea dorsală este împărțită în cavitatea craniană (care conține creierul) și cavitatea vertebrală (spinală) (care conține măduva spinării).',
  'intro-anatomy',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 3 (Easy)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro21',
  'med-admission-barrons',
  'easy',
  'Which abdominopelvic region is located directly in the center?',
  'Care regiune abdominopelvică este situată direct în centru?',
  '["Epigastric region","Umbilical region","Hypogastric region","Right lumbar region","Left iliac region"]'::jsonb,
  '["Regiunea epigastrică","Regiunea ombilicală","Regiunea hipogastrică","Regiunea lombară dreaptă","Regiunea iliacă stângă"]'::jsonb,
  1,
  'The umbilical region is the central region of the nine abdominopelvic regions, surrounding the navel.',
  'Regiunea ombilicală este regiunea centrală dintre cele nouă regiuni abdominopelvice, înconjurând buricul.',
  'intro-anatomy',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro22',
  'med-admission-barrons',
  'easy',
  'The term "superficial" means:',
  'Termenul „superficial" înseamnă:',
  '["Away from the surface of the body","Toward or at the body surface","Toward the midline","Farther from the trunk","Toward the head"]'::jsonb,
  '["Departe de suprafața corpului","Spre sau la suprafața corpului","Spre linia mediană","Mai departe de trunchi","Spre cap"]'::jsonb,
  1,
  'Superficial means toward or at the body surface, as opposed to deep which means away from the surface.',
  'Superficial înseamnă spre sau la suprafața corpului, spre deosebire de profund care înseamnă departe de suprafață.',
  'intro-anatomy',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro23',
  'med-admission-barrons',
  'easy',
  'The frontal (coronal) plane divides the body into:',
  'Planul frontal (coronal) împarte corpul în:',
  '["Superior and inferior portions","Right and left portions","Anterior and posterior portions","Proximal and distal portions","Medial and lateral portions"]'::jsonb,
  '["Porțiuni superioară și inferioară","Porțiuni dreaptă și stângă","Porțiuni anterioară și posterioară","Porțiuni proximală și distală","Porțiuni medială și laterală"]'::jsonb,
  2,
  'The frontal (coronal) plane runs vertically from side to side and divides the body into anterior (front) and posterior (back) portions.',
  'Planul frontal (coronal) este vertical, de la o parte la alta, și împarte corpul în porțiuni anterioară (față) și posterioară (spate).',
  'intro-anatomy',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro24',
  'med-admission-barrons',
  'easy',
  'Which system is responsible for body movement and maintaining posture?',
  'Care sistem este responsabil pentru mișcarea corpului și menținerea posturii?',
  '["Nervous system","Endocrine system","Muscular system","Integumentary system","Lymphatic system"]'::jsonb,
  '["Sistemul nervos","Sistemul endocrin","Sistemul muscular","Sistemul tegumentar","Sistemul limfatic"]'::jsonb,
  2,
  'The muscular system produces movement, maintains posture, and generates heat.',
  'Sistemul muscular produce mișcare, menține postura și generează căldură.',
  'intro-anatomy',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro25',
  'med-admission-barrons',
  'easy',
  'The pericardial cavity surrounds which organ?',
  'Cavitatea pericardică înconjoară care organ?',
  '["Lungs","Brain","Heart","Liver","Stomach"]'::jsonb,
  '["Plămânii","Creierul","Inima","Ficatul","Stomacul"]'::jsonb,
  2,
  'The pericardial cavity is a fluid-filled space surrounding the heart within the pericardium.',
  'Cavitatea pericardică este un spațiu plin cu lichid care înconjoară inima în interiorul pericardului.',
  'intro-anatomy',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro26',
  'med-admission-barrons',
  'easy',
  'Which term is the opposite of "proximal"?',
  'Care termen este opusul lui „proximal"?',
  '["Superior","Medial","Distal","Anterior","Deep"]'::jsonb,
  '["Superior","Medial","Distal","Anterior","Profund"]'::jsonb,
  2,
  'Proximal means closer to the trunk/origin; distal means farther from the trunk/origin. They are opposites.',
  'Proximal înseamnă mai aproape de trunchi/origine; distal înseamnă mai departe de trunchi/origine. Sunt opuși.',
  'intro-anatomy',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro27',
  'med-admission-barrons',
  'easy',
  'The integumentary system includes:',
  'Sistemul tegumentar include:',
  '["Bones, cartilage, and joints","Skin, hair, nails, and associated glands","Heart, blood vessels, and blood","Brain, spinal cord, and nerves","Stomach, intestines, and liver"]'::jsonb,
  '["Oase, cartilaj și articulații","Piele, păr, unghii și glande asociate","Inimă, vase de sânge și sânge","Creier, măduvă spinării și nervi","Stomac, intestine și ficat"]'::jsonb,
  1,
  'The integumentary system consists of the skin and its derivatives: hair, nails, and various glands (sweat and sebaceous glands).',
  'Sistemul tegumentar constă din piele și derivatele sale: păr, unghii și diverse glande (glande sudoripare și sebacee).',
  'intro-anatomy',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro28',
  'med-admission-barrons',
  'easy',
  'Which abdominopelvic quadrant contains most of the liver?',
  'Care cadran abdominopelvic conține cea mai mare parte a ficatului?',
  '["Right lower quadrant (RLQ)","Left upper quadrant (LUQ)","Right upper quadrant (RUQ)","Left lower quadrant (LLQ)","Central region"]'::jsonb,
  '["Cadranul inferior drept (RLQ)","Cadranul superior stâng (LUQ)","Cadranul superior drept (RUQ)","Cadranul inferior stâng (LLQ)","Regiunea centrală"]'::jsonb,
  2,
  'The liver is located primarily in the right upper quadrant (RUQ) of the abdominopelvic cavity.',
  'Ficatul este situat în principal în cadranul superior drept (RUQ) al cavității abdominopelvice.',
  'intro-anatomy',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro29',
  'med-admission-barrons',
  'easy',
  'The pleural cavities contain which organs?',
  'Cavitățile pleurale conțin care organe?',
  '["Heart","Lungs","Liver and spleen","Kidneys","Intestines"]'::jsonb,
  '["Inima","Plămânii","Ficatul și splina","Rinichii","Intestinele"]'::jsonb,
  1,
  'The pleural cavities surround the lungs and contain a small amount of serous fluid for lubrication.',
  'Cavitățile pleurale înconjoară plămânii și conțin o cantitate mică de lichid seros pentru lubrifiere.',
  'intro-anatomy',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro30',
  'med-admission-barrons',
  'easy',
  'Which statement about gross anatomy is TRUE?',
  'Care afirmație despre anatomia macroscopică este ADEVĂRATĂ?',
  '["It studies structures too small to see without a microscope","It studies large body structures visible to the naked eye","It focuses only on cellular functions","It is also called microscopic anatomy","It examines only pathological conditions"]'::jsonb,
  '["Studiază structuri prea mici pentru a fi văzute fără microscop","Studiază structuri mari ale corpului vizibile cu ochiul liber","Se concentrează doar pe funcțiile celulare","Se numește și anatomie microscopică","Examinează doar afecțiuni patologice"]'::jsonb,
  1,
  'Gross (macroscopic) anatomy is the study of body structures large enough to be examined without magnification.',
  'Anatomia macroscopică (grosolană) este studiul structurilor corpului suficient de mari pentru a fi examinate fără mărire.',
  'intro-anatomy',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 4 (Medium)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro31',
  'med-admission-barrons',
  'easy',
  'The epigastric region is located:',
  'Regiunea epigastrică este situată:',
  '["Below the umbilical region","Above the umbilical region, in the upper middle abdomen","In the right lower quadrant","Lateral to the lumbar regions","In the pelvic area"]'::jsonb,
  '["Sub regiunea ombilicală","Deasupra regiunii ombilicale, în partea superioară medie a abdomenului","În cadranul inferior drept","Lateral față de regiunile lombare","În zona pelvică"]'::jsonb,
  1,
  'The epigastric region is the superior middle region of the nine abdominopelvic regions, located above the umbilical region.',
  'Regiunea epigastrică este regiunea superioară medie dintre cele nouă regiuni abdominopelvice, situată deasupra regiunii ombilicale.',
  'intro-anatomy',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro32',
  'med-admission-barrons',
  'easy',
  'The study of tissues is called:',
  'Studiul țesuturilor se numește:',
  '["Cytology","Histology","Pathology","Embryology","Physiology"]'::jsonb,
  '["Citologie","Histologie","Patologie","Embriologie","Fiziologie"]'::jsonb,
  1,
  'Histology is the microscopic study of tissues, their structure and function.',
  'Histologia este studiul microscopic al țesuturilor, structurii și funcției lor.',
  'intro-anatomy',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro33',
  'med-admission-barrons',
  'easy',
  'Which body system provides support, protection, and serves as a site for blood cell formation?',
  'Care sistem al corpului oferă suport, protecție și servește ca loc pentru formarea celulelor sanguine?',
  '["Muscular system","Skeletal system","Nervous system","Endocrine system","Lymphatic system"]'::jsonb,
  '["Sistemul muscular","Sistemul scheletic","Sistemul nervos","Sistemul endocrin","Sistemul limfatic"]'::jsonb,
  1,
  'The skeletal system provides structural support, protects internal organs, and contains red bone marrow where blood cells are produced.',
  'Sistemul scheletic oferă suport structural, protejează organele interne și conține măduvă osoasă roșie unde sunt produse celulele sanguine.',
  'intro-anatomy',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro34',
  'med-admission-barrons',
  'easy',
  'The ventral body cavity is divided into which two major subdivisions?',
  'Cavitatea ventrală a corpului este împărțită în care două subdiviziuni majore?',
  '["Cranial and spinal cavities","Thoracic and abdominopelvic cavities","Pleural and pericardial cavities","Oral and orbital cavities","Nasal and middle ear cavities"]'::jsonb,
  '["Cavitățile craniană și spinală","Cavitățile toracică și abdominopelvică","Cavitățile pleurală și pericardică","Cavitățile orală și orbitală","Cavitățile nazală și a urechii medii"]'::jsonb,
  1,
  'The ventral body cavity consists of the thoracic cavity (chest) and the abdominopelvic cavity (abdomen and pelvis), separated by the diaphragm.',
  'Cavitatea ventrală constă din cavitatea toracică (torace) și cavitatea abdominopelvică (abdomen și pelvis), separate de diafragm.',
  'intro-anatomy',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro35',
  'med-admission-barrons',
  'easy',
  'Which directional term means "toward the back of the body"?',
  'Care termen direcțional înseamnă „spre spatele corpului"?',
  '["Anterior","Ventral","Posterior (dorsal)","Superior","Medial"]'::jsonb,
  '["Anterior","Ventral","Posterior (dorsal)","Superior","Medial"]'::jsonb,
  2,
  'Posterior (or dorsal) means toward the back of the body in the anatomical position.',
  'Posterior (sau dorsal) înseamnă spre spatele corpului în poziția anatomică.',
  'intro-anatomy',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro36',
  'med-admission-barrons',
  'easy',
  'The hypogastric (pubic) region is located:',
  'Regiunea hipogastrică (pubiană) este situată:',
  '["Above the epigastric region","Below the umbilical region","Lateral to the umbilical region","Within the thoracic cavity","Above the umbilical region"]'::jsonb,
  '["Deasupra regiunii epigastrice","Sub regiunea ombilicală","Lateral față de regiunea ombilicală","În cavitatea toracică","Deasupra regiunii ombilicale"]'::jsonb,
  1,
  'The hypogastric (pubic) region is the inferior middle region, located below the umbilical region in the lower abdomen.',
  'Regiunea hipogastrică (pubiană) este regiunea inferioară medie, situată sub regiunea ombilicală în abdomenul inferior.',
  'intro-anatomy',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro37',
  'med-admission-barrons',
  'easy',
  'Which system produces hormones that regulate body activities?',
  'Care sistem produce hormoni care reglează activitățile corpului?',
  '["Nervous system","Muscular system","Endocrine system","Respiratory system","Digestive system"]'::jsonb,
  '["Sistemul nervos","Sistemul muscular","Sistemul endocrin","Sistemul respirator","Sistemul digestiv"]'::jsonb,
  2,
  'The endocrine system consists of glands that produce hormones, which regulate metabolism, growth, reproduction, and many other body functions.',
  'Sistemul endocrin constă din glande care produc hormoni ce reglează metabolismul, creșterea, reproducerea și multe alte funcții ale corpului.',
  'intro-anatomy',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro38',
  'med-admission-barrons',
  'easy',
  'The term "ipsilateral" means:',
  'Termenul „ipsilateral" înseamnă:',
  '["On opposite sides of the body","On the same side of the body","Toward the midline","Away from the surface","Between two structures"]'::jsonb,
  '["Pe părți opuse ale corpului","Pe aceeași parte a corpului","Spre linia mediană","Departe de suprafață","Între două structuri"]'::jsonb,
  1,
  'Ipsilateral means on the same side of the body, as opposed to contralateral which means on opposite sides.',
  'Ipsilateral înseamnă pe aceeași parte a corpului, spre deosebire de contralateral care înseamnă pe părți opuse.',
  'intro-anatomy',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro39',
  'med-admission-barrons',
  'easy',
  'The study of cells is called:',
  'Studiul celulelor se numește:',
  '["Histology","Cytology","Anatomy","Pathology","Physiology"]'::jsonb,
  '["Histologie","Citologie","Anatomie","Patologie","Fiziologie"]'::jsonb,
  1,
  'Cytology is the study of cells, their structure, function, and chemistry.',
  'Citologia este studiul celulelor, structurii, funcției și chimiei lor.',
  'intro-anatomy',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro40',
  'med-admission-barrons',
  'easy',
  'Which structure separates the thoracic cavity from the abdominopelvic cavity?',
  'Care structură separă cavitatea toracică de cavitatea abdominopelvică?',
  '["Sternum","Vertebral column","Diaphragm","Peritoneum","Ribs"]'::jsonb,
  '["Sternul","Coloana vertebrală","Diafragma","Peritoneul","Coastele"]'::jsonb,
  2,
  'The diaphragm is a dome-shaped muscle that separates the thoracic cavity above from the abdominopelvic cavity below.',
  'Diafragma este un mușchi în formă de cupolă care separă cavitatea toracică de sus de cavitatea abdominopelvică de jos.',
  'intro-anatomy',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 5 (Medium)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro41',
  'med-admission-barrons',
  'medium',
  'A patient has an injury to the right arm. A structure on the same side as the injury would be described as:',
  'Un pacient are o leziune la brațul drept. O structură pe aceeași parte cu leziunea ar fi descrisă ca:',
  '["Contralateral","Bilateral","Ipsilateral","Superficial","Distal"]'::jsonb,
  '["Contralateral","Bilateral","Ipsilateral","Superficial","Distal"]'::jsonb,
  2,
  'Ipsilateral means on the same side of the body. If the injury is to the right arm, structures on the right side are ipsilateral to it.',
  'Ipsilateral înseamnă pe aceeași parte a corpului. Dacă leziunea este la brațul drept, structurile de pe partea dreaptă sunt ipsilaterale față de aceasta.',
  'intro-anatomy',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro42',
  'med-admission-barrons',
  'medium',
  'Which of the following represents a correct relationship between body regions?',
  'Care dintre următoarele reprezintă o relație corectă între regiunile corpului?',
  '["The brachial region is distal to the carpal region","The femoral region is proximal to the tarsal region","The cervical region is inferior to the thoracic region","The popliteal region is anterior to the patellar region","The gluteal region is medial to the inguinal region"]'::jsonb,
  '["Regiunea brahială este distală față de regiunea carpală","Regiunea femurală este proximală față de regiunea tarsală","Regiunea cervicală este inferioară față de regiunea toracică","Regiunea poplitee este anterioară față de regiunea patelară","Regiunea gluteală este medială față de regiunea inghinală"]'::jsonb,
  1,
  'The femoral (thigh) region is closer to the trunk, making it proximal to the tarsal (ankle) region which is more distal.',
  'Regiunea femurală (coapsă) este mai aproape de trunchi, făcând-o proximală față de regiunea tarsală (gleznă) care este mai distală.',
  'intro-anatomy',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro43',
  'med-admission-barrons',
  'medium',
  'The serous membrane that lines the abdominal cavity wall is called the:',
  'Membrana seroasă care căptușește peretele cavității abdominale se numește:',
  '["Visceral peritoneum","Parietal peritoneum","Parietal pleura","Visceral pericardium","Mesentery"]'::jsonb,
  '["Peritoneul visceral","Peritoneul parietal","Pleura parietală","Pericardul visceral","Mezenterul"]'::jsonb,
  1,
  'The parietal peritoneum lines the wall of the abdominal cavity, while the visceral peritoneum covers the organs within it.',
  'Peritoneul parietal căptușește peretele cavității abdominale, în timp ce peritoneul visceral acoperă organele din interior.',
  'intro-anatomy',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro44',
  'med-admission-barrons',
  'medium',
  'An MRI scan taken along the transverse plane would show the body divided into:',
  'O scanare RMN făcută de-a lungul planului transversal ar arăta corpul împărțit în:',
  '["Right and left portions","Anterior and posterior portions","Superior and inferior portions","Medial and lateral portions","Proximal and distal portions"]'::jsonb,
  '["Porțiuni dreaptă și stângă","Porțiuni anterioară și posterioară","Porțiuni superioară și inferioară","Porțiuni medială și laterală","Porțiuni proximală și distală"]'::jsonb,
  2,
  'The transverse (horizontal) plane divides the body into superior (upper) and inferior (lower) portions.',
  'Planul transversal (orizontal) împarte corpul în porțiuni superioară (de sus) și inferioară (de jos).',
  'intro-anatomy',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro45',
  'med-admission-barrons',
  'medium',
  'Which component of a negative feedback loop detects changes in the controlled variable?',
  'Care componentă a unei bucle de feedback negativ detectează modificările variabilei controlate?',
  '["Effector","Control center","Receptor (sensor)","Set point","Response"]'::jsonb,
  '["Efector","Centrul de control","Receptor (senzor)","Punctul de referință","Răspuns"]'::jsonb,
  2,
  'The receptor (sensor) monitors the environment and detects changes (stimuli) in the controlled variable, sending information to the control center.',
  'Receptorul (senzorul) monitorizează mediul și detectează modificări (stimuli) în variabila controlată, trimițând informații către centrul de control.',
  'intro-anatomy',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro46',
  'med-admission-barrons',
  'medium',
  'Which of the following organs is found in the left hypochondriac region?',
  'Care dintre următoarele organe se găsește în regiunea hipocondriacă stângă?',
  '["Liver","Appendix","Spleen","Cecum","Gallbladder"]'::jsonb,
  '["Ficat","Apendice","Splină","Cec","Vezică biliară"]'::jsonb,
  2,
  'The spleen is located in the left hypochondriac region of the abdomen.',
  'Splina este situată în regiunea hipocondriacă stângă a abdomenului.',
  'intro-anatomy',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro47',
  'med-admission-barrons',
  'medium',
  'The nervous and endocrine systems both function to:',
  'Sistemele nervos și endocrin funcționează amândouă pentru a:',
  '["Produce movement","Provide structural support","Regulate and coordinate body activities","Exchange gases with the environment","Remove wastes from the blood"]'::jsonb,
  '["Produce mișcare","Oferi suport structural","Regla și coordona activitățile corpului","Schimba gaze cu mediul","Elimina deșeuri din sânge"]'::jsonb,
  2,
  'Both the nervous and endocrine systems regulate and coordinate body activities, though through different mechanisms (nerve impulses vs. hormones).',
  'Atât sistemul nervos cât și cel endocrin reglează și coordonează activitățile corpului, deși prin mecanisme diferite (impulsuri nervoase vs. hormoni).',
  'intro-anatomy',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro48',
  'med-admission-barrons',
  'medium',
  'The appendix is typically located in which abdominopelvic region?',
  'Apendicele este de obicei situat în care regiune abdominopelvică?',
  '["Right lumbar region","Left iliac region","Epigastric region","Right iliac (inguinal) region","Umbilical region"]'::jsonb,
  '["Regiunea lombară dreaptă","Regiunea iliacă stângă","Regiunea epigastrică","Regiunea iliacă (inghinală) dreaptă","Regiunea ombilicală"]'::jsonb,
  3,
  'The appendix is located in the right iliac (inguinal) region, attached to the cecum.',
  'Apendicele este situat în regiunea iliacă (inghinală) dreaptă, atașat de cec.',
  'intro-anatomy',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro49',
  'med-admission-barrons',
  'medium',
  'Which characteristic is NOT a function necessary for life?',
  'Care caracteristică NU este o funcție necesară pentru viață?',
  '["Maintaining boundaries","Movement","Responsiveness to stimuli","Immortality","Metabolism"]'::jsonb,
  '["Menținerea granițelor","Mișcare","Răspuns la stimuli","Nemurirea","Metabolism"]'::jsonb,
  3,
  'Immortality is not a characteristic of life. Necessary life functions include maintaining boundaries, movement, responsiveness, digestion, metabolism, excretion, reproduction, and growth.',
  'Nemurirea nu este o caracteristică a vieții. Funcțiile necesare vieții includ menținerea granițelor, mișcare, răspuns, digestie, metabolism, excreție, reproducere și creștere.',
  'intro-anatomy',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro50',
  'med-admission-barrons',
  'medium',
  'A cross-section through the forearm would be created by cutting along which plane?',
  'O secțiune transversală prin antebraț ar fi creată prin tăiere de-a lungul cărui plan?',
  '["Sagittal plane","Frontal (coronal) plane","Transverse (horizontal) plane","Midsagittal plane","Parasagittal plane"]'::jsonb,
  '["Planul sagital","Planul frontal (coronal)","Planul transversal (orizontal)","Planul midsagital","Planul parasagital"]'::jsonb,
  2,
  'A cross-section (cutting perpendicular to the long axis) of the forearm is created by a transverse (horizontal) plane relative to that limb.',
  'O secțiune transversală (tăiere perpendiculară pe axul lung) al antebrațului este creată de un plan transversal (orizontal) relativ la acel membru.',
  'intro-anatomy',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 6 (Medium)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro51',
  'med-admission-barrons',
  'medium',
  'In the regulation of body temperature, which structure acts as the control center?',
  'În reglarea temperaturii corpului, care structură acționează ca centru de control?',
  '["Skin receptors","Sweat glands","Hypothalamus","Blood vessels","Skeletal muscles"]'::jsonb,
  '["Receptorii cutanați","Glandele sudoripare","Hipotalamusul","Vasele de sânge","Mușchii scheletici"]'::jsonb,
  2,
  'The hypothalamus in the brain acts as the body''s thermostat, receiving input from temperature sensors and coordinating appropriate responses.',
  'Hipotalamusul din creier acționează ca termostatul corpului, primind informații de la senzorii de temperatură și coordonând răspunsuri adecvate.',
  'intro-anatomy',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro52',
  'med-admission-barrons',
  'medium',
  'Which membrane lines joint cavities?',
  'Care membrană căptușește cavitățile articulare?',
  '["Serous membrane","Mucous membrane","Cutaneous membrane","Synovial membrane","Meningeal membrane"]'::jsonb,
  '["Membrană seroasă","Membrană mucoasă","Membrană cutanată","Membrană sinovială","Membrană meningeală"]'::jsonb,
  3,
  'Synovial membranes line the cavities of freely movable joints and produce synovial fluid for lubrication.',
  'Membranele sinoviale căptușesc cavitățile articulațiilor mobile și produc lichid sinovial pentru lubrifiere.',
  'intro-anatomy',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro53',
  'med-admission-barrons',
  'medium',
  'Which survival need is most immediately necessary for life?',
  'Care necesitate de supraviețuire este cel mai imediat necesară pentru viață?',
  '["Food","Oxygen","Water","Atmospheric pressure","Nutrients"]'::jsonb,
  '["Hrană","Oxigen","Apă","Presiunea atmosferică","Nutrienți"]'::jsonb,
  1,
  'Oxygen is the most immediately necessary; brain cells begin to die within 4-5 minutes without oxygen, whereas survival without water is possible for days and without food for weeks.',
  'Oxigenul este cel mai imediat necesar; celulele cerebrale încep să moară în 4-5 minute fără oxigen, în timp ce supraviețuirea fără apă este posibilă zile și fără hrană săptămâni.',
  'intro-anatomy',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro54',
  'med-admission-barrons',
  'medium',
  'The term "contralateral" means:',
  'Termenul „contralateral" înseamnă:',
  '["On the same side of the body","On opposite sides of the body","Toward the midline","Away from the midline","Near the surface"]'::jsonb,
  '["Pe aceeași parte a corpului","Pe părți opuse ale corpului","Spre linia mediană","Departe de linia mediană","Aproape de suprafață"]'::jsonb,
  1,
  'Contralateral means on opposite sides of the body or a structure, as opposed to ipsilateral (same side).',
  'Contralateral înseamnă pe părți opuse ale corpului sau unei structuri, spre deosebire de ipsilateral (aceeași parte).',
  'intro-anatomy',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro55',
  'med-admission-barrons',
  'medium',
  'Which system removes carbon dioxide from the body?',
  'Care sistem elimină dioxidul de carbon din corp?',
  '["Digestive system","Urinary system","Respiratory system","Integumentary system","Lymphatic system"]'::jsonb,
  '["Sistemul digestiv","Sistemul urinar","Sistemul respirator","Sistemul tegumentar","Sistemul limfatic"]'::jsonb,
  2,
  'The respiratory system is responsible for gas exchange, bringing oxygen into the body and removing carbon dioxide.',
  'Sistemul respirator este responsabil pentru schimbul de gaze, aducând oxigen în corp și eliminând dioxidul de carbon.',
  'intro-anatomy',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro56',
  'med-admission-barrons',
  'medium',
  'The lungs are covered by which serous membrane?',
  'Plămânii sunt acoperiți de care membrană seroasă?',
  '["Parietal pericardium","Visceral pleura","Parietal peritoneum","Visceral pericardium","Meninges"]'::jsonb,
  '["Pericard parietal","Pleura viscerală","Peritoneu parietal","Pericard visceral","Meninge"]'::jsonb,
  1,
  'The visceral pleura directly covers the surface of the lungs, while the parietal pleura lines the thoracic wall.',
  'Pleura viscerală acoperă direct suprafața plămânilor, în timp ce pleura parietală căptușește peretele toracic.',
  'intro-anatomy',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro57',
  'med-admission-barrons',
  'medium',
  'Regional anatomy studies the body by:',
  'Anatomia regională studiază corpul prin:',
  '["Examining one organ system at a time throughout the body","Focusing on all structures in a specific body area together","Analyzing cellular and molecular components","Studying disease processes","Examining embryonic development"]'::jsonb,
  '["Examinarea unui sistem de organe pe rând în tot corpul","Concentrarea pe toate structurile dintr-o zonă specifică a corpului împreună","Analizarea componentelor celulare și moleculare","Studierea proceselor patologice","Examinarea dezvoltării embrionare"]'::jsonb,
  1,
  'Regional anatomy studies all structures (bones, muscles, nerves, vessels, etc.) in a particular body region, such as the arm or abdomen.',
  'Anatomia regională studiază toate structurile (oase, mușchi, nervi, vase etc.) dintr-o regiune particulară a corpului, cum ar fi brațul sau abdomenul.',
  'intro-anatomy',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro58',
  'med-admission-barrons',
  'medium',
  'Which statement about metabolism is TRUE?',
  'Care afirmație despre metabolism este ADEVĂRATĂ?',
  '["Catabolism is the building up of complex molecules","Anabolism refers to the breakdown of nutrients for energy","Metabolism includes both anabolic and catabolic reactions","Metabolism only occurs in muscle cells","Metabolism does not require oxygen"]'::jsonb,
  '["Catabolismul este construirea moleculelor complexe","Anabolismul se referă la descompunerea nutrienților pentru energie","Metabolismul include atât reacții anabolice cât și catabolice","Metabolismul are loc doar în celulele musculare","Metabolismul nu necesită oxigen"]'::jsonb,
  2,
  'Metabolism encompasses all chemical reactions in the body, including anabolism (building up) and catabolism (breaking down).',
  'Metabolismul cuprinde toate reacțiile chimice din corp, inclusiv anabolismul (construire) și catabolismul (descompunere).',
  'intro-anatomy',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro59',
  'med-admission-barrons',
  'medium',
  'The stomach is located primarily in which abdominopelvic regions?',
  'Stomacul este situat în principal în care regiuni abdominopelvice?',
  '["Right hypochondriac and right lumbar","Epigastric and left hypochondriac","Umbilical and hypogastric","Left iliac and right iliac","Right lumbar and umbilical"]'::jsonb,
  '["Hipocondriacă dreaptă și lombară dreaptă","Epigastrică și hipocondriacă stângă","Ombilicală și hipogastrică","Iliacă stângă și iliacă dreaptă","Lombară dreaptă și ombilicală"]'::jsonb,
  1,
  'The stomach is located primarily in the epigastric region and extends into the left hypochondriac region.',
  'Stomacul este situat în principal în regiunea epigastrică și se extinde în regiunea hipocondriacă stângă.',
  'intro-anatomy',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro60',
  'med-admission-barrons',
  'medium',
  'Which cavity is NOT part of the ventral body cavity?',
  'Care cavitate NU face parte din cavitatea ventrală a corpului?',
  '["Pleural cavity","Pericardial cavity","Abdominal cavity","Vertebral (spinal) cavity","Pelvic cavity"]'::jsonb,
  '["Cavitatea pleurală","Cavitatea pericardică","Cavitatea abdominală","Cavitatea vertebrală (spinală)","Cavitatea pelvică"]'::jsonb,
  3,
  'The vertebral (spinal) cavity is part of the dorsal body cavity along with the cranial cavity, not the ventral body cavity.',
  'Cavitatea vertebrală (spinală) face parte din cavitatea dorsală a corpului împreună cu cavitatea craniană, nu din cavitatea ventrală.',
  'intro-anatomy',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 7 (Hard)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro61',
  'med-admission-barrons',
  'medium',
  'The effector in a feedback loop:',
  'Efectorul într-o buclă de feedback:',
  '["Detects changes in the environment","Determines the set point","Carries out the response to restore homeostasis","Sends signals to the receptor","Only functions in positive feedback"]'::jsonb,
  '["Detectează modificări în mediu","Determină punctul de referință","Execută răspunsul pentru a restabili homeostazia","Trimite semnale către receptor","Funcționează doar în feedback pozitiv"]'::jsonb,
  2,
  'The effector (muscle or gland) receives output from the control center and produces a response to counteract the stimulus.',
  'Efectorul (mușchi sau glandă) primește comanda de la centrul de control și produce un răspuns pentru a contracara stimulul.',
  'intro-anatomy',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro62',
  'med-admission-barrons',
  'medium',
  'Which term describes a structure that lies between two other structures?',
  'Care termen descrie o structură care se află între alte două structuri?',
  '["Superficial","Deep","Intermediate","Proximal","Distal"]'::jsonb,
  '["Superficial","Profund","Intermediar","Proximal","Distal"]'::jsonb,
  2,
  'Intermediate means between two other structures, neither superficial nor deep relative to them.',
  'Intermediar înseamnă între alte două structuri, nici superficial nici profund față de ele.',
  'intro-anatomy',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro63',
  'med-admission-barrons',
  'medium',
  'The urinary system primarily functions to:',
  'Sistemul urinar funcționează în principal pentru a:',
  '["Transport oxygen throughout the body","Remove nitrogen-containing wastes and regulate water and electrolyte balance","Break down food into absorbable nutrients","Produce hormones for growth and development","Protect against pathogens"]'::jsonb,
  '["Transporta oxigen în tot corpul","Elimina deșeuri care conțin azot și regla echilibrul apei și electroliților","Descompune hrana în nutrienți absorbabili","Produce hormoni pentru creștere și dezvoltare","Proteja împotriva agenților patogeni"]'::jsonb,
  1,
  'The urinary system removes metabolic wastes (especially nitrogenous wastes like urea) from blood and maintains fluid and electrolyte balance.',
  'Sistemul urinar elimină deșeurile metabolice (în special deșeuri azotate precum ureea) din sânge și menține echilibrul lichidelor și electroliților.',
  'intro-anatomy',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro64',
  'med-admission-barrons',
  'medium',
  'A parasagittal plane is:',
  'Un plan parasagital este:',
  '["Any sagittal plane other than the median (midsagittal) plane","A horizontal plane through the umbilicus","A frontal plane through the ears","The same as the midsagittal plane","An oblique plane through the body"]'::jsonb,
  '["Orice plan sagital altul decât planul median (midsagital)","Un plan orizontal prin buric","Un plan frontal prin urechi","La fel cu planul midsagital","Un plan oblic prin corp"]'::jsonb,
  0,
  'A parasagittal plane is any sagittal (vertical, lengthwise) plane that does not pass through the midline, dividing the body into unequal right and left portions.',
  'Un plan parasagital este orice plan sagital (vertical, longitudinal) care nu trece prin linia mediană, împărțind corpul în porțiuni inegale dreaptă și stângă.',
  'intro-anatomy',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro65',
  'med-admission-barrons',
  'medium',
  'The relationship between structure and function is a fundamental concept in anatomy and physiology. Which example best illustrates this principle?',
  'Relația dintre structură și funcție este un concept fundamental în anatomie și fiziologie. Care exemplu ilustrează cel mai bine acest principiu?',
  '["The heart has four chambers, two for receiving and two for pumping blood","Cells require nutrients to survive","Bones are white in color","The body maintains a constant temperature","Oxygen enters the body through the nose"]'::jsonb,
  '["Inima are patru camere, două pentru primirea și două pentru pomparea sângelui","Celulele au nevoie de nutrienți pentru a supraviețui","Oasele sunt de culoare albă","Corpul menține o temperatură constantă","Oxigenul intră în corp prin nas"]'::jsonb,
  0,
  'The four-chambered structure of the heart directly relates to its function of efficiently separating oxygenated and deoxygenated blood during circulation.',
  'Structura cu patru camere a inimii se leagă direct de funcția sa de a separa eficient sângele oxigenat de cel neoxigenat în timpul circulației.',
  'intro-anatomy',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro66',
  'med-admission-barrons',
  'medium',
  'Which of the following correctly matches a body system with its primary function?',
  'Care dintre următoarele asociază corect un sistem al corpului cu funcția sa principală?',
  '["Digestive system – gas exchange","Cardiovascular system – hormone production","Lymphatic system – immunity and fluid balance","Respiratory system – nutrient absorption","Skeletal system – temperature regulation"]'::jsonb,
  '["Sistemul digestiv – schimb de gaze","Sistemul cardiovascular – producție de hormoni","Sistemul limfatic – imunitate și echilibrul lichidelor","Sistemul respirator – absorbția nutrienților","Sistemul scheletic – reglarea temperaturii"]'::jsonb,
  2,
  'The lymphatic system plays key roles in immunity (housing immune cells) and maintaining fluid balance (returning fluid to blood).',
  'Sistemul limfatic joacă roluri cheie în imunitate (adăpostind celule imune) și menținerea echilibrului lichidelor (returnând lichidul în sânge).',
  'intro-anatomy',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro67',
  'med-admission-barrons',
  'medium',
  'The mediastinum is located:',
  'Mediastinul este situat:',
  '["Within the abdominal cavity","Between the two pleural cavities in the thorax","Within the vertebral canal","In the cranial cavity","Within the pericardial cavity"]'::jsonb,
  '["În cavitatea abdominală","Între cele două cavități pleurale în torace","În canalul vertebral","În cavitatea craniană","În cavitatea pericardică"]'::jsonb,
  1,
  'The mediastinum is the central compartment of the thoracic cavity, located between the lungs (pleural cavities), containing the heart, great vessels, esophagus, and trachea.',
  'Mediastinul este compartimentul central al cavității toracice, situat între plămâni (cavitățile pleurale), conținând inima, vasele mari, esofagul și traheea.',
  'intro-anatomy',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro68',
  'med-admission-barrons',
  'medium',
  'Systemic anatomy is the study of:',
  'Anatomia sistemică este studiul:',
  '["A specific region of the body with all its structures","The body organized by organ systems","Microscopic structures","Developmental changes from conception to adulthood","Diseased tissues"]'::jsonb,
  '["O regiune specifică a corpului cu toate structurile sale","Corpul organizat pe sisteme de organe","Structuri microscopice","Modificări de dezvoltare de la concepție la maturitate","Țesuturi bolnave"]'::jsonb,
  1,
  'Systemic anatomy studies the body by organ systems, examining all components of one system (e.g., cardiovascular) throughout the body.',
  'Anatomia sistemică studiază corpul pe sisteme de organe, examinând toate componentele unui sistem (ex. cardiovascular) în tot corpul.',
  'intro-anatomy',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro69',
  'med-admission-barrons',
  'medium',
  'Which of the following is an example of negative feedback in the body?',
  'Care dintre următoarele este un exemplu de feedback negativ în corp?',
  '["Blood clotting cascade during injury","Uterine contractions during childbirth","Regulation of blood glucose by insulin","Fever response during infection","Milk ejection during breastfeeding"]'::jsonb,
  '["Cascada de coagulare în timpul unei leziuni","Contracțiile uterine în timpul nașterii","Reglarea glicemiei prin insulină","Răspunsul febril în timpul infecției","Ejecția laptelui în timpul alăptării"]'::jsonb,
  2,
  'Blood glucose regulation is classic negative feedback: when glucose rises, insulin is released to lower it back toward the set point.',
  'Reglarea glicemiei este un feedback negativ clasic: când glucoza crește, insulina este eliberată pentru a o readuce la valoarea de referință.',
  'intro-anatomy',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro70',
  'med-admission-barrons',
  'medium',
  'The kidneys are located in which body region?',
  'Rinichii sunt situați în care regiune a corpului?',
  '["Thoracic","Cervical","Lumbar","Sacral","Gluteal"]'::jsonb,
  '["Toracică","Cervicală","Lombară","Sacrală","Gluteală"]'::jsonb,
  2,
  'The kidneys are located in the lumbar region of the posterior abdominal wall, retroperitoneal in position.',
  'Rinichii sunt situați în regiunea lombară a peretelui abdominal posterior, în poziție retroperitoneală.',
  'intro-anatomy',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 8 (Hard)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro71',
  'med-admission-barrons',
  'hard',
  'A patient presents with right lower quadrant abdominal pain. Based on anatomical knowledge, which structure is most likely involved?',
  'Un pacient prezintă durere abdominală în cadranul inferior drept. Pe baza cunoștințelor anatomice, care structură este cel mai probabil implicată?',
  '["Spleen","Stomach","Appendix","Left kidney","Descending colon"]'::jsonb,
  '["Splina","Stomacul","Apendicele","Rinichiul stâng","Colonul descendent"]'::jsonb,
  2,
  'The appendix is located in the right lower quadrant (right iliac region), making appendicitis a common cause of right lower quadrant pain.',
  'Apendicele este situat în cadranul inferior drept (regiunea iliacă dreaptă), făcând apendicita o cauză frecventă a durerii în cadranul inferior drept.',
  'intro-anatomy',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro72',
  'med-admission-barrons',
  'hard',
  'During a clinical examination, a physician notes that organ X is lateral to organ Y and inferior to organ Z. This observation relies on which anatomical terminology system?',
  'În timpul unui examen clinic, un medic observă că organul X este lateral față de organul Y și inferior față de organul Z. Această observație se bazează pe care sistem de terminologie anatomică?',
  '["Histological classification","Directional terminology from the anatomical position","Metabolic pathway analysis","Embryological staging","Pathological grading"]'::jsonb,
  '["Clasificare histologică","Terminologie direcțională din poziția anatomică","Analiza căilor metabolice","Stadializare embriologică","Gradare patologică"]'::jsonb,
  1,
  'Directional terms (lateral, medial, superior, inferior, etc.) are standardized based on the anatomical position to provide precise descriptions of body structure locations.',
  'Termenii direcționali (lateral, medial, superior, inferior etc.) sunt standardizați pe baza poziției anatomice pentru a oferi descrieri precise ale locațiilor structurilor corpului.',
  'intro-anatomy',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro73',
  'med-admission-barrons',
  'hard',
  'Which statement best explains why homeostatic imbalances are often the underlying cause of disease?',
  'Care afirmație explică cel mai bine de ce dezechilibrele homeostatice sunt adesea cauza de bază a bolilor?',
  '["Disease occurs only when pathogens enter the body","Homeostatic mechanisms always prevent any physiological changes","When regulatory mechanisms fail to maintain the internal environment, cells may be damaged and organ function compromised","Disease is unrelated to physiological control systems","Homeostasis only involves temperature regulation"]'::jsonb,
  '["Boala apare doar când agenții patogeni intră în corp","Mecanismele homeostatice previn întotdeauna orice modificări fiziologice","Când mecanismele de reglare nu reușesc să mențină mediul intern, celulele pot fi deteriorate și funcția organelor compromisă","Boala nu are legătură cu sistemele de control fiziologic","Homeostazia implică doar reglarea temperaturii"]'::jsonb,
  2,
  'Disease often results when homeostatic mechanisms are disrupted, leading to abnormal conditions (e.g., diabetes results from failed glucose regulation).',
  'Boala apare adesea când mecanismele homeostatice sunt perturbate, ducând la condiții anormale (ex. diabetul rezultă din reglarea eșuată a glucozei).',
  'intro-anatomy',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro74',
  'med-admission-barrons',
  'hard',
  'A surgeon needs to access the pericardial cavity. Through which pathway must the surgeon pass?',
  'Un chirurg trebuie să acceseze cavitatea pericardică. Prin care cale trebuie să treacă chirurgul?',
  '["Through the abdominal cavity and then through the diaphragm","Through the thoracic wall, into the mediastinum, then through the pericardium","Through the vertebral canal","Through the pleural cavity only","Through the cranial cavity"]'::jsonb,
  '["Prin cavitatea abdominală și apoi prin diafragm","Prin peretele toracic, în mediastin, apoi prin pericard","Prin canalul vertebral","Doar prin cavitatea pleurală","Prin cavitatea craniană"]'::jsonb,
  1,
  'To access the pericardial cavity, a surgeon enters through the chest wall into the mediastinum and then through the layers of the pericardium.',
  'Pentru a accesa cavitatea pericardică, un chirurg intră prin peretele toracic în mediastin și apoi prin straturile pericardului.',
  'intro-anatomy',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro75',
  'med-admission-barrons',
  'hard',
  'In the hierarchy of structural organization, which correctly describes the relationship between an organ and an organ system?',
  'În ierarhia organizării structurale, care descrie corect relația dintre un organ și un sistem de organe?',
  '["An organ system is a component of a single organ","Organs and organ systems are at the same organizational level","Multiple organs working together form an organ system to perform broad functions","An organ contains multiple organ systems","Organ systems exist only in unicellular organisms"]'::jsonb,
  '["Un sistem de organe este o componentă a unui singur organ","Organele și sistemele de organe sunt la același nivel organizațional","Mai multe organe care lucrează împreună formează un sistem de organe pentru a îndeplini funcții complexe","Un organ conține mai multe sisteme de organe","Sistemele de organe există doar în organismele unicelulare"]'::jsonb,
  2,
  'An organ system consists of multiple organs that work together to accomplish common functions (e.g., the digestive system includes the stomach, intestines, liver, etc.).',
  'Un sistem de organe constă din mai multe organe care lucrează împreună pentru a îndeplini funcții comune (ex. sistemul digestiv include stomacul, intestinele, ficatul etc.).',
  'intro-anatomy',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro76',
  'med-admission-barrons',
  'hard',
  'A CT scan reveals fluid accumulation in the potential space between the visceral and parietal layers of the pleura. This condition is called:',
  'O scanare CT relevă acumulare de lichid în spațiul potențial dintre straturile visceral și parietal ale pleurei. Această afecțiune se numește:',
  '["Pericardial effusion","Ascites","Pleural effusion","Hydrocephalus","Edema"]'::jsonb,
  '["Efuziune pericardică","Ascită","Efuziune pleurală","Hidrocefalie","Edem"]'::jsonb,
  2,
  'Pleural effusion is the accumulation of excess fluid in the pleural cavity between the visceral and parietal pleura surrounding the lungs.',
  'Efuziunea pleurală este acumularea excesivă de lichid în cavitatea pleurală dintre pleura viscerală și cea parietală care înconjoară plămânii.',
  'intro-anatomy',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro77',
  'med-admission-barrons',
  'hard',
  'Which survival factor most directly determines the upper temperature limit for life?',
  'Care factor de supraviețuire determină cel mai direct limita superioară de temperatură pentru viață?',
  '["Oxygen availability","Water content of cells","Protein denaturation","Atmospheric pressure","Nutrient supply"]'::jsonb,
  '["Disponibilitatea oxigenului","Conținutul de apă al celulelor","Denaturarea proteinelor","Presiunea atmosferică","Furnizarea de nutrienți"]'::jsonb,
  2,
  'Excessive heat causes proteins to denature (lose their three-dimensional structure), which destroys their function and can be lethal to cells.',
  'Căldura excesivă cauzează denaturarea proteinelor (pierderea structurii tridimensionale), ceea ce distruge funcția lor și poate fi letală pentru celule.',
  'intro-anatomy',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro78',
  'med-admission-barrons',
  'hard',
  'A patient with a stab wound to the left side of the chest at the fifth intercostal space, midclavicular line, would most likely have injured which structure?',
  'Un pacient cu o plagă înjunghiată în partea stângă a toracelui la al cincilea spațiu intercostal, linia medioclaviculară, ar fi rănit cel mai probabil care structură?',
  '["Liver","Stomach","Heart","Right lung","Spleen"]'::jsonb,
  '["Ficatul","Stomacul","Inima","Plămânul drept","Splina"]'::jsonb,
  2,
  'The heart apex is located at the fifth intercostal space along the midclavicular line on the left side, making it vulnerable at this location.',
  'Apexul inimii este situat la al cincilea spațiu intercostal de-a lungul liniei medioclaviculare pe partea stângă, făcându-l vulnerabil în această locație.',
  'intro-anatomy',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro79',
  'med-admission-barrons',
  'hard',
  'Which process represents an example of positive feedback that is beneficial?',
  'Care proces reprezintă un exemplu de feedback pozitiv benefic?',
  '["Regulation of blood pressure by baroreceptors","Control of blood calcium levels by parathyroid hormone","Blood clotting cascade following vessel injury","Regulation of breathing rate by chemoreceptors","Maintenance of body temperature at 37°C"]'::jsonb,
  '["Reglarea tensiunii arteriale de către baroreceptori","Controlul nivelurilor de calciu din sânge de către hormonul paratiroidian","Cascada de coagulare după lezarea unui vas","Reglarea ritmului respirator de către chemoreceptori","Menținerea temperaturii corpului la 37°C"]'::jsonb,
  2,
  'Blood clotting is a beneficial positive feedback mechanism: each step in the cascade amplifies the next, rapidly forming a clot to stop bleeding.',
  'Coagularea sângelui este un mecanism de feedback pozitiv benefic: fiecare pas în cascadă amplifică următorul, formând rapid un cheag pentru a opri sângerarea.',
  'intro-anatomy',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro80',
  'med-admission-barrons',
  'hard',
  'During an imaging procedure, which plane would best demonstrate the relationship between the liver and right kidney?',
  'În timpul unei proceduri imagistice, care plan ar demonstra cel mai bine relația dintre ficat și rinichiul drept?',
  '["Midsagittal plane","Transverse (horizontal) plane through the abdomen","Frontal (coronal) plane","Parasagittal plane through the left side","Any sagittal plane"]'::jsonb,
  '["Planul midsagital","Planul transversal (orizontal) prin abdomen","Planul frontal (coronal)","Planul parasagital prin partea stângă","Orice plan sagital"]'::jsonb,
  2,
  'A frontal (coronal) plane through the abdomen would show both the liver and right kidney in the same section, demonstrating their anterior-posterior relationship.',
  'Un plan frontal (coronal) prin abdomen ar arăta atât ficatul cât și rinichiul drept în aceeași secțiune, demonstrând relația lor antero-posterioară.',
  'intro-anatomy',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 9 (Hard)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro81',
  'med-admission-barrons',
  'hard',
  'A dysfunction in negative feedback regulation of thyroid hormone would most likely result in:',
  'O disfuncție în reglarea prin feedback negativ a hormonului tiroidian ar rezulta cel mai probabil în:',
  '["Constant normal thyroid hormone levels","Either excessive or deficient thyroid hormone production depending on where the dysfunction occurs","Complete cessation of all metabolic activities","Immediate death","No physiological changes"]'::jsonb,
  '["Niveluri constante normale ale hormonului tiroidian","Producție fie excesivă fie deficitară de hormon tiroidian în funcție de locul disfuncției","Încetarea completă a tuturor activităților metabolice","Moarte imediată","Nicio modificare fiziologică"]'::jsonb,
  1,
  'Disruption of negative feedback can cause either hyperthyroidism or hypothyroidism, depending on whether the disruption leads to overproduction or underproduction of the hormone.',
  'Perturbarea feedback-ului negativ poate cauza fie hipertiroidism fie hipotiroidism, în funcție de dacă perturbarea duce la supraproducție sau subproducție de hormon.',
  'intro-anatomy',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro82',
  'med-admission-barrons',
  'hard',
  'Which statement correctly describes the relationship between surface anatomy and internal organ positions?',
  'Care afirmație descrie corect relația dintre anatomia de suprafață și pozițiile organelor interne?',
  '["Surface landmarks are unreliable for locating internal structures","Surface landmarks (like bony prominences and skin creases) help clinicians identify underlying organ positions","Internal organs have no consistent relationship to surface features","Surface anatomy is only useful for dermatological conditions","Internal organ positions can only be determined by imaging"]'::jsonb,
  '["Reperele de suprafață sunt nesigure pentru localizarea structurilor interne","Reperele de suprafață (precum proeminențele osoase și pliurile pielii) ajută clinicienii să identifice pozițiile organelor subiacente","Organele interne nu au o relație consistentă cu caracteristicile de suprafață","Anatomia de suprafață este utilă doar pentru afecțiuni dermatologice","Pozițiile organelor interne pot fi determinate doar prin imagistică"]'::jsonb,
  1,
  'Surface anatomy uses external landmarks to locate internal structures, essential for physical examination, injections, and procedures.',
  'Anatomia de suprafață folosește repere externe pentru a localiza structurile interne, esențială pentru examenul fizic, injecții și proceduri.',
  'intro-anatomy',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro83',
  'med-admission-barrons',
  'hard',
  'During embryonic development, which germ layer gives rise to the nervous system?',
  'În timpul dezvoltării embrionare, care strat germinativ dă naștere sistemului nervos?',
  '["Endoderm","Mesoderm","Ectoderm","Trophoblast","Hypoblast"]'::jsonb,
  '["Endoderm","Mezoderm","Ectoderm","Trofoblast","Hipoblast"]'::jsonb,
  2,
  'The ectoderm gives rise to the nervous system, epidermis, and sensory organs (eyes, ears, nose).',
  'Ectodermul dă naștere sistemului nervos, epidermei și organelor senzoriale (ochi, urechi, nas).',
  'intro-anatomy',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro84',
  'med-admission-barrons',
  'hard',
  'A physician describes a tumor as being located in the retroperitoneal space. This means the tumor is:',
  'Un medic descrie o tumoră ca fiind situată în spațiul retroperitoneal. Aceasta înseamnă că tumora este:',
  '["Within the peritoneal cavity","Behind the peritoneum, between it and the posterior abdominal wall","In the thoracic cavity","Within the mesentery","In the pleural space"]'::jsonb,
  '["În cavitatea peritoneală","În spatele peritoneului, între acesta și peretele abdominal posterior","În cavitatea toracică","În mezenter","În spațiul pleural"]'::jsonb,
  1,
  'Retroperitoneal structures (like kidneys, adrenal glands, parts of the duodenum and colon) lie behind the peritoneum against the posterior body wall.',
  'Structurile retroperitoneale (precum rinichii, glandele suprarenale, părți din duoden și colon) se află în spatele peritoneului, la peretele posterior al corpului.',
  'intro-anatomy',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro85',
  'med-admission-barrons',
  'hard',
  'Which of the following best explains why the cardiovascular and lymphatic systems are sometimes grouped together?',
  'Care dintre următoarele explică cel mai bine de ce sistemele cardiovascular și limfatic sunt uneori grupate împreună?',
  '["They both produce hormones","They both involve circulating fluids and vessels throughout the body","They both digest nutrients","They both produce movement","They are located in the same body cavity"]'::jsonb,
  '["Ambele produc hormoni","Ambele implică fluide și vase care circulă în tot corpul","Ambele digeră nutrienți","Ambele produc mișcare","Sunt localizate în aceeași cavitate a corpului"]'::jsonb,
  1,
  'Both systems involve vessels carrying fluids (blood and lymph) throughout the body, and the lymphatic system returns interstitial fluid to the bloodstream.',
  'Ambele sisteme implică vase care transportă fluide (sânge și limfă) în tot corpul, iar sistemul limfatic returnează lichidul interstițial în fluxul sanguin.',
  'intro-anatomy',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro86',
  'med-admission-barrons',
  'hard',
  'In anatomical terms, which statement correctly describes the position of the kidneys relative to the peritoneum?',
  'În termeni anatomici, care afirmație descrie corect poziția rinichilor în raport cu peritoneul?',
  '["The kidneys are intraperitoneal","The kidneys are retroperitoneal","The kidneys are located within the peritoneal cavity","The kidneys are covered by visceral peritoneum on all surfaces","The kidneys are suspended by mesentery"]'::jsonb,
  '["Rinichii sunt intraperitoneali","Rinichii sunt retroperitoneali","Rinichii sunt localizați în cavitatea peritoneală","Rinichii sunt acoperiți de peritoneu visceral pe toate suprafețele","Rinichii sunt suspendați de mezenter"]'::jsonb,
  1,
  'The kidneys are retroperitoneal organs, located behind the peritoneum against the posterior abdominal wall.',
  'Rinichii sunt organe retroperitoneale, situate în spatele peritoneului, la peretele abdominal posterior.',
  'intro-anatomy',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro87',
  'med-admission-barrons',
  'hard',
  'A patient experiences loss of homeostatic control of blood pressure, resulting in sustained hypertension. Which component of the feedback loop is most likely malfunctioning?',
  'Un pacient experimentează pierderea controlului homeostatic al tensiunii arteriale, rezultând în hipertensiune susținută. Care componentă a buclei de feedback este cel mai probabil defectă?',
  '["Only the receptors","Only the effectors","Only the control center","Any of the components (receptor, control center, or effector) could be involved","The set point is never involved"]'::jsonb,
  '["Doar receptorii","Doar efectorii","Doar centrul de control","Oricare dintre componente (receptor, centru de control sau efector) ar putea fi implicată","Punctul de referință nu este niciodată implicat"]'::jsonb,
  3,
  'Malfunction in any feedback component—receptors (baroreceptors), control center (brain), or effectors (heart, vessels)—can disrupt blood pressure regulation.',
  'Defecțiunea oricărei componente a feedback-ului—receptori (baroreceptori), centru de control (creier) sau efectori (inimă, vase)—poate perturba reglarea tensiunii arteriale.',
  'intro-anatomy',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro88',
  'med-admission-barrons',
  'hard',
  'Which anatomical relationship is correct when a person is in the standard anatomical position?',
  'Care relație anatomică este corectă când o persoană este în poziția anatomică standard?',
  '["The thumb is medial to the little finger","The radius is lateral to the ulna","The sternum is posterior to the vertebral column","The nose is lateral to the ears","The ankles are proximal to the knees"]'::jsonb,
  '["Degetul mare este medial față de degetul mic","Radiusul este lateral față de ulnă","Sternul este posterior față de coloana vertebrală","Nasul este lateral față de urechi","Gleznele sunt proximale față de genunchi"]'::jsonb,
  1,
  'In the anatomical position (palms facing forward), the radius is on the lateral (thumb) side and the ulna is on the medial side of the forearm.',
  'În poziția anatomică (palmele orientate înainte), radiusul este pe partea laterală (a degetului mare) și ulna este pe partea medială a antebrațului.',
  'intro-anatomy',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro89',
  'med-admission-barrons',
  'hard',
  'Why is the anatomical position important in healthcare?',
  'De ce este poziția anatomică importantă în asistența medicală?',
  '["It is the most comfortable position for patients","It provides a standard reference point for describing body locations and relationships","It is required for all medical imaging","It is the position used during surgery","It has no practical application"]'::jsonb,
  '["Este cea mai confortabilă poziție pentru pacienți","Oferă un punct de referință standard pentru descrierea locațiilor și relațiilor corpului","Este necesară pentru toate imagisticile medicale","Este poziția folosită în timpul chirurgiei","Nu are aplicație practică"]'::jsonb,
  1,
  'The anatomical position provides a universal reference so that directional terms and body part descriptions are consistent and unambiguous among healthcare providers.',
  'Poziția anatomică oferă o referință universală astfel încât termenii direcționali și descrierile părților corpului să fie consistente și neambigue între furnizorii de asistență medicală.',
  'intro-anatomy',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro90',
  'med-admission-barrons',
  'hard',
  'Which of the following situations would most likely trigger a positive feedback mechanism?',
  'Care dintre următoarele situații ar declanșa cel mai probabil un mecanism de feedback pozitiv?',
  '["A slight decrease in blood glucose after eating","A minor increase in body temperature during rest","The rupture of fetal membranes at the onset of labor","A small rise in blood pressure after standing","Mild dehydration during exercise"]'::jsonb,
  '["O scădere ușoară a glicemiei după masă","O creștere minoră a temperaturii corpului în repaus","Ruperea membranelor fetale la debutul travaliului","O creștere mică a tensiunii arteriale după ridicare","Deshidratare ușoară în timpul exercițiilor"]'::jsonb,
  2,
  'The rupture of membranes releases prostaglandins and stimulates oxytocin release, intensifying uterine contractions in a positive feedback cascade until birth.',
  'Ruperea membranelor eliberează prostaglandine și stimulează eliberarea de oxitocină, intensificând contracțiile uterine într-o cascadă de feedback pozitiv până la naștere.',
  'intro-anatomy',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 10 (Hard)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro91',
  'med-admission-barrons',
  'hard',
  'A clinical study compares the effects of a drug on ipsilateral and contralateral brain regions following a stroke. Which anatomical principle is being investigated?',
  'Un studiu clinic compară efectele unui medicament pe regiunile cerebrale ipsilaterale și contralaterale după un accident vascular cerebral. Care principiu anatomic este investigat?',
  '["The relationship between superficial and deep structures","The difference between proximal and distal regions","The relationship between same-side and opposite-side brain regions","The distinction between anterior and posterior brain regions","The difference between superior and inferior brain regions"]'::jsonb,
  '["Relația dintre structurile superficiale și profunde","Diferența dintre regiunile proximale și distale","Relația dintre regiunile cerebrale de pe aceeași parte și de pe partea opusă","Distincția dintre regiunile cerebrale anterioare și posterioare","Diferența dintre regiunile cerebrale superioare și inferioare"]'::jsonb,
  2,
  'Ipsilateral refers to the same side and contralateral refers to the opposite side, crucial concepts when studying brain hemispheres and their crossed control of body sides.',
  'Ipsilateral se referă la aceeași parte și contralateral se referă la partea opusă, concepte cruciale în studiul emisferelor cerebrale și controlul lor încrucișat asupra laturilor corpului.',
  'intro-anatomy',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro92',
  'med-admission-barrons',
  'hard',
  'Which statement best describes the complementarity of structure and function at the tissue level?',
  'Care afirmație descrie cel mai bine complementaritatea structurii și funcției la nivel de țesut?',
  '["Tissues have random structures unrelated to their functions","The arrangement of cells and extracellular matrix in a tissue directly enables its specific function","All tissues have identical structures regardless of function","Function determines structure only in muscle tissue","Structure and function are independent in human tissues"]'::jsonb,
  '["Țesuturile au structuri aleatorii fără legătură cu funcțiile lor","Aranjamentul celulelor și matricei extracelulare într-un țesut permite direct funcția sa specifică","Toate țesuturile au structuri identice indiferent de funcție","Funcția determină structura doar în țesutul muscular","Structura și funcția sunt independente în țesuturile umane"]'::jsonb,
  1,
  'The principle of complementarity means that function follows structure; for example, cardiac muscle cells are branched and interconnected to coordinate contraction.',
  'Principiul complementarității înseamnă că funcția urmează structura; de exemplu, celulele musculare cardiace sunt ramificate și interconectate pentru a coordona contracția.',
  'intro-anatomy',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro93',
  'med-admission-barrons',
  'hard',
  'A patient has a tumor in the mediastinum compressing the esophagus. Based on mediastinal anatomy, which other structures might also be affected?',
  'Un pacient are o tumoră în mediastin care comprimă esofagul. Pe baza anatomiei mediastinului, care alte structuri ar putea fi de asemenea afectate?',
  '["Only structures in the abdominal cavity","The trachea, great vessels, and nerves passing through the mediastinum","Only the diaphragm","Structures in the cranial cavity","Only the lungs"]'::jsonb,
  '["Doar structuri din cavitatea abdominală","Traheea, vasele mari și nervii care trec prin mediastin","Doar diafragma","Structuri din cavitatea craniană","Doar plămânii"]'::jsonb,
  1,
  'The mediastinum contains the heart, great vessels (aorta, venae cavae), trachea, esophagus, and various nerves (vagus, phrenic) in close proximity.',
  'Mediastinul conține inima, vasele mari (aorta, venele cave), traheea, esofagul și diferiți nervi (vag, frenic) în proximitate apropiată.',
  'intro-anatomy',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro94',
  'med-admission-barrons',
  'hard',
  'Which homeostatic mechanism primarily uses rapid electrical signals for communication?',
  'Care mecanism homeostatic folosește în principal semnale electrice rapide pentru comunicare?',
  '["Endocrine regulation","Nervous system regulation","Humoral immunity","Hormonal feedback","Paracrine signaling"]'::jsonb,
  '["Reglarea endocrină","Reglarea sistemului nervos","Imunitatea umorală","Feedback-ul hormonal","Semnalizarea paracrină"]'::jsonb,
  1,
  'The nervous system uses rapid electrical impulses (action potentials) along neurons for fast communication, while the endocrine system uses slower hormonal signaling.',
  'Sistemul nervos folosește impulsuri electrice rapide (potențiale de acțiune) de-a lungul neuronilor pentru comunicare rapidă, în timp ce sistemul endocrin folosește semnalizare hormonală mai lentă.',
  'intro-anatomy',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro95',
  'med-admission-barrons',
  'hard',
  'During surgical planning, why is it important to know whether an abdominal organ is intraperitoneal or retroperitoneal?',
  'În planificarea chirurgicală, de ce este important să știm dacă un organ abdominal este intraperitoneal sau retroperitoneal?',
  '["It has no surgical relevance","It determines the surgical approach and risk of peritoneal contamination","Only intraperitoneal organs can be operated on","Retroperitoneal organs cannot be accessed surgically","It only matters for imaging, not surgery"]'::jsonb,
  '["Nu are relevanță chirurgicală","Determină abordarea chirurgicală și riscul de contaminare peritoneală","Doar organele intraperitoneale pot fi operate","Organele retroperitoneale nu pot fi accesate chirurgical","Contează doar pentru imagistică, nu pentru chirurgie"]'::jsonb,
  1,
  'The position relative to peritoneum affects surgical access, potential for peritonitis, and handling of the organ during procedures.',
  'Poziția relativă la peritoneu afectează accesul chirurgical, potențialul de peritonită și manipularea organului în timpul procedurilor.',
  'intro-anatomy',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro96',
  'med-admission-barrons',
  'hard',
  'Which physiological parameter requires the most precise homeostatic control for survival?',
  'Care parametru fiziologic necesită cel mai precis control homeostatic pentru supraviețuire?',
  '["Blood pH","Hair growth rate","Skin color","Fingernail length","Ear wax production"]'::jsonb,
  '["pH-ul sângelui","Rata de creștere a părului","Culoarea pielii","Lungimea unghiilor","Producția de cerumen"]'::jsonb,
  0,
  'Blood pH must remain within a very narrow range (7.35-7.45); deviations cause life-threatening acidosis or alkalosis affecting enzyme function and cellular processes.',
  'pH-ul sângelui trebuie să rămână într-un interval foarte îngust (7,35-7,45); abaterile cauzează acidoză sau alcaloză care pune viața în pericol, afectând funcția enzimelor și procesele celulare.',
  'intro-anatomy',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro97',
  'med-admission-barrons',
  'hard',
  'In anatomical terminology, what does the term "oblique" describe when referring to body planes?',
  'În terminologia anatomică, ce descrie termenul „oblic" când se referă la planurile corpului?',
  '["A plane parallel to the ground","A plane perpendicular to the long axis","A plane that passes through the body at an angle other than 90° to any of the three standard planes","A plane dividing the body into equal halves","A plane through the midline only"]'::jsonb,
  '["Un plan paralel cu solul","Un plan perpendicular pe axul lung","Un plan care trece prin corp la un unghi diferit de 90° față de oricare dintre cele trei planuri standard","Un plan care împarte corpul în jumătăți egale","Un plan doar prin linia mediană"]'::jsonb,
  2,
  'An oblique plane passes through the body at an angle that is not parallel to any of the three standard planes (sagittal, frontal, transverse).',
  'Un plan oblic trece prin corp la un unghi care nu este paralel cu niciunul dintre cele trei planuri standard (sagital, frontal, transversal).',
  'intro-anatomy',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro98',
  'med-admission-barrons',
  'hard',
  'A researcher is studying the development of the digestive tract lining. Which embryonic germ layer should be the focus?',
  'Un cercetător studiază dezvoltarea mucoasei tractului digestiv. Pe care strat germinativ embrionar ar trebui să se concentreze?',
  '["Ectoderm","Mesoderm","Endoderm","Neural crest","Amnion"]'::jsonb,
  '["Ectoderm","Mezoderm","Endoderm","Creasta neurală","Amnion"]'::jsonb,
  2,
  'The endoderm gives rise to the epithelial lining of the digestive tract, respiratory tract, and associated glands.',
  'Endodermul dă naștere căptușelii epiteliale a tractului digestiv, tractului respirator și glandelor asociate.',
  'intro-anatomy',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro99',
  'med-admission-barrons',
  'hard',
  'During a clinical examination, the physician palpates McBurney''s point. What is being assessed and where is this point located?',
  'În timpul unui examen clinic, medicul palpează punctul McBurney. Ce este evaluat și unde este situat acest punct?',
  '["Heart apex; left fifth intercostal space","Appendix location; right lower quadrant, one-third the distance from ASIS to umbilicus","Liver edge; right hypochondriac region","Spleen; left hypochondriac region","Kidney; posterior lumbar region"]'::jsonb,
  '["Apexul inimii; al cincilea spațiu intercostal stâng","Locația apendicelui; cadranul inferior drept, la o treime din distanța de la SIAS la buric","Marginea ficatului; regiunea hipocondriacă dreaptă","Splina; regiunea hipocondriacă stângă","Rinichiul; regiunea lombară posterioară"]'::jsonb,
  1,
  'McBurney''s point is used to assess for appendicitis, located one-third of the way from the anterior superior iliac spine (ASIS) to the umbilicus.',
  'Punctul McBurney este folosit pentru a evalua apendicita, situat la o treime din distanța de la spina iliacă antero-superioară (SIAS) la buric.',
  'intro-anatomy',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'intro100',
  'med-admission-barrons',
  'hard',
  'Which of the following correctly describes how the principle of hierarchy applies to human body organization?',
  'Care dintre următoarele descrie corect cum se aplică principiul ierarhiei la organizarea corpului uman?',
  '["Each level of organization functions independently without influencing other levels","Higher levels of organization emerge from and depend on the proper functioning of lower levels","Only the organism level is functionally important","Cells are the highest level of organization","Organ systems can function normally even if their organs fail"]'::jsonb,
  '["Fiecare nivel de organizare funcționează independent fără a influența alte niveluri","Nivelurile superioare de organizare apar din și depind de funcționarea corectă a nivelurilor inferioare","Doar nivelul de organism este important funcțional","Celulele sunt cel mai înalt nivel de organizare","Sistemele de organe pot funcționa normal chiar dacă organele lor eșuează"]'::jsonb,
  1,
  'The hierarchical principle means that each level builds upon the lower level; if cells malfunction, tissues fail, which affects organs, and ultimately the entire organism.',
  'Principiul ierarhic înseamnă că fiecare nivel se construiește pe nivelul inferior; dacă celulele funcționează defectuos, țesuturile eșuează, ceea ce afectează organele și în final întregul organism.',
  'intro-anatomy',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;


-- ============================================
-- CAPITOL: Bazele chimice ale corpului uman
-- ID: chemistry
-- ============================================

-- Set 1 (Easy)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem1',
  'med-admission-barrons',
  'easy',
  'Which subatomic particles are found in the nucleus of an atom?',
  'Care particule subatomice se găsesc în nucleul unui atom?',
  '["Electrons only","Protons and neutrons","Protons and electrons","Neutrons and electrons","Electrons, protons, and neutrons"]'::jsonb,
  '["Doar electronii","Protonii și neutronii","Protonii și electronii","Neutronii și electronii","Electronii, protonii și neutronii"]'::jsonb,
  1,
  'The nucleus contains protons (positive charge) and neutrons (neutral). Electrons orbit outside the nucleus.',
  'Nucleul conține protonii (sarcină pozitivă) și neutronii (neutri). Electronii orbitează în afara nucleului.',
  'chemistry',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem2',
  'med-admission-barrons',
  'easy',
  'What type of chemical bond is formed when electrons are shared between two atoms?',
  'Ce tip de legătură chimică se formează când electronii sunt împărțiți între doi atomi?',
  '["Ionic bond","Covalent bond","Hydrogen bond","Van der Waals force","Metallic bond"]'::jsonb,
  '["Legătură ionică","Legătură covalentă","Legătură de hidrogen","Forță Van der Waals","Legătură metalică"]'::jsonb,
  1,
  'A covalent bond involves the sharing of electron pairs between atoms; it is common in organic molecules.',
  'Legătura covalentă implică împărțirea perechilor de electroni între atomi; este frecventă în moleculele organice.',
  'chemistry',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem3',
  'med-admission-barrons',
  'easy',
  'Which pH value represents a neutral solution at body temperature?',
  'Care valoare de pH reprezintă o soluție neutră la temperatura corpului?',
  '["pH 0","pH 7","pH 14","pH 5","pH 9"]'::jsonb,
  '["pH 0","pH 7","pH 14","pH 5","pH 9"]'::jsonb,
  1,
  'A pH of 7 is neutral (equal concentrations of H⁺ and OH⁻). Values below 7 are acidic; above 7 are basic.',
  'Un pH de 7 este neutru (concentrații egale de H⁺ și OH⁻). Valorile sub 7 sunt acide; peste 7 sunt bazice.',
  'chemistry',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem4',
  'med-admission-barrons',
  'medium',
  'Which of the following is an organic compound that is a key building block of the body?',
  'Care dintre următoarele este un compus organic care este un component esențial al corpului?',
  '["Sodium chloride","Water","Glucose","Oxygen gas","Calcium carbonate"]'::jsonb,
  '["Clorură de sodiu","Apă","Glucoză","Oxigen gazos","Carbonat de calciu"]'::jsonb,
  2,
  'Organic compounds contain carbon and are produced by living systems. Glucose is a carbohydrate and a key energy source.',
  'Compușii organici conțin carbon și sunt produși de sistemele vii. Glucoza este un glucid și o sursă importantă de energie.',
  'chemistry',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem5',
  'med-admission-barrons',
  'medium',
  'What is the primary role of a buffer in body fluids?',
  'Care este rolul principal al unui tampon în fluidele corpului?',
  '["To increase the rate of chemical reactions","To resist changes in pH when acid or base is added","To transport oxygen in the blood","To store energy","To catalyze metabolic reactions"]'::jsonb,
  '["Creșterea vitezei reacțiilor chimice","Rezistența la schimbări de pH când se adaugă acid sau bază","Transportul oxigenului în sânge","Stocarea energiei","Catalizarea reacțiilor metabolice"]'::jsonb,
  1,
  'Buffers are substances that minimize changes in pH by accepting or donating H⁺, helping maintain a stable internal environment.',
  'Tamponii sunt substanțe care minimizează schimbările de pH acceptând sau cedând H⁺, menținând un mediu intern stabil.',
  'chemistry',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem6',
  'med-admission-barrons',
  'medium',
  'Which statement about enzymes is correct?',
  'Care afirmație despre enzime este corectă?',
  '["Enzymes are consumed and permanently changed in the reactions they catalyze","Enzymes lower the activation energy of reactions and are not consumed","Enzymes work best at extreme pH values","Enzymes are only involved in catabolic reactions","Enzymes provide the energy required for reactions to occur"]'::jsonb,
  '["Enzimele sunt consumate și modificate permanent în reacțiile pe care le catalizează","Enzimele scad energia de activare a reacțiilor și nu sunt consumate","Enzimele funcționează cel mai bine la valori extreme de pH","Enzimele sunt implicate doar în reacții catabolice","Enzimele furnizează energia necesară pentru ca reacțiile să aibă loc"]'::jsonb,
  1,
  'Enzymes are biological catalysts that speed up reactions by lowering activation energy; they are regenerated and not used up.',
  'Enzimele sunt catalizatori biologici care accelerează reacțiile scăzând energia de activare; sunt regenerate și nu se consumă.',
  'chemistry',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem7',
  'med-admission-barrons',
  'medium',
  'Which type of molecule is the main component of cell membranes?',
  'Care tip de moleculă este componenta principală a membranelor celulare?',
  '["Nucleic acids","Carbohydrates","Phospholipids","Proteins only","Monosaccharides"]'::jsonb,
  '["Acizi nucleici","Glucide","Fosfolipide","Doar proteine","Monozaharide"]'::jsonb,
  2,
  'Phospholipids form the lipid bilayer of cell membranes, with hydrophilic heads facing outward and hydrophobic tails inward.',
  'Fosfolipidele formează bilayerul lipidic al membranelor celulare, cu capetele hidrofile spre exterior și cozile hidrofobe spre interior.',
  'chemistry',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem8',
  'med-admission-barrons',
  'hard',
  'Which process describes the breakdown of a large molecule into smaller ones with the release of water?',
  'Care proces descrie descompunerea unei molecule mari în molecule mai mici cu eliberare de apă?',
  '["Dehydration synthesis","Hydrolysis","Oxidation","Reduction","Phosphorylation"]'::jsonb,
  '["Sinteză prin deshidratare","Hidroliză","Oxidare","Reducere","Fosforilare"]'::jsonb,
  1,
  'Hydrolysis uses water to break bonds in large molecules (e.g., digestion of polymers into monomers).',
  'Hidroliza folosește apa pentru a rupe legăturile în molecule mari (ex. digestia polimerilor în monomeri).',
  'chemistry',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem9',
  'med-admission-barrons',
  'hard',
  'Which property of water is most important for its role as a solvent in biological systems?',
  'Care proprietate a apei este cea mai importantă pentru rolul ei de solvent în sistemele biologice?',
  '["Low specific heat capacity","Polarity and ability to form hydrogen bonds","Low density as ice","High viscosity","Opacity to ultraviolet light"]'::jsonb,
  '["Capacitate termică specifică scăzută","Polaritate și capacitatea de a forma legături de hidrogen","Densitate scăzută ca gheață","Vâscozitate mare","Opacitate la lumina ultravioletă"]'::jsonb,
  1,
  'Water is polar and forms hydrogen bonds, allowing it to dissolve many ions and polar molecules, making it the universal solvent in biology.',
  'Apa este polară și formează legături de hidrogen, ceea ce îi permite să dizolve mulți ioni și molecule polare, fiind solventul universal în biologie.',
  'chemistry',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem10',
  'med-admission-barrons',
  'hard',
  'Which element is present in all organic compounds?',
  'Care element este prezent în toți compușii organici?',
  '["Nitrogen","Hydrogen","Carbon","Oxygen","Phosphorus"]'::jsonb,
  '["Azot","Hidrogen","Carbon","Oxigen","Fosfor"]'::jsonb,
  2,
  'Organic chemistry is the study of carbon-containing compounds. Carbon''s ability to form four covalent bonds allows great diversity of molecules.',
  'Chimia organică studiază compușii care conțin carbon. Capacitatea carbonului de a forma patru legături covalente permite o mare diversitate de molecule.',
  'chemistry',
  1
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 2 (Easy)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem11',
  'med-admission-barrons',
  'easy',
  'What is the smallest unit of matter that retains the properties of an element?',
  'Care este cea mai mică unitate de materie care păstrează proprietățile unui element?',
  '["Molecule","Compound","Atom","Electron","Cell"]'::jsonb,
  '["Moleculă","Compus","Atom","Electron","Celulă"]'::jsonb,
  2,
  'An atom is the smallest unit of matter that retains the chemical properties of an element.',
  'Atomul este cea mai mică unitate de materie care păstrează proprietățile chimice ale unui element.',
  'chemistry',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem12',
  'med-admission-barrons',
  'easy',
  'Which subatomic particle has a negative charge?',
  'Care particulă subatomică are sarcină negativă?',
  '["Proton","Neutron","Electron","Nucleus","Isotope"]'::jsonb,
  '["Proton","Neutron","Electron","Nucleu","Izotop"]'::jsonb,
  2,
  'Electrons are negatively charged particles that orbit the nucleus of an atom.',
  'Electronii sunt particule încărcate negativ care orbitează în jurul nucleului unui atom.',
  'chemistry',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem13',
  'med-admission-barrons',
  'easy',
  'What type of bond forms when atoms share electrons?',
  'Ce tip de legătură se formează când atomii împart electroni?',
  '["Ionic bond","Covalent bond","Hydrogen bond","Metallic bond","Van der Waals bond"]'::jsonb,
  '["Legătură ionică","Legătură covalentă","Legătură de hidrogen","Legătură metalică","Legătură Van der Waals"]'::jsonb,
  1,
  'Covalent bonds form when atoms share one or more pairs of electrons.',
  'Legăturile covalente se formează când atomii împart una sau mai multe perechi de electroni.',
  'chemistry',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem14',
  'med-admission-barrons',
  'easy',
  'Water (H₂O) is an example of which type of compound?',
  'Apa (H₂O) este un exemplu de ce tip de compus?',
  '["Organic compound","Inorganic compound","Hydrocarbon","Protein","Carbohydrate"]'::jsonb,
  '["Compus organic","Compus anorganic","Hidrocarbură","Proteină","Carbohidrat"]'::jsonb,
  1,
  'Water is an inorganic compound because it does not contain carbon-carbon bonds or carbon-hydrogen bonds characteristic of organic molecules.',
  'Apa este un compus anorganic deoarece nu conține legături carbon-carbon sau carbon-hidrogen caracteristice moleculelor organice.',
  'chemistry',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem15',
  'med-admission-barrons',
  'easy',
  'What is the pH of a neutral solution?',
  'Care este pH-ul unei soluții neutre?',
  '["0","5","7","10","14"]'::jsonb,
  '["0","5","7","10","14"]'::jsonb,
  2,
  'A neutral solution has a pH of 7, indicating equal concentrations of hydrogen ions (H⁺) and hydroxide ions (OH⁻).',
  'O soluție neutră are un pH de 7, indicând concentrații egale de ioni de hidrogen (H⁺) și ioni de hidroxid (OH⁻).',
  'chemistry',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem16',
  'med-admission-barrons',
  'easy',
  'Which of the following is the most abundant element in the human body by mass?',
  'Care dintre următoarele este cel mai abundent element în corpul uman după masă?',
  '["Carbon","Hydrogen","Oxygen","Nitrogen","Calcium"]'::jsonb,
  '["Carbon","Hidrogen","Oxigen","Azot","Calciu"]'::jsonb,
  2,
  'Oxygen makes up about 65% of body mass, primarily because it is a component of water, which constitutes about 60% of body weight.',
  'Oxigenul reprezintă aproximativ 65% din masa corpului, în principal pentru că este o componentă a apei, care constituie aproximativ 60% din greutatea corporală.',
  'chemistry',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem17',
  'med-admission-barrons',
  'easy',
  'Substances that release hydrogen ions (H⁺) in solution are called:',
  'Substanțele care eliberează ioni de hidrogen (H⁺) în soluție se numesc:',
  '["Bases","Salts","Acids","Buffers","Enzymes"]'::jsonb,
  '["Baze","Săruri","Acizi","Tampoane","Enzime"]'::jsonb,
  2,
  'Acids are substances that dissociate in water to release hydrogen ions (H⁺), increasing the acidity of the solution.',
  'Acizii sunt substanțe care se disociază în apă pentru a elibera ioni de hidrogen (H⁺), crescând aciditatea soluției.',
  'chemistry',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem18',
  'med-admission-barrons',
  'easy',
  'What type of bond is formed between a hydrogen atom and an oxygen atom in another water molecule?',
  'Ce tip de legătură se formează între un atom de hidrogen și un atom de oxigen din altă moleculă de apă?',
  '["Ionic bond","Covalent bond","Hydrogen bond","Peptide bond","Glycosidic bond"]'::jsonb,
  '["Legătură ionică","Legătură covalentă","Legătură de hidrogen","Legătură peptidică","Legătură glicozidică"]'::jsonb,
  2,
  'Hydrogen bonds are weak attractions between a hydrogen atom bonded to an electronegative atom (like O or N) and another electronegative atom.',
  'Legăturile de hidrogen sunt atracții slabe între un atom de hidrogen legat de un atom electronegativ (precum O sau N) și un alt atom electronegativ.',
  'chemistry',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem19',
  'med-admission-barrons',
  'easy',
  'Which type of macromolecule includes sugars and starches?',
  'Ce tip de macromoleculă include zaharuri și amidon?',
  '["Proteins","Lipids","Carbohydrates","Nucleic acids","Vitamins"]'::jsonb,
  '["Proteine","Lipide","Carbohidrați","Acizi nucleici","Vitamine"]'::jsonb,
  2,
  'Carbohydrates include simple sugars (monosaccharides like glucose), disaccharides (like sucrose), and polysaccharides (like starch and glycogen).',
  'Carbohidrații includ zaharuri simple (monozaharide precum glucoza), dizaharide (precum zaharoza) și polizaharide (precum amidonul și glicogenul).',
  'chemistry',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem20',
  'med-admission-barrons',
  'easy',
  'The atomic number of an element indicates the number of:',
  'Numărul atomic al unui element indică numărul de:',
  '["Neutrons in the nucleus","Protons in the nucleus","Electrons in the outer shell only","Total particles in the atom","Chemical bonds it can form"]'::jsonb,
  '["Neutroni în nucleu","Protoni în nucleu","Electroni doar în învelișul exterior","Particule totale în atom","Legături chimice pe care le poate forma"]'::jsonb,
  1,
  'The atomic number equals the number of protons in an atom''s nucleus, which determines the element''s identity.',
  'Numărul atomic este egal cu numărul de protoni din nucleul atomului, care determină identitatea elementului.',
  'chemistry',
  2
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 3 (Easy)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem21',
  'med-admission-barrons',
  'easy',
  'Which element is a major component of proteins and nucleic acids but NOT carbohydrates?',
  'Care element este o componentă majoră a proteinelor și acizilor nucleici dar NU a carbohidraților?',
  '["Carbon","Hydrogen","Oxygen","Nitrogen","Sulfur"]'::jsonb,
  '["Carbon","Hidrogen","Oxigen","Azot","Sulf"]'::jsonb,
  3,
  'Nitrogen is a key component of amino acids (proteins) and nucleotides (nucleic acids) but is not found in carbohydrates.',
  'Azotul este o componentă cheie a aminoacizilor (proteine) și nucleotidelor (acizi nucleici) dar nu se găsește în carbohidrați.',
  'chemistry',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem22',
  'med-admission-barrons',
  'easy',
  'Which property of water allows it to absorb large amounts of heat without significant temperature change?',
  'Care proprietate a apei îi permite să absoarbă cantități mari de căldură fără o schimbare semnificativă de temperatură?',
  '["Low surface tension","High specific heat capacity","Low density","High chemical reactivity","Low polarity"]'::jsonb,
  '["Tensiune superficială scăzută","Capacitate calorică specifică mare","Densitate scăzută","Reactivitate chimică mare","Polaritate scăzută"]'::jsonb,
  1,
  'Water has a high specific heat capacity due to hydrogen bonding, allowing it to absorb or release heat with minimal temperature change.',
  'Apa are o capacitate calorică specifică mare datorită legăturilor de hidrogen, permițându-i să absoarbă sau să elibereze căldură cu o schimbare minimă de temperatură.',
  'chemistry',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem23',
  'med-admission-barrons',
  'easy',
  'What is the primary function of ATP in cells?',
  'Care este funcția principală a ATP-ului în celule?',
  '["Storing genetic information","Building proteins","Providing energy for cellular activities","Transporting oxygen","Forming cell membranes"]'::jsonb,
  '["Stocarea informației genetice","Construirea proteinelor","Furnizarea energiei pentru activitățile celulare","Transportul oxigenului","Formarea membranelor celulare"]'::jsonb,
  2,
  'ATP (adenosine triphosphate) is the primary energy currency of cells, releasing energy when its phosphate bonds are broken.',
  'ATP (adenozin trifosfat) este principala monedă energetică a celulelor, eliberând energie când legăturile sale de fosfat sunt rupte.',
  'chemistry',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem24',
  'med-admission-barrons',
  'easy',
  'Isotopes of an element differ in the number of:',
  'Izotopii unui element diferă în numărul de:',
  '["Protons","Electrons","Neutrons","Electron shells","Chemical bonds"]'::jsonb,
  '["Protoni","Electroni","Neutroni","Învelișuri de electroni","Legături chimice"]'::jsonb,
  2,
  'Isotopes are atoms of the same element (same proton number) that have different numbers of neutrons, giving them different mass numbers.',
  'Izotopii sunt atomi ai aceluiași element (același număr de protoni) care au numere diferite de neutroni, conferindu-le numere de masă diferite.',
  'chemistry',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem25',
  'med-admission-barrons',
  'easy',
  'What is the building block (monomer) of proteins?',
  'Care este unitatea de bază (monomerul) proteinelor?',
  '["Nucleotide","Monosaccharide","Amino acid","Fatty acid","Glycerol"]'::jsonb,
  '["Nucleotidă","Monozaharidă","Aminoacid","Acid gras","Glicerol"]'::jsonb,
  2,
  'Proteins are polymers made of amino acids linked together by peptide bonds.',
  'Proteinele sunt polimeri formați din aminoacizi legați între ei prin legături peptidice.',
  'chemistry',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem26',
  'med-admission-barrons',
  'easy',
  'Which type of lipid forms the basic structure of cell membranes?',
  'Ce tip de lipid formează structura de bază a membranelor celulare?',
  '["Triglyceride","Phospholipid","Steroid","Wax","Fatty acid"]'::jsonb,
  '["Trigliceridă","Fosfolipid","Steroid","Ceară","Acid gras"]'::jsonb,
  1,
  'Phospholipids have a hydrophilic head and hydrophobic tails, forming the bilayer structure of cell membranes.',
  'Fosfolipidele au un cap hidrofil și cozi hidrofobe, formând structura bistrată a membranelor celulare.',
  'chemistry',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem27',
  'med-admission-barrons',
  'easy',
  'A solution with a pH of 3 is considered:',
  'O soluție cu un pH de 3 este considerată:',
  '["Neutral","Weakly acidic","Strongly acidic","Basic (alkaline)","Strongly basic"]'::jsonb,
  '["Neutră","Slab acidă","Puternic acidă","Bazică (alcalină)","Puternic bazică"]'::jsonb,
  2,
  'A pH of 3 is strongly acidic (pH below 7 is acidic; the lower the pH, the more acidic the solution).',
  'Un pH de 3 este puternic acid (pH-ul sub 7 este acid; cu cât pH-ul este mai scăzut, cu atât soluția este mai acidă).',
  'chemistry',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem28',
  'med-admission-barrons',
  'easy',
  'Which macromolecule stores and transmits genetic information?',
  'Care macromoleculă stochează și transmite informația genetică?',
  '["Carbohydrates","Lipids","Proteins","Nucleic acids","Steroids"]'::jsonb,
  '["Carbohidrați","Lipide","Proteine","Acizi nucleici","Steroizi"]'::jsonb,
  3,
  'Nucleic acids (DNA and RNA) store and transmit genetic information that directs protein synthesis.',
  'Acizii nucleici (ADN și ARN) stochează și transmit informația genetică care dirijează sinteza proteinelor.',
  'chemistry',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem29',
  'med-admission-barrons',
  'easy',
  'When an ionic bond forms, what happens to electrons?',
  'Când se formează o legătură ionică, ce se întâmplă cu electronii?',
  '["They are shared equally between atoms","They are transferred from one atom to another","They remain in their original positions","They are destroyed","They create new neutrons"]'::jsonb,
  '["Sunt împărtășiți egal între atomi","Sunt transferați de la un atom la altul","Rămân în pozițiile lor originale","Sunt distruși","Creează neutroni noi"]'::jsonb,
  1,
  'In ionic bonds, electrons are transferred from one atom to another, creating oppositely charged ions that attract each other.',
  'În legăturile ionice, electronii sunt transferați de la un atom la altul, creând ioni cu sarcini opuse care se atrag reciproc.',
  'chemistry',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem30',
  'med-admission-barrons',
  'easy',
  'Which of the following is a monosaccharide?',
  'Care dintre următoarele este o monozaharidă?',
  '["Sucrose","Lactose","Glucose","Starch","Cellulose"]'::jsonb,
  '["Zaharoză","Lactoză","Glucoză","Amidon","Celuloză"]'::jsonb,
  2,
  'Glucose is a monosaccharide (simple sugar), the primary energy source for cells. Sucrose and lactose are disaccharides; starch and cellulose are polysaccharides.',
  'Glucoza este o monozaharidă (zahăr simplu), sursa primară de energie pentru celule. Zaharoza și lactoza sunt dizaharide; amidonul și celuloza sunt polizaharide.',
  'chemistry',
  3
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 4 (Medium)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem31',
  'med-admission-barrons',
  'easy',
  'Enzymes are biological catalysts made primarily of:',
  'Enzimele sunt catalizatori biologici formați în principal din:',
  '["Carbohydrates","Lipids","Proteins","Nucleic acids","Minerals"]'::jsonb,
  '["Carbohidrați","Lipide","Proteine","Acizi nucleici","Minerale"]'::jsonb,
  2,
  'Enzymes are proteins that catalyze (speed up) biochemical reactions by lowering activation energy.',
  'Enzimele sunt proteine care catalizează (accelerează) reacțiile biochimice prin scăderea energiei de activare.',
  'chemistry',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem32',
  'med-admission-barrons',
  'easy',
  'What does the term "hydrophobic" mean?',
  'Ce înseamnă termenul „hidrofob"?',
  '["Water-loving","Water-fearing (repels water)","Acid-producing","Base-neutralizing","Heat-absorbing"]'::jsonb,
  '["Care iubește apa","Care se teme de apă (respinge apa)","Care produce acid","Care neutralizează baze","Care absoarbe căldură"]'::jsonb,
  1,
  'Hydrophobic means "water-fearing" – hydrophobic substances do not mix well with water (e.g., oils and fats).',
  'Hidrofob înseamnă „care se teme de apă" – substanțele hidrofobe nu se amestecă bine cu apa (ex. uleiuri și grăsimi).',
  'chemistry',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem33',
  'med-admission-barrons',
  'easy',
  'Which mineral is essential for proper nerve and muscle function and is often found in bones?',
  'Care mineral este esențial pentru funcționarea corectă a nervilor și mușchilor și se găsește adesea în oase?',
  '["Iron","Calcium","Iodine","Zinc","Copper"]'::jsonb,
  '["Fier","Calciu","Iod","Zinc","Cupru"]'::jsonb,
  1,
  'Calcium is crucial for muscle contraction, nerve impulse transmission, blood clotting, and forms the mineral matrix of bones and teeth.',
  'Calciul este crucial pentru contracția musculară, transmiterea impulsurilor nervoase, coagularea sângelui și formează matricea minerală a oaselor și dinților.',
  'chemistry',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem34',
  'med-admission-barrons',
  'easy',
  'A dehydration synthesis reaction:',
  'O reacție de sinteză prin deshidratare:',
  '["Breaks large molecules into smaller ones by adding water","Combines smaller molecules while releasing water","Produces ATP directly","Only occurs at high temperatures","Requires oxygen"]'::jsonb,
  '["Descompune moleculele mari în altele mai mici prin adăugare de apă","Combină molecule mai mici eliberând apă","Produce ATP direct","Are loc doar la temperaturi ridicate","Necesită oxigen"]'::jsonb,
  1,
  'Dehydration synthesis (condensation) joins monomers together while removing a water molecule, forming polymers.',
  'Sinteza prin deshidratare (condensare) unește monomerii eliminând o moleculă de apă, formând polimeri.',
  'chemistry',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem35',
  'med-admission-barrons',
  'easy',
  'Cholesterol is an example of what type of lipid?',
  'Colesterolul este un exemplu de ce tip de lipid?',
  '["Triglyceride","Phospholipid","Steroid","Wax","Omega-3 fatty acid"]'::jsonb,
  '["Trigliceridă","Fosfolipid","Steroid","Ceară","Acid gras omega-3"]'::jsonb,
  2,
  'Cholesterol is a steroid lipid that is a component of cell membranes and a precursor for steroid hormones and vitamin D.',
  'Colesterolul este o lipidă steroidică care este o componentă a membranelor celulare și un precursor pentru hormonii steroizi și vitamina D.',
  'chemistry',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem36',
  'med-admission-barrons',
  'easy',
  'Which of the following correctly describes a polar molecule?',
  'Care dintre următoarele descrie corect o moleculă polară?',
  '["It has an even distribution of electrical charge","It has uneven distribution of electrical charge with partial positive and negative regions","It cannot dissolve in water","It only contains carbon and hydrogen","It has no covalent bonds"]'::jsonb,
  '["Are o distribuție uniformă a sarcinii electrice","Are o distribuție neuniformă a sarcinii electrice cu regiuni parțial pozitive și negative","Nu se poate dizolva în apă","Conține doar carbon și hidrogen","Nu are legături covalente"]'::jsonb,
  1,
  'Polar molecules have an unequal distribution of electrons, creating regions of partial positive and negative charge. Water is a classic polar molecule.',
  'Moleculele polare au o distribuție inegală a electronilor, creând regiuni cu sarcină parțial pozitivă și negativă. Apa este o moleculă polară clasică.',
  'chemistry',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem37',
  'med-admission-barrons',
  'easy',
  'The four main elements that make up about 96% of body mass are:',
  'Cele patru elemente principale care alcătuiesc aproximativ 96% din masa corpului sunt:',
  '["Calcium, phosphorus, potassium, sulfur","Oxygen, carbon, hydrogen, nitrogen","Sodium, chlorine, iron, zinc","Magnesium, iodine, copper, manganese","Oxygen, iron, calcium, sodium"]'::jsonb,
  '["Calciu, fosfor, potasiu, sulf","Oxigen, carbon, hidrogen, azot","Sodiu, clor, fier, zinc","Magneziu, iod, cupru, mangan","Oxigen, fier, calciu, sodiu"]'::jsonb,
  1,
  'Oxygen, carbon, hydrogen, and nitrogen (O, C, H, N) comprise approximately 96% of body mass, forming the basis of organic molecules and water.',
  'Oxigenul, carbonul, hidrogenul și azotul (O, C, H, N) constituie aproximativ 96% din masa corpului, formând baza moleculelor organice și a apei.',
  'chemistry',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem38',
  'med-admission-barrons',
  'easy',
  'What is the function of buffers in the body?',
  'Care este funcția tampoanelor în corp?',
  '["To speed up chemical reactions","To resist changes in pH","To store energy","To transport oxygen","To build proteins"]'::jsonb,
  '["Să accelereze reacțiile chimice","Să reziste schimbărilor de pH","Să stocheze energie","Să transporte oxigen","Să construiască proteine"]'::jsonb,
  1,
  'Buffers are chemical systems that resist changes in pH by absorbing excess hydrogen ions or releasing them as needed.',
  'Tampoanele sunt sisteme chimice care rezistă schimbărilor de pH prin absorbția excesului de ioni de hidrogen sau eliberarea lor după necesități.',
  'chemistry',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem39',
  'med-admission-barrons',
  'easy',
  'Which nitrogenous base is found in RNA but NOT in DNA?',
  'Care bază azotată se găsește în ARN dar NU în ADN?',
  '["Adenine","Guanine","Cytosine","Uracil","Thymine"]'::jsonb,
  '["Adenină","Guanină","Citozină","Uracil","Timină"]'::jsonb,
  3,
  'Uracil (U) is found in RNA, while thymine (T) is found in DNA. Both pair with adenine.',
  'Uracilul (U) se găsește în ARN, în timp ce timina (T) se găsește în ADN. Ambele se împerechează cu adenina.',
  'chemistry',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem40',
  'med-admission-barrons',
  'easy',
  'A hydrolysis reaction involves:',
  'O reacție de hidroliză implică:',
  '["Removal of water to form bonds","Addition of water to break bonds","Loss of electrons","Gain of protons","Release of carbon dioxide"]'::jsonb,
  '["Eliminarea apei pentru a forma legături","Adăugarea apei pentru a rupe legături","Pierderea de electroni","Câștigarea de protoni","Eliberarea dioxidului de carbon"]'::jsonb,
  1,
  'Hydrolysis ("water splitting") uses water to break covalent bonds in polymers, producing smaller molecules.',
  'Hidroliza („spargerea apei") folosește apa pentru a rupe legăturile covalente din polimeri, producând molecule mai mici.',
  'chemistry',
  4
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 5 (Medium)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem41',
  'med-admission-barrons',
  'medium',
  'Which of the following best explains why water is an excellent solvent for ionic compounds?',
  'Care dintre următoarele explică cel mai bine de ce apa este un solvent excelent pentru compușii ionici?',
  '["Water has a low boiling point","Water molecules are nonpolar","Water''s polar nature allows it to surround and separate ions","Water has a low specific heat","Water cannot form hydrogen bonds"]'::jsonb,
  '["Apa are un punct de fierbere scăzut","Moleculele de apă sunt nepolare","Natura polară a apei îi permite să înconjoare și să separe ionii","Apa are o căldură specifică scăzută","Apa nu poate forma legături de hidrogen"]'::jsonb,
  2,
  'Water''s polar molecules surround ions, with the negative oxygen attracted to cations and positive hydrogens attracted to anions, effectively dissolving ionic compounds.',
  'Moleculele polare ale apei înconjoară ionii, cu oxigenul negativ atras de cationi și hidrogenii pozitivi atrași de anioni, dizolvând efectiv compușii ionici.',
  'chemistry',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem42',
  'med-admission-barrons',
  'medium',
  'The primary structure of a protein refers to:',
  'Structura primară a unei proteine se referă la:',
  '["The three-dimensional folded shape","The sequence of amino acids in the polypeptide chain","The interaction between multiple polypeptide subunits","Alpha helices and beta sheets","The binding of prosthetic groups"]'::jsonb,
  '["Forma tridimensională pliată","Secvența de aminoacizi în lanțul polipeptidic","Interacțiunea dintre multiple subunități polipeptidice","Helix-uri alfa și foi beta","Legarea grupurilor prostetice"]'::jsonb,
  1,
  'Primary structure is the unique linear sequence of amino acids in a protein, held together by peptide bonds.',
  'Structura primară este secvența liniară unică de aminoacizi într-o proteină, ținută împreună de legături peptidice.',
  'chemistry',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem43',
  'med-admission-barrons',
  'medium',
  'Which factor would NOT cause enzyme denaturation?',
  'Care factor NU ar cauza denaturarea enzimelor?',
  '["Extreme heat","Extreme pH changes","Optimal temperature and pH","Heavy metals","Strong detergents"]'::jsonb,
  '["Căldură extremă","Modificări extreme de pH","Temperatură și pH optime","Metale grele","Detergenți puternici"]'::jsonb,
  2,
  'Enzymes function best at optimal temperature and pH; these conditions maintain the enzyme''s proper three-dimensional structure rather than denaturing it.',
  'Enzimele funcționează cel mai bine la temperatură și pH optime; aceste condiții mențin structura tridimensională corespunzătoare a enzimei în loc să o denatureze.',
  'chemistry',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem44',
  'med-admission-barrons',
  'medium',
  'Saturated fatty acids differ from unsaturated fatty acids in that saturated fatty acids:',
  'Acizii grași saturați diferă de acizii grași nesaturați prin faptul că acizii grași saturați:',
  '["Contain double bonds between carbon atoms","Have no double bonds between carbon atoms","Are always liquid at room temperature","Are found mainly in plant oils","Have fewer hydrogen atoms"]'::jsonb,
  '["Conțin legături duble între atomii de carbon","Nu au legături duble între atomii de carbon","Sunt întotdeauna lichizi la temperatura camerei","Se găsesc în principal în uleiuri vegetale","Au mai puțini atomi de hidrogen"]'::jsonb,
  1,
  'Saturated fatty acids have no carbon-carbon double bonds, are "saturated" with hydrogen atoms, and tend to be solid at room temperature (e.g., butter).',
  'Acizii grași saturați nu au legături duble carbon-carbon, sunt „saturați" cu atomi de hidrogen și tind să fie solizi la temperatura camerei (ex. unt).',
  'chemistry',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem45',
  'med-admission-barrons',
  'medium',
  'The bicarbonate buffer system in blood helps maintain pH by:',
  'Sistemul tampon bicarbonat din sânge ajută la menținerea pH-ului prin:',
  '["Converting all acids to water","Converting H⁺ to CO₂ and water through reaction with bicarbonate","Preventing any CO₂ from entering the blood","Eliminating all hydrogen ions immediately","Producing strong acids"]'::jsonb,
  '["Convertirea tuturor acizilor în apă","Convertirea H⁺ în CO₂ și apă prin reacție cu bicarbonatul","Prevenirea intrării oricărui CO₂ în sânge","Eliminarea imediată a tuturor ionilor de hidrogen","Producerea de acizi puternici"]'::jsonb,
  1,
  'The bicarbonate buffer system: H⁺ + HCO₃⁻ ⇌ H₂CO₃ ⇌ CO₂ + H₂O. Excess H⁺ combines with bicarbonate, and the resulting CO₂ is exhaled.',
  'Sistemul tampon bicarbonat: H⁺ + HCO₃⁻ ⇌ H₂CO₃ ⇌ CO₂ + H₂O. Excesul de H⁺ se combină cu bicarbonatul, iar CO₂ rezultat este expirat.',
  'chemistry',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem46',
  'med-admission-barrons',
  'medium',
  'Which of the following represents a disaccharide?',
  'Care dintre următoarele reprezintă o dizaharidă?',
  '["Glucose","Fructose","Sucrose","Starch","Glycogen"]'::jsonb,
  '["Glucoză","Fructoză","Zaharoză","Amidon","Glicogen"]'::jsonb,
  2,
  'Sucrose (table sugar) is a disaccharide composed of glucose + fructose. Glucose and fructose are monosaccharides; starch and glycogen are polysaccharides.',
  'Zaharoza (zahărul de masă) este o dizaharidă compusă din glucoză + fructoză. Glucoza și fructoza sunt monozaharide; amidonul și glicogenul sunt polizaharide.',
  'chemistry',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem47',
  'med-admission-barrons',
  'medium',
  'What is the term for the specific location on an enzyme where the substrate binds?',
  'Care este termenul pentru locul specific de pe enzimă unde se leagă substratul?',
  '["Allosteric site","Active site","Binding domain","Cofactor pocket","Inhibitor site"]'::jsonb,
  '["Sit alosteric","Sit activ","Domeniu de legare","Buzunar de cofactor","Sit inhibitor"]'::jsonb,
  1,
  'The active site is the region on an enzyme where the substrate binds and where the catalytic reaction occurs.',
  'Situl activ este regiunea de pe enzimă unde se leagă substratul și unde are loc reacția catalitică.',
  'chemistry',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem48',
  'med-admission-barrons',
  'medium',
  'The double helix structure of DNA is stabilized primarily by:',
  'Structura dublu helix a ADN-ului este stabilizată în principal de:',
  '["Covalent bonds between base pairs","Ionic bonds between phosphate groups","Hydrogen bonds between complementary bases","Peptide bonds between nucleotides","Metallic bonds in the backbone"]'::jsonb,
  '["Legături covalente între perechile de baze","Legături ionice între grupurile fosfat","Legături de hidrogen între bazele complementare","Legături peptidice între nucleotide","Legături metalice în schelet"]'::jsonb,
  2,
  'Hydrogen bonds between complementary base pairs (A-T with 2 bonds, G-C with 3 bonds) hold the two strands of the DNA helix together.',
  'Legăturile de hidrogen între perechile de baze complementare (A-T cu 2 legături, G-C cu 3 legături) țin împreună cele două catene ale helixului ADN.',
  'chemistry',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem49',
  'med-admission-barrons',
  'medium',
  'Which element is a key component of hemoglobin and is essential for oxygen transport?',
  'Care element este o componentă cheie a hemoglobinei și este esențial pentru transportul oxigenului?',
  '["Calcium","Sodium","Potassium","Iron","Zinc"]'::jsonb,
  '["Calciu","Sodiu","Potasiu","Fier","Zinc"]'::jsonb,
  3,
  'Iron (Fe) is the central atom in the heme group of hemoglobin and myoglobin, allowing them to reversibly bind oxygen.',
  'Fierul (Fe) este atomul central în grupul hem al hemoglobinei și mioglobinei, permițându-le să lege reversibil oxigenul.',
  'chemistry',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem50',
  'med-admission-barrons',
  'medium',
  'What determines the specific function of a protein?',
  'Ce determină funcția specifică a unei proteine?',
  '["Only its mass","Only its electrical charge","Its three-dimensional shape (conformation)","The number of peptide bonds","Its location in the cell only"]'::jsonb,
  '["Doar masa sa","Doar sarcina sa electrică","Forma sa tridimensională (conformația)","Numărul de legături peptidice","Doar locația sa în celulă"]'::jsonb,
  2,
  'A protein''s function is directly related to its three-dimensional shape, which is determined by interactions between amino acids in the polypeptide chain.',
  'Funcția unei proteine este direct legată de forma sa tridimensională, care este determinată de interacțiunile dintre aminoacizi în lanțul polipeptidic.',
  'chemistry',
  5
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 6 (Medium)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem51',
  'med-admission-barrons',
  'medium',
  'Which type of chemical reaction releases energy?',
  'Ce tip de reacție chimică eliberează energie?',
  '["Endergonic reaction","Anabolic reaction","Exergonic reaction","Dehydration synthesis","Polymerization"]'::jsonb,
  '["Reacție endergonică","Reacție anabolică","Reacție exergonică","Sinteză prin deshidratare","Polimerizare"]'::jsonb,
  2,
  'Exergonic reactions release energy (are energy-yielding) and often proceed spontaneously. Catabolic reactions are typically exergonic.',
  'Reacțiile exergonice eliberează energie și adesea au loc spontan. Reacțiile catabolice sunt de obicei exergonice.',
  'chemistry',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem52',
  'med-admission-barrons',
  'medium',
  'A pH change from 7 to 5 represents a ___-fold increase in hydrogen ion concentration.',
  'O schimbare a pH-ului de la 7 la 5 reprezintă o creștere de ___ ori a concentrației de ioni de hidrogen.',
  '["2","10","20","100","1000"]'::jsonb,
  '["2","10","20","100","1000"]'::jsonb,
  3,
  'The pH scale is logarithmic; each unit change represents a 10-fold change. A change of 2 units (7→5) = 10 × 10 = 100-fold increase in H⁺.',
  'Scala pH-ului este logaritmică; fiecare unitate reprezintă o schimbare de 10 ori. O schimbare de 2 unități (7→5) = 10 × 10 = creștere de 100 de ori a H⁺.',
  'chemistry',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem53',
  'med-admission-barrons',
  'medium',
  'Which of the following is true about glycogen?',
  'Care dintre următoarele este adevărat despre glicogen?',
  '["It is a disaccharide found in milk","It is a storage polysaccharide found mainly in liver and muscle","It is the main structural component of plant cell walls","It is a monosaccharide","It is only found in plants"]'::jsonb,
  '["Este o dizaharidă găsită în lapte","Este un polizaharid de stocare găsit în principal în ficat și mușchi","Este componenta structurală principală a pereților celulari vegetali","Este o monozaharidă","Se găsește doar în plante"]'::jsonb,
  1,
  'Glycogen is the storage form of glucose in animals, primarily stored in liver and skeletal muscle cells.',
  'Glicogenul este forma de stocare a glucozei la animale, stocat în principal în celulele hepatice și musculare scheletice.',
  'chemistry',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem54',
  'med-admission-barrons',
  'medium',
  'What is the role of coenzymes in enzyme function?',
  'Care este rolul coenzimelor în funcția enzimelor?',
  '["They replace enzymes entirely","They are non-protein molecules that assist enzyme function, often derived from vitamins","They permanently bind to substrates","They inhibit enzyme activity","They provide structural support only"]'::jsonb,
  '["Înlocuiesc complet enzimele","Sunt molecule non-proteice care asistă funcția enzimelor, adesea derivate din vitamine","Se leagă permanent de substraturi","Inhibă activitatea enzimelor","Oferă doar suport structural"]'::jsonb,
  1,
  'Coenzymes are organic molecules (often vitamins or vitamin derivatives) that assist enzymes in catalyzing reactions by carrying chemical groups.',
  'Coenzimele sunt molecule organice (adesea vitamine sau derivați ai vitaminelor) care asistă enzimele în catalizarea reacțiilor prin transportul grupurilor chimice.',
  'chemistry',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem55',
  'med-admission-barrons',
  'medium',
  'Which bonds are responsible for the secondary structure of proteins?',
  'Care legături sunt responsabile pentru structura secundară a proteinelor?',
  '["Peptide bonds between amino acids","Hydrogen bonds between backbone atoms","Disulfide bonds between cysteine residues","Ionic bonds between R groups","Hydrophobic interactions"]'::jsonb,
  '["Legături peptidice între aminoacizi","Legături de hidrogen între atomii scheletului","Legături disulfurice între reziduurile de cisteină","Legături ionice între grupurile R","Interacțiuni hidrofobe"]'::jsonb,
  1,
  'Secondary structure (alpha helices and beta sheets) is formed by hydrogen bonds between the backbone amino and carboxyl groups of different amino acids.',
  'Structura secundară (helix-uri alfa și foi beta) este formată de legături de hidrogen între grupurile amino și carboxil ale scheletului diferitelor aminoacizi.',
  'chemistry',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem56',
  'med-admission-barrons',
  'medium',
  'When comparing DNA and RNA, which statement is correct?',
  'Când comparăm ADN și ARN, care afirmație este corectă?',
  '["DNA contains ribose; RNA contains deoxyribose","DNA is single-stranded; RNA is double-stranded","DNA contains thymine; RNA contains uracil","DNA is found only in the cytoplasm","RNA contains the sugar-phosphate backbone; DNA does not"]'::jsonb,
  '["ADN conține riboză; ARN conține dezoxiriboză","ADN este monocatenar; ARN este bicatenar","ADN conține timină; ARN conține uracil","ADN se găsește doar în citoplasmă","ARN conține scheletul zahăr-fosfat; ADN nu"]'::jsonb,
  2,
  'DNA uses thymine (T) and deoxyribose sugar; RNA uses uracil (U) and ribose sugar. Both have sugar-phosphate backbones.',
  'ADN folosește timină (T) și zahăr dezoxiriboză; ARN folosește uracil (U) și zahăr riboză. Ambele au schelete zahăr-fosfat.',
  'chemistry',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem57',
  'med-admission-barrons',
  'medium',
  'What is the significance of the electronegative oxygen atom in water molecules?',
  'Care este semnificația atomului de oxigen electronegativ în moleculele de apă?',
  '["It makes water nonpolar","It causes water to have a negative charge overall","It creates the partial charges that make water polar and allow hydrogen bonding","It prevents water from dissolving salts","It increases water''s boiling point by making covalent bonds stronger"]'::jsonb,
  '["Face apa nepolară","Face ca apa să aibă o sarcină negativă în ansamblu","Creează sarcinile parțiale care fac apa polară și permit legăturile de hidrogen","Împiedică apa să dizolve sărurile","Crește punctul de fierbere al apei făcând legăturile covalente mai puternice"]'::jsonb,
  2,
  'Oxygen''s high electronegativity pulls electrons closer, creating a partial negative charge on oxygen and partial positive charges on hydrogens, making water polar.',
  'Electronegativitatea mare a oxigenului atrage electronii mai aproape, creând o sarcină parțial negativă pe oxigen și sarcini parțial pozitive pe hidrogeni, făcând apa polară.',
  'chemistry',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem58',
  'med-admission-barrons',
  'medium',
  'Which of the following functions is NOT performed by proteins?',
  'Care dintre următoarele funcții NU este îndeplinită de proteine?',
  '["Catalyzing biochemical reactions (enzymes)","Providing structural support (collagen)","Transporting substances (hemoglobin)","Storing genetic information","Defending against pathogens (antibodies)"]'::jsonb,
  '["Catalizarea reacțiilor biochimice (enzime)","Oferirea de suport structural (colagen)","Transportul substanțelor (hemoglobină)","Stocarea informației genetice","Apărarea împotriva agenților patogeni (anticorpi)"]'::jsonb,
  3,
  'Storing genetic information is the function of nucleic acids (DNA and RNA), not proteins.',
  'Stocarea informației genetice este funcția acizilor nucleici (ADN și ARN), nu a proteinelor.',
  'chemistry',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem59',
  'med-admission-barrons',
  'medium',
  'Triglycerides are composed of:',
  'Trigliceridele sunt compuse din:',
  '["Three glucose molecules and one glycerol","Three fatty acids and one glycerol","Three amino acids and one phosphate","Three nucleotides and one ribose","Three steroids and one alcohol"]'::jsonb,
  '["Trei molecule de glucoză și un glicerol","Trei acizi grași și un glicerol","Trei aminoacizi și un fosfat","Trei nucleotide și o riboză","Trei steroizi și un alcool"]'::jsonb,
  1,
  'Triglycerides (fats and oils) consist of one glycerol molecule bonded to three fatty acid chains via ester bonds.',
  'Trigliceridele (grăsimi și uleiuri) constau dintr-o moleculă de glicerol legată de trei lanțuri de acizi grași prin legături ester.',
  'chemistry',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem60',
  'med-admission-barrons',
  'medium',
  'Which statement about competitive enzyme inhibition is correct?',
  'Care afirmație despre inhibiția enzimatică competitivă este corectă?',
  '["The inhibitor binds to a site other than the active site","The inhibitor has a shape similar to the substrate and competes for the active site","The inhibitor permanently denatures the enzyme","The inhibition cannot be overcome by increasing substrate concentration","The inhibitor changes the enzyme''s shape irreversibly"]'::jsonb,
  '["Inhibitorul se leagă de un sit diferit de situl activ","Inhibitorul are o formă similară cu substratul și concurează pentru situl activ","Inhibitorul denaturează permanent enzima","Inhibiția nu poate fi depășită prin creșterea concentrației de substrat","Inhibitorul schimbă ireversibil forma enzimei"]'::jsonb,
  1,
  'In competitive inhibition, the inhibitor resembles the substrate and competes for the active site; this can be overcome by increasing substrate concentration.',
  'În inhibiția competitivă, inhibitorul seamănă cu substratul și concurează pentru situl activ; aceasta poate fi depășită prin creșterea concentrației de substrat.',
  'chemistry',
  6
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 7 (Hard)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem61',
  'med-admission-barrons',
  'medium',
  'The tertiary structure of a protein is stabilized by all of the following EXCEPT:',
  'Structura terțiară a unei proteine este stabilizată de toate următoarele CU EXCEPȚIA:',
  '["Hydrophobic interactions","Disulfide bonds","Ionic bonds","Peptide bonds between amino acids","Hydrogen bonds between R groups"]'::jsonb,
  '["Interacțiuni hidrofobe","Legături disulfurice","Legături ionice","Legături peptidice între aminoacizi","Legături de hidrogen între grupurile R"]'::jsonb,
  3,
  'Peptide bonds define primary structure. Tertiary structure is stabilized by R-group interactions: hydrophobic, ionic, hydrogen bonds, and disulfide bridges.',
  'Legăturile peptidice definesc structura primară. Structura terțiară este stabilizată de interacțiunile grupurilor R: hidrofobe, ionice, legături de hidrogen și punți disulfurice.',
  'chemistry',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem62',
  'med-admission-barrons',
  'medium',
  'What is the most important buffer system in blood plasma?',
  'Care este cel mai important sistem tampon în plasma sanguină?',
  '["Phosphate buffer system","Protein buffer system","Bicarbonate buffer system","Ammonia buffer system","Lactate buffer system"]'::jsonb,
  '["Sistemul tampon fosfat","Sistemul tampon proteic","Sistemul tampon bicarbonat","Sistemul tampon amoniac","Sistemul tampon lactat"]'::jsonb,
  2,
  'The bicarbonate buffer system (H₂CO₃/HCO₃⁻) is the most important extracellular buffer in blood, working with the lungs and kidneys to regulate pH.',
  'Sistemul tampon bicarbonat (H₂CO₃/HCO₃⁻) este cel mai important tampon extracelular din sânge, lucrând cu plămânii și rinichii pentru a regla pH-ul.',
  'chemistry',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem63',
  'med-admission-barrons',
  'medium',
  'Which component of a nucleotide carries the genetic information?',
  'Care componentă a unei nucleotide transportă informația genetică?',
  '["Phosphate group","Sugar (ribose or deoxyribose)","Nitrogenous base","The backbone","Hydrogen bonds"]'::jsonb,
  '["Grupul fosfat","Zahărul (riboză sau dezoxiriboză)","Baza azotată","Scheletul","Legăturile de hidrogen"]'::jsonb,
  2,
  'The sequence of nitrogenous bases (A, T/U, G, C) encodes genetic information. The sugar and phosphate form the structural backbone.',
  'Secvența de baze azotate (A, T/U, G, C) codifică informația genetică. Zahărul și fosfatul formează scheletul structural.',
  'chemistry',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem64',
  'med-admission-barrons',
  'medium',
  'The formation of table salt (NaCl) from sodium and chlorine is an example of:',
  'Formarea sării de masă (NaCl) din sodiu și clor este un exemplu de:',
  '["Covalent bonding","Hydrogen bonding","Ionic bonding","Metallic bonding","Van der Waals interactions"]'::jsonb,
  '["Legare covalentă","Legare de hidrogen","Legare ionică","Legare metalică","Interacțiuni Van der Waals"]'::jsonb,
  2,
  'Sodium donates an electron to chlorine, creating Na⁺ and Cl⁻ ions that are attracted by ionic (electrostatic) bonds.',
  'Sodiul donează un electron clorului, creând ioni Na⁺ și Cl⁻ care sunt atrași prin legături ionice (electrostatice).',
  'chemistry',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem65',
  'med-admission-barrons',
  'medium',
  'What happens when a protein is denatured?',
  'Ce se întâmplă când o proteină este denaturată?',
  '["Its amino acid sequence changes","Its three-dimensional shape is altered, usually losing function","Its peptide bonds are broken","It gains new amino acids","Its primary structure is destroyed"]'::jsonb,
  '["Secvența sa de aminoacizi se schimbă","Forma sa tridimensională este alterată, de obicei pierzând funcția","Legăturile sale peptidice sunt rupte","Câștigă aminoacizi noi","Structura sa primară este distrusă"]'::jsonb,
  1,
  'Denaturation disrupts the secondary, tertiary, and quaternary structure (shape) of a protein, but the primary sequence remains intact.',
  'Denaturarea perturbă structura secundară, terțiară și cuaternară (forma) unei proteine, dar secvența primară rămâne intactă.',
  'chemistry',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem66',
  'med-admission-barrons',
  'medium',
  'Which polysaccharide is the primary structural component of plant cell walls?',
  'Care polizaharid este componenta structurală principală a pereților celulari vegetali?',
  '["Starch","Glycogen","Cellulose","Chitin","Lactose"]'::jsonb,
  '["Amidon","Glicogen","Celuloză","Chitină","Lactoză"]'::jsonb,
  2,
  'Cellulose is a structural polysaccharide made of glucose units; it forms the rigid cell wall of plants and is indigestible by humans.',
  'Celuloza este un polizaharid structural format din unități de glucoză; formează peretele celular rigid al plantelor și este indigestibilă de către oameni.',
  'chemistry',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem67',
  'med-admission-barrons',
  'medium',
  'Oxidation reactions in metabolism typically involve:',
  'Reacțiile de oxidare în metabolism implică de obicei:',
  '["Gain of electrons","Loss of electrons or hydrogen atoms","Gain of hydrogen atoms","Addition of water","Removal of oxygen"]'::jsonb,
  '["Câștigarea de electroni","Pierderea de electroni sau atomi de hidrogen","Câștigarea de atomi de hidrogen","Adăugarea de apă","Îndepărtarea oxigenului"]'::jsonb,
  1,
  'Oxidation is the loss of electrons or hydrogen atoms. In metabolic reactions, oxidation often releases energy (e.g., glucose oxidation).',
  'Oxidarea este pierderea de electroni sau atomi de hidrogen. În reacțiile metabolice, oxidarea eliberează adesea energie (ex. oxidarea glucozei).',
  'chemistry',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem68',
  'med-admission-barrons',
  'medium',
  'Which of the following trace elements is essential for thyroid hormone synthesis?',
  'Care dintre următoarele oligoelemente este esențial pentru sinteza hormonilor tiroidieni?',
  '["Iron","Zinc","Iodine","Copper","Fluoride"]'::jsonb,
  '["Fier","Zinc","Iod","Cupru","Fluor"]'::jsonb,
  2,
  'Iodine is essential for synthesizing thyroid hormones (T3 and T4). Deficiency leads to goiter and metabolic disorders.',
  'Iodul este esențial pentru sinteza hormonilor tiroidieni (T3 și T4). Deficiența duce la gușă și tulburări metabolice.',
  'chemistry',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem69',
  'med-admission-barrons',
  'medium',
  'What distinguishes essential amino acids from non-essential amino acids?',
  'Ce distinge aminoacizii esențiali de aminoacizii neesențiali?',
  '["Essential amino acids are larger","Essential amino acids cannot be synthesized by the body and must be obtained from diet","Non-essential amino acids are not used in protein synthesis","Essential amino acids are found only in animal proteins","There is no functional difference"]'::jsonb,
  '["Aminoacizii esențiali sunt mai mari","Aminoacizii esențiali nu pot fi sintetizați de corp și trebuie obținuți din dietă","Aminoacizii neesențiali nu sunt folosiți în sinteza proteinelor","Aminoacizii esențiali se găsesc doar în proteinele animale","Nu există nicio diferență funcțională"]'::jsonb,
  1,
  'Essential amino acids cannot be made by the human body and must come from food; non-essential amino acids can be synthesized internally.',
  'Aminoacizii esențiali nu pot fi produși de corpul uman și trebuie să provină din alimente; aminoacizii neesențiali pot fi sintetizați intern.',
  'chemistry',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem70',
  'med-admission-barrons',
  'medium',
  'ATP stores energy in its:',
  'ATP-ul stochează energie în:',
  '["Adenine base","Ribose sugar","High-energy phosphate bonds","Nitrogen atoms","Carbon-carbon bonds"]'::jsonb,
  '["Baza de adenină","Zahărul riboză","Legăturile de fosfat de înaltă energie","Atomii de azot","Legăturile carbon-carbon"]'::jsonb,
  2,
  'ATP stores energy in the bonds between its three phosphate groups. Hydrolysis of these bonds releases energy for cellular work.',
  'ATP-ul stochează energie în legăturile dintre cele trei grupuri de fosfat. Hidroliza acestor legături eliberează energie pentru lucrul celular.',
  'chemistry',
  7
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 8 (Hard)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem71',
  'med-admission-barrons',
  'hard',
  'A patient has respiratory acidosis. Which of the following compensatory mechanisms would help restore normal blood pH?',
  'Un pacient are acidoză respiratorie. Care dintre următoarele mecanisme compensatorii ar ajuta la restabilirea pH-ului sanguin normal?',
  '["Decreased kidney reabsorption of bicarbonate","Increased kidney reabsorption of bicarbonate and excretion of H⁺","Increased respiratory rate to retain more CO₂","Decreased bicarbonate production","Increased production of carbonic acid"]'::jsonb,
  '["Scăderea reabsorbției renale de bicarbonat","Creșterea reabsorbției renale de bicarbonat și excreția de H⁺","Creșterea ritmului respirator pentru a reține mai mult CO₂","Scăderea producției de bicarbonat","Creșterea producției de acid carbonic"]'::jsonb,
  1,
  'In respiratory acidosis (CO₂ retention), the kidneys compensate by reabsorbing more bicarbonate (HCO₃⁻) and excreting more H⁺ to raise blood pH.',
  'În acidoza respiratorie (retenție de CO₂), rinichii compensează prin reabsorbția mai mult bicarbonat (HCO₃⁻) și excreția mai mult H⁺ pentru a crește pH-ul sanguin.',
  'chemistry',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem72',
  'med-admission-barrons',
  'hard',
  'Which biochemical process directly uses the energy from ATP hydrolysis to move substances against their concentration gradient?',
  'Care proces biochimic folosește direct energia din hidroliza ATP pentru a muta substanțe împotriva gradientului lor de concentrație?',
  '["Facilitated diffusion","Osmosis","Active transport","Simple diffusion","Filtration"]'::jsonb,
  '["Difuzie facilitată","Osmoză","Transport activ","Difuzie simplă","Filtrare"]'::jsonb,
  2,
  'Active transport uses ATP energy to move substances against their concentration gradient (from low to high concentration), such as the Na⁺/K⁺-ATPase pump.',
  'Transportul activ folosește energia ATP pentru a muta substanțe împotriva gradientului lor de concentrație (de la concentrație scăzută la ridicată), precum pompa Na⁺/K⁺-ATPază.',
  'chemistry',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem73',
  'med-admission-barrons',
  'hard',
  'The lock-and-key model of enzyme action describes:',
  'Modelul cheie-broască al acțiunii enzimelor descrie:',
  '["How enzymes permanently change shape after binding substrate","The rigid complementary fit between enzyme active site and substrate","How substrates are always larger than enzymes","The random binding of any molecule to any enzyme","How enzymes are consumed in reactions"]'::jsonb,
  '["Cum enzimele își schimbă permanent forma după legarea substratului","Potrivirea complementară rigidă între situl activ al enzimei și substrat","Cum substraturile sunt întotdeauna mai mari decât enzimele","Legarea aleatorie a oricărei molecule de orice enzimă","Cum enzimele sunt consumate în reacții"]'::jsonb,
  1,
  'The lock-and-key model proposes that the enzyme''s active site (lock) has a shape precisely complementary to the substrate (key).',
  'Modelul cheie-broască propune că situl activ al enzimei (broască) are o formă precis complementară substratului (cheie).',
  'chemistry',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem74',
  'med-admission-barrons',
  'hard',
  'In the context of protein structure, what is a domain?',
  'În contextul structurii proteinelor, ce este un domeniu?',
  '["The sequence of amino acids","A single alpha helix","A functionally and structurally independent region of a protein that folds independently","The bond between two amino acids","A type of secondary structure"]'::jsonb,
  '["Secvența de aminoacizi","Un singur helix alfa","O regiune funcțional și structural independentă a unei proteine care se pliază independent","Legătura dintre doi aminoacizi","Un tip de structură secundară"]'::jsonb,
  2,
  'A protein domain is a distinct functional and structural unit within a protein that can fold independently and often has a specific function.',
  'Un domeniu proteic este o unitate funcțională și structurală distinctă în cadrul unei proteine care se poate plia independent și adesea are o funcție specifică.',
  'chemistry',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem75',
  'med-admission-barrons',
  'hard',
  'Why does ice float on liquid water?',
  'De ce plutește gheața pe apa lichidă?',
  '["Ice has more hydrogen bonds than liquid water","Ice is denser than liquid water","The hydrogen bond network in ice creates an open lattice structure, making ice less dense than liquid water","Ice has no hydrogen bonds","Water molecules in ice move faster than in liquid water"]'::jsonb,
  '["Gheața are mai multe legături de hidrogen decât apa lichidă","Gheața este mai densă decât apa lichidă","Rețeaua de legături de hidrogen din gheață creează o structură de rețea deschisă, făcând gheața mai puțin densă decât apa lichidă","Gheața nu are legături de hidrogen","Moleculele de apă din gheață se mișcă mai repede decât în apa lichidă"]'::jsonb,
  2,
  'In ice, hydrogen bonds form a stable, open crystalline lattice with more space between molecules than liquid water, making ice less dense.',
  'În gheață, legăturile de hidrogen formează o rețea cristalină stabilă și deschisă cu mai mult spațiu între molecule decât în apa lichidă, făcând gheața mai puțin densă.',
  'chemistry',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem76',
  'med-admission-barrons',
  'hard',
  'Prosthetic groups differ from coenzymes in that prosthetic groups:',
  'Grupurile prostetice diferă de coenzime prin faptul că grupurile prostetice:',
  '["Are always vitamins","Bind loosely and temporarily to enzymes","Are permanently bound to enzymes and essential for activity","Never contain metal ions","Are only found in structural proteins"]'::jsonb,
  '["Sunt întotdeauna vitamine","Se leagă slab și temporar de enzime","Sunt legate permanent de enzime și esențiale pentru activitate","Nu conțin niciodată ioni metalici","Se găsesc doar în proteinele structurale"]'::jsonb,
  2,
  'Prosthetic groups are tightly and permanently bound to enzymes (e.g., heme in hemoglobin), while coenzymes bind loosely and reversibly.',
  'Grupurile prostetice sunt legate strâns și permanent de enzime (ex. hemul în hemoglobină), în timp ce coenzimele se leagă slab și reversibil.',
  'chemistry',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem77',
  'med-admission-barrons',
  'hard',
  'Which of the following best describes the induced-fit model of enzyme action?',
  'Care dintre următoarele descrie cel mai bine modelul potrivirii induse al acțiunii enzimelor?',
  '["The substrate changes its shape to fit the enzyme","The enzyme''s active site changes shape slightly upon substrate binding to improve the fit","Enzymes and substrates never physically interact","The enzyme is rigid and unchanging","Multiple substrates compete for the same active site"]'::jsonb,
  '["Substratul își schimbă forma pentru a se potrivi enzimei","Situl activ al enzimei își schimbă ușor forma la legarea substratului pentru a îmbunătăți potrivirea","Enzimele și substraturile nu interacționează niciodată fizic","Enzima este rigidă și neschimbătoare","Mai multe substraturi concurează pentru același sit activ"]'::jsonb,
  1,
  'The induced-fit model proposes that the enzyme active site is flexible and adjusts its shape when the substrate binds for optimal fit and catalysis.',
  'Modelul potrivirii induse propune că situl activ al enzimei este flexibil și își ajustează forma când substratul se leagă pentru potrivire și cataliză optime.',
  'chemistry',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem78',
  'med-admission-barrons',
  'hard',
  'The quaternary structure of a protein refers to:',
  'Structura cuaternară a unei proteine se referă la:',
  '["The linear sequence of amino acids","Alpha helices and beta sheets","The three-dimensional folding of a single polypeptide","The arrangement and interaction of multiple polypeptide subunits","The binding of substrate to the active site"]'::jsonb,
  '["Secvența liniară de aminoacizi","Helix-uri alfa și foi beta","Plierea tridimensională a unui singur polipeptid","Aranjamentul și interacțiunea mai multor subunități polipeptidice","Legarea substratului de situl activ"]'::jsonb,
  3,
  'Quaternary structure exists in proteins with multiple polypeptide chains (subunits) and describes how these subunits associate with each other.',
  'Structura cuaternară există în proteinele cu multiple lanțuri polipeptidice (subunități) și descrie cum aceste subunități se asociază unele cu altele.',
  'chemistry',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem79',
  'med-admission-barrons',
  'hard',
  'A patient''s blood work shows elevated lactate levels. This indicates:',
  'Analizele de sânge ale unui pacient arată niveluri crescute de lactat. Aceasta indică:',
  '["Excessive aerobic metabolism","Insufficient anaerobic metabolism","Increased anaerobic glycolysis due to insufficient oxygen","Normal metabolic function","Excessive protein catabolism"]'::jsonb,
  '["Metabolism aerob excesiv","Metabolism anaerob insuficient","Glicoliză anaerobă crescută din cauza oxigenului insuficient","Funcție metabolică normală","Catabolism proteic excesiv"]'::jsonb,
  2,
  'Elevated lactate indicates increased anaerobic metabolism, where pyruvate is converted to lactate when oxygen is insufficient for aerobic respiration.',
  'Lactatul crescut indică metabolism anaerob crescut, unde piruvatul este convertit în lactat când oxigenul este insuficient pentru respirația aerobă.',
  'chemistry',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem80',
  'med-admission-barrons',
  'hard',
  'Which type of bond in proteins is formed between the sulfur atoms of two cysteine residues?',
  'Ce tip de legătură în proteine se formează între atomii de sulf ai două reziduuri de cisteină?',
  '["Hydrogen bond","Ionic bond","Peptide bond","Disulfide bond","Hydrophobic interaction"]'::jsonb,
  '["Legătură de hidrogen","Legătură ionică","Legătură peptidică","Legătură disulfurică","Interacțiune hidrofobă"]'::jsonb,
  3,
  'Disulfide bonds (S-S) form between the sulfhydryl groups (-SH) of two cysteine amino acids, helping stabilize tertiary and quaternary protein structure.',
  'Legăturile disulfurice (S-S) se formează între grupurile sulfhidril (-SH) a doi aminoacizi cisteină, ajutând la stabilizarea structurii terțiare și cuaternare a proteinei.',
  'chemistry',
  8
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 9 (Hard)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem81',
  'med-admission-barrons',
  'hard',
  'In beta-oxidation of fatty acids, which molecule is produced that enters the citric acid cycle?',
  'În beta-oxidarea acizilor grași, care moleculă este produsă și intră în ciclul acidului citric?',
  '["Pyruvate","Lactate","Acetyl-CoA","Glucose","Glycerol"]'::jsonb,
  '["Piruvat","Lactat","Acetil-CoA","Glucoză","Glicerol"]'::jsonb,
  2,
  'Beta-oxidation breaks down fatty acids into two-carbon acetyl-CoA units, which then enter the citric acid cycle for ATP production.',
  'Beta-oxidarea descompune acizii grași în unități de acetil-CoA cu doi atomi de carbon, care apoi intră în ciclul acidului citric pentru producția de ATP.',
  'chemistry',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem82',
  'med-admission-barrons',
  'hard',
  'An enzyme has a Km of 5 mM for its substrate. What does this value indicate?',
  'O enzimă are un Km de 5 mM pentru substratul său. Ce indică această valoare?',
  '["The maximum velocity of the enzyme","The substrate concentration at which the enzyme operates at half its maximum velocity","The total number of substrate molecules","The pH optimum of the enzyme","The temperature at which the enzyme denatures"]'::jsonb,
  '["Viteza maximă a enzimei","Concentrația de substrat la care enzima operează la jumătate din viteza sa maximă","Numărul total de molecule de substrat","pH-ul optim al enzimei","Temperatura la care enzima se denaturează"]'::jsonb,
  1,
  'Km (Michaelis constant) is the substrate concentration at which the reaction rate is half of Vmax; it reflects the enzyme''s affinity for its substrate.',
  'Km (constanta Michaelis) este concentrația de substrat la care viteza reacției este jumătate din Vmax; reflectă afinitatea enzimei pentru substratul său.',
  'chemistry',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem83',
  'med-admission-barrons',
  'hard',
  'Phospholipids in cell membranes are amphipathic. This means they:',
  'Fosfolipidele din membranele celulare sunt amfipatice. Aceasta înseamnă că:',
  '["Are completely hydrophobic","Are completely hydrophilic","Have both hydrophilic and hydrophobic regions","Cannot interact with water","Are identical to triglycerides"]'::jsonb,
  '["Sunt complet hidrofobe","Sunt complet hidrofile","Au atât regiuni hidrofile cât și hidrofobe","Nu pot interacționa cu apa","Sunt identice cu trigliceridele"]'::jsonb,
  2,
  'Amphipathic molecules have both hydrophilic (water-loving) and hydrophobic (water-fearing) regions, enabling phospholipids to form bilayer membranes.',
  'Moleculele amfipatice au atât regiuni hidrofile (care iubesc apa) cât și hidrofobe (care se tem de apă), permițând fosfolipidelor să formeze membrane bistrate.',
  'chemistry',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem84',
  'med-admission-barrons',
  'hard',
  'The difference between an aldose and a ketose sugar is:',
  'Diferența dintre un zahăr aldoză și un zahăr cetoză este:',
  '["The number of carbon atoms","The position of the carbonyl group (aldehyde vs. ketone)","Their solubility in water","Whether they are monosaccharides or polysaccharides","Their molecular weight"]'::jsonb,
  '["Numărul de atomi de carbon","Poziția grupului carbonil (aldehidă vs. cetonă)","Solubilitatea lor în apă","Dacă sunt monozaharide sau polizaharide","Masa lor moleculară"]'::jsonb,
  1,
  'Aldoses have an aldehyde group (C=O at the end), while ketoses have a ketone group (C=O in the middle). Glucose is an aldose; fructose is a ketose.',
  'Aldozele au un grup aldehidă (C=O la capăt), în timp ce cetozele au un grup cetonă (C=O în mijloc). Glucoza este o aldoză; fructoza este o cetoză.',
  'chemistry',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem85',
  'med-admission-barrons',
  'hard',
  'Which of the following is TRUE about noncompetitive enzyme inhibition?',
  'Care dintre următoarele este ADEVĂRAT despre inhibiția enzimatică necompetitivă?',
  '["The inhibitor binds at the active site","The inhibitor binds at a site other than the active site and changes enzyme shape","Increasing substrate concentration fully overcomes the inhibition","The inhibitor resembles the substrate","It increases Vmax"]'::jsonb,
  '["Inhibitorul se leagă la situl activ","Inhibitorul se leagă la un sit diferit de situl activ și schimbă forma enzimei","Creșterea concentrației de substrat depășește complet inhibiția","Inhibitorul seamănă cu substratul","Crește Vmax"]'::jsonb,
  1,
  'In noncompetitive inhibition, the inhibitor binds to an allosteric site, changing enzyme conformation; this reduces Vmax and cannot be overcome by adding more substrate.',
  'În inhibiția necompetitivă, inhibitorul se leagă la un sit alosteric, schimbând conformația enzimei; aceasta reduce Vmax și nu poate fi depășită prin adăugarea mai mult substrat.',
  'chemistry',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem86',
  'med-admission-barrons',
  'hard',
  'Which nucleotide serves as a carrier of chemical energy in cells but is NOT ATP?',
  'Care nucleotidă servește ca purtător de energie chimică în celule dar NU este ATP?',
  '["DNA","RNA","GTP","CTP","UTP"]'::jsonb,
  '["ADN","ARN","GTP","CTP","UTP"]'::jsonb,
  2,
  'GTP (guanosine triphosphate) is an energy carrier used in protein synthesis, cell signaling, and other processes similar to ATP.',
  'GTP (guanozin trifosfat) este un purtător de energie folosit în sinteza proteinelor, semnalizarea celulară și alte procese similare cu ATP.',
  'chemistry',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem87',
  'med-admission-barrons',
  'hard',
  'A patient with diabetes mellitus has elevated blood glucose. This leads to increased production of:',
  'Un pacient cu diabet zaharat are glucoză crescută în sânge. Aceasta duce la producția crescută de:',
  '["Glycogen in muscles (due to efficient uptake)","Ketone bodies (from fatty acid metabolism)","Lactate exclusively","More insulin from beta cells indefinitely","Decreased glucagon"]'::jsonb,
  '["Glicogen în mușchi (datorită absorbției eficiente)","Corpi cetonici (din metabolismul acizilor grași)","Doar lactat","Mai multă insulină de la celulele beta pe termen nelimitat","Glucagon scăzut"]'::jsonb,
  1,
  'In uncontrolled diabetes, cells cannot use glucose effectively, so the body breaks down fats for energy, producing ketone bodies which can lead to ketoacidosis.',
  'În diabetul necontrolat, celulele nu pot folosi glucoza eficient, așa că corpul descompune grăsimile pentru energie, producând corpi cetonici care pot duce la cetoacidoză.',
  'chemistry',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem88',
  'med-admission-barrons',
  'hard',
  'The R group (side chain) of an amino acid determines:',
  'Grupul R (lanțul lateral) al unui aminoacid determină:',
  '["The backbone structure only","The unique properties of the amino acid (polarity, charge, size)","The formation of peptide bonds","The position of the amino group","The position of the carboxyl group"]'::jsonb,
  '["Doar structura scheletului","Proprietățile unice ale aminoacidului (polaritate, sarcină, mărime)","Formarea legăturilor peptidice","Poziția grupului amino","Poziția grupului carboxil"]'::jsonb,
  1,
  'The R group (side chain) varies among amino acids and determines each amino acid''s chemical properties (polar, nonpolar, acidic, basic, etc.).',
  'Grupul R (lanțul lateral) variază între aminoacizi și determină proprietățile chimice ale fiecărui aminoacid (polar, nepolar, acid, bazic etc.).',
  'chemistry',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem89',
  'med-admission-barrons',
  'hard',
  'Electron carriers such as NAD⁺ and FAD function in cellular respiration by:',
  'Purtătorii de electroni precum NAD⁺ și FAD funcționează în respirația celulară prin:',
  '["Directly producing ATP","Accepting and transferring electrons to the electron transport chain","Breaking down glucose directly","Synthesizing fatty acids","Storing oxygen"]'::jsonb,
  '["Producerea directă de ATP","Acceptarea și transferarea electronilor către lanțul de transport al electronilor","Descompunerea directă a glucozei","Sinteza acizilor grași","Stocarea oxigenului"]'::jsonb,
  1,
  'NAD⁺ and FAD accept electrons (becoming NADH and FADH₂) during glycolysis and the citric acid cycle, then transfer them to the electron transport chain for ATP synthesis.',
  'NAD⁺ și FAD acceptă electroni (devenind NADH și FADH₂) în timpul glicolizei și ciclului acidului citric, apoi îi transferă către lanțul de transport al electronilor pentru sinteza ATP.',
  'chemistry',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem90',
  'med-admission-barrons',
  'hard',
  'Which of the following would shift the bicarbonate buffer equilibrium to reduce blood H⁺ concentration?',
  'Care dintre următoarele ar deplasa echilibrul tamponului bicarbonat pentru a reduce concentrația de H⁺ din sânge?',
  '["Increasing CO₂ production","Decreasing respiratory rate","Increasing respiratory rate (hyperventilation)","Producing more carbonic acid","Decreasing kidney bicarbonate reabsorption"]'::jsonb,
  '["Creșterea producției de CO₂","Scăderea ritmului respirator","Creșterea ritmului respirator (hiperventilație)","Producerea mai mult acid carbonic","Scăderea reabsorbției renale de bicarbonat"]'::jsonb,
  2,
  'Hyperventilation removes CO₂, shifting the equilibrium: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ to the left, consuming H⁺ and raising pH.',
  'Hiperventilația elimină CO₂, deplasând echilibrul: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ spre stânga, consumând H⁺ și crescând pH-ul.',
  'chemistry',
  9
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

-- Set 10 (Hard)
INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem91',
  'med-admission-barrons',
  'hard',
  'An allosteric enzyme is regulated by:',
  'O enzimă alosterică este reglată de:',
  '["Binding of molecules at its active site only","Binding of regulatory molecules at sites other than the active site, causing conformational changes","Temperature changes only","Covalent modification only","Irreversible inhibition"]'::jsonb,
  '["Legarea moleculelor doar la situl său activ","Legarea moleculelor reglatoare la situri diferite de situl activ, cauzând modificări conformaționale","Doar modificări de temperatură","Doar modificare covalentă","Inhibiție ireversibilă"]'::jsonb,
  1,
  'Allosteric enzymes have regulatory sites distinct from the active site; binding of modulators at these sites changes enzyme shape and activity.',
  'Enzimele alosterice au situri reglatoare distincte de situl activ; legarea modulatorilor la aceste situri schimbă forma și activitatea enzimei.',
  'chemistry',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem92',
  'med-admission-barrons',
  'hard',
  'The "high-energy" bonds in ATP are more accurately described as bonds with:',
  'Legăturile „de înaltă energie" din ATP sunt descrise mai precis ca legături cu:',
  '["Unusually strong bonds that are hard to break","Low activation energy for hydrolysis and high free energy release upon breaking","Triple covalent character","Ionic character","No potential energy"]'::jsonb,
  '["Legături neobișnuit de puternice care sunt greu de rupt","Energie de activare scăzută pentru hidroliză și eliberare mare de energie liberă la rupere","Caracter covalent triplu","Caracter ionic","Nicio energie potențială"]'::jsonb,
  1,
  'The phosphoanhydride bonds in ATP release significant free energy when hydrolyzed because of electrostatic repulsion, resonance stabilization of products, and entropy increase.',
  'Legăturile fosfoanhidrid din ATP eliberează energie liberă semnificativă când sunt hidrolizate datorită repulsiei electrostatice, stabilizării de rezonanță a produșilor și creșterii entropiei.',
  'chemistry',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem93',
  'med-admission-barrons',
  'hard',
  'Prions cause disease by:',
  'Prionii cauzează boală prin:',
  '["Inserting foreign DNA into cells","Introducing abnormal RNA","Inducing normal proteins to misfold into abnormal conformations","Secreting toxins","Destroying antibodies"]'::jsonb,
  '["Inserarea ADN străin în celule","Introducerea ARN anormal","Inducerea proteinelor normale să se plieze greșit în conformații anormale","Secretarea de toxine","Distrugerea anticorpilor"]'::jsonb,
  2,
  'Prions are misfolded proteins that cause normal proteins to adopt the same abnormal shape, leading to neurodegenerative diseases like Creutzfeldt-Jakob disease.',
  'Prionii sunt proteine pliate greșit care cauzează proteinele normale să adopte aceeași formă anormală, ducând la boli neurodegenerative precum boala Creutzfeldt-Jakob.',
  'chemistry',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem94',
  'med-admission-barrons',
  'hard',
  'In DNA replication, what is the role of DNA helicase?',
  'În replicarea ADN, care este rolul helicazei ADN?',
  '["Adding nucleotides to the growing strand","Sealing gaps in the DNA backbone","Unwinding the double helix by breaking hydrogen bonds between base pairs","Removing RNA primers","Proofreading for errors"]'::jsonb,
  '["Adăugarea de nucleotide la lanțul în creștere","Sigilarea golurilor din scheletul ADN","Derularea dublului helix prin ruperea legăturilor de hidrogen dintre perechile de baze","Îndepărtarea primerilor ARN","Verificarea erorilor"]'::jsonb,
  2,
  'DNA helicase unwinds the double helix by breaking the hydrogen bonds between complementary base pairs, creating replication forks.',
  'Helicaza ADN derulează dublul helix prin ruperea legăturilor de hidrogen dintre perechile de baze complementare, creând furcile de replicare.',
  'chemistry',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem95',
  'med-admission-barrons',
  'hard',
  'Chaotropic agents cause protein denaturation by:',
  'Agenții chaotropici cauzează denaturarea proteinelor prin:',
  '["Strengthening hydrogen bonds","Disrupting the ordered water structure around proteins and weakening hydrophobic interactions","Forming new peptide bonds","Increasing disulfide bonds","Lowering temperature"]'::jsonb,
  '["Întărirea legăturilor de hidrogen","Perturbarea structurii ordonate a apei din jurul proteinelor și slăbirea interacțiunilor hidrofobe","Formarea de noi legături peptidice","Creșterea legăturilor disulfurice","Scăderea temperaturii"]'::jsonb,
  1,
  'Chaotropic agents (like urea) disrupt the ordered water molecules surrounding proteins, destabilizing the hydrophobic interactions that maintain protein structure.',
  'Agenții chaotropici (precum ureea) perturbă moleculele de apă ordonate din jurul proteinelor, destabilizând interacțiunile hidrofobe care mențin structura proteinelor.',
  'chemistry',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem96',
  'med-admission-barrons',
  'hard',
  'What is the significance of chiral (asymmetric) carbon atoms in biological molecules?',
  'Care este semnificația atomilor de carbon chirali (asimetrici) în moleculele biologice?',
  '["They have no biological importance","They allow molecules to exist as stereoisomers (mirror images) with different biological activities","They prevent molecules from dissolving in water","They are found only in lipids","They make molecules radioactive"]'::jsonb,
  '["Nu au importanță biologică","Permit moleculelor să existe ca stereoizomeri (imagini în oglindă) cu activități biologice diferite","Împiedică moleculele să se dizolve în apă","Se găsesc doar în lipide","Fac moleculele radioactive"]'::jsonb,
  1,
  'Chiral carbons create stereoisomers (enantiomers) that can have vastly different biological effects; enzymes are usually specific for one stereoisomer.',
  'Carbonii chirali creează stereoizomeri (enantiomeri) care pot avea efecte biologice foarte diferite; enzimele sunt de obicei specifice pentru un stereoizomer.',
  'chemistry',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem97',
  'med-admission-barrons',
  'hard',
  'Feedback inhibition in a metabolic pathway typically involves:',
  'Inhibiția prin feedback într-o cale metabolică implică de obicei:',
  '["The substrate of the first enzyme inhibiting the last enzyme","The end product inhibiting an enzyme early in the pathway","Random inhibition of any enzyme in the pathway","Activation of all enzymes simultaneously","Destruction of the end product"]'::jsonb,
  '["Substratul primei enzime inhibând ultima enzimă","Produsul final inhibând o enzimă de la începutul căii","Inhibiție aleatorie a oricărei enzime în cale","Activarea tuturor enzimelor simultan","Distrugerea produsului final"]'::jsonb,
  1,
  'In feedback (end-product) inhibition, the final product of a pathway inhibits an enzyme early in the pathway, usually at the committed step, to regulate flux.',
  'În inhibiția prin feedback (produs final), produsul final al unei căi inhibă o enzimă de la începutul căii, de obicei la etapa angajată, pentru a regla fluxul.',
  'chemistry',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem98',
  'med-admission-barrons',
  'hard',
  'The Henderson-Hasselbalch equation relates:',
  'Ecuația Henderson-Hasselbalch leagă:',
  '["Enzyme kinetics to temperature","pH to the ratio of conjugate base to acid concentration and pKa","Protein structure to function","ATP concentration to metabolic rate","DNA length to gene expression"]'::jsonb,
  '["Cinetica enzimelor de temperatură","pH-ul de raportul concentrației bază conjugată/acid și pKa","Structura proteinelor de funcție","Concentrația de ATP de rata metabolică","Lungimea ADN de expresia genelor"]'::jsonb,
  1,
  'The Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]) relates pH to the pKa and the ratio of conjugate base to weak acid concentrations.',
  'Ecuația Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) leagă pH-ul de pKa și raportul concentrațiilor bază conjugată/acid slab.',
  'chemistry',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem99',
  'med-admission-barrons',
  'hard',
  'Why are omega-3 fatty acids considered "essential"?',
  'De ce sunt acizii grași omega-3 considerați „esențiali"?',
  '["They are produced in large amounts by the body","They cannot be synthesized by the human body and must be obtained from diet","They are the only type of fatty acid in cell membranes","They are saturated fatty acids","They have no double bonds"]'::jsonb,
  '["Sunt produși în cantități mari de corp","Nu pot fi sintetizați de corpul uman și trebuie obținuți din dietă","Sunt singurul tip de acid gras în membranele celulare","Sunt acizi grași saturați","Nu au legături duble"]'::jsonb,
  1,
  'Omega-3 fatty acids (like ALA, EPA, DHA) cannot be synthesized by humans and must come from dietary sources such as fish and flaxseed.',
  'Acizii grași omega-3 (precum ALA, EPA, DHA) nu pot fi sintetizați de oameni și trebuie să provină din surse alimentare precum peștele și semințele de in.',
  'chemistry',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;

INSERT INTO questions (id, category, difficulty, question, question_ro, options, options_ro, correct_answer, explanation, explanation_ro, chapter_id, set_number) VALUES (
  'chem100',
  'med-admission-barrons',
  'hard',
  'What structural feature distinguishes a saturated fatty acid from a trans fatty acid?',
  'Ce caracteristică structurală distinge un acid gras saturat de un acid gras trans?',
  '["Saturated fatty acids have no double bonds; trans fats have double bonds with hydrogens on opposite sides","Trans fats have no double bonds","Saturated fatty acids are always liquid","Trans fats are always found naturally in plants","There is no structural difference"]'::jsonb,
  '["Acizii grași saturați nu au legături duble; grăsimile trans au legături duble cu hidrogenii pe părți opuse","Grăsimile trans nu au legături duble","Acizii grași saturați sunt întotdeauna lichizi","Grăsimile trans se găsesc întotdeauna natural în plante","Nu există nicio diferență structurală"]'::jsonb,
  0,
  'Saturated fatty acids have no double bonds. Trans fats have at least one double bond where hydrogens are on opposite sides (trans configuration), creating a straighter chain like saturated fats.',
  'Acizii grași saturați nu au legături duble. Grăsimile trans au cel puțin o legătură dublă unde hidrogenii sunt pe părți opuse (configurație trans), creând un lanț mai drept ca grăsimile saturate.',
  'chemistry',
  10
) ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  question_ro = EXCLUDED.question_ro,
  options = EXCLUDED.options,
  options_ro = EXCLUDED.options_ro,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  explanation_ro = EXCLUDED.explanation_ro;


-- ============================================
COMMIT;