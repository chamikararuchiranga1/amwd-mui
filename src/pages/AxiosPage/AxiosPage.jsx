import { Box, Button } from "@mui/material";
import axios from "axios";
import CardCom from "../../component/CardCom/CardCom";
import { useState } from "react";

export default function AxiosPage() {

    const [data, setData] = useState([]);

    function postApi() {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function getApi() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setData(response.data)
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Axios</h1>
            <Button onClick={postApi} variant="contained">Post API</Button>
            <Button onClick={getApi} variant="contained">Get API</Button>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    data.map((val, index) => (
                        <CardCom id={val.id} title={val.title} body={val.body} key={index} />
                    ))
                }
            </Box>
        </div>

    )
}