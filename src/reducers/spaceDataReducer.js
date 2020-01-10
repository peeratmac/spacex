export const spaceDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SPACE_DATA':
      return [...action.spaceData];
    default:
      return state;
  }
};
