export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'initialize':
      return {
        ...state,
        currentIndex: action.payload.index,
        displaySubmenu: action.payload.display,
      };
    case 'update':
      return {
        ...state,
        currentIndex: action.payload.index,
        delay: action.payload.delay,
      };
    case 'reset':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
