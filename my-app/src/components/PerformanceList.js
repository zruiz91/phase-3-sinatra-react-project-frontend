import React from 'react';

import PerformanceListItem from "./PerformanceListItem";


function PerformanceList({performances, watchedPerformances, setWatchedPerformances}) {

    const performanceListItems = performances.map((performance) => {
        return (<PerformanceListItem
                key={performance.id}
                performance={performance}
                watchedPerformances={watchedPerformances}
                setWatchedPerformances={setWatchedPerformances}
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