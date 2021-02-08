import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { makeStyles } from '@material-ui/core/styles';
import * as tf from '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/facemesh';

interface Props {
  setManyFaces: React.Dispatch<React.SetStateAction<boolean>>;
  setFaceInViewConfidence: React.Dispatch<React.SetStateAction<number>>;
}

const useStyles = makeStyles(() => ({
  webcam: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 640,
    height: 480,
  },
}));

export const FaceDetector: React.FC<Props> = ({ setManyFaces, setFaceInViewConfidence }) => {
  const classes = useStyles();
  useEffect(() => {
    tf.getBackend();
    const detect = async (net: any) => {
      if (webcamRef?.current?.video?.readyState === 4) {
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        const face = await net.estimateFaces(video);

        if (face.length === 1) {
          setManyFaces(false);
          setFaceInViewConfidence(face[0].faceInViewConfidence);
        }
        if (face.length > 1) {
          setManyFaces(true);
        }
      }
    };
    const runFacemesh = async () => {
      const net = await facemesh.load({});
      setInterval(() => {
        detect(net);
      }, 100);
    };
    runFacemesh().then();
  }, [setFaceInViewConfidence, setManyFaces]);

  const webcamRef = useRef<any>(null);

  return (
    <>
      <Webcam ref={webcamRef} className={classes.webcam} mirrored />
    </>
  );
};
