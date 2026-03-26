import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { spacing } from '@/constants/design';
import AvatarImage from '../AvatarImage';
import OnlineIndicator from '../OnlineIndicator';
import { useTheme } from '@/providers/ThemeProvider';
import type { ConversationSummary } from '@/lib/chat';
import type { SocialStackParamList } from '@/lib/navigation';

type Nav = NativeStackNavigationProp<SocialStackParamList, 'SocialMain'>;

const MOCK_CONVERSATIONS: ConversationSummary[] = [
  {
    id: 'c1',
    peerId: 'u1',
    peerName: 'Alex',
    peerAvatar: 'https://example.com/a1.png',
    lastMessage: "Let's review cranial nerves.",
    lastAt: '11:54',
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: 'c2',
    peerId: 'u2',
    peerName: 'Maria',
    peerAvatar: 'https://example.com/a2.png',
    lastMessage: 'Thanks for the study tips!',
    lastAt: 'Yesterday',
    unreadCount: 0,
    isOnline: true,
  },
  {
    id: 'c3',
    peerId: 'u3',
    peerName: 'John',
    peerAvatar: 'https://example.com/a3.png',
    lastMessage: 'See you at the study group tomorrow.',
    lastAt: 'Mon',
    unreadCount: 0,
    isOnline: false,
  },
];

interface PrivateChatsViewProps {
  onOpenChat?: (conversationId: string, peerId: string) => void;
}

export function PrivateChatsView({ onOpenChat }: PrivateChatsViewProps) {
  const navigation = useNavigation<Nav>();
  const { colors } = useTheme();

  const handleOpenChat = (conversation: ConversationSummary) => {
    onOpenChat?.(conversation.id, conversation.peerId);
    navigation.navigate('PrivateChat', {
      conversationId: conversation.id,
      peerId: conversation.peerId,
      peerName: conversation.peerName,
      peerAvatar: conversation.peerAvatar,
    });
  };

  const renderConversation = ({ item }: { item: ConversationSummary }) => (
    <TouchableOpacity
      style={[styles.row, { borderBottomColor: colors.glassBorder }]}
      onPress={() => handleOpenChat(item)}
      activeOpacity={0.7}
    >
      <View style={styles.avatarContainer}>
        <AvatarImage size={44} uri={item.peerAvatar} />
        <OnlineIndicator isOnline={item.isOnline} size={12} style={styles.onlineDot} />
      </View>
      <View style={styles.center}>
        <View style={styles.nameRow}>
          <Text variant="bodyMedium" style={{ color: colors.text }}>
            {item.peerName}
          </Text>
        </View>
        <Text
          variant="bodySmall"
          numberOfLines={1}
          style={[styles.lastMessage, { color: colors.textMuted }]}
        >
          {item.lastMessage}
        </Text>
      </View>
      <View style={styles.right}>
        <Text variant="labelSmall" style={[styles.time, { color: colors.textMuted }]}>
          {item.lastAt}
        </Text>
        {item.unreadCount > 0 && (
          <Badge style={[styles.badge, { backgroundColor: colors.primary }]}>
            {item.unreadCount}
          </Badge>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={[styles.title, { color: colors.text }]}>
        Private chats
      </Text>

      <FlatList
        data={MOCK_CONVERSATIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderConversation}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: spacing.md }} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { marginBottom: spacing.md },
  listContent: {
    paddingBottom: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatarContainer: {
    position: 'relative',
  },
  center: {
    flex: 1,
    marginHorizontal: spacing.md,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  lastMessage: { opacity: 0.8 },
  right: {
    alignItems: 'flex-end',
  },
  time: { opacity: 0.6, marginBottom: spacing.xs },
  badge: {
    minWidth: 20,
    height: 20,
    lineHeight: 20,
    textAlign: 'center',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default PrivateChatsView;
