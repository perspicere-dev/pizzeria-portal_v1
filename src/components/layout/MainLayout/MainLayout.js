import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav';
// import styles from 

class MainLayout extends React.Component {
    static propTypes = {
      children: PropTypes.node,
     
    }
    render () {
      return ( 
        <div> 
          <PageNav />
          { this.props.children} 
        </div>
      ); 
    }
}

export default MainLayout;
