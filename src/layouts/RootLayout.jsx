import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <div id="root-layout" className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default RootLayout;
