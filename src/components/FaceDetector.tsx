import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import { WithFaceDetection, WithFaceLandmarks } from 'face-api.js';
import Webcam from 'react-webcam';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { FaceDetectProcess } from './FaceDetectProcess';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { registerUserModel } from '../redux/actions';
import { InjectedFormProps, reduxForm } from 'redux-form';

type Props = {
  nextStep: () => void;
};

type ReduxProps = {
  registerUserModel: any
}

const useStyles = makeStyles(() => ({
  webcam: {
    width: 640,
    height: 360,
  },
  canvas: {
    position: 'absolute',
    width: 640,
    height: 360,
  },
}));

const FaceDetector: React.FC<InjectedFormProps & Props & ReduxProps> = ({ handleSubmit, nextStep, registerUserModel, submitting }) => {
  const [manyFaces, setManyFaces] = useState<boolean>(false);
  const classes = useStyles();

  const detectMemo = useCallback(() => {
    const detect = async () => {
      if (webcamRef?.current?.video?.readyState === 4) {
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        faceapi.matchDimensions(canvasRef.current, { width: videoWidth, height: videoHeight });
        const detections: Array<WithFaceLandmarks<WithFaceDetection<{}>>> = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks();

        if (detections.length !== 1) {
          setManyFaces(true);
        }

        if (detections.length === 1) {
          setManyFaces(false);
        }

        if (canvasRef.current) {
          canvasRef.current.getContext('2d').clearRect(0, 0, 640, 360);
          faceapi.draw.drawFaceLandmarks(canvasRef.current, detections);
        }
      }
    };
    detect().then();
  }, []);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = `${process.env.PUBLIC_URL}/weights`;
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      ]).then();
    };

    detectMemo();
    setInterval(() => detectMemo(), 100);
    loadModels().then();
  }, [detectMemo]);

  const webcamRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);

  const onSubmit = () => {
    const capture: string = webcamRef.current.getScreenshot();
    registerUserModel(capture);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Webcam screenshotFormat="image/jpeg" ref={webcamRef} className={classes.webcam} />
        </Grid>
        <canvas ref={canvasRef} className={classes.canvas} />
      </Grid>
      <Grid container direction="column" justify="flex-start" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <FaceDetectProcess manyFaces={manyFaces} />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" disabled={manyFaces && submitting} variant="contained" color="primary">
            Zapisz model
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default compose<InjectedFormProps & Props & ReduxProps, Props>(
  connect(null, { registerUserModel }),
  reduxForm({ form: 'registerSecondStep' })
)(FaceDetector);
