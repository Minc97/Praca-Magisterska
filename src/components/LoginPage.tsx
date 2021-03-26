import React from 'react';
import { Container } from '@material-ui/core';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../redux/reducers';

interface Props {
  authenticated: boolean;
}

const LoginPage = ({ authenticated }: Props) => {
  return (
    <Container maxWidth="lg">
      <LoginForm />
      {authenticated ? <Redirect to="/profile" /> : null}
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    authenticated: state.auth.auth,
  };
};

export default connect(mapStateToProps)(LoginPage);
