import React from 'react';
import { useState } from "react";

import PerformanceListItem from "./PerformanceListItem";


function PerformanceList({performances}) {

    const performanceListItems = performances.map((performance) => {
        return (<PerformanceListItem
                key={performance.id}
                performance={performance}
                />
        )
    })
    return (
        <div>
        <button>performanceList</button>
        {performanceListItems}
        </div>
    )
}

export default PerformanceList;