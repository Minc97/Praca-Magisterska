import { LOGIN_USER } from "./types";

const initialState = {
  name: "",
  email: "",
  password: "",
  faceModel: "",
  authenticated: false,
};

export const userReducer = (state = initialState, action) => {
  if (action.type === LOGIN_USER) {
    return { ...state, ...action.payload };
  }
  return state;
};
