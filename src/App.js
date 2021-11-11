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

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<Dashboard />} />
          <Route path={process.env.PUBLIC_URL + '/kitchen'} element={<Kitchen />} />
          <Route path={process.env.PUBLIC_URL + '/login'} element={<Login />} />
          <Route path={process.env.PUBLIC_URL + '/tables'} element={<Tables />} />
          <Route path={process.env.PUBLIC_URL + '/table/booking/:id'} element={<TablesBooking />} />
          <Route path={process.env.PUBLIC_URL + '/table/events/:id'} element={<TablesEvents />} />
          <Route path={process.env.PUBLIC_URL + '/waiter'} element={<Waiter />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
   
  );
}

export default App;
