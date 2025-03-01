import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Hamburger from './Hamburger';
import Language from './Language';
import SignIn from './SignIn';
import ShoppingCart from './ShoppingCart';
import useViewportContext from '../../hooks/context/useViewportContext';
import useTranslation from '../../hooks/useTranslation';
import useIcons from '../../hooks/useIcons';

const Navbar = () => {
  const { isMobile } = useViewportContext();
  const { translate } = useTranslation('global');
  const { fetchIcon } = useIcons();

  const style = {
    color: '#0C0A09',
    size: '100%',
  };

  return (
    <div className="ml-auto">
      <div className="flex items-center gap-x-4 w-full">
        <Language />
        <SignIn icon={fetchIcon('signin', style)} />
        <ShoppingCart icon={fetchIcon('cart', style)} />
        <Hamburger />
      </div>
      {isMobile ? (
        <nav className="absolute top-12 h-0 w-0 z-10">
          <MobileMenu options={translate('menu.public')} />
        </nav>
      ) : (
        <nav className="">
          <Menu />
        </nav>
      )}
    </div>
  );
};
export default Navbar;
