import React from 'react';

import styles from './index.module.scss';

interface SpinnerProps {
  ownStyles?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ ownStyles = '' }) => {
  return <div className={styles.spinner} />;
};

export default Spinner;
