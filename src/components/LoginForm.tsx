import React, { useRef } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Avatar, Button, Link, Grid, Typography, Container, CircularProgress } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import RenderTextField from './utils/RenderTextField';
import { loginAttempt } from '../redux/actions';
import Webcam from 'react-webcam';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  fields: {
    marginTop: theme.spacing(1),
  },
  errText: {
    color: theme.palette.error.dark,
  },
  loadingInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

const LoginForm = (props: InjectedFormProps & { loginError: boolean; loginAttempt: any; loadingForm: boolean }) => {
  const classes = useStyles();

  const { handleSubmit, loginAttempt, loginError, loadingForm } = props;
  const webcamRef = useRef<any>(null);

  const onSubmit = (formValues: any) => {
    const capture: string = webcamRef.current.getScreenshot();
    loginAttempt(formValues, capture);
  };

  const loadOrError = () => {
    if (loginError) {
      return (
        <Typography variant="caption" className={classes.errText}>
          Wprowadzono niepoprawne dane, spróbuj ponownie
        </Typography>
      );
    }
    if (loadingForm) {
      return (
        <div className={classes.loadingInfo}>
          <CircularProgress size={30} />
          <Typography variant="caption">Proszę czekać, weryfikujemy Twoje dane</Typography>
        </div>
      );
    }
    return null;
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" gutterBottom>
          Logowanie
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Webcam screenshotFormat="image/jpeg" ref={webcamRef} />
          <Grid container spacing={2} className={classes.fields}>
            <Grid item sm={12}>
              <Field
                disabled={loadingForm}
                name="email"
                type="email"
                component={RenderTextField}
                label="Adres E-mail"
              />
            </Grid>
            <Grid item sm={12}>
              <Field disabled={loadingForm} name="password" component={RenderTextField} label="Hasło" type="password" />
            </Grid>
            <Grid item xs={12}>
              {loadOrError()}
            </Grid>
          </Grid>
          <Button
            disabled={loadingForm}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Zaloguj się
          </Button>
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to="/registration" variant="body2">
                {'Nie masz konta? Zarejestruj się'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loginError: state.user.loginError,
    loadingForm: state.user.loadingForm,
  };
};

export default compose(
  connect(mapStateToProps, { loginAttempt }),
  reduxForm({ form: 'loginFirstStep' })
)(LoginForm as any);
