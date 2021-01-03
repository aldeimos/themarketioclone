import React, { ReactElement } from 'react';

import styles from './index.module.scss';

interface OverlayProps {
  children: ReactElement;
  ownStyles?: string;
}

export const Overlay: React.FC<OverlayProps> = ({ children, ownStyles = '' }) => {
  return (
    <div className={`${ownStyles} ${styles.overlay}`}>
      <div className="container">{children}</div>
    </div>
  );
};

export default Overlay;
