import { userConstants } from '../constants';
import { userService } from '../services';

export const signupActions = {
    signup,
};

function signup(payload) {
    return dispatch => {

        dispatch(request(payload));
        userService.signup(payload)
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

    function request(user) { return { type: userConstants.SIGNUP_REQUEST, user }}
    function success(signup) { return { type: userConstants.SIGNUP_SUCCESS, signup }}
    function failure(error) { return { type: userConstants.SIGNUP_FAILURE, error }}
}
