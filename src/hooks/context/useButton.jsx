import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from './useCart';

const useButton = () => {
    const navigate = useNavigate();
    const [btnProps, setBtnProps] = useState(null);
    const [btnType, setBtnType] = useState(null);

    const {setUpdateCart} = useCart(); 


    useEffect(() => {

    }, [btnType]);
  return {setBtnType}
};
export default useButton;
