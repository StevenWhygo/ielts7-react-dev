import { useEffect } from 'react';
import useLang from './context/useLang';

const useTranslation = (type) => {
    const {global} = useLang();

    const c = (t, s) => {
        let r = t
        s.split('.').forEach((e, i) => {
            r = r[e]
        });
        return r
    }

    const translate = (str) => {
       switch (type) {
        case 'global':
            return c(global, str)
        default:
            break;
       }
    }
  return {translate} 
};
export default useTranslation;
