import axios from '../../utils/axios';

export const getDetailUser = (id) => {
  return {
    type: 'GET_DETAIL_USER',
    payload: axios({
      url: `worker/${id}`,
      method: 'GET',
    }),
  };
};
