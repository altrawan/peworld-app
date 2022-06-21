import {
  GET_DETAIL_RECRUITER_PENDING,
  GET_DETAIL_RECRUITER_SUCCESS,
  GET_DETAIL_RECRUITER_FAILED,
} from 'store/types';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null,
  pagination: [],
};

const detailRecruiterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_RECRUITER_PENDING:
      return { ...state, isLoading: true };
    case GET_DETAIL_RECRUITER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    case GET_DETAIL_RECRUITER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailRecruiterReducer;
