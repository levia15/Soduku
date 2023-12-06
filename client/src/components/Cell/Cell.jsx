import React, {useState} from "react";

export default function Cell(props) {
    const value = props.value;
    const cellCol = props.cellCol;
    return (
        <>
        {(cellCol+1)%3==0 ? 
            <span className='sudoku-cell-thick'> {value !==0 ? value : ''}</span> : <span className='sudoku-cell'> {value !==0 ? value : ''}</span>}
        </>
    )
}