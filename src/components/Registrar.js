import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useAuth} from '../context/authContext'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}

            M@ikelPro-

            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Registrar({hanlindLoguiado}) {
    const [error,setError]=useState();
    const navigate=useNavigate();
    const [user,setUser]=useState({
        correo:'',
        contrasena:''
    });
    const {signup}=useAuth();
    const hadlerChange=({target:{name,value}})=>{
        setUser({...user,[name]:value});

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        // signup(user.correo,user.contrasena);
        try {
            await signup(user.correo, user.contrasena);
            navigate('/items');
        } catch (error) {
            setError(error.message);
        }

    };


    return (
        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Agregar Admin
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            onChange={hadlerChange}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo Electrónico"
                            name="correo"
                            autoComplete="Correo Electrónico"
                            autoFocus
                        />
                        <TextField
                            onChange={hadlerChange}
                            margin="normal"
                            required
                            fullWidth
                            name="contrasena"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="Contraseña"
                        />
                        {error && <p>Servidor:{error}</p>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={hanlindLoguiado}
                            >
                                Agregar
                            </Button>
                    </Box>


                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />

            </Container>
        </ThemeProvider>

    );
}