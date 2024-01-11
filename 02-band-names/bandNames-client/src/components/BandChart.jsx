import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import faker from 'faker';
import {useContext, useEffect, useState} from "react";
import {SocketContext} from "../context/contextSocket.jsx";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// eslint-disable-next-line react-refresh/only-export-components
export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        // {
        //     label: 'Dataset 1',
        //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // },
        // {
        //     label: 'Dataset 2',
        //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
    ],
};

const BandChart = () => {


    const [bandas, setBandas] = useState({})

    const {socket} = useContext(SocketContext);

    useEffect(() => {
        socket.on('current-bands', (data) => {
            const namesBandas = data?.map(band => band.name);
            setBandas({
                ...namesBandas,
                datasets: []
            })
        })

    }, [socket]);


    return (
        <Bar options={options} data={bandas} />
    );
};

export {BandChart};
