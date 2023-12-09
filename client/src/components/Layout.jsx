import React, {useState, createContext} from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Puzzle from "./Puzzle/Puzzle.jsx";

export const PuzzleContext = createContext([]);

export default function Layout() {
    const [sudoku, setSudoku] = useState([]);
    const [isPuzzleCreated, setIsPuzzleCreated] = useState(false);

    const getsudoku = () => {
        axios.get('https://sudokucollective.com/api/v1/games/createannonymous', { params: { DifficultyLevel: 2 } })
            .then(response => {
                setSudoku(response.data.payload[0].rows);
                setIsPuzzleCreated(true);
                Array.from(document.querySelectorAll("input")).forEach(
                    input => (input.value = "")
                  );
            })
            .catch(err => {
                console.error(err);
            });
     }
    
    return (
        <>
            {isPuzzleCreated ? 
                <PuzzleContext.Provider value={{sudoku, setSudoku}}>
                    <Puzzle></Puzzle>
                </PuzzleContext.Provider>
            : <></>}
            <Button onClick={getsudoku}>Generate</Button>
        </>
    )
}