import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FavoritesCard from './favoritesCard'

// Action
import { fetchRestaurant } from '../actions';

const RestaurantList = props => {
  // console.log(props.rest);
  const[searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

      const handleChange = e => {
        setSearchTerm(e.target.value)
      }

  useEffect(() => {
    props.fetchRestaurant();
    if(props.rest) {
      console.log(props.rest)
    }
  }, [])

  useEffect(() => {
    const results = props.rest.filter(item => 
     item.name.toLowerCase().includes(searchTerm)  
    );
    setSearchResults(results);
  },[searchTerm])

  return props.rest ? (    

    <div>
      <h1>Favorites</h1>
      <input 
        type='text'
        placeholder='search'
        onChange={handleChange}
        value={searchTerm}
      />

      <div>
         {searchResults === -1 ? props.rest.map(res => (
          <FavoritesCard key={res.id} res={res}/>
        )) : searchResults.map(res => {
          return <FavoritesCard key={res.id} res={res}/>
        })}
      </div>

     
       {/* <RestaurantCard />  */}
     
    </div>
  ) : (<div> Loading ...</div>)
}

const mapStateToProps = state => {
  return{
    user: state.user,
    rest: state.restaurants,
  }
}

export default connect ( mapStateToProps, { fetchRestaurant})(RestaurantList);