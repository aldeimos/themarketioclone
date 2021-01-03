import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

interface NewestItemsProps {
  title: string;
  categoryName: string;
}

export const NewestItems: React.FC<NewestItemsProps> = ({ title, categoryName }) => {
  return (
    <div>
      <div className="container">
        <div className={styles.newestItems__wrapper}>
          <Link href={`/search?sex=${categoryName}`}>
            <a className={styles.newestItems__subtitle}>{title}</a>
          </Link>
          <div className={styles.newestItems__column_left}>контент каталога</div>
          <div className={styles.newestItems__column_right}>контент блога</div>
        </div>
      </div>
    </div>
  );
};

export default NewestItems;
