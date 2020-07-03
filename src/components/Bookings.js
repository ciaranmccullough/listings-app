import React from 'react';
import AddBandForm from './AddBandForm';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  bookings: {
    textAlign: 'center',
    padding: '20px',
  },
});

export default function Bookings(props) {
  const classes = useStyles();
  return (
    <div className={classes.bookings}>
      <h2>Bookings</h2>
      <AddBandForm addBand={props.addBand} />
      <Button
        variant='contained'
        color='primary'
        onClick={props.loadSampleBands}
      >
        Load Sample Bands
      </Button>
    </div>
  );
}
