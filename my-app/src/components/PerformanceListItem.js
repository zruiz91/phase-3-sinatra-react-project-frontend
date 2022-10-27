import React from 'react';


function PerformanceListItem({performance, watchedPerformances, setWatchedPerformances}) {
    const title = performance.title;
    const streamer_id = performance.streamer_id;
    const game_id = performance.game_id;

    const handleAddToWatched = () => {
        setWatchedPerformances(watchedPerformances => !watchedPerformances)
        }

    return (
        <li >
            <section>
                <h4>{title}</h4>
                <p>{streamer_id}</p>
                <p>{game_id}</p>
                <button onClick={handleAddToWatched}>{watchedPerformances?"Mark as watched":"Mark as not watched" }</button>
            </section>
        </li>
    )
}

export default PerformanceListItem;