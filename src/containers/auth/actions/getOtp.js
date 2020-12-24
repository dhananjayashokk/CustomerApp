import { userConstants } from '../constants';
import { userService } from '../services';

export const otpActions = {
    getOtp
};

function getOtp(payload) {
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
                console.log(error);
            dispatch(failure(error));
        });
    };

    function request(user) { return { type: userConstants.OTP_REQUEST, user }}
    function success(getOtp) { return { type: userConstants.OTP_SUCCESS, getOtp }}
    function failure(error) { return { type: userConstants.OTP_FAILURE, error }}
}

