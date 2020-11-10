import { REGISTER_USER, UserDatabase } from './types';

const initialState: UserDatabase = {
  name: '',
  email: '',
  password: '',
  selectedMethod: '',
  faceModel: '',
};

export const userDatabaseReducer = (state = initialState, action: { type: string; payload: any; }) => {
  if (action.type === REGISTER_USER) {
    return { ...state, ...action.payload };
  }
  return state;
};
