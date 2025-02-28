import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ExpandBtn from './ExpandBtn';
import Submenu from './Submenu';
import ListItem from '../../components/ListItem';
import useMenuContext from '../../hooks/useMobileMenu';
import useLang from '../../hooks/context/useLanguageContext';
import useTranslation from '../../hooks/useTranslation';

import { FiChevronDown } from 'react-icons/fi';
import { IconContext } from 'react-icons';

const MobileMenu = ({ options }) => {
  const { translate } = useTranslation('global');
  const { menuRef } = useMenuContext();

  return (
    <ul
      id="menu"
      className="menu w-full bg-slate-100 border-t border-slate-200"
      ref={menuRef}
    >
      {options.map((option, i) => {
        return (
          <ListItem
            key={i}
            style="flex items-center border-b border-slate-200"
            submenu={
              option.submenu
                ? {
                    button: <ExpandBtn index={i} />,
                    menu: <Submenu index={i} options={option.submenu} />,
                  }
                : null
            }
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
    </ul>
  );
};
export default MobileMenu;
