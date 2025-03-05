import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useMenuContext from '../../hooks/context/useMenuContext';

const Submenu = ({ index, options }) => {
  const { submenuRefs } = useMenuContext();

  return (
    <ul
      className="submenu w-full bg-slate-100"
      ref={(el) => (submenuRefs.current[index] = el)}
    >
      {options.map((option, i) => {
        return (
          <li
            key={i}
            className="flex items-center border-b  border-slate-100 bg-slate-200"
          >
            <NavLink className="flex-1 min-h-12 pl-3" to={option.url}>
              <div className="pl-4 leading-[3rem] text-lg h-full flex items-center gap-4">
                {option.image && (
                  <img
                    className="max-w-8 h-fit aspect-square rounded-full bg-no-repeat bg-slate-100"
                    src={option.image.src}
                    alt={option.image.alt}
                  />
                )}
                {option.text}
              </div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default Submenu;
