import {homeConstants} from '../constants';

export default function fetchPaymentMode(state = {}, action) {
  switch (action.type) {
    case homeConstants.PAYMENT_MODE_REQUEST:
      return {
        loading: true,
      };
    case homeConstants.PAYMENT_MODE_SUCCESS:
      return {
        loading: false,
        paymentMode: action.paymentMode.data,
      };
    case homeConstants.PAYMENT_MODE_FAILURE:
      return {
        error: true,
        loading: false,
        paymentMode: action.error,
      };
    default:
      return state;
  }
}