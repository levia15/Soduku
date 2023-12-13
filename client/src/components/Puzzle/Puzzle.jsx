import React, {useContext, useEffect, useState} from "react"
import Cell from "../Cell/Cell";
import "../Cell/Cell.css"
import "./Puzzle.css"
import {PuzzleContext} from "../Layout"

export default function Puzzle(props) {
    const sudokuSolution = props.sudokuSolution
    const {sudoku, setSudoku} = useContext(PuzzleContext);
    const [isComplete, setIsComplete] = useState(false)
    const [isSolved, setIsSolved] = useState(false)

    useEffect(() => {
        isCompleteFunc();
        //CHANGE
        //setIsComplete(true)
        if(isComplete)
            isSolvedFunc();
        console.log(isSolved);
      }, );

    const isCompleteFunc = () => {
        for (var r = 0; r < sudoku.length; r++) {
            if(sudoku[r].includes(0))
                break;
            if(r === sudoku.length - 1) {
                setIsComplete(true);
            }
        }
    }

    const isSolvedFunc = () => {
       // console.log(JSON.stringify(sudoku))
        //console.log(JSON.stringify(sudokuSolution))

        setIsSolved(JSON.stringify(sudoku) === JSON.stringify(sudokuSolution))
    }

    return (
        <>
            <div className="sudoku-board">
                {sudoku.map((row, r) => ( 
                    <div className={(r==2 || r==5) ? "sudoku-row-thick" : "sudoku-row"}>
                        {row.map((cell, c) => (
                            <Cell onChange={isCompleteFunc} cellCol={c} cellRow={r}></Cell>
                        ))}
                    </div>
                )) }
            </div>
        </>
    )
}