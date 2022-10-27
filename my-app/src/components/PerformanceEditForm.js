import { useState } from "react";

const initialState = {
    title: "",
    streamer_id: "",
    game_id: "",
};



function PerformanceEditForm({ performanceToEdit, onUpdatePerformance }) {
    const [formData, setFormData] = useState(initialState);

    const { title, streamer_id, game_id } = formData;

    useEffect(() => {
        fetch(`http://localhost:4000/performances/${performanceToEdit.id}`)
            .then((res) => res.json())
            .then((performance) => setFormData(performance));
    }, [performanceToEdit.id]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        };
    
        fetch(`http://localhost:9292/performances/${performanceToEdit.id}`, configObj)
          .then((resp) => resp.json())
          .then((updatedPerformance) => {
            onUpdatePerformance(updatedPerformance);
          });
      };


    return (

        <form onSubmit={handleSubmit}>
            <h3>Edit Performance</h3>

            <label>Title</label>
            <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleOnChange}
            />
            <label>Streamer</label>
            <input
                type="text"
                id="streamer_id"
                name="streamer_id"
                value={streamer_id}
                onChange={handleOnChange}
            />

            <label>Game</label>
            <input
                type="text"
                id="game_id"
                name="game_id"
                value={game_id}
                onChange={handleOnChange}
            />

            <button type="submit">Update Performance</button>
        </form>
    );
}

export default PerformanceEditForm;