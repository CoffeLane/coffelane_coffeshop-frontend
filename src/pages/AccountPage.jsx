import { Box, Typography } from '@mui/material';

function AccountPage() {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Typography variant="h4" sx={{ color: '#333', fontWeight: 600 }}>
        Account Page
      </Typography>
    </Box>
  );
}

export default AccountPage;
