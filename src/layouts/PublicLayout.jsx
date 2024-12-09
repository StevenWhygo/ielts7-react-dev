import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';

const PublicLayout = () => {

  return (
    <div className="h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default PublicLayout;
