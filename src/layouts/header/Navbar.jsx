import MobileMenu from './MobileMenu';
import Menu from './Menu';
import Hamburger from './Hamburger';
import SignIn from './SignIn';
import ShoppingCart from './ShoppingCart';
import useViewport from '../../hooks/context/useViewport';

const Navbar = () => {
  const { isMobile } = useViewport();
  return (
    <div className="ml-auto">
      <div className="flex items-center gap-x-4 w-full">
        <SignIn />
        <ShoppingCart />
        <Hamburger />
      </div>
      {isMobile ? (
        <nav className="absolute top-12 h-0 w-0 z-10">
          <MobileMenu />
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
