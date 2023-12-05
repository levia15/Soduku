import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Puzzle from "./Puzzle";

export default function Layout() {
    const [sudoku, setsudoku] = useState([]);
    const [isPuzzleCreated, setIsPuzzleCreated] = useState(false);

    const getsudoku = () => {
        axios.get('https://sudokucollective.com/api/v1/games/createannonymous', { params: { DifficultyLevel: 2 } })
            .then(response => {
                setsudoku(response.data.payload[0].rows);
                setIsPuzzleCreated(true);
            })
            .catch(err => {
                console.error(err);
            });

     }
    
   
    return (
        <>
            {isPuzzleCreated ? <Puzzle puzzle={sudoku}></Puzzle> : <></>}
            <Button onClick={getsudoku}>Generate</Button>
        </>
    )
}