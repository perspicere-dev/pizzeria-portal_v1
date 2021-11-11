import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';


const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={`tables/booking/:id`}>Booking</Link>
      <Link to={`/tables/booking/:new`}>New booking</Link>
      <Link to={process.env.PUBLIC_URL +`/tables/events/:id`}>Event</Link>
      <Link to={process.env.PUBLIC_URL +`/tables/events/new`}>New event</Link>
    </div>
  );
};

export default Tables;