import md5 from 'md5';
import store from './store';
import { LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER } from './types';

export const registerUser = (formValues) => {
  const protectedFormValues = { ...formValues };
  protectedFormValues.password = md5(protectedFormValues.password);
  return {
    type: REGISTER_USER,
    payload: protectedFormValues,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: { authenticated: false, password: '' },
  };
};

export const loginAttempt = (formValues) => {
  const protectedFormValues = { ...formValues };
  protectedFormValues.password = md5(protectedFormValues.password);
  if (
    store.getState().userDatabase.email === protectedFormValues.email &&
    store.getState().userDatabase.password === protectedFormValues.password
  ) {
    protectedFormValues.name = store.getState().userDatabase.name;
    protectedFormValues.authenticated = true;
    protectedFormValues.loginError = false;

    return {
      type: LOGIN_USER_SUCCESS,
      payload: protectedFormValues,
    };
  }
  return {
    type: LOGIN_USER_FAILED,
    payload: { loginError: true },
  };
};
