export const menuReducer = (state, action) => {
    switch (action.type) {
        case 'display':
        return {
            ...state,
            isDisplay: action.payload
        }
        case 'reset':
        return {
            ...action.payload,
        }
        case 'index':
            return {
                ...state,
                currentIndex: action.payload
            }
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