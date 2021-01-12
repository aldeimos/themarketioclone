import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import { getEntity } from '../../../store/selectors/abstract';
import styles from './index.module.scss';

interface BlogPostProps {
  itemId: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ itemId }) => {
  const post = useSelector((state: any) => getEntity(state, { entityName: 'blog', itemId }));
  const { image, text, date } = post;

  return (
    <Link href="/">
      <a className={styles.blogPost}>
        <img src={image} width={65} height={65} alt={`Обложка поста "${post.text}"`} />
        <div className={styles.blogPost__desc}>
          <h3>{text}</h3>
          <time>{date.split(',')[1]}</time>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
