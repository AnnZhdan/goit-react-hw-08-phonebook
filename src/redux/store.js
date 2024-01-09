import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { phoneBookSlice } from './phoneBook/phoneBookSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authPersistReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authPersistReducer,
  contacts: phoneBookSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
