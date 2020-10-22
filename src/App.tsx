import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppHeader } from "./layout/AppHeader";
import theme from "./layout/theme";
import { MainPage } from "./components/MainPage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    offset: theme.mixins.toolbar,
  })
);

function Login() {
  return <h2>Login</h2>;
}

function Registration() {
  return <h2>Registration</h2>;
}

function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <AppHeader />
          <div className={classes.offset} />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
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
