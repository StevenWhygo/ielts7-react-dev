import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useViewport from './context/useViewport'

const useMobileMenu = () => {
  const {displayMenu, setDisplayMenu} = useViewport();

  const menuRef = useRef(null);
  const submenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const params = useLocation()
 
  useEffect(() => {
    if(displayMenu) {
      setDisplayMenu(false)
    }
  }, [params])
    
  useEffect(() => {    
    // Set hamburger animation from stack to X [opened]
    if (displayMenu) {
      hamburgerRef.current?.setAttribute('aria-expanded', 'true');
      menuRef.current?.classList.add('mobile-menu');
    }
    // Set hamburger animation from X to stack [closed]
    else {
      hamburgerRef.current?.setAttribute('aria-expanded', 'false');
      menuRef.current?.classList.remove('mobile-menu');
    }
  }, [displayMenu]);
    
  return {hamburgerRef, menuRef} 
};

export default useMobileMenu;
