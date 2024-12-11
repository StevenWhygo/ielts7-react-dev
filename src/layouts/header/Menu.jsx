import { NavLink } from 'react-router-dom';
import useNavContext from '../../hooks/contextHooks/useNavContext';
import menu from '../../data/MENU.json';

const Menu = () => {
  const { menuRef } = useNavContext();
  const { publicMenu } = menu;
  return (
    <ul
      id="menu"
      className="menu w-full bg-slate-100 border-t border-slate-200"
      ref={menuRef}
    >
      {publicMenu.map((option, i) => {
        return (
          <li key={i}>
            <NavLink
              className="block text-large border-b p-3 border-slate-200"
              to={option.route}
            >
              {option.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default Menu;
