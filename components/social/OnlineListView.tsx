import React from 'react';
import { View, FlatList, StyleSheet, ListRenderItem } from 'react-native';
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

const MOCK_ONLINE_USERS: OnlineUser[] = [];

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

  const renderUser: ListRenderItem<OnlineUser> = ({ item }) => (
    <View 
      style={[styles.row, { borderBottomColor: colors.glassBorder }]}
      accessibilityLabel={`${item.name}, ${item.status || 'available'}`}
    >
      <View style={styles.left}>
        <AvatarImage 
          size={40} 
          uri={item.avatar}
          seed={item.userId}
          accessibilityLabel={`${item.name}'s avatar`}
        />
        <OnlineIndicator isOnline={item.isOnline} size={12} style={styles.onlineDot} />
        <View style={styles.texts}>
          <Text variant="bodyMedium" style={{ color: colors.text }} accessibilityLabel={item.name}>
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

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text variant="bodyLarge" style={[styles.emptyTitle, { color: colors.textMuted }]}>
        No users online
      </Text>
      <Text variant="bodyMedium" style={[styles.emptySubtitle, { color: colors.textMuted }]}>
        Check back later to find study partners
      </Text>
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
        contentContainerStyle={[styles.listContent, MOCK_ONLINE_USERS.length === 0 && styles.emptyListContent]}
        ListEmptyComponent={renderEmptyState}
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
  emptyListContent: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyState: {
    alignItems: 'center',
    padding: spacing.xl,
  },
  emptyTitle: {
    marginBottom: spacing.sm,
  },
  emptySubtitle: {
    opacity: 0.7,
    textAlign: 'center',
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
