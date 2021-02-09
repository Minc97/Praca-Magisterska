import React, { useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  confidence: number;
  manyFaces: boolean;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export const FaceDetectProcess: React.FC<Props> = ({ confidence, manyFaces }) => {
  const classes = useStyles();
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
