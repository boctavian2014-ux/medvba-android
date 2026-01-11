import React, { useState } from 'react';
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
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import Colors from '@/constants/colors';
import GlassCard from '@/components/GlassCard';
import { activities, studyRooms as initialStudyRooms, StudyRoom, ZoomStatus } from '@/mocks/activities';
import { trpc } from '@/lib/trpc';

const CURRENT_USER_ID = 'current_user';

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

export default function SocialScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [reactedActivities, setReactedActivities] = useState<Record<string, string>>({});
  const [studyRooms, setStudyRooms] = useState<StudyRoom[]>(initialStudyRooms);

  const createMeetingMutation = trpc.zoom.createMeeting.useMutation({
    onSuccess: (data, variables) => {
      console.log('Zoom meeting created successfully:', data);
      setStudyRooms(prev => prev.map(room => 
        room.id === variables.studyRoomId 
          ? { 
              ...room, 
              zoomMeetingId: data.zoomMeetingId,
              joinUrl: data.joinUrl,
              startUrl: data.startUrl,
              zoomStatus: data.zoomStatus,
              isLive: true,
            }
          : room
      ));
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
      setStudyRooms(prev => prev.map(room => 
        room.zoomMeetingId === variables.zoomMeetingId
          ? { 
              ...room, 
              zoomStatus: 'ENDED' as ZoomStatus,
              isLive: false,
              zoomMeetingId: undefined,
              joinUrl: undefined,
              startUrl: undefined,
            }
          : room
      ));
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    },
    onError: (error) => {
      console.error('Failed to end Zoom meeting:', error);
    },
  });

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

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

  const handleJoinZoom = async (room: StudyRoom) => {
    if (!room.joinUrl) {
      Alert.alert('Not Available', 'This session is not live yet.');
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Joining Zoom meeting:', room.joinUrl);
    
    const zoomAppUrl = room.joinUrl.replace('https://zoom.us/j/', 'zoomus://zoom.us/join?confno=');
    
    try {
      const canOpenZoom = await Linking.canOpenURL(zoomAppUrl);
      if (canOpenZoom && Platform.OS !== 'web') {
        await Linking.openURL(zoomAppUrl);
      } else {
        await Linking.openURL(room.joinUrl);
      }
    } catch (error) {
      console.error('Failed to open Zoom:', error);
      await Linking.openURL(room.joinUrl);
    }
  };

  const handleHostJoinZoom = async (room: StudyRoom) => {
    if (!room.startUrl) return;
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Host joining Zoom meeting:', room.startUrl);
    
    try {
      await Linking.openURL(room.startUrl);
    } catch (error) {
      console.error('Failed to open Zoom as host:', error);
      Alert.alert('Error', 'Failed to open Zoom. Please try again.');
    }
  };

  const isCurrentUserHost = (room: StudyRoom) => room.hostId === CURRENT_USER_ID;
  const isRoomLive = (room: StudyRoom) => room.zoomStatus === 'LIVE' && room.joinUrl;

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
                          ) : (
                            <View style={styles.liveHostButtons}>
                              <TouchableOpacity 
                                style={styles.hostJoinButton}
                                onPress={() => handleHostJoinZoom(room)}
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
                          onPress={() => handleJoinZoom(room)}
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
  goLiveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.error,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
    minWidth: 100,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  goLiveButtonText: {
    color: Colors.text,
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
});
