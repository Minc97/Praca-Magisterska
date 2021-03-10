import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Container, Stepper, Step, StepLabel, Grid } from '@material-ui/core';
import SignUpFirstStep from './SignUpFirstStep';
import RegisterDone from './RegisterDone';
import FaceDetector from './FaceDetector';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    stepper: {
      background: 'none',
    },
  })
);

const getSteps = () => {
  return ['Dane podstawowe', 'Model osobowy', 'Podsumowanie'];
};

export const RegistrationPage: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <SignUpFirstStep nextStep={handleNext} />;
      case 1:
        return <FaceDetector nextStep={handleNext} />;
      case 2:
        return <RegisterDone />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const renderStepper = () => (
    <Stepper nonLinear className={classes.stepper} activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );

  const renderSteps = () => (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item>{getStepContent(activeStep)}</Grid>
    </Grid>
  );

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        {renderStepper()}
        {renderSteps()}
      </div>
    </Container>
  );
};
