import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import signup from '../../../images/illustration/sign-up.png';
import Navigation from '../../Shared/Navigation/Navigation';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const SignUp = () => {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, loading, authError } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Password didn't match, please try again.");
            return;
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <>
            <Navigation></Navigation>
            <Container sx={{ marginTop: '100px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <Typography sx={{ m: 1, color: 'primary.main' }} variant="h3" component="h2">
                            SIGN UP
                        </Typography>
                        {!loading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                            />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="outlined-basic"
                                label="Confirm Password"
                                variant="outlined"
                                type="password"
                                name="password2"
                                onChange={handleOnChange}
                            />
                            <br />
                            <Button type="submit" sx={{ px: 5, borderRadius: 16, m: 1 }} style={{ color: 'white', backgroundColor: '#000000cc' }}>SIGN UP</Button>
                            <Typography
                                sx={{ fontWeight: 500, m: 1 }}
                                variant="body2"
                                component="h2">
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/login">
                                    ALREADY A USER? PLEASE LOGIN
                                </NavLink>
                            </Typography>
                        </form>}
                        {loading && <CircularProgress />}
                        {user?.email &&
                            <Alert >
                                User created successfully! You can now purchase our products. Go to
                                <NavLink
                                    style={{ textDecoration: 'none', color: 'blue' }}
                                    to="/explore"> explore
                                </NavLink> or
                                <NavLink
                                    style={{ textDecoration: 'none', color: 'blue' }}
                                    to="/"> home
                                </NavLink> page.
                            </Alert>}
                        {authError && <Alert severity="error">{authError} User already exist. Please
                            <NavLink
                                style={{ textDecoration: 'none', color: 'blue' }}
                                to="/login"> login
                            </NavLink> or try again.
                        </Alert>}
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img style={{ width: '75%' }} src={signup} alt="login" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default SignUp;