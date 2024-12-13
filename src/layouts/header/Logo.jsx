import { Link } from 'react-router-dom';
import mainLogo from '../../assets/img/logo.png';
const Logo = () => {
  return (
    <Link className="flex items-center min-h-11 min-w-12 mr-auto" to="/">
      <img className="w-5/12" src={mainLogo} alt="IELTS7 Taipei logo" />
    </Link>
  );
};
export default Logo;
