import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, Card, Popover } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UserLogged from './UserLogged';
import UserNotLogged from './UserNotLogged';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
  })
);

const UserPopover = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const authenticated = useSelector((state: any) => state.user.authenticated);
  const userName = useSelector((state: any) => state.user.name);

  const user = userName ? userName : 'Użytkownik';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user-popover' : undefined;

  return (
    <div>
      <Button startIcon={<AccountCircleIcon />} color="inherit" variant="outlined" onClick={handleClick}>
        {user}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Card className={classes.root}>{authenticated ? <UserLogged /> : <UserNotLogged />}</Card>
      </Popover>
    </div>
  );
};

export default UserPopover;
