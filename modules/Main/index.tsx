import React from 'react';

import Header from '../../common/ui/Header';
import NewestItems from '../../common/ui/NewestItems';
import styles from './index.module.scss';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className={styles.main__wrapper}>
            <div className={styles.main__leftColumn}>
              <NewestItems
                title="Новое в мужском"
                genderType="men"
                ownStyles={styles.main__indent}
              />
              <NewestItems title="Новое в женском" genderType="women" />
            </div>
            <div className={styles.main__rightColumn}>
              <div>blog</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
