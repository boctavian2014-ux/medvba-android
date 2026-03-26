import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { spacing } from '@/constants/design';
import Button from '../Button';
import AvatarImage from '../AvatarImage';
import OnlineIndicator from '../OnlineIndicator';
import { AllChannelView } from './AllChannelView';
import { OnlineListView } from './OnlineListView';
import { PrivateChatsView } from './PrivateChatsView';
import { useTheme } from '@/providers/ThemeProvider';
import type { SocialStackParamList } from '@/lib/navigation';

type TabKey = 'all' | 'online' | 'private';
type Nav = NativeStackNavigationProp<SocialStackParamList, 'SocialMain'>;

interface SocialScreenProps {
  userAvatar?: string;
  userId?: string;
  isOnline?: boolean;
}

export function SocialScreen({
  userAvatar,
  userId,
  isOnline = true,
}: SocialScreenProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('all');
  const navigation = useNavigation<Nav>();
  const { colors } = useTheme();

  const getTabVariant = (tab: TabKey) => {
    return activeTab === tab ? 'primary' : 'secondary';
  };

  const handleSearch = () => {
    // TODO: Open search modal
  };

  const handleSettings = () => {
    // TODO: Navigate to settings
  };

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <AvatarImage size={36} uri={userAvatar} />
            <OnlineIndicator isOnline={isOnline} size={10} />
          </View>
        </View>
        <Text variant="titleLarge" style={[styles.headerTitle, { color: colors.text }]}>
          Social
        </Text>
        <View style={styles.headerRight}>
          <IconButton
            icon="magnify"
            onPress={handleSearch}
            iconColor={colors.text}
          />
          <IconButton
            icon="cog-outline"
            onPress={handleSettings}
            iconColor={colors.text}
          />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <Button
          title="All"
          variant={getTabVariant('all')}
          onPress={() => setActiveTab('all')}
          style={styles.tabButton}
          fullWidth
        />
        <Button
          title="Online"
          variant={getTabVariant('online')}
          onPress={() => setActiveTab('online')}
          style={styles.tabButton}
          fullWidth
        />
        <Button
          title="Private"
          variant={getTabVariant('private')}
          onPress={() => setActiveTab('private')}
          style={styles.tabButton}
          fullWidth
        />
      </View>

      {/* Content */}
      <View style={[styles.contentCard, { backgroundColor: colors.cardBg }]}>
        {activeTab === 'all' && <AllChannelView />}
        {activeTab === 'online' && <OnlineListView />}
        {activeTab === 'private' && <PrivateChatsView />}
      </View>
    </SafeAreaView>
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
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.sm,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  tabButton: {
    flex: 1,
  },
  contentCard: {
    flex: 1,
    borderRadius: spacing.xxl,
    padding: spacing.lg,
  },
});

export default SocialScreen;
