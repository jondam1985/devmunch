import {UserActionTypes} from './user.types';

export const setUserObject = state => {
  console.log(state)
  return {
    type: UserActionTypes.USER_OBJECT,
    payload: state
  }
}