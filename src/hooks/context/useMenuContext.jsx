import { useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';

const useMenuContext = () => {
  return useContext(MenuContext);
};

export default useMenuContext;