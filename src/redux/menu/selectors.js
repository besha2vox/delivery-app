export const selectMenu = state => state.menu.items;

export const selectCurrentDish = state => state.menu.currentDish;

export const selectMenuIsLoading = state => state.menu.isLoading;

export const selectMenuError = state => state.menu.error;

export const selectTotalHints = state => state.menu.totalHints;
