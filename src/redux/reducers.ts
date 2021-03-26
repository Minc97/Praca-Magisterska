import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { userReducer } from "./userReducer";
import { userRegisterReducer } from "./userRegisterReducer";
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  user: userReducer,
  auth: authReducer,
  form: formReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
