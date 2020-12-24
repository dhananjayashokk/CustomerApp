import { userConstants } from '../constants';
import { userService } from '../services';

export const resetActions = {
    resetpassword,
};

function resetpassword(payload) {
    console.log('inputs',payload);
    return dispatch => {
        dispatch(request(payload));
        userService.reset(payload)
            .then(response => {
                console.log(response);
                    if(response.status === 200) {
                        dispatch(success(response.data));
                    }

                    if(response.status === 400) {
                        dispatch(failure(response.data)); 
                    }
                }
            ).catch(error => {
                console.log(error);
            dispatch(failure(error));
        });
    };

    function request(user) { return { type: userConstants.RESET_PASSWORD_REQUEST, user }}
    function success(resetpassword) { return { type: userConstants.RESET_PASSWORD_SUCCESS, resetpassword }}
    function failure(error) { return { type: userConstants.RESET_PASSWORD_FAILURE, error }}
}

