import { combineReducers } from 'redux'
import { GET_ALL_SNAX, GET_ALL_REV, SET_USERSTATE, DEL_USERSTATE } from './actions'

const INITIAL_VALUE = []

const reviewList = (state = [], action) => {
  switch(action.type){
    case GET_ALL_REV:
      return action.payload
    default:
      return state
  }
}
const list = (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case GET_ALL_SNAX:
      return action.payload
    default:
      return state
  }
}
const userState = (state = {id:null}, action) => {
  switch(action.type){
    case SET_USERSTATE:
      return action.payload
      break;
    case DEL_USERSTATE:
      return {}
      break;
    default:
      return state
}
}


export default combineReducers({ list, reviewList, userState })
