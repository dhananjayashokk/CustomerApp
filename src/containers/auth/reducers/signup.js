import {userConstants} from '../constants';

export default function signup(state = {}, action) {
  switch (action.type) {
    case userConstants.SIGNUP_REQUEST:
      return {
        loading: true,
      };
    case userConstants.SIGNUP_SUCCESS:    
      return {
        loading: false,
        signup: action.signup,
      };
    case userConstants.SIGNUP_FAILURE:
      return {
        error: true,
        loading: false,
        signup: action.error,
      };
    default:
      return state;
  }
}