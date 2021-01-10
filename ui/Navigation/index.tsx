import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import { AuthContext } from '../../services/context/AuthContext';
import { getMenCategories, getWomenCategories } from '../../store/selectors/sexCategory';
import MenuLink from '../MenuLink';
import Overlay from '../Overlay';
import SexCategoriesWrapper from '../SexCategoriesWrapper';
import UserMenuWrapper from '../UserMenuWrapper';
import styles from './index.module.scss';

interface NavigationProps {
  onOpen: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpen }) => {
  const { user, isUserLoaded } = useContext(AuthContext);
  const menCategory = useSelector((state: any) => getMenCategories(state));
  const womenCategory = useSelector((state: any) => getWomenCategories(state));

  const isUser =
    user && Object.keys(user).length ? (
      <div className={styles.navigation__userMenu}>
        <MenuLink linkHref="/messages" template="noHover">
          Сообщения
        </MenuLink>
        <div className={styles.navigation__userMenuAvatar}>
          <MenuLink linkHref={`/users/${user.id}`} template="noHover">
            <img src={user.avatar} />
          </MenuLink>
          <Overlay ownStyles={styles.navigation__overlay}>
            <UserMenuWrapper userId={user.id} />
          </Overlay>
        </div>
      </div>
    ) : (
      <button className={styles.navigation__itemLogin} type="button" onClick={onOpen}>
        Войти
      </button>
    );

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
        {isUserLoaded && <li className={styles.navigation__item}>{isUser}</li>}
      </ul>
    </nav>
  );
};

export default Navigation;
