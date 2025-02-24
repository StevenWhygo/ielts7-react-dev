import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

useRef
const Submenu = ({options}) => {
    const submenuRef = useRef(null);

  return (
    <ul
        className="submenu hidden w-full bg-slate-100 border-t border-slate-200"
        ref={submenuRef}
    >
        {options.map((option, i) => {
        <li
            key={i}
            className="flex items-center border-b  border-slate-200"
        >
            <NavLink
            className="flex-1 min-h-12 text-xl pl-3"
            to={option.url}
            >
            <div className="leading-[3rem] h-full">
                {option.text}
            </div>
            </NavLink>
        </li>;
        })}
    </ul> 
  );
};
export default Submenu;
