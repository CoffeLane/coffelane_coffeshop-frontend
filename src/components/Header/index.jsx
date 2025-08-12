import React from 'react';
import logo from '../../assets/images/Logo.svg';
import { Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import Account from '../../assets/icons/Account.svg';
import ShoppingCart from '../../assets/icons/Shopping Cart.svg';
import Search from '../Search/index.jsx';
import TopLine from '../TopLine/index.jsx';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/index.jsx';



function Header() {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {location.pathname === '/' && <TopLine />}
      <Grid container alignItems="center" justifyContent="space-between" sx={{ height: '108px', backgroundColor: '#EAD9C9', padding: '0 48px' }}>
        <Link to="/">
          <Box component="img" src={logo} alt="Coffee Lane logo" sx={{ width: '144px', height: '35px', cursor: 'pointer' }} />
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Search />
          <Link to="/account">
            <Box component="img" src={Account} alt="User account" sx={{ marginLeft: '32px', width: '24px', height: '24px', cursor: 'pointer', }} />
          </Link>
          <Link to="/cart">
            <Box component="img" src={ShoppingCart} alt="Shopping cart" sx={{ marginLeft: '32px', width: '24px', height: '24px', cursor: 'pointer', }} />
          </Link>
        </Box>
      </Grid>
      <Navbar />
    </Box>

  );
}

export default Header;
