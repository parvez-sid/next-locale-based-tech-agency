'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper
} from '@mui/material';

export default function ResetPassword() {
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
      <Box sx={{ height: 180, background: 'linear-gradient(to bottom, #A9C9FF, #6583F2, #292F91)', mb: 4 }} />

      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h6" align="center" fontWeight="bold" gutterBottom>
            Reset Password
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
              Get Instructions
            </Button>
          </Box>

          <Box mt={3} textAlign="center">
            <Typography variant="body2">
              Don&apos;t have an account?{' '}
              <Link href="/register" underline="hover">
                Create Account
              </Link>
            </Typography>
            <Typography variant="body2" mt={1}>
              <Link href="/login" underline="hover">
                Remember your password?{' '}
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
