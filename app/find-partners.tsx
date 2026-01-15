import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  RefreshControl,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { X, Search, MapPin, School, Users, BookOpen, Filter } from 'lucide-react-native';
import Colors from '@/constants/colors';
import GlassCard from '@/components/GlassCard';
import { useStudyPartners } from '@/lib/supabase-hooks';
import type { UserAccount } from '@/types/user';
import { useAuth } from '@/providers/AuthProvider';

export default function FindPartnersScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | undefined>();
  const [selectedUniversity, setSelectedUniversity] = useState<string | undefined>();
  const [showFilters, setShowFilters] = useState(false);

  const { data: allPartners = [], isLoading, refetch, isRefetching } = useStudyPartners();

  const filteredPartners = useMemo(() => {
    let filtered = allPartners.filter((partner) => partner.id !== user?.id);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (partner) =>
          partner.name.toLowerCase().includes(query) ||
          partner.bio?.toLowerCase().includes(query) ||
          partner.city?.toLowerCase().includes(query) ||
          partner.university?.toLowerCase().includes(query)
      );
    }

    if (selectedCity) {
      filtered = filtered.filter((partner) => partner.city === selectedCity);
    }

    if (selectedUniversity) {
      filtered = filtered.filter((partner) => partner.university === selectedUniversity);
    }

    return filtered;
  }, [allPartners, searchQuery, selectedCity, selectedUniversity, user?.id]);

  const availableCities = useMemo(() => {
    const cities = new Set<string>();
    allPartners.forEach((partner) => {
      if (partner.city) cities.add(partner.city);
    });
    return Array.from(cities).sort();
  }, [allPartners]);

  const availableUniversities = useMemo(() => {
    const universities = new Set<string>();
    allPartners.forEach((partner) => {
      if (partner.university) universities.add(partner.university);
    });
    return Array.from(universities).sort();
  }, [allPartners]);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCity) count++;
    if (selectedUniversity) count++;
    return count;
  }, [selectedCity, selectedUniversity]);

  const handleClearFilters = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setSelectedCity(undefined);
    setSelectedUniversity(undefined);
  };

  const renderPartnerCard = (partner: UserAccount) => (
    <GlassCard key={partner.id} style={styles.partnerCard}>
      <View style={styles.partnerHeader}>
        <Image source={{ uri: partner.avatar }} style={styles.partnerAvatar} />
        <View style={styles.partnerInfo}>
          <Text style={styles.partnerName}>{partner.name}</Text>
          {partner.city && (
            <View style={styles.partnerMetaItem}>
              <MapPin color={Colors.accent} size={14} />
              <Text style={styles.partnerMetaText}>{partner.city}</Text>
            </View>
          )}
        </View>
      </View>

      {partner.university && (
        <View style={styles.partnerDetail}>
          <View style={styles.partnerDetailIcon}>
            <School color={Colors.secondary} size={16} />
          </View>
          <Text style={styles.partnerDetailText}>
            {partner.university}
            {partner.year_of_study && ` • Year ${partner.year_of_study}`}
          </Text>
        </View>
      )}

      {partner.bio && (
        <View style={styles.partnerBio}>
          <Text style={styles.partnerBioText} numberOfLines={3}>
            {partner.bio}
          </Text>
        </View>
      )}

      <View style={styles.partnerActions}>
        <TouchableOpacity
          style={styles.viewProfileButton}
          onPress={() => {
            if (Platform.OS !== 'web') {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }
            console.log('View profile:', partner.id);
          }}
          activeOpacity={0.7}
        >
          <Users color={Colors.primary} size={16} />
          <Text style={styles.viewProfileButtonText}>View Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.connectButton}
          onPress={() => {
            if (Platform.OS !== 'web') {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            }
            console.log('Connect with:', partner.id);
          }}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            style={StyleSheet.absoluteFill}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
          <BookOpen color={Colors.text} size={16} />
          <Text style={styles.connectButtonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </GlassCard>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background, '#0D1F35', Colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
        locations={[0, 0.5, 1]}
      />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={() => router.back()} activeOpacity={0.7}>
            <X color={Colors.text} size={24} />
          </TouchableOpacity>
          <Text style={styles.title}>Find Study Partners</Text>
          <TouchableOpacity
            style={[styles.filterButton, activeFiltersCount > 0 && styles.filterButtonActive]}
            onPress={() => {
              if (Platform.OS !== 'web') {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }
              setShowFilters(!showFilters);
            }}
            activeOpacity={0.7}
          >
            <Filter color={activeFiltersCount > 0 ? Colors.text : Colors.textSecondary} size={22} />
            {activeFiltersCount > 0 && (
              <View style={styles.filterBadge}>
                <Text style={styles.filterBadgeText}>{activeFiltersCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Search color={Colors.textMuted} size={20} />
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search by name, bio, location..."
              placeholderTextColor={Colors.textMuted}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <X color={Colors.textMuted} size={20} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {showFilters && (
          <View style={styles.filtersSection}>
            <LinearGradient
              colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
              style={StyleSheet.absoluteFill}
            />
            <Text style={styles.filtersSectionTitle}>Filters</Text>

            <View style={styles.filterGroup}>
              <Text style={styles.filterLabel}>City</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterChips}>
                <TouchableOpacity
                  style={[styles.filterChip, !selectedCity && styles.filterChipActive]}
                  onPress={() => setSelectedCity(undefined)}
                >
                  <Text style={[styles.filterChipText, !selectedCity && styles.filterChipTextActive]}>All</Text>
                </TouchableOpacity>
                {availableCities.map((city) => (
                  <TouchableOpacity
                    key={city}
                    style={[styles.filterChip, selectedCity === city && styles.filterChipActive]}
                    onPress={() => setSelectedCity(city)}
                  >
                    <Text style={[styles.filterChipText, selectedCity === city && styles.filterChipTextActive]}>
                      {city}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.filterGroup}>
              <Text style={styles.filterLabel}>University</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterChips}>
                <TouchableOpacity
                  style={[styles.filterChip, !selectedUniversity && styles.filterChipActive]}
                  onPress={() => setSelectedUniversity(undefined)}
                >
                  <Text style={[styles.filterChipText, !selectedUniversity && styles.filterChipTextActive]}>All</Text>
                </TouchableOpacity>
                {availableUniversities.map((uni) => (
                  <TouchableOpacity
                    key={uni}
                    style={[styles.filterChip, selectedUniversity === uni && styles.filterChipActive]}
                    onPress={() => setSelectedUniversity(uni)}
                  >
                    <Text style={[styles.filterChipText, selectedUniversity === uni && styles.filterChipTextActive]}>
                      {uni}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {activeFiltersCount > 0 && (
              <TouchableOpacity style={styles.clearFiltersButton} onPress={handleClearFilters}>
                <Text style={styles.clearFiltersButtonText}>Clear Filters</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} tintColor={Colors.primary} />}
        >
          <View style={styles.resultsHeader}>
            <Text style={styles.resultsCount}>
              {isLoading ? 'Loading...' : `${filteredPartners.length} student${filteredPartners.length !== 1 ? 's' : ''} found`}
            </Text>
          </View>

          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={Colors.primary} />
              <Text style={styles.loadingText}>Finding study partners...</Text>
            </View>
          ) : filteredPartners.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Users color={Colors.textMuted} size={64} />
              <Text style={styles.emptyTitle}>No study partners found</Text>
              <Text style={styles.emptySubtitle}>
                {searchQuery || activeFiltersCount > 0
                  ? 'Try adjusting your search or filters'
                  : 'Be the first to set up your profile!'}
              </Text>
            </View>
          ) : (
            filteredPartners.map(renderPartnerCard)
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
  },
  title: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  filterButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: Colors.error,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterBadgeText: {
    fontSize: 11,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: Colors.text,
  },
  filtersSection: {
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    padding: 16,
    overflow: 'hidden',
  },
  filtersSectionTitle: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 12,
  },
  filterGroup: {
    marginBottom: 12,
  },
  filterLabel: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  filterChips: {
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.cardBgLight,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  filterChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterChipText: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
  },
  filterChipTextActive: {
    color: Colors.text,
  },
  clearFiltersButton: {
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: 4,
  },
  clearFiltersButtonText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.primary,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  resultsHeader: {
    marginBottom: 16,
  },
  resultsCount: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  loadingText: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginTop: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: Colors.text,
    marginTop: 20,
  },
  emptySubtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginTop: 8,
    textAlign: 'center',
  },
  partnerCard: {
    marginBottom: 16,
  },
  partnerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  partnerAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  partnerInfo: {
    flex: 1,
    marginLeft: 14,
  },
  partnerName: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 4,
  },
  partnerMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  partnerMetaText: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  partnerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  partnerDetailIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.06)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  partnerDetailText: {
    flex: 1,
    fontSize: 14,
    color: Colors.textSecondary,
  },
  partnerBio: {
    marginBottom: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.glassBorder,
  },
  partnerBioText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  partnerActions: {
    flexDirection: 'row',
    gap: 10,
  },
  viewProfileButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: Colors.cardBgLight,
    borderWidth: 1,
    borderColor: Colors.primary,
    gap: 6,
  },
  viewProfileButtonText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.primary,
  },
  connectButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 6,
    overflow: 'hidden',
  },
  connectButtonText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.text,
  },
});
