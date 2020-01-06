import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RestaurantForm from './restaurantForm';
// import { Link } from 'react-router-dom';


const RestaurantList = props => {
  console.log(props);
  return (
    <div>
     
      <RestaurantForm />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    state
  }
}

export default connect ( mapStateToProps, {})(RestaurantList);