import React from 'react';
import Grid from '@material-ui/core/Grid';
import DoneTwoToneIcon from '@material-ui/icons/DoneTwoTone';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  done: {
    height: '50vh',
    display: 'grid',
    placeItems: 'center',
  },
  icon: {
    fontSize: 60,
  },
}));

const RegisterDone = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <div className={classes.done}>
        <Grid container spacing={2} alignContent="center" alignItems="center" justify="center">
          <Grid item>
            <DoneTwoToneIcon className={classes.icon} />
          </Grid>
          <Grid item xs>
            <Typography component="h1" variant="h4">
              Twoje konto zostało utworzone. Możesz się teraz zalogować.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default RegisterDone;
