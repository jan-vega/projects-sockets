import {useContext, useEffect, useState} from "react";
import {SocketContext} from "../context/contextSocket.jsx";

// eslint-disable-next-line react/prop-types
const ListBand = () => {
    const [bands, setBands] = useState([]);
    const {socket} = useContext(SocketContext);
    useEffect(() => {
        socket.on('current-bands', (data) => {
            setBands(data)
        })
        return () => socket.off('current-bands')
    }, [socket]);

    const changeName = (e, id) => {
        const newName = e.target.value
        setBands(bands => bands.map(band => {
            if (band.id === id){
                band.name = newName
            }
            return band
        }))
    }

    const onPerdioFoco = (id, nombre) => {
        const data = {id, nombre}
        socket.emit('cambiar-nombre', data)
    }

    const votar = (id) => {
        socket.emit('votar-banda', id);
    }

    const removeBand = (id) => {
        socket.emit('borrar-band', id)
    }

    console.log(bands)

    const createRows = () => {
        return (
            bands.map(band => (
                <tr key={band.id}>
                    <td>
                        <button className='btn btn-primary' onClick={() => votar(band.id)}>+1</button>
                    </td>
                    <td>
                        <input
                            className='form-control'
                            type="text"
                            value={band.name}
                            onChange={(e) => changeName(e, band.id)}
                            onBlur={() =>onPerdioFoco(band.id, band.name)}
                        />
                    </td>
                    <td>
                        <h3>{band.voto}</h3>
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={() => removeBand(band.id)}>Borrar</button>
                    </td>
                </tr>
            ))
        )
    }

    return (
        <>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Votos</th>
                    <th>Borrar</th>
                </tr>
                </thead>
                <tbody>
                {createRows()}
                </tbody>
            </table>
        </>
    );
};

export {ListBand};
