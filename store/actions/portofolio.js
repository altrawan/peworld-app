import axios from 'utils/axios';

export const deletePortofolio = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`portofolio/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
