import React from "react"
import Cell from "../Cell/Cell";
import "../Cell/Cell.css"
import "./Puzzle.css"

export default function Puzzle(props) {
    const puzzle = props.puzzle;
    return (
        <>
            <div className="sudoku-board">
                {puzzle.map((row, r) => ( 
                    <div className={(r+1)%3==0 ? "sudoku-row-thick" : "sudoku-row"}>
                        {row.map((cell, c) => (
                            <Cell value={cell} cellCol={c}></Cell>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}