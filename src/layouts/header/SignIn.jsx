import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const SignIn = ({ icon }) => {
  const navigate = useNavigate();

  return (
    <button
      id="signin"
      className="flex items-center justify-center w-7 h-7 bg-transparent"
      type="button"
      title="Login"
      onClick={() => navigate('/signin')}
    >
      <Icon {...icon} />
    </button>
  );
};

export default SignIn;
