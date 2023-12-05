import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Puzzle from "./Puzzle";

export default function Layout() {
    const [soduku, setSoduku] = useState([]);
    const [isPuzzleCreated, setIsPuzzleCreated] = useState(false);

    const getSoduku = () => {
        axios.get('https://sudokucollective.com/api/v1/games/createannonymous', { params: { DifficultyLevel: 2 } })
            .then(response => {
                setSoduku(response.data.payload[0].rows);
                setIsPuzzleCreated(true);
                console.log(response.data.payload[0].rows);
            })
            .catch(err => {
                console.error(err);
            });

     }
    
   
    return (
        <>
            {isPuzzleCreated ? <Puzzle></Puzzle> : <></>}
            <Button onClick={getSoduku}>Generate</Button>
        </>
    )
}