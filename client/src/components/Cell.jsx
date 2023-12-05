import React from "react";
import Card from 'react-bootstrap/Card';

export default function Cell(props) {
    const cell = props.cell;
    return (
        <>
           <Card bg='light' style={{ width: '3rem' }} border='dark'>
                <Card.Body>{cell}</Card.Body>
           </Card>
        </>
    )
}