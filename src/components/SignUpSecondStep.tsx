import React, { useState } from 'react';
import { compose } from 'recompose';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { registerUser } from '../redux/actions';
import { FaceDetector } from './FaceDetector';
import { Grid } from '@material-ui/core';
import {FaceDetectProcess} from "./FaceDetectProcess";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
  },
  form: {
    marginTop: theme.spacing(3),
  },
}));

const SignUpSecondStep = (props: InjectedFormProps & any) => {
  const [manyFaces, setManyFaces] = useState<boolean>(false);
  const [faceInViewConfidence, setFaceInViewConfidence] = useState<number>(0);

  const classes = useStyles();
  const { handleSubmit, registerUser } = props;

  const onSubmit = (formValues: any) => {};

  return (
    <Container component="main" maxWidth="xl">
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12}>
              <FaceDetector setFaceInViewConfidence={setFaceInViewConfidence} setManyFaces={setManyFaces} />
            </Grid>
              <Grid item xs={12}>
                <FaceDetectProcess faceInViewConfidence={faceInViewConfidence} manyFaces={manyFaces}/>
              </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default compose(connect(null, { registerUser }), reduxForm({ form: 'registerSecondStep' }))(SignUpSecondStep);
