import React, { useState } from "react";
import logo from '../../assets/images/Logo.svg';
import { TextField, Box, Typography, Button, FormHelperText } from '@mui/material';
import Triangle from '../../assets/icons/Triangle.svg';
import { NavLink as RouterNavLink } from "react-router-dom";
import { Link, } from 'react-router-dom';
import linkedin from '../../assets/icons/linkedin.svg';
import facebook from '../../assets/icons/facebook.svg';
import youTube from '../../assets/icons/youTube.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import vimeo from '../../assets/icons/vimeo.svg';
import visa from '../../assets/icons/visa.svg';
import mastercard from '../../assets/icons/mastercard.svg';
import amazon from '../../assets/icons/amazon.svg';
import googlePay from '../../assets/icons/googlePay.svg';
import discover from '../../assets/icons/discover.svg';
import jcb from '../../assets/icons/jcb.svg';
import { btnStyles } from '../../styles/appStyles.jsx';
import { helperTextRed } from '../../styles/appStyles.jsx';
import { inputStyles } from '../../styles/appStyles.jsx';


const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const navLinkStyles = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: '#3E3027',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    mb: 2,
    '&.active': { color: "#B88A6E" },
    '&:hover': { color: "#B88A6E" }
};


export default function Footer() {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
        if (error) setError("");
    };


    const handleSubmit = () => {
        if (!validateEmail(value)) {
            setError("Please enter a valid email address");
            return;
        }
        alert(`Email submitted: ${value}`);
        setValue("");
        setError("");
    };




    return (

        <Box sx={{ flexGrow: 1, gap: 2, flex: 1, backgroundColor: '#EAD9C9', display: 'flex', px: 6, py: 6, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, px: 2 }}>
                <Typography sx={{ color: '#3E3027', fontFamily: 'Work Sans', fontWeight: 500, fontSize: '24px', mb: 1 }}>
                    Coffee Lanne
                </Typography>
                <Typography sx={{ color: '#3E3027', fontFamily: 'Work Sans', fontWeight: 400, fontSize: '14px', mb: 4 }}>
                    Ethically Sourced, Delicious Coffee Roasted with Purpose by Blind Dog Coffee Roasters.
                    Enjoy Premium 100% Organic Dark Roast, Medium Roast, Light Roast, Low Acid Decaf,
                    & Half-Caff Coffee Bean Roasts Delivered Fresh To Your Doorstep!
                </Typography>
                <Typography sx={{ color: '#3E3027', fontFamily: 'Work Sans', fontWeight: 500, fontSize: '16px', mb: 1 }}>
                    012-345-6789
                </Typography>
                <Typography sx={{ color: '#3E3027', fontFamily: 'Work Sans', fontWeight: 500, fontSize: '16px', mb: 4 }}>
                    hello@coffelane.com
                </Typography>
                <Link to='/'>
                    <Box component='img' src={logo} alt='logo' sx={{ width: '144px', height: '35px', cursor: 'pointer' }} />
                </Link>

                <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
                    <Box component='img' src={facebook} alt='facebook' sx={{ mt: 2, width: '24px', height: '24px', cursor: 'pointer' }} />
                    <Box component='img' src={youTube} alt='youTube' sx={{ mt: 2, width: '24px', height: '24px', cursor: 'pointer' }} />
                    <Box component='img' src={instagram} alt='instagram' sx={{ mt: 2, width: '24px', height: '24px', cursor: 'pointer' }} />
                    <Box component='img' src={twitter} alt='twitter' sx={{ mt: 2, width: '24px', height: '24px', cursor: 'pointer' }} />
                    <Box component='img' src={vimeo} alt='vimeo' sx={{ mt: 2, width: '24px', height: '24px', cursor: 'pointer' }} />
                    <Box component='img' src={linkedin} alt='linkedin' sx={{ mt: 2, width: '24px', height: '24px', cursor: 'pointer' }} />
                </Box>

                <Typography sx={{ color: '#3E3027', fontFamily: 'Work Sans', fontWeight: 400, fontSize: '14px' }}>
                    © 2025 Coffee Lane
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, px: 2 }}>
                <Box component='img' src={Triangle} alt='Triangle' sx={{ mb: 2, width: '24px', height: '24px' }} />
                <Typography sx={{ color: '#3E3027', fontFamily: 'Work Sans', fontWeight: 500, fontSize: '24px', mb: 1 }}>
                    Quick links
                </Typography>
                {[
                    { to: '/', label: 'Home' },
                    { to: '/coffee', label: 'Coffee' },
                    { to: '/accessories', label: 'Accessories' },
                    { to: '/shop', label: 'Shop' },
                    { to: '/ourStory', label: 'Our Story' },
                    { to: '/wholesale', label: 'Wholesale' },
                    { to: '/ourNewsletter', label: 'Subscribe to Our Newsletter' }
                ].map((link) => (
                    <Typography key={link.to + link.label} component={RouterNavLink} to={link.to} sx={navLinkStyles} >
                        {link.label}
                    </Typography>
                ))}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, px: 2, }}>
                <Box component='img' src={Triangle} alt='Triangle' sx={{ mb: 2, width: '24px', height: '24px' }} />
                <Typography sx={{ color: '#3E3027', fontFamily: 'Work Sans', fontWeight: 500, fontSize: '24px', mb: 1 }}>
                    Customer Support
                </Typography>
                {[
                    { to: '/trackOrder', label: 'Track Order' },
                    { to: '/redeemRewardPoints', label: 'Redeem Reward Points' },
                    { to: '/fAQs', label: 'FAQs' },
                    { to: '/refundPolicy', label: 'Refund Policy' },
                    { to: '/shippingPolicy', label: 'Shipping Policy' },
                    { to: '/termsofService', label: 'Terms of Service' },
                    { to: '/privateLabelCoffee', label: 'Private Label Coffee' }
                ].map((link) => (
                    <Typography key={link.to + link.label} component={RouterNavLink} to={link.to} sx={navLinkStyles} >
                        {link.label}
                    </Typography>
                ))}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, px: 2 }}>
                <Typography sx={{ color: '#3E3027', fontFamily: 'Work Sans', fontWeight: 500, fontSize: '24px', mb: 1 }}>
                    Newsletter
                </Typography>
                <Typography sx={{ color: '#3E3027', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '16px', mb: 2 }}>
                    Sign up for exclusive offers, original stories, events and more.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', '&:hover .helper-text': { color: '#A63A3A' }, '&:focus-within .helper-text': { color: '#A63A3A' }, }}>
                    <TextField fullWidth variant="outlined" value={value} placeholder="Email" onChange={onChange} error={!!error} sx={{ ...inputStyles }}/>
                    <Button variant="contained" onClick={handleSubmit} sx={{ ...btnStyles, width: '149px', mt: 2 }}>
                        SIGN UP
                    </Button>

                    {error && (
                        <FormHelperText className="helper-text" sx={{ ...helperTextRed, mt: 2 }}>
                            {error}
                        </FormHelperText>
                    )}
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '150px' }}>
                    <Box component='img' src={visa} alt='visa' sx={{ width: '32px', height: '32px', mr: 2, cursor: 'pointer' }} />
                    <Box component='img' src={mastercard} alt='mastercard' sx={{ width: '32px', height: '32px', mr: 2, cursor: 'pointer' }} />
                    <Box component='img' src={amazon} alt='amazon' sx={{ width: '32px', height: '32px', mr: 2, cursor: 'pointer' }} />
                    <Box component='img' src={googlePay} alt='googlePay' sx={{ width: '32px', height: '32px', mr: 2, cursor: 'pointer' }} />
                    <Box component='img' src={discover} alt='discover' sx={{ width: '32px', height: '32px', mr: 2, cursor: 'pointer' }} />
                    <Box component='img' src={jcb} alt='jcb' sx={{ width: '32px', height: '32px', mr: 2, cursor: 'pointer' }} />
                </Box>
            </Box>
        </Box>
    );
};