import React from 'react';

import { footerLinksSet } from '../../../common/constants/_navigation';
import MenuLink from '../MenuLink';
import Socials from '../Socials';
import styles from './index.module.scss';

const Footer: React.FC = () => {
  const links = footerLinksSet.map((link) => (
    <MenuLink key={link.link} linkHref={link.link} template="footer">
      {link.label}
    </MenuLink>
  ));
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className="container">
          <div className={styles.footer__info}>{links}</div>
          <div className={styles.footer__subinfo}>
            <p>themarket, 2020</p>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
