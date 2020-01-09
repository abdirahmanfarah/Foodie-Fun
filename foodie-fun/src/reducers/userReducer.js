import {
  FETCHING_RESTAURANT_SUCCESS,
  // FETCHING_RESTAURANT_FAILURE,
  ADDING_RESTAURANT,
  setUserTypes,
  // ADDING_RESTAURANT_FAILURE
} from '../actions';

const initialState = {
  isFetching: false,
  user: {},
  restaurants: [],
  favorites: []
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
        favorites: action.payload
      }

    default:
      return state
  }
}

export default userReducer;