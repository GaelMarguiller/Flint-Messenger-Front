import axios from 'axios';
import { IConversation, IConversationMessage } from '../Chat/chatTypes';

export async function getConversations(): Promise<IConversation[]>{
    // axios vers le back pour récuperer les messages
    const res = await axios.get('http://localhost:3003/api/messages', { withCredentials: true });
    const messages : IConversationMessage[] = res.data;

    // processus de transformation des messages -> une liste de conversations

    // 1ere étape : Rassembler les messages d'une meme conversation dans un tableau => { convId: [tous les messages de la conv 1], convId2: [tous les messages de la conv 2] }
    // 2eme étape : Créer les types depuis la liste de messages, restructure

    // ---------------
    // 1ere etape : Reduce pour creer un objet (equivalent au resultat d'un groupBy) qui groupe les messages par conversationId
    const accInit : { [conversationId: string]: IConversationMessage[] } = {};// todo;
    const batches = messages.reduce(
        (acc, message) => {
            const convId = message.conversationId;
            if(acc[convId] === undefined){
                acc[convId] = [ message ]
            } else {
                acc[convId].push(message)
            }
            return acc;
        },
        accInit
    );

    const conversations : IConversation[] = [];
    for(const key in batches){
        const value = batches[key];
        // 123 => key
        // [message, message2] => value
        const targetsNonDistincts = value.flatMap(message => [message.emitter, ...message.targets]);
        const targets = [...new Set(targetsNonDistincts)];

        // message : [emitter, target1, target2]
        // message2: [emitter2, target3, target4]
        // [[emitter, target1, target2],[emitter2, target3, target4]] => [emitter, target1, target2, emitter2, target3, target4]
        const updatedAt = messages.sort()[0].createdAt; // TODO completer sort
        conversations.push({
            _id: key,
            targets: targets,
            updatedAt: updatedAt,
            unseenMessages: 0,
            messages: value
        })
    }
    console.log(conversations);
    return conversations;
}

export async function sendMessage(content: string, conversationId: string, targets: string[]): Promise<IConversationMessage> {
    const res = await axios.post(
        'http://localhost:3003/api/messages',
        { content, conversationId, targets },
        { withCredentials: true }
    );
    return res.data;
}
