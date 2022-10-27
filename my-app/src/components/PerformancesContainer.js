import {useState, useEffect} from 'react';

import PerformanceList from "./PerformanceList";
import PerformanceForm from "./PerformanceForm";


function PerformancesContainer() {
    const {performances, setPerformances } = useState([]);
    const[watchedPerformances, setwatchedPerformances ] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/performances")
            .then((r) => r.json())
            .then((performances) => setPerformances(performances));
    }, [])

    const onAddPerformance = (newStream) => {
        setPerformances([...performances, newStream]);
    };
    return (
        <div>
            <PerformanceForm onAddPerformance={onAddPerformance}/>
            <PerformanceList performances={performances} watchedPerformances={watchedPerformances} setwatchedPerformances={setwatchedPerformances}/>
        </div>
    )

}

export default PerformancesContainer;