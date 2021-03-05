import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import Webcam from 'react-webcam';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as tf from '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/facemesh';
import { Grid } from '@material-ui/core';
import { FaceDetectProcess } from './FaceDetectProcess';

const useStyles = makeStyles((theme) => ({
  webcam: {
    width: 1024,
    height: 576,
  },
  canvas: {
    position: 'absolute',
    width: 1024,
    height: 576,
  },
}));

export const FaceDetector: React.FC = () => {
  const [manyFaces, setManyFaces] = useState<boolean>(false);
  const [faceInViewConfidence, setFaceInViewConfidence] = useState<number>(0);
  const classes = useStyles();

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = `${process.env.PUBLIC_URL}/weights`;

      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]).then();

      const detect = async () => {
        if (webcamRef?.current?.video?.readyState === 4) {
          const video = webcamRef.current.video;
          const videoWidth = webcamRef.current.video.videoWidth;
          const videoHeight = webcamRef.current.video.videoHeight;

          webcamRef.current.video.width = videoWidth;
          webcamRef.current.video.height = videoHeight;

          faceapi.matchDimensions(canvasRef.current, { width: videoWidth, height: videoHeight} );
          const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();
          canvasRef.current.getContext('2d').clearRect(0, 0, 1024, 576);
          faceapi.draw.drawDetections(canvasRef.current, detections);
          faceapi.draw.drawFaceLandmarks(canvasRef.current, detections);
          faceapi.draw.drawFaceExpressions(canvasRef.current, detections);
        }
      };
      setInterval(() => detect(), 100);
    };
    loadModels().then();
  }, []);

  // useEffect(() => {
  //   tf.getBackend();
  //   const detect = async (net: any) => {
  //     if (webcamRef?.current?.video?.readyState === 4) {
  //       const video = webcamRef.current.video;
  //       const videoWidth = webcamRef.current.video.videoWidth;
  //       const videoHeight = webcamRef.current.video.videoHeight;
  //
  //       webcamRef.current.video.width = videoWidth;
  //       webcamRef.current.video.height = videoHeight;
  //
  //       const face = await net.estimateFaces(video);
  //
  //       if (face.length === 1) {
  //         setManyFaces(false);
  //         setFaceInViewConfidence(face[0].faceInViewConfidence);
  //       }
  //       if (face.length > 1) {
  //         setManyFaces(true);
  //       }
  //     }
  //   };
  //   const runFacemesh = async () => {
  //     const net = await facemesh.load({});
  //     setInterval(() => {
  //       detect(net);
  //     }, 300);
  //   };
  //   runFacemesh().then();
  // }, [setFaceInViewConfidence, setManyFaces]);

  const webcamRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);

  // const capture = React.useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   console.log(imageSrc);
  // }, [webcamRef]);
  //
  // const confidence = useMemo(() => Math.round(faceInViewConfidence * 100), [faceInViewConfidence]);

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Webcam screenshotFormat="image/jpeg" ref={webcamRef} className={classes.webcam} />
        </Grid>
        <canvas ref={canvasRef} className={classes.canvas} />
      </Grid>
      {/*<Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>*/}
      {/*  <Grid item xs={12}>*/}
      {/*    <FaceDetectProcess confidence={confidence} manyFaces={manyFaces} />*/}
      {/*  </Grid>*/}
      {/*  <Grid item xs={12}>*/}
      {/*    <Button disabled={confidence < 100} variant="contained" color="primary" onClick={capture}>*/}
      {/*      Zapisz model*/}
      {/*    </Button>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </>
  );
};