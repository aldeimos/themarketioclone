import React from 'react';

import SortOptions from '../../components/SortOptions';
import styles from './index.module.scss';

const SearchContainer: React.FC = () => {
  return (
    <section className={styles.searchSection}>
      <SortOptions />
    </section>
  );
};

export default SearchContainer;
