import {AddBand} from "../components/AddBand.jsx";
import {ListBand} from "../components/ListBand.jsx";
import {useContext, useEffect, useState} from "react";
import {SocketContext} from "../context/contextSocket.jsx";




function HomePage() {

    const {online} = useContext(SocketContext);

    return (
        <>
            <div className="container">
                <div className='alert'>
                    <p>
                        Service status:
                        {
                            online ? <span className='text-success'> Online</span> :
                                <span className='text-danger'> Offline</span>
                        }

                    </p>
                </div>
                <h1>Band Names</h1>
                <hr/>
                <div className='row'>
                    {/*<div className='col'>*/}
                    {/*    <BandChart />*/}
                    {/*</div>*/}
                </div>
                <div className='row'>
                    <div className='col-8'>
                        <ListBand />
                    </div>
                    <div className='col-4'>
                        <AddBand />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
