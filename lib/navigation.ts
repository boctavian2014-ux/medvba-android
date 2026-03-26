import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type SocialStackParamList = {
  SocialMain: undefined;
  PrivateChat: {
    conversationId?: string;   // existing conversation
    peerId: string;            // user we are chatting with
    peerName: string;
    peerAvatar?: string;
  };
};

export type SocialMainScreenProps = NativeStackScreenProps<SocialStackParamList, 'SocialMain'>;
export type PrivateChatScreenProps = NativeStackScreenProps<SocialStackParamList, 'PrivateChat'>;
