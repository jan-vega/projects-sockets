import {SocketProvider} from "./context/contextSocket.jsx";
import App from "./pages/HomePage.jsx";

const BandNamesApp = () => {
    return (
        <SocketProvider>
            <App />
        </SocketProvider>
    );
};

export {BandNamesApp};
