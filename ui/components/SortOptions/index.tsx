import { useRouter } from 'next/router';
import React from 'react';

import Button from '../Button';
import styles from './index.module.scss';

const SortOptions: React.FC = () => {
  const router = useRouter();
  const { asPath } = router;

  const handleSortOptionClick = (value) => {
    let currentUrl = asPath;
    const sortParamIndex = currentUrl.indexOf('&sort');
    currentUrl = currentUrl.slice(0, sortParamIndex);
    router.replace(`${currentUrl}&sort=${value}`);
  };

  const handleCleanUpClick = () => {
    router.replace('/search');
  };

  return (
    <div className={styles.sortOptions}>
      <span className={styles.sortOptions__prefix}>Сортировать:</span>
      <ul className={styles.sortOptions__list}>
        <li
          className={`${styles.sortOptions__item} ${
            asPath.includes('-searchIndexDate') ? styles.active : ''
          }`}>
          <Button
            template="linkLike"
            disabled={asPath.includes('-searchIndexDate')}
            onClick={() => handleSortOptionClick('-searchIndexDate')}>
            по дате
          </Button>
        </li>
        <li
          className={`${styles.sortOptions__item} ${
            asPath.includes('sort=price') ? styles.active : ''
          }`}>
          <Button
            template="linkLike"
            disabled={asPath.includes('sort=price')}
            onClick={() => handleSortOptionClick('price')}>
            по возрастанию
          </Button>
        </li>
        <li
          className={`${styles.sortOptions__item} ${
            asPath.includes('-price') ? styles.active : ''
          }`}>
          <Button
            template="linkLike"
            disabled={asPath.includes('-price')}
            onClick={() => handleSortOptionClick('-price')}>
            по убыванию
          </Button>
        </li>
        <li
          className={`${styles.sortOptions__item} ${
            asPath.includes('-likesCount') ? styles.active : ''
          }`}>
          <Button
            template="linkLike"
            disabled={asPath.includes('-likesCount')}
            onClick={() => handleSortOptionClick('-likesCount')}>
            по популярности
          </Button>
        </li>
      </ul>
      <div className={styles.sortOptions__cleanUp}>
        <Button template="linkLike" onClick={handleCleanUpClick}>
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export default SortOptions;
