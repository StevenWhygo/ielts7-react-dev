import Submenu from '../layouts/header/Submenu';

const ListItem = ({children, style, options = null}) => {
  return <li className={style}>{children}{options && <Submenu options={options} />}</li>;
};
export default ListItem;
