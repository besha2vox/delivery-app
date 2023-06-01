export const selectCartList = state => state.cart.items;

export const selectOrderedQuantity = state =>
  state.cart.items.reduce((acc, { orderedQuantity }) => {
    acc += orderedQuantity;
    return acc;
  }, 0);

export const selectOrderPrice = state =>
  state.cart.items.reduce((acc, { price, orderedQuantity }) => {
    acc += price * orderedQuantity;
    return acc;
  }, 0);

export const selectUserInfo = state => state.cart.userInfo;

export const selectIsOrderLoading = state => state.cart.isLoading;

export const selectOrderList = state => state.cart.order;
