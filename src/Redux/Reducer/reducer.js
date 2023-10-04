import {
  getJobListError,
  getJobListRequest,
  getJobListSuccess,
} from "../actionType";

let initialState = {
  isLoading: false,
  data: [],
  isError: false,
  ErrorMessage: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case getJobListRequest:
      return {
        ...state,
        isLoading: true,
      };
    case getJobListSuccess:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
        ErrorMessage: "",
      };
    case getJobListError:
      return {
        ...state,
        isLoading: false,
        isError: true,
        ErrorMessage: payload,
      };

    default:
      return state;
  }
};

export default reducer;
