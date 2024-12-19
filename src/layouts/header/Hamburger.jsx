import Button from '../../components/Button';
import useNavContext from '../../hooks/contextHooks/useNavContext';
import useNavIcon from '../../hooks/useNavIcon';

const Hamburger = () => {
  const { hamburgerRef, openHamburger } = useNavContext();
  const { handleHamburger } = useNavIcon();

  const attributes = {
    id: 'hamburger',
    className: 'hamburger',
    ariaControls: 'navigation',
    ariaExpanded: 'false',
    ariaLabel: 'open menu',
  };

  const handleClick = () => {
    handleHamburger(!openHamburger);
  };

  return (
    <Button attributes={attributes} handler={handleClick} ref={hamburgerRef}>
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
    </Button>
  );
};
export default Hamburger;
