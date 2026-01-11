import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl,
  Linking,
  Platform,
  Alert,
  ActivityIndicator,
  Modal,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  Users, 
  Radio, 
  MessageCircle,
  Flame,
  Trophy,
  BookOpen,
  Star,
  Target,
  Video,
  ExternalLink,
  Calendar,
  Clock,
  X,
  ChevronRight,
  Play,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import Colors from '@/constants/colors';
import GlassCard from '@/components/GlassCard';
import { activities, StudyRoom, ZoomStatus, StudySession } from '@/mocks/activities';
import { trpc } from '@/lib/trpc';

const CURRENT_USER_ID = '00000000-0000-0000-0000-000000000001';
const CURRENT_USER_NAME = 'You';
const CURRENT_USER_AVATAR = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop';

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

const isSessionStartable = (scheduledFor: string): boolean => {
  const now = new Date();
  const scheduled = new Date(scheduledFor);
  const diff = scheduled.getTime() - now.getTime();
  return diff <= 15 * 60 * 1000;
};

export default function SocialScreen() {
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

  useEffect(() => {
    const interval = setInterval(() => forceUpdate(n => n + 1), 30000);
    return () => clearInterval(interval);
  }, []);

  const studyRoomsQuery = trpc.studyRooms.list.useQuery({});
  const upcomingSessionsQuery = trpc.sessions.listUpcoming.useQuery({});

  const studyRooms: StudyRoom[] = (studyRoomsQuery.data ?? []).map(room => ({
    ...room,
    host: room.host,
    ...localRoomUpdates[room.id],
  }));

  const updateZoomInfoMutation = trpc.studyRooms.updateZoomInfo.useMutation({
    onSuccess: () => {
      studyRoomsQuery.refetch();
    },
  });

  const createMeetingMutation = trpc.zoom.createMeeting.useMutation({
    onSuccess: (data, variables) => {
      console.log('Zoom meeting created successfully:', data);
      setLocalRoomUpdates(prev => ({
        ...prev,
        [variables.studyRoomId]: {
          zoomMeetingId: data.zoomMeetingId,
          joinUrl: data.joinUrl,
          startUrl: data.startUrl,
          zoomStatus: data.zoomStatus,
          isLive: true,
        },
      }));
      updateZoomInfoMutation.mutate({
        roomId: variables.studyRoomId,
        zoomMeetingId: data.zoomMeetingId,
        joinUrl: data.joinUrl,
        startUrl: data.startUrl,
        zoomStatus: data.zoomStatus,
        isLive: true,
      });
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    },
    onError: (error) => {
      console.error('Failed to create Zoom meeting:', error);
      Alert.alert('Error', 'Failed to start Zoom session. Please try again.');
    },
  });

  const endMeetingMutation = trpc.zoom.endMeeting.useMutation({
    onSuccess: (_, variables) => {
      console.log('Zoom meeting ended');
      const room = studyRooms.find(r => r.zoomMeetingId === variables.zoomMeetingId);
      if (room) {
        setLocalRoomUpdates(prev => ({
          ...prev,
          [room.id]: {
            zoomStatus: 'ENDED' as ZoomStatus,
            isLive: false,
            zoomMeetingId: undefined,
            joinUrl: undefined,
            startUrl: undefined,
          },
        }));
        updateZoomInfoMutation.mutate({
          roomId: room.id,
          zoomStatus: 'ENDED',
          isLive: false,
        });
      }
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    },
    onError: (error) => {
      console.error('Failed to end Zoom meeting:', error);
    },
  });

  const createSessionMutation = trpc.sessions.create.useMutation({
    onSuccess: () => {
      console.log('Session created successfully');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setShowScheduleModal(false);
      resetScheduleForm();
      upcomingSessionsQuery.refetch();
    },
    onError: (error) => {
      console.error('Failed to create session:', error);
      Alert.alert('Error', 'Failed to schedule session. Please try again.');
    },
  });

  const markLiveMutation = trpc.sessions.markLive.useMutation({
    onSuccess: () => {
      upcomingSessionsQuery.refetch();
    },
  });

  const markEndedMutation = trpc.sessions.markEnded.useMutation({
    onSuccess: () => {
      upcomingSessionsQuery.refetch();
    },
  });

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

  const handleStartZoom = (room: StudyRoom) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    console.log('Starting Zoom for room:', room.id, room.name);
    createMeetingMutation.mutate({
      studyRoomId: room.id,
      roomName: room.name,
    });
  };

  const handleEndZoom = (room: StudyRoom) => {
    if (!room.zoomMeetingId) return;
    
    Alert.alert(
      'End Session',
      'Are you sure you want to end this Zoom session?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'End', 
          style: 'destructive',
          onPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            endMeetingMutation.mutate({ zoomMeetingId: room.zoomMeetingId! });
          }
        },
      ]
    );
  };

  const handleJoinZoom = async (joinUrl: string) => {
    if (!joinUrl) {
      Alert.alert('Not Available', 'This session is not live yet.');
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Joining Zoom meeting:', joinUrl);
    
    const zoomAppUrl = joinUrl.replace('https://zoom.us/j/', 'zoomus://zoom.us/join?confno=');
    
    try {
      const canOpenZoom = await Linking.canOpenURL(zoomAppUrl);
      if (canOpenZoom && Platform.OS !== 'web') {
        await Linking.openURL(zoomAppUrl);
      } else {
        await Linking.openURL(joinUrl);
      }
    } catch (error) {
      console.error('Failed to open Zoom:', error);
      await Linking.openURL(joinUrl);
    }
  };

  const handleHostJoinZoom = async (startUrl: string) => {
    if (!startUrl) return;
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Host joining Zoom meeting:', startUrl);
    
    try {
      await Linking.openURL(startUrl);
    } catch (error) {
      console.error('Failed to open Zoom as host:', error);
      Alert.alert('Error', 'Failed to open Zoom. Please try again.');
    }
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
      Alert.alert('Missing Info', 'Please fill in all required fields.');
      return;
    }

    const scheduledFor = new Date(`${sessionDate}T${sessionTime}:00`).toISOString();
    
    createSessionMutation.mutate({
      roomId: selectedRoom.id,
      title: sessionTitle,
      description: sessionDescription || undefined,
      scheduledFor,
      durationMinutes: parseInt(sessionDuration, 10),
      hostId: CURRENT_USER_ID,
      hostName: CURRENT_USER_NAME,
      hostAvatar: CURRENT_USER_AVATAR,
      category: selectedRoom.category,
    });
  };

  const handleStartSession = (session: StudySession) => {
    if (!session.startUrl) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    markLiveMutation.mutate({ sessionId: session.id });
    handleHostJoinZoom(session.startUrl);
  };

  const handleJoinSession = (session: StudySession) => {
    if (!session.joinUrl) {
      Alert.alert('Not Available', 'Session link not available yet.');
      return;
    }
    handleJoinZoom(session.joinUrl);
  };

  const handleEndSession = (session: StudySession) => {
    Alert.alert(
      'End Session',
      'Are you sure you want to end this session?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'End', 
          style: 'destructive',
          onPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            markEndedMutation.mutate({ sessionId: session.id });
          }
        },
      ]
    );
  };

  const isCurrentUserHost = (room: StudyRoom) => room.hostId === CURRENT_USER_ID;
  const isSessionHost = (session: StudySession) => session.hostId === CURRENT_USER_ID;
  const isRoomLive = (room: StudyRoom) => room.zoomStatus === 'LIVE' && room.joinUrl;

  const upcomingSessions = upcomingSessionsQuery.data ?? [];

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
            <Text style={styles.title}>Community</Text>
            <Text style={styles.subtitle}>See what others are achieving</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Radio color={Colors.error} size={18} />
              <Text style={styles.sectionTitle}>Live Study Rooms</Text>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.roomsScroll}
            >
              {studyRooms.map((room) => {
                const isHost = isCurrentUserHost(room);
                const isLive = isRoomLive(room);
                const isLoading = createMeetingMutation.isPending && 
                  createMeetingMutation.variables?.studyRoomId === room.id;

                return (
                  <TouchableOpacity key={room.id} activeOpacity={0.9}>
                    <GlassCard style={styles.roomCard} variant="light">
                      <View style={styles.roomHeader}>
                        {isLive ? (
                          <View style={styles.liveIndicator}>
                            <View style={styles.liveDot} />
                            <Text style={styles.liveText}>LIVE</Text>
                          </View>
                        ) : (
                          <View style={styles.idleIndicator}>
                            <Text style={styles.idleText}>OFFLINE</Text>
                          </View>
                        )}
                      </View>
                      <Image source={{ uri: room.hostAvatar }} style={styles.roomHostAvatar} />
                      <Text style={styles.roomName} numberOfLines={1}>{room.name}</Text>
                      <Text style={styles.roomHost}>
                        {isHost ? 'You are hosting' : `Hosted by ${room.host}`}
                      </Text>
                      <View style={styles.roomFooter}>
                        <Users color={Colors.textSecondary} size={14} />
                        <Text style={styles.roomParticipants}>
                          {room.participants}/{room.maxParticipants}
                        </Text>
                      </View>
                      
                      {isHost ? (
                        <View style={styles.hostButtons}>
                          {!isLive ? (
                            <View style={styles.hostActionButtons}>
                              <TouchableOpacity 
                                style={[styles.goLiveButton, isLoading && styles.buttonDisabled]}
                                onPress={() => handleStartZoom(room)}
                                disabled={isLoading}
                              >
                                {isLoading ? (
                                  <ActivityIndicator size="small" color={Colors.text} />
                                ) : (
                                  <>
                                    <Video color={Colors.text} size={14} />
                                    <Text style={styles.goLiveButtonText}>Go Live</Text>
                                  </>
                                )}
                              </TouchableOpacity>
                              <TouchableOpacity 
                                style={styles.scheduleButton}
                                onPress={() => handleScheduleSession(room)}
                              >
                                <Calendar color={Colors.primary} size={14} />
                              </TouchableOpacity>
                            </View>
                          ) : (
                            <View style={styles.liveHostButtons}>
                              <TouchableOpacity 
                                style={styles.hostJoinButton}
                                onPress={() => handleHostJoinZoom(room.startUrl!)}
                              >
                                <ExternalLink color={Colors.text} size={14} />
                                <Text style={styles.hostJoinButtonText}>Open</Text>
                              </TouchableOpacity>
                              <TouchableOpacity 
                                style={styles.endButton}
                                onPress={() => handleEndZoom(room)}
                              >
                                <Text style={styles.endButtonText}>End</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                        </View>
                      ) : (
                        <TouchableOpacity 
                          style={[styles.joinButton, !isLive && styles.joinButtonDisabled]}
                          onPress={() => room.joinUrl && handleJoinZoom(room.joinUrl)}
                          disabled={!isLive}
                        >
                          <Text style={[styles.joinButtonText, !isLive && styles.joinButtonTextDisabled]}>
                            {isLive ? 'Join' : 'Not Live'}
                          </Text>
                        </TouchableOpacity>
                      )}
                    </GlassCard>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {upcomingSessions.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Calendar color={Colors.secondary} size={18} />
                <Text style={styles.sectionTitle}>Upcoming Sessions</Text>
              </View>
              
              {upcomingSessions.map((session) => {
                const isHost = isSessionHost(session);
                const canStart = isSessionStartable(session.scheduledFor);
                const isLive = session.status === 'LIVE';
                
                return (
                  <GlassCard key={session.id} style={styles.sessionCard}>
                    <View style={styles.sessionHeader}>
                      <Image source={{ uri: session.hostAvatar }} style={styles.sessionAvatar} />
                      <View style={styles.sessionInfo}>
                        <Text style={styles.sessionTitle} numberOfLines={1}>{session.title}</Text>
                        <Text style={styles.sessionHost}>
                          {isHost ? 'You are hosting' : `by ${session.hostName}`}
                        </Text>
                      </View>
                      {isLive ? (
                        <View style={styles.sessionLiveIndicator}>
                          <View style={styles.liveDot} />
                          <Text style={styles.sessionLiveText}>LIVE</Text>
                        </View>
                      ) : (
                        <View style={styles.countdownBadge}>
                          <Clock color={Colors.secondary} size={12} />
                          <Text style={styles.countdownText}>{formatCountdown(session.scheduledFor)}</Text>
                        </View>
                      )}
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
                        <Text style={styles.sessionMetaText}>{session.durationMinutes} min</Text>
                      </View>
                      <View style={styles.sessionMetaItem}>
                        <Users color={Colors.textMuted} size={14} />
                        <Text style={styles.sessionMetaText}>{session.attendees.length} joined</Text>
                      </View>
                    </View>
                    
                    <View style={styles.sessionActions}>
                      {isHost ? (
                        isLive ? (
                          <View style={styles.sessionHostLiveButtons}>
                            <TouchableOpacity 
                              style={styles.sessionOpenButton}
                              onPress={() => session.startUrl && handleHostJoinZoom(session.startUrl)}
                            >
                              <ExternalLink color={Colors.text} size={14} />
                              <Text style={styles.sessionOpenButtonText}>Open Zoom</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                              style={styles.sessionEndButton}
                              onPress={() => handleEndSession(session)}
                            >
                              <Text style={styles.sessionEndButtonText}>End</Text>
                            </TouchableOpacity>
                          </View>
                        ) : (
                          <TouchableOpacity 
                            style={[styles.sessionStartButton, !canStart && styles.sessionStartButtonDisabled]}
                            onPress={() => handleStartSession(session)}
                            disabled={!canStart}
                          >
                            <Play color={canStart ? Colors.text : Colors.textMuted} size={14} />
                            <Text style={[styles.sessionStartButtonText, !canStart && styles.sessionStartButtonTextDisabled]}>
                              {canStart ? 'Start Session' : 'Not yet'}
                            </Text>
                            {!canStart && <ChevronRight color={Colors.textMuted} size={14} />}
                          </TouchableOpacity>
                        )
                      ) : (
                        <TouchableOpacity 
                          style={[styles.sessionJoinButton, (!isLive && !canStart) && styles.sessionJoinButtonDisabled]}
                          onPress={() => handleJoinSession(session)}
                          disabled={!isLive && !canStart}
                        >
                          <Text style={[styles.sessionJoinButtonText, (!isLive && !canStart) && styles.sessionJoinButtonTextDisabled]}>
                            {isLive ? 'Join Now' : canStart ? 'Join' : 'Waiting...'}
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </GlassCard>
                );
              })}
            </View>
          )}

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MessageCircle color={Colors.primary} size={18} />
              <Text style={styles.sectionTitle}>Activity Feed</Text>
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
              <Text style={styles.modalTitle}>Schedule Session</Text>
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
                  <Text style={styles.selectedRoomLabel}>Room:</Text>
                  <Text style={styles.selectedRoomName}>{selectedRoom.name}</Text>
                </View>
              )}

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Title *</Text>
                <TextInput
                  style={styles.textInput}
                  value={sessionTitle}
                  onChangeText={setSessionTitle}
                  placeholder="e.g. Anatomy Review Session"
                  placeholderTextColor={Colors.textMuted}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Description</Text>
                <TextInput
                  style={[styles.textInput, styles.textArea]}
                  value={sessionDescription}
                  onChangeText={setSessionDescription}
                  placeholder="What will you cover in this session?"
                  placeholderTextColor={Colors.textMuted}
                  multiline
                  numberOfLines={3}
                />
              </View>

              <View style={styles.inputRow}>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                  <Text style={styles.inputLabel}>Date *</Text>
                  <TextInput
                    style={styles.textInput}
                    value={sessionDate}
                    onChangeText={setSessionDate}
                    placeholder="YYYY-MM-DD"
                    placeholderTextColor={Colors.textMuted}
                  />
                </View>
                <View style={[styles.inputGroup, { flex: 1, marginLeft: 12 }]}>
                  <Text style={styles.inputLabel}>Time *</Text>
                  <TextInput
                    style={styles.textInput}
                    value={sessionTime}
                    onChangeText={setSessionTime}
                    placeholder="HH:MM"
                    placeholderTextColor={Colors.textMuted}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Duration (minutes)</Text>
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
                <Text style={styles.cancelButtonText}>Cancel</Text>
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
                    <Text style={styles.createButtonText}>Schedule</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
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
    backgroundColor: 'rgba(0, 180, 216, 0.15)',
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
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
});
