import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvents from './components/views/TablesEvents/TablesEvents';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import { StylesProvider } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Routes>
              <Route path={process.env.PUBLIC_URL + '/'} element={<Dashboard />} />
              <Route path={process.env.PUBLIC_URL + '/kitchen'} element={<Kitchen />} />
              <Route path={process.env.PUBLIC_URL + '/login'} element={<Login />} />
              <Route path={process.env.PUBLIC_URL + '/tables'} element={<Tables />} />
              <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} element={<TablesBooking />} />
              <Route path={process.env.PUBLIC_URL + '/tables/booking/new'} element={<TablesBookingNew />} />
              <Route path={process.env.PUBLIC_URL + '/tables/events/:id'} element={<TablesEvents />} />
              <Route path={process.env.PUBLIC_URL + '/tables/events/new'} element={<TablesEventsNew />} />
              <Route path={process.env.PUBLIC_URL + '/waiter'} element={<Waiter />} />
              <Route path={process.env.PUBLIC_URL + '/waiter/order/:id'} element={<WaiterOrder />} />
              <Route path={process.env.PUBLIC_URL + '/waiter/order/new'} element={<WaiterOrderNew />} />
            </Routes>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
   
  );
}

export default App;
