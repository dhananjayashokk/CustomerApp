import {userConstants} from '../constants';

export default function resetpassword(state = {}, action) {
  switch (action.type) {
    case userConstants.RESET_PASSWORD_REQUEST:
      return {
        loading: true,
      };
    case userConstants.RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
        resetpassword: action.resetpassword,
      };
    case userConstants.RESET_PASSWORD_FAILURE:
      return {
        error: true,
        loading: false,
        resetpassword: action.error,
      };
    default:
      return state;
  }
}