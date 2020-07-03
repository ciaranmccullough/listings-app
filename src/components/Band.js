import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import {
  CardActionArea,
  CardContent,
  CardMedia,
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

export default function Band(props) {
  const classes = useStyles();
  const { name, image, desc, status } = props.details;
  const isAvailable = status === 'available';
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography
            gutterBottom
            className='band-name'
            variant='h3'
            component='h3'
          >
            {name}
          </Typography>
          <Typography variant='body-2' color='textSecondary' component='p'>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        type='submit'
        disabled={!isAvailable}
        onClick={() => props.addToListings(props.index)}
      >
        {isAvailable ? 'Add To Order' : 'Sold Out!'}
      </Button>
    </Card>
  );
}
