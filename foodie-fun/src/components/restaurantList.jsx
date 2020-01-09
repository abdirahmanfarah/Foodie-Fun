import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RestaurantForm from './restaurantForm';
import RestaurantCard from './restaurantCard'

// import { Link } from 'react-router-dom';


const RestaurantList = props => {
  console.log(props);
  return (             
    <div>
      <h1>Favorites</h1>
      {/* Search-Bar goes here */}
      <div>
          {props.favorites.map(res => (
          <RestaurantCard key={res.id} res={res} />
        ))} 
      </div>

     
       {/* <RestaurantCard />  */}
     
    </div>
  )
}

const mapStateToProps = state => {
  return{
    user: state.user,
    rest: state.restaurants,
    favorites: state.favorites
  }
}

export default connect ( mapStateToProps, {})(RestaurantList);