import { useEffect } from 'react';
import useMenuContext from './context/useMenuContext';

const useSubmenu = () => {
  const {
    displayMenu,
    currentIndex,
    initialState,
    dispatch,
  } = useMenuContext();

  // submenus handling function
  function handleClick(index) {
    if (index === currentIndex) {
      dispatch({
        type: 'reset',
        payload: initialState,
      });
    } else if (currentIndex === -1) {     
      dispatch({
        type: 'initialize',
        payload: {
          current: index,
        },
      });
    } else {
      dispatch({
        type: 'update',
        payload: {
          current: index,
          previous: currentIndex,
        },
      });
    }
  }

  useEffect(() => {
    if(!displayMenu) {
        dispatch({
          type: 'reset',
          payload: initialState,
        });
    }
  }, [displayMenu])

  return { handleClick };
};

export default useSubmenu;
