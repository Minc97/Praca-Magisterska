import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  media: {
    maxHeight: '200px',
    width: '100%',
  },
});

const UserLogged = () => {
  const classes = useStyles();
  const userName = useSelector((state: any) => state.user.name);
  const userEmail = useSelector((state: any) => state.user.email);

  return (
    <>
      <CardMedia>
        <img
          className={classes.media}
          src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80"
          alt=""
        />
      </CardMedia>
      <CardContent>
        <Typography variant="h6" component="h2">
          {userName}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="h2">
          {userEmail}
        </Typography>
        <Button color="secondary" variant="contained" component={RouterLink} to="/secret-page" size="small">
          Sekretne zasoby
        </Button>
      </CardContent>
    </>
  );
};

export default UserLogged;
