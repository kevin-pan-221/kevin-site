import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" component="p">
          Hi, I&#39;m Kevin! I&#39;m a freshman studying Computer Science and Economics at Brown University.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;