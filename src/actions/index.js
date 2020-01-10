export const addSpaceData = spaceData => ({
  type: 'ADD_SPACE_DATA',
  spaceData: spaceData
});

export const saveFavorites = favorites => ({
  type: 'SAVE_FAVORITES',
  favorites: favorites
});

export const clearFavorites = () => ({
  type: 'CLEAR_FAVORITES',
  favorites: []
});
