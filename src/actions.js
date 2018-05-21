import axios from 'axios'

export const GET_ALL_SNAX = 'GET_ALL_SNAX'
export const GET_ALL_REV = 'GET_ALL_REV'


export const getAllSnax = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/snacks')
    .then((response) => {
      dispatch({
        type: GET_ALL_SNAX,
        payload: response.data
      })
    })

  }
}
export const getAllRev = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/users/:usersId/reviews')
    .then((response) => {
      dispatch({
        type: GET_ALL_REV,
        payload: response.data
      })
    })
  }
}
