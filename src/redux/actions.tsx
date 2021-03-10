import md5 from 'md5';
import store from './store';
import {
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_PERSONAL_DATA,
  REGISTER_USER_MODEL,
  LoginValues,
  RegisterValues,
  RegisterModel,
  User,
} from './types';
import { ThunkDispatch } from 'redux-thunk';
import { api } from '../apis/api';

export const registerUser = (formValues: RegisterValues) => {
  const protectedFormValues: RegisterValues = {
    name: formValues.name,
    email: formValues.email,
    password: md5(formValues.password),
  };
  return {
    type: REGISTER_USER_PERSONAL_DATA,
    payload: protectedFormValues,
  };
};

export const registerUserModel = (formValues: RegisterModel) => async (
  dispatch: ThunkDispatch<any, any, any>,
  getState: any
) => {
  const name = getState().userRegister.name;
  const email = getState().userRegister.email;
  const password = getState().userRegister.password;
  const response = await api.post('./register', { name, email, password, faceModel: formValues });
  dispatch({ type: REGISTER_USER_MODEL, payload: { ...response.data, faceModel: formValues } });
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: { authenticated: false, password: '' },
  };
};

export const loginAttempt = (formValues: LoginValues & User) => {
  const protectedFormValues = { ...formValues };
  protectedFormValues.password = md5(protectedFormValues.password);
  if (
    store.getState().user.email === protectedFormValues.email &&
    store.getState().user.password === protectedFormValues.password
  ) {
    protectedFormValues.name = store.getState().user.name;
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
