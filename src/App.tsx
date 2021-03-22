import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import process from 'process';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppHeader } from './layout/AppHeader';
import theme from './layout/theme';
import { MainPage } from './components/MainPage';
import LoginPage from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import UserPage from './components/UserPage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    offset: theme.mixins.toolbar,
  })
);

function App() {
  const classes = useStyles();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      window.onbeforeunload = () => {
        return true;
      };
    }
  }, []);

  return (
    <>
      <Router>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <AppHeader />
          <div className={classes.offset} />
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/registration">
              <RegistrationPage />
            </Route>
            <Route exact path="/profile">
              <UserPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
