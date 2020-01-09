import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../actions';
import styled from 'styled-components';


const RestaurantForm = props => {
  // console.log(props.favorites);
  const[newRes, setNewRes] = useState({});

  const handleChange = e => {
    if(e.target.name === 'cuisine_id'){
      const number = parseInt(e.target.value)
    setNewRes({...newRes, [e.target.name] : number})
    }else {

      setNewRes({...newRes, [e.target.name] : e.target.value})
    }
  }

  const addRestaurant = e => {
    e.preventDefault();
    props.addRestaurant({...newRes})
    console.log(props.favorites);
  }
  return (
    <RestaurantFormContainer>
      <h1>Restaurant Name </h1>
      <InputA name='name' placeholder='restaurant' onChange={handleChange} value={newRes.name}/>

      <InputA name="location" placeholder="location" onChange={handleChange} value={newRes.location} />

      <InputA name='hours_of_operation' placeholder='time' onChange={handleChange} value={newRes.hours_of_operation} />

      <InputA type='number' name='cuisine_id' placeholder='cuisine' onChange={handleChange} value={newRes.cuisine_id} />

      {/* <SelectA name="cuisine" value={newRes.cuisine} onChange={handleChange}>
        <option value='American'>American</option>
        <option value='Chinese'>Chinese</option>
        <option value='Mexican'>Mexican</option>
        <option value='Custom'>Custom</option>
      </SelectA> */}
      <InputA name='image_url' placeholder='image' onChange={handleChange} value={newRes.image_url} />

      <SelectA name="rating" value={newRes.rating} onChange={handleChange}>
          <option  value="initial"> Rating </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
      </SelectA>
      <TextareaA name="review" value={newRes.review} onChange={handleChange} placeholder='description' />
        <ButtonRes onClick={addRestaurant}>Add Restaurant</ButtonRes>
    </RestaurantFormContainer>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    rest: state.restaurants,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps, 
  { addRestaurant })(RestaurantForm);


const RestaurantFormContainer = styled.div `
  background:orange;
  display:flex;
  justify-content:space-evenly;
  flex-wrap:wrap;
  align-item:center;
  width:40%;
  padding:20px;
  border:1px solid red;
  margin:20px auto;
`
const InputA = styled.input `
  padding:20px;
  margin:10px auto;
  width:80%;
`
const SelectA = styled.select `
  padding:10px;
  margin:auto;
  width:90%;
`
const TextareaA = styled.textarea `
  padding:20px;
  margin:10px auto;
  width:100%;
`
const ButtonRes = styled.button `
  padding:20px;
  margin:auto;
`