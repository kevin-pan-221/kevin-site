'use client'; // Mark this as a Client Component

import React from 'react';
import Image from 'next/image';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Box } from '@mui/material';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function About() {
  return (
    <Box
      sx={{
        backgroundColor: '#F0F0F0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            textAlign: 'left',
            gap: 4,
          }}
        >
          {/* Left Side: Grid */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h1"
              gutterBottom
            >
              About Me
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              gutterBottom
            >
              Hello! I&#39;m Kevin, a freshman at Brown studying computer science and economics. 
              I&#39;m passionate about machine learning - in particular in building LLMs. 
              I&#39;m also interested in progressing and doing research in AI alignment. 
              Outside of my academic interests, I&#39;m an avid chess and tennis player.
            </Typography>
          </Box>
          {/* Right Side: Image */}
          <Box sx={{ flex: 1 }}>
            <Image
              src={`${basePath}/images/kevin_profile_pic.jpeg`}
              alt="Profile Picture"
              width={300}
              height={300}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}