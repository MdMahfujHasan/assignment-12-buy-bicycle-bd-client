import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import bicycle from '../../../images/icons/bicycle.png';
import frame from '../../../images/icons/frame.png';
import gear from '../../../images/icons/gear.png';
import handle from '../../../images/icons/handle.png';
import pedal from '../../../images/icons/pedal.png';
import saddle from '../../../images/icons/saddle.png';
import tire from '../../../images/icons/tire.png';
import wheel from '../../../images/icons/wheel.png';
import screw from '../../../images/icons/screw.png';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const services = [
    {
        name: 'Full Bicycle Repair',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates illo cupiditate voluptatum? Vitae qui laudantium, accusamus ullam suscipit cupiditate.',
        img: bicycle
    },
    {
        name: 'Frame Repair',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates illo cupiditate voluptatum? Vitae qui laudantium, accusamus ullam suscipit cupiditate.',
        img: frame
    },
    {
        name: 'Gear Repair',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates illo cupiditate voluptatum? Vitae qui laudantium, accusamus ullam suscipit cupiditate.',
        img: gear
    },
    {
        name: 'Handle Repair',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates illo cupiditate voluptatum? Vitae qui laudantium, accusamus ullam suscipit cupiditate.',
        img: handle
    },
    {
        name: 'Pedal Repair',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates illo cupiditate voluptatum? Vitae qui laudantium, accusamus ullam suscipit cupiditate.',
        img: pedal
    },
    {
        name: 'Saddle Repair',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates illo cupiditate voluptatum? Vitae qui laudantium, accusamus ullam suscipit cupiditate.',
        img: saddle
    },
    {
        name: 'Tire Repair',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates illo cupiditate voluptatum? Vitae qui laudantium, accusamus ullam suscipit cupiditate.',
        img: tire
    },
    {
        name: 'Wheel Repair',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates illo cupiditate voluptatum? Vitae qui laudantium, accusamus ullam suscipit cupiditate.',
        img: wheel
    },
    {
        name: 'Screw Repair',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates illo cupiditate voluptatum? Vitae qui laudantium, accusamus ullam suscipit cupiditate.',
        img: screw
    }
]

const Services = () => {
    return (
        <Container maxWidth="xlg">
            <Box sx={{ mx: '50px' }}>
                <Typography sx={{ fontWeight: 500, color: 'primary.main', m: '20px 0' }} variant="h3" component="div">
                    SERVICES
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Box >
        </Container>
    );
};

export default Services;