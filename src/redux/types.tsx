export const REGISTER_USER = '@@registration/REGISTER_USER';
export const LOGOUT_USER = '@@user/LOGOUT_USER';
export const LOGIN_USER_SUCCESS = '@@auth/LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = '@@auth/LOGIN_USER_FAILED';

export interface RegisterValues {
  name: string,
  password: string,
  email: string
}

export interface LoginValues {
  email: string,
  password: string
}

export interface User {
  name?: string
  email?: string,
  password?: string,
  faceModel?: any,
  authenticated: boolean,
  loginError: boolean,
}

export interface UserDatabase {
  name?: string,
  email?: string,
  password?: string,
  selectedMethod?: any,
  faceModel?: any,
}