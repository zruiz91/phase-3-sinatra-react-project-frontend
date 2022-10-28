import React from 'react';


function PerformanceListItem({performance, onEditPerformance, onDeletePerformance}) {
    const title = performance.title;
    const streamer_name = performance.streamer_name;
    const game_name = performance.game_id;

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
                <h4>Performance:  {title}</h4>
                <p>Streamer: {streamer_name}</p>
                <p>Game:  {game_name}</p>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
            </section>
        </li>
    )
}

export default PerformanceListItem;