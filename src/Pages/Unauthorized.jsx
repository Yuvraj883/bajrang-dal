import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  // const history = useHistory();
  const navigate = useNavigate();

  const handleSignIn = ()=>{
    navigate('/sign-in'); 
  }

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" gutterBottom>
        Unauthorized Access
      </Typography>
      <Typography variant="body1" gutterBottom>
        You need to sign in to access this page.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleSignIn}>
        Sign In
      </Button>
    </Container>
  );
};

export default Unauthorized;
