import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import imageBg from '../../assets/images/home/imagebg.png';
import { btnStyles } from '../../styles/btnStyles.jsx';
import { headTitle } from '../../styles/typographyStyles.jsx';
import tornbottombg from '../../assets/images/home/tornbottombg.svg';


const CoffeeBanner = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => { });
            }
        }
    }, []);

    return (
        <Box sx={{ position: 'relative', width: '100%', height: 600, overflow: 'hidden', backgroundImage: 'url(/images/preview.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', }}>

            <video ref={videoRef} src="/videos/bannervideopreview.mp4" poster="/images/preview.jpg" autoPlay loop muted playsInline preload="auto" style={{ position: "absolute", top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, }} />

            <Box component="img" src={tornbottombg} alt="tornbottombg" sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 'auto', zIndex: 3, pointerEvents: 'none', }} />
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', }} >
                <Box component="img" src={imageBg} alt="imageBg" sx={{ width: 465, height: 465 }} />
                <Box sx={{ width: 465, height: 465, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography sx={{ ...headTitle, mb: 2 }}>Weekly Special</Typography>
                    <Typography sx={{ mb: 4, fontWeight: 400, fontSize: 24, color: '#EAD9C9' }}>
                        Starbucks Veranda Blend natural roasted ground coffee
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', mb: 9 }}>
                        <Typography sx={{ fontWeight: 500, fontSize: 32, color: '#A4795B', mr: 5, textDecoration: 'line-through', }}>$22</Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: 32, color: '#fff' }}>$17 / 200g</Typography>
                    </Box>

                    <Button variant="contained" sx={{ ...btnStyles, textTransform: 'none', width: 267 }}>
                        Add to cart
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default CoffeeBanner;
