// home-page to host the front-page of our app

import React from 'react';
import { connect } from 'react-redux';
import RestaurentList from './restaurantList';
import { Link } from 'react-router-dom';
import {testData} from '../testData';

// Style
import styled from 'styled-components';


const Dashboard = props => {
  console.log(testData.restaurants);
  return (
    <div>
      <TestData>
        {testData.restaurants.map(test => (
         <TestCard key={test.id}>
            <p>Name: {test.restaurant} </p>
            <p>description: {test.description} </p>
         </TestCard>

        ))}
      </TestData>
       <CheckInButton> <Link to ='/restaurant'>Check In</Link></CheckInButton> 
    
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



//Styles

const TestData = styled.div `
  width:60%;
  display:flex;
  border:1px solid red;
  justify-content:space-evenly;
  align-item:center;
  flex-wrap:wrap;
  margin:20px auto;
`
const TestCard = styled.div `
  border:1px solid red;
  display:flex;
  justify-content:space-evenly;
  align-item:center;
  padding:20px;
  width:80%;
  margin: auto;
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