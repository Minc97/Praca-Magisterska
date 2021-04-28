import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

type Props = {
  alt?: string;
  image?: string;
  emotion?: string;
};

const useStyles = makeStyles({
  root: {
    maxWidth: '43vw',
  },
  cardContent: {
    maxHeight: '3rem',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    padding: '1rem'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  }
});

export const ImageHistoryCard: React.FC<Props> = ({ alt, image, emotion }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia component="img" alt={alt} image={image} title="Contemplative Reptile" />
      <div className={classes.cardContent}>
        <div className={classes.info}>
          <Typography variant="body1" component="h2">
            {alt}
          </Typography>
          <Typography variant="body2" component="h3">
            Emocja: {emotion}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
