import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Header = () => {

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
        }}

      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', color: 'black' }}>
          <div
            sx={{
              marginRight: (theme) => theme.spacing(2),
            }}
          >
            <img src="logo.png" alt="Logo" />
          </div>
          <Box sx={{ display: 'flex', gap: '30px', '& >*': { fontSize: '16px', fontWeight: 600 } }}>
            <Typography>HOME</Typography>
            <Typography> MINISTRIES</Typography>
            <Typography>GIVE ONLINE</Typography>
            <Typography>ABOUT US</Typography>
            <Typography>CONTACT US</Typography>
            <Typography>LANGUAGE</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />

    </div>
  );
};

export default Header;
