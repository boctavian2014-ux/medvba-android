import { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { Appbar, Text, Card, useTheme } from 'react-native-paper';
import { UIButton, UITextField } from '@/ui';
import { useAuth } from '@/providers/AuthProvider';
import { useLanguage } from '@/providers/LanguageProvider';
import { SPACING } from '@/theme/paperTheme';

export default function LoginScreen() {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { signIn } = useAuth();
  const { t } = useLanguage();

  const validateForm = useCallback(() => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = t('auth.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t('auth.emailInvalid');
    }

    if (!password) {
      newErrors.password = t('auth.passwordRequired');
    } else if (password.length < 6) {
      newErrors.password = t('auth.passwordTooShort');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [email, password, t]);

  const handleLogin = useCallback(async () => {
    if (!validateForm()) {
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
      return;
    }

    setIsLoading(true);

    try {
      console.log('[Login] Attempting login for:', email);
      const { error } = await signIn(email.trim().toLowerCase(), password);

      if (error) {
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        }

        let errorMessage = t('auth.loginFailed');
        if (error.message.includes('Invalid login credentials')) {
          errorMessage = t('auth.invalidCredentials');
        } else if (error.message.includes('Email not confirmed')) {
          errorMessage = t('auth.emailNotConfirmed');
        }

        Alert.alert(t('auth.loginFailed'), errorMessage);
      } else {
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
        console.log('[Login] Login successful, navigating to home');
        router.replace('/(tabs)');
      }
    } catch (error) {
      console.error('[Login] Unexpected error:', error);
      Alert.alert('Error', t('auth.unexpectedError'));
    } finally {
      setIsLoading(false);
    }
  }, [email, password, signIn, validateForm, t]);

  const handleForgotPassword = useCallback(() => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    router.push('/forgot-password' as const);
  }, []);

  const handleSignUp = useCallback(() => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    router.push('/(auth)/signup');
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <Appbar.Header
          style={[styles.appbar, { backgroundColor: theme.colors.background }]}
          statusBarHeight={0}
        >
          <View style={styles.appbarContent} />
        </Appbar.Header>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={[
              styles.scrollContent,
              { paddingHorizontal: SPACING.x3, paddingTop: SPACING.x3, paddingBottom: SPACING.x3 },
            ]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={[styles.header, { marginBottom: SPACING.x5 }]}>
              <View style={{ marginBottom: SPACING.x3 }}>
                <Image
                  source={{
                    uri: 'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/8m00xerxk064za3jpist0',
                  }}
                  style={styles.logoImage}
                />
              </View>
              <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.onBackground }]}>
                {t('auth.welcomeBack')}
              </Text>
              <Text variant="bodyLarge" style={{ color: theme.colors.onSurfaceVariant, textAlign: 'center' }}>
                {t('auth.signInSubtitle')}
              </Text>
            </View>

            <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} mode="elevated">
              <Card.Content style={styles.cardContent}>
                <View style={[styles.inputWrap, { marginBottom: SPACING.x2 }]}>
                  <Text variant="labelMedium" style={{ color: theme.colors.onSurfaceVariant, marginBottom: SPACING.x1 }}>
                    {t('auth.email')}
                  </Text>
                  <UITextField
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                      if (errors.email) setErrors((e) => ({ ...e, email: undefined }));
                    }}
                    placeholder={t('auth.emailPlaceholder')}
                    keyboardType="email-address"
                    style={styles.input}
                  />
                </View>
                {errors.email ? (
                  <Text variant="bodySmall" style={[styles.errorText, { color: theme.colors.error }]}>
                    {errors.email}
                  </Text>
                ) : null}

                <View style={[styles.inputWrap, { marginTop: SPACING.x2, marginBottom: SPACING.x2 }]}>
                  <Text variant="labelMedium" style={{ color: theme.colors.onSurfaceVariant, marginBottom: SPACING.x1 }}>
                    {t('auth.password')}
                  </Text>
                  <UITextField
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text);
                      if (errors.password) setErrors((e) => ({ ...e, password: undefined }));
                    }}
                    placeholder={t('auth.passwordPlaceholder')}
                    secureTextEntry={!showPassword}
                    style={styles.input}
                  />
                </View>
                {errors.password ? (
                  <Text variant="bodySmall" style={[styles.errorText, { color: theme.colors.error }]}>
                    {errors.password}
                  </Text>
                ) : null}

                <View style={{ alignSelf: 'flex-end', marginBottom: SPACING.x2 }}>
                  <UIButton variant="borderless" onPress={handleForgotPassword} disabled={isLoading}>
                    {t('auth.forgotPassword')}
                  </UIButton>
                </View>

                <View style={[styles.primaryButton, { marginTop: SPACING.x1 }]}>
                  <UIButton
                    variant="borderedProminent"
                    onPress={handleLogin}
                    disabled={isLoading}
                    color={theme.colors.primary}
                  >
                    {isLoading ? (t('auth.loading') ?? '...') : t('auth.signIn')}
                  </UIButton>
                </View>
              </Card.Content>
            </Card>

            <View style={[styles.footer, { marginTop: SPACING.x4, gap: SPACING.x1 }]}>
              <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                {t('auth.dontHaveAccount')}
              </Text>
              <UIButton variant="borderless" onPress={handleSignUp} disabled={isLoading}>
                {t('auth.signUp')}
              </UIButton>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  appbar: {
    elevation: 0,
    shadowOpacity: 0,
  },
  appbarContent: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 24,
  },
  title: {
    marginBottom: SPACING.x1,
  },
  card: {
    borderRadius: 16,
    marginBottom: SPACING.x4,
  },
  cardContent: {
    paddingHorizontal: SPACING.x2,
    paddingTop: SPACING.x2,
    paddingBottom: SPACING.x3,
  },
  inputWrap: {},
  input: {
    minHeight: 48,
  },
  errorText: {
    marginTop: SPACING.x1,
    marginLeft: SPACING.x1,
  },
  primaryButton: {
    marginBottom: SPACING.x1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
