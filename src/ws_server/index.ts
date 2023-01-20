import WebSocket from 'ws';
import { Router } from './router/router';

export const createWSServer = (port: number) => {

    const wss = new WebSocket.Server({ port });

    wss.on('connection', (ws: WebSocket) => {
        console.log('New client connected!'); 
    
        ws.on('message', (data: Buffer) => {
            // console.log("\nws.Received message", data.toString());
            Router(data.toString());
           
        });
    
    
    
        ws.on('close', () => console.log('Client has disconnected!'));
    });

}
