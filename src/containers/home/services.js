import { AxiosHeader } from '../../helper/helper';

export const homeService = {
  home,
  fetchRetailer,
  fetchFuel,
  fetchFuelPrice,
  fetchDeliveryTax,
  scheduleDelivery,
  fetchTimeSlots,
  fetchPaymentMode
};

function home(custid,) {
  const requestOptions = AxiosHeader();
  return requestOptions
    .get(`fetch_assets?custid=${custid}&admin_id=1`)
    .then(response => {
      console.log(response,"here")
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

function fetchRetailer(custid) {
  const requestOptions = AxiosHeader();
  return requestOptions
    .get(`get_serviceable_ros?asset_id=1&admin_id=1`)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

function fetchFuel(ro_id, dealer_id) {
  const requestOptions = AxiosHeader();
  return requestOptions
    .get(`get_fuel_types?dealer_id=${dealer_id}&ro_id=${ro_id}&admin_id=1`)
    .then(response => {
      console.log('res', response)
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

function fetchFuelPrice(ro_id,dealer_id,product_id) {
  const requestOptions = AxiosHeader();
  return requestOptions
    .get(`get_fuel_prices?dealer_id=${dealer_id}&ro_id=${ro_id}&product_id=${product_id}&admin_id=1`)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

function fetchDeliveryTax(ro_id,dealer_id,product_id) {
  const requestOptions = AxiosHeader();
  return requestOptions
    .get(`get_delivery_taxes?dealer_id=${dealer_id}&ro_id=${ro_id}&product_id=${product_id}&admin_id=1`)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

function scheduleDelivery(payload) {
  const requestOptions = AxiosHeader();
  return requestOptions
    .post('add_order',payload)
    .then(response => {
      console.log(response,"scheduleDelivery")
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

function fetchTimeSlots() {
  const requestOptions = AxiosHeader();
  return requestOptions
  .get(`get_time_slots?admin_id=1`)
  .then(response => {
    return response;
  })
  .catch(error => {
    return error.response;
  });
}

function fetchPaymentMode() {
  const requestOptions = AxiosHeader();
  return requestOptions
  .get(`get_payment_mode?admin_id=1`)
  .then(response => {
    return response;
  })
  .catch(error => {
    return error.response;
  });
}