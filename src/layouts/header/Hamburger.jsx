import Button from '../../components/Button';
import useNavContext from '../../hooks/contextHooks/useNavContext';
import useNavButton from '../../hooks/useNavButton';

const Hamburger = () => {
  const { hamburgerRef, openHamburger } = useNavContext();
  const { handleHamburger } = useNavButton();

  const attributes = {
    id: 'hamburger',
    className: 'hamburger',
    type: 'button',
    ariaControls: 'navigation',
    ariaExpanded: 'false',
  };

  return (
    <Button
      attributes={attributes}
      handler={() => handleHamburger(!openHamburger)}
      ref={hamburgerRef}
    >
      {
        <svg
          className="hamburger"
          fill="var(--clr-grey)"
          viewBox="0 0 100 100"
          width="30"
        >
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
