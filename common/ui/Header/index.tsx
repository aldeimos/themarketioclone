import React from 'react';

import logo from '../../../public/icons/logo_header.svg';
import InputSearch from '../InputSearch';
import Navigation from '../Navigation';
import styles from './index.module.scss';

const Header: React.FC = () => {
  return (
    <header className={`header ${styles.header}`}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__wrapper}>
          <img src={logo} alt="Лого" width={80} height={12} />
          <div className={styles.header__search}>
            <InputSearch />
          </div>
          <div className={styles.header__nav}>
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
