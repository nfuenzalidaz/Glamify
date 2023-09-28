import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import productReducer from './Features/productSlice';
import cartReducer from './Features/cartSlice';
import favoriteReducer from './Features/favoriteSlice';
import thunk from 'redux-thunk';

const rootPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  favorite: favoriteReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
