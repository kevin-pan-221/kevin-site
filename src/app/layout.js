'use client';

import '@fontsource/inter'; // Import Inter font
import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

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
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Kevin Pan
        </Typography>
        <IconButton
          color="inherit"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="GitHub"
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="Instagram"
          href="https://www.instagram.com/your-profile"
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
