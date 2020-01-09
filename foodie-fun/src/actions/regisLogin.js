import { axiosWithAuth } from '../utils/axiosWithAuth';

// import axios from 'axios';

export const setUserTypes = {
  START: 'START',
  SUCCESS: 'SET_USER_SUCCESS',
  FAIL: 'SET_USER_FAIL'
}

export const setUser = (data) => dispatch => {
  axiosWithAuth()
    .post('/auth/login', `grant_type=password&username=${data.username}&password=${data.password}` )
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.access_token)
      localStorage.setItem('username', data.username)
      dispatch({ type: setUserTypes.SUCCESS, payload:data.username})
    })
    .catch(err => console.log('Error', err))
  
}

// login = e => {
//   e.preventDefault();
//   axios
//     .post('https://foodiefun-app.herokuapp.com/api/auth/login', this.state)
//       .then(res => {
//         localStorage.setItem('token', res.data.access_token);
//         localStorage.setItem('username', data.username)
//         this.props.history.push('/dashboard')
//       })
//       .catch(err => console.log(err))
// }