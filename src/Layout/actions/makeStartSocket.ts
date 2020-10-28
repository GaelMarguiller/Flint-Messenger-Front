import io from 'socket.io-client';

export function makeStartSocket(){
    return (dispatch: any) => {
        const socketServer = io.connect('http://localhost:3003');

        socketServer.on('connect', () => {
            dispatch()
        })

        socketServer.on('mon-super-event', (data: any) => {
            dispatch()
        })
    }
}
