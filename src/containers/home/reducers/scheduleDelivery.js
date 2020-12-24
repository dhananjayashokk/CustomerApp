import {homeConstants} from '../constants';

export default function scheduleDelivery(state = {}, action) {
  switch (action.type) {
    case homeConstants.SCHEDULE_DELIVERY_REQUEST:
      return {
        loading: true,
      };
    case homeConstants.SCHEDULE_DELIVERY_SUCCESS:
      return {
        loading: false,
        scheduleDelivery: action.scheduleDelivery.data,
      };
    case homeConstants.SCHEDULE_DELIVERY_FAILURE:
      return {
        error: true,
        loading: false,
        scheduleDelivery: action.error,
      };
    default:
      return state;
  }
}