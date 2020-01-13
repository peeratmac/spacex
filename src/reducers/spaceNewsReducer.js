export const spaceNewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SPACE_NEWS':
      return [...action.spaceNews];
    default:
      return state;
  }
};
