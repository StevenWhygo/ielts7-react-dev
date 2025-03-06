import { useState, useEffect, useReducer, createContext, useRef } from 'react';
import { menuReducer } from '../hooks/services/menuReducer';
export const MenuContext = createContext(null);

const initialState = {
  currentIndex: -1,
  previousIndex: -1,
  delay: 500,
};

export const MenuProvider = ({ children }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const btnRefs = useRef([]);
  const submenuRefs = useRef([]);

  const [state, dispatch] = useReducer(menuReducer, initialState);

  const { currentIndex, previousIndex, delay } = state;

  return (
    <MenuContext.Provider
      value={{
        displayMenu,
        setDisplayMenu,
        currentIndex,
        previousIndex,
        delay,
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