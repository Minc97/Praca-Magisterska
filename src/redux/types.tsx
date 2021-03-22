export const REGISTER_USER_PERSONAL_DATA = '@@registration/REGISTER_USER_PERSONAL_DATA';
export const REGISTER_USER_MODEL = '@@registration/REGISTER_USER_MODEL'
export const LOGOUT_USER = '@@auth/LOGOUT_USER';
export const LOGIN_USER_SUCCESS = '@@auth/LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = '@@auth/LOGIN_USER_FAILED';

export interface RegisterValues {
  name: string,
  email: string
  password: string,
}

export type RegisterModel = {
  faceModel: string
}

export interface LoginValues {
  email: string,
  password: string
}

export interface User {
  name?: string
  email?: string,
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
  error: any
}