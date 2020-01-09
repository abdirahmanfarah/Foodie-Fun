import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deleteRest } from '../actions';

const FavoritesCard = props => {
  console.log(props);

  // useEffect(() => {
  //   props.deleteRest();
  //   if(props.rest) {
  //     console.log(props.rest)
  //   }
  // }, [])

  const handleDelete = (e, id) => {
    e.preventDefault();
    props.deleteRest(id);

  }

  return (
    <DashboardCard>
       <DashContainer>
          <p>Name: {props.res.name}</p>
          <p>Cuisine: {props.res.cuisine}</p>
          <p>Location: {props.res.location}</p>
          <p>Hours: {props.res.hours_of_operation}</p>
          <p>Rating: {props.res.rating}</p>
         <SmallContainer>
            <Image alt='' src={props.res.image_url} key={props.res.id}/>
              <ButtonChange><Link to ='/restaurants/:id'>Edit</Link></ButtonChange>
              <ButtonChange onClick={e => handleDelete(e, props.res.id)}>Delete</ButtonChange>
         </SmallContainer>
       </DashContainer >
  

    </DashboardCard>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    rest: state.restaurants,
  }
}

export default connect(mapStateToProps, {deleteRest})(FavoritesCard);

const DashboardCard = styled.div `
  border:1px solid black;
  display:flex;
  justify-content:space-evenly;
  align-item:center;
  padding:20px;
  width:80%;
  margin: auto;
`
const DashContainer = styled.div `
  border:1px solid red;
  // display:flex;
  // justify-content:center;
`
const SmallContainer = styled.div `
  border:1px solid blue;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
`
const Image = styled.img `
  width:20%;
  height:20%;
`
const ButtonChange = styled.button `
  background:orange;
  padding:10px;
  height:30%;
`