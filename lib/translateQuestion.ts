import type { Question } from '@/mocks/questions';
import { questionTranslations } from '@/locales/questionTranslations';
import type { Language } from './i18n';

export function translateQuestion(question: Question, language: Language): Question {
  if (language === 'en') {
    return question;
  }

  const translation = questionTranslations[question.id]?.[language];
  
  if (!translation) {
    return question;
  }

  return {
    ...question,
    question: translation.question,
    options: translation.options,
    explanation: translation.explanation,
  };
}

export function translateQuestions(questions: Question[], language: Language): Question[] {
  return questions.map(q => translateQuestion(q, language));
}
