import { useState, useRef, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles,
  BookOpen,
  Lightbulb,
  HelpCircle,
  Crown,
  Lock
} from 'lucide-react-native';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/providers/ThemeProvider';
import GlassCard from '@/components/GlassCard';
import { generateText } from '@rork-ai/toolkit-sdk';
import { useSubscription } from '@/providers/SubscriptionProvider';
import { useLanguage } from '@/providers/LanguageProvider';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const getSuggestedQuestions = (t: (key: string) => string) => [
  { icon: BookOpen, text: t('tutor.suggestion1'), category: t('subject.physiology') },
  { icon: Lightbulb, text: t('tutor.suggestion2'), category: t('subject.pathology') },
  { icon: HelpCircle, text: t('tutor.suggestion3'), category: t('subject.pharmacology') },
];

export default function TutorScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();
  const { 
    isPremium, 
    canAskAiQuestion, 
    incrementAiQuestionCount, 
    getRemainingAiQuestions,
    FREE_AI_LIMIT 
  } = useSubscription();

  const remainingAiQuestions = getRemainingAiQuestions();
  const { t } = useLanguage();

  const suggestedQuestions = getSuggestedQuestions(t);

  const getInitialMessage = useCallback((): Message => ({
    id: '1',
    role: 'assistant',
    content: t('tutor.welcomeMessage'),
    timestamp: new Date(),
  }), [t]);

  if (messages.length === 0) {
    setMessages([getInitialMessage()]);
  }

  const generateAIResponse = useCallback(async (conversationHistory: Message[]): Promise<string> => {
    const systemPrompt = `You are an expert AI medical tutor helping students prepare for medical exams (USMLE, MBBS, anatomy exams, etc.).

Your role:
- Explain complex medical concepts clearly and accurately
- Use clinical correlations and mnemonics when helpful
- Structure answers with clear headings and bullet points
- Provide mechanism-based explanations
- Reference relevant anatomy, physiology, pathology, and pharmacology
- Be encouraging and supportive

Formatting guidelines:
- Use **bold** for important terms and headings
- Use bullet points (•) for lists
- Keep explanations concise but comprehensive
- End with a follow-up question or offer to explain more

Topics you cover: Anatomy, Physiology, Pathology, Pharmacology, Biochemistry, Microbiology, Immunology, Histology, Embryology, and clinical medicine.`;

    const messages: { role: 'user' | 'assistant'; content: string }[] = [
      { role: 'user', content: systemPrompt },
      { role: 'assistant', content: 'I understand. I am ready to help medical students with accurate, detailed explanations.' },
    ];

    conversationHistory.forEach((msg) => {
      if (msg.role === 'user' || msg.role === 'assistant') {
        messages.push({ role: msg.role, content: msg.content });
      }
    });

    try {
      console.log('[Tutor] Sending request to AI with', messages.length, 'messages');
      const response = await generateText({ messages });
      console.log('[Tutor] Received AI response:', response.substring(0, 100) + '...');
      return response;
    } catch (error) {
      console.error('[Tutor] AI generation error:', error);
      throw error;
    }
  }, []);

  const handleSend = async () => {
    if (!inputText.trim() || isTyping) return;
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Check if free user can ask AI question
    if (!canAskAiQuestion()) {
      console.log('[Tutor] Free AI question limit reached');
      router.push('/paywall');
      return;
    }

    // Increment AI question count for free users
    const success = await incrementAiQuestionCount();
    if (!success && !isPremium) {
      console.log('[Tutor] Failed to increment AI question count');
      router.push('/paywall');
      return;
    }
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputText.trim(),
      timestamp: new Date(),
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputText('');
    setIsTyping(true);
    
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
    
    try {
      const aiResponseText = await generateAIResponse(updatedMessages);
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponseText,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('[Tutor] Failed to get AI response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: t('tutor.errorMessage'),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  };

  const handleSuggestion = (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.background, colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
          <View style={styles.header}>
            <View style={styles.headerIcon}>
              <Bot color={colors.primary} size={24} />
            </View>
            <View>
              <Text style={styles.title}>{t('tutor.title')}</Text>
              <View style={styles.statusRow}>
                <View style={styles.onlineDot} />
                <Text style={styles.status}>{t('tutor.alwaysAvailable')}</Text>
              </View>
            </View>
            {isPremium ? (
              <View style={styles.premiumBadge}>
                <Sparkles color={colors.warning} size={14} />
                <Text style={styles.premiumText}>{t('tutor.premium')}</Text>
              </View>
            ) : (
              <TouchableOpacity 
                style={styles.upgradeButton}
                onPress={() => router.push('/paywall')}
              >
                <Crown color={colors.warning} size={14} />
                <Text style={styles.upgradeButtonText}>{t('tutor.upgrade')}</Text>
              </TouchableOpacity>
            )}
          </View>

          <ScrollView 
            ref={scrollViewRef}
            style={styles.messagesContainer}
            contentContainerStyle={styles.messagesContent}
            showsVerticalScrollIndicator={false}
          >
            {!isPremium && (
              <View style={styles.freeLimitBanner}>
                <View style={styles.freeLimitContent}>
                  <Text style={styles.freeLimitText}>
                    {remainingAiQuestions > 0 
                      ? t('tutor.freeQuestionRemaining').replace('{remaining}', String(remainingAiQuestions)).replace('{total}', String(FREE_AI_LIMIT))
                      : t('tutor.dailyLimitReached')}
                  </Text>
                  {remainingAiQuestions === 0 && (
                    <Lock color={colors.error} size={16} />
                  )}
                </View>
              </View>
            )}

            {messages.length === 1 && (
              <View style={styles.suggestions}>
                <Text style={styles.suggestionsTitle}>{t('tutor.tryAsking')}</Text>
                {suggestedQuestions.map((suggestion, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSuggestion(suggestion.text)}
                  >
                    <GlassCard style={styles.suggestionCard}>
                      <suggestion.icon color={colors.primary} size={20} />
                      <View style={styles.suggestionContent}>
                        <Text style={styles.suggestionText}>{suggestion.text}</Text>
                        <Text style={styles.suggestionCategory}>{suggestion.category}</Text>
                      </View>
                    </GlassCard>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {messages.map((message) => (
              <View
                key={message.id}
                style={[
                  styles.messageRow,
                  message.role === 'user' && styles.messageRowUser
                ]}
              >
                {message.role === 'assistant' && (
                  <View style={styles.avatarContainer}>
                    <Bot color={colors.primary} size={18} />
                  </View>
                )}
                <View
                  style={[
                    styles.messageBubble,
                    message.role === 'user' ? styles.userBubble : styles.assistantBubble
                  ]}
                >
                  <Text style={[
                    styles.messageText,
                    message.role === 'user' && styles.userMessageText
                  ]}>
                    {message.content}
                  </Text>
                </View>
                {message.role === 'user' && (
                  <View style={[styles.avatarContainer, styles.userAvatar]}>
                    <User color={colors.text} size={18} />
                  </View>
                )}
              </View>
            ))}

            {isTyping && (
              <View style={styles.messageRow}>
                <View style={styles.avatarContainer}>
                  <Bot color={colors.primary} size={18} />
                </View>
                <View style={[styles.messageBubble, styles.assistantBubble, styles.typingBubble]}>
                  <View style={styles.typingIndicator}>
                    <View style={[styles.typingDot, styles.typingDot1]} />
                    <View style={[styles.typingDot, styles.typingDot2]} />
                    <View style={[styles.typingDot, styles.typingDot3]} />
                  </View>
                </View>
              </View>
            )}
          </ScrollView>

          <View style={styles.inputContainer}>
            <GlassCard style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={t('tutor.inputPlaceholder')}
                placeholderTextColor={colors.textMuted}
                value={inputText}
                onChangeText={setInputText}
                multiline
                maxLength={500}
              />
              <TouchableOpacity
                style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
                onPress={handleSend}
                disabled={!inputText.trim()}
              >
                <Send color={inputText.trim() ? colors.text : colors.textMuted} size={20} />
              </TouchableOpacity>
            </GlassCard>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const createStyles = (colors: typeof import('@/constants/colors').darkColors) => StyleSheet.create({
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.glassBorder,
  },
  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.cardBgLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: colors.text,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success,
  },
  status: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  premiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 184, 0, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginLeft: 'auto',
    gap: 4,
  },
  premiumText: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: colors.warning,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 20,
    paddingBottom: 10,
  },
  suggestions: {
    marginBottom: 20,
  },
  suggestionsTitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  suggestionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 12,
  },
  suggestionContent: {
    flex: 1,
  },
  suggestionText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500' as const,
  },
  suggestionCategory: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  messageRow: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-end',
  },
  messageRowUser: {
    justifyContent: 'flex-end',
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.cardBgLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  userAvatar: {
    backgroundColor: colors.primary,
    marginRight: 0,
    marginLeft: 8,
  },
  messageBubble: {
    maxWidth: '75%',
    borderRadius: 18,
    padding: 14,
  },
  assistantBubble: {
    backgroundColor: colors.cardBgLight,
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },
  userMessageText: {
    color: colors.text,
  },
  typingBubble: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  typingIndicator: {
    flexDirection: 'row',
    gap: 4,
  },
  typingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.textMuted,
  },
  typingDot1: {
    opacity: 0.4,
  },
  typingDot2: {
    opacity: 0.6,
  },
  typingDot3: {
    opacity: 0.8,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    paddingTop: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    maxHeight: 100,
    paddingVertical: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  sendButtonDisabled: {
    backgroundColor: colors.cardBgLight,
  },
  upgradeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 184, 0, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginLeft: 'auto',
    gap: 4,
  },
  upgradeButtonText: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: colors.warning,
  },
  freeLimitBanner: {
    backgroundColor: 'rgba(255, 184, 0, 0.1)',
    borderColor: 'rgba(255, 184, 0, 0.3)',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  freeLimitContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  freeLimitText: {
    fontSize: 14,
    color: colors.warning,
    fontWeight: '500' as const,
    flex: 1,
  },
});

