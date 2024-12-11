import { NavLink } from 'react-router-dom';
import useNavContext from '../../hooks/contextHooks/useNavContext';
import menu from '../../data/MENU.json';

const Menu = () => {
  const { menuRef } = useNavContext();
  const { publicMenu } = menu;
  return (
    <ul id="menu" className="menu w-full bg-slate-100" ref={menuRef}>
      {publicMenu.map((option, i) => {
        return (
          <li key={i}>
            <NavLink className={option.style} to={option.route}>
              {option.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default Menu;
