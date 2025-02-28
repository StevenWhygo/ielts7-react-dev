import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import useViewportContext from '../../hooks/context/useViewportContext';
import useMenuContext from '../../hooks/context/useMenuContext';

const Submenu = ({ index, options }) => {
  const { isMobile } = useViewportContext();
  const { submenuRefs } = useMenuContext();

  return (
    <ul
      id={`subemenu-${index}`}
      className="submenu w-full bg-slate-100"
      ref={(el) => (submenuRefs.current[index] = el)}
    >
      {options.map((option, i) => {
        return (
          <li
            key={i}
            className="flex items-center border-b  border-slate-200 bg-green-300"
          >
            <NavLink className="flex-1 min-h-12 text-xl pl-3" to={option.url}>
              <div className="leading-[3rem] h-full">{option.text}</div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default Submenu;
