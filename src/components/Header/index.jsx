import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/header/logo.svg';
import {Box, Button, Grid,} from '@mui/material';
import account from '../../assets/icons/account.svg';
import ShoppingCart from '../../assets/icons/shopping-cart.svg';
import Search from '../Search/index.jsx';
import TopLine from '../TopLine/index.jsx';
import {Link, useLocation} from 'react-router-dom';
import Navbar from '../Navbar/index.jsx';
import LoginModal from "../LoginModal/index.jsx";
import CartModal from "../CartModal/index.jsx";


function Header() {
    const location = useLocation();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    const handleOpenLoginModal = () => {
        setIsLoginModalOpen(true);
    }
    const handleCloseLoginModal = () => {
        setIsLoginModalOpen(false);

    };

    const handleOpenCartModal = () => {
        setIsCartModalOpen(true);
    }
    useEffect(() => {
    console.log('Cart modal state changed:', isCartModalOpen);
  }, [isCartModalOpen]);

    const handleCloseCartModal = () => {
        setIsCartModalOpen(false);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            {location.pathname === '/' && <TopLine/>}
            <Grid container alignItems="center" justifyContent="space-between"
                  sx={{height: '108px', backgroundColor: '#EAD9C9', padding: '0 48px'}}>
                <Link to="/">
                    <Box component="img" src={logo} alt="Coffee Lane logo"
                         sx={{width: '144px', height: '35px', cursor: 'pointer'}}/>
                </Link>

                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Search/>
                    <Button onClick={handleOpenLoginModal} disableRipple sx={{
                        minWidth: 0,
                        padding: 0,
                        backgroundColor: "transparent",
                        border: "none",
                        "&:hover, &:focus, &:active": {backgroundColor: "#EAD9C9",},
                    }}>
                        <Box component="img" src={account} alt="User account"
                             sx={{marginLeft: '32px', width: '24px', height: '24px', cursor: 'pointer',}}/>
                    </Button>
                    <Button onClick={handleOpenCartModal}>
                        <Box component="img" src={ShoppingCart} alt="Shopping cart"
                             sx={{marginLeft: '32px', width: '24px', height: '24px', cursor: 'pointer',}}/>
                    </Button>
                </Box>
            </Grid>
            <Navbar/>
            <LoginModal
                open={isLoginModalOpen}
                onClose={handleCloseLoginModal}
            />
            <CartModal
                open={isCartModalOpen}
                onClose={handleCloseCartModal}
            />
        </Box>

    );
}

export default Header;
