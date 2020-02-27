import React from 'react';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}GSA Infoteam {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Footer;
