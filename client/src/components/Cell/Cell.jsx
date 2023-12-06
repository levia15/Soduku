import React from "react";

export default function Cell(props) {
    const cell = props.cell;
    return (
        <>
           <span className='sudoku-cell'>{cell !==0 ? cell : ''}</span>
        </>
    )
}