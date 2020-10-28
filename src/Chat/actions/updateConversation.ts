import { IConversation, IUpdateConversationAction, UPDATE_CONVERSATION } from '../chatTypes';

export function updateConversation(conversation: IConversation): IUpdateConversationAction {
  return {
    type: UPDATE_CONVERSATION,
    conversation: conversation
  }
}
