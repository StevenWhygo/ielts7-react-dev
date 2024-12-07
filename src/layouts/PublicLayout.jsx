import { Outlet } from 'react-router-dom';
import Header from './Header';
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
