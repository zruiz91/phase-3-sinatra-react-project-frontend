import {useState, useEffect} from 'react';

import PerformanceList from "./PerformanceList";
import PerformanceForm from "./PerformanceForm";


function PerformancesContainer() {
    const {performances, setPerformances } = useState([]);
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
            <PerformanceList performances={performances}/>
        </div>
    )

}

export default PerformancesContainer;