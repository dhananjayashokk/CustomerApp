import {userConstants} from '../constants';

export default function authentication(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loading: false,
        auth: action.auth.data,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        error: true,
        loading: false,
        auth: action.error,
      };
    default:
      return state;
  }
}