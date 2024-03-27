import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const UnauthorizedPage = () => {
  const history = useHistory();

  const handleSignIn = () => {
    history.push('/signin'); // Replace '/signin' with your sign-in route
  };

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

export default UnauthorizedPage;
