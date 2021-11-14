import React from 'react';
import styles from './TablesBookingNew.module.scss';
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

const TablesBookingNew = () => {

  const [selected, setSelected] = React.useState(false);

  return (
    <div className={styles.component}>
      <h2>New booking</h2>
      <Container>
        <TableContainer className={styles.table} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell></TableCell>
                <TableCell>Booking details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>date</TableCell>
                <TableCell>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="DatePicker"
                      value={new Date()}
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
                      value={new Date()}
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
                <TableCell>{1}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ppl</TableCell>
                <TableCell>{2}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>starters</TableCell>
                <TableCell>{' '}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Container> 
        <Button variant="outlined">Add</Button>
      </Container>
    </div>
  );
};

export default TablesBookingNew;