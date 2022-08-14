import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="secondary.text" align="center">
      {'Copyright © '}
      <MuiLink color="primary" href="https://explodemarket.com/">
        Explode Market
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
