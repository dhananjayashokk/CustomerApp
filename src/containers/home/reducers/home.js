import {homeConstants} from '../constants';

export default function home(state = {}, action) {
  switch (action.type) {
    case homeConstants.HOME_REQUEST:
      return {
        loading: true,
      };
    case homeConstants.HOME_SUCCESS:
    console.log(action.home)
      return {
        loading: false,
        home: action.home,
      };
    case homeConstants.HOME_FAILURE:
    console.log(action.error)
      return {
        error: true,
        loading: false,
        home: action.error,
      };
    default:
      return state;
  }
}