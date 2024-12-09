import { Link } from 'react-router-dom';
import mainLogo from '../../assets/img/logo.png';
const Logo = () => {
  return (
    <Link className="" to="/">
      <img className="w-3/12" src={mainLogo} alt="IELTS7 Taipei logo" />
    </Link>
  );
};
export default Logo;
