import { Box, Button, Card, CardContent, Typography, TextField, CardActions } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../service/AxiosOrders";

export default function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        if (email !== '' && password !== '') {
            const data = {
                email: email,
                password: password,
            }
            instance.post('/login', data)
                .then(function (res) {
                    console.log(res.data?.token)
                    localStorage.setItem('stu-login',res.data?.token);
                    window.location.reload();
                })
                .catch(function (err) {
                    console.log(err)
                })
        }
    }

    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                        Login
                    </Typography>
                    <Box paddingBottom={2}>
                        <TextField onChange={(val) => {
                            setEmail(val.target.value)
                        }} fullWidth id="outlined-basic" label="Email" variant="outlined" />
                    </Box>
                    <Box paddingBottom={2}>
                        <TextField onChange={(val) => {
                            setPassword(val.target.value)
                        }} fullWidth id="outlined-basic" type='password' label="Password" variant="outlined" />
                    </Box>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={() => onLogin()} variant={'contained'} size="small">Login</Button>
                </CardActions>
            </Card>
        </Box>

    )
}