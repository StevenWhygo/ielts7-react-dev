import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import Modal from '../features/modal/Modal';
import useModal from '../features/modal/hook/useModal';
import useAuth from '../hooks/context/useAuth';
import useLang from '../hooks/context/useLang';

const RootLayout = () => {
  const { isAuth } = useAuth();
  const { global } = useLang();
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
