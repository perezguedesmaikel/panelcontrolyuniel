import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import {app} from '../firebase/nuevacredensial';
import Alert from "@mui/material/Alert";

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

export default function Registrar(props) {
    const [error2,setError2]=useState(null);
    const navigate=useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
       await app.auth().createUserWithEmailAndPassword(data.get('email').toString(),data.get('password').toString())
            .then(
                usuarioFirebase=>{
                    props.setUsuario(usuarioFirebase);
                    navigate('/');
                }
            ).catch(
                error=>{
                    setError2(error.message)}

        );

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
                        Agregar Admin<br/>
                        <span className='advertensia text-danger'>Seción para agregar otro admin</span>
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo Electrónico"
                            name="email"
                            autoComplete="Correo Electrónico"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="Contraseña"
                        />
                        {error2 && <Alert variant="filled" severity="error">
                            {error2}
                        </Alert>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
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