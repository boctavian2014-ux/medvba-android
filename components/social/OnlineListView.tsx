import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { spacing } from '@/constants/design';
import Button from '../Button';
import AvatarImage from '../AvatarImage';
import OnlineIndicator from '../OnlineIndicator';
import { useTheme } from '@/providers/ThemeProvider';
import type { OnlineUser } from '@/lib/chat';
import type { SocialStackParamList } from '@/lib/navigation';

type Nav = NativeStackNavigationProp<SocialStackParamList, 'SocialMain'>;

const MOCK_ONLINE_USERS: OnlineUser[] = [
  {
    userId: 'u1',
    name: 'Alex',
    avatar: 'https://example.com/a1.png',
    status: 'Studying anatomy',
    isOnline: true,
  },
  {
    userId: 'u2',
    name: 'Maria',
    avatar: 'https://example.com/a2.png',
    status: 'Ready to chat',
    isOnline: true,
  },
  {
    userId: 'u3',
    name: 'John',
    avatar: 'https://example.com/a3.png',
    status: 'Taking a break',
    isOnline: true,
  },
  {
    userId: 'u4',
    name: 'Emma',
    avatar: 'https://example.com/a4.png',
    status: 'Reviewing flashcards',
    isOnline: true,
  },
];

interface OnlineListViewProps {
  onOpenChat?: (userId: string) => void;
}

export function OnlineListView({ onOpenChat }: OnlineListViewProps) {
  const navigation = useNavigation<Nav>();
  const { colors } = useTheme();

  const handleOpenChat = (user: OnlineUser) => {
    onOpenChat?.(user.userId);
    navigation.navigate('PrivateChat', {
      peerId: user.userId,
      peerName: user.name,
      peerAvatar: user.avatar,
    });
  };

  const renderUser = ({ item }: { item: OnlineUser }) => (
    <View style={[styles.row, { borderBottomColor: colors.glassBorder }]}>
      <View style={styles.left}>
        <AvatarImage size={40} uri={item.avatar} />
        <OnlineIndicator isOnline={item.isOnline} size={12} style={styles.onlineDot} />
        <View style={styles.texts}>
          <Text variant="bodyMedium" style={{ color: colors.text }}>
            {item.name}
          </Text>
          {item.status ? (
            <Text variant="labelSmall" style={[styles.statusText, { color: colors.textMuted }]}>
              {item.status}
            </Text>
          ) : null}
        </View>
      </View>
      <Button
        title="Message"
        variant="primary"
        size="small"
        onPress={() => handleOpenChat(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={[styles.title, { color: colors.text }]}>
        Online now
      </Text>

      <FlatList
        data={MOCK_ONLINE_USERS}
        keyExtractor={(item) => item.userId}
        renderItem={renderUser}
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
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  texts: {
    marginLeft: spacing.md,
    flex: 1,
  },
  statusText: { opacity: 0.7, marginTop: 2 },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    left: 28,
  },
});

export default OnlineListView;
