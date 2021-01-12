import React from 'react';

import styles from './index.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e) => void;
  type?: 'button' | 'submit' | 'reset';
  template?: string;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  template = 'default',
  type = 'button',
  disabled = false,
  onClick
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[`button_${template}`]}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
