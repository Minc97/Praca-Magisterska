import React from 'react';
import { compose } from 'recompose';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RenderTextField from './utils/RenderTextField';
import { connect } from 'react-redux';
import { registerUser } from '../redux/actions';

type Props = {
  nextStep: () => void;
  registerUser?: any;
};

const useStyles = makeStyles((theme) => ({
  paper: {
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validate = (values: any) => {
  const errors: any = {};
  const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Pole wymagane';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Nieprawidłowy adres e-mail';
  }
  if (values.passwordConfirmation !== values.password) {
    errors.passwordConfirmation = 'Wprowadzone hasła się różnią'
  }
  return errors;
};

const SignUpFirstStep: React.FC<InjectedFormProps & Props> = (props) => {
  const classes = useStyles();
  const { handleSubmit, registerUser, nextStep, submitting } = props;

  const onSubmit = (formValues: any) => {
    registerUser(formValues);
    nextStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Zarejestruj się
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field name="name" component={RenderTextField} label="Nazwa" />
            </Grid>
            <Grid item xs={12}>
              <Field name="email" label="E-mail" type="email" component={RenderTextField} />
            </Grid>
            <Grid item xs={12}>
              <Field name="password" label="Hasło" type="password" component={RenderTextField} />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="passwordConfirmation"
                label="Potwierdzenie hasła"
                type="password"
                component={RenderTextField}
              />
            </Grid>
          </Grid>
          <Button disabled={submitting} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Dalej
          </Button>
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to="/login" variant="body2">
                Masz już konto? Zaloguj się
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default compose<InjectedFormProps & Props, Props>(
  connect(null, { registerUser }),
  reduxForm({ form: 'registerFirstStep', validate })
)(SignUpFirstStep);
