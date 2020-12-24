import { userConstants } from '../constants';
import { userService } from '../services';

export const loginActions = {
    login,
    setUser
};

function login(payload) {
    console.log(payload);

    return dispatch => {

        dispatch(request(payload));
        userService.login(payload)
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

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user }}
    function success(auth) { return { type: userConstants.LOGIN_SUCCESS, auth }}
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }}
}


function setUser(payload) {
    return dispatch => {
        dispatch(success(payload));
    };
    function success(auth) { return { type: userConstants.LOGIN_SUCCESS, auth }}
}