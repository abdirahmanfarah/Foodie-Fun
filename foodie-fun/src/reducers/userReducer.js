import {
  FETCHING_RESTAURANT_SUCCESS,
  // FETCHING_RESTAURANT_FAILURE,
  ADDING_RESTAURANT,
  setUserTypes,
  DELETE_RESTAURANT,
  // DELETE_RESTAURANT_FAIL
  // ADDING_RESTAURANT_FAILURE
  EDIT_RESTAURANT
} from '../actions';

const initialState = {
  isFetching: false,
  user: {},
  restaurants: [],
  // favorites: []
}

function userReducer(state = initialState, action) {
  switch(action.type) {

    case setUserTypes.SUCCESS: 
      return {
        ...state,
        isFetching: false,
        user: {
          username: action.payload
        }
      }
    case FETCHING_RESTAURANT_SUCCESS: 
      return {
           ...state, 
          restaurants:action.payload }
    
    case ADDING_RESTAURANT:
      return {
        ...state,
        restaurants: action.payload
      }
    
    case DELETE_RESTAURANT :
      return {
        ...state,
        restaurants: state.restaurants.filter(
          rest => rest.id !== action.payload
        )
      }
    
    case EDIT_RESTAURANT :
        return {
          ...state,
          restaurants: state.restaurants.filter(
            rest => rest.id !== action.payload
          )
        }
    default:
      return state
  }
}

export default userReducer;