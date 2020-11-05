export const REGISTER_USER = "REGISTER_USER";

const initialState = {
  name: "",
  email: "",
  password: "",
  selectedMethod: "",
  faceModel: "",
  authenticated: false,
};

export const userReducer = (state = initialState, action) => {
  return state;
};
