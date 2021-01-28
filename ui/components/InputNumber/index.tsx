import React from 'react';

import styles from './index.module.scss';

interface InputNumberProps {
  prefix?: string;
  value: string;
  onChange: (e) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({ prefix, value, onChange }) => {
  return (
    <div className={styles.inputNumber}>
      {prefix ? <span className={styles.inputNumber__prefix}>{prefix}</span> : null}
      <input
        className={`${styles.inputNumber__input} ${prefix ? styles.inputNumber__input_prefix : ''}`}
        type="number"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputNumber;
