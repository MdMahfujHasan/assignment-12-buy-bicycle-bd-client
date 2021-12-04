import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bicycle from '../../../images/photos/bicycle-home.jpg';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import bicycleIllustration from './../../../images/illustration/bicycle.png';

const FrontCover = () => {
    const topBannerBg = {
        background: `url(${bicycle})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        height: '500px'
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16} style={topBannerBg} sx={{ mt: 0 }}>
                <Grid item xs={8}>
                    <Typography sx={{ color: 'white', fontWeight: 300, backgroundColor: '#00000033', borderRadius: 1 }} variant="h4" component="div" >
                        A BICYCLE RIDE AROUND THE WORLD BEGINS WITH A SINGLE PEDAL STROKE.
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/explore">
                            <Button
                                style={{ backgroundColor: '#00008B' }}
                                sx={{ px: 7, py: 2, mr: 1, color: 'white' }}>EXPLORE
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/services">
                            <Button
                                style={{ backgroundColor: '#F0FFF0' }}
                                sx={{ px: 7, py: 2, color: '#00008B' }}>SERVICES
                            </Button>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <img style={{ width: '81%' }} src={bicycleIllustration} alt="bicycle" />
                </Grid>
            </Grid>
        </Box >
    );
};

export default FrontCover;