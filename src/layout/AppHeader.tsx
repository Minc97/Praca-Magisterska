import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
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
          <Link component={RouterLink} to="/" color="inherit">
            Praca Magisterska
          </Link>
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          component={RouterLink}
          to="/registration"
        >
          Rejestracja
        </Button>
        <Button color="inherit" component={RouterLink} to="/login">
          Logowanie
        </Button>
      </Toolbar>
    </AppBar>
  );
};
