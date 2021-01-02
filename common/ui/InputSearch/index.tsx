import React from 'react';

import searchIcon from '../../../public/icons/loop.svg';
import styles from './index.module.scss';

export const InputSearch: React.FC = () => {
  return (
    <label className={styles.inputSearch}>
      <span className={styles.inputSearch__icon}>
        <img src={searchIcon} width={12} height={12} alt="Лупа" />
      </span>
      <input className={`${styles.inputSearch__input} input-focused`} placeholder="Поиск" />
    </label>
  );
};

export default InputSearch;
