import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getShops, getShopById } from './operations';

const initialState = {
  items: [],
  currentShop: null,
  isLoading: false,
  error: null,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getShops.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(getShopById.fulfilled, (state, { payload }) => {
        state.currentShop = payload;
      })
      .addMatcher(isAnyOf(getShops.pending, getShopById.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getShops.fulfilled, getShopById.fulfilled), state => {
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(getShops.rejected, getShopById.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const shopReducer = shopSlice.reducer;
