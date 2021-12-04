import bicycle1 from '../../../images/photos/bicycle-1.jpg';
import bicycle2 from '../../../images/photos/bicycle-2.jpg';
import bicycle3 from '../../../images/photos/bicycle-3.jpg';
import bicycle4 from '../../../images/photos/bicycle-4.jpg';
import bicycle5 from '../../../images/photos/bicycle-5.jpg';
import bicycle6 from '../../../images/photos/bicycle-6.jpg';
import bicycle7 from '../../../images/photos/bicycle-7.jpg';
import bicycle8 from '../../../images/photos/bicycle-8.jpg';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import React, { useState } from 'react';
import Product from '../Product/Product';
import { Typography } from '@mui/material';

const products = [
    {
        id: 1,
        name: "Urban Terrain UT2000 MTB 27.5 T Mountain Cycle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        price: 200,
        img: bicycle1
    },
    {
        id: 2,
        name: "HERCULES Storm 2.0 26 T Road Cycle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        price: 250,
        img: bicycle2
    },
    {
        id: 3,
        name: "BSA STEALTH 20 T Road Cycle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        price: 315,
        img: bicycle3
    },
    {
        id: 4,
        name: "HERCULES Storm NV 26 T Road Cycle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        price: 425,
        img: bicycle4
    },
    {
        id: 5,
        name: "HERO Skyper 26 T Mountain/Hardtail Cycle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        price: 175,
        img: bicycle5
    },
    {
        id: 6,
        name: "HERO Sprint Hybrid City 26 T Hybrid Cycle/City Bike",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        price: 365,
        img: bicycle6
    },
    {
        id: 7,
        name: "FIREFOX BIKES 7 700C T Road Cycle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        price: 500,
        img: bicycle7
    },
    {
        id: 8,
        name: "HRX XTRM MTB 900 27.5 T Mountain Cycle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        price: 455,
        img: bicycle8
    }
]

const Products = ({ data }) => {
    const [orderSuccess, setOrderSuccess] = useState(false);
    return (
        <Box>
            <Typography sx={{ fontWeight: 500, color: 'primary.main', m: '20px 0' }} variant="h3" component="div">
                PRODUCTS
            </Typography>
            {/* {setOrderSuccess && <Alert severity="success">Your Order is Placed!</Alert>} */}
            <Container style={{ marginTop: '20px' }} maxWidth="lg">
                <Grid style={{ gridGap: '30px' }} container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 11, lg: 10 }}>
                    {
                        products.map(product =>
                            <Product
                                key={product.id}
                                product={product}
                                data={data}
                                setOrderSuccess={setOrderSuccess}
                            ></Product>
                        )
                    }
                </Grid>
            </Container >
        </Box>
    );
};

export default Products;















