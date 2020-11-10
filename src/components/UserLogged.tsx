import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
      </CardContent>
    </>
  );
};

export default UserLogged;
