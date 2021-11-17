import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'paid', order: 345},
  {id: '6', status: 'paid', order: 456},
];

const Waiter = () => {

  const navigate = useNavigate();
  
  const renderActions = (status) => {  

    switch (status) {
      case 'free':
        return (
          <>
            <Button>thinking</Button>
            <Button
              variant='outlined'
              onClick={() => navigate('order/new' , { replace: true })}
            >new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button>new order</Button>
        );
      case 'ordered':
        return (
          <Button>prepared</Button>
        );
      case 'prepared':
        return (
          <Button>delivered</Button>
        );
      case 'delivered':
        return (
          <Button>paid</Button>
        );
      case 'paid':
        return (
          <Button>free</Button>
        );
      default:
        return null;
    }
  };

  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}
                    onClick={() => navigate('order/' + row.order, { replace: true })}
                  >
                    {row.order}
                  </Button>
                )}
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

export default Waiter;