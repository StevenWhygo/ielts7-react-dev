import { forwardRef } from 'react';
import Icon from './Icon';

const btn = {
  cart: 'relative flex justify-center items-center w-full min-h-10 border-yellow bg-yellow-500 text-stone-900 text-base font-semibold rounded-sm',
  indicator: 'indicator',
  link: 'relative flex justify-center items-center w-full min-h-10 border-blue bg-sky-600 text-slate-50 text-base font-semibold rounded-sm',
};
const Button = forwardRef(function Button(props, ref) {
  const {
    layout = '',
    type = 'button',
    name = '',
    value = '',
    ariaControls = false,
    ariaExpanded = false,
    ariaLabel = false,
    handleClick = null,
    disabled = false,
  } = props;

  return (
    <button
      className={btn[layout]}
      type={type}
      name={name}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={handleClick}
      ref={ref}
    >
      {value}
    </button>
  );
});
export default Button;
