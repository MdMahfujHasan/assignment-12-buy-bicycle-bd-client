import React from 'react';
import FrontCover from '../FrontCover/FrontCover';
import Services from '../Services/Services';
import Box from '@mui/system/Box';
import Products from '../../Explore/Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <FrontCover></FrontCover>
            <Services></Services>
            {/* <hr style={{ width: '10%', border: '1px solid black'}} /> */}
            <Products></Products>
            <Footer></Footer>
        </Box>
    );
};

export default Home;