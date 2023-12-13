import React, {useState, useContext} from "react";
import {PuzzleContext} from "../Layout"

export default function Cell(props) {
    const {sudoku, setSudoku} = useContext(PuzzleContext);
    const cellCol = props.cellCol; 
    const cellRow = props.cellRow;
    const isEditable = sudoku[cellRow][cellCol] !==0 ? false : true
    

    const updateCell = (value) => {
        let newSudoku = sudoku.slice(); 
        newSudoku[cellRow][cellCol] = parseInt(value);
        setSudoku(newSudoku); 
    }

    const changeValidInput = (e) => {
        const inputValue = e.key;

        if (/^[1-9]$/.test(inputValue)) {
            updateCell(inputValue)      
        } else if(inputValue === 'Backspace') {
            updateCell(0)
        }
    }

    return (
        <>
            <input 
                onKeyDown={changeValidInput}
                readonly={isEditable ? false : 'readonly'} 
                value={sudoku[cellRow][cellCol] == 0 ? '' : sudoku[cellRow][cellCol]} 
                className={(cellCol==2 || cellCol==5)? "sudoku-cell-thick" : "sudoku-cell"}
            />
        </>
    )
}