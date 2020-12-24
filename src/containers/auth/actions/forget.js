import { userConstants } from '../constants';
import { userService } from '../services';

export const forgetActions = {
    forget
};

function forget(payload) {
    console.log(payload);
    return dispatch => {
        dispatch(request(payload));
        userService.getOtp(payload)
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
            dispatch(failure(error));
        });
    };

    function request(user) { return { type: userConstants.FORGET_PASSWORD_REQUEST, user }}
    function success(forgetpassword) { return { type: userConstants.FORGET_PASSWORD_SUCCESS, forgetpassword }}
    function failure(error) { return { type: userConstants.FORGET_PASSWORD_FAILURE, error }}
}

