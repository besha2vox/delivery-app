import { instance } from 'shared/api/apiDefault';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/addToCart', data => ({
  payload: data,
}));

export const changeOrderedQuantity = createAction(
  'cart/changeOrderedQuantity',
  data => ({
    payload: data,
  })
);

export const removeFromCart = createAction('cart/removeFromCart', id => ({
  payload: id,
}));

export const changeUserInfo = createAction('cart/changeUserInfo', data => ({
  payload: data,
}));

export const makeOrder = createAsyncThunk(
  'cart/makeOrder',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/api/order/`, credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
