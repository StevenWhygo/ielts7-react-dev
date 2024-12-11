import Menu from './Menu';
import Hamburger from './Hamburger';
const Navbar = () => {
  return (
    <div className="ml-auto">
      <div className="flex items-center gap-x-6 w-full">
        <Hamburger />
      </div>
      <nav className="absolute top-12 h-0 w-0">
        <Menu />
      </nav>
    </div>
  );
};
export default Navbar;
