import React from "react";
import {
  CssBaseline,
  ThemeProvider,
  Container,
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
      height: "100%",
      maxWidth: "700px",
      width: "100%",
      filter: "drop-shadow(0 0 2rem)",
      borderRadius: "10px",
      marginTop: "4rem",
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
        <Container component="div" maxWidth="lg">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={6}
          >
            <Grid item xs>
              <img
                src="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                alt="Twarz"
                className={classes.image}
              />
            </Grid>
            <Grid item xs>
              <Typography variant="h5" component="h1" align="center">
                Dwuczynnikowe: biometryczne i behawioralne, uwierzytelnianie
                klienta serwisu webowego poprzez weryfikację twarzy i jej mimiki
                z wykorzystaniem sztucznych sieci neuronowych.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
