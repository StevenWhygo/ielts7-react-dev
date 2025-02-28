import MobileMenu from './MobileMenu';
import Menu from './Menu';
import Hamburger from './Hamburger';
import SignIn from './SignIn';
import ShoppingCart from './ShoppingCart';
import useViewportContext from '../../hooks/context/useViewportContext';
import useTranslation from '../../hooks/useTranslation';

const Navbar = () => {
  const { isMobile } = useViewportContext();
  const { translate } = useTranslation('global');

  return (
    <div className="ml-auto">
      <div className="flex items-center gap-x-4 w-full">
        <SignIn />
        <ShoppingCart />
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
