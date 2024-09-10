import { Box, Button, Card, CardContent, Typography, TextField, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate()
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
                            setPass(val.target.value)
                        }} fullWidth id="outlined-basic" type='password' label="Password" variant="outlined" />
                    </Box>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant={'contained'} size="small">Login</Button>
                </CardActions>
            </Card>
        </Box>

    )
}