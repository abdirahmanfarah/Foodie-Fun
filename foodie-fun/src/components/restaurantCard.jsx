import React from 'react';
import {connect} from 'react-redux';

const RestaurantCard = props => {
  console.log(props);

  return (
    <div>
        {/* <p>Name: {props}</p> */}

    </div>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, {})(RestaurantCard);