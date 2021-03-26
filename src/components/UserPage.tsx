import React from 'react';
import { connect } from 'react-redux';
import UserLogged from './UserLogged';
import { Redirect } from 'react-router-dom';
import { RootState } from '../redux/reducers';

interface Props {
  authenticated: boolean;
}

const UserPage = ({ authenticated }: Props) => {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return <UserLogged />;
};

const mapStateToProps = (state: RootState) => {
  return {
    authenticated: state.auth.auth,
  };
};

export default connect(mapStateToProps)(UserPage);
