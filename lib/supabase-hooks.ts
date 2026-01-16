import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import type { UserAccount } from '@/types/user';

export interface StudyRoom {
  id: string;
  name: string;
  host: string;
  hostId: string;
  hostAvatar: string;
  participants: number;
  maxParticipants: number;
  category: string;
  isLive: boolean;
  meetingUrl?: string;
  created_at?: string;
}

export interface StudySession {
  id: string;
  roomId: string;
  roomName: string;
  title: string;
  description?: string;
  scheduledFor: string;
  durationMinutes: number;
  hostId: string;
  hostName: string;
  hostAvatar: string;
  category: string;
  status: 'SCHEDULED' | 'LIVE' | 'ENDED';
  meetingUrl?: string;
  attendees: string[];
  created_at?: string;
}

export function useStudyRooms() {
  return useQuery({
    queryKey: ['studyRooms'],
    queryFn: async () => {
      console.log('[Supabase] Fetching study rooms...');
      const { data, error } = await supabase
        .from('study_rooms')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) {
        console.error('[Supabase] Error fetching study rooms:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        return [];
      }

      console.log('[Supabase] Fetched', data?.length || 0, 'study rooms');

      return (data || []).map((room: any) => ({
        id: room.id,
        name: room.name,
        host: `User ${room.host_id.substring(0, 8)}`,
        hostId: room.host_id,
        hostAvatar: `https://api.dicebear.com/7.x/avataaars/png?seed=${room.host_id}`,
        participants: room.participants || 0,
        maxParticipants: room.max_participants || 20,
        category: room.category || 'general',
        isLive: !!room.meeting_url,
        meetingUrl: room.meeting_url,
        created_at: room.created_at,
      })) as StudyRoom[];
    },
    staleTime: 30000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useCreateStudyRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: {
      name: string;
      hostId: string;
      hostName: string;
      hostAvatar: string;
      category: string;
      maxParticipants: number;
    }) => {
      console.log('[Supabase] Creating study room:', input.name);
      
      const { data, error } = await supabase
        .from('study_rooms')
        .insert({
          name: input.name,
          host_id: input.hostId,
          category: input.category,
        })
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error creating study room:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] Study room created:', data.id);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studyRooms'] });
    },
  });
}

export function useUpdateStudyRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: {
      roomId: string;
      meetingUrl?: string;
    }) => {
      console.log('[Supabase] Updating study room:', input.roomId);

      const updateData: any = {};
      if (input.meetingUrl !== undefined) updateData.meeting_url = input.meetingUrl;

      const { data, error } = await supabase
        .from('study_rooms')
        .update(updateData)
        .eq('id', input.roomId)
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error updating study room:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] Study room updated:', data.id);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studyRooms'] });
    },
  });
}

export function useUpcomingSessions() {
  return useQuery({
    queryKey: ['upcomingSessions'],
    queryFn: async () => {
      console.log('[Supabase] Fetching upcoming sessions...');
      
      const now = new Date().toISOString();
      const { data, error } = await supabase
        .from('study_sessions')
        .select('*')
        .gte('scheduled_for', now)
        .order('scheduled_for', { ascending: true })
        .limit(20);

      if (error) {
        console.error('[Supabase] Error fetching sessions:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        return [];
      }

      console.log('[Supabase] Fetched', data?.length || 0, 'upcoming sessions');

      return (data || []).map((session: any) => ({
        id: session.id,
        roomId: session.room_id,
        roomName: session.room_name,
        title: session.title,
        description: session.description,
        scheduledFor: session.scheduled_for,
        durationMinutes: session.duration_minutes,
        hostId: session.host_id,
        hostName: session.host_name,
        hostAvatar: session.host_avatar,
        category: session.category,
        status: session.status,
        meetingUrl: session.meeting_url,
        attendees: session.attendees || [],
        created_at: session.created_at,
      })) as StudySession[];
    },
    staleTime: 30000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useCreateSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: {
      roomId: string;
      title: string;
      description?: string;
      scheduledFor: string;
      durationMinutes: number;
      hostId: string;
      hostName: string;
      hostAvatar: string;
      category: string;
      meetingUrl?: string;
    }) => {
      console.log('[Supabase] Creating session:', input.title);

      const { data: roomData } = await supabase
        .from('study_rooms')
        .select('name')
        .eq('id', input.roomId)
        .single();

      const { data, error } = await supabase
        .from('study_sessions')
        .insert({
          room_id: input.roomId,
          room_name: roomData?.name || '',
          title: input.title,
          description: input.description,
          scheduled_for: input.scheduledFor,
          duration_minutes: input.durationMinutes,
          host_id: input.hostId,
          host_name: input.hostName,
          host_avatar: input.hostAvatar,
          category: input.category,
          status: 'SCHEDULED',
          attendees: [],
          meeting_url: input.meetingUrl,
        })
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error creating session:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] Session created:', data.id);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['upcomingSessions'] });
    },
  });
}

export function useUpdateSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: {
      sessionId: string;
      status?: 'SCHEDULED' | 'LIVE' | 'ENDED';
      meetingUrl?: string;
    }) => {
      console.log('[Supabase] Updating session:', input.sessionId);

      const updateData: any = {};
      if (input.status !== undefined) updateData.status = input.status;
      if (input.meetingUrl !== undefined) updateData.meeting_url = input.meetingUrl;

      const { data, error } = await supabase
        .from('study_sessions')
        .update(updateData)
        .eq('id', input.sessionId)
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error updating session:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] Session updated:', data.id);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['upcomingSessions'] });
    },
  });
}

export interface RoomMessage {
  id: string;
  roomId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  message: string;
  createdAt: string;
}

export function useRoomMessages(roomId: string) {
  const [messages, setMessages] = useState<RoomMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!roomId) {
      setMessages([]);
      setIsLoading(false);
      return;
    }

    const fetchMessages = async () => {
      console.log('[Supabase] Fetching messages for room:', roomId);
      setIsLoading(true);

      const { data, error } = await supabase
        .from('room_messages')
        .select(`
          id,
          room_id,
          user_id,
          message,
          created_at,
          profiles:user_id (
            name,
            avatar
          )
        `)
        .eq('room_id', roomId)
        .order('created_at', { ascending: true })
        .limit(100);

      if (error) {
        console.error('[Supabase] Error fetching messages:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        setIsLoading(false);
        return;
      }

      const formattedMessages: RoomMessage[] = (data || []).map((msg: any) => ({
        id: msg.id,
        roomId: msg.room_id,
        userId: msg.user_id,
        userName: msg.profiles?.name || 'Anonymous',
        userAvatar: msg.profiles?.avatar || 'https://api.dicebear.com/7.x/avataaars/png?seed=' + msg.user_id,
        message: msg.message,
        createdAt: msg.created_at,
      }));

      setMessages(formattedMessages);
      setIsLoading(false);
      console.log('[Supabase] Loaded', formattedMessages.length, 'messages');
    };

    fetchMessages();

    const channel = supabase
      .channel(`room:${roomId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'room_messages',
          filter: `room_id=eq.${roomId}`,
        },
        async (payload) => {
          console.log('[Supabase] New message received:', payload);
          
          const { data: profile } = await supabase
            .from('profiles')
            .select('name, avatar')
            .eq('id', payload.new.user_id)
            .single();
          
          const newMessage: RoomMessage = {
            id: payload.new.id,
            roomId: payload.new.room_id,
            userId: payload.new.user_id,
            userName: profile?.name || 'Anonymous',
            userAvatar: profile?.avatar || 'https://api.dicebear.com/7.x/avataaars/png?seed=' + payload.new.user_id,
            message: payload.new.message,
            createdAt: payload.new.created_at,
          };
          setMessages((prev) => [...prev, newMessage]);
        }
      )
      .subscribe();

    return () => {
      console.log('[Supabase] Unsubscribing from room:', roomId);
      supabase.removeChannel(channel);
    };
  }, [roomId]);

  return { messages, isLoading };
}

export function useSendMessage() {
  return useMutation({
    mutationFn: async (input: {
      roomId: string;
      userId: string;
      message: string;
    }) => {
      console.log('[Supabase] Sending message to room:', input.roomId);

      const { data, error } = await supabase
        .from('room_messages')
        .insert({
          room_id: input.roomId,
          user_id: input.userId,
          message: input.message,
        })
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error sending message:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] Message sent:', data.id);
      return data;
    },
  });
}

export interface ZoomRequest {
  id: string;
  userId: string;
  studyTopic: string;
  preferredDate: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export function useZoomRequests(userId: string | undefined) {
  return useQuery({
    queryKey: ['zoomRequests', userId],
    queryFn: async () => {
      if (!userId) return [];

      console.log('[Supabase] Fetching zoom requests for user:', userId);
      const { data, error } = await supabase
        .from('zoom_requests')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('[Supabase] Error fetching zoom requests:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] Fetched', data?.length || 0, 'zoom requests');

      return (data || []).map((req: any) => ({
        id: req.id.toString(),
        userId: req.user_id,
        studyTopic: req.study_topic,
        preferredDate: req.preferred_date,
        status: req.status as 'pending' | 'approved' | 'rejected',
        createdAt: req.created_at,
      })) as ZoomRequest[];
    },
    enabled: !!userId,
  });
}

export function useCreateZoomRequest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: {
      userId: string;
      studyTopic: string;
      preferredDate: string;
    }) => {
      console.log('[Supabase] Creating zoom request:', input.studyTopic);

      const { data, error } = await supabase
        .from('zoom_requests')
        .insert({
          user_id: input.userId,
          study_topic: input.studyTopic,
          preferred_date: input.preferredDate,
          status: 'pending',
        })
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error creating zoom request:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] Zoom request created:', data.id);
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['zoomRequests', variables.userId] });
    },
  });
}

export function useStudyPartners(filters?: {
  city?: string;
  university?: string;
  searchQuery?: string;
}) {
  return useQuery({
    queryKey: ['studyPartners', filters],
    queryFn: async () => {
      console.log('[Supabase] Fetching study partners with filters:', filters);
      
      let query = supabase
        .from('users')
        .select('*')
        .eq('is_public', true);

      if (filters?.city) {
        query = query.eq('city', filters.city);
      }

      if (filters?.university) {
        query = query.eq('university', filters.university);
      }

      if (filters?.searchQuery) {
        query = query.or(`name.ilike.%${filters.searchQuery}%,bio.ilike.%${filters.searchQuery}%`);
      }

      const { data, error } = await query
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        console.error('[Supabase] Error fetching study partners:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] Fetched', data?.length || 0, 'study partners');

      return (data || []).map((user: any) => ({
        id: user.id,
        email: user.email,
        name: user.name || 'Student',
        avatar: user.profile_photo_url || user.avatar || `https://api.dicebear.com/7.x/avataaars/png?seed=${user.id}`,
        city: user.city,
        university: user.university,
        year_of_study: user.year_of_study,
        bio: user.bio,
        is_public: user.is_public ?? true,
        profile_photo_url: user.profile_photo_url,
        created_at: user.created_at,
      })) as UserAccount[];
    },
  });
}

export function useUserProfile(userId: string | undefined) {
  return useQuery({
    queryKey: ['userProfile', userId],
    queryFn: async () => {
      if (!userId) return null;

      console.log('[Supabase] Fetching user profile:', userId);
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('[Supabase] Error fetching user profile:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      return {
        id: data.id,
        email: data.email,
        name: data.name || 'Student',
        avatar: data.profile_photo_url || data.avatar || `https://api.dicebear.com/7.x/avataaars/png?seed=${data.id}`,
        city: data.city,
        university: data.university,
        year_of_study: data.year_of_study,
        bio: data.bio,
        is_public: data.is_public ?? true,
        profile_photo_url: data.profile_photo_url,
        created_at: data.created_at,
      } as UserAccount;
    },
    enabled: !!userId,
  });
}

export function useUpdateUserProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: {
      userId: string;
      name?: string;
      city?: string;
      university?: string;
      year_of_study?: number;
      bio?: string;
      is_public?: boolean;
      profile_photo_url?: string;
    }) => {
      console.log('[Supabase] Updating user profile:', input.userId);

      const updateData: any = {};
      if (input.name !== undefined) updateData.name = input.name;
      if (input.city !== undefined) updateData.city = input.city;
      if (input.university !== undefined) updateData.university = input.university;
      if (input.year_of_study !== undefined) updateData.year_of_study = input.year_of_study;
      if (input.bio !== undefined) updateData.bio = input.bio;
      if (input.is_public !== undefined) updateData.is_public = input.is_public;
      if (input.profile_photo_url !== undefined) updateData.profile_photo_url = input.profile_photo_url;

      const { data, error } = await supabase
        .from('users')
        .update(updateData)
        .eq('id', input.userId)
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error updating user profile:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] User profile updated');
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['userProfile', variables.userId] });
      queryClient.invalidateQueries({ queryKey: ['studyPartners'] });
    },
  });
}

export async function uploadProfilePhoto(userId: string, uri: string): Promise<string> {
  try {
    console.log('[Supabase] Uploading profile photo for user:', userId);

    const response = await fetch(uri);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const fileExt = uri.split('.').pop()?.toLowerCase() || 'jpg';
    const fileName = `${userId}-${Date.now()}.${fileExt}`;
    const filePath = `${userId}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('profile-photos')
      .upload(filePath, arrayBuffer, {
        contentType: `image/${fileExt}`,
        upsert: false,
      });

    if (uploadError) {
      console.error('[Supabase] Error uploading photo:', JSON.stringify({ message: uploadError.message }));
      throw uploadError;
    }

    const { data: urlData } = supabase.storage
      .from('profile-photos')
      .getPublicUrl(filePath);

    console.log('[Supabase] Photo uploaded successfully:', urlData.publicUrl);
    return urlData.publicUrl;
  } catch (error: any) {
    console.error('[Supabase] Error in uploadProfilePhoto:', JSON.stringify({ message: error?.message, stack: error?.stack }));
    throw error;
  }
}

export interface UserProgressData {
  id: string;
  userId: string;
  totalQuestionsAnswered: number;
  correctAnswers: number;
  studyTimeSeconds: number;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface DailyProgressData {
  id: string;
  userId: string;
  date: string;
  questionsAnswered: number;
  correctAnswers: number;
  studyTimeSeconds: number;
  createdAt: string;
  updatedAt: string;
}

export function useUserProgress(userId: string | undefined) {
  return useQuery({
    queryKey: ['userProgress', userId],
    queryFn: async ({ signal }) => {
      if (!userId) return null;

      console.log('[Supabase] Fetching user progress for:', userId);
      
      try {
        if (signal?.aborted) {
          console.log('[Supabase] Request aborted before starting');
          return null;
        }

        const { data, error } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', userId)
          .abortSignal(signal)
          .single();

        if (signal?.aborted) {
          console.log('[Supabase] Request aborted after fetch');
          return null;
        }

        if (error) {
          if (error.code === 'PGRST116') {
            console.log('[Supabase] No user progress found, will create on first update');
            return null;
          }
          console.error('[Supabase] Error fetching user progress:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
          throw error;
        }

        return {
          id: data.id,
          userId: data.user_id,
          totalQuestionsAnswered: data.total_questions_answered,
          correctAnswers: data.correct_answers,
          studyTimeSeconds: data.study_time_seconds,
          currentStreak: data.current_streak,
          longestStreak: data.longest_streak,
          lastActivityDate: data.last_activity_date,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        } as UserProgressData;
      } catch (error: any) {
        if (error?.name === 'AbortError' || error?.message?.includes('aborted') || error?.message?.includes('signal is aborted')) {
          console.log('[Supabase] Query aborted gracefully');
          return null;
        }
        throw error;
      }
    },
    enabled: !!userId,
    staleTime: 60000,
    gcTime: 300000,
    retry: (failureCount, error: any) => {
      if (error?.name === 'AbortError' || error?.message?.includes('aborted')) return false;
      return failureCount < 1;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

export function useUpsertUserProgress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: {
      userId: string;
      totalQuestionsAnswered: number;
      correctAnswers: number;
      studyTimeSeconds: number;
      currentStreak: number;
      longestStreak: number;
      lastActivityDate: string | null;
    }) => {
      console.log('[Supabase] Upserting user progress for:', input.userId);

      const { data, error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: input.userId,
          total_questions_answered: input.totalQuestionsAnswered,
          correct_answers: input.correctAnswers,
          study_time_seconds: input.studyTimeSeconds,
          current_streak: input.currentStreak,
          longest_streak: input.longestStreak,
          last_activity_date: input.lastActivityDate,
        }, {
          onConflict: 'user_id',
        })
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error upserting user progress:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] User progress upserted successfully');
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['userProgress', variables.userId] });
    },
  });
}

export function useDailyProgress(userId: string | undefined, date: string) {
  return useQuery({
    queryKey: ['dailyProgress', userId, date],
    queryFn: async () => {
      if (!userId) return null;

      console.log('[Supabase] Fetching daily progress for:', userId, date);
      const { data, error } = await supabase
        .from('daily_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('date', date)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          console.log('[Supabase] No daily progress found for date:', date);
          return null;
        }
        console.error('[Supabase] Error fetching daily progress:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      return {
        id: data.id,
        userId: data.user_id,
        date: data.date,
        questionsAnswered: data.questions_answered,
        correctAnswers: data.correct_answers,
        studyTimeSeconds: data.study_time_seconds,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      } as DailyProgressData;
    },
    enabled: !!userId && !!date,
  });
}

export function useWeeklyProgress(userId: string | undefined, startDate: string, endDate: string) {
  return useQuery({
    queryKey: ['weeklyProgress', userId, startDate, endDate],
    queryFn: async ({ signal }) => {
      if (!userId) return [];

      console.log('[Supabase] Fetching weekly progress for:', userId, startDate, 'to', endDate);
      
      try {
        if (signal?.aborted) {
          console.log('[Supabase] Request aborted before starting');
          return [];
        }

        const { data, error } = await supabase
          .from('daily_progress')
          .select('*')
          .eq('user_id', userId)
          .gte('date', startDate)
          .lte('date', endDate)
          .abortSignal(signal)
          .order('date', { ascending: true });

        if (signal?.aborted) {
          console.log('[Supabase] Request aborted after fetch');
          return [];
        }

        if (error) {
          console.error('[Supabase] Error fetching weekly progress:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
          throw error;
        }

        console.log('[Supabase] Fetched', data?.length || 0, 'daily records');

        return (data || []).map((day: any) => ({
          id: day.id,
          userId: day.user_id,
          date: day.date,
          questionsAnswered: day.questions_answered,
          correctAnswers: day.correct_answers,
          studyTimeSeconds: day.study_time_seconds,
          createdAt: day.created_at,
          updatedAt: day.updated_at,
        })) as DailyProgressData[];
      } catch (error: any) {
        if (error?.name === 'AbortError' || error?.message?.includes('aborted') || error?.message?.includes('signal is aborted')) {
          console.log('[Supabase] Query aborted gracefully');
          return [];
        }
        throw error;
      }
    },
    enabled: !!userId && !!startDate && !!endDate,
    staleTime: 60000,
    gcTime: 300000,
    retry: (failureCount, error: any) => {
      if (error?.name === 'AbortError' || error?.message?.includes('aborted')) return false;
      return failureCount < 1;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

export function useUpsertDailyProgress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: {
      userId: string;
      date: string;
      questionsAnswered: number;
      correctAnswers: number;
      studyTimeSeconds: number;
    }) => {
      console.log('[Supabase] Upserting daily progress for:', input.userId, input.date);

      const { data, error } = await supabase
        .from('daily_progress')
        .upsert({
          user_id: input.userId,
          date: input.date,
          questions_answered: input.questionsAnswered,
          correct_answers: input.correctAnswers,
          study_time_seconds: input.studyTimeSeconds,
        }, {
          onConflict: 'user_id,date',
        })
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error upserting daily progress:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] Daily progress upserted successfully');
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['dailyProgress', variables.userId, variables.date] });
      queryClient.invalidateQueries({ queryKey: ['weeklyProgress', variables.userId] });
    },
  });
}

export type AchievementType =
  | 'first_quiz'
  | 'quiz_master'
  | 'perfect_score'
  | 'streak_7'
  | 'streak_30'
  | 'streak_100'
  | 'questions_100'
  | 'questions_500'
  | 'questions_1000'
  | 'social_butterfly'
  | 'helpful_tutor'
  | 'room_creator'
  | 'early_bird'
  | 'night_owl'
  | 'weekend_warrior';

export interface UserAchievement {
  id: string;
  userId: string;
  achievementType: AchievementType;
  earnedAt: string;
  metadata: Record<string, any>;
}

export function useUserAchievements(userId: string | undefined) {
  return useQuery({
    queryKey: ['userAchievements', userId],
    queryFn: async () => {
      if (!userId) return [];

      console.log('[Supabase] Fetching achievements for user:', userId);
      const { data, error } = await supabase
        .from('user_achievements')
        .select('*')
        .eq('user_id', userId)
        .order('earned_at', { ascending: false });

      if (error) {
        console.error('[Supabase] Error fetching user achievements:', JSON.stringify({ message: error.message, code: error.code, details: error.details }));
        throw error;
      }

      console.log('[Supabase] Fetched', data?.length || 0, 'achievements');

      return (data || []).map((achievement: any) => ({
        id: achievement.id,
        userId: achievement.user_id,
        achievementType: achievement.achievement_type as AchievementType,
        earnedAt: achievement.earned_at,
        metadata: achievement.metadata || {},
      })) as UserAchievement[];
    },
    enabled: !!userId,
  });
}

export interface RecentAchievementWithUser extends UserAchievement {
  userName: string;
  userAvatar: string;
}

export function useAllRecentAchievements(limit: number = 20) {
  return useQuery({
    queryKey: ['recentAchievements', limit],
    queryFn: async ({ signal }) => {
      if (signal?.aborted) return [];
      console.log('[Supabase] Fetching recent achievements from all users with user info');
      
      const { data: achievementsData, error: achievementsError } = await supabase
        .from('user_achievements')
        .select('*')
        .order('earned_at', { ascending: false })
        .limit(limit);

      if (achievementsError) {
        console.error('[Supabase] Error fetching recent achievements:', JSON.stringify({ message: achievementsError.message, code: achievementsError.code, details: achievementsError.details }));
        throw achievementsError;
      }

      if (!achievementsData || achievementsData.length === 0) {
        console.log('[Supabase] No achievements found');
        return [];
      }

      const userIds = [...new Set(achievementsData.map((a: any) => a.user_id))];
      
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('id, name, profile_photo_url, avatar')
        .in('id', userIds);

      if (usersError) {
        console.error('[Supabase] Error fetching user info:', JSON.stringify({ message: usersError.message, code: usersError.code, details: usersError.details }));
      }

      const usersMap = new Map(
        (usersData || []).map((user: any) => [
          user.id,
          {
            name: user.name || 'Student',
            avatar: user.profile_photo_url || user.avatar || `https://api.dicebear.com/7.x/avataaars/png?seed=${user.id}`,
          },
        ])
      );

      console.log('[Supabase] Fetched', achievementsData.length, 'recent achievements with user info');

      return achievementsData.map((achievement: any) => {
        const userInfo = usersMap.get(achievement.user_id) || {
          name: 'Student',
          avatar: `https://api.dicebear.com/7.x/avataaars/png?seed=${achievement.user_id}`,
        };

        return {
          id: achievement.id,
          userId: achievement.user_id,
          achievementType: achievement.achievement_type as AchievementType,
          earnedAt: achievement.earned_at,
          metadata: achievement.metadata || {},
          userName: userInfo.name,
          userAvatar: userInfo.avatar,
        };
      }) as RecentAchievementWithUser[];
    },
    staleTime: 60000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
}

export function useGrantAchievement() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: {
      userId: string;
      achievementType: AchievementType;
      metadata?: Record<string, any>;
    }) => {
      console.log('[Supabase] Granting achievement:', input.achievementType, 'to user:', input.userId);

      const { data, error } = await supabase.rpc('grant_achievement', {
        target_user_id: input.userId,
        achievement_name: input.achievementType,
        achievement_metadata: input.metadata || {},
      });

      if (error) {
        const errorDetails = {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        };
        console.error('[Supabase] RPC error granting achievement:', JSON.stringify(errorDetails, null, 2));
        throw error;
      }

      if (data && typeof data === 'object' && 'success' in data && !data.success) {
        const errorMsg = data.error || 'Unknown error granting achievement';
        console.error('[Supabase] Achievement function returned error:', JSON.stringify({ error: errorMsg, data }, null, 2));
        throw new Error(errorMsg);
      }

      console.log('[Supabase] Achievement granted:', data);
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['userAchievements', variables.userId] });
      queryClient.invalidateQueries({ queryKey: ['recentAchievements'] });
    },
  });
}

export interface AchievementCheckResult {
  earned: AchievementType[];
  progress: Record<AchievementType, { current: number; required: number }>;
}

export function useCheckAchievements(userId: string | undefined) {
  return useQuery({
    queryKey: ['checkAchievements', userId],
    queryFn: async ({ signal }): Promise<AchievementCheckResult> => {
      if (signal?.aborted) {
        return { earned: [], progress: {} as Record<AchievementType, { current: number; required: number }> };
      }
      if (!userId) {
        return { earned: [], progress: {} as Record<AchievementType, { current: number; required: number }> };
      }

      console.log('[Supabase] Checking achievements for user:', userId);

      const [userProgressResult, achievementsResult] = await Promise.all([
        supabase.from('user_progress').select('*').eq('user_id', userId).single(),
        supabase.from('user_achievements').select('achievement_type').eq('user_id', userId),
      ]);

      if (userProgressResult.error && userProgressResult.error.code !== 'PGRST116') {
        console.error('[Supabase] Error fetching user progress:', JSON.stringify({ message: userProgressResult.error.message, code: userProgressResult.error.code, details: userProgressResult.error.details }));
        throw userProgressResult.error;
      }

      if (achievementsResult.error) {
        console.error('[Supabase] Error fetching achievements:', JSON.stringify({ message: achievementsResult.error.message, code: achievementsResult.error.code, details: achievementsResult.error.details }));
        throw achievementsResult.error;
      }

      const progress = userProgressResult.data;
      const earnedAchievements = new Set(
        (achievementsResult.data || []).map((a: any) => a.achievement_type as AchievementType)
      );

      const totalQuestions = progress?.total_questions_answered || 0;
      const currentStreak = progress?.current_streak || 0;

      const earned: AchievementType[] = [];
      const progressMap: Record<string, { current: number; required: number }> = {};

      if (totalQuestions >= 1 && !earnedAchievements.has('first_quiz')) {
        earned.push('first_quiz');
      }

      if (totalQuestions >= 100) {
        progressMap['questions_100'] = { current: totalQuestions, required: 100 };
        if (!earnedAchievements.has('questions_100')) earned.push('questions_100');
      } else {
        progressMap['questions_100'] = { current: totalQuestions, required: 100 };
      }

      if (totalQuestions >= 500) {
        progressMap['questions_500'] = { current: totalQuestions, required: 500 };
        if (!earnedAchievements.has('questions_500')) earned.push('questions_500');
      } else {
        progressMap['questions_500'] = { current: totalQuestions, required: 500 };
      }

      if (totalQuestions >= 1000) {
        progressMap['questions_1000'] = { current: totalQuestions, required: 1000 };
        if (!earnedAchievements.has('questions_1000')) earned.push('questions_1000');
      } else {
        progressMap['questions_1000'] = { current: totalQuestions, required: 1000 };
      }

      if (currentStreak >= 7) {
        progressMap['streak_7'] = { current: currentStreak, required: 7 };
        if (!earnedAchievements.has('streak_7')) earned.push('streak_7');
      } else {
        progressMap['streak_7'] = { current: currentStreak, required: 7 };
      }

      if (currentStreak >= 30) {
        progressMap['streak_30'] = { current: currentStreak, required: 30 };
        if (!earnedAchievements.has('streak_30')) earned.push('streak_30');
      } else {
        progressMap['streak_30'] = { current: currentStreak, required: 30 };
      }

      if (currentStreak >= 100) {
        progressMap['streak_100'] = { current: currentStreak, required: 100 };
        if (!earnedAchievements.has('streak_100')) earned.push('streak_100');
      } else {
        progressMap['streak_100'] = { current: currentStreak, required: 100 };
      }

      console.log('[Supabase] Achievement check complete:', earned.length, 'new achievements earned');
      
      return {
        earned,
        progress: progressMap as Record<AchievementType, { current: number; required: number }>,
      };
    },
    enabled: !!userId,
    staleTime: 60000,
    gcTime: 300000,
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

