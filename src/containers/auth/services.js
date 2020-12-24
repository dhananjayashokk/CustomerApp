import { AxiosHeader } from '../../helper/helper';

export const userService = {
  login,
  getOtp,
  verifyOtp,
  signup,
  reset,
};

function login(payload) {
  const requestOptions = AxiosHeader();
  return requestOptions
    .post('/login_check',payload)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

function getOtp(payload) {
  const requestOptions = AxiosHeader();

  return requestOptions
    .post('/get_otp', payload)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

function verifyOtp(payload) {
  const requestOptions = AxiosHeader();

  return requestOptions
    .post('/verify_otp', payload)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}


function signup(payload) {
  const requestOptions = AxiosHeader();

  return requestOptions
    .post(`/register_customer`, payload)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

function reset(payload) {
  const requestOptions = AxiosHeader();

  return requestOptions
    .post('reset_password', payload)
    .then(response => {
      console.log('reset', response);
      return response;
    })
    .catch(error => {
      return error.response;
    });
}
