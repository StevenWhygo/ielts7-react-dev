import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="flex items-center w-full min-w-148 min-h-12 bg-slate-100">
      <div className="flex items-center w-full pl-2.5">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
