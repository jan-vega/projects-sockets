import io from 'socket.io-client';
import {useEffect, useMemo, useState} from "react";
const useSocket = (url) => {
    const socket = useMemo(() =>  io(url), [url]);

    const [online, setOnline] = useState(false);

    useEffect(() => {
        setOnline(socket.connected)
    }, [socket]);

    useEffect(() => {
        socket.on('connect', () => {
            setOnline(true)
        })
    }, [socket]);
    useEffect(() => {
        socket.on('disconnect', () => {
            setOnline(false)
        })
    }, [socket]);

    return {
        socket,
        online
    }
}

export {useSocket}
