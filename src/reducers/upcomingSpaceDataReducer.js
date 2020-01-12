export const upcomingSpaceDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_UPCOMING_SPACE_DATA':
      return [...action.upcomingSpaceData];
    default:
      return state;
  }
};
