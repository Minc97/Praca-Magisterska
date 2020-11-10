import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { userReducer } from "./userReducer";
import { userDatabaseReducer } from "./userDatabaseReducer";

const rootReducer = combineReducers({
  userDatabase: userDatabaseReducer,
  user: userReducer,
  form: formReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
