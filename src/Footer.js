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
        <Link href="https://material.io/resources/icons">Material Icons</Link>
        {' are available under '}
        <Link href="https://www.apache.org/licenses/LICENSE-2.0.html">
          Apache license version 2.0
        </Link>
        <br />
        {'Copyright © '}GSA Infoteam {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
};

export default Footer;
