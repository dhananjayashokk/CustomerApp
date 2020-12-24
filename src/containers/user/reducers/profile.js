import {profileConstants} from '../constants';

export default function profile(state = {}, action) {
  switch (action.type) {
    case profileConstants.PROFILE_REQUEST:
      return {
        loading: true,
      };
    case profileConstants.PROFILE_SUCCESS:
      return {
        loading: false,
        profile: action.profile,
      };
    case profileConstants.PROFILE_FAILURE:
      return {
        error: true,
        loading: false,
        profile: action.error,
      };
    default:
      return state;
  }
}