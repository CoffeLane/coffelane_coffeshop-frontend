import React, {useState} from 'react';
import logo from '../../assets/images/header/logo.svg';
import {Box, Button, Grid, } from '@mui/material';
import account from '../../assets/icons/account.svg';
import ShoppingCart from '../../assets/icons/shopping-cart.svg';
import Search from '../Search/index.jsx';
import TopLine from '../TopLine/index.jsx';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/index.jsx';
import LoginModal from "../LoginModal/index.jsx";



function Header() {
  const location = useLocation();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  }
  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);

  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {location.pathname === '/' && <TopLine />}
      <Grid container alignItems="center" justifyContent="space-between" sx={{ height: '108px', backgroundColor: '#EAD9C9', padding: '0 48px' }}>
        <Link to="/">
          <Box component="img" src={logo} alt="Coffee Lane logo" sx={{ width: '144px', height: '35px', cursor: 'pointer' }} />
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Search />
          <Button onClick={handleOpenLoginModal} disableRipple sx={{ minWidth: 0, padding: 0, backgroundColor: "transparent", border: "none", "&:hover, &:focus, &:active": { backgroundColor: "#EAD9C9",  },}}>
            <Box component="img" src={account} alt="User account" sx={{ marginLeft: '32px', width: '24px', height: '24px', cursor: 'pointer', }} />
          </Button>
          <Link to="/shoppingCart">
            <Box component="img" src={ShoppingCart} alt="Shopping cart" sx={{ marginLeft: '32px', width: '24px', height: '24px', cursor: 'pointer', }} />
          </Link>
        </Box>
      </Grid>
      <Navbar />
      <LoginModal
          open={isLoginModalOpen}
          onClose={handleCloseLoginModal}
      />
    </Box>

  );
}

export default Header;
