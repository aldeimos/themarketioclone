import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import nav_arrow from '../../public/icons/nav_arrow_right.svg';
import { getEntityIds } from '../../store/selectors/abstract';
import BlogPost from '../BlogPost';
import MenuLink from '../MenuLink';
import styles from './index.module.scss';

const Blog: React.FC = () => {
  const postsIds = useSelector((state: any) => getEntityIds(state, { entityName: 'blog' }));

  const posts = postsIds.slice(0, 5).map((postId) => <BlogPost key={postId} itemId={postId} />);

  return (
    <div className={styles.blog}>
      <Link href="/blog">
        <h2>
          <a className={styles.blog__title}>Блог</a>
        </h2>
      </Link>
      <div className={styles.blog__content}>{posts}</div>
      <div className={styles.blog__footer}>
        <MenuLink linkHref="/blog" template="showMore">
          Показать всё
          <img src={nav_arrow} alt="Иконка указателя" />
        </MenuLink>
      </div>
    </div>
  );
};

export default Blog;
