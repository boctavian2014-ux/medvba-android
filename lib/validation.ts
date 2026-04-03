/**
 * Shared validation utilities for consistent input validation across the app
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

// Email validation - strict RFC 5322 compliant pattern
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export function validateEmail(email: string): ValidationResult {
  if (!email || !email.trim()) {
    return { isValid: false, error: 'auth.emailRequired' };
  }
  
  const trimmedEmail = email.trim().toLowerCase();
  
  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return { isValid: false, error: 'auth.emailInvalid' };
  }
  
  return { isValid: true };
}

export function validatePassword(password: string, options?: { minLength?: number; requireSpecialChar?: boolean }): ValidationResult {
  const minLength = options?.minLength ?? 6;
  
  if (!password) {
    return { isValid: false, error: 'auth.passwordRequired' };
  }
  
  if (password.length < minLength) {
    return { isValid: false, error: 'auth.passwordTooShort' };
  }
  
  if (options?.requireSpecialChar) {
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    if (!hasSpecialChar) {
      return { isValid: false, error: 'auth.passwordRequiresSpecialChar' };
    }
  }
  
  return { isValid: true };
}

export function validateName(name: string, options?: { minLength?: number }): ValidationResult {
  const minLength = options?.minLength ?? 2;
  
  if (!name || !name.trim()) {
    return { isValid: false, error: 'auth.nameRequired' };
  }
  
  if (name.trim().length < minLength) {
    return { isValid: false, error: 'auth.nameTooShort' };
  }
  
  return { isValid: true };
}

export function validatePasswordMatch(password: string, confirmPassword: string): ValidationResult {
  if (!confirmPassword) {
    return { isValid: false, error: 'auth.confirmPasswordRequired' };
  }
  
  if (password !== confirmPassword) {
    return { isValid: false, error: 'auth.passwordsDontMatch' };
  }
  
  return { isValid: true };
}

export function validateMessageLength(message: string, maxLength: number = 500): ValidationResult {
  if (!message || !message.trim()) {
    return { isValid: false, error: 'tutor.messageRequired' };
  }
  
  if (message.length > maxLength) {
    return { isValid: false, error: 'tutor.messageTooLong' };
  }
  
  return { isValid: true };
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export function validateSignUpForm(data: SignUpFormData): FormErrors {
  const errors: FormErrors = {};
  
  const nameResult = validateName(data.name);
  if (!nameResult.isValid && nameResult.error) {
    errors.name = nameResult.error;
  }
  
  const emailResult = validateEmail(data.email);
  if (!emailResult.isValid && emailResult.error) {
    errors.email = emailResult.error;
  }
  
  const passwordResult = validatePassword(data.password);
  if (!passwordResult.isValid && passwordResult.error) {
    errors.password = passwordResult.error;
  }
  
  const matchResult = validatePasswordMatch(data.password, data.confirmPassword);
  if (!matchResult.isValid && matchResult.error) {
    errors.confirmPassword = matchResult.error;
  }
  
  return errors;
}

export function validateLoginForm(data: LoginFormData): FormErrors {
  const errors: FormErrors = {};
  
  const emailResult = validateEmail(data.email);
  if (!emailResult.isValid && emailResult.error) {
    errors.email = emailResult.error;
  }
  
  const passwordResult = validatePassword(data.password);
  if (!passwordResult.isValid && passwordResult.error) {
    errors.password = passwordResult.error;
  }
  
  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.values(errors).some((error) => error !== undefined);
}

export function clearError(errors: FormErrors, field: string): FormErrors {
  return {
    ...errors,
    [field]: undefined,
  };
}

export function getFirstError(errors: FormErrors): string | undefined {
  return Object.values(errors).find((error) => error !== undefined);
}
