import React, {useState, createContext} from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Puzzle from "./Puzzle/Puzzle.jsx";

export const PuzzleContext = createContext([]);

export default function Layout() {
    const [sudoku, setSudoku] = useState([]);
    const [isPuzzleCreated, setIsPuzzleCreated] = useState(false);
    const [sudokuSolution, setSudokuSolution] = useState();

    const getSudoku = () => {
        axios.get('https://sudokucollective.com/api/v1/games/createannonymous', { params: { DifficultyLevel: 2 } })
            .then(response => {
                setSudoku(response.data.payload[0].rows);
                setIsPuzzleCreated(true);
                getSudokuSolution(response.data.payload[0].rows);
                Array.from(document.querySelectorAll("input")).forEach(
                    input => (input.value = "")
                  );
            })
            .catch(err => {
                console.error(err);
            });
            
     }
     const getSudokuSolution = (getSudoku) => {
        axios.request({
            method: 'POST',
            url: 'https://sudokucollective.com/api/v1/solutions/solve',
            maxBodyLength: Infinity,
            headers: {
                'Content-Type':'application/json'
            },
            data : JSON.stringify({
                "firstRow": getSudoku[0],   
                "secondRow": getSudoku[1],  
                "thirdRow": getSudoku[2],   
                "fourthRow": getSudoku[3],  
                "fifthRow": getSudoku[4],   
                "sixthRow": getSudoku[5],   
                "seventhRow": getSudoku[6], 
                "eighthRow": getSudoku[7],  
                "ninthRow": getSudoku[8] 
            })
        })
        .then(response => {
            //CHANGE
            //setSudoku(response.data.payload[0].rows)
            setSudokuSolution(response.data.payload[0].rows);
        })
        .catch(err => {
            console.error(err);
        });
     }
    

    return (
        <>
            {isPuzzleCreated ? 
                <PuzzleContext.Provider value={{sudoku, setSudoku}}>
                    <Puzzle sudokuSolution={sudokuSolution}></Puzzle>
                </PuzzleContext.Provider>
            : <></>}
            <Button onClick={getSudoku}>Generate</Button>
        </>
    )
}