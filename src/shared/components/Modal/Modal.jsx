import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { ReactComponent as CrossIcon } from '../../../images/cross-small.svg';
import { BackDrop, ModalWrapper, CloseButton } from './Modal.styled';

const modalContainer = document.getElementById('modal-root');

const Modal = ({ children, handleClick }) => {
  const handleCloseOnEsc = e => {
    if (e.code !== 'Escape') return;
    handleClick();
  };

  const handleCloseBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    handleClick();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseOnEsc);

    return () => window.removeEventListener('keydown', handleCloseOnEsc);
  }, []);

  return createPortal(
    <BackDrop onClick={handleCloseBackdropClick}>
      <ModalWrapper>
        <CloseButton onClick={handleClick}>
          <CrossIcon />
        </CloseButton>
        {children}
      </ModalWrapper>
    </BackDrop>,
    modalContainer
  );
};

Modal.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
