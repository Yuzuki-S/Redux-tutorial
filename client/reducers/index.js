import {combineReducers} from 'redux'
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user'
import addUser from './reducer-add-user'

const allReducer=  combineReducers({
  users:UserReducer,
  activeUser:ActiveUserReducer,
  addUser:addUser
})


//list of one big JS OBJECT as store can take only one objext
//now users means the object in reducer users file


export default allReducer