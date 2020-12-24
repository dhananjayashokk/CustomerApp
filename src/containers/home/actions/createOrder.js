import { homeConstants } from '../constants';
import { homeService } from '../services';

export const createOrderActions = {
    fetchRetailer,
    fetchFuel,
    fetchFuelPrice,
    fetchDeliveryTax,
    scheduleDelivery,
    fetchTimeSlots,
    fetchPaymentMode
};

function fetchRetailer() {
    return dispatch => {
        dispatch(request());
        homeService.fetchRetailer()
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

    function request(user) { return { type: homeConstants.RETAILER_REQUEST, user }}
    function success(fetchRetailer) { return { type: homeConstants.RETAILER_SUCCESS, fetchRetailer }}
    function failure(error) { return { type: homeConstants.RETAILER_FAILURE, error }}
}

function fetchFuel(ro_id, dealer_id) {
    return dispatch => {
        dispatch(request());
        homeService.fetchFuel(ro_id, dealer_id)
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

    function request(user) { return { type: homeConstants.FUEL_REQUEST, user }}
    function success(fetchFuel) { return { type: homeConstants.FUEL_SUCCESS, fetchFuel }}
    function failure(error) { return { type: homeConstants.FUEL_FAILURE, error }}
}

function fetchFuelPrice(ro_id,dealer_id,product_id) {
    return dispatch => {
        dispatch(request());
        homeService.fetchFuelPrice(ro_id,dealer_id,product_id)
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

    function request(user) { return { type: homeConstants.FUEL_PRICE_REQUEST, user }}
    function success(fetchFuelPrice) { return { type: homeConstants.FUEL_PRICE_SUCCESS, fetchFuelPrice }}
    function failure(error) { return { type: homeConstants.FUEL_PRICE_FAILURE, error }}
}

function fetchDeliveryTax(ro_id,dealer_id,product_id) {
    return dispatch => {
        dispatch(request());
        homeService.fetchDeliveryTax(ro_id,dealer_id,product_id)
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

    function request(user) { return { type: homeConstants.DELIVERY_TAX_REQUEST, user }}
    function success(fetchDeliveryTax) { return { type: homeConstants.DELIVERY_TAX_SUCCESS, fetchDeliveryTax }}
    function failure(error) { return { type: homeConstants.DELIVERY_TAX_FAILURE, error }}
}

function scheduleDelivery(store) {
    return dispatch => {
        dispatch(request());
        homeService.scheduleDelivery(store)
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

    function request(user) { return { type: homeConstants.SCHEDULE_DELIVERY_REQUEST, user }}
    function success(scheduleDelivery) { return { type: homeConstants.SCHEDULE_DELIVERY_SUCCESS, scheduleDelivery }}
    function failure(error) { return { type: homeConstants.SCHEDULE_DELIVERY_FAILURE, error }}
}

function fetchTimeSlots() {
    return dispatch => {
        dispatch(request());
        homeService.fetchTimeSlots()
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

    function request(user) { return { type: homeConstants.TIME_SLOTS_REQUEST, user }}
    function success(timeSlots) { return { type: homeConstants.TIME_SLOTS_SUCCESS, timeSlots }}
    function failure(error) { return { type: homeConstants.TIME_SLOTS_FAILURE, error }}
}

function fetchPaymentMode() {
    return dispatch => {
        dispatch(request());
        homeService.fetchPaymentMode()
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

    function request(user) { return { type: homeConstants.PAYMENT_MODE_REQUEST, user }}
    function success(paymentMode) { return { type: homeConstants.PAYMENT_MODE_SUCCESS, paymentMode }}
    function failure(error) { return { type: homeConstants.PAYMENT_MODE_FAILURE, error }}
}
