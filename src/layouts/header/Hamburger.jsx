import { useRef } from 'react';
import Button from '../../components/Button';
import useMobileMenu from '../../hooks/useMobileMenu';
import useMenuContext from '../../hooks/context/useMenuContext';

const Hamburger = () => {
  const { hamburgerRef } = useMobileMenu();
  const { displayMenu, setDisplayMenu } = useMenuContext();

  const attributes = {
    id: 'hamburger',
    className: 'hamburger',
    ariaControls: 'navigation',
    ariaExpanded: 'false',
    ariaLabel: 'open menu',
  };

  return (
    <button
      // attributes={attributes}
      onClick={() => setDisplayMenu(!displayMenu)}
      aria-expanded="false"
      aria-label="open menu"
      aria-controls="navigation"
      className="hamburger"
      id="hamburger"
      ref={hamburgerRef}
    >
      {
        <svg viewBox="0 0 100 100" width="30">
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
        </svg>
      }
    </button>
  );
};
export default Hamburger;
