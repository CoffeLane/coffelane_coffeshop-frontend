import React, {useState} from "react";
import logo from '../../assets/images/header/logo.svg';
import {TextField, Box, Typography, Button, FormHelperText} from '@mui/material';
import triangle from '../../assets/icons/triangle.svg';
import {NavLink as RouterNavLink} from "react-router-dom";
import {Link,} from 'react-router-dom';
import linkedin from '../../assets/icons/linkedin.svg';
import facebook from '../../assets/icons/facebook.svg';
import youTube from '../../assets/icons/youtube.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import vimeo from '../../assets/icons/vimeo.svg';
import visa from '../../assets/icons/visa.svg';
import mastercard from '../../assets/icons/mastercard.svg';
import amazon from '../../assets/icons/amazon.svg';
import googlePay from '../../assets/icons/googlepay.svg';
import discover from '../../assets/icons/discover.svg';
import jcb from '../../assets/icons/jcb.svg';
import {btnStyles} from '../../styles/btnStyles.jsx';
import {helperTextRed} from '../../styles/inputStyles.jsx';
import {inputStyles} from '../../styles/inputStyles.jsx';
import footerImg from '../../assets/images/footer/footer-img.png';
import {h6, h4, h7} from "../../styles/typographyStyles.jsx";

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
    '&.active': {color: "#B88A6E"},
    '&:hover': {color: "#B88A6E"}
};


export default function Footer() {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    

    const onChange = (e) => {
        setValue(e.target.value);
        if (error) setError("");
        if (success) setSuccess(false);
    };


    const handleSubmit = () => {
        if (!validateEmail(value)) {
            setError("Please enter a valid email address");
            return;
        }
        setSuccess(true);
        setValue("");
        setError("");
    };


    return (

        <Box component="footer" sx={{ flexGrow: 1, gap: 2, flex: 1, backgroundImage: `url(${footerImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', px: 6, py: 6, justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', flex: 1, px: 2}}>
                <Typography sx={{...h4, mb: 1}}>
                    Coffee Lanne
                </Typography>
                <Typography sx={{...h7, mb: 4}}>
                    Ethically Sourced, Delicious Coffee Roasted with Purpose by Blind Dog Coffee Roasters.
                    Enjoy Premium 100% Organic Dark Roast, Medium Roast, Light Roast, Low Acid Decaf,
                    & Half-Caff Coffee Bean Roasts Delivered Fresh To Your Doorstep!
                </Typography>
                <Typography sx={{...h6, fontFamily: 'Work Sans', mb: 1}}>
                    012-345-6789
                </Typography>
                <Typography sx={{...h6, fontFamily: 'Work Sans', mb: 4}}>
                    hello@coffelane.com
                </Typography>
                <Link to='/'>
                    <Box component='img' src={logo} alt='logo'
                         sx={{width: '144px', height: '35px', cursor: 'pointer'}}/>
                </Link>

                <Box sx={{display: 'flex', gap: 1, mb: 4}}>
                    <Box component='img' src={facebook} alt='facebook'
                         sx={{mt: 2, width: '24px', height: '24px', cursor: 'pointer'}}/>
                    <Box component='img' src={youTube} alt='youTube'
                         sx={{mt: 2, width: '24px', height: '24px', cursor: 'pointer'}}/>
                    <Box component='img' src={instagram} alt='instagram'
                         sx={{mt: 2, width: '24px', height: '24px', cursor: 'pointer'}}/>
                    <Box component='img' src={twitter} alt='twitter'
                         sx={{mt: 2, width: '24px', height: '24px', cursor: 'pointer'}}/>
                    <Box component='img' src={vimeo} alt='vimeo'
                         sx={{mt: 2, width: '24px', height: '24px', cursor: 'pointer'}}/>
                    <Box component='img' src={linkedin} alt='linkedin'
                         sx={{mt: 2, width: '24px', height: '24px', cursor: 'pointer'}}/>
                </Box>

                <Typography sx={{...h7}}>
                    © 2025 Coffee Lane
                </Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', flex: 1, px: 2}}>
                <Box component='img' src={triangle} alt='triangle' sx={{mb: 2, width: '24px', height: '24px'}}/>
                <Typography sx={{...h4, mb: 1}}>
                    Quick links
                </Typography>
                {[
                    {to: '/', label: 'Home'},
                    {to: '/coffee', label: 'Coffee'},
                    {to: '/accessories', label: 'Accessories'},
                    {to: '/shop', label: 'Shop'},
                    {to: '/ourStory', label: 'Our Story'},
                    {to: '/wholesale', label: 'Wholesale'},
                    {to: '/ourNewsletter', label: 'Subscribe to Our Newsletter'}
                ].map((link) => (
                    <Typography key={link.to + link.label} component={RouterNavLink} to={link.to} sx={navLinkStyles}>
                        {link.label}
                    </Typography>
                ))}
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', flex: 1, px: 2,}}>
                <Box component='img' src={triangle} alt='triangle' sx={{mb: 2, width: '24px', height: '24px'}}/>
                <Typography sx={{...h4, mb: 1}}>
                    Customer Support
                </Typography>
                {[
                    {to: '/trackOrder', label: 'Track Order'},
                    {to: '/redeemRewardPoints', label: 'Redeem Reward Points'},
                    {to: '/fAQs', label: 'FAQs'},
                    {to: '/refundPolicy', label: 'Refund Policy'},
                    {to: '/shippingPolicy', label: 'Shipping Policy'},
                    {to: '/termsofService', label: 'Terms of Service'},
                    {to: '/privateLabelCoffee', label: 'Private Label Coffee'}
                ].map((link) => (
                    <Typography key={link.to + link.label} component={RouterNavLink} to={link.to} sx={navLinkStyles}>
                        {link.label}
                    </Typography>
                ))}
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', flex: 1, px: 2}}>
                <Typography sx={{...h4, mb: 1}}>
                    Newsletter
                </Typography>
                <Typography sx={{...h6, mb: 2}}>
                    Sign up for exclusive offers, original stories, events and more.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', '&:hover .helper-text': {color: '#A63A3A'}, '&:focus-within .helper-text': {color: '#A63A3A'},}}>
                    <TextField fullWidth variant="outlined" value={value} placeholder="Email" onChange={onChange}
                               error={!!error} sx={{...inputStyles}}/>
                    <Button variant="contained" onClick={handleSubmit} sx={{...btnStyles, width: '149px', mt: 2}}>
                        Subscribe
                    </Button>

                    {error && (<FormHelperText sx={{...helperTextRed, mt: 2}}> {error} </FormHelperText> )}
                    {success && <Typography sx={{ color: "#16675C", fontWeight: 700, mt: 1 }}>Subscribed!</Typography>}
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '185px'}}>
                    <Box component='img' src={visa} alt='visa' sx={{width: '32px', height: '32px', mr: 2, cursor: 'pointer'}}/>
                    <Box component='img' src={mastercard} alt='mastercard' sx={{width: '32px', height: '32px', mr: 2, cursor: 'pointer'}}/>
                    <Box component='img' src={amazon} alt='amazon' sx={{width: '32px', height: '32px', mr: 2, cursor: 'pointer'}}/>
                    <Box component='img' src={googlePay} alt='googlePay' sx={{width: '32px', height: '32px', mr: 2, cursor: 'pointer'}}/>
                    <Box component='img' src={discover} alt='discover' sx={{width: '32px', height: '32px', mr: 2, cursor: 'pointer'}}/>
                    <Box component='img' src={jcb} alt='jcb' sx={{width: '32px', height: '32px', mr: 2, cursor: 'pointer'}}/>
                </Box>
            </Box>
        </Box>
    );
};