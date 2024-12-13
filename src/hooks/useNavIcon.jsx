import { useEffect } from 'react';
import useNavContext from './contextHooks/useNavContext';
// import useAuthContext from './contexthooks/useAuthContext';
import useViewportContext from './contextHooks/useViewportContext';

// Handles control of Navbar buttons @ MainHeader
const useNavIcon = () => {
  const { dispatch, displayMenu } = useNavContext();

  const { isMobile } = useViewportContext();
  // const { isAuth } = useAuthContext();

  function handleHamburger(open) {
    if (open && !displayMenu) {
      handleMenu(true);
    }
    if (!open && displayMenu) {
      handleMenu(false);
    }
  }

  function handleMenu(displayMenu) {
    if (displayMenu) {
      dispatch({
        type: 'menu',
        payload: {
          displayMenu: true,
          openHamburger: true,
        },
      });
    } else {
      dispatch({
        type: 'menu',
        payload: {
          displayMenu: false,
          openHamburger: false,
        },
      });
    }
  }

  // function handleAuthMenu(display) {
  //   if (!display) {
  //     dispatch({
  //       type: 'auth-menu',
  //       payload: false,
  //     });
  //   } else {
  //     dispatch({
  //       type: 'auth-menu',
  //       payload: true,
  //     });
  //   }
  // }

  useEffect(() => {
    const navHandler = (e) => {
      if (!isMobile && displayMenu) {
        handleMenu(false);
        // if (isAuth) {
        //   if (e.target.id !== 'auth-btn') {
        //     handleAuthMenu(false);
        //   }
        // } else {
        //   if (e.target.id !== 'hamburger-btn') {
        //     handleMenu(false);
        //   }
        // }
        if (e.target.id !== 'hamburger') {
          handleMenu(false);
        }
      }

      if (isMobile && displayMenu) {
        if (e.target.id !== 'hamburger') {
          handleMenu(false);
        }
      }
    };

    document.body.addEventListener('click', navHandler);

    return () => {
      document.body.removeEventListener('click', navHandler);
    };
  }, [displayMenu]);

  return { handleMenu, handleHamburger };
  // return { handleMenu, handleHamburger, handleAuthMenu };
};

export default useNavIcon;
