import {userConstants} from '../constants';

export default function verifyOtp(state = {}, action) {
  switch (action.type) {
    case userConstants.VERIFY_OTP_REQUEST:
      return {
        loading: true,
      };
    case userConstants.VERIFY_OTP_SUCCESS:
      return {
        loading: false,
        verifyOtp: action.verifyOtp,
      };
    case userConstants.VERIFY_OTP_FAILURE:
      return {
        error: true,
        loading: false,
        verifyOtp: action.error,
      };
    default:
      return state;
  }
}
