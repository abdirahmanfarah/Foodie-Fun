import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DishForm = props => {
  const [newDish, setNewDish] = useState({});

  const handleChange = e => {
    setNewDish({...newDish, [e.target.name]: e.target.value})
  }

  return (
    <DishFormContainer>
      <h1>Add New Dish</h1>
       <InputB name='restaurant' placeholder='restaurant' onChange={handleChange} value={newDish.restaurant}/>
       <InputB name='name' placeholder='name' onChange={handleChange} value={newDish.name}/>
       <InputB name='price' placeholder='price' onChange={handleChange} value={newDish.price}/>
       <SelectB name="cuisine" value={newDish.cuisine} onChange={handleChange}>
        <option value='American'>American</option>
        <option value='Chinese'>Chinese</option>
        <option value='Mexican'>Mexican</option>
        <option value='Custom'>Custom</option>
      </SelectB>
      <SelectB name="rating" value={newDish.rating} onChange={handleChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
      </SelectB>
      <TextareaB name="review" value={newDish.review} onChange={handleChange} placeholder='description' />
      <ButtonDish>Add New Dish</ButtonDish>
    </DishFormContainer>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}
export default connect(mapStateToProps, {})(DishForm)

const DishFormContainer = styled.div `
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
const InputB = styled.input `
  padding:20px;
  margin:10px auto;
  width:80%;
`
const SelectB = styled.select `
  padding:10px;
  margin:auto;
`
const TextareaB = styled.textarea `
  padding:20px;
  margin:10px auto;
  width:100%;
`
const ButtonDish = styled.button `
  padding:20px;
  margin:auto;
`