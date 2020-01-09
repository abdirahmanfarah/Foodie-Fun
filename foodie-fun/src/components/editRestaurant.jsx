import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

const EditRestaurant = props =>  {
  console.log(props)
  
  return(
    <div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    rest: state.restaurants,
  }
}
export default connect(mapStateToProps, {})(EditRestaurant);