import React from 'react';
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

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}
type Props = {
  row?: HistoryDTO,
  registerModel?: string
}

function Row({row, registerModel}: Props) {
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
        <TableCell align="right">{row?.verified ? `Tak`: `Nie`} </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography variant="body1" gutterBottom component="div">
                Szczegóły
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/*{row.history.map((historyRow: any) => (*/}
                  {/*  <TableRow key={historyRow.date}>*/}
                  {/*    <TableCell component="th" scope="row">*/}
                  {/*      {historyRow.date}*/}
                  {/*    </TableCell>*/}
                  {/*    <TableCell>{historyRow.customerId}</TableCell>*/}
                  {/*    <TableCell align="right">{historyRow.amount}</TableCell>*/}
                  {/*    <TableCell align="right">*/}
                  {/*      {Math.round(historyRow.amount * row.price * 100) / 100}*/}
                  {/*    </TableCell>*/}
                  {/*  </TableRow>*/}
                  {/*))}*/}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export const HistoryTable: React.FC<HistoryType> = ({history, register_model}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" size="small">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Wynik</TableCell>
            <TableCell align="right">Uwierzytelniono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history?.map((row) => (
            <Row key={row.id} registerModel={register_model} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
