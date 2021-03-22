import React from 'react';
import { CardContent, Typography, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

const UserLogged = () => {
  const userName = useSelector((state: any) => state.user.name);
  const userEmail = useSelector((state: any) => state.user.email);

  return (
    <Container maxWidth="lg">
      <CardContent>
        <Typography variant="h6" component="h2">
          {userName}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="h2">
          {userEmail}
        </Typography>
      </CardContent>
    </Container>
  );
};

export default UserLogged;
