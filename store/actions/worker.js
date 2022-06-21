import axios from 'utils/axios';
import {
  GET_DETAIL_WORKER_PENDING,
  GET_DETAIL_WORKER_SUCCESS,
  GET_DETAIL_WORKER_FAILED,
} from 'store/types';

export const getDetailWorker = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_DETAIL_WORKER_PENDING,
      payload: null,
    });

    const response = await axios({
      method: 'get',
      url: `worker/${id}`,
    });

    dispatch({
      type: GET_DETAIL_WORKER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DETAIL_WORKER_FAILED,
      payload: error.message,
    });
  }
};

export const updateUser = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`worker`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updatePhoto = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`worker-image`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
