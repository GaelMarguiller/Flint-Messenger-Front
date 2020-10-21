import {IConversation} from '../Chat/chatTypes';

export function getConversations(): Promise<IConversation[]> {
    return Promise.resolve([{
        _id: '1234',
        targets: ['5f8d93159d70596a9c845a80', '5f8eb210d3f9f2686884a7f7'],
        updatedAt: new Date(),
        unseenMessages: 0,
        messages: [
            {
            _id: '123',
            conversationId: '1234',
            createdAt: new Date(),
            emitter: '5f8d93159d70596a9c845a80',
            targets: ['5f8eb210d3f9f2686884a7f7'],
            content: 'Salut ça va ?',
        }, {
                _id: '124',
                conversationId: '1234',
                createdAt: new Date(),
                emitter: '5f8eb210d3f9f2686884a7f7',
                targets: ['5f8d93159d70596a9c845a80'],
                content: 'Oui et toi ?',
            }]
    }])
}
