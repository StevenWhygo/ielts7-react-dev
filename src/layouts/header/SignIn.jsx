import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <button
      id="signin"
      className="signin-btn flex items-center justify-center w-7 h-7 bg-transparent hover:opacity-80"
      type="button"
      title="Login"
      onClick={() => navigate('/signin')}
    >
      <IconContext.Provider
        value={{
          color: '#1F2937',
          size: '100%',
        }}
      >
        <FaUserCircle />
      </IconContext.Provider>
    </button>
  );
};

export default SignIn;
