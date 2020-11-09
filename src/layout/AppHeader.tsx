import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Link, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { logoutUser } from '../redux/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    userIcon: {
      color: '#fff'
    }
  })
);

export const AppHeader = () => {
  const classes = useStyles();
  const authenticated = useSelector((state: any) => state.user.authenticated);
  const dispatch = useDispatch();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link component={RouterLink} to="/" color="inherit">
            Praca Magisterska
          </Link>
        </Typography>
        <Button color="secondary" variant="contained" component={RouterLink} to="/registration">
          Rejestracja
        </Button>
        {authenticated ? (
          <Button color="inherit" component={RouterLink} to="/" onClick={() => dispatch(logoutUser())}>
            Wyloguj się
          </Button>
        ) : (
          <Button color="inherit" component={RouterLink} to="/login">
            Zaloguj się
          </Button>
        )}
        <IconButton aria-label="user">
          <AccountCircleIcon className={classes.userIcon}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
