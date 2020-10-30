export interface IConversation {
    _id: string;
    targets: string[];
    updatedAt: Date;
    unseenMessages: number;
    messages: IConversationMessage[];
}

export interface IConversationMessage {
    conversationId: string;
    _id: string;
    emitter: string;
    content: string;
    createdAt: Date;
    targets: string[];
}

export const UPDATE_CONVERSATION_LIST = 'UPDATE_CONVERSATION_LIST';
export const UPDATE_CONVERSATION = 'UPDATE_CONVERSATION';

export interface IConversationsState {
    list: IConversation[];
    totalUnseenMessages: number;
}

export interface IUpdateConversationListAction {
    type: typeof UPDATE_CONVERSATION_LIST,
    conversations: IConversation[]
}

export interface IUpdateConversationAction {
    type: typeof UPDATE_CONVERSATION,
    conversation: IConversation
}


export type IConversationsAction =
    IUpdateConversationListAction
    | IUpdateConversationAction;
