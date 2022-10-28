import { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const initialState = {
    title: "",
    streamer_id: "",
    game_id: "",
};



function PerformanceEditForm({ performanceToEdit, onUpdatePerformance }) {
    const [formData, setFormData] = useState(initialState);

    const { title, streamer_id, game_id } = formData;

    useEffect(() => {
        fetch(`http://localhost:9292/performances/${performanceToEdit.id}`)
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
        onUpdatePerformance(formData)
    };


    return (

        <Container style={{
            padding: "20%, 20%",
            marginBottom: "2rem",
            marginTop: "10%"
        }}>
            <Form
                className="form border rounded  "
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Form.Group className="my-3 mx-3 mb-3">
                    <h3>Edit Performance</h3>
                    <Row>
                        <Col>
                            <Form.Label>Performance Title</Form.Label>
                            <Form.Control
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={handleOnChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Streamer ID</Form.Label>
                            <Form.Control
                                type="text"
                                id="streamer_id"
                                name="streamer_id"
                                value={streamer_id}
                                onChange={handleOnChange}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label>Game</Form.Label>
                            <Form.Control
                                type="text"
                                id="game_id"
                                name="game_id"
                                value={game_id}
                                onChange={handleOnChange}
                            />
                        </Col>
                    </Row>
                    <Button type="submit" variant="info" class="my-3">
                        Update Performance
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default PerformanceEditForm;