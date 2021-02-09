import React from 'react';
import { compose } from 'recompose';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { registerUser } from '../redux/actions';
import { FaceDetector } from './FaceDetector';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
  },
  form: {
    marginTop: theme.spacing(3),
  },
}));

const SignUpSecondStep = (props: InjectedFormProps & any) => {
  const classes = useStyles();
  const { handleSubmit, registerUser } = props;

  const onSubmit = (formValues: any) => {};

  return (
    <Container component="main" maxWidth="xl">
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <FaceDetector />
        </form>
      </div>
    </Container>
  );
};

export default compose(connect(null, { registerUser }), reduxForm({ form: 'registerSecondStep' }))(SignUpSecondStep);
