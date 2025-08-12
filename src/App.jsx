import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import LoginModal from './components/LoginModal';
import './App.css';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
        }}
      >
        <Typography variant="h3" sx={{ mb: 4, color: '#333', fontWeight: 600 }}>
          CoffeLane
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: '#666', textAlign: 'center' }}>
          Welcome to our coffee shop! Please log in or sign up to continue.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleOpenLoginModal}
          sx={{
            backgroundColor: '#8B4513',
            '&:hover': {
              backgroundColor: '#A0522D',
            },
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '16px',
            padding: '12px 32px',
          }}
        >
          Login / Sign Up
        </Button>
      </Box>

      <LoginModal
        open={isLoginModalOpen}
        onClose={handleCloseLoginModal}
      />
    </>
  );
}

export default App;
