import { Link } from 'react-router-dom';
import mainLogo from '../../assets/img/logo.png';
const Logo = () => {
  return (
    <Link className="flex items-center min-w-12 max-w-32 mr-auto" to="/">
      <img className="w-full" src={mainLogo} alt="IELTS7 Taipei logo" />
    </Link>
  );
};
export default Logo;
