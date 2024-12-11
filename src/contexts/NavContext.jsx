import { useEffect, useReducer, useRef, createContext } from 'react';
import { navReducer } from './services/navReducer';
import useViewportContext from '../hooks/contextHooks/useViewportContext';

const initialState = {
  displayMenu: false,
  openHamburger: false,
};

export const NavContext = createContext(null);

export const NavProvider = ({ children }) => {
  const { isMobile } = useViewportContext();
  const [state, dispatch] = useReducer(navReducer, initialState);

  const { openHamburger, displayMenu } = state;

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const searchBarRef = useRef(null);
  const cartCountRef = useRef(null);
  const mailCountRef = useRef(null);
  // const searchBtnRef = useRef(null);

  useEffect(() => {
    // Set hamburger animation from stack to X [opened]
    if (openHamburger) {
      hamburgerRef.current?.setAttribute('aria-expanded', 'true');
    }
    // Set hamburger animation from X to stack [closed]
    else {
      hamburgerRef.current?.setAttribute('aria-expanded', 'false');
    }
  }, [openHamburger]);

  useEffect(() => {
    if (displayMenu) {
      // Prevent scrolling
      document.body.classList.add('scroll-none');
      // Display site Menu
      if (isMobile) {
        // Hide SearchBtn
        // searchBtnRef.current?.classList.add('d-none');
        console.log('isMobile');

        menuRef.current?.classList.add('mobile-menu');
      } else {
        menuRef.current?.classList.add('d-desktop-menu');
      }
    } else {
      // Allow scrollimg
      document.body.classList.remove('scroll-none');
      // Hide site Menu
      if (isMobile) {
        // Display SearchBtn
        // searchBtnRef.current?.classList.remove('d-none');
        menuRef.current?.classList.remove('mobile-menu');
      } else {
        menuRef.current?.classList.remove('d-desktop-menu');
      }
    }
  }, [displayMenu]);

  return (
    <NavContext.Provider
      value={{
        menuRef,
        hamburgerRef,
        searchBarRef,
        cartCountRef,
        mailCountRef,
        // searchBtnRef,
        displayMenu,
        // displaySearchBar,
        openHamburger,
        dispatch,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
