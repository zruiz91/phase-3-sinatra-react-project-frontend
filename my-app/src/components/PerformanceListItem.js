import React from 'react';
import { Button, Card, Container, Col, Row, CardGroup, Stack } from 'react-bootstrap';

function PerformanceListItem({ performance, onEditPerformance, onDeletePerformance }) {
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
        <div>
            <Container className="m-2" >
                <CardGroup className="p-4">
                <Card
                    style={{ width: '18rem', margin: 'auto', }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {streamer_name}
                        </Card.Text>
                        <Card.Text>
                            {game_name}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                        <Stack gap={2} className="col-md-5 mx-auto">
                            <Col>
                                <Button variant="info" onClick={handleEditClick}>Edit</Button>
                            </Col>
                            <Col>
                                <Button variant="info" onClick={handleDeleteClick}>Delete</Button>
                            </Col>
                            </Stack>
                        </Row>
                    </Card.Footer>
                </Card>
                </CardGroup>
            </Container>

        </div>

    )
}

export default PerformanceListItem;