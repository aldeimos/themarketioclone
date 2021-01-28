import React from 'react';

import FilterOptions from '../../components/FilterOptions';
import SortOptions from '../../components/SortOptions';
import styles from './index.module.scss';

const SearchContainer: React.FC = () => {
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchSection__sort}>
        <SortOptions />
      </div>
      <div className={styles.searchSection__wrapper}>
        <div className={styles.searchSection__leftColumn}>content</div>
        <div className={styles.searchSection__rightColumn}>
          <FilterOptions />
        </div>
      </div>
    </section>
  );
};

export default SearchContainer;
