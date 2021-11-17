import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import TableContainer from '@mui/material/TableContainer';

const demoContent = [
  {id: '1', status: 'done', orderId: 34, order: 'pizzza, hot, white'},
  {id: '2', status: 'done', orderId: 'takeAw 12', order: 'salad, hot, white'},
  {id: '3', status: 'done', orderId: 123, order: 'cola, artichoke, blck'},
  {id: '4', status: 'done', orderId: 234, order: 'pizzza, hot, white'},
  {id: '5', status: 'done', orderId: 345, order: 'pizzza, hot, white'},
  {id: '6', status: 'done', orderId: 456, order: 'pizzza, kruasant, white, cat'},
];

const demoEventsAndRes = [
  {id: 'event 1'},
  {id: 'res 1'},
  {id: 'event 12'},
  {id: 'event 3'},
  {id: 'event 1'},
  {id: 'res 2'},
];

const Dashboard = () => {
  
  
  // - `/`
  // - statystyki dzisiejszych zamówień (zdalne i lokalne)
  // - listę rezerwacji i eventów zaplanowanych na dzisiaj
  
  return (
    <TableContainer component={Paper}>
      <Table className={styles.tab1}>
        <TableHead>
          <TableRow>
            <TableCell>OrderId</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.orderId}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Toolbar/>
      <Container className={styles.sep}>
        <Table className={styles.tab2}>
          <TableHead>
            <TableRow>
              <TableCell>Bookings/Events for today</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoEventsAndRes.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </TableContainer>
  );  
};

export default Dashboard;