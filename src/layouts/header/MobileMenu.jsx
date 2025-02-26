import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ExpandBtn from './ExpandBtn';
import Submenu from './Submenu';
import ListItem from '../../components/ListItem';
import useMobileMenu from '../../hooks/useMobileMenu';
import useLang from '../../hooks/context/useLang';
import useTranslation from '../../hooks/useTranslation';

import { FiChevronDown } from 'react-icons/fi';
import { IconContext } from 'react-icons';

const MobileMenu = () => {
  const [icon, setIcon] = useState(null);
  const { translate } = useTranslation('global');
  const { menuRef } = useMobileMenu();

  return (
    <ul
      id="menu"
      className="menu w-full bg-slate-100 border-t border-slate-200"
      ref={menuRef}
    >
      {translate('menu.public').map((option, i) => {
        return (
          <ListItem
            key={i}
            style={'flex items-center border-b border-slate-200'}
            options={option.submenu && option.submenu}
          >
            <NavLink
              className="flex-1 min-h-12 h-full text-xl pl-3 leading-[3rem]"
              to={option.url}
            >
              {option.text}
            </NavLink>
            {option.submenu && <ExpandBtn />}
          </ListItem>
        );
      })}
    </ul>
  );
};
export default MobileMenu;
