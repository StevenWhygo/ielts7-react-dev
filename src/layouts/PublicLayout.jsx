import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import useTranslation from '../hooks/useTranslation';

const PublicLayout = () => {
  const { translate } = useTranslation('global');
  return (
    <div className="flex flex-col h-full min-h-screen">
      <Header />
      <Outlet />
      <Footer sections={translate('footer')} />
    </div>
  );
};
export default PublicLayout;
