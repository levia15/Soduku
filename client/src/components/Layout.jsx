import React from "react";
import Button from 'react-bootstrap/Button';

export default function Layout() {
    const [soduku, setSoduku] = useState('')
    const getSoduku = () => { }
    
   
    return (
        <>
            <Button onClick={getSoduku}>Generate</Button>
        </>
    )
}