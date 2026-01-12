import { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Mail, Lock, Eye, EyeOff, User, BookOpen, ArrowLeft } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import colors from '@/constants/colors';
import { useAuth } from '@/providers/AuthProvider';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const { signUp } = useAuth();

  const validateForm = useCallback(() => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [name, email, password, confirmPassword]);

  const handleSignUp = useCallback(async () => {
    if (!validateForm()) {
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
      return;
    }

    setIsLoading(true);

    try {
      console.log('[SignUp] Attempting sign up for:', email);
      const { error } = await signUp(email.trim().toLowerCase(), password, name.trim());

      if (error) {
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        }

        let errorMessage = 'Sign up failed. Please try again.';
        if (error.message.includes('already registered')) {
          errorMessage = 'This email is already registered. Please sign in instead.';
        } else if (error.message.includes('Password')) {
          errorMessage = error.message;
        }

        Alert.alert('Sign Up Failed', errorMessage);
      } else {
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
        console.log('[SignUp] Sign up successful');
        Alert.alert(
          'Account Created',
          'Please check your email to verify your account before signing in.',
          [{ text: 'OK', onPress: () => router.replace('/(auth)/login') }]
        );
      }
    } catch (error) {
      console.error('[SignUp] Unexpected error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [email, password, name, signUp, validateForm]);

  const handleBack = useCallback(() => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    router.back();
  }, []);

  const handleSignIn = useCallback(() => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    router.replace('/(auth)/login');
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.background, colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
      />

      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <ArrowLeft size={24} color={colors.text} />
            </TouchableOpacity>

            <View style={styles.header}>
              <View style={styles.logoContainer}>
                <LinearGradient
                  colors={[colors.accent, colors.success]}
                  style={styles.logoGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <BookOpen size={40} color="#fff" strokeWidth={1.5} />
                </LinearGradient>
              </View>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>Join thousands of medical students</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Full Name</Text>
                <View style={[styles.inputContainer, errors.name && styles.inputError]}>
                  <User size={20} color={colors.textSecondary} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor={colors.textMuted}
                    value={name}
                    onChangeText={(text) => {
                      setName(text);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    autoCapitalize="words"
                    autoComplete="name"
                    editable={!isLoading}
                  />
                </View>
                {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <View style={[styles.inputContainer, errors.email && styles.inputError]}>
                  <Mail size={20} color={colors.textSecondary} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={colors.textMuted}
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    editable={!isLoading}
                  />
                </View>
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Password</Text>
                <View style={[styles.inputContainer, errors.password && styles.inputError]}>
                  <Lock size={20} color={colors.textSecondary} />
                  <TextInput
                    style={styles.input}
                    placeholder="Create a password"
                    placeholderTextColor={colors.textMuted}
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text);
                      if (errors.password) setErrors({ ...errors, password: undefined });
                    }}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoComplete="new-password"
                    editable={!isLoading}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  >
                    {showPassword ? (
                      <EyeOff size={20} color={colors.textSecondary} />
                    ) : (
                      <Eye size={20} color={colors.textSecondary} />
                    )}
                  </TouchableOpacity>
                </View>
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Confirm Password</Text>
                <View style={[styles.inputContainer, errors.confirmPassword && styles.inputError]}>
                  <Lock size={20} color={colors.textSecondary} />
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm your password"
                    placeholderTextColor={colors.textMuted}
                    value={confirmPassword}
                    onChangeText={(text) => {
                      setConfirmPassword(text);
                      if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: undefined });
                    }}
                    secureTextEntry={!showConfirmPassword}
                    autoCapitalize="none"
                    autoComplete="new-password"
                    editable={!isLoading}
                  />
                  <TouchableOpacity
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} color={colors.textSecondary} />
                    ) : (
                      <Eye size={20} color={colors.textSecondary} />
                    )}
                  </TouchableOpacity>
                </View>
                {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
              </View>

              <TouchableOpacity
                style={[styles.signUpButton, isLoading && styles.signUpButtonDisabled]}
                onPress={handleSignUp}
                activeOpacity={0.8}
                disabled={isLoading}
              >
                <LinearGradient
                  colors={[colors.accent, colors.success]}
                  style={styles.signUpGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  {isLoading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text style={styles.signUpButtonText}>Create Account</Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <TouchableOpacity onPress={handleSignIn} disabled={isLoading}>
                <Text style={styles.signInText}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.termsText}>
              By creating an account, you agree to our{' '}
              <Text style={styles.termsLink} onPress={() => router.push('/legal/terms-of-service')}>
                Terms of Service
              </Text>{' '}
              and{' '}
              <Text style={styles.termsLink} onPress={() => router.push('/legal/privacy-policy')}>
                Privacy Policy
              </Text>
            </Text>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 24,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoGradient: {
    width: 72,
    height: 72,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  form: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBg,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    gap: 12,
  },
  inputError: {
    borderColor: colors.error,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 6,
    marginLeft: 4,
  },
  signUpButton: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 8,
  },
  signUpButtonDisabled: {
    opacity: 0.7,
  },
  signUpGradient: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 20,
  },
  footerText: {
    color: colors.textSecondary,
    fontSize: 15,
  },
  signInText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
  },
  termsText: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: colors.primary,
  },
});
