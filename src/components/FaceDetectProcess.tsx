import React from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {
  manyFaces: boolean;
}

export const FaceDetectProcess: React.FC<Props> = ({ manyFaces }) => {
  if (manyFaces) {
    return <Typography variant="h6">Wykryto wiele twarzy!</Typography>;
  }
  return null
};
