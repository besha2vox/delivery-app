import { createSlice } from '@reduxjs/toolkit';
import {
  addToCart,
  changeOrderedQuantity,
  removeFromCart,
  changeUserInfo,
  makeOrder,
} from './operations';

const userInitialValue = { name: '', phone: '', email: '', address: '' };

const initialState = {
  items: [],
  userInfo: userInitialValue,
  currentShop: null,
  order: null,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addToCart, (state, { payload }) => {
        if (state.items.some(({ _id }) => _id === payload._id)) {
          const indx = state.items.findIndex(({ _id }) => _id === payload._id);
          state.items[indx].orderedQuantity += 1;
          return;
        }
        state.items.push({ ...payload, orderedQuantity: 1 });
        state.currentShop = payload.shop;
      })
      .addCase(changeOrderedQuantity, (state, { payload }) => {
        const indx = state.items.findIndex(({ _id }) => _id === payload._id);
        state.items[indx].orderedQuantity = payload.orderedQuantity;
      })
      .addCase(removeFromCart, (state, { payload }) => {
        const indx = state.items.findIndex(({ _id }) => _id === payload);
        state.items.splice(indx, 1);
        if (state.items.length < 1) {
          state.currentShop = null;
        }
      })
      .addCase(changeUserInfo, (state, { payload }) => {
        state.userInfo = payload;
      })
      .addCase(makeOrder.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(makeOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.order = payload;
        state.items = [];
        state.currentShop = null;
      })
      .addCase(makeOrder.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const cartRedcer = cartSlice.reducer;
