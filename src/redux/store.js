import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import locationsReducer from "./actions";
import logger from "redux-logger";

const rootReducer = combineReducers({
  locations: locationsReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

const persisterReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({
  reducer: persisterReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
let persistor = persistStore(store);
export default { store, persistor };
