import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
  userIsLogedIn: false
}



const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.IS_LOGED_IN:
      return{
        ...state,
        userIsLogedIn: action.payload
      }
    default:
      return state
  }
}


export default userReducer;