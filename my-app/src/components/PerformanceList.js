import React from 'react';

import PerformanceListItem from "./PerformanceListItem";


function PerformanceList({performances,onEditPerformance}) {

    const performanceListItems = performances.map((performance) => {
        return (<PerformanceListItem
                key={performance.id}
                performance={performance}
                onEditPerformance={onEditPerformance}
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