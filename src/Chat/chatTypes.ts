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
export const UPDATE_POLLING_TIMER = 'UPDATE_POLLING_TIMER';

export interface IConversationsState {
    list: IConversation[];
    totalUnseenMessages: number;
    timer?: NodeJS.Timeout;
}

export interface IUpdateConversationListAction {
    type: typeof UPDATE_CONVERSATION_LIST,
    conversations: IConversation[]
}

export interface IUpdateConversationAction {
    type: typeof UPDATE_CONVERSATION,
    conversation: IConversation
}

export interface IUpdatePollingTimerAction {
    type: typeof UPDATE_POLLING_TIMER,
    timer: NodeJS.Timeout;
}

export type IConversationsAction =
    IUpdateConversationListAction
    | IUpdateConversationAction
    | IUpdatePollingTimerAction;
