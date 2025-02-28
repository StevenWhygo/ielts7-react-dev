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
    displaySubmenu,
    delay,
    className,
    initialState,
    dispatch,
    btnRefs,
    submenuRefs,
  } = useMenuContext();

  function toggleVisibility(menu) {
    menu.classList.toggle(className);
  }

  // submenus handling function
  function handleClick(index) {
    // close submenu & reset state
    if (index === currentIndex && displaySubmenu) {
      toggleVisibility(submenuRefs.current[index]);
      dispatch({
        type: 'reset',
        payload: initialState,
      });
      // update display and index state
    } else if (currentIndex === -1) {
      dispatch({
        type: 'initialize',
        payload: {
          index: index,
          display: true,
        },
      });
    } else {
      // close submenu & update index
      toggleVisibility(submenuRefs.current[currentIndex]);
      dispatch({
        type: 'update',
        payload: {
          index: index,
          delay: 400,
        },
      });
    }
  }

  // open current submenu selected
  useEffect(() => {
    if (currentIndex !== -1) {
      setTimeout(() => {
        toggleVisibility(submenuRefs.current[currentIndex]);
      }, delay);
    }
  }, [currentIndex, delay]);

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

      if (displaySubmenu) {
        toggleVisibility(submenuRefs.current[currentIndex]);
        dispatch({
          type: 'reset',
          payload: initialState,
        });
      }
    }
  }, [displayMenu]);

  return { hamburgerRef, menuRef, handleClick };
};

export default useMobileMenu;
