import React from 'react';
import PerformanceListItem from "./PerformanceListItem";


function PerformanceList({performances,onEditPerformance, onDeletePerformance, onUpdatePerformance}) {

    const performanceListItems = performances.map((performance) => {
        return (<PerformanceListItem
                key={performance.id}
                performance={performance}
                onEditPerformance={onEditPerformance}
                onUpdatePerformance={onUpdatePerformance}
                onDeletePerformance={onDeletePerformance}
                />
        )
    })
    return (
        <div>
        {performanceListItems}
        </div>
    )
}

export default PerformanceList;