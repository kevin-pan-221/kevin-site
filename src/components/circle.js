import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const links = [
  { title: 'Project 1', link: '/projects/project1' },
  { title: 'Project 2', link: '/projects/project2' },
  { title: 'Resume', link: '/resume' },
];

export default function CircleButton() {
  const [hover, setHover] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        marginTop: 8, // Add margin if needed for spacing
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Main Circular Button */}
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          backgroundColor: 'white',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
          },
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Click Me
        </Typography>
      </Box>

      {/* Connected Circles */}
      {hover &&
        links.map((item, index) => {
          const angle = (index / links.length) * 2 * Math.PI; // Distribute circles evenly
          const x = Math.cos(angle) * 150; // Distance from center
          const y = Math.sin(angle) * 150;

          return (
            <Box
              key={item.title}
              component="a"
              href={item.link}
              sx={{
                position: 'absolute',
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: 'translate(-50%, -50%)',
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#1E3A8A' }}>
                {item.title}
              </Typography>
            </Box>
          );
        })}
    </Box>
  );
}
