import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./module/index";

const persistConfig = {
  key: "runningWaterTodo",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {
    store,
    persistor
  };
};
