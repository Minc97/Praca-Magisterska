import React, { useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  faceInViewConfidence: number;
  manyFaces: boolean;
}

const useStyles = makeStyles({
  root: {
    width: 640,
  },
});

export const FaceDetectProcess: React.FC<Props> = ({ faceInViewConfidence, manyFaces }) => {
  const classes = useStyles();
  const confidence = useMemo(() => Math.round(faceInViewConfidence * 100), [faceInViewConfidence]);
  if (manyFaces) {
    return <Typography variant="h6">Wykryto wiele twarzy!</Typography>;
  }
  return (
    <div className={classes.root}>
      <Typography variant="h6">Poziom wykrycia: {confidence}%</Typography>
      <LinearProgress variant="determinate" value={confidence} />
    </div>
  );
};
