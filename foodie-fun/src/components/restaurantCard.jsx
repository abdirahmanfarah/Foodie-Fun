import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const RestaurantCard = props => {

  return (
    <DashboardCard>
        <p>Name: {props.res.name}</p>
        <p>Cuisine: {props.res.cuisine}</p>
        <p>Location: {props.res.location}</p>
        <p>Hours: {props.res.hours_of_operation}</p>
        <p>Rating: {props.res.rating}</p>
        <Image alt='' src={props.res.image_url} key={props.res.id}/>



    </DashboardCard>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, {})(RestaurantCard);

const DashboardCard = styled.div `
  border:1px solid black;
  display:flex;
  justify-content:space-evenly;
  align-item:center;
  padding:20px;
  width:100%;
  margin: auto;
`
const Image = styled.img `
  width:20%;
  height:20%;
`