import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';



class PageNav extends React.Component {
    static propTypes = {
    }

    render () {
      return (
        <nav>
          <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
        </nav>
      );
    }
}



export default PageNav;