import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Avatar, Button, FormControlLabel, Checkbox, Link, Grid, Typography, Container } from '@material-ui/core';
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
}));

//todo zaimplementować fukcję "Zapamiętaj mnie"

const LoginForm = (props: InjectedFormProps & any) => {
  const classes = useStyles();

  const { handleSubmit, loginAttempt } = props;

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
          </Grid>
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Zapamiętaj mnie" />
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

export default compose(connect(null, { loginAttempt }), reduxForm({ form: 'loginFirstStep' }))(LoginForm);
