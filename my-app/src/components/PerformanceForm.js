import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";

const initialState = {
    title: "",
    streamer_id: "",
    game_id: "",
};

function PerformanceForm({onAddPerformance}) {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newPerformance = {
            title: formData.title,
            streamer_id: formData.streamer_id,
            game_id: formData.game_id,
        }
        fetch("http://localhost:9292/performances", {
            method: 'POST',
            headers: { 'Content-Type': "application/json", },
            body: JSON.stringify(newPerformance)
        })
            .then((res) => res.json())
            .then(newPerformance => {
                console.log(newPerformance);
                (onAddPerformance(newPerformance[0]));
            })
            
    }

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
                <Form.Group className="my-3 mx-3">
                    <h3>Add A New Performance</h3>
                    <Row>
                        <Col>
                            <Form.Label>Performance Title</Form.Label>
                            <Form.Control
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Performance Title"
                                onChange={handleChange}
                                value={formData.title}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Streamer ID</Form.Label>
                            <Form.Control
                                type="number"
                                id="streamer_id"
                                name="streamer_id"
                                placeholder="Streamer Id"
                                onChange={handleChange}
                                value={formData.streamer_id}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                                type="number"
                                id="game_id"
                                name="game_id"
                                placeholder="game"
                                onChange={handleChange}
                                value={formData.game_id}
                            />
                        </Col>
                    </Row>
                    <Button onClick={handleSubmit} type="submit" class="my-3">
                        Add Performance
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default PerformanceForm;