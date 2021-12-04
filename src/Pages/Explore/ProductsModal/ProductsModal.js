import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ProductsModal = ({ openProducts, handleCloseProducts, product, setOrderSuccess }) => {
    const { name, description, price } = product;
    const { user } = useAuth();
    const initialInfo = { name: user.name, number: user.number, email: user.email, password: user.password }
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handlePlaceOrder = e => {
        const orderNow = {
            ...orderInfo,
            price,
            productName: name,
            date: Date().split(2)[0]
        }
        fetch('http://localhost:5000/orderNow', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderNow)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);
                    handleCloseProducts();
                }
            })


        e.preventDefault();
    }
    return (
        <Modal
            open={openProducts}
            onClose={handleCloseProducts}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography sx={{ color: 'primary.main' }} id="modal-modal-title" variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography color="text.secondary" id="modal-modal-description" sx={{ mt: 2 }}>
                    {description}
                </Typography>
                <Typography color="text.primary" id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
                    ${price}
                </Typography>
                <form onSubmit={handlePlaceOrder}>
                    <TextField
                        sx={{ mt: 1, mb: 2, width: '100%' }}
                        id="outlined-basic"
                        label="Product"
                        name="name"
                        type="text"
                        variant="outlined"
                        size="small"
                        defaultValue={name}
                        disabled
                        onBlur={handleOnBlur} />
                    <TextField
                        sx={{ mt: 1, mb: 2, width: '100%' }}
                        id="outlined-basic"
                        label="Name"
                        name="name"
                        type="text"
                        variant="outlined"
                        size="small"
                        onBlur={handleOnBlur} />
                    <TextField
                        sx={{ mb: 2, width: '100%' }}
                        id="outlined-basic"
                        label="Number"
                        name="number"
                        variant="outlined"
                        size="small"
                        onBlur={handleOnBlur} />
                    <TextField
                        sx={{ mb: 2, width: '100%' }}
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        size="small"
                        onBlur={handleOnBlur} />
                    <TextField
                        sx={{ mb: 2, width: '100%' }}
                        id="filled-password-input"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <Button type="submit" variant="contained">PLACE ORDER</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ProductsModal;