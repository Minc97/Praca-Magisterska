import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Link, Toolbar, Typography, Button } from '@material-ui/core';
import { logoutUser } from '../redux/actions';
import UserPopover from '../components/UserPopover';

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
        <UserPopover />
      </Toolbar>
    </AppBar>
  );
};
