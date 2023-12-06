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
                    <div className="sudoku-row">
                        {row.map((cell, c) => (
                            <Cell cell={cell}></Cell>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}