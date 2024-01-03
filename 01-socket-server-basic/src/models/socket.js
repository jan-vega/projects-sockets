class Socket {
    constructor(io) {
        this.io = io;

        this.socketEvents();
    }
    socketEvents(){
        this.io.on('connection', (socket) => {
            // socket.emit('mensaje-bienvenida', {
            //     msg: 'Bienvebido al server',
            //     fecha: new Date()
            // })
            socket.on('mensaje', (payload) => {
                console.log(payload)
                this.io.emit('client', payload);
            })
        });
    }

}

export {Socket}
