import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';


const RestaurantForm = props => {
  const[newRes, setNewRes] = useState({});

  const handleChange = e => {
    setNewRes({...newRes, [e.target.name] : e.target.value})
  }

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   axios
  //     .post('https://reqres.in/api/users')
  //       .then(res => {
  //         setNewRes(res.data)
  //         console.log(res.data)
  //       })
  //       .catch(err => console.log('Error', err))
  // }

  return (
    <RestaurantFormContainer>
      <h1>Restaurant Name </h1>
      <InputA name='name' placeholder='restaurant' onChange={handleChange} value={newRes.name}/>
      <InputA name="location" placeholder="location" onChange={handleChange} value={newRes.location} />
      <InputA name='time' placeholder='time' onChange={handleChange} value={newRes.time} />
      <SelectA name="cuisine" value={newRes.cuisine} onChange={handleChange}>
        <option value='American'>American</option>
        <option value='Chinese'>Chinese</option>
        <option value='Mexican'>Mexican</option>
        <option value='Custom'>Custom</option>
      </SelectA>
      <SelectA name="rating" value={newRes.rating} onChange={handleChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
      </SelectA>
      <TextareaA name="review" value={newRes.review} onChange={handleChange} placeholder='description' />
        <ButtonRes>Add Restaurant</ButtonRes>
    </RestaurantFormContainer>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, 
  {})(RestaurantForm);


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