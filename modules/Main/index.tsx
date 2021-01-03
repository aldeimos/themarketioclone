import React from 'react';

import Header from '../../common/ui/Header';
import NewestItems from '../../common/ui/NewestItems';
import styles from './index.module.scss';

export const Main: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.main__wrapper}>
        <NewestItems title="Новое в мужском" categoryName="men" />
        <NewestItems title="Новое в женском" categoryName="women" />
      </div>
    </>
  );
};

export default Main;
