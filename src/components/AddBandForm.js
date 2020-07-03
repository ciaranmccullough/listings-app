import React from 'react';
import { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  FormControl,
  Input,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles({
  bandForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    marginBottom: '10px',
  },
  status: {
    marginBottom: '10px',
  },
  button: {
    marginBottom: '10px',
  },
});

export default function AddBandForm(props) {
  const nameRef = useRef();
  const statusRef = useRef();
  const descRef = useRef();
  const imageRef = useRef();
  const classes = useStyles(props);

  const createBand = (event) => {
    // 1.  stop the form from submitting
    event.preventDefault();
    const band = {
      name: nameRef.current.value,
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    props.addBand(band);
    // refresh the form
    event.currentTarget.reset();
  };

  return (
    <form className={classes.bandForm} onSubmit={createBand}>
      <FormControl>
        <Input name='name' inputRef={nameRef} type='text' placeholder='Name' />
      </FormControl>
      <FormControl className={classes.status}>
        <InputLabel id='demo-simple-select-label'>Status</InputLabel>
        <Select
          name='status'
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          inputRef={statusRef}
        >
          <MenuItem value='available'>Ready!</MenuItem>
          <MenuItem value='unavailable'>Sold Out!</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField name='desc' inputRef={descRef} placeholder='Desc' />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Input
          name='image'
          inputRef={imageRef}
          type='text'
          placeholder='Image'
        />
      </FormControl>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        type='submit'
      >
        Add Band
      </Button>
    </form>
  );
}
