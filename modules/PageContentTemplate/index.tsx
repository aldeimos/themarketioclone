import React, { ReactNode } from 'react';

import styles from './index.module.scss';

interface PageContentTemplateProps {
  children: ReactNode;
}

const PageContentTemplate: React.FC<PageContentTemplateProps> = ({ children }) => {
  return (
    <main>
      <div className="container">
        <div className={styles.main__wrapper}>{children}</div>
      </div>
    </main>
  );
};

export default PageContentTemplate;
