import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import instance from "../../service/AxiosOrders"

export default function About() {

    const navigate = useNavigate()

    const getData = () => {
        instance.get('/student/getAll')
            .then(function (res) {
                console.log(res)
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>About</h1>
            <Button onClick={() => getData()} variant="contained">Get Data</Button>
        </div>

    )
}