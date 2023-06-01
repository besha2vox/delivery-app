import { createSlice } from '@reduxjs/toolkit';
import { addToCart, increment, decrement, removeFromCart } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'shop',
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
      })
      .addCase(increment, (state, { payload }) => {
        const indx = state.items.findIndex(({ _id }) => _id === payload);
        state.items[indx].orderedQuantity += 1;
      })
      .addCase(decrement, (state, { payload }) => {
        const indx = state.items.findIndex(({ _id }) => _id === payload);
        state.items[indx].orderedQuantity -= 1;
      })
      .addCase(removeFromCart, (state, { payload }) => {
        const indx = state.items.findIndex(({ _id }) => _id === payload);
        state.items.splice(indx, 1);
      });
  },
});

export const cartRedcer = cartSlice.reducer;
