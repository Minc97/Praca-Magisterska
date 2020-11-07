import md5 from 'md5';
import store from './store';
import { LOGIN_USER, REGISTER_USER } from './types';

export const registerUser = (formValues) => {
  const protectedFormValues = { ...formValues };
  protectedFormValues.password = md5(protectedFormValues.password);
  return {
    type: REGISTER_USER,
    payload: protectedFormValues,
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
  }
  return {
    type: LOGIN_USER,
    payload: protectedFormValues,
  };
};
