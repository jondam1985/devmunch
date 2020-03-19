import {UserActionTypes} from './user.types';

export const setUserObject = state => {
  return {
    type: UserActionTypes.USER_OBJECT,
    payload: state
  }
}