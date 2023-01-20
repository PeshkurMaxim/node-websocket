import { PassThrough, Writable } from 'stream';
import WebSocket, { createWebSocketStream } from 'ws';
import { Router } from './router/router';

export const createWSServer = (port: number) => {

    const wss = new WebSocket.Server({ port });


    wss.on('connection', (ws: WebSocket) => {
        console.log('New client connected!');

        const webSocketStream = createWebSocketStream(ws, { 
            encoding: 'utf8',
            decodeStrings: false,
        });

        webSocketStream.on('error', console.error);

        webSocketStream.on('data', function(data: Buffer){            
            Router(data.toString(), webSocketStream);
        });
    
        ws.on('close', () => console.log('Client has disconnected!'));
    });

}
