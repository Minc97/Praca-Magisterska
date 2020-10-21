import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Praca Magisterska
        </Typography>
        <Button color="secondary">Rejestracja</Button>
        <Button color="inherit">Logowanie</Button>
      </Toolbar>
    </AppBar>
  );
};
