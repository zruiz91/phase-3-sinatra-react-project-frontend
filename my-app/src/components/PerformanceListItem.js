import React from 'react';


function PerformanceListItem({performance, onEditPerformance, onDeletePerformance}) {
    const title = performance.title;
    const streamer_id = performance.streamer_id;
    const game_id = performance.game_id;

    const handleEditClick = () => {
        onEditPerformance(performance)
    }

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/performances/${performance.id}`, {
          method: "DELETE"
        })
        onDeletePerformance(performance.id);
      };
    

    return (
        <li >
            <section>
                <h4>{title}</h4>
                <p>{streamer_id}</p>
                <p>{game_id}</p>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
            </section>
        </li>
    )
}

export default PerformanceListItem;