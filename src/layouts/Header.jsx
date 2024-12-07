import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="width-full min-w-148 min-h-12 bg-slate-100 z-10">
      <div className="relative flex items-center">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
