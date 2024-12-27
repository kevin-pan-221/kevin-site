'use client'; // Mark this as a Client Component

import React from 'react';
import Image from 'next/image';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Box } from '@mui/material';
import Link from 'next/link';

const projects = [
  {
    title: 'about me',
    description: 'interests contact info and stuff',
    image: '/images/project1.jpg',
    link: '/about me',
  },
  {
    title: 'projects',
    description: 'cool things ive worked on',
    image: '/images/project2.jpg',
    link: '/projects',
  },
  {
    title: 'random',
    description: 'anything else',
    image: '/images/project2.jpg',
    link: '/random',
  }
];

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: '#F0F0F0', // In between #F5F5F5 and #E0E0E0
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
            sx={{
              whiteSpace: 'pre-line',
            }}
          >
            hi i&#39;m kevin! freshman studying {"\n"}comp sci and econ at brown
          </Typography>

            <Grid container spacing={4} justifyContent="flex-start" sx={{ marginTop: 4 }}>
              {projects.map((project, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Link href={project.link} passHref style={{ textDecoration: 'none' }}>
                    <Card
                      sx={{
                        borderRadius: '32px',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        backgroundColor: 'background.paper',
                        height: '200px',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
                          {project.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ flex: '0 0 auto' }}>
            <Image
              src="/images/kevin_pfp_2.jpg"
              alt="Profile picture"
              width={300}
              height={300}
              style={{
                borderRadius: '16px', // Slightly rounded corners for the image itself
                objectFit: 'cover', // Ensure the image fills its container
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
