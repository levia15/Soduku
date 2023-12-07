import React, {useState} from "react";

export default function Cell(props) {
    const [value, setValue] = useState(props.value !==0 ? props.value :'');
    const [isEditable] = useState(props.value !==0 ? false : true);
    const cellCol = props.cellCol; 
    const cellRow = props.cellRow;

    const setValidInput = (e) => {
        const inputValue = e.target.value;

        if (/^[1-9]$/.test(inputValue) || inputValue === '') {
            setValue(inputValue)
        }
    }

    return (
        <>
            <input 
                onInput={setValidInput} 
                readonly={isEditable ? false : 'readonly'} 
                value={value} 
                className={(cellCol==2 || cellCol==5)? "sudoku-cell-thick" : "sudoku-cell"}
            />
        </>
    )
}