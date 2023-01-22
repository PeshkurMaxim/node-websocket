import { PassThrough, Writable } from 'stream';
import WebSocket, { createWebSocketStream } from 'ws';
import { router } from './router/router';

const hostname = '127.0.0.1';

export const createWSServer = (port: number) => {
    console.log(`ws server started at http://${hostname}:${port}`);
    

    const wss = new WebSocket.Server({ port });


    wss.on('connection', (ws: WebSocket) => {
        console.log('New client connected!');

        const webSocketStream = createWebSocketStream(ws, { 
            encoding: 'utf8',
            decodeStrings: false,
            objectMode: true
        });

        webSocketStream.on('error', console.error);

        webSocketStream.on('data', async function(data: Buffer){    
            try {
                await router(data.toString(), webSocketStream);
            } catch (error) {
                webSocketStream.write("something\xa0went\xa0wrong")
            }        
        });
    
        ws.on('close', () => console.log('Client has disconnected!'));
    });

    wss.on('close', () => console.log('Server closed!'));

}
