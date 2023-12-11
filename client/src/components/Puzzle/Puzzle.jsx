import React, {useContext, useEffect, useState} from "react"
import Cell from "../Cell/Cell";
import "../Cell/Cell.css"
import "./Puzzle.css"
import {PuzzleContext} from "../Layout"

export default function Puzzle(props) {
    const {sudoku, setSudoku} = useContext(PuzzleContext);
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
         isCompleteFunc();
         isComplete ? console.log('complete') : console.log('incomplete')
      }, );

    const isCompleteFunc = () => {
        for (var r = 0; r < sudoku.length; r++) {
            if(sudoku[r].includes(0))
                break;
            if(r === sudoku.length - 1)
                setIsComplete(true)
        }
    }

    return (
        <>
            <div className="sudoku-board">
                {sudoku.map((row, r) => ( 
                    <div className={(r==2 || r==5) ? "sudoku-row-thick" : "sudoku-row"}>
                        {row.map((cell, c) => (
                            <Cell cellCol={c} cellRow={r}></Cell>
                        ))}
                    </div>
                )) }
            </div>
        </>
    )
}