import React, { useEffect, useState } from 'react';
import { CardContent, Typography, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { api } from '../apis/api';
import { RootState } from '../redux/reducers';
import { HistoryTable } from './HistoryTable';

export type HistoryDTO = {
  distance?: number;
  id?: number;
  login_picture?: string;
  score?: number;
  similarity_metric?: string;
  timestamp?: Date;
  user_id?: number;
  verified?: boolean;
}

export type HistoryType = {
  history: Array<HistoryDTO>;
  register_model?: string;
};

const UserLogged = () => {
  const [data, setData] = useState<HistoryType | object>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const userName = useSelector((state: RootState) => state.user.name);
  const userEmail = useSelector((state: RootState) => state.user.email);
  const id = useSelector((state: RootState) => state.user?.id);

  useEffect(() => {
    (async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await api.get(`/${id}/history`);
        setData(response.data);
      } catch (e) {
        console.log(e);
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [id]);

  const displayHistory = () => {
    if (isLoading && isError) {
      return null;
    }
    if (data) {
      return <HistoryTable {...data as HistoryType} />;
    }
    return null;
  };

  return (
    <Container maxWidth="lg">
      <CardContent>
        <Typography variant="h5" component="h2">
          {userName}
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
          {userEmail}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="h3">
          Historia logowania
        </Typography>
        {displayHistory()}
      </CardContent>
    </Container>
  );
};

export default UserLogged;
