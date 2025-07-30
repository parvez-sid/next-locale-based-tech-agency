'use client'

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper
} from '@mui/material';
import Link from 'next/link';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff' }}>
      {/* Header Gradient */}
      <Box sx={{ height: 180, background: 'linear-gradient(to bottom, #A9C9FF, #6583F2, #292F91)', mb: 4 }} />

      {/* Login Form */}
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h6" align="center" fontWeight="bold" gutterBottom>
            Sign In
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              name="email"
              fullWidth
              margin="normal"
              value={form.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              value={form.password}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: '#008CDB',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#007AC2' },
              }}
            >
              Sign In
            </Button>
          </Box>

          <Box mt={3} textAlign="center">
            <Typography variant="body2">
              Don't have an account yet?{' '}
              <Link href="/register" underline="hover">
                Create Account
              </Link>
            </Typography>
            <Typography variant="body2" mt={1}>
              <Link href="/forgot-password" underline="hover">
                Forgot your password?
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;