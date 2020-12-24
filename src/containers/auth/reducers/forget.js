import {userConstants} from '../constants';

export default function forgetpassword(state = {}, action) {
  switch (action.type) {
    case userConstants.FORGET_PASSWORD_REQUEST:
      return {
        loading: true,
      };
    case userConstants.FORGET_PASSWORD_SUCCESS:
      return {
        loading: false,
        forgetpassword: action.forgetpassword,
      };
    case userConstants.FORGET_PASSWORD_FAILURE:
      return {
        error: true,
        loading: false,
        forgetpassword: action.error,
      };
    default:
      return state;
  }
}
