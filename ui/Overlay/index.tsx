import React from 'react';

import styles from './index.module.scss';

interface OverlayProps {
  children: React.ReactNode;
  ownStyles?: string;
}

const Overlay: React.FC<OverlayProps> = ({ children, ownStyles = '' }) => {
  return (
    <div className={`${ownStyles} ${styles.overlay}`}>
      <div className="container">{children}</div>
    </div>
  );
};

export default Overlay;
