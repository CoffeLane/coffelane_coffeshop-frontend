import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



export default function ProductCardPage() {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const product = useSelector((state) => state.products?.items?.find(p => p.id === parseInt(id)));

    if (!product) return <div>Product not found</div>;

    const photos = product.photos_url || [];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePrev = () => {
        if (photos.length === 0) return;
        setSelectedIndex(prev => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const handleNext = () => {
        if (photos.length === 0) return;
        setSelectedIndex(prev => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));



    return (
        <Box sx={{ display: 'flex', gap: 4 }}>

            <Box sx={{ position: 'relative', width: 300 }}>
                {photos?.length > 0 && (
                    <>
                        {photos[selectedIndex] ? (
                            <Box component="img" src={photos[selectedIndex]} alt={product.name} sx={{ width: '100%', height: 300, objectFit: 'contain' }} />
                        ) : (
                            <Box sx={{ width: '100%', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
                                No image
                            </Box>
                        )} 

                        <IconButton onClick={handlePrev} sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.7)', }} >
                            <ArrowBackIosIcon />
                        </IconButton>

                        <IconButton onClick={handleNext} sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.7)', }}>
                            <ArrowForwardIosIcon />
                        </IconButton>

                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            {photos?.map((img, index) => (
                                <Box key={index} component="img" src={img} alt={`${product.name}-${index}`} sx={{ width: 60, height: 60, objectFit: 'contain', border: selectedIndex === index ? '2px solid #000' : '1px solid #ccc', cursor: 'pointer', }} onClick={() => setSelectedIndex(index)} />
                            ))}
                        </Box>
                    </>
                )}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography>Quantity</Typography>

                    <IconButton onClick={handleIncrement}><AddIcon /></IconButton>
                    <Typography>{quantity}</Typography>
                    <IconButton onClick={handleDecrement}><RemoveIcon /></IconButton>
                </Box>

                <Typography variant="h6" sx={{ mt: 2 }}>${(product.price * quantity).toFixed(2)}</Typography>

                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button variant="contained" sx={{ backgroundColor: '#b88c6a', '&:hover': { backgroundColor: '#a97a50' } }} onClick={() => console.log('Add to cart', quantity)}>
                        Add to cart
                    </Button>
                    <Button variant="outlined" sx={{ borderColor: '#b88c6a', color: '#b88c6a', '&:hover': { borderColor: '#a97a50', backgroundColor: '#f5f0ec' } }} >
                        Checkout now
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};