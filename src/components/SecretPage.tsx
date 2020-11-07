import React from 'react';
import { connect } from 'react-redux';

interface Props {
  authenticated: boolean;
}

const SecretPage = ({ authenticated }: Props) => {
  if (!authenticated) {
    return <div>Musisz być zalogowany aby zobaczyć tę stronę</div>;
  }
  return <div>Sekretna strona przy zalogowanym użytkowniku</div>;
};

const mapStateToProps = (state: any) => {
  return {
    authenticated: state.user.authenticated,
  };
};

export default connect(mapStateToProps)(SecretPage);
