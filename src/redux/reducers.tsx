import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { userReducer } from "./userReducer";
import { userRegister } from "./userRegister";
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  userRegister: userRegister,
  user: userReducer,
  auth: authReducer,
  form: formReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
