import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Header from './Header';
import Listings from './Listings';
import Bookings from './Bookings';
import sampleBands from './sampleBands';
import Band from './Band';
import base from '../base';

const useStyles = makeStyles({
  gigsApp: {
    background:
      'url(https://images.unsplash.com/photo-1528645944521-c061770de25d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)',
    display: 'flex',
    justifyContent: 'space-evenly',
    border: '5px solid',
    margin: '10px',
    borderRadius: '10px',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    width: '33%',
    padding: '20px',
    alignItems: 'center',
  },
  listings: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 40px 20px 0',
    width: '33%',
  },
  bookings: {
    display: 'flex',
    justifyContent: 'center',
    width: '33%',
  },
  bandList: {
    padding: '0 20px',
  },
});

const App = (props) => {
  const [bands, setBands] = useState({});
  const { venueId } = props.match.params;
  const [listing, setListing] = useState(
    JSON.parse(localStorage.getItem(venueId)) || {}
  );
  const classes = useStyles();
  // const matches = useMediaQuery(
  //   json2mq({
  //     maxWidth: 600,
  //   })
  // );

  const addBand = (band) => {
    const myBands = { ...bands };
    myBands[`band${Date.now()}`] = band;
    setBands(myBands, band);
    base.post(`${venueId}/bands`, {
      data: { ...myBands },
    });
  };

  const addToListing = (key) => {
    setListing({
      ...listing,
      [key]: listing[key] + 1 || 1,
    });
  };

  const removeFromListing = (key) => {
    const listings = { ...listing };
    delete listings[key];
    setListing(listings);
  };

  const loadSampleBands = () => {
    setBands({ ...bands, ...sampleBands });
    base.post(`${venueId}/bands`, {
      data: { ...bands, ...sampleBands },
    });
  };

  useEffect(() => {
    const ref = base.syncState(`${venueId}/bands`, {
      context: {
        setState: ({ bands: band }) => setBands({ ...band }),
        state: { bands },
      },
      state: 'bands',
    });

    return () => {
      base.removeBinding(ref);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log('localStorage');
    localStorage.setItem(venueId, JSON.stringify(listing));
  }, [listing, venueId]);

  return (
    <div className={classes.gigsApp}>
      {/* {`(max-width:600px) matches: ${matches}`} */}
      <div className={classes.menu}>
        <Header />
        <ul className={classes.bandList}>
          {Object.entries(bands).map(([key, band]) => (
            <Band
              key={key}
              details={band}
              addToListing={() => addToListing(key)}
            />
          ))}
        </ul>
      </div>
      <Listings
        className={classes.listings}
        bands={bands}
        listing={listing}
        removeFromListing={removeFromListing}
      />
      <Bookings
        className={classes.bookings}
        addBand={addBand}
        loadSampleBands={loadSampleBands}
        bands={bands}
        venueId={venueId}
        setBands={setBands}
      />
    </div>
  );
};

export default App;

App.propTypes = {
  match: PropTypes.object,
};
