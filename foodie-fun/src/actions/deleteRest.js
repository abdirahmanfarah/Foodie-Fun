import { axiosWithAuth } from '../utils/axiosWithAuth';


export const DELETE_RESTAURANT = 'DELETE_RESTAURANT'
export const DELETE_RESTAURANT_FAIL = 'DELETE_RESTAURANT_FAIL'

export const deleteRest = id => dispatch => {
  console.log(id)
  axiosWithAuth()
    .delete(`/restaurants/${id}`)
    .then(res => {
      console.log(res.data)
      dispatch({ type: DELETE_RESTAURANT, payload:id})
    })
    .catch(err => {
      dispatch({ type: DELETE_RESTAURANT_FAIL, payload: 'error'})
    })

}