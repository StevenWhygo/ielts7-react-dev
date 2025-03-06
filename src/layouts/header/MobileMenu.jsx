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
      className="menu w-full bg-slate-100 border-t border-slate-100"
      ref={menuRef}
    >
      <>
        {options.map((option, i) => {
          return (
            <ListItem
              key={i}
              index={i}
              style="relative flex items-center bg-slate-100 h-12"
              submenu={option.submenu ? option.submenu : null}
            >
              <NavLink
                className="flex-1 h-12 text-xl font-light pl-6 leading-[3rem] border-b border-slate-200"
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
