import axios from '../../utils/axios';

export const getDetailUser = () => {
  return {
    type: 'GET_ALL_SKILL',
    payload: axios({
      url: `worker-skill`,
      method: 'GET',
    }),
  };
};
