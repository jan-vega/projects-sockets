import {useContext, useState} from "react";
import {useSocket} from "../hooks/useSocket.jsx";
import {SocketContext} from "../context/contextSocket.jsx";

// eslint-disable-next-line react/prop-types
const AddBand = () => {
    const [value, setValue] = useState('')

    const {socket} = useContext(SocketContext);
    const onSubmit = (e) => {
        e.preventDefault()
        if (value.trim().length > 0){
            socket.emit('add-name', value)
            // crearBanda(value)
            setValue('')
        }
    }

    return (
        <>
            <h3>Agregar Banda</h3>
            <form onSubmit={onSubmit}>
                <input
                    className='form-control'
                    placeholder='NUevo nombre de banda'
                    value={value}
                    onChange={(e) =>setValue(e.target.value)}
                />
            </form>
        </>
    );
};

export {AddBand};
