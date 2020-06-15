import { axiosWithAuth } from '../utils/axiosWithAuth';

export const EDIT_RESTAURANT ='EDIT_RESTAURANT'
export const EDIT_RESTAURANT_FAIL = 'EDIT_RESTAURANT_FAIL'

export const editRest = (id, data) => dispatch => {
  console.log(data)
  axiosWithAuth()
    .put(`/restaurants/${id}`, data)
    .then( res =>  {
      console.log('edit rest', res.data)
      dispatch({type: EDIT_RESTAURANT, payload:res.data})
    })
    .catch(err => {
      dispatch({ type: EDIT_RESTAURANT_FAIL, payload:'cant edit'})
    })
}