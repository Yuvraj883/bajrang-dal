import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    localStorage.setItem('SignedIn', false);

    alert("Signing out");
    navigate('/sign-in');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:'#db2777'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,
          fontWeight:'bold', fontFamily:'roboto', color:"#fbcfe8"
          }}>
            Pyaari Kanno {'<3'}
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
