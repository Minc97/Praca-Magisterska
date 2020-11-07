import { REGISTER_USER } from "./types";

const initialState = {
  name: "",
  email: "",
  password: "",
  selectedMethod: "",
  faceModel: "",
};

export const userDatabaseReducer = (state = initialState, action) => {
  if (action.type === REGISTER_USER) {
    return { ...state, ...action.payload };
  }
  return state;
};
