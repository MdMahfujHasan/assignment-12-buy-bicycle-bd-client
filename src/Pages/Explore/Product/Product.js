import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import ProductsModal from './../ProductsModal/ProductsModal';

const Product = ({ product, setOrderSuccess }) => {
    const { name, description, price, img } = product;
    const [openProducts, setOpenProducts] = React.useState(false);
    const handleOpenProducts = () => setOpenProducts(true);
    const handleCloseProducts = () => setOpenProducts(false);
    return (
        <>
            <Grid item xs={4} sm={4} md={4} lg={3}>
                <Card item spacing={{ xs: 3, sm: 4, md: 5 }} xs={12} sm={6} md={4} sx={{ maxWidth: 500 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt="bicycle"
                    />
                    <CardContent>
                        <Typography sx={{ color: 'primary.main' }} gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="h5" color="text.primary">
                            ${price}
                        </Typography>
                        <Rating name="read-only" value={4} size="small" />
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleOpenProducts} size="small">Order Now</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <ProductsModal
                product={product}
                openProducts={openProducts}
                handleCloseProducts={handleCloseProducts}
                setOrderSuccess={setOrderSuccess}
            ></ProductsModal>
        </>
    );
};

export default Product;