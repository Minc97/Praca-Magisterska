import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

type Props = {
  alt?: string;
  image?: string;
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
});

export const ImageHistoryCard: React.FC<Props> = ({ alt, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia component="img" alt={alt} image={image} title="Contemplative Reptile" />
      <div className={classes.cardContent}>
        <Typography variant="body2" component="h2">
          {alt}
        </Typography>
      </div>
    </Card>
  );
};
