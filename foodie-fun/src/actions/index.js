import { setUser, setUserTypes } from './regisLogin';
import { deleteRest, DELETE_RESTAURANT, DELETE_RESTAURANT_FAIL } from './deleteRest';
import { editRest, EDIT_RESTAURANT, EDIT_RESTAURANT_FAIL} from './editRest';
import  {
  FETCHING_RESTAURANT_SUCCESS,
  FETCHING_RESTAURANT_FAILURE,
  ADDING_RESTAURANT,
  ADDING_RESTAURANT_FAILURE,
  fetchRestaurant,
  addRestaurant,
} from './restaurantAction';

export {
  FETCHING_RESTAURANT_SUCCESS,
  FETCHING_RESTAURANT_FAILURE,
  ADDING_RESTAURANT,
  ADDING_RESTAURANT_FAILURE,
  setUserTypes,
  setUser,
  fetchRestaurant,
  addRestaurant,
  deleteRest,
  DELETE_RESTAURANT,
  DELETE_RESTAURANT_FAIL, 
  editRest,
  EDIT_RESTAURANT_FAIL,
  EDIT_RESTAURANT
} 

