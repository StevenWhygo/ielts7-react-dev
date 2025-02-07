import { createPortal } from 'react-dom';

const Modal = ({ children, open }) => {
  if (!open) {
    // Enable scrollimg
    document.body.classList.remove('scroll-none');
    return null;
  }
  // Prevent scrolling
  document.body.classList.add('scroll-none');

  return createPortal(
    <div className="overlay">
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
