import { useContext } from 'react';
import { LangContext } from '../../contexts/LangContext';

useContext
const useLang = () => {
  return useContext(LangContext)
};
export default useLang;
