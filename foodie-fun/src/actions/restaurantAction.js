import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth'

export const FETCHING_RESTAURANT_SUCCESS = 'FETCHING_RESTAURANT_SUCCESS'
export const FETCHING_RESTAURANT_FAILURE = 'FETCHING_RESTAURANT_FAILURE'
export const ADDING_RESTAURANT = 'ADDING_RESTAURANT'
export const ADDING_RESTAURANT_FAILURE= 'ADDING_RESTAURANT_FAILURE'

export const fetchRestaurant = () => dispatch => {
  axios
    .get('https://foodiefun-app.herokuapp.com/api/restaurants')
    .then(res => {
      // console.log(res.data)
      dispatch({ type: FETCHING_RESTAURANT_SUCCESS, payload:res.data})
    })
    .catch(err => {
      dispatch({ type: FETCHING_RESTAURANT_FAILURE, payload: 'no data'})
    })
      
}

export const addRestaurant = (add) => dispatch => {
  console.log(add)
  axiosWithAuth()
    .post('/restaurants', add)
    .then(res => {
      console.log(res)
      dispatch({type: ADDING_RESTAURANT, payload:res.data})
    })
    .catch(err => {
      dispatch({ type: ADDING_RESTAURANT_FAILURE, payload: 'no data'})
    })
}