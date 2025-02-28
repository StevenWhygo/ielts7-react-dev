const ListItem = ({ children, style, submenu }) => {
  return (
    <>
      <li className={style}>
        {children}
        {submenu && submenu.button}
      </li>
      {submenu && submenu.menu}
    </>
  );
};
export default ListItem;
