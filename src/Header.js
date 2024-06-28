import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h2" component="h1" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>
        Payment Provider Comparison
      </Typography>
      <Typography variant="h6" component="p" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>
        Crafted with care to help you choose the best payment provider
      </Typography>
    </Box>
  );
};

export default Header;