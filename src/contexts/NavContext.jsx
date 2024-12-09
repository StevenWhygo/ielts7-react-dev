import { useEffect, useReducer, useRef, createContext } from 'react';
import { navReducer } from './services/navReducer';

const initialState = {
  displayMenu: false,
  openHamburger: false,
};

export const NavContext = createContext(null);

export const NavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navReducer, initialState);

  const { openHamburger, displayMenu } = state;

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const searchBarRef = useRef(null);
  const cartCountRef = useRef(null);
  const mailCountRef = useRef(null);
  const searchBtnRef = useRef(null);

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

  return (
    <NavContext.Provider
      value={{
        menuRef,
        hamburgerRef,
        searchBarRef,
        cartCountRef,
        mailCountRef,
        searchBtnRef,
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
