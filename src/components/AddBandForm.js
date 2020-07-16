import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  FormControl,
  Input,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles({
  bandForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    marginBottom: '10px',
  },
});

const AddBandForm = (props) => {
  const nameRef = useRef(null);
  const statusRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const classes = useStyles();

  const createBand = (event) => {
    event.preventDefault();
    const band = {
      name: nameRef.current.value,
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    event.currentTarget.reset();
    props.addBand(band);
  };
  return (
    <form className={classes.bandForm} onSubmit={createBand}>
      <FormControl className={classes.formControl}>
        <Input name='name' inputRef={nameRef} type='text' placeholder='Name' />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>Status</InputLabel>
        <Select name='status' inputRef={statusRef}>
          <MenuItem value='available'>Ready!</MenuItem>
          <MenuItem value='unavailable'>Sold Out!</MenuItem>
        </Select>
      </FormControl>
      <TextField name='desc' inputRef={descRef} placeholder='Desc' />
      <FormControl className={classes.formControl}>
        <Input
          name='image'
          inputRef={imageRef}
          type='text'
          placeholder='Image(url)'
        />
      </FormControl>
      <Button
        className={classes.formControl}
        variant='contained'
        color='primary'
        type='submit'
        startIcon={<SaveIcon />}
      >
        Add Band
      </Button>
    </form>
  );
};

export default AddBandForm;

AddBandForm.propTypes = {
  addBand: PropTypes.func,
};
