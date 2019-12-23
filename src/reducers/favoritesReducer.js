export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_FAVORITES':
      return action.favorites;
    default:
      return state;
  }
};

export default favoritesReducer;
