import React from 'react';
import PerformanceListItem from "./PerformanceListItem";
import { Container, Row, Col, CardGroup } from 'react-bootstrap';


function PerformanceList({performances,onEditPerformance, onDeletePerformance, onUpdatePerformance}) {

    const performanceListItems = performances.map((performance) => {
        return (<PerformanceListItem
                key={performance.id}
                performance={performance}
                onEditPerformance={onEditPerformance}
                onUpdatePerformance={onUpdatePerformance}
                onDeletePerformance={onDeletePerformance}
                />
        )
    })
    return (
        <Container
            className="bg-dark text-center"
            style={{
                border: "#4444 2px solid",
                padding: "2%",
                marginBottom: "2rem",
                marginTop: "05%",
                borderRadius: "30px",
            }}
        >
            {/* added CardGroup to make cards line up sideby side */}
            <CardGroup>
            {performanceListItems}
            </CardGroup>
        </Container>
    )
}

export default PerformanceList;