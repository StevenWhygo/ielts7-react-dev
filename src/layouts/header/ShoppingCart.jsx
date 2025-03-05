import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const ShoppingCart = ({ icon }) => {
  const navigate = useNavigate();

  return (
    <button
      id="signin"
      className="signin-btn flex items-center justify-center w-7 h-7 bg-transparent hover:opacity-80"
      type="button"
      title="Login"
      onClick={() => navigate('/cart')}
    >
      <Icon {...icon} />
    </button>
  );
};

export default ShoppingCart;