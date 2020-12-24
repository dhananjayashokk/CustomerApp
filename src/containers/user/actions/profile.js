import { profileConstants } from '../constants';
import { profileService } from '../services';

export const profileActions = {
    profile,
};

function profile(custid,admin_id) {
    return dispatch => {
        dispatch(request());
        profileService.profile(custid,admin_id)
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

    function request(user) { return { type: profileConstants.PROFILE_REQUEST, user }}
    function success(profile) { return { type: profileConstants.PROFILE_SUCCESS, profile }}
    function failure(error) { return { type: profileConstants.PROFILE_FAILURE, error }}
}