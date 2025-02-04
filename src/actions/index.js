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

export const addUpcomingSpaceData = upcomingSpaceData => ({
  type: 'ADD_UPCOMING_SPACE_DATA',
  upcomingSpaceData: upcomingSpaceData
});

export const addSpaceNews = spaceNews => ({
  type: 'ADD_SPACE_NEWS',
  spaceNews: spaceNews
});
