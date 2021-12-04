import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    const navLink = {
        textDecoration: 'none',
        color: 'white',
        margin: '5px',
        fontWeight: 400,
        fontSize: '16px'
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <NavLink style={navLink} to="/">
                        <Button color="inherit">HOME</Button>
                    </NavLink>
                    <NavLink style={navLink} to="/explore">
                        <Button color="inherit">EXPLORE</Button>
                    </NavLink>
                    <NavLink style={navLink} to="/services">
                        <Button color="inherit">SERVICES</Button>
                    </NavLink>
                    <NavLink style={navLink} to="/reviews">
                        <Button color="inherit">REVIEWS</Button>
                    </NavLink>
                    <NavLink style={navLink} to="/about">
                        <Button color="inherit">ABOUT US</Button>
                    </NavLink>
                    {
                        user?.email ?
                            <>
                                <NavLink style={navLink} to="/dashboard">
                                    <Button style={{ color: 'white', backgroundColor: '#3CB371' }} color="inherit">DASHBOARD</Button>
                                </NavLink>
                                <Button style={{ backgroundColor: '#DC143C' }} onClick={logout} color="inherit">Logout</Button>
                            </>
                            :
                            <NavLink style={navLink} to="/login">
                                <Button style={{ color: 'black', backgroundColor: 'white' }} color="inherit">Login</Button>
                            </NavLink>
                    }
                    <NavLink style={navLink} to="/signup">
                        <Button style={{ backgroundColor: 'black' }} color="inherit">Sign Up</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;