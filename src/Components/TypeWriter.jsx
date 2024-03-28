import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const Typewriter = () => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const text = 'Jo ruthe bhi to, na jaa na kahi!! Mai tera tha kl, mai tera abhi💞!!'; // Text to be displayed with typing effect

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    },100); // Typing speed, adjust as needed

    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="10vh">
      <Typography variant="h5" style={{ fontFamily: 'Rubik Scrible', fontWeight: '400', textAlign: 'center'  }}>
        {displayText}
      </Typography>
    </Box>
  );
};

export default Typewriter;
