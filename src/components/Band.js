import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core/';

const useStyles = makeStyles({
  card: {
    margin: '20px',
  },
  media: {
    height: 140,
  },
});

const Band = (props) => {
  const classes = useStyles();
  let { name, image, desc, status } = props.details;
  const isAvailable = status === 'available';
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={name}
          height='250'
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='small'
          variant='contained'
          color='primary'
          type='submit'
          disabled={!isAvailable}
          onClick={props.addToListing}
        >
          {isAvailable ? 'Add To Listing' : 'Sold Out'}
        </Button>
      </CardActions>
    </Card>
  );
};

Band.propTypes = {
  addToListing: PropTypes.func,
  details: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default Band;
