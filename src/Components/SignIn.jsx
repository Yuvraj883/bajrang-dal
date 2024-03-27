import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignIn = () => {
  const navigate = useNavigate();
  // const [signedIn, setSignedIn] = useState(false);
  localStorage.setItem('signedIn', false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e) => {

    e.preventDefault();
    if (password === 'godYuvi883' && email === 'im.thegod883@gmail.com') {
      // Redirect to the main page
      // console.log('Signing in with:', email, password);
      localStorage.setItem('SignedIn', true);
      navigate('/gallery');
    } else {
      // Show error message
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar style={{ margin: '8px', backgroundColor: '#1976d2' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form style={{ width: '100%', marginTop: '8px' }} onSubmit={handleSignIn}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ margin: '24px 0 16px' }}
            color="primary"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {error && (
            <Typography variant="body2" color="error" style={{ marginTop: '16px' }}>
              {error}
            </Typography>
          )}
        </form>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Powered by '}
          <Link color="inherit" href="https://mui.com/">
            Material-UI
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignIn;
