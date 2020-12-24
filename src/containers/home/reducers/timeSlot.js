import {homeConstants} from '../constants';

export default function fetchTimeSlots(state = {}, action) {
  switch (action.type) {
    case homeConstants.TIME_SLOTS_REQUEST:
      return {
        loading: true,
      };
    case homeConstants.TIME_SLOTS_SUCCESS:
      return {
        loading: false,
        timeSlots: action.timeSlots.data,
      };
    case homeConstants.TIME_SLOTS_FAILURE:
      return {
        error: true,
        loading: false,
        timeSlots: action.error,
      };
    default:
      return state;
  }
}