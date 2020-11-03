export const REGISTER_USER = "REGISTER_USER";

const initialState = {
  name: '',
  email: '',
  password: ''
};

export const userReducer = (state = initialState, action) => {
  if (action.type === REGISTER_USER) {
    return [...state, action.payload];
  }
  return state;
};
