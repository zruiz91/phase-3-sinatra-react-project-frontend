import React from 'react';


function PerformanceListItem({performance}) {
    const title = performance.title;
    const streamer_id = performance.streamer_id;
    const game_id = performance.game_id;

    return (
        <li >
            <section>
                <h4>{title}</h4>
                <p>{streamer_id}</p>
                <p>{game_id}</p>
            </section>
        </li>
    )
}

export default PerformanceListItem;