import React from 'react';

import MenuLink from '../MenuLink';
import styles from './index.module.scss';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}>
          <MenuLink linkHref="/search?sex=man">Мужское</MenuLink>
        </li>
        <li className={styles.navigation__item}>
          <MenuLink linkHref="/search?sex=women">Женское</MenuLink>
        </li>
        <li className={styles.navigation__item}>
          <MenuLink linkHref="/how-secure-deal-works">Безопасная сделка</MenuLink>
        </li>
        <li className={styles.navigation__itemSell}>
          <MenuLink linkHref="/additem" template="buttonLike">
            Продать
          </MenuLink>
        </li>
        <li>
          <button className={styles.navigation__itemLogin} type="button">
            Войти
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
