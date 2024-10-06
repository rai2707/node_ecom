import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Products = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const res = await axios.get('https://fakestoreapi.com/products');
            setLoading(false);
            setItems(res.data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <>
            <Navbar />
            <Box sx={{ display: "grid", gridTemplateColumns: { sm: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }, gap: 3, padding: 2 }}>
                {items.map((item: any) => (
                    <Card sx={{ maxWidth: 345 }} key={item.id}>
                        <Link to={`/products/${item.id}`}>
                            <CardMedia
                                component="img"
                                sx={{ height: 140 }}
                                image={item?.image}
                                alt={item?.title}
                            />
                        </Link>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item?.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {item?.description}
                            </Typography>
                            <Typography variant="h5" component="div">
                                ${item?.price}
                            </Typography>
                        </CardContent>
                        <Link to={`/products/${item.id}`}><Button variant="contained" color="primary">View Details</Button></Link>
                        <Button variant="contained" color="secondary">Add to Cart</Button>
                    </Card>
                ))}
            </Box>
            <Footer />
        </>
    );
};

export default Products;
