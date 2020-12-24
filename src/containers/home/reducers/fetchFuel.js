import {homeConstants} from '../constants';

export default function fetchFuel(state = {}, action) {
  switch (action.type) {
    case homeConstants.FUEL_REQUEST:
      return {
        loading: true,
      };
    case homeConstants.FUEL_SUCCESS:
      return {
        loading: false,
        fetchFuel: action.fetchFuel.data,
      };
    case homeConstants.FUEL_FAILURE:
      return {
        error: true,
        loading: false,
        fetchFuel: action.error,
      };
    default:
      return state;
  }
}