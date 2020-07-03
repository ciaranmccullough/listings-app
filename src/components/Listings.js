import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  listings: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default function Listings(props) {
  const classes = useStyles();
  return (
    <div className={classes.listings}>
      <h2>Listings!!!</h2>
      {/* <ul>{listingsIds.map(this.renderListings)}</ul> */}
    </div>
  );
}
// renderListings = (key) => {
//   const listingsIds = Object.keys(this.props.listings);
//   const total = listingsIds.reduce((prevTotal, key) => {
//     const band = this.props.bands[key];
//     const count = this.props.listings[key];
//     const isAvailable = band && band.status === "available";
//   if (!isAvailable) {
//     return (
//       <li key={key}>
//         Sorry {band ? band.name : 'band'} is no longer available
//       </li>
//     )
//   };

// const listingsIds = Object.keys(this.props.listings);
