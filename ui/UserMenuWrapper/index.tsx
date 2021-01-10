import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

import { getUserLogout } from '../../store/actions/user';
import Button from '../Button';
import styles from './index.module.scss';

interface UserMenuWrapperProps {
  userId: string;
}

const UserMenuWrapper: React.FC<UserMenuWrapperProps> = ({ userId }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    getUserLogout()(dispatch);
  };

  return (
    <ul className={styles.userMenu}>
      <li className={styles.userMenu__item}>
        <Link href={`/users/${userId}?tab=1`}>
          <a className={styles.userMenu__link}>Мои объявления</a>
        </Link>
      </li>
      <li className={styles.userMenu__item}>
        <Link href={`/users/${userId}?tab=2`}>
          <a className={styles.userMenu__link}>Избранное</a>
        </Link>
      </li>
      <li className={styles.userMenu__item}>
        <Link href={`/users/${userId}?tab=3`}>
          <a className={styles.userMenu__link}>Мои покупки</a>
        </Link>
      </li>
      <li className={styles.userMenu__item}>
        <Link href={`/users/${userId}?tab=4`}>
          <a className={styles.userMenu__link}>Мои продажи</a>
        </Link>
      </li>
      <li className={styles.userMenu__item}>
        <Link href={`/users/${userId}?tab=5`}>
          <a className={styles.userMenu__link}>Настройки</a>
        </Link>
      </li>
      <li className={styles.userMenu__item}>
        <Button onClick={handleLogout} template="linkLike">
          Выйти
        </Button>
      </li>
    </ul>
  );
};

export default UserMenuWrapper;
