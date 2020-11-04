import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { userDatabaseReducer } from "./userDatabaseReducer";

const rootReducer = combineReducers({
  userDatabase: userDatabaseReducer,
  user: userReducer,
});

export default rootReducer;
