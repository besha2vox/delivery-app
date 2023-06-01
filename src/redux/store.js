import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { shopReducer } from './shops/slice';
import { menuRedcer } from './menu/slice';
import { cartRedcer } from './cart/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items', 'userInfo', 'order'],
};

export const store = configureStore({
  reducer: {
    cart: persistReducer(cartPersistConfig, cartRedcer),
    shops: shopReducer,
    menu: menuRedcer,
  },
  middleware,
});

export const persistor = persistStore(store);
