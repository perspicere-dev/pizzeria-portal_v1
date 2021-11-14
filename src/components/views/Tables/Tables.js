import React from 'react';
import styles from './Tables.module.scss';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

const Tables = () => {

  const demoTables = [
    {id: 1, name: 'Table 1'},
    {id: 2, name: 'Table 2'},
    {id: 3, name: 'Table 3'},
    {id: 4, name: 'Table 4'},
    {id: 5, name: 'Table 5'},
    {id: 6, name: 'Table 6'},
  ];

  const hours = [
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00', 
  ];

  const [value, setValue] = React.useState(new Date());

  const navigate = useNavigate();

  const bookings = [
    {
      id: 1,
      date: '2021-06-07',
      hour: '12:00',
      table: 1,
      repeat: true,
      duration: 4,
      ppl: 3,
      starters: [],
    },
    {
      id: 2,
      date: '2021-06-07',
      hour: '12:30',
      table: 2,
      repeat: true,
      duration: 4,
      ppl: 3,
      starters: [],
    },
    {
      id: 3,
      date: '2021-06-07',
      hour: '13:00',
      table: 3,
      repeat: true,
      duration: 4,
      ppl: 3,
      starters: [],
    },
  ];

  const events = [
    {
      id: 1,
      date: '2021-06-07',
      hour: '12:00',
      table: 4,
      repeat: true,
      duration: 4,
      ppl: 3,
      starters: [],
    },
    {
      id: 2,
      date: '2021-06-07',
      hour: '12:30',
      table: 2,
      repeat: true,
      duration: 4,
      ppl: 3,
      starters: [],
    },
    {
      id: 3,
      date: '2021-06-07',
      hour: '13:00',
      table: 6,
      repeat: true,
      duration: 4,
      ppl: 3,
      starters: [],
    },
  ];

  const getBookingEventView = (hour, table) => {
    for(let booking of bookings) {
      if(booking.hour === hour && booking.table === table.id) {
        return (
          <Button 
            variant='outlined'
            onClick={() => navigate('booking/' + booking.id, { replace: true })}
          >{'Booking ' + booking.id} 
          </Button> 
        );
      }
    }
    for(let event of events) {
      if(event.hour === hour && event.table === table.id) {
        return (
          <Button 
            variant='outlined'
            onClick={() => navigate('events/' + event.id, { replace: true })}
          >{'Event ' + event.id} 
          </Button> 
        );
      }
    }
    return '';
  };

  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Container maxWidth='lg'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
      </Container>
      <Container>
        <TableContainer className={styles.table} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {demoTables.map((table) => (
                  <TableCell key={table.id} align="right">{table.name}</TableCell>
                ))}

              </TableRow>
            </TableHead>
            <TableBody>
              {hours.map((hour) => (
                <TableRow
                  key={hour}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {hour}
                  </TableCell>
                  {demoTables.map((table) => (
                    <TableCell key={table.id} align="right">
                      {getBookingEventView(hour, table)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Button 
        variant='outlined'
        onClick={() => navigate('booking/new' , { replace: true })}
      >{'Add new booking'} 
      </Button> 
      <Button 
        variant='outlined'
        onClick={() => navigate('events/new' , { replace: true })}
      >{'Add new event'} 
      </Button> 
    </div>
  );
};

export default Tables; 
