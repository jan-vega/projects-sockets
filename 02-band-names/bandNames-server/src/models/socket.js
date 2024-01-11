import {BandList} from "./bandList.js";

class Socket {
    constructor(io) {
        this.io = io;
        this.bandList = new BandList()
        this.socketEvents();
    }
    socketEvents(){
        this.io.on('connection', (socket) => {
            console.log('CLiente conectado');
            //Emitir al cliente conectado todas las bandas de musica
            socket.emit('current-bands', this.bandList.getBands());
            socket.on('votar-banda', (id) => {
                this.bandList.incrementVotos(id);
                this.io.emit('current-bands', this.bandList.getBands());

            })
            socket.on('borrar-band', (id) => {
                this.bandList.remoceBAnd(id)
                this.io.emit('current-bands', this.bandList.getBands());
            })
            socket.on('cambiar-nombre', (data) => {
                this.bandList.changeName(data.id, data.name)
                this.io.emit('current-bands', this.bandList.getBands());
            })
            socket.on('add-name', (data) => {
                console.log(data)
                this.bandList.addBnad(data)
                this.io.emit('current-bands', this.bandList.getBands());
            })
        });
    }

}

export {Socket}
