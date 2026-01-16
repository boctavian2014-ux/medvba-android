import { Stack } from 'expo-router';
import Colors from '@/constants/colors';
import { useLanguage } from '@/providers/LanguageProvider';

export default function LegalLayout() {
  const { t } = useLanguage();
  
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.text,
        headerTitleStyle: {
          fontWeight: '600',
        },
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: Colors.background,
        },
      }}
    >
      <Stack.Screen
        name="privacy-policy"
        options={{ title: t('settings.privacyPolicy') }}
      />
      <Stack.Screen
        name="terms-of-service"
        options={{ title: t('settings.termsOfService') }}
      />
      <Stack.Screen
        name="code-of-conduct"
        options={{ title: t('settings.codeOfConduct') }}
      />
    </Stack>
  );
}
