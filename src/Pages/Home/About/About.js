import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Navigation from './../../Shared/Navigation/Navigation';
import about1 from '../../../images/illustration/about-1.png';
import about2 from '../../../images/illustration/about-2.png';
import { NavLink } from 'react-router-dom';
import Footer from './../../Footer/Footer';

const About = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'primary.main', m: '20px 0' }} variant="h3" component="div">
                    ABOUT US
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <img style={{ width: '200px' }} src={about1} alt="illustration" />
                            <Typography sx={{ fontWeight: 'lighter' }} variant="h6" gutterBottom component="div">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ut officiis ipsam atque pariatur ea ad. Architecto voluptas eius delectus corporis corrupti autem eveniet nihil voluptate pariatur voluptatum odio expedita, repellat harum aut doloremque accusamus voluptatem sequi aperiam, optio obcaecati recusandae hic id. Architecto id, quasi eveniet mollitia nostrum, laudantium reprehenderit dicta totam aliquam consequatur et. Aut nesciunt enim similique consectetur neque. Quis eligendi labore expedita placeat error. Ipsam iste accusantium esse ad vero nemo provident impedit repellendus consectetur quae, amet tempore excepturi magnam voluptate molestias suscipit tenetur iusto fugiat aperiam. Iusto maiores quos unde explicabo aliquam asperiores a aut!
                            </Typography>
                            <NavLink
                                style={{
                                    textDecoration: 'none',
                                    margin: '5px',
                                    fontWeight: 400,
                                    fontSize: '16px'
                                }} to="/">
                                <Button style={{ color: 'white', backgroundColor: '#6600FF' }}>GO BACK</Button>
                            </NavLink>
                        </Grid>
                        <Grid item xs={4}>
                            <img style={{ width: '200px' }} src={about2} alt="illustration" />
                            <Typography sx={{ fontWeight: 'lighter' }} variant="h6" gutterBottom component="div">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, tenetur? Exercitationem sunt architecto eligendi atque obcaecati fugiat veritatis enim tempore maiores id, qui reprehenderit pariatur dolores nesciunt, adipisci vero neque velit eos eaque suscipit? Sit porro temporibus dolorem minima officiis.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
            <Footer></Footer>
        </>
    );
};

export default About;