import Menu from './Menu';
import Hamburger from './Hamburger';
import SignIn from './SignIn';
import ShoppingCart from './ShoppingCart';

const Navbar = () => {
  return (
    <div className="ml-auto">
      <div className="flex items-center gap-x-4 w-full">
        <SignIn />
        <ShoppingCart />
        <Hamburger />
      </div>
      <nav className="absolute top-12 h-0 w-0">
        <Menu />
      </nav>
    </div>
  );
};
export default Navbar;
