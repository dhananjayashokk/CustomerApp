import { AxiosHeader } from '../../helper/helper';

export const profileService = {
	profile,
};

function profile(custid,admin_id) {
  const requestOptions = AxiosHeader();
  return requestOptions
    .get(`/show_profile?custid=${1}&admin_id=${1}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

function handleResponse(response) {
  let user = response.data;
  return response;
}