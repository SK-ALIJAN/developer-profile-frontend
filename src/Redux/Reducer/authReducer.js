import { logoutUser, userLogin, userSignup } from "../actionType";

let initialState = {
  data:  {},
  isAuth: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userSignup:
      localStorage.setItem("auth", JSON.stringify(payload));
      return {
        ...state,
        data: payload,
      };
    case userLogin:
      return { ...state, isAuth: true };
    case logoutUser:
      return { ...state, ...initialState };

    default:
      return state;
  }
};

export default authReducer;
