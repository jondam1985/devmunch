import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
  userObject: {
    nickname: "karanius",
    name: "Kavian Darvish",
    picture: "https://avatars1.githubusercontent.com/u/22923211?v=4",
    updated_at: "2020-03-12T22:55:30.794Z",
    email: "kavian1991@gmail.com",
    email_verified: true,
    sub: "github|22923211",
  }
}



const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_OBJECT:
      return{
        ...state,
        userObject: action.payload
      }
    default:
      return state
  }
}


export default userReducer;