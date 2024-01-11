import {createContext} from "react";
import {useSocket} from "../hooks/useSocket.jsx";

const SocketContext = createContext({});

// eslint-disable-next-line react/prop-types
const SocketProvider = ({children}) => {

    const {socket, online} = useSocket('http://localhost:3001')

    return (
        <SocketContext.Provider value={{socket, online}}>
            {children}
        </SocketContext.Provider>
    )
}

export {
    SocketContext,
    SocketProvider
}
