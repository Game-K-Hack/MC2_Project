import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';

export default function Podium({ list }) {
  const props1 = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(40px)' }, delay: 200 });
  const props2 = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(40px)' }, delay: 400 });
  const props3 = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(40px)' }, delay: 600 });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
      <animated.div style={props2}>
        <Box sx={{ height: '50%', width: '33%', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 10px 20px rgba(0,0,0,0.1)', padding: '20px' }}>
          <img src={list[1].url} style={{ width: '100%', objectFit: 'cover', borderRadius: '10px' }} alt="Deuxième place" />
          <Typography variant="h5">2</Typography>
        </Box>
      </animated.div>
      <animated.div style={props1}>
        <Box sx={{ height: '70%', width: '33%', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 10px 20px rgba(0,0,0,0.1)', padding: '30px' }}>
          <img src={list[0].url} style={{ width: '100%', objectFit: 'cover', borderRadius: '10px' }} alt="Première place" />
          <Typography variant="h4">1</Typography>
        </Box>
      </animated.div>
      <animated.div style={props3}>
        <Box sx={{ height: '30%', width: '33%', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 10px 20px rgba(0,0,0,0.1)', padding: '10px' }}>
          <img src={list[2].url} style={{ width: '100%', objectFit: 'cover', borderRadius: '10px' }} alt="Troisième place" />
          <Typography variant="h6">3</Typography>
        </Box>
      </animated.div>
    </Box>
  );
}