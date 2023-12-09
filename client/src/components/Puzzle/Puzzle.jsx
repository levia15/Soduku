import React, {useContext} from "react"
import Cell from "../Cell/Cell";
import "../Cell/Cell.css"
import "./Puzzle.css"
import {PuzzleContext} from "../Layout"

export default function Puzzle(props) {
    const {sudoku, setSudoku} = useContext(PuzzleContext);
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