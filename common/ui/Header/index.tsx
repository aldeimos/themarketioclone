import React from 'react';
import { useSelector } from 'react-redux';

import logo from '../../../public/icons/logo_header.svg';
import { getMenCategories } from '../../../store/selectors/sexCategory';
import InputSearch from '../InputSearch';
import Navigation from '../Navigation';
import styles from './index.module.scss';

export const Header: React.FC = () => {
  const menCategories = useSelector((state: any) => getMenCategories(state));

  console.log(menCategories);

  return (
    <header className={styles.header}>
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
