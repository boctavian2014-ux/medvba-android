import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';

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
  zoomMeetingId?: string;
  joinUrl?: string;
  startUrl?: string;
  zoomStatus: 'IDLE' | 'LIVE' | 'ENDED';
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
  zoomMeetingId?: string;
  joinUrl?: string;
  startUrl?: string;
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
        console.error('[Supabase] Error fetching study rooms:', error);
        throw error;
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
        isLive: room.zoom_status === 'LIVE',
        zoomMeetingId: room.zoom_meeting_id,
        joinUrl: room.join_url,
        startUrl: room.start_url,
        zoomStatus: room.zoom_status || 'IDLE',
        created_at: room.created_at,
      })) as StudyRoom[];
    },
    refetchInterval: 30000,
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
          max_participants: input.maxParticipants,
        })
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error creating study room:', error);
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
      zoomMeetingId?: string;
      joinUrl?: string;
      startUrl?: string;
      zoomStatus: 'IDLE' | 'LIVE' | 'ENDED';
      isLive?: boolean;
    }) => {
      console.log('[Supabase] Updating study room:', input.roomId);

      const updateData: any = {
        zoom_status: input.zoomStatus,
      };

      if (input.zoomMeetingId !== undefined) updateData.zoom_meeting_id = input.zoomMeetingId;
      if (input.joinUrl !== undefined) updateData.join_url = input.joinUrl;
      if (input.startUrl !== undefined) updateData.start_url = input.startUrl;

      const { data, error } = await supabase
        .from('study_rooms')
        .update(updateData)
        .eq('id', input.roomId)
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error updating study room:', error);
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
        console.error('[Supabase] Error fetching sessions:', error);
        throw error;
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
        zoomMeetingId: session.zoom_meeting_id,
        joinUrl: session.join_url,
        startUrl: session.start_url,
        attendees: session.attendees || [],
        created_at: session.created_at,
      })) as StudySession[];
    },
    refetchInterval: 30000,
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
        })
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error creating session:', error);
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
      zoomMeetingId?: string;
      joinUrl?: string;
      startUrl?: string;
    }) => {
      console.log('[Supabase] Updating session:', input.sessionId);

      const updateData: any = {};
      if (input.status !== undefined) updateData.status = input.status;
      if (input.zoomMeetingId !== undefined) updateData.zoom_meeting_id = input.zoomMeetingId;
      if (input.joinUrl !== undefined) updateData.join_url = input.joinUrl;
      if (input.startUrl !== undefined) updateData.start_url = input.startUrl;

      const { data, error } = await supabase
        .from('study_sessions')
        .update(updateData)
        .eq('id', input.sessionId)
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error updating session:', error);
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
        .select('*')
        .eq('room_id', roomId)
        .order('created_at', { ascending: true })
        .limit(100);

      if (error) {
        console.error('[Supabase] Error fetching messages:', error);
        setIsLoading(false);
        return;
      }

      const formattedMessages: RoomMessage[] = (data || []).map((msg: any) => ({
        id: msg.id,
        roomId: msg.room_id,
        userId: msg.user_id,
        userName: msg.user_name,
        userAvatar: msg.user_avatar,
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
        (payload) => {
          console.log('[Supabase] New message received:', payload);
          const newMessage: RoomMessage = {
            id: payload.new.id,
            roomId: payload.new.room_id,
            userId: payload.new.user_id,
            userName: payload.new.user_name,
            userAvatar: payload.new.user_avatar,
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
      userName: string;
      userAvatar: string;
      message: string;
    }) => {
      console.log('[Supabase] Sending message to room:', input.roomId);

      const { data, error } = await supabase
        .from('room_messages')
        .insert({
          room_id: input.roomId,
          user_id: input.userId,
          user_name: input.userName,
          user_avatar: input.userAvatar,
          message: input.message,
        })
        .select()
        .single();

      if (error) {
        console.error('[Supabase] Error sending message:', error);
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
        console.error('[Supabase] Error fetching zoom requests:', error);
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
        console.error('[Supabase] Error creating zoom request:', error);
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

export interface UserProfile {
  id: string;
  email?: string;
  name: string;
  avatar: string;
  city?: string;
  university?: string;
  year_of_study?: number;
  bio?: string;
  is_public: boolean;
  profile_photo_url?: string;
  created_at: string;
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
        console.error('[Supabase] Error fetching study partners:', error);
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
      })) as UserProfile[];
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
        console.error('[Supabase] Error fetching user profile:', error);
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
      } as UserProfile;
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
        console.error('[Supabase] Error updating user profile:', error);
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
      console.error('[Supabase] Error uploading photo:', uploadError);
      throw uploadError;
    }

    const { data: urlData } = supabase.storage
      .from('profile-photos')
      .getPublicUrl(filePath);

    console.log('[Supabase] Photo uploaded successfully:', urlData.publicUrl);
    return urlData.publicUrl;
  } catch (error) {
    console.error('[Supabase] Error in uploadProfilePhoto:', error);
    throw error;
  }
}

