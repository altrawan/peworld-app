import axios from '../../utils/axios';

export const login = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`auth/login`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const register = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post('auth/register-worker', data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
