import React from 'react';
import styles from './TableEvents.module.scss';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';

const TablesEvents = () => {
  
  const events = 
    {
      id: 1,
      date: '2021-03-07',
      hour: '13:00',
      table: 1,
      repeat: true,
      duration: 4,
      ppl: 3,
      starters: [],
    };
  const [selected, setSelected] = React.useState(false);
  
  const makeDateFromTime = (timeString) => {
    const timeArray = timeString.split(':');
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);
    return new Date(0, 0, 0, hours, minutes);
  };

  return (
    <div className={styles.component}>
      <h2>Event</h2>
      <Container>
        <TableContainer className={styles.table} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell></TableCell>
                <TableCell key={events.id} align="right">events details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>{events.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>date</TableCell>
                <TableCell>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="DatePicker"
                      value={events.date}
                      onChange={(newValue) => {
                        console.log(newValue);
                      }}
                    />
                  </LocalizationProvider>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>hour</TableCell>
                <TableCell>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="time"
                      value={makeDateFromTime(events.hour)}
                      onChange={(newValue) => {
                        console.log(newValue);
                      }}
                      minutesStep={30}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>repeat</TableCell>
                <TableCell>
                  <ToggleButton
                    value="check"
                    selected={selected}
                    onChange={() => {
                      setSelected(!selected);
                    }}
                  >
                    <CheckIcon />
                  </ToggleButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>duration</TableCell>
                <TableCell>{events.duration}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ppl</TableCell>
                <TableCell>{events.ppl}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>starters</TableCell>
                <TableCell>{events.starters}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Container> 
        <Button variant="outlined">Save</Button>
      </Container>
    </div>
  );
};

export default TablesEvents;