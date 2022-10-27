import { useState, useEffect } from 'react';

import PerformanceList from "./PerformanceList";
import PerformanceForm from "./PerformanceForm";
import PerformanceEditForm from "./PerformanceEditForm";


function PerformancesContainer() {
    const [performances, setPerformances] = useState([]);
    const [performanceToEdit, setPerformanceToEdit] = useState(null);

    useEffect(() => {
        fetch("http://localhost:9292/performances")
            .then((r) => r.json())
            .then((performances) => setPerformances(performances));
    }, [])

    const onAddPerformance = (newPerformance) => {
        setPerformances([...performances, newPerformance]);
    };


    const onUpdatePerformance = () => {
        setPerformanceToEdit(null);
    };

    const onEditPerformance = (performanceToEdit) => {
        setPerformanceToEdit(performanceToEdit);
    };

    const renderForm = () => {
        if (performanceToEdit) {
            return (
                <PerformanceEditForm
                    performanceToEdit={performanceToEdit}
                    onUpdatePerformance={onUpdatePerformance}
                />
            );
        } else {
            return <PerformanceForm onAddPerformance={onAddPerformance} />;
        }
    };

    return (
        <div>
            {renderForm()}
            <PerformanceList
                performances={performances}
                onEditPerformance={onEditPerformance}
                watchedPerformances={watchedPerformances}
                setwatchedPerformances={setwatchedPerformances} />
        </div>
    )

}

export default PerformancesContainer;