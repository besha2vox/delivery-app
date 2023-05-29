import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getByCategory, getById } from './operations';

const initialState = {
    items: [],
    currentDish: [],
    isLoading: false,
    error: null,
};

const menuSlice = createSlice({
    name: 'shop',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getByCategory.fulfilled, (state, { payload }) => {
                state.items = payload;
            })
            .addCase(getById.fulfilled, (state, { payload }) => {
                state.currentDish = payload;
            })
            .addMatcher(
                isAnyOf(getByCategory.pending, getById.pending),
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                isAnyOf(getByCategory.fulfilled, getById.fulfilled),
                (state) => {
                    state.isLoading = false;
                }
            )
            .addMatcher(
                isAnyOf(getByCategory.rejected, getById.rejected),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            );
    },
});

export const menuRedcer = menuSlice.reducer;
