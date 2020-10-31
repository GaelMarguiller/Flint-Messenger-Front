import io from 'socket.io-client';
import { IAppState } from '../../appReducer';
import { updateConversation } from '../../Chat/actions/updateConversation';
import { IConversationMessage } from '../../Chat/chatTypes';
import { makeUpdateUser } from '../../Users/actions/makeUpdateUser';
import { IUser } from '../../Users/usersTypes';

export function makeStartSocket(){
    return (dispatch: any, getState: () => IAppState) => {
        const uri = process.env.NODE_ENV === 'production' && process.env.REACT_APP_API_URL
                ? process.env.REACT_APP_API_URL
                : 'http://localhost:3003';
        const socketServer = io.connect(uri);

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
