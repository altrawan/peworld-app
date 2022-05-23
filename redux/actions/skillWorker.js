import axios from '../../utils/axios';

export const getDetailSkill = (id) => {
  return {
    type: 'GET_DETAIL_SKILL',
    payload: axios({
      url: `worker-skill/${id}`,
      method: 'GET',
    }),
  };
};
