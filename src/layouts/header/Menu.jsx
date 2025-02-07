import { useState, useRef, useEffect, createElement } from 'react';
import { NavLink } from 'react-router-dom';
import useNavContext from '../../hooks/context/useNav';
import useNavIcon from '../../hooks/useNavIcon';
import menu from '../../data/MENU.json';
import { FiChevronDown } from 'react-icons/fi';
import { IconContext } from 'react-icons';

const Menu = () => {
  const [icon, setIcon] = useState(null);
  const { menuRef } = useNavContext();
  const { handleMenu } = useNavIcon();
  const submenuRef = useRef();
  const { publicMenu } = menu;

  const handleClick = (e) => {};

  return (
    <ul
      id="menu"
      className="menu w-full bg-slate-100 border-t border-slate-200"
      onClick={() => {
        handleMenu();
      }}
      ref={menuRef}
    >
      {publicMenu.map((option, i) => {
        return (
          <li key={i}>
            {option.submenu ? (
              <>
                <span className="flex justify-between items-center text-xl border-b p-3 border-slate-200">
                  {option.label}
                  <IconContext.Provider
                    value={{
                      color: 'blue',
                      size: '34px',
                    }}
                  >
                    <button onClick={handleClick}>
                      <FiChevronDown />
                    </button>
                  </IconContext.Provider>
                </span>
                {/* <ul
                    id="submenu"
                    className="menu hidden w-full bg-slate-100 border-t border-slate-200"
                    ref={submenuRef}
                  >
                    {option.submenu.map((option, i) => {
                      <li key={i}>
                        <NavLink
                          className="block text-large border-b p-3 border-slate-200"
                          to={option.route}
                        >
                          {option.label}
                        </NavLink>
                      </li>;
                    })}
                  </ul> */}
              </>
            ) : (
              <NavLink
                className="block text-xl border-b p-3 border-slate-200"
                to={option.route}
              >
                {option.label}
              </NavLink>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default Menu;
