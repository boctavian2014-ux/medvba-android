import { Stack } from 'expo-router';
import Colors from '@/constants/colors';

export default function LegalLayout() {
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
        options={{ title: 'Privacy Policy' }}
      />
      <Stack.Screen
        name="terms-of-service"
        options={{ title: 'Terms of Service' }}
      />
      <Stack.Screen
        name="code-of-conduct"
        options={{ title: 'Code of Conduct' }}
      />
    </Stack>
  );
}
