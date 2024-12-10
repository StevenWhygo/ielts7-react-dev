import { forwardRef } from 'react';

const Button = forwardRef(function Button(props, ref) {
  const { children, handler = null, attributes } = props;
  // console.log(props);

  const {
    id = 'button',
    className = 'button',
    type = 'button',
    ariaControls = false,
    ariaExpanded = false,
  } = attributes;

  return (
    <button
      id={id}
      className={className}
      type={type}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      onClick={handler}
      ref={ref}
    >
      {children}
    </button>
  );
});
export default Button;
