import { useState, useEffect, useCallback, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import { en } from '@/locales/en';
import { ro } from '@/locales/ro';
import { chapterTranslations } from '@/locales/chapterTranslations';
import { log } from '@/lib/log';

export type Language = 'en' | 'ro';

const LANGUAGE_STORAGE_KEY = '@medvba_language';

const translations: Record<Language, Record<string, string>> = {
  en,
  ro,
};

export const [LanguageProvider, useLanguage] = createContextHook(() => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (storedLanguage && ['en', 'ro'].includes(storedLanguage)) {
          setCurrentLanguage(storedLanguage as Language);
          log.debug('Loaded language from storage:', storedLanguage);
        }
      } catch (error) {
        log.error('Error loading language:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadLanguage();
  }, []);

  const changeLanguage = useCallback(async (lang: Language) => {
    try {
      setCurrentLanguage(lang);
      await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      log.debug('Language changed and saved:', lang);
    } catch (error) {
      log.error('Error saving language:', error);
    }
  }, []);

  const t = useCallback((key: string): string => {
    const translation = translations[currentLanguage]?.[key];
    if (!translation) {
      log.warn(`Missing translation for key: ${key} in language: ${currentLanguage}`);
      return translations['en']?.[key] || key;
    }
    return translation;
  }, [currentLanguage]);

  const getChapterTitle = useCallback((chapterId: string): string => {
    const chapterTrans = chapterTranslations[chapterId];
    if (!chapterTrans) {
      log.warn(`Missing chapter translation for: ${chapterId}`);
      return chapterId;
    }
    return chapterTrans[currentLanguage] || chapterTrans['en'] || chapterId;
  }, [currentLanguage]);

  const getModuleName = useCallback((moduleId: string): string => {
    const moduleKeys: Record<string, string> = {
      'upper-lower-limbs': 'module.upperLowerLimbs',
      'internal-organs': 'module.internalOrgans',
      'head-neck': 'module.headNeck',
      'neuroanatomy': 'module.neuroanatomy',
    };
    const key = moduleKeys[moduleId];
    return key ? t(key) : moduleId;
  }, [t]);

  return useMemo(() => ({
    currentLanguage,
    changeLanguage,
    t,
    getChapterTitle,
    getModuleName,
    isLoading,
  }), [currentLanguage, changeLanguage, t, getChapterTitle, getModuleName, isLoading]);
});
