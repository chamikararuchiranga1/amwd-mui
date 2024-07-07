import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ButtonGroup from '@mui/material/ButtonGroup';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const MyComponent = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
    border: '2px solid black',
});

const MyButton = styled(Button)({
    color: 'red',
    backgroundColor: 'yellow',
    padding: 8,
    borderRadius: 4,
    border: '2px solid black',
});

export default function Home() {

    const natigate = useNavigate()
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <h1>Home</h1>
            <Button onClick={()=> natigate('/about')} variant="contained">Go to About</Button>
            <br />
            <MyComponent>My Name</MyComponent>
            <MyButton>Button</MyButton>
            <Button sx={{ backgroundColor: { xs: 'red', sm: 'yellow', md: 'blue', lg: 'black', xl: 'orange' } }} variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
                Link
            </Button>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />} endIcon={<SendIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <div>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} defaultChecked color="secondary" />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="default" />
                <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                    }}
                />
            </div>

            <Box sx={{ maxWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>

    )
}