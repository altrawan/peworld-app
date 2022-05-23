import axios from '../../utils/axios';

export const getAllWorker = (page, limit, sort, sortType) => {
  return {
    type: 'GET_ALL_WORKER',
    payload: axios({
      method: 'GET',
      url: `worker?page=${page}&limit=${limit}&sort=${sort}&sortType=${sortType}`,
    }),
  };
};
