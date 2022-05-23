import axios from '../../utils/axios';

export const getDetailWorker = (id) => {
  return {
    type: 'GET_DETAIL_WORKER',
    payload: axios({
      url: `worker/${id}`,
      method: 'GET',
    }),
  };
};