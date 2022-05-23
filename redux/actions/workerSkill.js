import axios from '../../utils/axios';

export const getDetailUser = (id) => {
  return {
    type: 'GET_WORKER_SKILL',
    payload: axios({
      url: `worker-skill/${id}`,
      method: 'GET',
    }),
  };
};
