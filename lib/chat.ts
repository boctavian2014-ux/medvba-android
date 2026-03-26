// Chat types for Supabase integration

export type UUID = string;

/** Global "All" channel messages */
export interface GlobalMessage {
  id: UUID;
  userId: UUID;
  text: string;
  createdAt: string; // ISO date
}

/** 1‑to‑1 or group conversation */
export interface Conversation {
  id: UUID;
  createdAt: string;
}

/** Members of a conversation */
export interface ConversationMember {
  conversationId: UUID;
  userId: UUID;
  // optional: role: 'owner' | 'member';
}

/** Messages in private conversations */
export interface ConversationMessage {
  id: UUID;
  conversationId: UUID;
  fromUserId: UUID;
  text: string;
  createdAt: string;
  // optional: readAt?: string;
}

/** For list of conversations in Private tab */
export interface ConversationSummary {
  id: UUID;
  peerId: UUID;
  peerName: string;
  peerAvatar: string;
  lastMessage: string;
  lastAt: string;
  unreadCount: number;
  isOnline: boolean;
}

/** Online user for Online tab */
export interface OnlineUser {
  userId: UUID;
  name: string;
  avatar: string;
  status?: string;
  isOnline: boolean;
}

/** Channel message for All tab */
export interface ChannelMessage {
  id: UUID;
  userId: UUID;
  userName: string;
  userAvatar: string;
  text: string;
  createdAt: string;
}

/** Private chat message (single conversation) */
export interface ChatMessage {
  id: UUID;
  fromUserId: UUID;
  text: string;
  createdAt: string;
}
