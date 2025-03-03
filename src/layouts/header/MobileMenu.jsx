import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ExpandBtn from './ExpandBtn';
import Submenu from './Submenu';
import ListItem from '../../components/ListItem';
import useMenu from '../../hooks/useMenu';

import { FiChevronDown } from 'react-icons/fi';
import { IconContext } from 'react-icons';

const MobileMenu = ({ options }) => {
  const { menuRef } = useMenu();

  return (
    <ul
      id="menu"
      className="menu w-full bg-slate-100 border-t border-slate-200"
      ref={menuRef}
    >
      <>
        {options.map((option, i) => {
          return (
            <ListItem
              key={i}
              index={i}
              style="relative flex items-center border-b border-slate-200"
              submenu={option.submenu ? option.submenu : null}
            >
              <NavLink
                className="flex-1 min-h-12 h-full text-xl pl-3 leading-[3rem]"
                to={option.url}
              >
                {option.text}
              </NavLink>
            </ListItem>
          );
        })}
      </>
    </ul>
  );
};
export default MobileMenu;
