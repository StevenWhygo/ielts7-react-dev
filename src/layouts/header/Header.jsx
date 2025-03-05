import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="flex items-stretch w-full min-h-12 bg-slate-800">
      <div className="flex items-center w-full pl-2.5">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
