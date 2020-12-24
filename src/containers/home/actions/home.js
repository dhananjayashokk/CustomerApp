import { homeConstants } from '../constants';
import { homeService } from '../services';

export const homeActions = {
    home,
};

function home(custid) {
    return dispatch => {
        dispatch(request());
        homeService.home(custid)
            .then(response => {
                    if(response.status === 200) {
                        dispatch(success(response.data));
                    }
                    if(response.status === 400) {
                        dispatch(failure(response.data)); 
                    }
                }
            ).catch(error => {
            dispatch(failure(error));
        });
    };

    function request(user) { return { type: homeConstants.HOME_REQUEST, user }}
    function success(home) { return { type: homeConstants.HOME_SUCCESS, home }}
    function failure(error) { return { type: homeConstants.HOME_FAILURE, error }}
}
