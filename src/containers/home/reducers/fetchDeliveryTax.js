import {homeConstants} from '../constants';

export default function fetchDeliveryTax(state = {}, action) {
  switch (action.type) {
    case homeConstants.DELIVERY_TAX_REQUEST:
      return {
        loading: true,
      };
    case homeConstants.DELIVERY_TAX_SUCCESS:
      return {
        loading: false,
        fetchDeliveryTax: action.fetchDeliveryTax.data,
      };
    case homeConstants.DELIVERY_TAX_FAILURE:
      return {
        error: true,
        loading: false,
        fetchDeliveryTax: action.error,
      };
    default:
      return state;
  }
}