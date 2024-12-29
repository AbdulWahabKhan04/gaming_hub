import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Default storage (localStorage)
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

// Import your reducers
import userReducer from './Redux/UserSlice.js'; 

// Configure persist
const persistConfig = {
  key: 'root', // Key for storage
  storage, // Default to localStorage
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

// Apply persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
