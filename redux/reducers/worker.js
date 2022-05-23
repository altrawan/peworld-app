const initialState = {
  data: [],
  pageInfo: {},
  isError: false,
  isLoading: false,
  message: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'GET_DETAIL_USER_PENDING':
      return {
        ...state,
        isError: false,
        isLoading: true,
        message: '',
      };
    case 'GET_DETAIL_USER_FULFILLED':
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data,
        message: action.payload.data.message,
      };
    case 'GET_DETAIL_USER_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: action.payload.response.data.message,
      };
    }
    default:
      return state;
  }
}
