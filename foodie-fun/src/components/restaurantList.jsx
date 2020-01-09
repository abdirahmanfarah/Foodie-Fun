import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FavoritesCard from './favoritesCard'

// Action
import { fetchRestaurant } from '../actions';

const RestaurantList = props => {
  console.log(props.rest);

  useEffect(() => {
    props.fetchRestaurant();
    if(props.rest) {
      console.log(props.rest)
    }
  }, [])

  return props.rest ? (             
    <div>
      <h1>Favorites</h1>
      {/* Search-Bar goes here */}
      <div>
          {props.rest.map(res => (
          <FavoritesCard key={res.id} res={res}/>
        ))} 
      </div>

     
       {/* <RestaurantCard />  */}
     
    </div>
  ) : (<div> Loading ...</div>)
}

const mapStateToProps = state => {
  return{
    user: state.user,
    rest: state.restaurants,
    // favorites: state.favorites
  }
}

export default connect ( mapStateToProps, { fetchRestaurant})(RestaurantList);