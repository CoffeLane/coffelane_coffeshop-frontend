import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ProductImageSlider({ photos = [], productName }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePrev = () => setSelectedIndex(prev => (prev === 0 ? photos.length - 1 : prev - 1));
    const handleNext = () => setSelectedIndex(prev => (prev === photos.length - 1 ? 0 : prev + 1));

    if (!photos.length) return (
        <Box sx={{ width: '100%', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
            No image
        </Box>
    );

    return (
        <Box sx={{ position: 'relative', mt: 4, maxWidth: 700}}>
            
            <Box component="img" src={photos[selectedIndex]} alt={productName} sx={{ backgroundColor: '#fff', p: 1, height: 400, objectFit: 'contain' }} />
            <IconButton onClick={handlePrev} sx={{ position: 'absolute', top: '35%', left: -60, backgroundColor: 'rgba(255,255,255,0.9)', boxShadow: 1 }}><ArrowBackIosIcon /></IconButton>
            <IconButton onClick={handleNext} sx={{ position: 'absolute', top: '35%', right: -60, backgroundColor: 'rgba(255,255,255,0.9)', boxShadow: 1 }}><ArrowForwardIosIcon /></IconButton>
            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                {photos.map((img, index) => (
                    <Box key={index} sx={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => setSelectedIndex(index)}>
                        <Box component="img" src={img} alt={`${productName}-${index}`} sx={{backgroundColor: '#fff', p: 1, width: 80, height: 80, objectFit: 'contain', borderRadius: 1 }} />
                        <Box sx={{  width: 96, height: 4, borderRadius: 2, backgroundColor: selectedIndex === index ? '#3E3027' : '#ccc' }} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
