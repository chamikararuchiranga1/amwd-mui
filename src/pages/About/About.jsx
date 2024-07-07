import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function About () {

    const navigate = useNavigate()
    return(
        <div>
            <h1>About</h1>
            <Button onClick={()=> navigate('/home')} variant="contained">Back</Button>
        </div>
        
    )
}