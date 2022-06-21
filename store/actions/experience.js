import axios from 'utils/axios';

export const deleteExperience = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`experience/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
