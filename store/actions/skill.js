import axios from 'utils/axios';

export const addSkill = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`skill`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
