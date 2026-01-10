import type { Question } from './questions';

export const perforatingAndWatershedQuestions: Question[] = [
  {
    id: 'pw1',
    category: 'neuro-vasculature',
    difficulty: 'easy',
    question: 'Lacunar infarcts are classically caused by occlusion of which type of vessel?',
    options: [
      'Large extracranial arteries such as the internal carotid',
      'Cortical pial arteries on the brain surface',
      'Single deep perforating (penetrating) arteries supplying deep brain structures',
      'Venous sinuses of the dura mater',
      'Basilar artery trunk only'
    ],
    correctAnswer: 2,
    explanation:
      'Lacunar infarcts are small subcortical infarcts caused by occlusion of a single deep penetrating artery supplying structures like the basal ganglia, thalamus and internal capsule.[web:177][web:187][web:193]'
  },
  {
    id: 'pw2',
    category: 'neuro-vasculature',
    difficulty: 'easy',
    question: 'Which deep arteries are most often implicated in lacunar infarcts of the basal ganglia and internal capsule?',
    options: [
      'Posterior inferior cerebellar arteries',
      'Lenticulostriate (anterolateral central) arteries of the middle cerebral artery',
      'Anterior inferior cerebellar arteries',
      'Vertebral artery perforators to the medulla',
      'Meningeal branches of the external carotid artery'
    ],
    correctAnswer: 1,
    explanation:
      'Lateral lenticulostriate arteries from the M1 segment of the middle cerebral artery pierce the anterior perforated substance to supply the basal ganglia and internal capsule and are a common site in lacunar infarction.[web:177][web:189][web:197]'
  },
  {
    id: 'pw3',
    category: 'neuro-vasculature',
    difficulty: 'medium',
    question: 'Which mechanism is most classically associated with small-vessel lacunar stroke in deep perforating arteries?',
    options: [
      'Atherosclerotic plaque rupture in the carotid bifurcation with large emboli',
      'Lipohyalinosis and fibrinoid necrosis of small penetrating arteries, often related to chronic hypertension',
      'Isolated vasospasm of cortical arteries after subarachnoid hemorrhage',
      'Cardioembolism from atrial fibrillation only',
      'Compression of veins in the subdural space'
    ],
    correctAnswer: 1,
    explanation:
      'Classical lacunar strokes are linked to lipohyalinosis and fibrinoid necrosis in small penetrating arteries, strongly associated with long-standing hypertension and small-vessel disease.[web:187][web:189][web:193]'
  },
  {
    id: 'pw4',
    category: 'neuro-vasculature',
    difficulty: 'medium',
    question: 'Watershed (border-zone) infarcts typically occur in which regions of the brain?',
    options: [
      'At the core of major arterial territories, such as the MCA trunk region',
      'At the boundaries between two main cerebral arterial territories where perfusion pressure is lowest',
      'Only in the cerebellar hemispheres',
      'Only in the brainstem perforator territories',
      'Exclusively within the deep basal ganglia nuclei'
    ],
    correctAnswer: 1,
    explanation:
      'Watershed infarcts occur at the junction zones between major arterial territories (e.g., ACA–MCA, MCA–PCA or deep perforator–superficial territories), which are particularly vulnerable to hypoperfusion.[web:192][web:195][web:198]'
  },
  {
    id: 'pw5',
    category: 'neuro-vasculature',
    difficulty: 'hard',
    question: 'Which clinical or hemodynamic situation is MOST strongly associated with development of cortical watershed infarcts?',
    options: [
      'Severe systemic hypotension often combined with significant carotid or large-artery stenosis',
      'Isolated venous sinus thrombosis with normal arterial flow',
      'Mild anemia without hypotension',
      'Injury to the cranial nerves in the cavernous sinus',
      'Posterior fossa mass lesions only'
    ],
    correctAnswer: 0,
    explanation:
      'Cortical watershed infarcts frequently arise when systemic hypotension occurs in the setting of severe stenosis or occlusion of major feeding arteries such as the internal carotid, compromising distal border-zone perfusion.[web:192][web:195][web:200]'
  },
  {
    id: 'pw6',
    category: 'neuro-vasculature',
    difficulty: 'hard',
    question: 'Internal (deep) watershed infarcts most commonly involve which region and mechanism?',
    options: [
      'Cerebellar cortex, due to PICA occlusion',
      'Corona radiata and centrum semiovale, due to hemodynamic failure between deep perforators and superficial systems',
      'Frontal operculum, due to embolic MCA branch occlusion',
      'Medulla oblongata, due to vertebral dissection',
      'Occipital pole, due to PCA branch emboli'
    ],
    correctAnswer: 1,
    explanation:
      'Deep internal watershed infarcts characteristically occur in the corona radiata and centrum semiovale where territories of deep perforating arteries and superficial cortical branches overlap and are vulnerable to hypoperfusion.[web:192][web:195][web:198]'
  }
];
