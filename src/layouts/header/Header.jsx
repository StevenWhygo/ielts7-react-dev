import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="width-full min-w-148  bg-slate-100 z-10">
      <div className="relative flex items-center min-h-12 px-2.5">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
