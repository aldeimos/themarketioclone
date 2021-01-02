import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

interface MenuLinkProps {
  children: React.ReactNode;
  linkHref: string;
  template?: string;
}

// TODO template one of templates type

export const MenuLink: React.FC<MenuLinkProps> = ({ children, linkHref, template = 'default' }) => {
  return (
    <Link href={linkHref}>
      <a className={`${styles.link} ${styles[`link_${template}`]}`}>{children}</a>
    </Link>
  );
};

export default MenuLink;
