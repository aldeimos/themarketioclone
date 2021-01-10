import React from 'react';

import styles from './index.module.scss';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  ownStyles?: string;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, ownStyles = '' }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay} role="button" onClick={onClose} />
      <div className={styles.modal__content}>{children}</div>
    </div>
  );
};

export default Modal;
