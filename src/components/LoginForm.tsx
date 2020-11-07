import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Avatar, Button, Link, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import RenderTextField from './utils/RenderTextField';
import { loginAttempt } from '../redux/actions';

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errText: {
    color: theme.palette.error.dark,
  },
}));

const LoginForm = (props: InjectedFormProps & { loginError: boolean; loginAttempt: any }) => {
  const classes = useStyles();

  const { handleSubmit, loginAttempt, loginError } = props;

  const onSubmit = (formValues: any) => {
    loginAttempt(formValues);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Logowanie
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <Field name="email" type="email" component={RenderTextField} label="Adres E-mail" />
            </Grid>
            <Grid item sm={12}>
              <Field name="password" component={RenderTextField} label="Hasło" type="password" />
            </Grid>
            {loginError ? (
              <Grid item xs={12}>
                <Typography variant="caption" className={classes.errText}>
                  Wprowadzono niepoprawne dane, spróbuj ponownie
                </Typography>
              </Grid>
            ) : null}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
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
  };
};

export default compose(
  connect(mapStateToProps, { loginAttempt }),
  reduxForm({ form: 'loginFirstStep' })
)(LoginForm as any);
