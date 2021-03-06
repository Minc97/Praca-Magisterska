import React from "react";
import { ParticlesBackground } from "../layout/ParticlesBackground";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      height: "100%",
      width: "100%",
      filter: "drop-shadow(0 0 2rem)",
      borderRadius: "10px",
    },
    grid: {
      height: `90vh`,
    },
  })
);

export const MainPage = () => {
  const classes = useStyles();
  return (
    <>
      <ParticlesBackground />
      <Container component="div" maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={6}
          className={classes.grid}
        >
          <Grid item xs>
            <img
              src="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              alt="Twarz"
              loading="lazy"
              className={classes.image}
            />
          </Grid>
          <Grid item xs>
            <Paper>
              <Typography variant="h5" component="h1" align="center">
                Dwuczynnikowe: biometryczne i behawioralne, uwierzytelnianie
                klienta serwisu webowego poprzez weryfikację twarzy i jej mimiki
                z wykorzystaniem sztucznych sieci neuronowych.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
