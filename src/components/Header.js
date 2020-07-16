import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  bands: {
    color: 'white',
    textAlign: 'center',
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <header>
      <Typography color='secondary' variant='h2' gutterBottom>
        Listings App
        <span role='img' aria-label='guitar'>
          🎸
        </span>
      </Typography>
      <Typography className={classes.bands} variant='h2' gutterBottom>
        Bands
      </Typography>
    </header>
  );
};

export default Header;
