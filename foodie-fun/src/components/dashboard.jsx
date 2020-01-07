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



//Styles

const TestData = styled.div `
  width:60%;
  background:grey;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  margin:auto;
`
const TestCard = styled.div `
  display:flex;
  justify-content: center;
  align-content:center;
  padding:20px;
`