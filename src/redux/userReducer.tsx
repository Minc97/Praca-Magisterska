import { LOGIN_USER_ATTEMPT, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, LOGOUT_USER, User } from './types';

const initialState: User = {
  name: '',
  email: '',
  faceModel: '',
  authenticated: false,
  loginError: false,
  loadingForm: false,
};

export const userReducer = (state = initialState, action: { type: string; payload: any; }) => {
  if (action.type === LOGIN_USER_ATTEMPT) {
    return { ...state, ...action.payload };
  }
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
