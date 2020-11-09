import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    userIcon: {
      color: '#fff',
    },
  })
);

const UserPopover = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const authenticated = useSelector((state: any) => state.user.authenticated);

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
        Użytkownik
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
        {authenticated ? <div>Zalogowane rzeczy</div> : <div className={classes.root}>Musisz być zalogowany aby zobaczyć zawartość [odstęp enter] zaloguj się </div>}
      </Popover>
    </div>
  );
};

export default UserPopover;
