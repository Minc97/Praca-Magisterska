import React from 'react';
import { Container } from '@material-ui/core';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

interface Props {
  authenticated: boolean;
}

const LoginPage = ({ authenticated }: Props) => {
  return (
    <Container maxWidth="lg">
      <LoginForm />
      {authenticated ? <Redirect to="/secret-page" /> : null}
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return {
    authenticated: state.user.authenticated,
  };
};

export default connect(mapStateToProps)(LoginPage);
