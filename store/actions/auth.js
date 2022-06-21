import axios from 'utils/axios';

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

export const registerWorker = (data) => {
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

export const registerRecruiter = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post('auth/register-recruiter', data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
