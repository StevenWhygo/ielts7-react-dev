import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

useContext
const useLanguageContext = () => {
  return useContext(LanguageContext)
};
export default useLanguageContext;
