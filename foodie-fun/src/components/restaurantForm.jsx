import React, { useState } from 'react';
import { connect } from 'react-redux';

const RestaurantForm = props => {
  const[newRes, setNewRes] = useState({});

  const handleChange = e => {
    
    console.log(newRes);
    setNewRes({...newRes, [e.target.name] : e.target.value})
  }

  return (
    <form>

      <input name='name' placeholder='name' onChange={handleChange} value={newRes.name}/>

      <input name='time' placeholder='time' onChange={handleChange} value={newRes.time} />
      <select name="cusine" value={newRes.cuisine} onChange={handleChange}>
        <option value='American'>American</option>
        <option value='Chinese'>Chinese</option>
        <option value='Mexican'>Mexican</option>
        <option value='Custom'>Custom</option>
      </select>
      <select name="rating" value={newRes.rating} onChange={handleChange}>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
      </select>
      <textarea name="review" value={newRes.review} onChange={handleChange} />
    <button>Add Restaurant</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, 
  {})(RestaurantForm);