import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useMenuContext from './context/useMenuContext';
import useLanguageContext from './context/useLanguageContext';

const useMenu = () => {
  const hamburgerRef = useRef(null);
  const menuRef = useRef(null);
  const params = useLocation();

  const { language } = useLanguageContext();

  const { displayMenu, setDisplayMenu } = useMenuContext();

  // hide menu on location change
  useEffect(() => {
    if (displayMenu) {
      setDisplayMenu(false);
    }
  }, [params]);

  useEffect(() => {
    setDisplayMenu(false);
  }, [language]);

  // handle hamburger animation & mobile menu visibility
  useEffect(() => {
    if (displayMenu) {
      // set hamburger animation from stack to X [opened]
      hamburgerRef.current?.setAttribute('aria-expanded', 'true');
      menuRef.current?.classList.add('mobile-menu');
      document.body.classList.add('scroll-none');
    } else {
      // set hamburger animation from X to stack [closed]
      hamburgerRef.current?.setAttribute('aria-expanded', 'false');
      menuRef.current?.classList.remove('mobile-menu');
      document.body.classList.remove('scroll-none');
    }
  }, [displayMenu]);

  return { hamburgerRef, menuRef };
};

export default useMenu;
