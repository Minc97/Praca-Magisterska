import React from "react";
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

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppHeader />
        <div className={classes.offset} />
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
