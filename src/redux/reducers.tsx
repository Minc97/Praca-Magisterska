import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { userReducer } from "./userReducer";
import { userRegister } from "./userRegister";

const rootReducer = combineReducers({
  userRegister: userRegister,
  user: userReducer,
  form: formReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
