import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const demoContent = [
  {id: '1', status: 'making', orderId: 34, order: 'pizzza, hot, white'},
  {id: '2', status: 'done', orderId: 'takeAw 12', order: 'salad, hot, white'},
  {id: '3', status: 'queue', orderId: 123, order: 'cola, artichoke, blck'},
  {id: '4', status: 'making', orderId: 234, order: 'pizzza, hot, white'},
  {id: '5', status: 'done', orderId: 345, order: 'pizzza, hot, white'},
  {id: '6', status: 'done', orderId: 456, order: 'pizzza, kruasant, white, cat'},
];

const Kitchen = () => {
  
  const renderActions = (status) => {  

    switch (status) {
      case 'queue':
        return (
          <Button>queue</Button>
        );
      case 'making':
        return (
          <Button>making</Button>
        );
      case 'done':
        return (
          <Button>done</Button>
        );
      default:
        return null;
    }
  };
  // - wyświetla listę zamówień w kolejności ich złożenia
  //     - lista musi zawierać: 
  //         - numer stolika (lub zamówienia zdalnego)
  //         - pełne informacje dot. zamówionych dań
  //     - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>OrderId</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Done</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.orderId}
              </TableCell>
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );  
};

export default Kitchen;