import { REGISTER_USER_MODEL, REGISTER_USER_PERSONAL_DATA, UserDatabase } from './types';

const initialState: UserDatabase = {
  name: '',
  email: '',
  password: '',
  selectedMethod: '',
  faceModel: '',
  error: null,
};

export const userRegister = (state = initialState, action: { type: string; payload: any; }) => {
  if (action.type === REGISTER_USER_PERSONAL_DATA) {
    return { ...state, ...action.payload };
  }
  if (action.type === REGISTER_USER_MODEL) {
    return {...state, ...action.payload }
  }
  return state;
};
