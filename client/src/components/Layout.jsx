import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Layout() {
    const [soduku, setSoduku] = useState([]);
    const getSoduku = () => {
        axios.get('https://sudokucollective.com/api/v1/games/createannonymous', { params: { DifficultyLevel: 2 } })
            .then(response => {
                setSoduku(response.data.payload[0].rows);
                console.log(response.data.payload[0].rows);
            })
            .catch(err => {
                console.error(err);
            });

     }
    
   
    return (
        <>
            <Button onClick={getSoduku}>Generate</Button>
        </>
    )
}