import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl,
  Alert,
  ActivityIndicator,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  Users, 
  Radio, 
  MessageCircle,
  Flame,
  Trophy,
  BookOpen,
  Star,
  Target,
  Calendar,
  Clock,
  X,
  Plus,
  MoreVertical,
  Ban,
  Flag,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import Colors from '@/constants/colors';
import GlassCard from '@/components/GlassCard';
import RoomChat from '@/components/RoomChat';
import { activities } from '@/mocks/activities';
import {
  useStudyRooms,
  useCreateStudyRoom,
  useUpcomingSessions,
  useCreateSession,
  StudyRoom,
  StudySession,
} from '@/lib/supabase-hooks';
import { useAuth } from '@/providers/AuthProvider';
import { useLanguage } from '@/providers/LanguageProvider';

const BLOCKED_USERS_KEY = '@medix_blocked_users';
const USER_REPORTS_KEY = '@medix_user_reports';

interface BlockedUser {
  id: string;
  name: string;
  avatar: string;
  blockedAt: string;
}

interface UserReport {
  id: string;
  reportedUserId: string;
  reportedUserName: string;
  reason: string;
  details?: string;
  reportedAt: string;
}

const getReportReasons = (t: (key: string) => string) => [
  { id: 'harassment', label: t('social.reportReasons.harassment'), icon: AlertTriangle },
  { id: 'inappropriate', label: t('social.reportReasons.inappropriate'), icon: Ban },
  { id: 'spam', label: t('social.reportReasons.spam'), icon: Flag },
  { id: 'other', label: t('social.reportReasons.other'), icon: Flag },
];

const activityIcons: Record<string, React.ComponentType<{ color: string; size: number }>> = {
  achievement: Trophy,
  streak: Flame,
  quiz_complete: BookOpen,
  exam_passed: Star,
  study_room: Users,
  milestone: Target,
};

const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
};

const formatCountdown = (scheduledFor: string): string => {
  const now = new Date();
  const scheduled = new Date(scheduledFor);
  const diff = scheduled.getTime() - now.getTime();
  
  if (diff <= 0) return 'Starting now';
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `in ${days}d ${hours % 24}h`;
  if (hours > 0) return `in ${hours}h ${minutes % 60}m`;
  return `in ${minutes}m`;
};

const formatSessionTime = (scheduledFor: string): string => {
  const date = new Date(scheduledFor);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  if (date.toDateString() === today.toDateString()) {
    return `Today, ${timeStr}`;
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return `Tomorrow, ${timeStr}`;
  }
  return `${date.toLocaleDateString([], { month: 'short', day: 'numeric' })}, ${timeStr}`;
};



export default function SocialScreen() {
  const { user, profile } = useAuth();
  const { t } = useLanguage();
  const [refreshing, setRefreshing] = useState(false);
  const [reactedActivities, setReactedActivities] = useState<Record<string, string>>({});
  const [localRoomUpdates, setLocalRoomUpdates] = useState<Record<string, Partial<StudyRoom>>>({});
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<StudyRoom | null>(null);
  const [sessionTitle, setSessionTitle] = useState('');
  const [sessionDescription, setSessionDescription] = useState('');
  const [sessionDuration, setSessionDuration] = useState('60');
  const [sessionDate, setSessionDate] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [, forceUpdate] = useState(0);
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomCategory, setNewRoomCategory] = useState('anatomy');
  const [newRoomMaxParticipants, setNewRoomMaxParticipants] = useState('20');
  
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>([]);
  const [showUserActionsModal, setShowUserActionsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<{ id: string; name: string; avatar: string } | null>(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedReportReason, setSelectedReportReason] = useState('');
  const [reportDetails, setReportDetails] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [selectedChatRoom, setSelectedChatRoom] = useState<StudyRoom | null>(null);

  useEffect(() => {
    const interval = setInterval(() => forceUpdate(n => n + 1), 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    loadBlockedUsers();
  }, []);

  const loadBlockedUsers = async () => {
    try {
      const stored = await AsyncStorage.getItem(BLOCKED_USERS_KEY);
      if (stored) {
        setBlockedUsers(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load blocked users:', error);
    }
  };

  const saveBlockedUsers = async (users: BlockedUser[]) => {
    try {
      await AsyncStorage.setItem(BLOCKED_USERS_KEY, JSON.stringify(users));
      setBlockedUsers(users);
    } catch (error) {
      console.error('Failed to save blocked users:', error);
    }
  };

  const handleBlockUser = (user: { id: string; name: string; avatar: string }) => {
    Alert.alert(
      t('social.blockUserTitle'),
      t('social.blockConfirmMessage').replace('{name}', user.name),
      [
        { text: t('social.cancel'), style: 'cancel' },
        {
          text: t('social.blockUser'),
          style: 'destructive',
          onPress: async () => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            const newBlockedUser: BlockedUser = {
              id: user.id,
              name: user.name,
              avatar: user.avatar,
              blockedAt: new Date().toISOString(),
            };
            await saveBlockedUsers([...blockedUsers, newBlockedUser]);
            setShowUserActionsModal(false);
            setSelectedUser(null);
          },
        },
      ]
    );
  };

  const handleOpenReportModal = () => {
    setShowUserActionsModal(false);
    setSelectedReportReason('');
    setReportDetails('');
    setReportSubmitted(false);
    setTimeout(() => setShowReportModal(true), 300);
  };

  const handleSubmitReport = async () => {
    if (!selectedUser || !selectedReportReason) {
      Alert.alert(t('social.missingInfo'), t('social.selectReasonMessage'));
      return;
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    const report: UserReport = {
      id: Date.now().toString(),
      reportedUserId: selectedUser.id,
      reportedUserName: selectedUser.name,
      reason: selectedReportReason,
      details: reportDetails || undefined,
      reportedAt: new Date().toISOString(),
    };

    try {
      const stored = await AsyncStorage.getItem(USER_REPORTS_KEY);
      const reports: UserReport[] = stored ? JSON.parse(stored) : [];
      reports.push(report);
      await AsyncStorage.setItem(USER_REPORTS_KEY, JSON.stringify(reports));
      console.log('Report submitted:', report);
    } catch (error) {
      console.error('Failed to save report:', error);
    }

    setReportSubmitted(true);
  };

  const handleCloseReportModal = () => {
    setShowReportModal(false);
    setSelectedUser(null);
    setSelectedReportReason('');
    setReportDetails('');
    setReportSubmitted(false);
  };

  const handleOpenUserActions = (targetUser: { id: string; name: string; avatar: string }) => {
    if (targetUser.id === user?.id) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedUser(targetUser);
    setShowUserActionsModal(true);
  };

  const isUserBlocked = (userId: string) => blockedUsers.some(u => u.id === userId);

  const studyRoomsQuery = useStudyRooms();
  const upcomingSessionsQuery = useUpcomingSessions();

  const studyRooms: StudyRoom[] = (studyRoomsQuery.data ?? []).map((room: any) => ({
    ...room,
    host: room.host,
    ...localRoomUpdates[room.id],
  }));

  const createSessionMutation = useCreateSession();

  const handleCreateSessionSuccess = useCallback(() => {
    console.log('Session created successfully');
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setShowScheduleModal(false);
    resetScheduleForm();
    upcomingSessionsQuery.refetch();
  }, [upcomingSessionsQuery]);

  const handleCreateSessionError = useCallback((error: any) => {
    console.error('Failed to create session:', error);
    Alert.alert(t('social.errorTitle'), t('social.scheduleError'));
  }, [t]);



  const createRoomMutation = useCreateStudyRoom();

  const handleCreateRoomSuccess = useCallback(() => {
    console.log('Study room created successfully');
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setShowCreateRoomModal(false);
    resetCreateRoomForm();
    studyRoomsQuery.refetch();
  }, [studyRoomsQuery]);

  const handleCreateRoomError = useCallback((error: any) => {
    console.error('Failed to create study room:', error);
    Alert.alert(t('social.errorTitle'), t('social.createRoomError'));
  }, [t]);

  const resetCreateRoomForm = () => {
    setNewRoomName('');
    setNewRoomCategory('anatomy');
    setNewRoomMaxParticipants('20');
  };

  const handleCreateRoom = () => {
    if (!newRoomName.trim()) {
      Alert.alert(t('social.missingInfo'), t('social.roomNameRequiredAlert'));
      return;
    }

    createRoomMutation.mutate(
      {
      name: newRoomName.trim(),
      hostId: user?.id || '',
      hostName: profile?.name || 'You',
      hostAvatar: profile?.avatar || `https://api.dicebear.com/7.x/avataaars/png?seed=${user?.id}`,
      category: newRoomCategory,
        maxParticipants: parseInt(newRoomMaxParticipants, 10),
      },
      {
        onSuccess: handleCreateRoomSuccess,
        onError: handleCreateRoomError,
      }
    );
  };

  const resetScheduleForm = () => {
    setSessionTitle('');
    setSessionDescription('');
    setSessionDuration('60');
    setSessionDate('');
    setSessionTime('');
    setSelectedRoom(null);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setLocalRoomUpdates({});
    Promise.all([
      studyRoomsQuery.refetch(),
      upcomingSessionsQuery.refetch(),
    ]).finally(() => setRefreshing(false));
  }, [studyRoomsQuery, upcomingSessionsQuery]);

  const handleReaction = (activityId: string, emoji: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setReactedActivities(prev => ({
      ...prev,
      [activityId]: prev[activityId] === emoji ? '' : emoji
    }));
  };

  const handleScheduleSession = (room: StudyRoom) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedRoom(room);
    setSessionTitle(`${room.name} Session`);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSessionDate(tomorrow.toISOString().split('T')[0]);
    setSessionTime('18:00');
    setShowScheduleModal(true);
  };

  const handleCreateSession = () => {
    if (!selectedRoom || !sessionTitle || !sessionDate || !sessionTime) {
      Alert.alert(t('social.missingInfo'), t('social.fillAllFields'));
      return;
    }

    const scheduledFor = new Date(`${sessionDate}T${sessionTime}:00`).toISOString();
    
    createSessionMutation.mutate(
      {
      roomId: selectedRoom.id,
      title: sessionTitle,
      description: sessionDescription || undefined,
      scheduledFor,
      durationMinutes: parseInt(sessionDuration, 10),
      hostId: user?.id || '',
      hostName: profile?.name || 'You',
      hostAvatar: profile?.avatar || `https://api.dicebear.com/7.x/avataaars/png?seed=${user?.id}`,
        category: selectedRoom.category,
      },
      {
        onSuccess: handleCreateSessionSuccess,
        onError: handleCreateSessionError,
      }
    );
  };

  const isCurrentUserHost = (room: StudyRoom) => room.hostId === user?.id;
  const isSessionHost = (session: StudySession) => session.hostId === user?.id;

  const upcomingSessions: StudySession[] = upcomingSessionsQuery.data ?? [];
  
  const filteredStudyRooms = studyRooms.filter(room => !isUserBlocked(room.hostId));
  const filteredUpcomingSessions = upcomingSessions.filter(session => !isUserBlocked(session.hostId));

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={Colors.primary}
            />
          }
        >
          <View style={styles.header}>
            <Text style={styles.title}>{t('social.community')}</Text>
            <Text style={styles.subtitle}>{t('social.communitySubtitle')}</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Radio color={Colors.error} size={18} />
              <Text style={styles.sectionTitle}>{t('social.liveStudyRooms')}</Text>
              <TouchableOpacity 
                style={styles.createRoomButton}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  setShowCreateRoomModal(true);
                }}
              >
                <Plus color={Colors.text} size={16} />
                <Text style={styles.createRoomButtonText}>{t('social.create')}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.roomsScroll}
            >
              {filteredStudyRooms.map((room) => {
                const isHost = isCurrentUserHost(room);

                return (
                  <TouchableOpacity 
                    key={room.id} 
                    activeOpacity={0.9}
                    onPress={() => {
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                      setSelectedChatRoom(room);
                      setShowChatModal(true);
                    }}
                  >
                    <GlassCard style={styles.roomCard} variant="light">
                      <Image source={{ uri: room.hostAvatar }} style={styles.roomHostAvatar} />
                      <Text style={styles.roomName} numberOfLines={1}>{room.name}</Text>
                      <Text style={styles.roomHost}>
                        {isHost ? t('social.youAreHosting') : t('social.hostedBy').replace('{name}', room.host)}
                      </Text>
                      <View style={styles.roomFooter}>
                        <Users color={Colors.textSecondary} size={14} />
                        <Text style={styles.roomParticipants}>
                          {room.participants}/{room.maxParticipants}
                        </Text>
                      </View>
                      
                      {!isHost && (
                        <TouchableOpacity
                          style={styles.userActionsButton}
                          onPress={() => handleOpenUserActions({
                            id: room.hostId,
                            name: room.host,
                            avatar: room.hostAvatar,
                          })}
                        >
                          <MoreVertical color={Colors.textMuted} size={18} />
                        </TouchableOpacity>
                      )}
                      
                      <View style={styles.roomActions}>
                        <TouchableOpacity 
                          style={styles.chatButton}
                          onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            setSelectedChatRoom(room);
                            setShowChatModal(true);
                          }}
                        >
                          <MessageCircle color={Colors.primary} size={14} />
                          <Text style={styles.chatButtonText}>{t('social.chat')}</Text>
                        </TouchableOpacity>
                        
                        {isHost && (
                          <TouchableOpacity 
                            style={styles.scheduleButton}
                            onPress={(e) => {
                              e.stopPropagation();
                              handleScheduleSession(room);
                            }}
                          >
                            <Calendar color={Colors.primary} size={14} />
                            <Text style={styles.scheduleButtonText}>{t('social.schedule')}</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </GlassCard>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {filteredUpcomingSessions.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Calendar color={Colors.secondary} size={18} />
                <Text style={styles.sectionTitle}>{t('social.upcomingSessions')}</Text>
              </View>
              
              {filteredUpcomingSessions.map((session) => {
                const isHost = isSessionHost(session);
                
                return (
                  <GlassCard key={session.id} style={styles.sessionCard}>
                    <View style={styles.sessionHeader}>
                      <Image source={{ uri: session.hostAvatar }} style={styles.sessionAvatar} />
                      <View style={styles.sessionInfo}>
                        <Text style={styles.sessionTitle} numberOfLines={1}>{session.title}</Text>
                        <Text style={styles.sessionHost}>
                          {isHost ? t('social.youAreHosting') : `${t('social.hostedBy').replace('Hosted by', '').trim()} ${session.hostName}`}
                        </Text>
                      </View>
                      {!isHost && (
                        <TouchableOpacity
                          style={styles.sessionUserActionsButton}
                          onPress={() => handleOpenUserActions({
                            id: session.hostId,
                            name: session.hostName,
                            avatar: session.hostAvatar,
                          })}
                        >
                          <MoreVertical color={Colors.textMuted} size={18} />
                        </TouchableOpacity>
                      )}
                      <View style={styles.countdownBadge}>
                        <Clock color={Colors.secondary} size={12} />
                        <Text style={styles.countdownText}>{formatCountdown(session.scheduledFor)}</Text>
                      </View>
                    </View>
                    
                    {session.description && (
                      <Text style={styles.sessionDescription} numberOfLines={2}>
                        {session.description}
                      </Text>
                    )}
                    
                    <View style={styles.sessionMeta}>
                      <View style={styles.sessionMetaItem}>
                        <Calendar color={Colors.textMuted} size={14} />
                        <Text style={styles.sessionMetaText}>{formatSessionTime(session.scheduledFor)}</Text>
                      </View>
                      <View style={styles.sessionMetaItem}>
                        <Clock color={Colors.textMuted} size={14} />
                        <Text style={styles.sessionMetaText}>{session.durationMinutes} {t('social.min')}</Text>
                      </View>
                      <View style={styles.sessionMetaItem}>
                        <Users color={Colors.textMuted} size={14} />
                        <Text style={styles.sessionMetaText}>{session.attendees.length} {t('social.joined')}</Text>
                      </View>
                    </View>
                  </GlassCard>
                );
              })}
            </View>
          )}

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MessageCircle color={Colors.primary} size={18} />
              <Text style={styles.sectionTitle}>{t('social.activityFeed')}</Text>
            </View>
            
            {activities.map((activity) => {
              const IconComponent = activityIcons[activity.type] || Star;
              const userReaction = reactedActivities[activity.id];
              
              return (
                <GlassCard key={activity.id} style={styles.activityCard}>
                  <View style={styles.activityHeader}>
                    <Image source={{ uri: activity.userAvatar }} style={styles.activityAvatar} />
                    <View style={styles.activityUserInfo}>
                      <Text style={styles.activityUserName}>{activity.userName}</Text>
                      <Text style={styles.activityTime}>{formatTimeAgo(activity.timestamp)}</Text>
                    </View>
                    <View style={styles.activityTypeIcon}>
                      <IconComponent 
                        color={activity.type === 'streak' ? Colors.streakOrange : Colors.primary} 
                        size={18} 
                      />
                    </View>
                  </View>
                  
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <Text style={styles.activityDescription}>{activity.description}</Text>
                  
                  <View style={styles.reactionsRow}>
                    {activity.reactions.map((reaction, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.reactionBadge,
                          userReaction === reaction.emoji && styles.reactionBadgeActive
                        ]}
                        onPress={() => handleReaction(activity.id, reaction.emoji)}
                      >
                        <Text style={styles.reactionEmoji}>{reaction.emoji}</Text>
                        <Text style={[
                          styles.reactionCount,
                          userReaction === reaction.emoji && styles.reactionCountActive
                        ]}>
                          {reaction.count + (userReaction === reaction.emoji ? 1 : 0)}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </GlassCard>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>

      <Modal
        visible={showScheduleModal}
        animationType="slide"
        transparent
        onRequestClose={() => setShowScheduleModal(false)}
      >
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalOverlay}
        >
          <View style={styles.modalContent}>
            <LinearGradient
              colors={[Colors.cardBg, Colors.background]}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{t('social.scheduleSession')}</Text>
              <TouchableOpacity 
                style={styles.modalClose}
                onPress={() => {
                  setShowScheduleModal(false);
                  resetScheduleForm();
                }}
              >
                <X color={Colors.textSecondary} size={24} />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalBody} showsVerticalScrollIndicator={false}>
              {selectedRoom && (
                <View style={styles.selectedRoomBadge}>
                  <Text style={styles.selectedRoomLabel}>{t('social.room')}</Text>
                  <Text style={styles.selectedRoomName}>{selectedRoom.name}</Text>
                </View>
              )}

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('social.titleRequired')}</Text>
                <TextInput
                  style={styles.textInput}
                  value={sessionTitle}
                  onChangeText={setSessionTitle}
                  placeholder={t('social.titlePlaceholder')}
                  placeholderTextColor={Colors.textMuted}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('social.description')}</Text>
                <TextInput
                  style={[styles.textInput, styles.textArea]}
                  value={sessionDescription}
                  onChangeText={setSessionDescription}
                  placeholder={t('social.descriptionPlaceholder')}
                  placeholderTextColor={Colors.textMuted}
                  multiline
                  numberOfLines={3}
                />
              </View>

              <View style={styles.inputRow}>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                  <Text style={styles.inputLabel}>{t('social.dateRequired')}</Text>
                  <TextInput
                    style={styles.textInput}
                    value={sessionDate}
                    onChangeText={setSessionDate}
                    placeholder={t('social.datePlaceholder')}
                    placeholderTextColor={Colors.textMuted}
                  />
                </View>
                <View style={[styles.inputGroup, { flex: 1, marginLeft: 12 }]}>
                  <Text style={styles.inputLabel}>{t('social.timeRequired')}</Text>
                  <TextInput
                    style={styles.textInput}
                    value={sessionTime}
                    onChangeText={setSessionTime}
                    placeholder={t('social.timePlaceholder')}
                    placeholderTextColor={Colors.textMuted}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('social.durationLabel')}</Text>
                <View style={styles.durationOptions}>
                  {['30', '45', '60', '90', '120'].map(dur => (
                    <TouchableOpacity
                      key={dur}
                      style={[
                        styles.durationOption,
                        sessionDuration === dur && styles.durationOptionActive
                      ]}
                      onPress={() => setSessionDuration(dur)}
                    >
                      <Text style={[
                        styles.durationOptionText,
                        sessionDuration === dur && styles.durationOptionTextActive
                      ]}>
                        {dur}m
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </ScrollView>

            <View style={styles.modalFooter}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => {
                  setShowScheduleModal(false);
                  resetScheduleForm();
                }}
              >
                <Text style={styles.cancelButtonText}>{t('social.cancel')}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.createButton, createSessionMutation.isPending && styles.buttonDisabled]}
                onPress={handleCreateSession}
                disabled={createSessionMutation.isPending}
              >
                {createSessionMutation.isPending ? (
                  <ActivityIndicator size="small" color={Colors.text} />
                ) : (
                  <>
                    <Calendar color={Colors.text} size={16} />
                    <Text style={styles.createButtonText}>{t('social.schedule')}</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <Modal
        visible={showCreateRoomModal}
        animationType="slide"
        transparent
        onRequestClose={() => setShowCreateRoomModal(false)}
      >
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalOverlay}
        >
          <View style={styles.modalContent}>
            <LinearGradient
              colors={[Colors.cardBg, Colors.background]}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{t('social.createStudyRoom')}</Text>
              <TouchableOpacity 
                style={styles.modalClose}
                onPress={() => {
                  setShowCreateRoomModal(false);
                  resetCreateRoomForm();
                }}
              >
                <X color={Colors.textSecondary} size={24} />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalBody} showsVerticalScrollIndicator={false}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('social.roomNameRequired')}</Text>
                <TextInput
                  style={styles.textInput}
                  value={newRoomName}
                  onChangeText={setNewRoomName}
                  placeholder={t('social.roomNamePlaceholder')}
                  placeholderTextColor={Colors.textMuted}
                  maxLength={100}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('social.category')}</Text>
                <View style={styles.categoryOptions}>
                  {['anatomy', 'physiology', 'pathology', 'pharmacology', 'general'].map(cat => (
                    <TouchableOpacity
                      key={cat}
                      style={[
                        styles.categoryOption,
                        newRoomCategory === cat && styles.categoryOptionActive
                      ]}
                      onPress={() => setNewRoomCategory(cat)}
                    >
                      <Text style={[
                        styles.categoryOptionText,
                        newRoomCategory === cat && styles.categoryOptionTextActive
                      ]}>
                        {t(`social.${cat}`)}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>{t('social.maxParticipants')}</Text>
                <View style={styles.durationOptions}>
                  {['5', '10', '20', '50', '100'].map(num => (
                    <TouchableOpacity
                      key={num}
                      style={[
                        styles.durationOption,
                        newRoomMaxParticipants === num && styles.durationOptionActive
                      ]}
                      onPress={() => setNewRoomMaxParticipants(num)}
                    >
                      <Text style={[
                        styles.durationOptionText,
                        newRoomMaxParticipants === num && styles.durationOptionTextActive
                      ]}>
                        {num}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </ScrollView>

            <View style={styles.modalFooter}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => {
                  setShowCreateRoomModal(false);
                  resetCreateRoomForm();
                }}
              >
                <Text style={styles.cancelButtonText}>{t('social.cancel')}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.createButton, createRoomMutation.isPending && styles.buttonDisabled]}
                onPress={handleCreateRoom}
                disabled={createRoomMutation.isPending}
              >
                {createRoomMutation.isPending ? (
                  <ActivityIndicator size="small" color={Colors.text} />
                ) : (
                  <>
                    <Plus color={Colors.text} size={16} />
                    <Text style={styles.createButtonText}>{t('social.createRoom')}</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <Modal
        visible={showUserActionsModal}
        animationType="fade"
        transparent
        onRequestClose={() => setShowUserActionsModal(false)}
      >
        <TouchableOpacity 
          style={styles.userActionsOverlay}
          activeOpacity={1}
          onPress={() => setShowUserActionsModal(false)}
        >
          <View style={styles.userActionsContent}>
            <LinearGradient
              colors={[Colors.cardBg, Colors.background]}
              style={StyleSheet.absoluteFill}
            />
            {selectedUser && (
              <>
                <View style={styles.userActionsHeader}>
                  <Image source={{ uri: selectedUser.avatar }} style={styles.userActionsAvatar} />
                  <Text style={styles.userActionsName}>{selectedUser.name}</Text>
                </View>
                
                <TouchableOpacity
                  style={styles.userActionItem}
                  onPress={() => handleBlockUser(selectedUser)}
                >
                  <View style={[styles.userActionIcon, { backgroundColor: 'rgba(255, 71, 87, 0.15)' }]}>
                    <Ban color={Colors.error} size={20} />
                  </View>
                  <View style={styles.userActionTextContainer}>
                    <Text style={styles.userActionTitle}>{t('social.blockUserTitle')}</Text>
                    <Text style={styles.userActionSubtitle}>{t('social.blockUserSubtitle')}</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.userActionItem}
                  onPress={handleOpenReportModal}
                >
                  <View style={[styles.userActionIcon, { backgroundColor: 'rgba(255, 159, 67, 0.15)' }]}>
                    <Flag color={Colors.warning} size={20} />
                  </View>
                  <View style={styles.userActionTextContainer}>
                    <Text style={styles.userActionTitle}>{t('social.reportUserTitle')}</Text>
                    <Text style={styles.userActionSubtitle}>{t('social.reportUserSubtitle')}</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.userActionCancelButton}
                  onPress={() => setShowUserActionsModal(false)}
                >
                  <Text style={styles.userActionCancelText}>{t('social.cancel')}</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={showReportModal}
        animationType="slide"
        transparent
        onRequestClose={handleCloseReportModal}
      >
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalOverlay}
        >
          <View style={styles.reportModalContent}>
            <LinearGradient
              colors={[Colors.cardBg, Colors.background]}
              style={StyleSheet.absoluteFill}
            />
            
            {reportSubmitted ? (
              <View style={styles.reportSuccessContainer}>
                <View style={styles.reportSuccessIcon}>
                  <CheckCircle color={Colors.success} size={48} />
                </View>
                <Text style={styles.reportSuccessTitle}>{t('social.reportSubmitted')}</Text>
                <Text style={styles.reportSuccessText}>
                  {t('social.reportSubmittedMessage')}
                </Text>
                <TouchableOpacity
                  style={styles.reportSuccessButton}
                  onPress={handleCloseReportModal}
                >
                  <Text style={styles.reportSuccessButtonText}>{t('social.done')}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{t('social.reportUserTitle')}</Text>
                  <TouchableOpacity 
                    style={styles.modalClose}
                    onPress={handleCloseReportModal}
                  >
                    <X color={Colors.textSecondary} size={24} />
                  </TouchableOpacity>
                </View>

                <ScrollView style={styles.modalBody} showsVerticalScrollIndicator={false}>
                  {selectedUser && (
                    <View style={styles.reportUserBadge}>
                      <Image source={{ uri: selectedUser.avatar }} style={styles.reportUserAvatar} />
                      <Text style={styles.reportUserName}>{t('social.reportingUser').replace('{name}', selectedUser.name)}</Text>
                    </View>
                  )}

                  <Text style={styles.inputLabel}>{t('social.reasonForReport')}</Text>
                  <View style={styles.reportReasonsList}>
                    {getReportReasons(t).map((reason) => {
                      const IconComponent = reason.icon;
                      const isSelected = selectedReportReason === reason.id;
                      return (
                        <TouchableOpacity
                          key={reason.id}
                          style={[
                            styles.reportReasonItem,
                            isSelected && styles.reportReasonItemActive
                          ]}
                          onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            setSelectedReportReason(reason.id);
                          }}
                        >
                          <IconComponent 
                            color={isSelected ? Colors.warning : Colors.textSecondary} 
                            size={20} 
                          />
                          <Text style={[
                            styles.reportReasonText,
                            isSelected && styles.reportReasonTextActive
                          ]}>
                            {reason.label}
                          </Text>
                          {isSelected && (
                            <View style={styles.reportReasonCheck}>
                              <CheckCircle color={Colors.warning} size={18} />
                            </View>
                          )}
                        </TouchableOpacity>
                      );
                    })}
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>{t('social.additionalDetails')}</Text>
                    <TextInput
                      style={[styles.textInput, styles.textArea]}
                      value={reportDetails}
                      onChangeText={setReportDetails}
                      placeholder={t('social.additionalDetailsPlaceholder')}
                      placeholderTextColor={Colors.textMuted}
                      multiline
                      numberOfLines={4}
                    />
                  </View>
                </ScrollView>

                <View style={styles.modalFooter}>
                  <TouchableOpacity 
                    style={styles.cancelButton}
                    onPress={handleCloseReportModal}
                  >
                    <Text style={styles.cancelButtonText}>{t('social.cancel')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[
                      styles.submitReportButton,
                      !selectedReportReason && styles.submitReportButtonDisabled
                    ]}
                    onPress={handleSubmitReport}
                    disabled={!selectedReportReason}
                  >
                    <Flag color={Colors.text} size={16} />
                    <Text style={styles.submitReportButtonText}>{t('social.submitReport')}</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <Modal
        visible={showChatModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => {
          setShowChatModal(false);
          setSelectedChatRoom(null);
        }}
      >
        <View style={styles.chatModalContainer}>
          <SafeAreaView style={styles.chatSafeArea} edges={['top']}>
            <View style={styles.chatModalHeader}>
              <TouchableOpacity
                style={styles.chatCloseButton}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  setShowChatModal(false);
                  setSelectedChatRoom(null);
                }}
              >
                <X color={Colors.text} size={24} />
              </TouchableOpacity>
            </View>
            {selectedChatRoom && (
              <RoomChat
                roomId={selectedChatRoom.id}
                roomName={selectedChatRoom.name}
              />
            )}
          </SafeAreaView>
        </View>
      </Modal>
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
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    marginBottom: 24,
    marginTop: 8,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
    flex: 1,
  },
  createRoomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4,
  },
  createRoomButtonText: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  roomsScroll: {
    paddingHorizontal: 20,
    gap: 12,
  },
  roomCard: {
    width: 170,
    alignItems: 'center',
    paddingTop: 12,
  },
  roomHeader: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 71, 87, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    gap: 4,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.error,
  },
  liveText: {
    fontSize: 10,
    fontWeight: '700' as const,
    color: Colors.error,
  },
  idleIndicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  idleText: {
    fontSize: 10,
    fontWeight: '600' as const,
    color: Colors.textMuted,
  },
  roomHostAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginTop: 8,
  },
  roomName: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.text,
    marginTop: 10,
    textAlign: 'center',
  },
  roomHost: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  roomFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  roomParticipants: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  joinButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 12,
  },
  joinButtonDisabled: {
    backgroundColor: Colors.cardBgLight,
  },
  joinButtonText: {
    color: Colors.text,
    fontSize: 13,
    fontWeight: '600' as const,
  },
  joinButtonTextDisabled: {
    color: Colors.textMuted,
  },
  hostButtons: {
    marginTop: 12,
    width: '100%',
    alignItems: 'center',
  },
  hostActionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  goLiveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.error,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
    minWidth: 90,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  goLiveButtonText: {
    color: Colors.text,
    fontSize: 13,
    fontWeight: '600' as const,
  },
  scheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 180, 216, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginTop: 12,
    gap: 4,
  },
  scheduleButtonText: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: '600' as const,
  },
  liveHostButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  hostJoinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 4,
  },
  hostJoinButtonText: {
    color: Colors.text,
    fontSize: 12,
    fontWeight: '600' as const,
  },
  endButton: {
    backgroundColor: 'rgba(255, 71, 87, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.error,
  },
  endButtonText: {
    color: Colors.error,
    fontSize: 12,
    fontWeight: '600' as const,
  },
  sessionCard: {
    marginHorizontal: 20,
    marginBottom: 12,
  },
  sessionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sessionAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  sessionInfo: {
    flex: 1,
    marginLeft: 12,
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  sessionHost: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  sessionLiveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 71, 87, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 5,
  },
  sessionLiveText: {
    fontSize: 11,
    fontWeight: '700' as const,
    color: Colors.error,
  },
  countdownBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(72, 202, 228, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 5,
  },
  countdownText: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: Colors.secondary,
  },
  sessionDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  sessionMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 12,
  },
  sessionMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  sessionMetaText: {
    fontSize: 13,
    color: Colors.textMuted,
  },
  sessionActions: {
    marginTop: 4,
  },
  sessionHostLiveButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  sessionOpenButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 12,
    gap: 6,
  },
  sessionOpenButtonText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600' as const,
  },
  sessionEndButton: {
    backgroundColor: 'rgba(255, 71, 87, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.error,
  },
  sessionEndButtonText: {
    color: Colors.error,
    fontSize: 14,
    fontWeight: '600' as const,
  },
  sessionStartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.success,
    paddingVertical: 10,
    borderRadius: 12,
    gap: 6,
  },
  sessionStartButtonDisabled: {
    backgroundColor: Colors.cardBgLight,
  },
  sessionStartButtonText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600' as const,
  },
  sessionStartButtonTextDisabled: {
    color: Colors.textMuted,
  },
  sessionJoinButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 12,
  },
  sessionJoinButtonDisabled: {
    backgroundColor: Colors.cardBgLight,
  },
  sessionJoinButtonText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600' as const,
  },
  sessionJoinButtonTextDisabled: {
    color: Colors.textMuted,
  },
  activityCard: {
    marginHorizontal: 20,
    marginBottom: 12,
  },
  activityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  activityAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  activityUserInfo: {
    flex: 1,
    marginLeft: 12,
  },
  activityUserName: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  activityTime: {
    fontSize: 12,
    color: Colors.textMuted,
    marginTop: 2,
  },
  activityTypeIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.cardBgLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text,
    marginBottom: 4,
  },
  activityDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  reactionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  reactionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBgLight,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  reactionBadgeActive: {
    backgroundColor: 'rgba(0, 180, 216, 0.2)',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  reactionEmoji: {
    fontSize: 14,
  },
  reactionCount: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '500' as const,
  },
  reactionCountActive: {
    color: Colors.primary,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.cardBg,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '85%',
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.cardBgLight,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  modalClose: {
    padding: 4,
  },
  modalBody: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  selectedRoomBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBgLight,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 16,
    gap: 8,
  },
  selectedRoomLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  selectedRoomName: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: Colors.cardBgLight,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: Colors.text,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  inputRow: {
    flexDirection: 'row',
  },
  durationOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  durationOption: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.cardBgLight,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  durationOptionActive: {
    backgroundColor: 'rgba(0, 180, 216, 0.15)',
    borderColor: Colors.primary,
  },
  durationOptionText: {
    fontSize: 14,
    fontWeight: '500' as const,
    color: Colors.textSecondary,
  },
  durationOptionTextActive: {
    color: Colors.primary,
  },
  categoryOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryOption: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.cardBgLight,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  categoryOptionActive: {
    backgroundColor: 'rgba(0, 180, 216, 0.15)',
    borderColor: Colors.primary,
  },
  categoryOptionText: {
    fontSize: 14,
    fontWeight: '500' as const,
    color: Colors.textSecondary,
  },
  categoryOptionTextActive: {
    color: Colors.primary,
  },
  modalFooter: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.cardBgLight,
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: Colors.cardBgLight,
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
  },
  createButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    gap: 8,
  },
  createButtonText: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  userActionsButton: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sessionUserActionsButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.cardBgLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  userActionsOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  userActionsContent: {
    width: '100%',
    maxWidth: 320,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  userActionsHeader: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
  },
  userActionsAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 10,
  },
  userActionsName: {
    fontSize: 17,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  userActionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
  },
  userActionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userActionTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  userActionTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  userActionSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  userActionCancelButton: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  userActionCancelText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
  },
  reportModalContent: {
    backgroundColor: Colors.cardBg,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
    overflow: 'hidden',
  },
  reportUserBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBgLight,
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    gap: 12,
  },
  reportUserAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  reportUserName: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  reportReasonsList: {
    gap: 10,
    marginBottom: 20,
  },
  reportReasonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    backgroundColor: Colors.cardBgLight,
    borderWidth: 1,
    borderColor: 'transparent',
    gap: 12,
  },
  reportReasonItemActive: {
    backgroundColor: 'rgba(255, 159, 67, 0.1)',
    borderColor: Colors.warning,
  },
  reportReasonText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500' as const,
    color: Colors.textSecondary,
  },
  reportReasonTextActive: {
    color: Colors.warning,
  },
  reportReasonCheck: {
    marginLeft: 'auto',
  },
  submitReportButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: Colors.warning,
    gap: 8,
  },
  submitReportButtonDisabled: {
    backgroundColor: Colors.cardBgLight,
    opacity: 0.6,
  },
  submitReportButtonText: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  reportSuccessContainer: {
    alignItems: 'center',
    padding: 32,
  },
  reportSuccessIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(46, 213, 115, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  reportSuccessTitle: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 12,
  },
  reportSuccessText: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  reportSuccessButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 12,
  },
  reportSuccessButtonText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  roomActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
    width: '100%',
    justifyContent: 'center',
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 4,
    flex: 1,
    justifyContent: 'center',
  },
  chatButtonText: {
    color: Colors.text,
    fontSize: 13,
    fontWeight: '600' as const,
  },
  chatModalContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  chatSafeArea: {
    flex: 1,
  },
  chatModalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.cardBg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.cardBgLight,
  },
  chatCloseButton: {
    padding: 4,
  },
});
