import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const createAppStore = () => {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

  let store = createStore(persistedReducer, composedEnhancer);
  let persistor = persistStore(store)

  return { store, persistor }
}


export default createAppStore


