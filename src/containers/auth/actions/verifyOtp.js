import { userConstants } from '../constants';
import { userService } from '../services';

export const verifyActions = {
    verifyOtp
};

function verifyOtp(payload) {
    console.log(payload);
    return dispatch => {
        dispatch(request(payload));
        userService.verifyOtp(payload)
            .then(response => {
                console.log(response);
                    if(response.status === 200) {
                        dispatch(success(response.data));
                    }

                    if(response.status === 400) {
                        dispatch(failure(response.data)); 
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

    function request(user) { return { type: userConstants.VERIFY_OTP_REQUEST, user }}
    function success(verifyOtp) { return { type: userConstants.VERIFY_OTP_SUCCESS, verifyOtp }}
    function failure(error) { return { type: userConstants.VERIFY_OTP_FAILURE, error }}
}

