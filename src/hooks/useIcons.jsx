import { IconContext } from 'react-icons';
import icons from './services/icons';

const useIcons = () => {
    const fetchIcon = (type, value) => {
        return (
            <IconContext.Provider
                value={{...value}}
            >
                {icons[type]}
            </IconContext.Provider>
        )
    }
  return {fetchIcon};
};
export default useIcons;
