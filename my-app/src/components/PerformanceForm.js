import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";

const initialState = {
    title: "",
    streamer_id: "",
    game_id: "",
};
function PerformanceForm(onAddPerformance) {
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
                (onAddPerformance(newPerformance));
            })
    }

    return (
        // made an update to the margins on add movie from
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
                            <Form.Label htmlFor="title">Performance Title</Form.Label>
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
                            <Form.Label htmlFor="streamer_id">Releast Date</Form.Label>
                            <Form.Control
                                className=""
                                type="integer"
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
                            <Form.Label htmlFor="rating">Rating</Form.Label>
                            <Form.Control
                                type="number"
                                id="rating"
                                name="rating"
                                step="0.1"
                                placeholder="Rating"
                                onChange={handleChange}
                                value={formData.rating}
                            />
                        </Col>
                    </Row>
                    <Button type="submit" class="my-3">
                        Add Performance
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default PerformanceForm;