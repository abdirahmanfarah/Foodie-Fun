import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { editRest } from '../actions';

const EditRestaurant = props => {
  const [updateRes, setUpdateRes] = useState({});

  const handleChange = e => {
    if(e.target.name === 'cuisine_id'){
      const number = parseInt(e.target.value)
      setUpdateRes({...updateRes, [e.target.name] : number })
    }else {
      
      setUpdateRes({...updateRes, [e.target.name]: e.target.value})
    }
  }

  // const editRest = e => {
  //   e.preventDefault();
  //   props.editRest({...updateRes});
  //   console.log(props);
  // }

  return (
    <DishFormContainer>
      <h1>Edit Restaurant</h1>
      <InputA name='name' placeholder='restaurant' onChange={handleChange} value={updateRes.name}/>

      <InputA name="location" placeholder="location" onChange={handleChange} value={updateRes.location} />

      <InputA name='hours_of_operation' placeholder='hours' onChange={handleChange} value={updateRes.hours_of_operation} />

      <InputA type='number' name='cuisine_id' placeholder='cuisine' onChange={handleChange} value={updateRes.cuisine_id} />

      <InputA name='image_url' placeholder='image' onChange={handleChange} value={updateRes.image_url} />

      {/* <SelectA name="rating" value={updateRes.rating} onChange={handleChange}>
          <option  value="initial"> Rating </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
      </SelectA> */}
      {/* <TextareaA name="review" value={updateRes.review} onChange={handleChange} placeholder='description' /> */}
        <ButtonRes onClick={() => props.editRest(props.match.params.id, updateRes)}>EDIT Restaurant</ButtonRes>
    </DishFormContainer>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    rest: state.restaurants,
  }
}
export default connect(mapStateToProps, {editRest})(EditRestaurant)

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
const InputA = styled.input `
  padding:20px;
  margin:10px auto;
  width:80%;
`
// const SelectB = styled.select `
//   padding:10px;
//   margin:auto;
// `
// const TextareaB = styled.textarea `
//   padding:20px;
//   margin:10px auto;
//   width:100%;
// `
const ButtonRes = styled.button `
  padding:20px;
  margin:auto;
`