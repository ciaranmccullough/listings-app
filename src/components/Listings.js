import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, IconButton, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

const useStyles = makeStyles({
  listings: {
    textAlign: 'center',
    padding: '20px',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  list: {
    padding: '0',
  },
  heading: {
    color: 'white',
    marginBottom: '20px',
  },
  name: {
    margin: '0',
    padding: '10px',
  },
});

export default function Listings(props) {
  const classes = useStyles();
  let currentDate = moment().format('MMMM Do, h:mm a');
  const renderListings = (key) => {
    const band = props.bands[key];
    if (!band) return null;
    const isAvailable = band && band.status === 'available';
    if (!isAvailable) {
      return (
        <Typography variant='h6' gutterBottom>
          Sorry {band ? band.name : 'band'} is not available{' '}
        </Typography>
      );
    }
    return (
      <Paper elevation={3} className={classes.root} key={key}>
        <span className={classes.span}>
          <Typography className={classes.name} variant='h6' gutterBottom>
            {band.name}-{currentDate}
          </Typography>
        </span>
        <span>
          <IconButton
            variant='contained'
            color='secondary'
            type='button'
            onClick={() => props.removeFromListing(key)}
          >
            <DeleteIcon className={classes.rightIcon} />
          </IconButton>
        </span>
      </Paper>
    );
  };

  const listingsIds = Object.keys(props.listing);
  // const band = props.bands[key];
  // const isAvailable = band && band.status === 'available';
  return (
    <div className={classes.listings}>
      <Typography className={classes.heading} variant='h2' gutterBottom>
        Listings
      </Typography>
      <ul className={classes.list}>{listingsIds.map(renderListings)}</ul>
    </div>
  );
}

Listings.propTypes = {
  bands: PropTypes.object,
  listing: PropTypes.object,
  deleteOrder: PropTypes.func,
};
