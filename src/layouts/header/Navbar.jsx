// import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Hamburger from './Hamburger';
import Language from './Language';
import SignIn from './SignIn';
import ShoppingCart from './ShoppingCart';
import useViewportContext from '../../hooks/context/useViewportContext';
import useTranslation from '../../hooks/useTranslation';
const iconStyle = {
  color: '#F1F5F9',
  size: '30px',
};
const Navbar = () => {
  const { isMobile } = useViewportContext();
  const { translate } = useTranslation('global');

  return (
    <div className="ml-auto h-full">
      <div className="navbar">
        <Language />
        <SignIn icon={{ type: 'signin', value: iconStyle }} />
        <ShoppingCart icon={{ type: 'cart', value: iconStyle }} />
        <Hamburger />
      </div>
      {isMobile ? (
        <nav className="absolute top-12 h-0 w-0 z-10">
          <MobileMenu options={translate('menu.public')} />
        </nav>
      ) : (
        <nav className="">{/* <Menu /> */}</nav>
      )}
    </div>
  );
};
export default Navbar;
