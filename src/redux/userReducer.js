import { LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, LOGOUT_USER } from './types';

const initialState = {
  name: '',
  email: '',
  password: '',
  faceModel: '',
  authenticated: false,
  loginError: false,
};

export const userReducer = (state = initialState, action) => {
  if (action.type === LOGIN_USER_SUCCESS) {
    return { ...state, ...action.payload };
  }
  if (action.type === LOGIN_USER_FAILED) {
    return { ...state, ...action.payload };
  }
  if (action.type === LOGOUT_USER) {
    return { ...state, ...action.payload };
  }
  return state;
};
