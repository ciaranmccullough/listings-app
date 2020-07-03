import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Listings from './Listings';
import Bookings from './Bookings';
import sampleBands from './sampleBands';
import Band from './Band';

const useStyles = makeStyles({
  gigsApp: {
    display: 'flex',
    justifyContent: 'space-evenly',
    border: '5px solid',
    margin: '10px',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'yellow',
    width: '33%',
    padding: '20px',
    alignItems: 'center',
  },
  listings: {
    width: '33%',
  },
  bookings: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'pink',
    width: '33%',
  },
  list: {
    padding: '20px',
  },
});

export default function App() {
  const initialState = { name: '', image: '', desc: '', status: '' };
  const [bands, setBands] = useState(initialState);
  const [listings, setListings] = useState();

  // const addBand = (band) => {

  //   bands[`band${Date.now()}`] = band;

  //   setBands({ ...bands, band });
  // };

  const addBand = (band) => {
    // const bands = { ...bands };
    bands[`band${Date.now()}`] = band;
    setBands((bands) => ({
      ...bands,
      band: bands,
    }));
  };

  // const loadSampleBands = () => {
  //   setBands({ bands: sampleBands });
  // };

  const loadSampleBands = () => {
    setBands({
      bands: sampleBands,
    });
  };

  const addToListings = (key) => {
    // const listings = [...listings];
    listings.band1 = listings.band1 + 1 || 1;
    setListings({ listings });
  };

  const classes = useStyles();
  return (
    <div className={classes.gigsApp}>
      <div className={classes.menu}>
        <Header tagline='Let the Music Play!' />
        <ul className={classes.list}>
          {Object.keys(bands).map((key) => (
            <Band
              key={key}
              index={key}
              details={bands[key]}
              addToListings={addToListings}
            />
          ))}
        </ul>
      </div>
      <div className={classes.listings}>
        <Listings bands={bands} listings={listings} />
      </div>
      <div className={classes.bookings}>
        <Bookings addBand={addBand} loadSampleBands={loadSampleBands} />
      </div>
    </div>
  );
}
