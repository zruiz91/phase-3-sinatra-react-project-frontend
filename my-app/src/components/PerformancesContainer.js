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
        
        setPerformances(performances =>[...performances, newPerformance]);
    };

    const onDeletePerformance = (id) => {
        setPerformances(performances => performances.filter(performance => performance.id !== id))
      }

    const onUpdatePerformance= (updatedPerformance) => {
        console.log(updatedPerformance);
        setPerformances(performance => {
          return performance.map(project => {
            return project.id === updatedPerformance.id ? updatedPerformance : project;
          })
        })
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
                onUpdatePerformance={onUpdatePerformance}
                onDeletePerformance={onDeletePerformance}
                 />
        </div>
    )

}

export default PerformancesContainer;