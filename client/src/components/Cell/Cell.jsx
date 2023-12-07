import React, {useState} from "react";

export default function Cell(props) {
    const [value, setValue] = useState(props.value !==0 ? props.value :'');
    const [isEditable] = useState(props.value !==0 ? false : true);
    const cellCol = props.cellCol; 
    const cellRow = props.cellRow;

    const changeValidInput = (e) => {
                const inputValue = e.key;

                if (/^[1-9]$/.test(inputValue)) {
                    setValue(inputValue)
                } else if(inputValue === 'Backspace') {
                    setValue('');
                }
    }

    return (
        <>
            <input 
                onKeyDown={changeValidInput}
                readonly={isEditable ? false : 'readonly'} 
                value={value} 
                className={(cellCol==2 || cellCol==5)? "sudoku-cell-thick" : "sudoku-cell"}
            />
        </>
    )
}