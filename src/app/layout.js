'use client';

import '@fontsource/inter'; // Import Inter font
import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import './globals.css';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1E3A8A', // Dark Blue
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#333',
    },
  },
  palette: {
    primary: {
      main: '#1E3A8A', // Dark Blue
    },
    secondary: {
      main: '#87CEEB', // Cloud Blue
    },
    background: {
      default: '#FFFFFF', // White for overall background
      paper: '#F5F5F5', // Light grey for cards/paper elements
    },
    text: {
      primary: '#1E3A8A', // Dark Blue for main text
      secondary: '#555555', // Neutral dark grey for secondary text
    },
  },
});
function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link href={`${basePath}/`} passHref sx = {{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'white',
              '& a:visited': {
                color: 'white',
                textDecoration: 'none',
              },
            }}
          >
            <Typography variant="h6" sx={{ marginRight: 1.5, color: 'inherit', textDecoration: 'none' }}>
              Kevin Pan
            </Typography>
            <IconButton
              sx={{
                padding: 0,
                color: 'white', 
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'transparent', 
                },
              }}
              aria-label="Home"
              size="large"
            >
              <HomeIcon />
            </IconButton>
          </Box>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/kevin-pan221/"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="GitHub"
          href="https://github.com/kevin-pan-221"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="Instagram"
          href="https://www.instagram.com/kevinn.pan"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Apply global styles */}
          <Header /> {/* Display the header */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
