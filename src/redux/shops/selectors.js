export const selectAllShops = (state) => state.shops.items;

export const selectCurrentShop = (state) => state.shops.currentShop;

export const selectShopIsLoading = (state) => state.shops.isLoading;

export const selectShopError = (state) => state.shops.error;
