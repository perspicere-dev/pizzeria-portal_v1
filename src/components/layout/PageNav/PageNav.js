import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './PageNav.module.scss';

const PageNav = props => {
  return (
    <nav className={styles.component}>
      <Button className={styles.lin} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashbord</Button>
      <Button className={styles.lin} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
      <Button className={styles.lin} component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
      <Button className={styles.lin} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
      <Button className={styles.lin} component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
    </nav>
  );
};

export default PageNav;