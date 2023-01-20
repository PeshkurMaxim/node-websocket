import { PassThrough, Writable } from 'stream';
import WebSocket, { createWebSocketStream } from 'ws';
import { Router } from './router/router';

export const createWSServer = (port: number) => {

    const wss = new WebSocket.Server({ port });


    wss.on('connection', (ws: WebSocket) => {
        console.log('New client connected!');

        const webSocketStream = createWebSocketStream(ws, { 

            encoding: 'utf8',

        });
        
        webSocketStream.on('error', console.error);

        // const response = new Writable({
        //     objectMode: true,
        //     write(data, encoding, callback) {
        //         console.log(data);
                
        //         webSocketStream.write(data);
        //         callback();
        //     },
        // });

        // const tunnel = new PassThrough();

        // tunnel.on("", (chunk) => {

        // });

        webSocketStream.on('data', function(data: Buffer){
            Router(data.toString(), webSocketStream);
        });

        // ws.on('message', (data: Buffer) => {
        //     Router(data.toString(), response);           
        // });
    
    
    
        ws.on('close', () => console.log('Client has disconnected!'));
    });

}
