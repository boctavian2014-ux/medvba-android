import { en } from '@/locales/en';
import { ro } from '@/locales/ro';
import { es } from '@/locales/es';
import { pt } from '@/locales/pt';
import { chapterTranslations } from '@/locales/chapterTranslations';

export type Language = 'en' | 'ro' | 'es' | 'pt';

export type TranslationKeys = keyof typeof en;

const translations: Record<Language, Record<string, string>> = {
  en,
  ro,
  es,
  pt,
};

let currentLanguage: Language = 'en';

export function setCurrentLanguage(lang: Language): void {
  currentLanguage = lang;
  console.log(`Language changed to: ${lang}`);
}

export function getCurrentLanguage(): Language {
  return currentLanguage;
}

export function t(key: string): string {
  const translation = translations[currentLanguage]?.[key];
  if (!translation) {
    console.warn(`Missing translation for key: ${key} in language: ${currentLanguage}`);
    return translations['en']?.[key] || key;
  }
  return translation;
}

export function getChapterTitle(chapterId: string): string {
  const chapterTrans = chapterTranslations[chapterId];
  if (!chapterTrans) {
    console.warn(`Missing chapter translation for: ${chapterId}`);
    return chapterId;
  }
  return chapterTrans[currentLanguage] || chapterTrans['en'] || chapterId;
}

export function getModuleName(moduleId: string): string {
  const moduleKeys: Record<string, string> = {
    'upper-lower-limbs': 'module.upperLowerLimbs',
    'internal-organs': 'module.internalOrgans',
    'head-neck': 'module.headNeck',
    'neuroanatomy': 'module.neuroanatomy',
  };
  const key = moduleKeys[moduleId];
  return key ? t(key) : moduleId;
}
