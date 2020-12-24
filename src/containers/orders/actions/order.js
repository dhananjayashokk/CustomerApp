import { orderConstants } from '../constants';
import { orderService } from '../services';

export const orderActions = {
    order,
    fetchFuelAsset,
};

function order(custid) {
    return dispatch => {
        dispatch(request());
        orderService.order(custid)
            .then(response => {
                console.log(response,"ress")
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

    function request(user) { return { type: orderConstants.ORDER_REQUEST, user }}
    function success(order) { return { type: orderConstants.ORDER_SUCCESS, order }}
    function failure(error) { return { type: orderConstants.ORDER_FAILURE, error }}
}

function fetchFuelAsset(custid) {
    return dispatch => {
        dispatch(request());
        orderService.fetchFuelAsset(custid)
            .then(response => {
                console.log(response,"ress")
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

    function request(user) { return { type: orderConstants.ADD_ASSET_REQUEST, user }}
    function success(fetchFuelAsset) { return { type: orderConstants.ADD_ASSET_SUCCESS, fetchFuelAsset }}
    function failure(error) { return { type: orderConstants.ADD_ASSET_FAILURE, error }}
}