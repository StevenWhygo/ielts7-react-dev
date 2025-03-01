import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({ icon }) => {
  const navigate = useNavigate();
  console.log(icon);

  return (
    <button
      id="signin"
      className="signin-btn flex items-center justify-center w-7 h-7 bg-transparent hover:opacity-80"
      type="button"
      title="Login"
      onClick={() => navigate('/cart')}
    >
      {icon}
    </button>
  );
};

export default ShoppingCart;
