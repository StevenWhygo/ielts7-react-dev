import { useEffect } from 'react';
import useMenuContext from './context/useMenuContext';

const useSubmenu = (index) => {
  const {
    displayMenu,
    setDisplayMenu,
    currentIndex,
    previousIndex,
    delay,
    dispatch,
    initialState,
    btnRefs,
    submenuRefs,
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

  // animate expand btn & display/hide submenu on current index change
  useEffect(() => {
    if (currentIndex === index) {
      // is current : open
      if (previousIndex === -1) {
        btnRefs.current[index].setAttribute('aria-expanded', 'true');
        submenuRefs.current[index].style.maxHeight = '100vh';
      } else {
        setTimeout(() => {
          btnRefs.current[index].setAttribute('aria-expanded', 'true');
          submenuRefs.current[index].style.maxHeight = '100vh';
        }, delay);
      }
    } else if (previousIndex === index) {
      // is previous : close
      btnRefs.current[index].setAttribute('aria-expanded', 'false');
      submenuRefs.current[index].style.maxHeight = '0';
    } else {
      // reset : close
      btnRefs.current[index].setAttribute('aria-expanded', 'false');
      submenuRefs.current[index].style.maxHeight = '0';
    }
  }, [currentIndex, previousIndex, index]);

  useEffect(() => {
    if (!displayMenu) {
      dispatch({
        type: 'reset',
        payload: initialState,
      });
    }
  }, [displayMenu]);

  return { handleClick };
};

export default useSubmenu;
