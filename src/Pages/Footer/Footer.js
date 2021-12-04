import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import paymentMethod from './../../images/illustration/payment-method.png';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#000000f2', p: '50px', m: '20px 0' }}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <NavLink style={{ textDecoration: 'none' }} to="explore">
                        <Typography sx={{ color: '#C0C0C0' }} variant="h5" gutterBottom component="div">
                            BUY BICYCLE BD
                        </Typography>
                    </NavLink>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'lighter', color: '#C0C0C0' }} variant="h6" gutterBottom component="div">
                        51/3/GHA, West Rajabazar, Tejgaon, Dhaka.
                        Official: buybicyclebd.com
                        Helpline : 9250732419 <br />
                        (Available : 10:00am to 9:00pm)
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'lighter', color: '#C0C0C0' }} variant="h6" gutterBottom component="div">
                        <NavLink style={{ textDecoration: 'none', color: '#C0C0C0' }} to="about">About Us</NavLink><br />
                        <NavLink style={{ textDecoration: 'none', color: '#C0C0C0' }} to="contact">Contact Us</NavLink><br />
                        Terms and Conditions <br />
                        Privacy Policy
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <img style={{ width: '200px' }} src={paymentMethod} alt="payment method" />
                    <Typography sx={{ fontSize: '15px', fontWeight: 'lighter', color: '#C0C0C0' }} variant="h6" gutterBottom component="div">
                        Payment method coming soon...
                    </Typography>
                </Grid>
                <Typography sx={{ fontWeight: 500, color: '#C0C0C0', m: 'auto', mt: 5 }} variant="p" gutterBottom component="div">
                    Copyright © 2021 buybicyclebd.com
                </Typography>
            </Grid>
        </Box>
    );
};

export default Footer;