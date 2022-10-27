import React from 'react';


function PerformanceListItem() {

    return (
        <li >
            <section>
                <h4>{performance.title}</h4>
                <p>{performance.streamer_id}</p>
                <p>{performance.game_id}</p>
            </section>
        </li>
    )
}

export default PerformanceListItem;