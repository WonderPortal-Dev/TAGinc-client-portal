export const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      console.log('Hitting reducer');
      return action.payload;
    default:
      return state;
  }
};
