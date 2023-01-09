import { configureStore, combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from "@react-native-async-storage/async-storage";
import locationsReducer from './actions';
import logger from 'redux-logger';

const rootReducer = combineReducers({

    locations: locationsReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persisterReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    
  reducer: persisterReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
