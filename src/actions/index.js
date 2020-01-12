export const addSpaceData = spaceData => ({
  type: 'ADD_SPACE_DATA',
  spaceData: spaceData
});

export const saveFavorites = favorites => ({
  type: 'SAVE_FAVORITES',
  favorites: favorites
});

export const handleError = errorMessage => ({
  type: 'HANDLE_ERROR',
  errorMessage: errorMessage
});

export const isLoading = loadingStatus => ({
  type: 'IS_LOADING',
  isLoading: loadingStatus
});
