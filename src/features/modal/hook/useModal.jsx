import { useState, useEffect, useReducer } from 'react';
import { modalReducer } from '../services/modalReducer';

const initialState = {
  content: null,
  open: false,
  modal: null,
};
const useModal = () => {
  const [showModal, setShowModal] = useState(null);
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const { content, open, modal } = state || {};

  function handleOpenModal() {
    dispatch({
      type: 'open-modal',
    });
  }

  function handleSetModal(modal) {
    dispatch({
      type: 'set-modal',
      payload: modal,
    });
  }

  function handleClearModal() {
    dispatch({
      type: 'clear-modal',
      payload: initialState,
    });
  }

  function handleModalContent(content) {
    dispatch({
      type: 'set-content',
      payload: content,
    });
  }

  return {
    open,
    modal,
    content,
    handleClearModal,
    handleModalContent,
    handleSetModal,
    handleOpenModal,
  };
};
export default useModal;
