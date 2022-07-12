import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';
import CanvasDelSelect from "./canvas_del_select";

export default function BasicSelect() {
    const navigate=useNavigate();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handlerCategoria=()=>{
      navigate('/categoria');
    }

    return (
        <Box sx={{ minWidth: 120 }} className='mb-2'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Categoria"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Pantalón</MenuItem>
                    <MenuItem value={2}>Zapato</MenuItem>
                    <Button variant="contained" fullWidth={true} onClick={handlerCategoria}>Nueva Categoria...</Button>
                </Select>
            </FormControl>

        </Box>
    );
}
