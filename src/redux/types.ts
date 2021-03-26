export const REGISTER_USER_PERSONAL_DATA = '@@registration/REGISTER_USER_PERSONAL_DATA';
export const REGISTER_USER_MODEL = '@@registration/REGISTER_USER_MODEL';
export const LOGOUT_USER = '@@auth/LOGOUT_USER';
export const LOGIN_USER_ATTEMPT = '@@auth/LOGIN_USER_ATTEMPT';
export const LOGIN_USER_SUCCESS = '@@auth/LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = '@@auth/LOGIN_USER_FAILED';
export const CHANGE_AUTH_STATE = '@@auth/CHANGE_AUTH_STATE';

export interface RegisterValues {
  name: string;
  email: string;
  password: string;
}

export type RegisterModel = {
  faceModel: string;
};

export interface LoginValues {
  email: string;
  password: string;
}

export interface User {
  id: number | null;
  name?: string;
  email?: string;
  loginError: boolean;
  loadingForm: boolean;
}

export interface UserDatabase {
  name?: string;
  email?: string;
  password?: string;
  faceModel?: any;
  error: any;
}

export type Auth = {
  auth: boolean;
};
