import React from 'react';
import PropTypes from 'prop-types';
import AddBandForm from './AddBandForm';
import EditBandForm from './EditBandForm';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, Paper } from '@material-ui/core/';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles({
  bookings: {
    textAlign: 'center',
    padding: '20px',
    color: 'white',
  },
  addBand: {
    padding: '20px',
  },
});

const Bookings = ({ bands, addBand, setBands, loadSampleBands }) => {
  const classes = useStyles();

  return (
    <div className={classes.bookings}>
      {/* <button>Log Out!</button> */}
      <Typography variant='h2' gutterBottom>
        Bookings
      </Typography>
      {Object.entries(bands).map(([key, band]) => {
        return (
          <EditBandForm
            {...{
              index: key,
              band,
              key,
              setBands,
            }}
          />
        );
      })}
      <Paper className={classes.addBand}>
        <AddBandForm addBand={addBand} />
        <Button
          variant='contained'
          color='default'
          startIcon={<CloudUploadIcon />}
          onClick={loadSampleBands}
        >
          Load Sample Bands
        </Button>
      </Paper>
    </div>
  );
};

Bookings.propTypes = {
  bands: PropTypes.object,
  addBand: PropTypes.func,
  updatedBand: PropTypes.func,
  loadSampleBands: PropTypes.func,
  deleteBand: PropTypes.func,
  venueId: PropTypes.string,
};

export default Bookings;
