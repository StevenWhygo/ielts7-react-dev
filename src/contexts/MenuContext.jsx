import { useState, useEffect, useReducer, createContext, useRef } from 'react';
import { menuReducer } from '../hooks/services/menuReducer';
export const MenuContext = createContext(null);

const initialState = {
  currentIndex: -1,
  previousIndex: -1,
  delay: 500,
  className: 'mobile-submenu',
};

export const MenuProvider = ({ children }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const btnRefs = useRef([]);
  const submenuRefs = useRef([]);

  const [state, dispatch] = useReducer(menuReducer, initialState);

  const { currentIndex, previousIndex, displaySubmenu, delay, className } =
    state;

  return (
    <MenuContext.Provider
      value={{
        displayMenu,
        setDisplayMenu,
        currentIndex,
        previousIndex,
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