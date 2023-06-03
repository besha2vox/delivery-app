import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getByCategory, getById, getAllBySHopId } from './operations';

const initialState = {
  items: [],
  totalHints: 0,
  page: 1,
  currentDish: [],
  isLoading: false,
  error: null,
};

const menuSlice = createSlice({
  name: 'shop',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllBySHopId.fulfilled, (state, { payload }) => {
        state.page = Number(payload.page);
        if (state.page > 1) {
          state.items = [...state.items, ...payload.menu];
        } else {
          state.items = payload.menu;
        }
        state.totalHints = payload.totalHints;
      })
      .addCase(getByCategory.fulfilled, (state, { payload }) => {
        if (state.page > 1) {
          state.items = [...state.items, ...payload.menu];
        } else {
          state.items = payload.menu;
        }
        state.totalHints = payload.totalHints;
        state.page = Number(payload.page);
      })
      .addCase(getById.fulfilled, (state, { payload }) => {
        state.currentDish = payload;
      })
      .addMatcher(
        isAnyOf(getByCategory.pending, getById.pending, getAllBySHopId.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getByCategory.fulfilled,
          getById.fulfilled,
          getAllBySHopId.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getByCategory.rejected,
          getById.rejected,
          getAllBySHopId.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const menuRedcer = menuSlice.reducer;
