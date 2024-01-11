import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'
import cors from 'cors'
import {Socket} from "./socket.js";
class ServerApp {
    constructor() {
        this.app = express();
        this.port = process.env.PORT_PROJECT2;

        this.server = createServer(this.app);
        this.io = new Server(this.server, {
            cors: {
                origin: '*'
            }
        });
        this.__dirname = dirname(fileURLToPath(import.meta.url));
    }

    middelewares(){
        this.app.use(express.static(path.resolve(this.__dirname, '../public')))
        this.app.use(cors())
    }

    configSocket(){
        new Socket(this.io);
    }
    execute(){
        this.middelewares();

        this.configSocket();
        this.server.listen(this.port, () =>{
            console.log('port run on server ' + this.port)
        })
    }
}

export {ServerApp}
