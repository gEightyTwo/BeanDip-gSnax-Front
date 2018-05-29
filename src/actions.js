import axios from 'axios'

export const GET_ALL_SNAX = 'GET_ALL_SNAX'
export const GET_ALL_REV = 'GET_ALL_REV'
export const FILTER_REV = 'FILTER_REV'


export const getAllSnax = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/snacks')
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: GET_ALL_SNAX,
        payload: response.data
      })
    })

  }
}
export const getAllRev = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/reviews')
    .then((response) => {
      dispatch({
        type: GET_ALL_REV,
        payload: response.data.allReviews
      })
    })
  }
}

export const filterRev = (snackId) => {
  return (dispatch) => {
    axios.get('http://localhost:3000/reviews')
    .then((response) => {
      const filtered = response.data.allReviews.filter(rev => rev.snack_id === snackId)
      dispatch({
        type: FILTER_REV,
        payload: filtered
      })
    })
  }
}
