import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { locationsSlice, hiveSlice } from "./actions";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  locations: locationsSlice.reducer,
  hives: hiveSlice.reducer,
});

const persistConfig = {
  key: "root2",
  version: 1,
  storage: AsyncStorage,
};

const persisterReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({
  reducer: persisterReducer,
  middleware: [thunk, logger], //(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

let persistor = persistStore(store);
export default { store, persistor };
