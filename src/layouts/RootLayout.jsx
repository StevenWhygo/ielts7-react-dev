import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import Modal from '../features/modal/Modal';
import useModal from '../features/modal/hook/useModal';
import useAuthContext from '../hooks/context/useAuthContext';
import useLanguageContext from '../hooks/context/useLanguageContext';

const RootLayout = () => {
  const { isAuth } = useAuthContext();
  const { global } = useLanguageContext();
  const { open, content, handleClearModal } = useModal();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname && open) {
      handleClearModal();
    }
  }, [pathname]);

  return (
    <div className="min-h-screen w-full">
      {global && (
        <>
          {<Modal open={open}>{content}</Modal>}
          {!isAuth ? (
            <>
              <Outlet />
            </>
          ) : (
            <Outlet />
          )}
        </>
      )}
    </div>
  );
};
export default RootLayout;
