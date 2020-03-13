import {UserActionTypes} from './user.types';

export const setUserLogInStatus = state => {
  return {
    type: UserActionTypes.IS_LOGED_IN,
    payload: state
  }
}