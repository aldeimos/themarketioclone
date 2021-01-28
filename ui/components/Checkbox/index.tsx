import React from 'react';

import styles from './index.module.scss';

interface CheckboxProps {
  text: string;
  icon?: JSX.Element | JSX.Element[];
  onChange: (e: any) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ text, icon, onChange }) => {
  const handleChange = (e: any) => {
    onChange(e);
  };

  return (
    <div className={styles.checkbox}>
      <input className={styles.checkbox__input} type="checkbox" onChange={handleChange} id={text} />
      <label className={styles.checkbox__label} htmlFor={text}>
        {icon}
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
