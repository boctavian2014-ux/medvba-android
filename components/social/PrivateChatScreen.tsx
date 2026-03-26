import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { spacing } from '@/constants/design';
import Button from '../Button';
import AvatarImage from '../AvatarImage';
import { useTheme } from '@/providers/ThemeProvider';
import type { ChatMessage } from '@/lib/chat';
import type { SocialStackParamList } from '@/lib/navigation';

type Props = NativeStackScreenProps<SocialStackParamList, 'PrivateChat'>;

const MOCK_MESSAGES: ChatMessage[] = [
  { id: '1', fromUserId: 'me', text: 'Hey, ready to study?', createdAt: '12:05' },
  { id: '2', fromUserId: 'peer', text: "Yes, let's start with cranial nerves!", createdAt: '12:06' },
];

export function PrivateChatScreen({ route }: Props) {
  const { peerId, peerName, peerAvatar } = route.params;
  const [input, setInput] = useState('');
  const { colors } = useTheme();

  const handleSend = () => {
    if (input.trim()) {
      // TODO: send message to backend
      setInput('');
    }
  };

  const renderItem = ({ item }: { item: ChatMessage }) => {
    const isMe = item.fromUserId === 'me';
    return (
      <View
        style={[
          styles.bubble,
          isMe ? styles.bubbleMe : styles.bubbleThem,
          {
            backgroundColor: isMe ? colors.primary : colors.cardBgLight,
            borderColor: isMe ? colors.primary : colors.glassBorder,
          },
        ]}
      >
        <Text variant="bodyMedium" style={[styles.bubbleText, { color: isMe ? '#FFFFFF' : colors.text }]}>
          {item.text}
        </Text>
        <Text variant="labelSmall" style={[styles.bubbleTime, { color: isMe ? 'rgba(255,255,255,0.7)' : colors.textMuted }]}>
          {item.createdAt}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      {/* Chat Header */}
      <View style={[styles.header, { borderBottomColor: colors.glassBorder }]}>
        <AvatarImage size={36} uri={peerAvatar} />
        <Text variant="titleMedium" style={[styles.headerTitle, { color: colors.text }]}>
          {peerName}
        </Text>
      </View>

      {/* Messages List */}
      <FlatList
        data={MOCK_MESSAGES}
        keyExtractor={(m) => m.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Input Bar */}
      <View style={[styles.inputBar, { borderTopColor: colors.glassBorder }]}>
        <View style={styles.inputFieldWrapper}>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.backgroundLight,
                color: colors.text,
                borderColor: colors.glassBorder,
              },
            ]}
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
            placeholderTextColor={colors.textMuted}
            multiline
          />
        </View>
        <Button
          title="Send"
          variant="primary"
          onPress={handleSend}
          style={styles.sendButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: spacing.md,
    marginBottom: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerTitle: {
    marginLeft: spacing.md,
    flex: 1,
  },
  listContent: {
    paddingVertical: spacing.md,
    paddingBottom: spacing.xl,
    flexGrow: 1,
  },
  bubble: {
    maxWidth: '75%',
    marginBottom: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
  },
  bubbleMe: {
    alignSelf: 'flex-end',
  },
  bubbleThem: {
    alignSelf: 'flex-start',
  },
  bubbleText: {
    lineHeight: 22,
  },
  bubbleTime: {
    fontSize: 10,
    marginTop: spacing.xs,
    textAlign: 'right',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: spacing.md,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  inputFieldWrapper: {
    flex: 1,
    marginRight: spacing.md,
  },
  input: {
    borderWidth: 1,
    borderRadius: spacing.xxl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    minHeight: 44,
    maxHeight: 100,
  },
  sendButton: {
    marginBottom: 0,
  },
});

export default PrivateChatScreen;
