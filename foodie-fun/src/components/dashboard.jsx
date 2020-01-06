// home-page to host the front-page of our app

import React from 'react';
import { connect } from 'react-redux';
import RestaurentList from './restaurantList';
import { Link } from 'react-router-dom';


const Dashboard = props => {
  console.log(props);
  return (
    <div>
       
       <button> <Link to ='/restaurant'>Check In</Link></button> 
    
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}
export default connect(mapStateToProps, 
  {})(Dashboard);