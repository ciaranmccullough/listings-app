import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useRef } from 'react';
import {
  AppBar,
  Typography,
  FormControl,
  Input,
  Button,
  Icon,
} from '@material-ui/core';
import { getRandomName } from '../helpers';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    padding: '20px',
  },
  venueSelector: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '20px',
  },
  typography: {
    marginBottom: '20px',
    margin: '0 auto',
  },
  input: {
    width: '400px',
    marginBottom: '20px',
    margin: '0 auto',
    textAlign: 'center',
  },
  button: {
    width: '200px',
    margin: '0 auto',
  },
});

export default function VenueMaker(props) {
  const myInput = useRef();
  const classes = useStyles();

  const goToVenue = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const venueName = myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    props.history.push(`/venue/${venueName}`);
  };

  return (
    <>
      <AppBar position='static'>
        <Typography variant='h1' className={classes.title}>
          Gigs App
        </Typography>
      </AppBar>
      <form className={classes.venueSelector}>
        <Typography className={classes.typography} variant='h3'>
          Please Enter A Venue
        </Typography>
        <FormControl>
          <Input
            className={classes.input}
            type='text'
            inputRef={myInput}
            required
            placeholder='Venue Name'
            defaultValue={getRandomName()}
          />
        </FormControl>
        <Button
          variant='contained'
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          type='submit'
          onClick={goToVenue}
        >
          Visit Venue
        </Button>
      </form>
    </>
  );
}
