import { useState, useEffect, useRef } from 'react';
import Icon from '../../components/Icon';
import useSubmenu from '../../hooks/useSubmenu';
import useMenuContext from '../../hooks/context/useMenuContext';
const ExpandBtn = ({ index }) => {
  const { btnRefs } = useMenuContext();
  const { handleClick } = useSubmenu(index);

  return (
    <button
      name={`btn-${index}`}
      className="expandbtn flex items-center justify-center w-12 h-12 bg-slate-100 border-b border-slate-200"
      aria-controls="navigation"
      aria-expanded="false"
      aria-label="open submenu"
      onClick={() => handleClick(index)}
      ref={(el) => (btnRefs.current[index] = el)}
    >
      <svg fill="#1D293D" viewBox="0 0 100 100" width="30">
        {/* <svg fill="#F1F5F9" viewBox="0 0 100 100" width="30"> */}
        <rect
          className="line left"
          width="50"
          height="12"
          x="30"
          y="60"
          rx="5"
        ></rect>
        <rect
          className="line right"
          width="50"
          height="12"
          x="20"
          y="60"
          rx="5"
        ></rect>
      </svg>
    </button>
  );
};
export default ExpandBtn;
