import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/addToCart', data => ({
  payload: data,
}));

export const increment = createAction('cart/increment', id => ({
  payload: id,
}));

export const decrement = createAction('cart/decrement', id => ({
  payload: id,
}));

export const removeFromCart = createAction('cart/removeFromCart', id => ({
  payload: id,
}));
