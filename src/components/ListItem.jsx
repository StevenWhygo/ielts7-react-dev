import Submenu from '../layouts/header/Submenu';

const ListItem = ({children, style, options = null}) => {
  return (
    <>
      <li className={style}>{children}</li>
      {options && <Submenu options={options} />}
    </>
  );
};
export default ListItem;
