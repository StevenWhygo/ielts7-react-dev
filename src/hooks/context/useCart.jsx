import { useState, useEffect } from 'react';
const useCart = () => {
    const [updateCart, setUpdateCart] = useState(null);

    useEffect(() => {
        // console.log(updateCart);
        
    }, [updateCart])
    
  return {setUpdateCart}
};
export default useCart;
