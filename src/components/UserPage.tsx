import React from 'react';
import { connect } from 'react-redux';
import UserLogged from './UserLogged';
import { Redirect } from 'react-router-dom';

interface Props {
  authenticated: boolean;
}

const UserPage = ({ authenticated }: Props) => {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return <UserLogged />;
};

const mapStateToProps = (state: any) => {
  return {
    authenticated: state.user.authenticated,
  };
};

export default connect(mapStateToProps)(UserPage);
