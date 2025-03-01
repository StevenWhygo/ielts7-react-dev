import { useEffect } from 'react';
import Button from '../../components/Button';
import useMobileMenu from '../../hooks/useMobileMenu';
import useMenuContext from '../../hooks/context/useMenuContext';

const ExpandBtn = ({ index }) => {
  const { btnRefs } = useMenuContext();
  const { handleClick } = useMobileMenu();

  const attributes = {
    className: 'expand__btn w-[3.2rem] h-12 border-l bg-red-400',
    ariaControls: 'navigation',
    ariaExpanded: 'false',
    ariaLabel: 'open submenu',
  };

  return (
    <button
      // <Button attributes={attributes} handler={(e) => handleSubmenu(e)} ref={expandIconRef}>
      name={`btn-${index}`}
      className="expand__btn w-[3.2rem] h-12 bg-stone-100"
      aria-controls="navigation"
      aria-expanded="false"
      aria-label="open submenu"
      onClick={() => handleClick(index)}
      ref={(el) => (btnRefs.current[index] = el)}
    >
      {
        <svg className="mx-auto" viewBox="0 0 100 100" width="30">
          <rect
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
          ></rect>
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
