import React from 'react';
import { useSelector } from 'react-redux';

import { getMenCategories, getWomenCategories } from '../../../store/selectors/sexCategory';
import MenuLink from '../MenuLink';
import Overlay from '../Overlay';
import SexCategoriesWrapper from '../SexCategoriesWrapper';
import styles from './index.module.scss';

const Navigation: React.FC = () => {
  const menCategory = useSelector((state: any) => getMenCategories(state));
  const womenCategory = useSelector((state: any) => getWomenCategories(state));

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={`${styles.navigation__item} ${styles.navigation__item_man}`}>
          <MenuLink linkHref="/search?sex=man">Мужское</MenuLink>
          <Overlay ownStyles={styles.navigation__overlay}>
            <SexCategoriesWrapper category={menCategory} />
          </Overlay>
        </li>
        <li className={`${styles.navigation__item} ${styles.navigation__item_women}`}>
          <MenuLink linkHref="/search?sex=women">Женское</MenuLink>
          <Overlay ownStyles={styles.navigation__overlay}>
            <SexCategoriesWrapper category={womenCategory} />
          </Overlay>
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
