import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Footer = () => {
  return (
    <Box pt={4}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}GSA Infoteam {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;
