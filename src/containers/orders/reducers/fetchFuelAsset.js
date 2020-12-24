import {orderConstants} from '../constants';

export default function fetchFuelAsset(state = {}, action) {
  switch (action.type) {
    case orderConstants.ADD_ASSET_REQUEST:
      return {
        loading: true,
      };
    case orderConstants.ADD_ASSET_SUCCESS:
      return {
        loading: false,
        fetchFuelAsset: action.fetchFuelAsset,
      };
    case orderConstants.ADD_ASSET_FAILURE:
      return {
        error: true,
        loading: false,
        fetchFuelAsset: action.error,
      };
    default:
      return state;
  }
}