import React from "react";
import {
  CssBaseline,
  ThemeProvider,
  Box,
  Typography,
  Grid,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppHeader } from "./layout/AppHeader";
import theme from "./layout/theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    offset: theme.mixins.toolbar,
    image: {
      height: "500px",
      width: "800px",
      minHeight: "200px",
      minWidth: "500px",
      background: "url(https://source.unsplash.com/featured/?tech)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      filter: "drop-shadow(0 0 1rem)",
      borderRadius: "10px",
    },
    title: {
      maxWidth: 1000,
    },
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
        <Box component="div" m={5}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={6}
          >
            <Grid item xs>
              <div className={classes.image} />
            </Grid>
            <Grid item xs>
              <Typography
                variant="h4"
                component="h1"
                align="center"
                className={classes.title}
              >
                Dwuczynnikowe: biometryczne i behawioralne, uwierzytelnianie
                klienta serwisu webowego poprzez weryfikację twarzy i jej mimiki
                z wykorzystaniem sztucznych sieci neuronowych.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
