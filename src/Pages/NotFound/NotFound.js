import React from 'react';
import notFound from '../../images/illustration/404.jpg';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const NotFound = () => {
    return (
        <Container style={{ display: 'flex', padding: '50px' }}>
            <Box style={{ margin: 'auto', width: '30%' }}>
                <Typography variant="h3" gutterBottom component="div" style={{ color: 'blueviolet', fontWeight: 900 }}>Page Not <br />Found
                </Typography>
                <Typography sx={{ fontWeight: 'lighter' }} variant="h6" gutterBottom component="div">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores iusto totam harum vitae ullam pariatur sapiente molestias praesentium quos mollitia.
                </Typography>
                <NavLink style={{ textDecoration: 'none' }} to="/"><Button style={{ color: 'white', backgroundColor: 'darkblue' }}>GO BACK</Button></NavLink>
            </Box>
            <Box>
                <img style={{ width: '100%', height: '400px', width: '600px' }} src={notFound} alt="404" />
            </Box>
        </Container>
    );
};

export default NotFound;