import axios from 'axios';

export const axiosWithAuth = () => {
  //retrieving auth token from localStorage
  const token = localStorage.getItem('token')

  //create axios instance with Auth token

  return axios.create({
    baseURL: 'https://foodiefun-app.herokuapp.com/api',
    headers: {
      Authorization: token
    }
  });
}
// https://cors-anywhere.herokuapp.com/
