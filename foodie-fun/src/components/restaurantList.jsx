import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RestaurantForm from './restaurantForm';
import RestaurantCard from './restaurantCard'
// import { Link } from 'react-router-dom';


const RestaurantList = props => {
  console.log(props);
  return (
    <div>
     <RestaurantForm />
     <h1>Restaurants</h1>
     <div>
       <RestaurantCard /> 
     </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    state
  }
}

export default connect ( mapStateToProps, {})(RestaurantList);