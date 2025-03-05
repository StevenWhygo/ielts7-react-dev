import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';

const ShoppingCart = ({ icon }) => {
  const navigate = useNavigate();

  return (
    <button
      id="cart"
      className="flex items-center justify-center w-full h-full bg-transparent"
      type="button"
      title="Login"
      onClick={() => navigate('/cart')}
    >
      <Icon {...icon} />
    </button>
  );
};

export default ShoppingCart;