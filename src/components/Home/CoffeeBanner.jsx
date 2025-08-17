import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import imageBg from '../../assets/images/home/imagebg.png';
import Bannervideo from '../../assets/videos/bannervideopreview.mp4';
import preview from '../../assets/videos/preview.jpg';
import { btnStyles } from '../../styles/btnStyles.jsx';
import { headTitle } from '../../styles/typographyStyles.jsx';
import tornbottombg from '../../assets/videos/tornbottombg.svg';


const CoffeeBanner = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.createElement('video');
        video.src = Bannervideo;
        video.loop = true;
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;

        video.oncanplaythrough = () => setVideoLoaded(true);
    }, []);

    return (
        <Box sx={{ position: 'relative', width: '100%', height: 600, overflow: 'hidden', }}>

            <Box component="img" src={preview} alt="preview" sx={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, inset: 0, }} loading="eager" />

            <video src={Bannervideo} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', inset: 0, zIndex: 1, opacity: videoLoaded ? 1 : 0, transition: "opacity 0.5s ease-in-out", }} onCanPlayThrough={() => setVideoLoaded(true)} />

            <Box component="img" src={tornbottombg} alt="tornbottombg" sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 'auto', zIndex: 3, pointerEvents: 'none', }} />
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', }} >
                <Box component="img" src={imageBg} alt="imageBg" sx={{ width: 465, height: 465 }} />
                <Box sx={{ width: 465, height: 465, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography sx={{ ...headTitle, mb: 2 }}>Weekly Special</Typography>
                    <Typography sx={{ mb: 2, fontWeight: 400, fontSize: 24, color: '#EAD9C9' }}>
                        Starbucks Veranda Blend natural roasted ground coffee
                    </Typography>
                    <Typography sx={{ mb: 2, fontWeight: 500, fontSize: 32, color: '#EAD9C9' }}>200g</Typography>
                    <Button variant="contained" sx={{ ...btnStyles, textTransform: 'none', width: 267 }}>
                        Shop now
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default CoffeeBanner;