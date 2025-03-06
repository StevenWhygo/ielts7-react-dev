import { forwardRef } from 'react';
import Icon from './Icon';

const Button = forwardRef(function Button(props, ref) {
  const {
    value = '',
    name = '',
    type = 'button',
    className = '',
    ariaControls = false,
    ariaExpanded = false,
    ariaLabel = false,
    handleClick = null,
  } = props;

  return (
    <button
      className={className}
      type={type}
      name={name}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      onClick={handleClick}
      ref={ref}
    >
      {value}
    </button>
  );
});
export default Button;
