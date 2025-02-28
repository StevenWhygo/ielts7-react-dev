export const menuReducer = (state, action) => {
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
      //   case 'open':
      //     return {
      //       ...state,
      //       ...action.payload,
      //     };
      //   case 'menu':
      //     return {
      //     ...state,
      //       currentMenu: action.payload
      //     };
      //   case 'button':
      //     return {
      //       ...state,
      //       currentBtn: action.payload,
      //     }
      //   case 'close':
      //     return {
      //       ...state,
      //       ...action.payload
      //     }
      default:
        return null;
    }
  };