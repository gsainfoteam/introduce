import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        {'이 페이지는'} <Link href="https://material-ui.com/">Material UI</Link>
        {'를 이용해 만들어 졌습니다.'}
        <br />
        {'Copyright © '}GSA Infoteam {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
};

export default Footer;
