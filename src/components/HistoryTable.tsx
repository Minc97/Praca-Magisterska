import React from 'react';
import { ImageHistoryCard } from './ImageHistoryCard';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { HistoryDTO, HistoryType } from './UserLogged';
import { translateEmotion } from './utils/translateEmotion';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  long: {
    maxWidth: '20vw',
    wordWrap: 'break-word',
  },
  imageFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem 0',
    '& > *': {
      margin: '0 .4rem',
    },
  },
});

type Props = {
  row?: HistoryDTO;
  registerModel?: string;
  registerEmotion?: string;
};

function Row({ row, registerModel, registerEmotion }: Props) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row?.id}
        </TableCell>
        <TableCell align="right">{row?.timestamp}</TableCell>
        <TableCell align="right">{row?.score}</TableCell>
        <TableCell align="right">{row?.verified_face === 'True' ? `Tak` : `Nie`}</TableCell>
        <TableCell align="right">{row?.verified_emotion === 'True' ? `Tak` : `Nie`}</TableCell>
        <TableCell align="right">{row?.authorized === 'True' ? `Tak` : `Nie`}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <div className={classes.imageFlex}>
                <ImageHistoryCard
                  image={row?.login_picture}
                  emotion={translateEmotion(row?.login_emotion)}
                  alt="Model logowania"
                />
                <ImageHistoryCard
                  image={registerModel}
                  emotion={translateEmotion(registerEmotion)}
                  alt="Model odniesienia"
                />
              </div>
              <Typography variant="body1" gutterBottom component="div">
                Szczegóły
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Odległość wektorów</TableCell>
                    <TableCell>Metryki podobieństwa</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.long}>{row?.distance?.replaceAll(';', '; ')}</TableCell>
                    <TableCell className={classes.long}>{row?.similarity_metric?.replaceAll(';', '; ')}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export const HistoryTable: React.FC<HistoryType> = ({ history, register_model, register_emotion }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" size="small">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Wynik</TableCell>
            <TableCell align="right">Uwierzytelniono twarz</TableCell>
            <TableCell align="right">Uwierzytelniono emocje</TableCell>
            <TableCell align="right">Przyznano dostęp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history?.map((row) => (
            <Row key={row.id} registerModel={register_model} registerEmotion={register_emotion} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
