import React from 'react';
import Typography from '@material-ui/core/Typography';

const Header = (props) => (
  <header className='top'>
    <Typography color='secondary' variant='h2' gutterBottom>
      Listings App
      <span role='img' aria-label='guitar'>
        🎸
      </span>
    </Typography>
  </header>
);

export default Header;
