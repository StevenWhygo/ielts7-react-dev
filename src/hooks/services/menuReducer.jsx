export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'initialize':
      return {
        ...state,
        currentIndex: action.payload.current,
        displaySubmenu: action.payload.display,
      };
    case 'update':
      return {
        ...state,
        currentIndex: action.payload.current,
        previousIndex: action.payload.previous,
      };
    case 'reset':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
