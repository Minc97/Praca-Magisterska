import md5 from 'md5';
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
  LOGIN_USER_ATTEMPT,
  CHANGE_AUTH_STATE,
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

  try {
    const response = await api.post('/signup', { name, email, password, faceModel: formValues.faceModel, emotionMethod: formValues.emotionMethod });
    if (response.status === 409) {
      dispatch({ type: REGISTER_USER_MODEL, payload: { error: response.data } });
    }
    dispatch({ type: REGISTER_USER_MODEL, payload: { ...response.data, error: null } });
  } catch (e) {
    dispatch({ type: REGISTER_USER_MODEL, payload: { error: e } });
  }
};

export const logoutUser = () => async (dispatch: ThunkDispatch<any, any, any>) => {
  const response = await api.post('/logout');
  dispatch({ type: LOGOUT_USER, payload: { name: '', email: '', id: null } });
  dispatch({ type: CHANGE_AUTH_STATE, payload: { ...response.data } });
};

export const loginAttempt = (formValues: LoginValues & User, capturedFace: string) => async (
  dispatch: ThunkDispatch<any, any, any>
) => {
  const password = md5(formValues.password);
  const email = formValues.email;
  dispatch({ type: LOGIN_USER_ATTEMPT, payload: { loginError: false, e: null, loadingForm: true } });
  try {
    const response = await api.post('/login', { email, password, capturedFace });
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: {
        name: response.data?.name,
        email: response.data?.email,
        id: response.data?.id,
        loginError: false,
        loadingForm: false,
      },
    });
    dispatch({ type: CHANGE_AUTH_STATE, payload: { auth: response.data?.authenticated } });
  } catch (e) {
    dispatch({ type: LOGIN_USER_FAILED, payload: { loginError: true, e, loadingForm: false } });
  }
};
