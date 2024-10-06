import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

const ProductDetails = () => {
    const [items, setItems] = useState<any>({});
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchSingleProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setItems(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    const backToProducts = () => {
        navigate('/products')
    }

    useEffect(() => {
        fetchSingleProduct();
    }, [id]);

    return (
        <>
            <Navbar />
            <Box sx={{ marginTop: 12 }}>
                {items ? (
                    <Card sx={{ maxWidth: 600, margin: "auto" }}>
                        <CardMedia
                            component="img"
                            image={items.image}
                            sx={{ height: 400 }}
                            alt={items.title}
                        />
                        <CardContent>
                            <Typography variant="h5">{items.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {items.description}
                            </Typography>
                            <Typography variant="h6">${items.price}</Typography>
                        </CardContent>
                        <Button onClick={backToProducts}>Back to Products</Button>
                    </Card>
                ) : (
                    <h1>Loading...</h1>
                )}
            </Box>
            <Footer />
        </>
    );
};

export default ProductDetails;