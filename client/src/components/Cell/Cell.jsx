import React, {useState} from "react";

export default function Cell(props) {
    const value = props.value;
    const cellCol = props.cellCol;
    const cellRow = props.cellRow;

    return (
        <>
            <input readonly={value == 0 ? false : 'readonly'} placeholder={props.value !==0 ? value : ''} className={(cellCol==2 || cellCol==5)? "sudoku-cell-thick" : "sudoku-cell"}/>
        </>
    )
}