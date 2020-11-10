import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
});

const UserNotLogged = () => {
  const classes = useStyles();

  return (
    <>
      <CardMedia>
        <img
          className={classes.media}
          src="https://images.unsplash.com/photo-1588475950972-c872dd2e730e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80"
          alt=""
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Użytkownik nie zalogowany
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Ta sekcja przeznaczona jest dla zalogowanych użytkowników, zaloguj się aby uzyskać dostęp
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={RouterLink} to="/login">
          Zaloguj się
        </Button>
      </CardActions>
    </>
  );
};

export default UserNotLogged;
