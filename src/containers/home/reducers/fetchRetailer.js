import {homeConstants} from '../constants';

export default function fetchRetailer(state = {}, action) {
  switch (action.type) {
    case homeConstants.RETAILER_REQUEST:
      return {
        loading: true,
      };
    case homeConstants.RETAILER_SUCCESS:
      return {
        loading: false,
        fetchRetailer: action.fetchRetailer.data,
      };
    case homeConstants.RETAILER_FAILURE:
      console.log(action.error)
      return {
        error: true,
        loading: false,
        fetchRetailer: action.error,
      };
    default:
      return state;
  }
}