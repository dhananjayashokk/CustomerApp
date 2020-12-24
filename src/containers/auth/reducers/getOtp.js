import {userConstants} from '../constants';

export default function getOtp(state = {}, action) {
  switch (action.type) {
    case userConstants.OTP_REQUEST:
      return {
        loading: true,
      };
    case userConstants.OTP_SUCCESS:
      return {
        loading: false,
        getOtp: action.getOtp,
      };
    case userConstants.OTP_FAILURE:
      return {
        error: true,
        loading: false,
        getOtp: action.error,
      };
    default:
      return state;
  }
}
