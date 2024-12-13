import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiShoppingCart } from 'react-icons/fi';

const ShoppingCart = () => {
  const navigate = useNavigate();

  return (
    <button
      id="signin"
      className="signin-btn flex items-center justify-center w-7 h-7 bg-transparent hover:opacity-80"
      type="button"
      title="Login"
      onClick={() => navigate('/cart')}
    >
      <IconContext.Provider
        value={{
          color: '#1F2937',
          size: '100%',
        }}
      >
        <FiShoppingCart />
      </IconContext.Provider>
    </button>
  );
};

export default ShoppingCart;
