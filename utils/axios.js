import axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL } from 'helpers/env';

const axiosInterceptors = axios.create({
  baseURL: `${API_URL}`,
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
        window.location.href = '/auth/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptors;
