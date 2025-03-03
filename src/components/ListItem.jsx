import Submenu from '../layouts/header/Submenu';
import ExpandBtn from '../layouts/header/ExpandBtn';

const ListItem = ({ children, index, style, submenu = null }) => {
  return (
    <>
      {submenu ? (
        <>
          <li className={style}>
            {children}
            <ExpandBtn index={index} />
          </li>
          <Submenu index={index} options={submenu} />
        </>
      ) : (
        <li className={style}>{children}</li>
      )}
    </>
  );
};
export default ListItem;
