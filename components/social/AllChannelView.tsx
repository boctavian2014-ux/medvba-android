import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { spacing } from '@/constants/design';
import Button from '../Button';
import AvatarImage from '../AvatarImage';
import { useTheme } from '@/providers/ThemeProvider';
import type { ChannelMessage } from '@/lib/chat';
import type { SocialStackParamList } from '@/lib/navigation';

type Nav = NativeStackNavigationProp<SocialStackParamList, 'SocialMain'>;

const MOCK_MESSAGES: ChannelMessage[] = [
  {
    id: '1',
    userId: 'u1',
    userName: 'Alex',
    userAvatar: 'https://example.com/a1.png',
    text: 'Hello everyone! Ready to study neuroanatomy?',
    createdAt: '12:03',
  },
  {
    id: '2',
    userId: 'u2',
    userName: 'Maria',
    userAvatar: 'https://example.com/a2.png',
    text: 'Yes! I am reviewing cranial nerves today.',
    createdAt: '12:05',
  },
  {
    id: '3',
    userId: 'u3',
    userName: 'John',
    userAvatar: 'https://example.com/a3.png',
    text: 'Anyone want to quiz each other on the brachial plexus?',
    createdAt: '12:08',
  },
];

interface AllChannelViewProps {
  onSendMessage?: (message: string) => void;
}

export function AllChannelView({ onSendMessage }: AllChannelViewProps) {
  const [input, setInput] = useState('');
  const navigation = useNavigation<Nav>();
  const { colors } = useTheme();

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage?.(input.trim());
      setInput('');
    }
  };

  const handleOpenPrivateChat = (userId: string, userName: string, userAvatar: string) => {
    navigation.navigate('PrivateChat', {
      peerId: userId,
      peerName: userName,
      peerAvatar: userAvatar,
    });
  };

  const renderMessage = ({ item }: { item: ChannelMessage }) => (
    <View style={styles.messageRow}>
      <AvatarImage size={32} uri={item.userAvatar} />
      <View style={styles.messageTextContainer}>
        <View style={styles.messageHeaderRow}>
          <Text variant="labelLarge" style={{ color: colors.text }}>
            {item.userName}
          </Text>
          <Text variant="labelSmall" style={[styles.timeText, { color: colors.textMuted }]}>
            {item.createdAt}
          </Text>
        </View>
        <Text variant="bodyMedium" style={{ color: colors.text }}>
          {item.text}
        </Text>
        <View style={styles.actionsRow}>
          <Button
            title="Message privately"
            variant="ghost"
            size="small"
            onPress={() => handleOpenPrivateChat(item.userId, item.userName, item.userAvatar)}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text variant="titleMedium" style={{ color: colors.text }}>
          All channel
        </Text>
        <Text variant="labelMedium" style={[styles.onlineCount, { color: colors.textMuted }]}>
          23 online
        </Text>
      </View>

      <FlatList
        data={MOCK_MESSAGES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={renderMessage}
        showsVerticalScrollIndicator={false}
      />

      {/* Input bar */}
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
            placeholder="Write a message to everyone..."
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
  container: { flex: 1 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  onlineCount: { opacity: 0.7 },
  listContent: { paddingBottom: spacing.xl },
  messageRow: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  messageTextContainer: {
    flex: 1,
    marginLeft: spacing.md,
  },
  messageHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  timeText: { opacity: 0.6 },
  actionsRow: { marginTop: spacing.sm },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
  },
  inputFieldWrapper: {
    flex: 1,
    marginRight: spacing.md,
  },
  input: {
    borderWidth: 1,
    borderRadius: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    minHeight: 44,
    maxHeight: 100,
  },
  sendButton: {
    marginBottom: 0,
  },
});

export default AllChannelView;
