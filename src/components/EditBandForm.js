import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  TextField,
  FormControl,
  Input,
  Button,
  Select,
  MenuItem,
  Paper,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/CloudUpload';
import base from '../base';

const useStyles = makeStyles({
  bandEdit: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    margin: '20px 10px',
    padding: '20px',
  },
  formControl: {
    marginBottom: '10px',
  },
});

const EditBandForm = (props) => {
  const [values, setValues] = useState({ ...props.band });
  const classes = useStyles();

  const updateBand = (key, updatedBand) => {
    props.setBands((bands) => {
      const copy = { ...bands };
      copy[key] = updatedBand;
      return copy;
    });
  };

  const deleteBand = () => {
    props.setBands((bands) => {
      const copy = { ...bands };
      delete copy[props.index];
      return copy;
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues((prev) => {
      const copy = { ...prev };
      console.log('copy', copy);
      // Do we need price?
      copy[name] = name === 'price' ? parseFloat(value) : value;
      updateBand(props.index, copy);
      return copy;
    });
  };

  // useEffect(() => {
  //   const bands = props.bands;
  //   const ref = base.syncState(`${props.venueId}/bands`, {
  //     context: {
  //       setState: ({ bands: band }) => props.setBands({ ...band }),
  //       state: { bands },
  //     },
  //     state: 'bands',
  //   });

  //   return () => {
  //     base.removeBinding(ref);
  //   };
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   console.log('localStorage');
  //   localStorage.setItem(props.venueId, JSON.stringify(props.listing));
  // }, [props.listing, props.venueId]);

  return (
    <Paper elevation={3} className={classes.bandEdit}>
      <FormControl>
        <Input
          className={classes.formControl}
          name='name'
          onChange={handleChange}
          type='text'
          value={values.name}
        />
      </FormControl>
      <FormControl>
        <Select
          className={classes.formControl}
          name='status'
          onChange={handleChange}
          type='text'
          value={values.status}
        >
          <MenuItem value='available'>Ready!</MenuItem>
          <MenuItem value='unavailable'>Sold Out!</MenuItem>
        </Select>
      </FormControl>
      <TextField
        className={classes.formControl}
        name='desc'
        onChange={handleChange}
        value={values.desc}
      />
      <FormControl className={classes.formControl}>
        <input
          name='image'
          onChange={handleChange}
          type='text'
          value={values.image}
        />
      </FormControl>
      <Button
        className={classes.formControl}
        onClick={deleteBand}
        type='button'
        variant='contained'
        color='secondary'
        startIcon={<DeleteIcon />}
      >
        Remove Band
      </Button>
    </Paper>
  );
};

EditBandForm.propTypes = {
  band: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    isAvailable: PropTypes.bool,
    onClick: PropTypes.func,
  }).isRequired,
  index: PropTypes.string.isRequired,
  setBands: PropTypes.func.isRequired,
};

export default EditBandForm;
