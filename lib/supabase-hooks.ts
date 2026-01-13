import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
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
        host: room.host_name,
        hostId: room.host_id,
        hostAvatar: room.host_avatar,
        participants: room.participants || 0,
        maxParticipants: room.max_participants || 20,
        category: room.category || 'general',
        isLive: room.is_live || false,
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
          host_name: input.hostName,
          host_avatar: input.hostAvatar,
          category: input.category,
          max_participants: input.maxParticipants,
          participants: 0,
          is_live: false,
          zoom_status: 'IDLE',
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
      if (input.isLive !== undefined) updateData.is_live = input.isLive;

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

export function useCreateZoomMeeting() {
  return useMutation({
    mutationFn: async (input: { studyRoomId: string; roomName: string }) => {
      console.log('[Supabase] Calling Edge Function to create Zoom meeting...');

      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/functions/v1/zoom-create-meeting`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            studyRoomId: input.studyRoomId,
            roomName: input.roomName,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[Supabase] Edge Function error:', response.status, errorText);
        throw new Error(`Failed to create Zoom meeting: ${response.status}`);
      }

      const result = await response.json();
      console.log('[Supabase] Zoom meeting created:', result.zoomMeetingId);

      return {
        zoomMeetingId: result.zoomMeetingId,
        joinUrl: result.joinUrl,
        startUrl: result.startUrl,
        zoomStatus: result.zoomStatus as 'LIVE',
      };
    },
  });
}

export function useEndZoomMeeting() {
  return useMutation({
    mutationFn: async (input: { zoomMeetingId: string }) => {
      console.log('[Supabase] Calling Edge Function to end Zoom meeting...');

      const { data: { session } } = await supabase.auth.getSession();

      const response = await fetch(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/functions/v1/zoom-end-meeting`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            zoomMeetingId: input.zoomMeetingId,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[Supabase] Edge Function error:', response.status, errorText);
        throw new Error(`Failed to end Zoom meeting: ${response.status}`);
      }

      await response.json();
      console.log('[Supabase] Zoom meeting ended');

      return { success: true, zoomStatus: 'ENDED' as const };
    },
  });
}
