import React from 'react';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';

const ErrorPage = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5} textAlign="center">
        <Typography variant="h1" color="error">404</Typography>
        <Typography variant="h5" color="textSecondary">Page Not Found</Typography>
        <Typography variant="body1" color="textSecondary">The page you are looking for does not exist.</Typography>
      </Box>
    </Container>
  );
};

export default ErrorPage;
