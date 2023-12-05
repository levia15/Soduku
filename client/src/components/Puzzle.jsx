import React from "react"
import Cell from "./Cell";

export default function Puzzle(props) {
    const puzzle = props.puzzle;
    console.log(puzzle);
    return (
        <>
            {puzzle.map((row, r) => (
                <div key={r}>
                    {row.map((cell, c) => (
                        //<span key={c}>{cell}</span>
                        <Cell cell={cell}></Cell>
                    ))}
                </div>
            ))}
        </>
    )
}