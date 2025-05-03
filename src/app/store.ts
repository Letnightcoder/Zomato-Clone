import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import filterReducer from '../features/filter/filterSlice';
import { loadCartFromStorage } from '../utils/localStorage';

// Load initial cart state from localStorage if available
const preloadedState = {
  cart: loadCartFromStorage(),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
  },
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;