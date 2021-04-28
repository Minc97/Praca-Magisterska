import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import DoneTwoToneIcon from '@material-ui/icons/DoneTwoTone';
import { translateEmotion } from './utils/translateEmotion';

const useStyles = makeStyles(() => ({
  done: {
    display: 'grid',
    placeItems: 'center',
  },
  icon: {
    paddingTop: '5px',
    fontSize: 40,
  },
  modelText: {
    textAlign: 'left',
  },
}));

const RegisterDone = () => {
  const classes = useStyles();
  const picture = useSelector((state: any) => state.userRegister?.faceModel);
  const error = useSelector((state: any) => state.userRegister?.error);
  const emotion = useSelector((state: any) => state.userRegister?.emotion);

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Wystąpił błąd</AlertTitle>
        Szczegóły: {error?.message}
      </Alert>
    );
  }

  if (picture && emotion) {
    return (
      <div className={classes.done}>
        <Typography component="h1" variant="h6">
          Zarejestrowany model:
        </Typography>
        <img alt="Utworzone zdjęcie do modelu" src={picture} />
        <Typography component="h3" variant="h6">
          Rozpoznana emocja: {translateEmotion(emotion)}
        </Typography>
        <Grid container spacing={2} direction="row" alignItems="center" justify="center">
          <Grid item>
            <DoneTwoToneIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <Typography component="h1" variant="h5">
              Twoje konto zostało utworzone. Możesz się teraz zalogować.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
  return null;
};

export default RegisterDone;
