import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';

const SignIn = ({ icon }) => {
  const navigate = useNavigate();

  return (
    <button
      id="signin"
      className="signin-btn flex items-center justify-center w-7 h-7 bg-transparent hover:opacity-80"
      type="button"
      title="Login"
      onClick={() => navigate('/signin')}
    >
      {icon}
    </button>
  );
};

export default SignIn;
