import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useMenuContext from './context/useMenuContext';

const useMobileMenu = () => {
  const hamburgerRef = useRef(null);
  const menuRef = useRef(null);
  const params = useLocation();

  const {
    displayMenu,
    setDisplayMenu,
    currentIndex,
    isDisplay,
    className,
    initialState,
    dispatch,
    btnRefs,
    submenuRefs,
  } = useMenuContext();

  function toggleVisibility(menu) {
    menu.classList.toggle(className);
  }

  function hideSubmenu(menu) {
    // console.log(menu);

    menu.classList.toggle(className);
  }

  function displaySubmenu(menu) {
    menu.classList.add(className);
  }

  function handleClick(index) {
    if (index === currentIndex && isDisplay) {
      toggleVisibility(submenuRefs.current[index]);
      dispatch({
        type: 'reset',
        payload: initialState,
      });
    } else if (currentIndex === -1) {
      dispatch({
        type: 'index',
        payload: index,
      });
    } else {
      toggleVisibility(submenuRefs.current[currentIndex]);
      dispatch({
        type: 'index',
        payload: index,
      });
    }
  }

  useEffect(() => {
    if (currentIndex !== -1) {
      toggleVisibility(submenuRefs.current[currentIndex]);
      dispatch({
        type: 'display',
        payload: true,
      });
    }
  }, [currentIndex]);

  // hide menu on location change
  useEffect(() => {
    if (displayMenu) {
      setDisplayMenu(false);
    }
  }, [params]);

  // handle hamburger animation & mobile menu visibility
  useEffect(() => {
    if (displayMenu) {
      // set hamburger animation from stack to X [opened]
      hamburgerRef.current?.setAttribute('aria-expanded', 'true');
      menuRef.current?.classList.add('mobile-menu');
    } else {
      // set hamburger animation from X to stack [closed]
      hamburgerRef.current?.setAttribute('aria-expanded', 'false');
      menuRef.current?.classList.remove('mobile-menu');

      if (isDisplay) {
        toggleVisibility(submenuRefs.current[currentIndex]);
        dispatch({
          type: 'reset',
          payload: initialState,
        });
      }
    }
  }, [displayMenu]);

  // handle submenu btn and menu

  return { hamburgerRef, menuRef, handleClick };
};

export default useMobileMenu;
