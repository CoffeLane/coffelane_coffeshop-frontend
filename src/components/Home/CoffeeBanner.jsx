import React, { useRef, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import imageBg from '../../assets/images/imageBg.png';
import bannerVideo from '../../assets/videos/bannerVideo.mp4';
import {btnStyles} from '../../styles/appStyles.jsx';

const CoffeeBanner = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = 700;

        const video = document.createElement('video');
        video.src = bannerVideo;
        video.loop = true;
        video.muted = true;
        video.play().catch(e => console.warn('Video play was interrupted:', e));

        function generateTornPath(y, width, segmentWidth, amplitude) {
            const points = [];
            for (let x = 0; x <= width; x += segmentWidth) {
                const randomSpike = Math.random() > 0.9 ? amplitude * 2 : amplitude;

                const cp1X = x + segmentWidth / 2;
                const cp1Y = y + (Math.random() * randomSpike * 1.5 - randomSpike);

                const cp2X = x + (1 * segmentWidth) / 2;
                const cp2Y = y + (Math.random() * randomSpike * 1.5 - randomSpike);

                const endX = x + segmentWidth;
                const endY = y + (Math.random() > 0.8 ? (Math.random() * amplitude * 1 - amplitude * 1) : 0);

                points.push({ cp1X, cp1Y, cp2X, cp2Y, endX, endY });
            }
            return points;
        }

        function drawTornEdge(ctx, y, width, height, points) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            points.forEach(p => {
                ctx.bezierCurveTo(p.cp1X, p.cp1Y, p.cp2X, p.cp2Y, p.endX, p.endY);
            });
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fillStyle = '#fff';
            ctx.fill();
        }

        const tornPoints = generateTornPath(height - 20, width, 30, 15);

        let animationFrameId;

        function animate() {
            ctx.clearRect(0, 0, width, height);

            if (video.readyState >= 2) {
                const videoRatio = video.videoWidth / video.videoHeight;
                const canvasRatio = width / height;
                let drawWidth, drawHeight, offsetX, offsetY;

                if (videoRatio > canvasRatio) {
                    drawHeight = height;
                    drawWidth = video.videoWidth * (height / video.videoHeight);
                    offsetX = (width - drawWidth) / 2;
                    offsetY = 0;
                } else {
                    drawWidth = width;
                    drawHeight = video.videoHeight * (width / video.videoWidth);
                    offsetX = 0;
                    offsetY = (height - drawHeight) / 2;
                }

                ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);
            }

            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = width;
            tempCanvas.height = height / 2.2;
            const tempCtx = tempCanvas.getContext('2d');

            tempCtx.drawImage(canvas, 0, 0, width, height / 2.2, 0, 0, width, height / 2.2);

            ctx.save();
            ctx.filter = 'blur(1.8px)';
            ctx.drawImage(tempCanvas, 0, 0);
            ctx.restore();

            drawTornEdge(ctx, height - 20, width, height, tornPoints);

            animationFrameId = requestAnimationFrame(animate);
        }

        const onCanPlay = () => {
            if (!animationFrameId) {
                animate();
            }
        };

        video.addEventListener('canplay', onCanPlay);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            video.pause();
            video.removeEventListener('canplay', onCanPlay);
            video.src = "";
        };
    }, []);

    return (
        <Box sx={{ position: "relative", width: "100%", height: 700 }}>
            <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 2, display: 'flex', }} >
                <Box component="img" src={imageBg} alt="imageBg" sx={{ width: '465px', height: '465px' }} />
                <Box sx={{ width: '465px', height: '465px', display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
                    <Typography sx={{ mb: 2, fontWeight: 700, fontSize: '56px', color: '#A4795B' }}>
                        Weekly Special
                    </Typography>
                    <Typography sx={{ mb: 2, fontWeight: 400, fontSize: '24px', color: '#EAD9C9' }}>
                        Starbucks Veranda Blend natural roasted ground coffee
                    </Typography>
                    <Typography sx={{ mb: 2, fontWeight: 500, fontSize: '32px', color: '#EAD9C9' }}>
                        200g
                    </Typography>
                    <Button variant="contained" sx={{ ...btnStyles, textTransform: "none",  width: '267px',}} >
                        Shop now
                    </Button>

                </Box>

            </Box>
        </Box>
    );
};

export default CoffeeBanner;