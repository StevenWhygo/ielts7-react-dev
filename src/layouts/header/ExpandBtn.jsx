import { useState, useEffect, useRef } from 'react';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import useSubmenu from '../../hooks/useSubmenu';
import useMenuContext from '../../hooks/context/useMenuContext';
const ExpandBtn = ({ index }) => {
  const { currentIndex, previousIndex, delay, btnRefs, submenuRefs } =
    useMenuContext();
  const { handleClick } = useSubmenu();
  const ExpandIcon = ({ value }) => {
    const { size, color } = value;

    return (
      <svg fill={color} viewBox="0 0 100 100" width="30" fontSize={size}>
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
    );
  };

  useEffect(() => {
    if (currentIndex === index) {
      // is current : open
      if (previousIndex === -1) {
        btnRefs.current[index].setAttribute('aria-expanded', 'true');
        submenuRefs.current[index].style.maxHeight = '100vh';
      } else {
        setTimeout(() => {
          btnRefs.current[index].setAttribute('aria-expanded', 'true');
          submenuRefs.current[index].style.maxHeight = '100vh';
        }, delay);
      }
    } else if (previousIndex === index) {
      // is previous : close
      btnRefs.current[index].setAttribute('aria-expanded', 'false');
      submenuRefs.current[index].style.maxHeight = '0';
    } else {
      // reset : close
      btnRefs.current[index].setAttribute('aria-expanded', 'false');
      submenuRefs.current[index].style.maxHeight = '0';
    }
  }, [currentIndex, previousIndex]);

  const attributes = {
    className: 'expandbtn w-[3.2rem] h-12 border-l bg-red-400',
    ariaControls: 'navigation',
    ariaExpanded: 'false',
    ariaLabel: 'open submenu',
  };

  return (
    <button
      name={`btn-${index}`}
      className="expandbtn flex items-center justify-center w-12 h-12 bg-sky-800"
      aria-controls="navigation"
      aria-expanded="false"
      aria-label="open menu"
      onClick={() => handleClick(index)}
      ref={(el) => (btnRefs.current[index] = el)}
    >
      <ExpandIcon value={{ size: '100%', color: '#FAFAF9' }} />
    </button>
  );
};
export default ExpandBtn;
