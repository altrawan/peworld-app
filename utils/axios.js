import axios from 'axios';
import Cookies from 'js-cookie';
import { NODE_ENV, API_DEV, API_PROD } from '../helpers/env';

const axiosInterceptors = axios.create({
  baseURL: `${NODE_ENV === 'development' ? API_DEV : API_PROD}`,
});

axiosInterceptors.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${Cookies.get('token')}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInterceptors.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403) {
      Cookies.remove('token');
      localStorage.clear();
      if (Cookies.get('token')) {
        alert(error.response.data.msg);
        window.location.href = '/worker/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptors;
