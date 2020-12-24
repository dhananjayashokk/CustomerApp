import {orderConstants} from '../constants';

export default function order(state = {}, action) {
  switch (action.type) {
    case orderConstants.ORDER_REQUEST:
      return {
        loading: true,
      };
    case orderConstants.ORDER_SUCCESS:
      return {
        loading: false,
        order: action.order,
      };
    case orderConstants.ORDER_FAILURE:
      return {
        error: true,
        loading: false,
        order: action.error,
      };
    default:
      return state;
  }
}