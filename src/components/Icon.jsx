import { IconContext } from 'react-icons';
import icons from '../assets/utilities/icons';
const Icon = (props) => {
    const {type, value} = props
    
  return  (
    <IconContext.Provider
        value={{...value}}
    >
        {icons[type]}
    </IconContext.Provider>);
};
export default Icon;
