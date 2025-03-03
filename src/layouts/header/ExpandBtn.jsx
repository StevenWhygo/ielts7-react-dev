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
      } else {
        setTimeout(() => {
          btnRefs.current[index].setAttribute('aria-expanded', 'true');
        }, delay);
      }
    } else if (previousIndex === index) {
      // is previous : close
      btnRefs.current[index].setAttribute('aria-expanded', 'false');
    } else {
      // reset : close
      btnRefs.current[index].setAttribute('aria-expanded', 'false');
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
      // <Button attributes={attributes} handler={(e) => handleSubmenu(e)} ref={expandIconRef}>
      name={`btn-${index}`}
      className="expandbtn w-[3.2rem] h-12 bg-stone-100"
      aria-controls="navigation"
      aria-expanded="false"
      aria-label="open submenu"
      onClick={() => handleClick(index)}
      ref={(el) => (btnRefs.current[index] = el)}
      // ref={btnRef}
    >
      {
        <svg className="mx-auto" viewBox="0 0 100 100" width="30">
          <rect
            className="line top"
            width="90"
            height="12"
            x="5"
            y="15"
            rx="5"
          ></rect>
          <rect
            className="line middle"
            width="90"
            height="12"
            x="5"
            y="45"
            rx="5"
          ></rect>
          <rect
            className="line bottom"
            width="90"
            height="12"
            x="5"
            y="75"
            rx="5"
          ></rect>
          {/* <rect
            className="line top"
            width="90"
            height="12"
            x="5"
            y="30"
            rx="5"
          ></rect>
          <rect
            className="line bottom"
            width="90"
            height="12"
            x="5"
            y="60"
            rx="5"
          ></rect> */}
          {/* <rect
            className="line bottom"
            width="90"
            height="12"
            x="5"
            y="75"
            rx="5"
          ></rect> */}
        </svg>
      }
      {/* </Button> */}
    </button>
  );
};
export default ExpandBtn;
