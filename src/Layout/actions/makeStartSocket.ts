import io from 'socket.io-client';
import { IAppState } from '../../appReducer';
import { updateConversation } from '../../Chat/actions/updateConversation';
import { IConversationMessage } from '../../Chat/chatTypes';
import { makeUpdateUser } from '../../Users/actions/makeUpdateUser';
import { IUser } from '../../Users/usersTypes';

export function makeStartSocket(){
    return (dispatch: any, getState: () => IAppState) => {
        const socketServer = io.connect(`${process.env.REACT_APP_BACKEND}`);

        socketServer.on('connect', () => {
            console.log('Je suis bien connecté au back');
        })

        socketServer.on('new-message', ({message}: {message: IConversationMessage}) => {
            const conversations = getState().conversations.list;
            const conversation = conversations.find(conv => conv._id === message.conversationId);
            // TODO Quid quand la conv n'existe pas
            if(!conversation) { return }

            const newConversation = {
                ...conversation,
                messages: [...conversation.messages, message]
            }
            dispatch(updateConversation(newConversation));
        })

        socketServer.on('user-status-update', ({user}: {user: IUser}) => {
            dispatch(makeUpdateUser(user));
        })
    }
}
