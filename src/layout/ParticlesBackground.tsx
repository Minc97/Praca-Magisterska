import React from "react";
import Particles from "react-particles-js";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

const useStyles = makeStyles(() =>
  createStyles({
    particles: {
      position: "fixed",
      zIndex: -1,
    },
  })
);

export const ParticlesBackground = () => {
  const classes = useStyles();
  return (
    <Particles
      className={classes.particles}
      height="100vh"
      width="100wh"
      params={{
        background: {
          color: {
            value: "#d4a964",
          },
          size: "cover",
          repeat: "no-repeat",
          opacity: 0,
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 150,
          },
          size: {
            value: 3,
          },
          color: {
            value: [theme.palette.primary.main, theme.palette.secondary.main],
          },
          links: {
            color: "random",
          },
        },
      }}
    />
  );
};
