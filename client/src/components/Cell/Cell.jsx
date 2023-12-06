import React, {useState} from "react";

export default function Cell(props) {
    const value = props.value;
    const cellCol = props.cellCol;
    return (
        <>
            <span className={(cellCol+1)%3==0 ? "sudoku-cell-thick" : "sudoku-cell"}> {value !==0 ? value : ''}</span>
        </>
    )
}