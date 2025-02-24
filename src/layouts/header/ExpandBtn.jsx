import { useState, useRef } from 'react';
import Button from '../../components/Button';

const ExpandBtn = ({handleClick}) => {
const expandIconRef = useRef(null);
  const attributes = {
    className: 'expand w-[3.2rem] h-12 border-l bg-red-400',
    ariaControls: 'navigation',
    ariaExpanded: 'false',
    ariaLabel: 'open submenu',
  };

  const handleSubmenu = (e) => {
    console.log(e.target);
    
  }

  return (
    <Button attributes={attributes} handler={(e) => handleSubmenu(e)} ref={expandIconRef}>
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
    </Button>
  )
};
export default ExpandBtn;
