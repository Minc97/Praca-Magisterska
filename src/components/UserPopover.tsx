import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const UserPopover = () => {
  const userName = useSelector((state: any) => state.user.name);
  const user = userName ? userName : 'Użytkownik';

  return (
    <Button component={Link} to="/profile" startIcon={<AccountCircleIcon />} color="inherit" variant="outlined">
      {user}
    </Button>
  );
};

export default UserPopover;
