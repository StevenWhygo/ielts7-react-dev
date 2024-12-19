import { forwardRef } from 'react';

const Button = forwardRef(function Button(props, ref) {
  const { children, handler = null, attributes } = props;

  const {
    id = 'button',
    className = 'button',
    type = 'button',
    ariaControls = false,
    ariaExpanded = false,
    ariaLabel = false,
  } = attributes;

  return (
    <button
      id={id}
      className={className}
      type={type}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      onClick={handler}
      ref={ref}
    >
      {children}
    </button>
  );
});
export default Button;
