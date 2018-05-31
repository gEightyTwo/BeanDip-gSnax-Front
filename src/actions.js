import axios from 'axios'

export const GET_ALL_SNAX = 'GET_ALL_SNAX'
export const GET_ALL_REV = 'GET_ALL_REV'
export const FILTER_REV = 'FILTER_REV'
export const POST_REVIEW = 'POST_REVIEW'
export const SET_USERSTATE = 'SET_USERSTATE'
export const DEL_USERSTATE = 'DEL_USERSTATE'


export const loginSetState = (fullResponse) => {
  return (dispatch) => {
    dispatch({
      type: SET_USERSTATE,
      payload: fullResponse
    })
  }
}
export const logoutSetState = () => {
  return (dispatch) => {
    dispatch({
      type: DEL_USERSTATE,
    })
  }
}

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


export const postReview = (snackId, usersId, title, text, rating) => {
  console.log(snackId, title, text, rating)
  return (dispatch) => {
    axios.post(`http://localhost:3000/reviews/${snackId}`, {usersId, title, text, rating})
    .then((response) => {
      dispatch(
        getAllRev()
      //   type: POST_REVIEW,
      //   payload: response.data
      )
    })
  }
}
