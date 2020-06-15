// home-page to host the front-page of our app

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RestaurantCard from './restaurantCard';

//Action
import { fetchRestaurant } from '../actions/restaurantAction';

// Style
import styled from 'styled-components';

const Dashboard = props => {
  useEffect(() => {
    props.fetchRestaurant();
    if(props.rest) {
      // console.log(props.rest)
    }
  }, [])


  return props.rest ? (

    <div>
      <TestData>
        <h1>Restaurants</h1>
          {props.rest.map(res => (
          <RestaurantCard key={res.id} res={res} />
        ))} 
      </TestData>
       <CheckInButton> <Link to ='/restaurant'>Check In</Link></CheckInButton> 
    
    </div>
  ) : (<div>Loading...</div>)
}

const mapStateToProps = state => {
  return {
    user: state.user,
    rest: state.restaurants
  }
}
export default connect(mapStateToProps, 
  { fetchRestaurant })(Dashboard);



//Styles

const TestData = styled.div `
  width:70%;
  display:flex;
  border:1px solid black;
  justify-content:space-evenly;
  align-item:center;
  flex-wrap:wrap;
  margin:20px auto;
  padding:20px;
`

const CheckInButton = styled.button `
  padding:30px;
  width:40%;
  background:orange;
  font-size:1.2rem;
`
// const Link = styled.link `
//   font-size:1.2rem;
// `