import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

export const NewestItems = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.newestItems__wrapper}>
          <Link href="/search?sex=men">
            <a className={styles.newestItems__subtitle}>Новое в мужском</a>
          </Link>
          <div className={styles.newestItems__column_left}>контент каталога</div>
          <div className={styles.newestItems__column_right}>контент блога</div>
        </div>
      </div>
    </div>
  );
};

export default NewestItems;
