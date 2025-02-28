import { useState, useEffect, useReducer, createContext, useRef } from 'react';
import { menuReducer } from '../hooks/services/menuReducer';
export const MenuContext = createContext(null);

const initialState = {
  currentIndex: -1,
  displaySubmenu: false,
  delay: 0,
  className: 'mobile-submenu',
};

export const MenuProvider = ({ children }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const btnRefs = useRef([]);
  const submenuRefs = useRef([]);

  const [state, dispatch] = useReducer(menuReducer, initialState);

  const { currentIndex, displaySubmenu, delay, className } = state;

  return (
    <MenuContext.Provider
      value={{
        displayMenu,
        setDisplayMenu,
        currentIndex,
        displaySubmenu,
        delay,
        className,
        dispatch,
        initialState,
        btnRefs,
        submenuRefs,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};