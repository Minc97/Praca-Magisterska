import { Auth, CHANGE_AUTH_STATE } from './types';

const initialState: Auth = {
  auth: false,
};

export const authReducer = (state = initialState, action: { type: string; payload: any; }) => {
  if (action.type === CHANGE_AUTH_STATE) {
    return { ...state, ...action.payload };
  }
  return state;
};