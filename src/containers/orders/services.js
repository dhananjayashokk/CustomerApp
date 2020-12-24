import { AxiosHeader } from '../../helper/helper';

export const orderService = {
	order,
  fetchFuelAsset,
};

function order(custid) {
  const requestOptions = AxiosHeader();
  return requestOptions
    .get(`show_orders?custid=${custid}&admin_id=1`)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

function fetchFuelAsset() {
  const requestOptions = AxiosHeader();
  return requestOptions
    .get(`get_fuel_types_asset_creation?product_id=1`)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      return error.response;
    });
}