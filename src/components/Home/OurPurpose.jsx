import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import purpose1 from "../../assets/images/purpose1.png";
import purpose2 from "../../assets/images/purpose2.png";
import {btnStyles} from '../../styles/appStyles.jsx';

export default function OurPurpose() {

    return (
        <Box sx={{ backgroundColor: '#EAD9C9' }}>
            <Grid container spacing={4} sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', width: '48%', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '32px', fontFamily: 'Work Sans', fontWeight: 600, marginBottom: '16px', color: '#3E3027' }}>
                        Our Purpose
                    </Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 500, fontFamily: "Montserrat, sans-serif", color: '#3E3027', margin: '0 110px', textAlign: 'center', }}>
                        We believe that coffee creates moments of connection. We're inspired
                        by the love we all share for coffee, and we're driven to make
                        something meaningful—together.
                    </Typography>
                    <Typography sx={{ fontSize: '24px', fontFamily: 'Work Sans', fontWeight: 500, margin: '16px 0', color: '#3E3027' }}>
                        Store at Coffee Lane today!
                    </Typography>
                    <Button variant="outlined" sx={{  ...btnStyles, width: '179px', }}>
                        SHOP HERE
                    </Button>
                </Grid>
                <Grid sx={{ width: '52%', }}>
                    <Box component="img" src={purpose1} alt="Purpose Image 1" sx={{ width: '100%', height: '100%' }} />
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                <Grid sx={{ width: '50%', }}>
                    <Box component="img" src={purpose2} alt="Purpose Image 2" sx={{ width: '100%', height: '100%' }} />
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '32px', fontFamily: 'Work Sans', fontWeight: 600, marginBottom: '16px', color: '#3E3027' }}>
                        Delicious Coffee
                    </Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 500, fontFamily: "Montserrat, sans-serif", color: '#3E3027', margin: '0 110px', textAlign: 'center', }}>
                        At Coffee Lane, we believe great taste should never make you wait.
                        That’s why we deliver freshly coffee straight to your door — fast and hassle-free.
                        Over 20,000 satisfied customers have already made us part of their daily ritual.
                        Whether you love bold espresso or smooth blends, we’ve got something to satisfy every coffee lover.
                        Enjoy rich flavor, cozy moments, and exceptional service — all in one cup.
                    </Typography>
                    <Button variant="outlined" sx={{ "&:hover": { backgroundColor: "#B88A6E" }, textTransform: 'none', fontFamily: "Montserrat, sans-serif", fontSize: '16px', backgroundColor: '#A4795B', borderRadius: '20px', border: 'none', color: '#fff', width: '262px', height: '52px', marginTop: '16px' }}>
                        Order your coffee now
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
