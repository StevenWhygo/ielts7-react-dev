import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import Modal from '../features/modal/Modal';
import useModal from '../features/modal/hook/useModal';
import useAuth from '../hooks/context/useAuth';

const RootLayout = () => {
  const { isAuth } = useAuth();
  const { open, content, handleClearModal } = useModal();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname && open) {
      handleClearModal();
    }
  }, [pathname]);

  return (
    <div id="wrapper" className="flex flex-col min-h-screen w-full">
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
    </div>
  );
};
export default RootLayout;
