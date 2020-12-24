import {homeConstants} from '../constants';

export default function fetchFuelPrice(state = {}, action) {
  switch (action.type) {
    case homeConstants.FUEL_PRICE_REQUEST:
      return {
        loading: true,
      };
    case homeConstants.FUEL_PRICE_SUCCESS:
      return {
        loading: false,
        fetchFuelPrice: action.fetchFuelPrice.data,
      };
    case homeConstants.FUEL_PRICE_FAILURE:
      return {
        error: true,
        loading: false,
        fetchFuelPrice: action.error,
      };
    default:
      return state;
  }
}