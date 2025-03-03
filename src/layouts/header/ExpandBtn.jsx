import { useState, useEffect, useRef } from 'react';
import Button from '../../components/Button';
import useSubmenu from '../../hooks/useSubmenu';
import useMenuContext from '../../hooks/context/useMenuContext';

const ExpandBtn = ({ index }) => {
  const { currentIndex, previousIndex, delay, btnRefs, submenuRefs } =
    useMenuContext();
  const { handleClick } = useSubmenu();

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
      className="expandbtn min-w-12 min-h-12 bg-stone-100"
      aria-controls="navigation"
      aria-expanded="false"
      aria-label="open submenu"
      onClick={() => handleClick(index)}
      ref={(el) => (btnRefs.current[index] = el)}
    >
      {
        <svg className="mx-auto" viewBox="0 0 100 100" width="30">
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
      }
    </button>
  );
};
export default ExpandBtn;
