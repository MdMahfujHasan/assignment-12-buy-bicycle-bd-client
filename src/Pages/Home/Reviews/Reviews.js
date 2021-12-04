import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import user1 from './../../../images/photos/user-1.jpg';
import user2 from './../../../images/photos/user-2.jpg';
import user3 from './../../../images/photos/user-3.jpg';
import user4 from './../../../images/photos/user-4.jpg';
import user5 from './../../../images/photos/user-5.jpg';
import user6 from './../../../images/photos/user-6.jpg';
import Container from '@mui/material/Container';
import Navigation from './../../Shared/Navigation/Navigation';
import Footer from './../../Footer/Footer';

const users = [
    {
        id: 1,
        name: "Kenneth Duarte",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        rating: 4,
        img: user1
    },
    {
        id: 2,
        name: "Deangelo House",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        rating: 3,
        img: user2
    },
    {
        id: 3,
        name: "Kason Glover",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        rating: 4,
        img: user3
    },
    {
        id: 4,
        name: "Nola Guzman",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        rating: 5,
        img: user4
    },
    {
        id: 5,
        name: "Nasir Cruz",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        rating: 3,
        img: user5
    },
    {
        id: 6,
        name: "Stephen Avila",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi assumenda culpa animi soluta ipsum delectus deleniti dolores exercitationem illum.",
        rating: 4,
        img: user6
    }
]
// 
const Reviews = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'primary.main', m: '20px 0' }} variant="h3" component="div">
                    REVIEWS
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {users.map(user =>
                            <Grid item xs={2} sm={4} md={4} >
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ borderRadius: '50%' }}
                                        component="img"
                                        height="100"
                                        image={user.img}
                                        style={{ width: '100px', margin: 'auto' }}
                                        alt="user img"
                                    />
                                    <CardContent>
                                        <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                                            {user.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {user.description}
                                        </Typography>
                                    </CardContent>
                                    <Rating name="read-only" value={user.rating} size="small" />
                                </Card>
                            </Grid>
                        )
                        }
                    </Grid>
                </Box>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Reviews;